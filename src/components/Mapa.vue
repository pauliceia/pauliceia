<template>
  <div id="meu-mapa">

    <div id="popup"></div>
    <div class="slidercont">
      <input id="ex16b" type="text"/><br/>
    </div>

    <div class="input-group">
      <input type="text" class="form-control" placeholder="Ano" id="inputAno">
      <span class="input-group-btn">
                <button class="btn btn-default" type="button" id="buttonAno">Buscar</button>
            </span>
    </div>
  </div>
</template>

<script>
  /* global ol */
  import '../js/layerswitcher'
  import 'bootstrap-slider'

  import {
    overlayGroupBase,
    overlayGroup,
  } from '../js/map'

  export default {
    data () {
      return {
        name: 'OlMap',
        olmap: null,
        view: new ol.View({
          projection: 'EPSG:4326',
          center: [-46.63576816, -23.54308645],
          zoom: 14.98
        }),
        layersBase: {
          osm: new ol.layer.Tile({
            source: new ol.source.OSM(),
            visible: true,
            name: 'openstreetmap'
          })
        }
      }
    },
    mounted () {
      this.$root.olmap = new ol.Map({
        target: this.$el,
        controls: ol.control.defaults()
          .extend([
            new ol.control.FullScreen()
          ])
          .extend([
            new ol.control.ZoomToExtent({
              extent: (ol.proj.transform([
                -5193761.88770685, -2699705.64261725
              ], 'EPSG:3857', 'EPSG:4326'),
                ol.proj.transform([
                  -5189128.60899657, -2695954.23573690
                ], 'EPSG:3857', 'EPSG:4326'))
            })
          ]).extend([
            new ol.control.LayerSwitcher()
          ]),
        layers: [
          overlayGroupBase,
          overlayGroup
        ],
        view: this.view
      })

      overlayGroup.getLayers().push(
        new ol.layer.Tile({
          title: 'Sara Brasil',
          visible: true,
          source: new ol.source.TileWMS({
            url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/wms',
            params: {
              'FORMAT': 'image/png',
              'VERSION': '1.1.1',
              tiled: true,
              STYLES: '',
              LAYERS: 'pauliceia:saraBrasil30',
              tilesOrigin: 330937.3300521516 + ',' + 7393691.47872888
            }
          })
        })
      )

      //////////////////////////// SLIDER /////////////////////////////////////////////

      const slider = document.getElementById('ex16b')
      const button = document.getElementById('buttonAno')
      let ano = slider.value

      const anoI = ano[0] + ano[1] + ano[2] + ano[3]
      const anoF = ano[5] + ano[6] + ano[7] + ano[8]

      $('#ex16b').slider({
        min: 1920,
        max: 2018,
        value: [1900, 2018],
        focus: true,
        ticks: [1900, 1920, 1931, 2018],
        ticks_labels: ['1900', '1920', '1931', '2018'],
        ticks_positions: [0, 20, 40, 100],
        ticks_snap_bounds: 5,
      })

      //////////////////////////// ESTILO ICONE /////////////////////////////////////////////

      const iconStyle = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'https://openlayers.org/en/v4.4.2/examples/data/icon.png'
        }))
      })

      const streetsStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'blue',
          width: 3
        })
      })

      //////////////////////////// GEOJSON /////////////////////////////////////////////

      const vectorSourcePlaces = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        crossOriginKeyword: 'anonymous',
        crossOrigin: 'anonymous',
        url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/ows?service=WFS&version=1.1.1&request=GetFeature&typeName=pauliceia:places&maxFeatures=50&outputFormat=application/json'
      })

      const vectorSourceStreets = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        crossOriginKeyword: 'anonymous',
        crossOrigin: 'anonymous',
        url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/ows?service=WFS&version=1.1.1&request=GetFeature&typeName=pauliceia:streets&maxFeatures=50&outputFormat=application/json',
      })

      const featuresPlaces = vectorSourcePlaces.getFeatures()

      const featuresStreets = vectorSourceStreets.getFeatures()

      //////////////////////////// FILTRO PESQUISA /////////////////////////////////////////////

      button.onclick = function () {

        const inputAno = document.getElementById('inputAno')
        const anop = inputAno.value

        const filtered2 = featuresStreets.filter(function (featuresStreets) {
          let last_year2 = featuresStreets.get('last_year')
          if (last_year2 === null) last_year2 = 2018
          return featuresStreets.get('first_year') <= anop && last_year2 >= anop
        })

        const filtered = featuresPlaces.filter(function (featuresPlaces) {
          let last_year = featuresPlaces.get('last_year')
          if (last_year === null) last_year = 2018
          return featuresPlaces.get('first_year') <= anop && last_year >= anop
        })

        vectorSourceStreets.clear()

        vectorSourcePlaces.clear()

        const length2 = filtered2.length

        const length = filtered.length

        for (let i = 0; i < length2; i++) {
          vectorSourceStreets.addFeature(filtered2[i])
        }

        for (let i = 0; i < length; i++) {
          vectorSourcePlaces.addFeature(filtered[i])
        }

        const vectorLayerStreets = new ol.layer.Vector({
          title: 'Street',
          visible: true,
          source: vectorSourceStreets,
          style: streetsStyle
        })

        const vectorLayerPlaces = new ol.layer.Vector({
          title: 'Places',
          visible: true,
          source: vectorSourcePlaces,
          style: iconStyle
        })

        overlayGroup.getLayers().pop()

        overlayGroup.getLayers().pop()

        overlayGroup.getLayers().push(
          vectorLayerStreets
        )
        overlayGroup.getLayers().push(
          vectorLayerPlaces
        )
      }

      //////////////////////////// FILTRO TIMELINE /////////////////////////////////////////////

      const filtered2 = featuresStreets.filter(function (featuresStreets) {
        let last_year2 = featuresStreets.get('last_year')
        if (last_year2 === null) last_year2 = 2018
        return featuresStreets.get('first_year') <= anoF && last_year2 >= anoI
      })

      const filtered = featuresPlaces.filter(function (featuresPlaces) {
        let last_year = featuresPlaces.get('last_year')
        if (last_year === null) last_year = 2018
        return featuresPlaces.get('first_year') <= anoF && last_year >= anoI
      })

      vectorSourceStreets.clear()

      vectorSourcePlaces.clear()

      const length2 = filtered2.length

      const length = filtered.length

      for (let i = 0; i < length2; i++) {
        vectorSourceStreets.addFeature(filtered2[i])
      }

      for (let i = 0; i < length; i++) {
        vectorSourcePlaces.addFeature(filtered[i])
      }

      const vectorLayerStreets = new ol.layer.Vector({
        title: 'Street',
        visible: true,
        source: vectorSourceStreets,
        style: streetsStyle
      })

      const vectorLayerPlaces = new ol.layer.Vector({
        title: 'Places',
        visible: true,
        source: vectorSourcePlaces,
        style: iconStyle
      })

      slider.onchange = function () {

        ano = slider.value

        const anoI = ano[0] + ano[1] + ano[2] + ano[3]
        const anoF = ano[5] + ano[6] + ano[7] + ano[8]

        const filtered2 = featuresStreets.filter(function (featuresStreets) {
          let last_year2 = featuresStreets.get('last_year')
          if (last_year2 === null) last_year2 = 2018
          return featuresStreets.get('first_year') <= anoF && last_year2 >= anoI
        })

        const filtered = featuresPlaces.filter(function (featuresPlaces) {
          let last_year = featuresPlaces.get('last_year')
          if (last_year === null) last_year = 2018
          return featuresPlaces.get('first_year') <= anoF && last_year >= anoI
        })

        vectorSourceStreets.clear()

        vectorSourcePlaces.clear()

        const length2 = filtered2.length

        const length = filtered.length

        for (let i = 0; i < length2; i++) {
          vectorSourceStreets.addFeature(filtered2[i])
        }

        for (let i = 0; i < length; i++) {
          vectorSourcePlaces.addFeature(filtered[i])
        }

        const vectorLayerStreets = new ol.layer.Vector({
          title: 'Street',
          visible: true,
          source: vectorSourceStreets,
          style: streetsStyle
        })

        const vectorLayerPlaces = new ol.layer.Vector({
          title: 'Places',
          visible: true,
          source: vectorSourcePlaces,
          style: iconStyle
        })

        overlayGroup.getLayers().pop()

        overlayGroup.getLayers().pop()

        overlayGroup.getLayers().push(
          vectorLayerStreets
        )

        overlayGroup.getLayers().push(
          vectorLayerPlaces
        )

      }

      overlayGroup.getLayers().push(
        vectorLayerStreets
      )
      overlayGroup.getLayers().push(
        vectorLayerPlaces
      )

      /////////////////POPUP//////////////////////
      let element = document.getElementById('popup')

      let popup = new ol.Overlay({
        element: element,
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, -50]
      })

      map.addOverlay(popup)

      // display popup on click
      map.on('click', function (evt) {
        const feature = map.forEachFeatureAtPixel(evt.pixel,
          function (feature) {
            return feature
          })
        if (feature) {
          const coordinates = feature.getGeometry().getCoordinates()
          popup.setPosition(coordinates)
          $(element).popover({
            'placement': 'top',
            'html': true,
            'content': feature.get('name') + ', ' + feature.get('number') + '<br>' + feature.get('first_day') + '/' +
            feature.get('first_month') + '/' + feature.get('first_year') + ' - ' + feature.get('last_day') + '/' +
            feature.get('last_month') + '/' + feature.get('last_year')
          })
          $(element).popover('show')
        } else {
          $(element).popover('destroy')
        }
      })

      // change mouse cursor when over marker
      map.on('pointermove', function (e) {
        if (e.dragging) {
          $(element).popover('destroy')
          return
        }
        const pixel = map.getEventPixel(e.originalEvent)
        const hit = map.hasFeatureAtPixel(pixel)
        if (!hit) {
          $(element).popover('destroy')
        }
        map.getTarget().style.cursor = hit ? 'pointer' : ''
      })

      /////////////////POPUP 2//////////////////////

      const highlightStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: '#ff0000',
          width: 2
        }),
        fill: new ol.style.Fill({
          color: 'rgba(255,0,0,0.1)'
        }),
        text: new ol.style.Text({
          font: '12px Calibri,sans-serif',
          fill: new ol.style.Fill({
            color: '#000'
          }),
          stroke: new ol.style.Stroke({
            color: '#f7f2ff',
            width: 15
          })
        })
      })

      let featureOverlay = new ol.layer.Vector({
        source: new ol.source.Vector(),
        map: map,
        style: function (feature) {
          highlightStyle.getText().setText(feature.get('name'))
          return highlightStyle
        }
      })

      let highlight
      let displayFeatureInfo = function (pixel) {

        const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
          return feature
        })

        if (feature !== highlight) {
          if (highlight) {
            featureOverlay.getSource().removeFeature(highlight)
          }
          if (feature) {
            featureOverlay.getSource().addFeature(feature)
          }
          highlight = feature
        }

      }

      map.on('pointermove', function (evt) {
        if (evt.dragging) {
          return
        }
        const pixel = map.getEventPixel(evt.originalEvent)
        displayFeatureInfo(pixel)
      })

      map.on('click', function (evt) {
        displayFeatureInfo(evt.pixel)
      })

    }
  }


</script>

<style lang="scss" scoped>
  @import "~openlayers/css/ol.css";
  @import '../js/layerswitcher.css';
  @import "~bootstrap";
  @import "~bootstrap-slider";

  #meu-mapa {
    flex-grow: 1;
    overflow: hidden;
  }

</style>
