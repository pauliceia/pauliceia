import icon_ext from "./../../images/iconExtrapolate.png";
import icon_geo from "./../../images/iconGeocoding.png";
import icon_loc from "./../../images/iconGeolocation.png";

import { Style, Circle, Stroke, Fill, Icon } from "ol/style";

/*
  WARNING:

  Do NOT use a `string color` (i.e. blue, black, etc.) as a fill color, use an `hexadecimal` or `RGBA` color instead,
  because if you use a `string color`, this color will not be recognized by the color picker on the map as default color.
*/

const pointStyle = new Style({
  image: new Circle({
    radius: 8,
    stroke: new Stroke({
      // white
      color: "rgba(255, 255, 255, 1)",
      width: 2,
    }),
    fill: new Fill({
      // red
      color: "rgba(255, 0, 0, 1)",
    }),
  }),
});

const lineStyle = new Style({
  stroke: new Stroke({
    // blue
    color: "rgba(0, 0, 255, 1)",
    width: 3,
  }),
});

const polygonStyle = new Style({
  stroke: new Stroke({
    // black
    color: "rgba(0, 0, 0, 1)",
    width: 3,
  }),
  fill: new Fill({
    // transparent white
    color: "rgba(255, 255, 255, 0.5)",
  }),
});

const placeStyleSearch1 = new Style({
  image: new Icon(
    /** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 45],
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      opacity: 1,
      src: icon_loc,
    }),
  ),
});

const placeStyleSearch0 = new Style({
  image: new Icon(
    /** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 45],
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      opacity: 1,
      src: icon_ext,
    }),
  ),
});

const placeStyleSearch3 = new Style({
  image: new Icon(
    /** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 45],
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      opacity: 1,
      src: icon_geo,
    }),
  ),
});

const emptyStyle = new Style({
  display: "none",
});

export {
  pointStyle,
  polygonStyle,
  lineStyle,
  placeStyleSearch1,
  placeStyleSearch3,
  placeStyleSearch0,
  emptyStyle,
};
