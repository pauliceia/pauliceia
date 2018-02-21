<template>
  <section>

    <ol-map class="map">
      <p-timeline></p-timeline>
    </ol-map>

  </section>
</template>

<script>
  import OlMap from '@/views/components/map/Ol-map'
  import Timeline from '@/views/components/map/Timeline'

  import {
    placeStyle,
    streetsStyle
  } from '@/views/assets/js/map/Styles'

  import {
    overlayGroup
  } from '@/views/assets/js/map/overlayGroup'

  export default {
    components: {
      'ol-map': OlMap,
      'p-timeline': Timeline
    },
    created () {

      var geojsonPlaces = {
        'type': 'FeatureCollection',
        'totalFeatures': 22,
        'features': [{
          'type': 'Feature',
          'id': 'places.3',
          'geometry': {'type': 'Point', 'coordinates': [-46.63757905, -23.5290462]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 207,
            'number': 82,
            'original_number': null,
            'name': 'collegio santa ignes',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanal Laemmert, 1931, v.II, p. 325 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.4',
          'geometry': {'type': 'Point', 'coordinates': [-46.63757905, -23.5290462]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 207,
            'number': 71,
            'original_number': null,
            'name': 'Escola de Pharmacia e Odontologia ',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 162 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.5',
          'geometry': {'type': 'Point', 'coordinates': [-46.63320592, -23.53438568]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 220,
            'number': 1,
            'original_number': null,
            'name': 'lyceo de artes e officios ',
            'first_day': null,
            'first_month': null,
            'first_year': 1926,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 421 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.6',
          'geometry': {'type': 'Point', 'coordinates': [-46.63233187, -23.53162469]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 220,
            'number': 5,
            'original_number': null,
            'name': 'cadeia publica',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 147 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.7',
          'geometry': {'type': 'Point', 'coordinates': [-46.63168009, -23.52966376]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 220,
            'number': 7,
            'original_number': null,
            'name': 'escola polytecnica ',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 162',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.8',
          'geometry': {'type': 'Point', 'coordinates': [-46.64881164, -23.54264045]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 220,
            'number': 2,
            'original_number': null,
            'name': 'hospital da santa casa de misericordia',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 421',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.9',
          'geometry': {'type': 'Point', 'coordinates': [-46.65170366, -23.54569269]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 220,
            'number': 79,
            'original_number': null,
            'name': 'escola de engenharia mackenzie',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 325',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.10',
          'geometry': {'type': 'Point', 'coordinates': [-46.65313961, -23.54656622]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 220,
            'number': 17,
            'original_number': null,
            'name': 'escola americana',
            'first_day': null,
            'first_month': null,
            'first_year': 1929,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 593 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.11',
          'geometry': {'type': 'Point', 'coordinates': [-46.6498717, -23.54828941]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 76,
            'number': 178,
            'original_number': null,
            'name': 'grupo escolar consolacao',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, V.II, p.594 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.14',
          'geometry': {'type': 'Point', 'coordinates': [-46.64635735, -23.54146632]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 526,
            'number': 80,
            'original_number': null,
            'name': 'colyseu paulista',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 162 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.13',
          'geometry': {'type': 'Point', 'coordinates': [-46.65356669, -23.53221863]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 181,
            'number': 21,
            'original_number': null,
            'name': 'Theatro S. Pedro',
            'first_day': null,
            'first_month': null,
            'first_year': 1935,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Correio Paulistano, 1935, n°24.217, p.3 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.12',
          'geometry': {'type': 'Point', 'coordinates': [-46.65267461, -23.53138643]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 174,
            'number': 1,
            'original_number': null,
            'name': 'Grupo Escolar Barra Funda',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p.134 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.15',
          'geometry': {'type': 'Point', 'coordinates': [-46.63999486, -23.537518]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 323,
            'number': 86,
            'original_number': null,
            'name': 'gabinete de investigacoes',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 97 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.16',
          'geometry': {'type': 'Point', 'coordinates': [-46.6343626, -23.54209694]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 367,
            'number': 67,
            'original_number': null,
            'name': 'casino antarctica',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 322 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.17',
          'geometry': {'type': 'Point', 'coordinates': [-46.62214194, -23.53840489]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 268,
            'number': 120,
            'original_number': null,
            'name': 'escola profissional carlos de campos ',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 138 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.18',
          'geometry': {'type': 'Point', 'coordinates': [-46.64424768, -23.54771734]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 76,
            'number': 42,
            'original_number': null,
            'name': 'cinema odeon',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 162',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.19',
          'geometry': {'type': 'Point', 'coordinates': [-46.64688962, -23.54948656]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 104,
            'number': 46,
            'original_number': null,
            'name': 'Escola Alleman',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 593',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.20',
          'geometry': {'type': 'Point', 'coordinates': [-46.6484983, -23.54920543]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 98,
            'number': 46,
            'original_number': null,
            'name': 'collegio des oiseaux ',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 593 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.21',
          'geometry': {'type': 'Point', 'coordinates': [-46.63937961, -23.54438238]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 57,
            'number': 23,
            'original_number': null,
            'name': 'theatro s. anna',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 162',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.22',
          'geometry': {'type': 'Point', 'coordinates': [-46.63616159, -23.54637927]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 22,
            'number': 34,
            'original_number': null,
            'name': 'prefeitura municipal',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p. 96 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.23',
          'geometry': {'type': 'Point', 'coordinates': [-46.63824754, -23.54406785]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 71,
            'number': 9,
            'original_number': null,
            'name': 'quarta general da segunda regiao militar',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, p.97 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }, {
          'type': 'Feature',
          'id': 'places.24',
          'geometry': {'type': 'Point', 'coordinates': [-46.64463964, -23.53322345]},
          'geometry_name': 'geom',
          'properties': {
            'id_street': 188,
            'number': 47,
            'original_number': null,
            'name': 'palacio dos campos elyseos',
            'first_day': null,
            'first_month': null,
            'first_year': 1931,
            'last_day': null,
            'last_month': null,
            'last_year': null,
            'description': null,
            'source': 'Almanak Laemmert, 1931, v.II, 408 ',
            'id_user': 6,
            'date': '2017-10-23Z',
            'disc_date': true
          }
        }],
        'crs': {'type': 'name', 'properties': {'name': 'urn:ogc:def:crs:EPSG:4326'}}
      }

      var geojasonStreets = {
        'type': 'FeatureCollection',
        'totalFeatures': 546,
        'features': [{
          'type': 'Feature',
          'id': 'streets.528',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62376035, -23.55339382], [-46.62354081, -23.55226601], [-46.62339333, -23.55164561], [-46.62320968, -23.55076014], [-46.62297398, -23.54965525], [-46.62364978, -23.54841191]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua wandenkoik',
            'obs': null,
            'perimeter': 582.71384,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.529',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62856859, -23.53343082], [-46.6287258, -23.5339484], [-46.62906183, -23.53510386], [-46.62918717, -23.5354827], [-46.62962181, -23.5364795]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua amelia',
            'obs': null,
            'perimeter': 301.47191,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.530',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62115231, -23.53138672], [-46.62132094, -23.53179969], [-46.62149095, -23.53232577], [-46.621808, -23.53317078], [-46.62198262, -23.53393405], [-46.62226348, -23.53486999], [-46.62227983, -23.53495861], [-46.6222858, -23.53501602]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida vautier',
            'obs': null,
            'perimeter': 726.633,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.531',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62132985, -23.5351306], [-46.62131806, -23.53503805], [-46.62121143, -23.53469026], [-46.62106566, -23.53428379], [-46.620872, -23.53353871], [-46.62068177, -23.5330317], [-46.62054061, -23.53247184], [-46.62045642, -23.53216672], [-46.62035121, -23.53178764]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua thiers',
            'obs': null,
            'perimeter': 824.16439,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.532',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64083969, -23.54168611], [-46.64061198, -23.54149461], [-46.64042251, -23.54135811], [-46.64017995, -23.54118061], [-46.64004297, -23.54103663], [-46.63983096, -23.54090037], [-46.63948975, -23.54064081], [-46.63911405, -23.54033776], [-46.63869607, -23.540017], [-46.63841765, -23.53982202], [-46.63821453, -23.53966295]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos tymbiras',
            'obs': null,
            'perimeter': 483.08149,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.533',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64238468, -23.55064936], [-46.6423078, -23.55116674], [-46.64214937, -23.55259167], [-46.64209648, -23.55306677], [-46.64209291, -23.55332123], [-46.64203689, -23.55368795]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da abolicao',
            'obs': null,
            'perimeter': 511.55871,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.534',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65325383, -23.5357416], [-46.65379913, -23.5353206], [-46.65475943, -23.53459497], [-46.65544402, -23.53406674], [-46.65570663, -23.53386987], [-46.65585339, -23.53376049], [-46.65603513, -23.53364354]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua das palmeiras',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.535',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63535408, -23.54509507], [-46.63471434, -23.54546955], [-46.63431095, -23.54580442]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida sao joao',
            'obs': null,
            'perimeter': 0,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.536',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62898106, -23.54273539], [-46.62677248, -23.54275851]]]
          },
          'geometry_name': 'geom',
          'properties': {'name': null, 'obs': null, 'perimeter': 0, 'id_type': 1, 'first_year': 1920, 'last_year': 1920}
        }, {
          'type': 'Feature',
          'id': 'streets.537',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62115231, -23.53138672], [-46.62132094, -23.53179969], [-46.62149095, -23.53232577], [-46.621808, -23.53317078], [-46.62198262, -23.53393405], [-46.62226348, -23.53486999], [-46.62227983, -23.53495861], [-46.6222858, -23.53501602]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida vautier',
            'obs': null,
            'perimeter': 726.633,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.538',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61945835, -23.54145147], [-46.61816757, -23.54065072]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conselheiro belisario',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.539',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62606113, -23.53231471], [-46.62583357, -23.5327465], [-46.6256127, -23.53319612], [-46.62553067, -23.53336397], [-46.62547481, -23.53355541], [-46.6254598, -23.53391342], [-46.62548021, -23.53452154], [-46.62554128, -23.53475351], [-46.6257167, -23.53534212], [-46.62581679, -23.53559157], [-46.62609698, -23.5361293], [-46.6265358, -23.53709975], [-46.62712907, -23.53839956], [-46.62833588, -23.54106605], [-46.62911792, -23.54272169], [-46.62955323, -23.54343049], [-46.6295597, -23.54343043]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida do estado',
            'obs': null,
            'perimeter': 0,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.540',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61789499, -23.54956733], [-46.61919636, -23.55029847]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua coronel mursa',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.541',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62953915, -23.54339556], [-46.62943963, -23.54394245], [-46.62940323, -23.54468461], [-46.62933682, -23.54545507], [-46.62927128, -23.54629551], [-46.62918279, -23.54650637], [-46.62918693, -23.54684223], [-46.62913346, -23.54743062], [-46.62891474, -23.54816069], [-46.62877511, -23.54820179], [-46.62859255, -23.54819927], [-46.62833784, -23.54818865], [-46.6282378, -23.54825613], [-46.62813994, -23.54850071], [-46.62800342, -23.54876231], [-46.62783387, -23.54903568], [-46.62749615, -23.54969458], [-46.62696455, -23.55085117], [-46.6264747, -23.55163559], [-46.62623719, -23.55211038], [-46.62606837, -23.55244276], [-46.62600761, -23.55270906], [-46.62568211, -23.5534214], [-46.62524735, -23.55427723], [-46.62498287, -23.55464008], [-46.62466039, -23.55497403], [-46.62412132, -23.55539879], [-46.62337851, -23.55592012], [-46.62232739, -23.55643303], [-46.62211691, -23.55650015], [-46.62056105, -23.55702992], [-46.61918125, -23.55745146], [-46.61770745, -23.55787998], [-46.61537973, -23.55864199], [-46.61510552, -23.55873337], [-46.61450611, -23.55893438]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida do estado',
            'obs': null,
            'perimeter': 0,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.542',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63380627, -23.54467882], [-46.63351957, -23.54506367]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'sem nome',
            'perimeter': 0,
            'id_type': 0,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.543',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6306357, -23.54327314], [-46.62957646, -23.54343936]]]
          },
          'geometry_name': 'geom',
          'properties': {'name': null, 'obs': null, 'perimeter': 0, 'id_type': 0, 'first_year': 1920, 'last_year': 1920}
        }, {
          'type': 'Feature',
          'id': 'streets.544',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6226817, -23.52911139], [-46.62170942, -23.52937189]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'sem nome',
            'perimeter': 0,
            'id_type': 0,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.545',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62296525, -23.53009133], [-46.62199273, -23.53033328]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'sem nome',
            'perimeter': 0,
            'id_type': 0,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.546',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63430972, -23.55189745], [-46.63450871, -23.55240537]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'sem nome',
            'perimeter': 0,
            'id_type': 0,
            'first_year': 1920,
            'last_year': 1920
          }
        }, {
          'type': 'Feature',
          'id': 'streets.105',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64852965, -23.5491253], [-46.64719289, -23.54867733]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua gravatahy',
            'obs': null,
            'perimeter': 145.21875,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.58',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63838794, -23.54855107], [-46.63837901, -23.54864841], [-46.63787522, -23.54913553], [-46.63769205, -23.54931538], [-46.63752562, -23.54935348], [-46.63720444, -23.54943755], [-46.63699265, -23.54950148], [-46.63692112, -23.54955331]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua de sao francisco',
            'obs': null,
            'perimeter': 196.31532,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.180',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65326755, -23.52865998], [-46.6525922, -23.52952026]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua camerino',
            'obs': null,
            'perimeter': 117.61365,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.5',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63342877, -23.54405472], [-46.63302354, -23.54457397]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa porto geral',
            'obs': null,
            'perimeter': 70.84277,
            'id_type': 3,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.59',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63627196, -23.54961296], [-46.63595404, -23.5492494], [-46.6358143, -23.54907651], [-46.63580255, -23.54897504]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sen paulo egydio',
            'obs': null,
            'perimeter': 86.89657,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.60',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63699599, -23.54950047], [-46.63679567, -23.54893438]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo do ouvidor',
            'obs': null,
            'perimeter': 65.94363,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.61',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63692112, -23.54955331], [-46.63681779, -23.54952152], [-46.63633164, -23.54964993], [-46.63627519, -23.549612], [-46.6364236, -23.54993923], [-46.63687719, -23.54972415], [-46.63693718, -23.54964556], [-46.63695308, -23.54958012], [-46.63692112, -23.54955331]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo de sao francisco',
            'obs': null,
            'perimeter': 183.72294,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.62',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6364236, -23.54993923], [-46.63649542, -23.55012199], [-46.63667487, -23.5505042], [-46.63670287, -23.55059956]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua christovam colombo',
            'obs': null,
            'perimeter': 78.59147,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.63',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63865767, -23.54958497], [-46.63851262, -23.54984872], [-46.63835601, -23.55030725], [-46.63787794, -23.55169301], [-46.63718707, -23.55384642], [-46.63717828, -23.55394903]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua asdrubal do nascimento',
            'obs': null,
            'perimeter': 507.12284,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.65',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63838794, -23.54855107], [-46.63828038, -23.54847263], [-46.63736786, -23.54812614], [-46.63727692, -23.5480886], [-46.63706264, -23.54782835], [-46.6369834, -23.54775219], [-46.63689976, -23.54770553]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr. falcao',
            'obs': null,
            'perimeter': 182.78818,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.3',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63433248, -23.54580084], [-46.63420945, -23.54576951], [-46.63361296, -23.54517044]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua joao briccola',
            'obs': null,
            'perimeter': 103.09064,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.10',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63627519, -23.549612], [-46.63582242, -23.54974765], [-46.63507356, -23.54991183], [-46.63460752, -23.55000043], [-46.63407785, -23.55008996]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua benjamin constant',
            'obs': null,
            'perimeter': 230.75795,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.44',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63522913, -23.54638386], [-46.63532662, -23.54635498], [-46.63590231, -23.54607022], [-46.63596893, -23.54603833]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa grande hotel',
            'obs': null,
            'perimeter': 84.82228,
            'id_type': 3,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.47',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63375408, -23.54864974], [-46.63363759, -23.54860029], [-46.63354589, -23.54856302], [-46.63339024, -23.54849584], [-46.63321526, -23.5484314], [-46.63309596, -23.5483883]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua anchieta',
            'obs': null,
            'perimeter': 73.19287,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.49',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63684332, -23.54759877], [-46.6370135, -23.54749585], [-46.63879725, -23.54604156]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'viaduto do cha',
            'obs': null,
            'perimeter': 263.90006,
            'id_type': 5,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.50',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63879725, -23.54604156], [-46.64059629, -23.5446239], [-46.64176704, -23.54369511]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barao de itapetininga',
            'obs': null,
            'perimeter': 399.33668,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.66',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63926165, -23.54808859], [-46.63894067, -23.54826519], [-46.63877592, -23.54807445], [-46.63844252, -23.54831321], [-46.63838421, -23.54854834], [-46.63864138, -23.54863618], [-46.638833, -23.54856145], [-46.63866533, -23.54850975], [-46.63870829, -23.54841948], [-46.63877492, -23.54836745], [-46.63926052, -23.54808714]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo da memoria',
            'obs': null,
            'perimeter': 280.60303,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.43',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63450328, -23.54826741], [-46.63428734, -23.54820893], [-46.63393077, -23.54812983]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do thesouro',
            'obs': null,
            'perimeter': 60.423,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.67',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64040603, -23.54976008], [-46.6405813, -23.54944488], [-46.64062772, -23.54925995], [-46.64064342, -23.54912345], [-46.64057151, -23.54893656], [-46.64042043, -23.54867832], [-46.63991177, -23.54777585]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua joao adolpho',
            'obs': null,
            'perimeter': 242.53774,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.68',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64294992, -23.54938948], [-46.64278915, -23.54933024], [-46.64216437, -23.54902574], [-46.64155517, -23.54871465], [-46.64125769, -23.54856867], [-46.64062871, -23.5484839], [-46.64029144, -23.54844947]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua alvaro de carvalho',
            'obs': null,
            'perimeter': 294.88581,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.2',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63341211, -23.54636811], [-46.63366885, -23.54639602], [-46.63406444, -23.54643645], [-46.63427695, -23.54645378]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua tres de dezembro',
            'obs': null,
            'perimeter': 88.81315,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.1',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6341914, -23.54412419], [-46.63402355, -23.54445657], [-46.63361885, -23.54513946], [-46.63349803, -23.54577478], [-46.63340915, -23.54638857], [-46.63334692, -23.5468247]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua boa vista',
            'obs': null,
            'perimeter': 315.50824,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.45',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63468098, -23.5453833], [-46.63448516, -23.54554143], [-46.63427888, -23.54571714], [-46.6342624, -23.54578299], [-46.63433248, -23.54580084], [-46.63441627, -23.54575728], [-46.63474985, -23.54551454], [-46.63468357, -23.54538824]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'praça antonio prado',
            'obs': null,
            'perimeter': 138.91045,
            'id_type': 6,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.123',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65424876, -23.54774429], [-46.65421612, -23.54780902], [-46.65353093, -23.54883509]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'jardim elydia',
            'obs': 'n.o. (no oficial)',
            'perimeter': 141.34645,
            'id_type': 9,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.145',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62142546, -23.54578652], [-46.62135977, -23.54585825], [-46.62002685, -23.54804759]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua mello barreto',
            'obs': 'n.o. (no oficial)',
            'perimeter': 288.43692,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.146',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62405263, -23.55482439], [-46.62374584, -23.55343351], [-46.62361068, -23.55275599], [-46.62333453, -23.5514007], [-46.62320507, -23.55075897], [-46.62298997, -23.54965484]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua wandenkoik',
            'obs': null,
            'perimeter': 582.71384,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.158',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61799616, -23.54764494], [-46.61702823, -23.54904594]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua aristides lobo',
            'obs': null,
            'perimeter': 183.95294,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.183',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65602976, -23.53341127], [-46.6551535, -23.53388262], [-46.65362183, -23.53475112], [-46.65304042, -23.53506197], [-46.65324272, -23.53574767], [-46.6538081, -23.53533234], [-46.65535706, -23.53413579], [-46.65603357, -23.5336443]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'praça marechal deodoro',
            'obs': null,
            'perimeter': 802.62051,
            'id_type': 6,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.197',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64802697, -23.52795178], [-46.64800542, -23.52853695]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 64.84183,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.210',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63616285, -23.53040222], [-46.63527858, -23.5306298]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 93.74586,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.219',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62910975, -23.52854313], [-46.62853515, -23.52875307], [-46.62747076, -23.52905269]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua deocliciana',
            'obs': null,
            'perimeter': 176.75267,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.231',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63028972, -23.55084669], [-46.62990455, -23.55119653], [-46.62956897, -23.55148365], [-46.62945891, -23.5515785]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua d anna rosa',
            'obs': null,
            'perimeter': 117.32867,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.232',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6306971, -23.5512075], [-46.63081008, -23.55130766], [-46.63092797, -23.5514139], [-46.63103605, -23.55151241], [-46.63112323, -23.55158986], [-46.63116864, -23.55162857]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua silveira martins',
            'obs': null,
            'perimeter': 67.02697,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.261',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62267916, -23.52912787], [-46.62260689, -23.52915245], [-46.62171218, -23.52937443], [-46.61978545, -23.52986869], [-46.61810593, -23.53029014]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conselheiro dantas',
            'obs': null,
            'perimeter': 484.42847,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.262',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62296229, -23.530094], [-46.62095381, -23.53059359], [-46.62008864, -23.53082646]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua camomil',
            'obs': null,
            'perimeter': 304.45177,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.265',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62242609, -23.52815998], [-46.62141974, -23.52841135], [-46.62038035, -23.52869581], [-46.61735487, -23.52944846]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua itaquy',
            'obs': null,
            'perimeter': 537.16318,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.266',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61951314, -23.52795525], [-46.62027019, -23.52838456], [-46.62030417, -23.52843042], [-46.62038473, -23.52869461]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua jurua',
            'obs': null,
            'perimeter': 127.29814,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.271',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62358778, -23.53219672], [-46.62261269, -23.53245187], [-46.62161285, -23.53272259], [-46.61958201, -23.53321893], [-46.61924709, -23.5333152]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua alexandrino pedroso',
            'obs': null,
            'perimeter': 460.25468,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.272',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62393916, -23.53334751], [-46.62295341, -23.53359523], [-46.62195776, -23.53385262], [-46.62104977, -23.5340932], [-46.61988433, -23.53438971]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua victor hugo',
            'obs': null,
            'perimeter': 429.82654,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.273',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62132985, -23.5351306], [-46.62131806, -23.53503805], [-46.62102756, -23.53409885], [-46.62068868, -23.53294846], [-46.62034818, -23.5317918], [-46.62008864, -23.53082646], [-46.61978794, -23.52986805], [-46.61950576, -23.52891339], [-46.61922193, -23.52794841]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua thiers',
            'obs': null,
            'perimeter': 824.16439,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.280',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61887101, -23.53009816], [-46.61858759, -23.52914181], [-46.61825753, -23.52803347]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua paganini',
            'obs': null,
            'perimeter': 237.07969,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.135',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62501186, -23.55070918], [-46.62387202, -23.55073879], [-46.6221142, -23.55079197]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua azevedo junior',
            'obs': null,
            'perimeter': 295.98297,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.284',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61858282, -23.53215894], [-46.61840358, -23.53215998], [-46.61599825, -23.53122577]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr ornellas',
            'obs': null,
            'perimeter': 284.81327,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.287',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61823542, -23.53048904], [-46.61747771, -23.53080413]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua cel silva gomes',
            'obs': null,
            'perimeter': 84.87607,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.291',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61721245, -23.52940207], [-46.61701537, -23.52961692], [-46.61678914, -23.52995801], [-46.61602737, -23.53106752], [-46.61594454, -23.53116944]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr pacheco e silva',
            'obs': null,
            'perimeter': 234.96953,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.292',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61556063, -23.5286479], [-46.61558894, -23.5287773], [-46.6155336, -23.52959872]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua capitao mor passos',
            'obs': null,
            'perimeter': 105.76208,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.267',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62038473, -23.52869461], [-46.62067539, -23.5296404], [-46.62096507, -23.53059079], [-46.62125585, -23.53155295], [-46.62198262, -23.53393405], [-46.62226348, -23.53486999], [-46.62227983, -23.53495861], [-46.6222858, -23.53501602]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida vautier',
            'obs': null,
            'perimeter': 726.633,
            'id_type': 2,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.315',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64768213, -23.53825753], [-46.64773455, -23.53834316], [-46.64745841, -23.53984721], [-46.6471734, -23.5414515]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua frederico steidel',
            'obs': null,
            'perimeter': 359.86283,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.326',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64236667, -23.54204675], [-46.6417185, -23.54149607]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa sao joao',
            'obs': null,
            'perimeter': 89.9949,
            'id_type': 3,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.327',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64184888, -23.54245302], [-46.64176832, -23.54240316], [-46.64117112, -23.54192844], [-46.64106946, -23.54186355], [-46.64085141, -23.54169315], [-46.64024321, -23.54122578], [-46.64013741, -23.54112785], [-46.63958142, -23.54071636], [-46.63923292, -23.54045309], [-46.63884369, -23.5401478], [-46.63821453, -23.53966295]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos tymbiras',
            'obs': null,
            'perimeter': 483.08149,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.348',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63062493, -23.53911803], [-46.63032463, -23.53918892], [-46.62903526, -23.53949881]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua miguel carlos',
            'obs': null,
            'perimeter': 167.7018,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.356',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62786628, -23.53423114], [-46.62695179, -23.53447908]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua francisco sa barbosa',
            'obs': 'n.o. (no oficial)',
            'perimeter': 97.33106,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.359',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62784843, -23.53662318], [-46.62758925, -23.53670354], [-46.62690822, -23.53696047], [-46.62650425, -23.53711156]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr. claudio de souza',
            'obs': 'n.o. no oficial',
            'perimeter': 147.56739,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.352',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62941147, -23.54037004], [-46.62834544, -23.54118929]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua mercurio',
            'obs': null,
            'perimeter': 141.70106,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.360',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62726307, -23.5368266], [-46.62666863, -23.53549208]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da economisadora',
            'obs': 'n.o.(no oficial)',
            'perimeter': 159.76969,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.361',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62684405, -23.5358859], [-46.626095, -23.53617387]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr. luiz pisa',
            'obs': 'n.o. (no oficial)',
            'perimeter': 82.86573,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.362',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62698896, -23.53621123], [-46.62624113, -23.53648521]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr. gabriel dias',
            'obs': 'n.o. (no oficial)',
            'perimeter': 82.16608,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.363',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62712305, -23.53651227], [-46.62639444, -23.53678639]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua leoncio gurgel',
            'obs': 'n.o. (no oficial)',
            'perimeter': 80.35183,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.364',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62928397, -23.53571346], [-46.62969651, -23.53559455], [-46.63158425, -23.53540656], [-46.63303916, -23.53528714]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua vinte e cinco de janeiro',
            'obs': null,
            'perimeter': 387.15443,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.366',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62737678, -23.54007359], [-46.62685658, -23.54012784], [-46.62691246, -23.53971424], [-46.62702063, -23.53940053], [-46.62744046, -23.5399778], [-46.62737797, -23.54007578]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo do pary',
            'obs': null,
            'perimeter': 225.625,
            'id_type': 4,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.373',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63176247, -23.53753632], [-46.63038601, -23.53787098]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 145.34986,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.370',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6308845, -23.53722833], [-46.63067292, -23.53655271]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 77.87853,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.371',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63204153, -23.5370706], [-46.63084112, -23.53736918], [-46.63090286, -23.53757393], [-46.63086361, -23.53759254], [-46.63032872, -23.53772923]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 211.66902,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.372',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63090286, -23.53757393], [-46.63107174, -23.53754876], [-46.63203333, -23.53732028]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 118.86085,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.510',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61604473, -23.53124383], [-46.615669, -23.53166006]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'praça eduardo rudge',
            'obs': null,
            'perimeter': 59.97384,
            'id_type': 6,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.387',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62127808, -23.53726192], [-46.620402, -23.53721957]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 89.57594,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.391',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61673088, -23.53971559], [-46.61705323, -23.5391918], [-46.61706957, -23.5391306]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'villa hortencia',
            'obs': 'n.o. (no oficial)',
            'perimeter': 73.67496,
            'id_type': 11,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.394',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62042199, -23.53886062], [-46.61901451, -23.53881378]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 143.80502,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.395',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61968883, -23.53926575], [-46.61967365, -23.53883572], [-46.61966529, -23.53806272]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 133.2585,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.396',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61966827, -23.5383385], [-46.620416, -23.53837668]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': null,
            'perimeter': 76.46414,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.403',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65537009, -23.55825797], [-46.65545974, -23.55821925], [-46.65604234, -23.55785301]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua antonio carlos',
            'obs': null,
            'perimeter': 82.09825,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.397',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61938352, -23.53924188], [-46.61937394, -23.53882574], [-46.61934985, -23.53816876]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 118.89561,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.412',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.648706, -23.5525393], [-46.64851397, -23.55312408]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua araquan',
            'obs': null,
            'perimeter': 67.66458,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.422',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63964422, -23.55700448], [-46.63941805, -23.5571657], [-46.63986938, -23.55764832]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa lettiere',
            'obs': 'n.o. (no oficial)',
            'perimeter': 99.7558,
            'id_type': 3,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.424',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64180973, -23.55593644], [-46.64147469, -23.55623616], [-46.64074991, -23.55692956], [-46.6406254, -23.55702746], [-46.64051703, -23.55716698]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua vicente prado',
            'obs': 'n.o. (no oficial)',
            'perimeter': 190.01495,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.465',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63098425, -23.55594331], [-46.63102222, -23.55532597]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa amalia franco',
            'obs': 'n.o. (no oficial)',
            'perimeter': 68.47831,
            'id_type': 3,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.428',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64238468, -23.55064936], [-46.6423078, -23.55116674], [-46.64214937, -23.55259167], [-46.64202501, -23.55395043], [-46.64201557, -23.55441672], [-46.64198287, -23.5552508]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da abolicao',
            'obs': null,
            'perimeter': 511.55871,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.429',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64200667, -23.5546437], [-46.64298832, -23.55467858]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'jardim heloisa',
            'obs': 'n.o. (no oficial)',
            'perimeter': 100.29509,
            'id_type': 9,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.433',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63755321, -23.55110805], [-46.63781394, -23.55161926], [-46.6378876, -23.55166501]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa grass',
            'obs': 'n.o. (no oficial)',
            'perimeter': 71.62829,
            'id_type': 3,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.435',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63905717, -23.55038173], [-46.63898798, -23.55044029], [-46.63894926, -23.55050946], [-46.63889579, -23.55061667], [-46.63887228, -23.55068427], [-46.6387738, -23.55096736], [-46.63874133, -23.5510491], [-46.63871722, -23.551069], [-46.63868983, -23.55106928], [-46.63866091, -23.55106959], [-46.63862118, -23.55117946], [-46.63854706, -23.55126846], [-46.6385324, -23.55131351], [-46.63848243, -23.55145716]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa noschese',
            'obs': 'n.o. (no oficial)',
            'perimeter': 137.92468,
            'id_type': 3,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.436',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6385797, -23.55122926], [-46.63851882, -23.5512], [-46.63808912, -23.55108088]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 52.82126,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.494',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61991744, -23.55724256], [-46.6203128, -23.55826968]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua alexandre levy',
            'obs': null,
            'perimeter': 120.69816,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.437',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63973939, -23.55090271], [-46.63968738, -23.55099522], [-46.63967984, -23.55159904], [-46.63966849, -23.55383606]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua genebra',
            'obs': null,
            'perimeter': 326.1593,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.454',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63459813, -23.55607807], [-46.63456642, -23.55551447]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'becco dos afflictos',
            'obs': null,
            'perimeter': 62.50068,
            'id_type': 8,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.456',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63065138, -23.55745435], [-46.63113302, -23.55748699], [-46.63139964, -23.55751118]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua lins',
            'obs': 'n.o. (no oficial)',
            'perimeter': 76.65532,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.459',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62982139, -23.55626077], [-46.6298779, -23.55561687], [-46.62991369, -23.55524844]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'villa estudantes',
            'obs': 'n.o. (no oficial)',
            'perimeter': 112.50743,
            'id_type': 11,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.460',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62987857, -23.55561002], [-46.62951734, -23.55557353], [-46.62940239, -23.5556239]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 50.09321,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.461',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62925669, -23.5553427], [-46.62940239, -23.5556239], [-46.62950946, -23.55583585]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 60.40491,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.462',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62927494, -23.55537792], [-46.6293855, -23.5553352], [-46.6294229, -23.55530408], [-46.62948689, -23.55521726]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'sem nome',
            'perimeter': 29.0072,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.463',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63015477, -23.55644166], [-46.6301708, -23.55611984], [-46.63020402, -23.55557043], [-46.63021723, -23.55537975], [-46.63021975, -23.5552708]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa sao paulo',
            'obs': null,
            'perimeter': 129.84569,
            'id_type': 3,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.464',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63076577, -23.55530876], [-46.63068699, -23.55634799]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa rugero',
            'obs': 'n.o. (no oficial)',
            'perimeter': 115.37041,
            'id_type': 3,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.466',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6315577, -23.55536189], [-46.63149057, -23.55609166]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa dos estudantes',
            'obs': null,
            'perimeter': 81.10908,
            'id_type': 3,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.468',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63196477, -23.55301148], [-46.63201562, -23.55335473]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'villa conde de sarzedas',
            'obs': 'n.o. (no oficial)',
            'perimeter': 38.36662,
            'id_type': 11,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.469',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63201562, -23.55335473], [-46.6321398, -23.55333499], [-46.63252743, -23.55323875], [-46.63256889, -23.5532428], [-46.63280974, -23.55318206]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 83.59896,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.471',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63137703, -23.55331904], [-46.63093422, -23.55344042], [-46.63015324, -23.55363753]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'villa carolina augusta',
            'obs': 'n.o (no oficial)',
            'perimeter': 129.83169,
            'id_type': 11,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.472',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63028853, -23.55415551], [-46.63017444, -23.55373561], [-46.63015324, -23.55363753], [-46.63003011, -23.55325478]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 103.22733,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.473',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6277001, -23.55530645], [-46.62853116, -23.55492824]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sudan',
            'obs': 'n.o. (no oficial)',
            'perimeter': 94.62067,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.483',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62388677, -23.55407244], [-46.62374287, -23.55410688], [-46.62245826, -23.55418016]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da paz',
            'obs': null,
            'perimeter': 146.5787,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.484',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62126292, -23.55367232], [-46.62128136, -23.55418508], [-46.62116488, -23.55419749], [-46.6212234, -23.5548084], [-46.62126476, -23.55536513]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'villa alvarenga',
            'obs': 'n.o. (no oficial)',
            'perimeter': 198.50604,
            'id_type': 11,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.485',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62099559, -23.55430516], [-46.62052619, -23.55433096], [-46.62032229, -23.55434596]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 68.89062,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.486',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62102569, -23.55464604], [-46.6203574, -23.55468324]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 68.35136,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.487',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6210554, -23.55498841], [-46.62036883, -23.55502077]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 70.18498,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.492',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61785717, -23.55826147], [-46.61776727, -23.55790283]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barao de jaguara',
            'obs': null,
            'perimeter': 40.7642,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.46',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63309321, -23.54839528], [-46.63278752, -23.54827276], [-46.63293821, -23.54793728], [-46.63305719, -23.54772192], [-46.63311826, -23.54774167], [-46.63315508, -23.54781265], [-46.63322036, -23.54794961], [-46.63325731, -23.54802181], [-46.63309515, -23.54839012]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'praça joao pessoa',
            'obs': null,
            'perimeter': 185.76121,
            'id_type': 6,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.470',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63108725, -23.55395636], [-46.63093422, -23.55344042]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 59.23602,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.497',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61904394, -23.55592179], [-46.61981778, -23.55589128], [-46.62042042, -23.55585462]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua andrade reis',
            'obs': 'n.o. (no oficial)',
            'perimeter': 140.73395,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.506',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62912544, -23.55448663], [-46.62845195, -23.55477171], [-46.62863483, -23.55512888], [-46.62929951, -23.55486829], [-46.62913015, -23.55449696]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo conde de sarzedas',
            'obs': null,
            'perimeter': 237.75252,
            'id_type': 4,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.521',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62963455, -23.55459866], [-46.62966322, -23.55477631]], [[-46.62966322, -23.55477631], [-46.62969049, -23.55494531]], [[-46.62966322, -23.55477631], [-46.62966322, -23.55477631]], [[-46.62966322, -23.55477631], [-46.6295553, -23.55479462], [-46.62939221, -23.55481477], [-46.62929485, -23.55485807]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'villa suissa',
            'obs': 'n.o. (no oficial)',
            'perimeter': 0,
            'id_type': 11,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.246',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6285854, -23.5334218], [-46.62872932, -23.53394796], [-46.62905815, -23.53511343], [-46.62907988, -23.53519527], [-46.62940976, -23.53603281]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua amelia',
            'obs': null,
            'perimeter': 301.47191,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.501',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61589115, -23.55239577], [-46.61555389, -23.55219823], [-46.61487431, -23.55179536]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua ernersto de castro',
            'obs': null,
            'perimeter': 123.2838,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.299',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61522103, -23.5304107], [-46.61535051, -23.5303078], [-46.61565439, -23.5302775], [-46.61606302, -23.53038637], [-46.6163757, -23.53056019], [-46.61658782, -23.53076552], [-46.6168077, -23.53108902], [-46.61693375, -23.53147125], [-46.61692154, -23.53158438], [-46.61685932, -23.53209635], [-46.6166395, -23.53247869], [-46.6164336, -23.53269774]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua padre lima',
            'obs': null,
            'perimeter': 396.97566,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.434',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63996995, -23.55021955], [-46.63951993, -23.55073716]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa santa lucia',
            'obs': 'n.o. (no oficial)',
            'perimeter': 73.46395,
            'id_type': 3,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.413',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64916239, -23.55348008], [-46.64904241, -23.55359605], [-46.64898945, -23.55368382], [-46.64886075, -23.55383884], [-46.64864667, -23.55401138]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua acarahu',
            'obs': null,
            'perimeter': 79.52228,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.293',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61491339, -23.52973556], [-46.61525636, -23.52962438], [-46.6155336, -23.52959872], [-46.61579781, -23.52961337], [-46.61604594, -23.52966891], [-46.61631322, -23.529763], [-46.61675742, -23.53000422], [-46.6171909, -23.53036879], [-46.61734392, -23.53057138], [-46.61747771, -23.53080413], [-46.61757433, -23.53104619], [-46.61763961, -23.53130293], [-46.61767145, -23.53154469], [-46.61765278, -23.53186838], [-46.61748024, -23.53250144], [-46.61733512, -23.53275145], [-46.61714016, -23.53301504], [-46.61686105, -23.53325697]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua coronel moraes',
            'obs': null,
            'perimeter': 615.72967,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.524',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62912544, -23.55448663], [-46.62942628, -23.55514622], [-46.6294759, -23.55521646], [-46.63044204, -23.55528705], [-46.6319339, -23.55538712], [-46.63303613, -23.55545821], [-46.63418054, -23.55552788], [-46.63428169, -23.55551806], [-46.63441042, -23.55551593]], [[-46.63441042, -23.55551593], [-46.63544298, -23.55550624]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos estudantes',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.13',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63312472, -23.54947394], [-46.63299705, -23.54947721], [-46.63288597, -23.5494668], [-46.63271623, -23.54945314], [-46.63176038, -23.54935509], [-46.63097324, -23.54927188]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua wenceslau braz',
            'obs': null,
            'perimeter': 220.91802,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.368',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61664715, -23.55825768], [-46.61763398, -23.557943], [-46.61929667, -23.55744188], [-46.62095894, -23.55690813], [-46.62239867, -23.55639524], [-46.6227373, -23.55624496], [-46.62308854, -23.55604156], [-46.62355805, -23.55574724], [-46.62402681, -23.55539179], [-46.62442949, -23.55505741], [-46.6246199, -23.55487239], [-46.62487772, -23.55460608], [-46.62513516, -23.55430997], [-46.6253554, -23.55402113], [-46.62564851, -23.5535917], [-46.62567733, -23.55350888], [-46.62597289, -23.55310868], [-46.62620486, -23.5529669], [-46.62615233, -23.55267609], [-46.62620096, -23.55230944], [-46.62626546, -23.55209604], [-46.62685416, -23.55094257], [-46.62739407, -23.54992247], [-46.62762211, -23.54966917], [-46.6278144, -23.54935475], [-46.62827365, -23.54891006], [-46.62844237, -23.54880089], [-46.62868759, -23.54860536], [-46.6288747, -23.54846365], [-46.62923564, -23.54811166], [-46.62937715, -23.54789942], [-46.62946595, -23.54760363], [-46.6294736, -23.54716548], [-46.62940273, -23.54685871], [-46.62935822, -23.54662913], [-46.62942072, -23.54625743], [-46.62942163, -23.54587779], [-46.62934528, -23.54547398], [-46.62934183, -23.54536387], [-46.62936438, -23.54521493], [-46.62938849, -23.54504561], [-46.62939167, -23.54479341], [-46.62939654, -23.54362029], [-46.6292028, -23.54314082], [-46.62904644, -23.54284708], [-46.62834619, -23.54118871], [-46.62777862, -23.53990148], [-46.62765642, -23.53965356], [-46.62758667, -23.53948669], [-46.62735748, -23.53901761], [-46.62696925, -23.53815555], [-46.62673176, -23.53761564], [-46.62650425, -23.53711156], [-46.62639444, -23.53678639], [-46.62624113, -23.53648521], [-46.626095, -23.53617387], [-46.62585247, -23.5356225]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida do estado',
            'obs': null,
            'perimeter': 3279.68073,
            'id_type': 2,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.512',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61655856, -23.52831595], [-46.61685323, -23.52795507]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 50.02711,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.414',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64184923, -23.54951875], [-46.64126676, -23.54918278], [-46.64062277, -23.54906978], [-46.64017278, -23.54899475], [-46.63988746, -23.54892934], [-46.6396948, -23.54885439], [-46.63916692, -23.54868035], [-46.638833, -23.54856145]], [[-46.64527965, -23.55102125], [-46.64184923, -23.54951875]], [[-46.64859443, -23.5547776], [-46.6484143, -23.55439189], [-46.64802848, -23.55361749], [-46.64789077, -23.55338418], [-46.64770489, -23.55310588], [-46.64754591, -23.55281796], [-46.64746575, -23.5526195], [-46.64718598, -23.55207482], [-46.64705449, -23.55189055], [-46.64688694, -23.55171016], [-46.64669695, -23.55155804], [-46.64647879, -23.55143248], [-46.64626118, -23.55135071], [-46.64603405, -23.55126729], [-46.64527965, -23.55102125]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida anhangabahu',
            'obs': null,
            'perimeter': 1282.47415,
            'id_type': 2,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.467',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63290314, -23.55350357], [-46.63288514, -23.55342838], [-46.63280873, -23.55317876], [-46.63274672, -23.553005], [-46.63182032, -23.55301267]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 152.09347,
            'id_type': 0,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.100',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65004888, -23.55436373], [-46.64989307, -23.55433798], [-46.64974384, -23.55428898], [-46.64948027, -23.55413097], [-46.64933428, -23.55397484], [-46.64926072, -23.55385113], [-46.64921537, -23.5537212], [-46.64916239, -23.55348008], [-46.64920596, -23.55326148], [-46.64925571, -23.55313491], [-46.64948645, -23.55297361], [-46.6491921, -23.55288071], [-46.64924003, -23.55311492], [-46.64919335, -23.55287714], [-46.6489776, -23.55263367], [-46.64882652, -23.55258312], [-46.64852555, -23.55247369], [-46.64818951, -23.55236598], [-46.64790603, -23.55226959], [-46.64764418, -23.55214969], [-46.6474457, -23.55200031], [-46.64730869, -23.55183821], [-46.6471947, -23.55166638], [-46.64702405, -23.55127733], [-46.6469365, -23.5511633], [-46.64679104, -23.55104397], [-46.64653685, -23.55090711], [-46.64626321, -23.55081639], [-46.64573888, -23.55065131], [-46.64532466, -23.55051943], [-46.64520225, -23.55046069], [-46.64508912, -23.55031866], [-46.64506062, -23.55019691], [-46.64509226, -23.55000417], [-46.64516152, -23.54991546], [-46.64520335, -23.54986881], [-46.64529727, -23.54982516], [-46.64541547, -23.54979548], [-46.64560365, -23.54981304], [-46.64570339, -23.54985019], [-46.64614702, -23.54997552]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua avanhadava',
            'obs': null,
            'perimeter': 983.34276,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.511',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61605083, -23.52884381], [-46.61655918, -23.52831803], [-46.61651928, -23.52818436], [-46.61648595, -23.52796241]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua s. biaggio',
            'obs': 'n.o. (no oficial)',
            'perimeter': 118.17421,
            'id_type': 1,
            'first_year': 1930,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.54',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6392631, -23.54809046], [-46.63909483, -23.54787361], [-46.63835578, -23.54693269], [-46.63759243, -23.54600889], [-46.63662189, -23.54484173], [-46.63636271, -23.54451854]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua formosa',
            'obs': null,
            'perimeter': 494.17856,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.56',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63755559, -23.54298478], [-46.63739405, -23.54297982], [-46.63637611, -23.54287745]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua capitao salomao',
            'obs': null,
            'perimeter': 121.05271,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.57',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64100585, -23.54308093], [-46.64094296, -23.54313599], [-46.64065419, -23.54337273], [-46.64001189, -23.54388362], [-46.63879505, -23.54484446]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua vinte e quatro de maio',
            'obs': null,
            'perimeter': 298.5061,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.223',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63257889, -23.53242253], [-46.63134951, -23.53273233], [-46.63016389, -23.53302073], [-46.62879296, -23.53337074], [-46.62771625, -23.53363561], [-46.6256476, -23.53415325], [-46.62448226, -23.53444886], [-46.62297825, -23.53483377], [-46.62228476, -23.53501629], [-46.62206673, -23.5350484], [-46.62092359, -23.53517592], [-46.61971546, -23.53528174], [-46.61884269, -23.53535795], [-46.61770303, -23.53544067], [-46.61665263, -23.53554482]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua joao theodoro',
            'obs': null,
            'perimeter': 1667.83418,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.300',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64775521, -23.54143934], [-46.64775617, -23.54134236], [-46.6478069, -23.54122593], [-46.64787786, -23.54111474], [-46.64876901, -23.53974957], [-46.64937255, -23.53880649], [-46.64945965, -23.53869188], [-46.64955003, -23.53858597], [-46.64965155, -23.53848724], [-46.64976115, -23.53840153], [-46.64982231, -23.53835542], [-46.6507425, -23.53763996], [-46.65227674, -23.53648258], [-46.65309786, -23.53587612], [-46.65324243, -23.53574669]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sebastiao pereira',
            'obs': null,
            'perimeter': 858.20271,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.520',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64691263, -23.55311893], [-46.64685908, -23.55340333], [-46.64664765, -23.55550383]], [[-46.64664538, -23.55550362], [-46.64656395, -23.55645692], [-46.64643734, -23.55781914]], [[-46.64644278, -23.55781962], [-46.6464093, -23.55827401]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua treze de maio',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.139',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62283366, -23.54765259], [-46.62212197, -23.54731259]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sobral',
            'obs': null,
            'perimeter': 81.839,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.489',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6202759, -23.55365815], [-46.62023465, -23.55275617], [-46.6201614, -23.55174504]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua mem de sa',
            'obs': null,
            'perimeter': 212.20677,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.55',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63774259, -23.54329982], [-46.63685849, -23.54371736]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'becco paysandu',
            'obs': null,
            'perimeter': 101.42201,
            'id_type': 8,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.498',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61773047, -23.55753921], [-46.61750956, -23.55644072], [-46.61737585, -23.55579505], [-46.61732534, -23.55553578], [-46.61723748, -23.5550628], [-46.61699557, -23.55390262], [-46.61691929, -23.55347627], [-46.6167997, -23.55285558]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barao de jaguara',
            'obs': null,
            'perimeter': 527.34149,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.76',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64137318, -23.54783116], [-46.64257322, -23.54801066], [-46.64278052, -23.54802209], [-46.64302876, -23.54797809], [-46.64331482, -23.5479148], [-46.64503409, -23.54755403], [-46.64633936, -23.54728027], [-46.64649731, -23.5472741], [-46.64664769, -23.5472869], [-46.64683546, -23.54732538], [-46.64697847, -23.54737333], [-46.64883724, -23.54796005], [-46.64957613, -23.54819317], [-46.6521462, -23.54902413], [-46.65234986, -23.54909292], [-46.65240049, -23.54912115], [-46.65329906, -23.54958783], [-46.65425735, -23.55008933], [-46.65479582, -23.55036734], [-46.65573913, -23.55086405], [-46.65604144, -23.55101634]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da consolaçao',
            'obs': null,
            'perimeter': 1598.09299,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.507',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63081515, -23.54793402], [-46.63030349, -23.54767392]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'sem nome',
            'perimeter': 59.65483,
            'id_type': 0,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.203',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64071235, -23.529324], [-46.63995708, -23.53073297], [-46.63933519, -23.53188272]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua aymores',
            'obs': null,
            'perimeter': 316.34419,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.4',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63361885, -23.54513946], [-46.63354214, -23.54508694], [-46.63302487, -23.54457494], [-46.63256483, -23.54424061]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'ladeira porto geral',
            'obs': null,
            'perimeter': 147.05233,
            'id_type': 7,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.69',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63865767, -23.54958497], [-46.63843945, -23.54948275], [-46.63868039, -23.54922414], [-46.63864138, -23.54863618], [-46.6388149, -23.54941369], [-46.63885993, -23.54968779]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo do riachuelo',
            'obs': null,
            'perimeter': 246.59241,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.70',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63666228, -23.54727822], [-46.63593374, -23.54760498], [-46.63613272, -23.54794694], [-46.63684374, -23.54759852], [-46.63666157, -23.54727696]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do patriarcha jose bonifacio',
            'obs': null,
            'perimeter': 248.08201,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.71',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6404177, -23.54688885], [-46.63987735, -23.54621655], [-46.63951359, -23.54576358], [-46.63936595, -23.54559343], [-46.63909726, -23.54525833], [-46.63879521, -23.54484433], [-46.63799514, -23.54371602], [-46.63790508, -23.5436453]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conselheiro crispiniano',
            'obs': null,
            'perimeter': 441.98777,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.72',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64137318, -23.54783121], [-46.64137458, -23.54738426], [-46.64137421, -23.54679476], [-46.64137421, -23.54651443], [-46.6413638, -23.54632504], [-46.64103487, -23.54612307]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua braulio gomes',
            'obs': null,
            'perimeter': 207.18101,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.73',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64256834, -23.54435016], [-46.64213335, -23.54473177], [-46.64169424, -23.54524784], [-46.64103487, -23.54612307], [-46.64059032, -23.54673051], [-46.64051914, -23.54681951], [-46.6404177, -23.54688885], [-46.64001241, -23.5472086], [-46.63978106, -23.54739676], [-46.63973389, -23.54745195]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sete de abril',
            'obs': null,
            'perimeter': 451.99534,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.74',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64137335, -23.54777776], [-46.64001222, -23.54751711], [-46.63987118, -23.54749106], [-46.63977808, -23.54746774], [-46.63973469, -23.54745102], [-46.6396793, -23.54742244], [-46.63964417, -23.54737927], [-46.63925983, -23.54678364], [-46.63893776, -23.54627558], [-46.63878825, -23.5460489]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua coronel xavier de toledo',
            'obs': null,
            'perimeter': 355.03572,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.75',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63926209, -23.54808916], [-46.63991416, -23.5477801], [-46.64010911, -23.54768582], [-46.64019464, -23.5476775], [-46.64065884, -23.5477502], [-46.64128098, -23.547846], [-46.64137318, -23.54783121]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua quirino de andrade',
            'obs': null,
            'perimeter': 228.14466,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.77',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63844004, -23.54948197], [-46.63839525, -23.54946585], [-46.63828997, -23.54938609], [-46.63791817, -23.549094], [-46.63765964, -23.54887574], [-46.63751585, -23.54882459]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do ouvidor',
            'obs': null,
            'perimeter': 120.22116,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.78',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63972941, -23.54744829], [-46.63964492, -23.54754308], [-46.63931172, -23.54790906], [-46.6392109, -23.54802319]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'ladeira da memoria',
            'obs': null,
            'perimeter': 82.80387,
            'id_type': 7,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.79',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63611839, -23.54416139], [-46.63603281, -23.5442729], [-46.63583671, -23.54437873], [-46.63580603, -23.54448211], [-46.63595398, -23.54475123], [-46.63636058, -23.54451974], [-46.63611839, -23.54416139]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'praça do correio',
            'obs': null,
            'perimeter': 179.16425,
            'id_type': 6,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.83',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64448553, -23.5447539], [-46.64550984, -23.54472477], [-46.64656614, -23.54469943], [-46.64785589, -23.54467444], [-46.65024157, -23.54459912], [-46.65186373, -23.54457071], [-46.65336928, -23.54397989]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua general jardim',
            'obs': null,
            'perimeter': 920.6817,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.84',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64469707, -23.54547887], [-46.64478475, -23.54547926], [-46.6455234, -23.5454619], [-46.6465829, -23.54542363], [-46.64787826, -23.5453938], [-46.65025131, -23.54532832], [-46.65208013, -23.54529289]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua major sertorio',
            'obs': null,
            'perimeter': 754.1185,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.85',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64659224, -23.54585401], [-46.64649109, -23.54585932], [-46.64580499, -23.54599595], [-46.64490314, -23.54618316], [-46.64473797, -23.54620872], [-46.64436577, -23.54590705], [-46.64296163, -23.54471735], [-46.64255486, -23.54436198]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua epitacio pessoa',
            'obs': null,
            'perimeter': 496.02328,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.86',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64624517, -23.54730003], [-46.64622733, -23.54722439], [-46.64598686, -23.54619652], [-46.64593242, -23.54597058]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr. theodoro bayma',
            'obs': null,
            'perimeter': 150.65494,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.87',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64662291, -23.54728479], [-46.64664349, -23.5471281], [-46.6466165, -23.54643866], [-46.64659189, -23.54585403], [-46.64658411, -23.5454236], [-46.64656547, -23.54469945], [-46.64652254, -23.5438241], [-46.64649551, -23.54276819], [-46.64645244, -23.54175194]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua rego freitas',
            'obs': null,
            'perimeter': 613.21476,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.88',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64793884, -23.54767647], [-46.64794105, -23.54755868], [-46.64792893, -23.54720841], [-46.64791633, -23.54692369], [-46.64786867, -23.54539402], [-46.64784913, -23.54467457], [-46.64781443, -23.54379346], [-46.64779136, -23.54275758], [-46.64776107, -23.54172873]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua amaral gurgel',
            'obs': null,
            'perimeter': 658.96424,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.89',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64555178, -23.54604852], [-46.64554512, -23.5459746], [-46.64553401, -23.5457044], [-46.64552181, -23.54546193], [-46.64549658, -23.54472515], [-46.64546492, -23.5438492], [-46.64541025, -23.54187017], [-46.64536626, -23.54183671]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua bento freitas',
            'obs': null,
            'perimeter': 468.80377,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.90',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64894539, -23.54799417], [-46.64899071, -23.54785556], [-46.64936381, -23.54755654], [-46.65116042, -23.54614188], [-46.65205147, -23.54539745], [-46.65208013, -23.54529289]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maria antonia',
            'obs': null,
            'perimeter': 442.4601,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.92',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64881273, -23.54272991], [-46.64822895, -23.54275382], [-46.64779124, -23.5427536], [-46.64696262, -23.54277357], [-46.64649571, -23.54277595], [-46.64611346, -23.54274073], [-46.64543333, -23.54270551]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua santa isabel',
            'obs': null,
            'perimeter': 345.44033,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.93',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6503508, -23.54677938], [-46.65028462, -23.54666665], [-46.65027398, -23.54618105], [-46.65024954, -23.54532837], [-46.65023928, -23.5445992], [-46.65021332, -23.54373735]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr villa nova',
            'obs': null,
            'perimeter': 338.69403,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.95',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64893609, -23.54713912], [-46.64792703, -23.54716565]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maria borba',
            'obs': null,
            'perimeter': 103.06657,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.48',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63538418, -23.54506647], [-46.63554015, -23.54499353], [-46.636019, -23.54471316], [-46.63657146, -23.54440034], [-46.63783575, -23.54368429], [-46.6404999, -23.54218602], [-46.64322151, -23.54064507], [-46.64326372, -23.54063367], [-46.64331265, -23.54062424], [-46.64335798, -23.54062445], [-46.64340334, -23.54062671], [-46.64344122, -23.54062494], [-46.64348792, -23.54061623], [-46.64352416, -23.54060214], [-46.64397051, -23.54034671], [-46.64565701, -23.53939514], [-46.6496132, -23.53717273], [-46.64972354, -23.53710455], [-46.6498087, -23.53701018]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida sao joao',
            'obs': null,
            'perimeter': 1725.53079,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.80',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64377739, -23.54326328], [-46.64234952, -23.54206224], [-46.64117215, -23.54298126], [-46.64100585, -23.54308093], [-46.6411541, -23.54320066], [-46.64176026, -23.54370049], [-46.64256523, -23.54435289], [-46.64377738, -23.54326331]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'praça da republica',
            'obs': null,
            'perimeter': 760.55145,
            'id_type': 6,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.81',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64528041, -23.54750237], [-46.64525502, -23.54742023], [-46.64511817, -23.54695053], [-46.64504226, -23.54668706], [-46.64490267, -23.54618146], [-46.64452545, -23.54489238], [-46.64424841, -23.54393126], [-46.64422894, -23.5438948], [-46.64366374, -23.54336546]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua araujo',
            'obs': null,
            'perimeter': 496.04997,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.82',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64377739, -23.54326328], [-46.64452987, -23.54385298], [-46.64463609, -23.54386886], [-46.64771693, -23.54379574], [-46.65304408, -23.54367108], [-46.65455438, -23.54364845]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua marques de ytu',
            'obs': null,
            'perimeter': 1124.80634,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.97',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64264261, -23.54801448], [-46.64262551, -23.54810047], [-46.64268711, -23.54849869], [-46.64294196, -23.54938655], [-46.64315056, -23.55008033], [-46.64324415, -23.55042751], [-46.64332428, -23.55079804], [-46.6433535, -23.5509391], [-46.64334136, -23.55104375]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua major quedinho',
            'obs': null,
            'perimeter': 344.69195,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.110',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6554133, -23.5488933], [-46.65535016, -23.54885302], [-46.65476145, -23.54825852], [-46.65440559, -23.547904], [-46.65358131, -23.54706462], [-46.65272858, -23.54609578], [-46.65214589, -23.54541789], [-46.65206754, -23.54533884]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua itambé',
            'obs': null,
            'perimeter': 521.70256,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.98',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64894422, -23.5479938], [-46.64879945, -23.5484104], [-46.64852365, -23.5491412], [-46.64797118, -23.55056866], [-46.64768994, -23.55131667], [-46.64771652, -23.55138442]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua caio prado',
            'obs': null,
            'perimeter': 397.64127,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.99',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65605317, -23.55555952], [-46.65585299, -23.55529827], [-46.65567534, -23.55506201], [-46.65538136, -23.55491447], [-46.654155, -23.55426432], [-46.65388482, -23.55412379], [-46.65088019, -23.5525391], [-46.65046141, -23.55230411], [-46.65021324, -23.55221117], [-46.64785271, -23.55145748], [-46.64771652, -23.55138442]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua frei caneca',
            'obs': null,
            'perimeter': 979.48283,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.101',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64614296, -23.54997438], [-46.64652032, -23.55008826], [-46.6472364, -23.55032116], [-46.64797502, -23.55055873], [-46.64953116, -23.55107371], [-46.65195539, -23.55187885], [-46.65255124, -23.5520701], [-46.65286465, -23.55217069], [-46.65310323, -23.55229694], [-46.65404794, -23.55280218], [-46.6550658, -23.55334801], [-46.65570218, -23.55393783], [-46.65604281, -23.55424937]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua augusta',
            'obs': null,
            'perimeter': 1129.04553,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.102',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64542716, -23.5519204], [-46.64545693, -23.5518255], [-46.64585796, -23.5506888], [-46.64614368, -23.5499746], [-46.64642171, -23.54915665], [-46.64630842, -23.54885694], [-46.64578956, -23.54739558]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua martinho prado',
            'obs': null,
            'perimeter': 527.98751,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.103',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64527092, -23.54750436], [-46.64541215, -23.54884911], [-46.6454672, -23.54917789], [-46.64552926, -23.54927449], [-46.6462901, -23.54954383]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua floribella',
            'obs': null,
            'perimeter': 282.1094,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.104',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64758206, -23.54756385], [-46.6475744, -23.5476496], [-46.64665309, -23.55013144]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua olinda',
            'obs': null,
            'perimeter': 300.03384,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.106',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65160059, -23.54884773], [-46.65116241, -23.54995271], [-46.65111397, -23.54997005], [-46.65006332, -23.54962228]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua visconde de ouro preto',
            'obs': null,
            'perimeter': 249.57364,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.107',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65048494, -23.54848701], [-46.65006332, -23.54962228], [-46.64950355, -23.55106458], [-46.64921523, -23.55189252]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua marquez de paranagua',
            'obs': null,
            'perimeter': 398.83908,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.108',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65476155, -23.54825844], [-46.65468713, -23.54832546], [-46.65427446, -23.54897323], [-46.65317544, -23.55069018], [-46.65307175, -23.55091243], [-46.65298808, -23.55109425], [-46.65250868, -23.55205644], [-46.65222843, -23.55264803], [-46.65199037, -23.55312464]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua antonia de queiroz',
            'obs': null,
            'perimeter': 610.13516,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.111',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65604983, -23.54489006], [-46.65286819, -23.5462544]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maranhão',
            'obs': null,
            'perimeter': 358.27026,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.113',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64209161, -23.55258671], [-46.64321271, -23.55268295], [-46.64471859, -23.55280383], [-46.64564594, -23.55289937], [-46.64672173, -23.55300118], [-46.64685704, -23.55301409]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sao domingos',
            'obs': null,
            'perimeter': 488.84603,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.114',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64496163, -23.5517127], [-46.64483709, -23.55281604], [-46.64477181, -23.55351809], [-46.64463496, -23.5547625], [-46.64445028, -23.5565482], [-46.64426938, -23.55827308]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conselheiro ramos',
            'obs': null,
            'perimeter': 729.97684,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.115',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64380976, -23.55533008], [-46.64367722, -23.55645622], [-46.64356376, -23.5574722], [-46.64354537, -23.55755664], [-46.64348625, -23.55809037], [-46.64346296, -23.55827284]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maria jose',
            'obs': null,
            'perimeter': 327.86055,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.117',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65549696, -23.55711581], [-46.65109145, -23.55589679]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barata ribeiro',
            'obs': null,
            'perimeter': 469.59585,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.120',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65373498, -23.54473007], [-46.653554, -23.54434684], [-46.65336656, -23.54398095], [-46.65324805, -23.54366803], [-46.6531571, -23.54314291], [-46.65313831, -23.54268856], [-46.65312572, -23.54161101], [-46.6526383, -23.54005023]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua aureliano coutinho',
            'obs': null,
            'perimeter': 536.27066,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.121',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65450577, -23.5480038], [-46.6545822, -23.54795949], [-46.65518955, -23.54770316], [-46.65604605, -23.54734093]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua alagoas',
            'obs': null,
            'perimeter': 173.62842,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.122',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6556983, -23.54877451], [-46.65604103, -23.54894402]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua mato grosso',
            'obs': null,
            'perimeter': 39.70951,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.124',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65607118, -23.54600155], [-46.65560464, -23.54508096], [-46.65516822, -23.54420178]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua itacolomy',
            'obs': null,
            'perimeter': 219.60942,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.126',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65207595, -23.54529173], [-46.651979, -23.54493148], [-46.65186373, -23.54457071], [-46.6515767, -23.54370544], [-46.65123059, -23.54267823], [-46.65087704, -23.54166203], [-46.65017619, -23.53957683], [-46.65016427, -23.53954403]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dona veridiana',
            'obs': null,
            'perimeter': 665.86808,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.127',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62323414, -23.54426014], [-46.62320784, -23.54444623], [-46.62381177, -23.54451993], [-46.62316655, -23.54656869]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua monsenhor anacleto',
            'obs': null,
            'perimeter': 319.24305,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.128',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62320784, -23.54444623], [-46.62165794, -23.54428497]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do gazometro',
            'obs': null,
            'perimeter': 159.25046,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.129',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62235585, -23.54435759], [-46.62234807, -23.54444684], [-46.6218547, -23.54597914]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua vasco da gama',
            'obs': null,
            'perimeter': 186.92956,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.130',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62582969, -23.54777514], [-46.62316678, -23.54656795], [-46.6218547, -23.54597914], [-46.62078008, -23.54549691], [-46.62055119, -23.54537588], [-46.61988811, -23.54497825], [-46.61886653, -23.54435746], [-46.6181018, -23.5438898], [-46.61490097, -23.54192876]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida rangel pestana',
            'obs': null,
            'perimeter': 1292.69934,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.131',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62461081, -23.54453004], [-46.62462316, -23.54445235], [-46.62503161, -23.54279492], [-46.62556533, -23.54145475], [-46.62556536, -23.54145748]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do lucas',
            'obs': null,
            'perimeter': 355.33508,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.132',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62651763, -23.54378876], [-46.62643735, -23.54376655], [-46.62487212, -23.54344215], [-46.62164341, -23.54279529]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua assumpçao',
            'obs': null,
            'perimeter': 509.71062,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.109',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6522974, -23.5490752], [-46.65233003, -23.54900668], [-46.65303564, -23.54787379], [-46.65351903, -23.5470921], [-46.65370838, -23.54700853], [-46.65465726, -23.54660779], [-46.65607233, -23.54600105]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua piauhy',
            'obs': null,
            'perimeter': 539.95096,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.112',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65604951, -23.54388354], [-46.65450909, -23.5444398], [-46.65360311, -23.54477951], [-46.65270302, -23.54510517], [-46.65234045, -23.54522651], [-46.65224086, -23.54526952], [-46.65206517, -23.54529318], [-46.65206205, -23.54529324]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida hygienopolis',
            'obs': null,
            'perimeter': 436.55805,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.116',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65482839, -23.55462132], [-46.65424805, -23.55562787]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sao miguel',
            'obs': null,
            'perimeter': 126.24026,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.119',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6556983, -23.54877451], [-46.6553445, -23.54802175], [-46.65522127, -23.54776726], [-46.65464921, -23.54661119], [-46.65373559, -23.54472984]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sabara',
            'obs': null,
            'perimeter': 490.72676,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.133',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62631585, -23.54650226], [-46.62625741, -23.54649365], [-46.62461331, -23.54573956], [-46.62358082, -23.54525326], [-46.62225428, -23.54473813]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maria domitilla',
            'obs': null,
            'perimeter': 458.87274,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.118',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65108688, -23.55589474], [-46.64882107, -23.55570057], [-46.64716675, -23.55555091], [-46.64595628, -23.55544112], [-46.64516958, -23.55537885], [-46.64294487, -23.55518015]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua manoel dutra',
            'obs': null,
            'perimeter': 835.00943,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.136',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62453449, -23.54878506], [-46.62446676, -23.54876101], [-46.62377407, -23.54848581], [-46.62321786, -23.54820611], [-46.62273698, -23.5479594]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua claudino pinto',
            'obs': null,
            'perimeter': 205.29296,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.137',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62316655, -23.54656869], [-46.62313638, -23.54669191], [-46.62273698, -23.5479594], [-46.6220245, -23.5502297], [-46.6221142, -23.55079197], [-46.62221455, -23.55143395], [-46.62257495, -23.55350469]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua carneiro leao',
            'obs': null,
            'perimeter': 788.92523,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.138',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62272057, -23.54636771], [-46.62268795, -23.54649096], [-46.61942368, -23.55122959], [-46.61937437, -23.55130421], [-46.61936008, -23.5518278]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua caetano pinto',
            'obs': null,
            'perimeter': 703.39422,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.140',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62685664, -23.54012685], [-46.62682178, -23.54071561], [-46.62678179, -23.54197927], [-46.62674525, -23.54291597], [-46.62662717, -23.54340338], [-46.62651763, -23.54378876], [-46.62625216, -23.5447267], [-46.62624851, -23.54483865]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua santa rosa',
            'obs': null,
            'perimeter': 528.28982,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.142',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62481774, -23.54798293], [-46.62468309, -23.54793217], [-46.62389327, -23.54757327]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua s. anna',
            'obs': null,
            'perimeter': 104.75498,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.143',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62580484, -23.54628607], [-46.62540178, -23.54758115]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua queiroz',
            'obs': 'n.o. (no oficial)',
            'perimeter': 149.21119,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.144',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62548555, -23.54613963], [-46.62506711, -23.54742944]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua pires ramos',
            'obs': 'n.o. (no oficial)',
            'perimeter': 149.09276,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.147',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62625058, -23.544839], [-46.62597109, -23.54479268], [-46.62351143, -23.54431777], [-46.62133155, -23.54386471]], [[-46.62133155, -23.54386471], [-46.6182222, -23.54311704]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do gazometro',
            'obs': null,
            'perimeter': 841.81801,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.239',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63303906, -23.55470234], [-46.63194336, -23.5546296]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua santa luzia',
            'obs': null,
            'perimeter': 112.15326,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.148',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62189174, -23.54398114], [-46.62169275, -23.54425293], [-46.62167295, -23.54428653], [-46.62139333, -23.54466414], [-46.62102701, -23.54517753], [-46.62084852, -23.54541071], [-46.62077897, -23.54549632]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua jairo goes',
            'obs': null,
            'perimeter': 202.6909,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.149',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62078008, -23.54549691], [-46.62050495, -23.5458771], [-46.62000682, -23.54657069], [-46.61910545, -23.54783976], [-46.61733478, -23.55034754], [-46.61489738, -23.5538057]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua piratininga',
            'obs': null,
            'perimeter': 1098.83063,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.150',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61660405, -23.5429722], [-46.61632044, -23.54336648], [-46.61587188, -23.54396498], [-46.61545229, -23.54452792], [-46.61492829, -23.54521126], [-46.61489121, -23.54526221]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr. almirante lima',
            'obs': null,
            'perimeter': 308.07546,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.151',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61544515, -23.54453723], [-46.61489574, -23.54418843]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua paulo affonso',
            'obs': null,
            'perimeter': 68.10818,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.154',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61900985, -23.54444455], [-46.6189148, -23.54454958], [-46.61814368, -23.54568178], [-46.61787728, -23.54607487], [-46.6161646, -23.54857776], [-46.61562938, -23.54937099]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida martim burchard',
            'obs': null,
            'perimeter': 645.71984,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.155',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61783566, -23.54613569], [-46.61789534, -23.54618121], [-46.61812855, -23.54631392], [-46.61828081, -23.54639578], [-46.61834879, -23.54647966], [-46.61929784, -23.54706834]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa malvina',
            'obs': 'n.o. (no oficial)',
            'perimeter': 182.26822,
            'id_type': 3,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.156',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61887528, -23.54816575], [-46.61879939, -23.54811671], [-46.61714501, -23.54714502], [-46.61594721, -23.54644265]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua prudente de moraes',
            'obs': null,
            'perimeter': 354.67257,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.157',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62030947, -23.54994374], [-46.61959633, -23.54952157], [-46.61637641, -23.54765935], [-46.61549997, -23.5471138]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua campos sales',
            'obs': null,
            'perimeter': 582.57692,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.159',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61788859, -23.5495632], [-46.61780737, -23.54950542], [-46.61702823, -23.54904594], [-46.61617524, -23.54856222], [-46.61498177, -23.54785474]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua coronel mursa',
            'obs': null,
            'perimeter': 352.01518,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.160',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61733934, -23.55034108], [-46.61726089, -23.55029872], [-46.61658907, -23.54992001], [-46.61562938, -23.54937099], [-46.61488677, -23.54894917]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da alegria',
            'obs': null,
            'perimeter': 294.04648,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.161',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61944376, -23.55120044], [-46.61932618, -23.55116802], [-46.61885807, -23.55122311], [-46.61870168, -23.55112279], [-46.61733914, -23.55034137]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua parana',
            'obs': null,
            'perimeter': 243.99162,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.167',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65562657, -23.53015701], [-46.65475671, -23.52959313], [-46.65409281, -23.52917676], [-46.65276971, -23.52834822]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua souza lima',
            'obs': null,
            'perimeter': 353.88969,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.168',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65437587, -23.52794985], [-46.65277935, -23.52835426], [-46.65150505, -23.52872776], [-46.65049537, -23.52894377]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua capistrano de abreu',
            'obs': null,
            'perimeter': 411.45024,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.169',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65602341, -23.53237928], [-46.65470067, -23.53083656], [-46.65344313, -23.53005443], [-46.65259225, -23.5295203], [-46.65139982, -23.52875027]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua lopes de oliveira',
            'obs': null,
            'perimeter': 626.45383,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.170',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65603763, -23.52906881], [-46.65571547, -23.52877065], [-46.65480834, -23.52794851]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conselheiro brotero',
            'obs': null,
            'perimeter': 176.49753,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.171',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65291979, -23.53298252], [-46.6518047, -23.5322536], [-46.65005865, -23.53113687], [-46.6484336, -23.5300983], [-46.64751886, -23.52949828], [-46.64609234, -23.52859319]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'alameda eduardo prado',
            'obs': null,
            'perimeter': 849.9207,
            'id_type': 10,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.172',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6497363, -23.52996093], [-46.64791076, -23.52882302]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr elias chaves',
            'obs': null,
            'perimeter': 225.01195,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.173',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6509526, -23.53170862], [-46.65002991, -23.53295374], [-46.64896475, -23.53439387]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua adolpho gordo',
            'obs': null,
            'perimeter': 360.05156,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.174',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65602762, -23.53496971], [-46.65513099, -23.53385463], [-46.65414623, -23.53263794], [-46.65369423, -23.53205968], [-46.65252953, -23.53129569], [-46.65253077, -23.53129405]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua albuquerque lins',
            'obs': null,
            'perimeter': 546.97444,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.176',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65601182, -23.53162818], [-46.65446049, -23.53302621], [-46.65329564, -23.5336829], [-46.65301596, -23.53385452], [-46.65284577, -23.53394599], [-46.65271214, -23.53399864]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua brigadeiro galvao',
            'obs': null,
            'perimeter': 430.17923,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.152',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61587702, -23.54395812], [-46.61579827, -23.54391876], [-46.61494158, -23.54336639], [-46.61489717, -23.54334245]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua cavalheiro',
            'obs': null,
            'perimeter': 121.13546,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.153',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61489511, -23.54346025], [-46.61495304, -23.54337378], [-46.61501659, -23.54329428], [-46.61507532, -23.54322657], [-46.61560682, -23.54250122], [-46.61568133, -23.54240687]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua joaquim nabuco',
            'obs': null,
            'perimeter': 141.6604,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.165',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62323441, -23.5442602], [-46.62328838, -23.54418972], [-46.62345772, -23.54375963], [-46.62368116, -23.54320355], [-46.62420772, -23.54183824], [-46.62470664, -23.54055494], [-46.62472772, -23.5405045]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da alfandega',
            'obs': null,
            'perimeter': 443.33389,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.166',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65601881, -23.52851043], [-46.65475671, -23.52959313]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sergio lima',
            'obs': null,
            'perimeter': 176.03102,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.177',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65175087, -23.53402565], [-46.65088811, -23.53347713], [-46.65004211, -23.53293727], [-46.64859279, -23.53203265], [-46.64782382, -23.53153462], [-46.64703534, -23.53103726], [-46.64640394, -23.53063671], [-46.64576667, -23.53022823], [-46.64485019, -23.52964392], [-46.644019, -23.52910385]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'alameda ribeiro da silva',
            'obs': null,
            'perimeter': 959.41171,
            'id_type': 10,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.163',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61487824, -23.54801237], [-46.61498177, -23.54785474], [-46.61549997, -23.5471138], [-46.61594721, -23.54644265], [-46.61781518, -23.5437142]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua domingos',
            'obs': null,
            'perimeter': 562.59078,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.178',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65309786, -23.53587612], [-46.65234523, -23.53539093], [-46.65155749, -23.53486707], [-46.65039127, -23.53414115]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua apa',
            'obs': null,
            'perimeter': 336.62584,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.179',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65325848, -23.53580106], [-46.65272519, -23.5339935]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos pyrineus',
            'obs': null,
            'perimeter': 207.45558,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.181',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65574045, -23.53006179], [-46.6556148, -23.53014938], [-46.65470547, -23.53084216], [-46.65369798, -23.53206448], [-46.65291427, -23.53298252], [-46.65252264, -23.53346854]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barra funda',
            'obs': null,
            'perimeter': 503.0004,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.184',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65475753, -23.53459892], [-46.65565934, -23.53647572], [-46.65600651, -23.53746116]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sao vicente de paulo',
            'obs': null,
            'perimeter': 342.08091,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.185',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65174365, -23.53402106], [-46.65164209, -23.53407574], [-46.65055766, -23.5341657], [-46.65039384, -23.53414275], [-46.65027746, -23.53418125], [-46.64931136, -23.53426757], [-46.6491328, -23.53428425], [-46.64904247, -23.53428879]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua carvalho',
            'obs': null,
            'perimeter': 279.40644,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.187',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64567666, -23.52861253], [-46.64523196, -23.52919444], [-46.64487588, -23.52966031], [-46.64438171, -23.5303156], [-46.64379302, -23.53109623], [-46.64272555, -23.53252235], [-46.64192843, -23.53357433], [-46.64061585, -23.53533995]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'alameda dino bueno',
            'obs': null,
            'perimeter': 906.72126,
            'id_type': 10,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.189',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64420694, -23.52890841], [-46.64404369, -23.52911989], [-46.64294832, -23.53056101], [-46.64232985, -23.5313774], [-46.64105522, -23.53308837], [-46.64038308, -23.53398704], [-46.63979247, -23.53478082]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'alameda cleveland',
            'obs': null,
            'perimeter': 791.30093,
            'id_type': 10,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.190',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64664329, -23.52894276], [-46.64569877, -23.53018494], [-46.64463803, -23.53162417], [-46.64144248, -23.53588421]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'alameda barao de piracicaba',
            'obs': null,
            'perimeter': 934.34661,
            'id_type': 10,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.191',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64982371, -23.53835623], [-46.64864568, -23.53767482], [-46.64811115, -23.53736099], [-46.64701466, -23.53670366], [-46.64618549, -23.5362054], [-46.64542864, -23.53573445], [-46.64359979, -23.534618], [-46.64277871, -23.5341029], [-46.64194136, -23.53355727], [-46.64109575, -23.53303397]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua helvetia',
            'obs': null,
            'perimeter': 1068.60335,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.192',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64761329, -23.53444389], [-46.64844977, -23.53497442]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua joao monteiro',
            'obs': null,
            'perimeter': 103.66895,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.193',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64896475, -23.53439387], [-46.64844977, -23.53497442], [-46.64780199, -23.53574063], [-46.64699514, -23.53669193], [-46.64600976, -23.53791208], [-46.64462371, -23.53957869]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barao de campinas',
            'obs': null,
            'perimeter': 725.44518,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.194',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64301166, -23.52797455], [-46.64254635, -23.52884416], [-46.64193309, -23.52988648]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua anhaia',
            'obs': null,
            'perimeter': 238.71395,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.195',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64334515, -23.52868939], [-46.64280904, -23.52835322], [-46.6421312, -23.52794394]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua julio conceicao',
            'obs': null,
            'perimeter': 148.94155,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.196',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64887402, -23.52942345], [-46.64839197, -23.53007099], [-46.64747377, -23.53131381], [-46.64640753, -23.53273727], [-46.6453371, -23.53416971], [-46.6445869, -23.5352206], [-46.6437686, -23.53629889], [-46.64313417, -23.5371433], [-46.6423801, -23.53815352], [-46.64178546, -23.53893767], [-46.64130256, -23.53957479], [-46.64092358, -23.54008739], [-46.6401374, -23.54112786]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos guayanazes',
            'obs': null,
            'perimeter': 1573.57614,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.198',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64192872, -23.52794397], [-46.6410674, -23.52948759]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos italianos',
            'obs': null,
            'perimeter': 192.24884,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.199',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63824343, -23.53228746], [-46.63884377, -23.53259107]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conego martins',
            'obs': null,
            'perimeter': 69.91662,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.200',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63937192, -23.5279438], [-46.63911303, -23.52839503], [-46.63906517, -23.52859036], [-46.63897688, -23.5286936], [-46.63846536, -23.53010337], [-46.63815168, -23.53098941], [-46.63808734, -23.53104054]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da graça',
            'obs': null,
            'perimeter': 369.79712,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.41',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63171445, -23.54767366], [-46.63105586, -23.54745433]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua lourenço gnecco',
            'obs': null,
            'perimeter': 71.49407,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.201',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6376807, -23.52793181], [-46.6380295, -23.52893705], [-46.63836146, -23.52989015], [-46.63845406, -23.53013529]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua correa dos santos',
            'obs': null,
            'perimeter': 256.49375,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.202',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64136903, -23.52962658], [-46.64099163, -23.53031], [-46.64012129, -23.53188565], [-46.63970664, -23.53210297]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua itaboca',
            'obs': null,
            'perimeter': 329.45973,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.204',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63926166, -23.53047695], [-46.63992565, -23.53079109]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua carmo cintra',
            'obs': null,
            'perimeter': 76.20538,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.208',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63651231, -23.52792784], [-46.63655322, -23.52804421], [-46.63665331, -23.52819522], [-46.63712488, -23.52916833], [-46.63807203, -23.53103878], [-46.63806191, -23.53103762]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua correa de mello',
            'obs': null,
            'perimeter': 380.83722,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.211',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63797483, -23.53507976], [-46.63777542, -23.53531694], [-46.63695437, -23.53666515]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos protestantes',
            'obs': null,
            'perimeter': 204.4689,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.263',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62324808, -23.53105502], [-46.62194048, -23.53137279], [-46.61999246, -23.5318854], [-46.61859226, -23.53222726]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua hahnemann',
            'obs': null,
            'perimeter': 492.83849,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.212',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63686862, -23.53496827], [-46.63689474, -23.53511725], [-46.63689412, -23.53637473], [-46.63695437, -23.53666515], [-46.63690315, -23.53677763], [-46.63692571, -23.53729232], [-46.63693301, -23.5378818], [-46.63660206, -23.53860917], [-46.63622346, -23.53941167]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua general couto de magalhaes',
            'obs': null,
            'perimeter': 508.83316,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.213',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63686929, -23.5349721], [-46.63673992, -23.53503306], [-46.63522319, -23.53543334], [-46.63493663, -23.53549605], [-46.63461434, -23.53561511], [-46.63389232, -23.53580927]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maua',
            'obs': null,
            'perimeter': 318.24607,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.214',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63979247, -23.53478082], [-46.63967349, -23.53487222], [-46.63905514, -23.5349347], [-46.63801163, -23.53497647], [-46.63797167, -23.53508352], [-46.6382042, -23.53508637], [-46.63865405, -23.53538664], [-46.63879248, -23.53553629], [-46.6391208, -23.53509071], [-46.63929766, -23.53491256]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo general osorio',
            'obs': null,
            'perimeter': 387.15806,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.252',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62707189, -23.52916757], [-46.62586821, -23.52862417], [-46.62575296, -23.52856869], [-46.62563176, -23.52856231]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua iguassu',
            'obs': null,
            'perimeter': 162.52545,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.175',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65602595, -23.54223328], [-46.65574692, -23.54165537], [-46.65560712, -23.54134363], [-46.65536238, -23.54054324], [-46.65501404, -23.53936239], [-46.6542735, -23.5369047], [-46.65381904, -23.53536647], [-46.65362183, -23.53475112], [-46.65328373, -23.5336439], [-46.65291109, -23.53297684], [-46.65290839, -23.53297507]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida angelica',
            'obs': null,
            'perimeter': 1075.97277,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.188',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64791076, -23.52882302], [-46.64743416, -23.52944454], [-46.64649521, -23.53069461], [-46.64544528, -23.5321285], [-46.64439414, -23.53356142], [-46.64358281, -23.5346406], [-46.64279821, -23.53568947], [-46.64046303, -23.53879494], [-46.63979882, -23.53970614], [-46.63923092, -23.54045574], [-46.63865458, -23.54123088], [-46.6382748, -23.54177886], [-46.63802701, -23.54214162], [-46.63786748, -23.54240216]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua visconde do rio branco',
            'obs': null,
            'perimeter': 1820.44657,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.207',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63897688, -23.5286936], [-46.63802641, -23.52892812], [-46.63709622, -23.52917596], [-46.63585661, -23.52948777], [-46.63415712, -23.52995005], [-46.63198069, -23.53049574]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua tres rios',
            'obs': null,
            'perimeter': 741.79225,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.215',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63501927, -23.52971554], [-46.63467954, -23.52863871], [-46.63444777, -23.52792014]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua amazonas',
            'obs': null,
            'perimeter': 207.22105,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.206',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63691474, -23.5279305], [-46.63582136, -23.52827438], [-46.63475627, -23.52861423], [-46.63462313, -23.52865671], [-46.63383632, -23.52890025]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua guarany',
            'obs': null,
            'perimeter': 332.19071,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.504',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64573748, -23.55290803], [-46.64548382, -23.55540373]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua joao passalacqua',
            'obs': null,
            'perimeter': 277.60027,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.216',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63445201, -23.52793329], [-46.63424864, -23.52795705], [-46.63133043, -23.52883819]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua bandeirantes',
            'obs': null,
            'perimeter': 334.49313,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.217',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63474199, -23.53187079], [-46.63414102, -23.52995409], [-46.63383632, -23.52890025], [-46.63379437, -23.52873773], [-46.63360676, -23.52815086], [-46.63352523, -23.52790993]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua afonso penna',
            'obs': null,
            'perimeter': 455.9532,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.218',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63133043, -23.52883819], [-46.63112094, -23.52891002], [-46.62909454, -23.52949826], [-46.62869688, -23.52962179], [-46.62686438, -23.53018808]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr. rodrigo monteiro de barros',
            'obs': null,
            'perimeter': 479.95653,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.220',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63338753, -23.53497664], [-46.63258085, -23.53242884], [-46.63198098, -23.53049567], [-46.63137177, -23.52882571], [-46.63100262, -23.52791948]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida tiradentes',
            'obs': null,
            'perimeter': 818.94465,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.221',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62967159, -23.53163158], [-46.62907008, -23.52950586], [-46.62906543, -23.52938501], [-46.62896151, -23.52915857], [-46.62909609, -23.52854812], [-46.62925776, -23.52792084]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua alfredo maia',
            'obs': null,
            'perimeter': 424.30617,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.222',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63214004, -23.53100824], [-46.62967159, -23.53163158], [-46.6284703, -23.53197613], [-46.62617169, -23.53256713]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua jorge miranda',
            'obs': null,
            'perimeter': 633.46822,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.224',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.638005, -23.53499425], [-46.63688326, -23.53505178], [-46.63669283, -23.53428595], [-46.63669219, -23.53428618]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'sem nome',
            'perimeter': 201.79886,
            'id_type': 0,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.227',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62911619, -23.55067984], [-46.6291527, -23.55117658], [-46.62917872, -23.55143887], [-46.6291757, -23.55180999], [-46.62914584, -23.55216039], [-46.62913289, -23.55234257]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos carmelitas',
            'obs': null,
            'perimeter': 184.55146,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.228',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63285081, -23.55252927], [-46.63287671, -23.55259828], [-46.63350435, -23.55302511], [-46.63390457, -23.5532909], [-46.63419015, -23.55347974], [-46.63426165, -23.55349676], [-46.63433121, -23.55351201]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conde do pinhal',
            'obs': null,
            'perimeter': 188.79299,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.229',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63118881, -23.5506879], [-46.63111735, -23.5507553], [-46.62950623, -23.55248889]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do carmo',
            'obs': null,
            'perimeter': 263.25228,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.230',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63001496, -23.55194149], [-46.6299565, -23.55190832], [-46.62947039, -23.55158668], [-46.62926621, -23.55144121], [-46.62917295, -23.55138075]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua agassiz',
            'obs': null,
            'perimeter': 106.08353,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.233',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63118881, -23.5506879], [-46.63168604, -23.55107277], [-46.63238495, -23.55161504], [-46.63261919, -23.55180135], [-46.63270487, -23.55198922], [-46.63296295, -23.55249101]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua anitta garibaldi',
            'obs': null,
            'perimeter': 275.20715,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.234',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63285081, -23.55252927], [-46.63296295, -23.55249101], [-46.63307487, -23.55245643], [-46.63430926, -23.55189886]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua irman simpliciana',
            'obs': null,
            'perimeter': 164.59893,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.235',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63261472, -23.55179779], [-46.63262988, -23.55182479], [-46.63396173, -23.55119755]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa do quartel',
            'obs': null,
            'perimeter': 156.05833,
            'id_type': 3,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.236',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63316983, -23.55279761], [-46.63297687, -23.55560809], [-46.63283345, -23.5582308]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conselheiro furtado',
            'obs': null,
            'perimeter': 602.6949,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.237',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63312444, -23.55345866], [-46.63304282, -23.55346874], [-46.62945202, -23.55436409], [-46.62928987, -23.55440327], [-46.62912544, -23.55448663]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conde de sarzedas',
            'obs': null,
            'perimeter': 424.45202,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.238',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6354496, -23.55291051], [-46.63486441, -23.55313462]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua livre',
            'obs': null,
            'perimeter': 64.69558,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.240',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64043596, -23.53520672], [-46.64011756, -23.53559513], [-46.63852321, -23.53756557], [-46.63782264, -23.53844059]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos andradas',
            'obs': null,
            'perimeter': 446.61827,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.242',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63177056, -23.53465694], [-46.63175141, -23.53458247], [-46.6315505, -23.53384675], [-46.63124276, -23.5327583]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dutra rodrigues',
            'obs': null,
            'perimeter': 217.0665,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.243',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63040289, -23.5329626], [-46.63042823, -23.5330367], [-46.63089731, -23.53480153]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua d. antonio de mello',
            'obs': null,
            'perimeter': 209.83552,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.244',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.630316, -23.53490012], [-46.63029979, -23.53482524], [-46.62996896, -23.53361961], [-46.62982346, -23.53310765]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr. pedro arbues',
            'obs': null,
            'perimeter': 204.79276,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.245',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6295117, -23.53318724], [-46.62954749, -23.53326182], [-46.63001425, -23.53495129]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua guilherme maw',
            'obs': null,
            'perimeter': 202.10768,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.253',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62621051, -23.5287787], [-46.62624328, -23.52867693], [-46.62660333, -23.52796207]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua victor ayrosa',
            'obs': null,
            'perimeter': 99.04526,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.256',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62628817, -23.53555337], [-46.62624809, -23.53543293], [-46.62604791, -23.53496883], [-46.62570539, -23.53413879]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua pedro alvares cabral',
            'obs': null,
            'perimeter': 167.61615,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.257',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62466672, -23.53580588], [-46.62465457, -23.53574248], [-46.6245053, -23.53444302]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua joao jacyntho',
            'obs': null,
            'perimeter': 151.84416,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.258',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62573202, -23.53136417], [-46.62538996, -23.53132513], [-46.62424998, -23.53080413], [-46.62324702, -23.53105145]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua affonso arinos',
            'obs': null,
            'perimeter': 271.12709,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.250',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62771009, -23.5279731], [-46.62578675, -23.53157279]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida tamanduatehy',
            'obs': null,
            'perimeter': 444.40062,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.351',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63215601, -23.54192371], [-46.6320578, -23.54193603], [-46.63170326, -23.54187712], [-46.6309628, -23.54176317], [-46.63076886, -23.54173695], [-46.63052138, -23.54172739], [-46.63013628, -23.54181729], [-46.63004369, -23.54186119]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua page',
            'obs': null,
            'perimeter': 220.04769,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.225',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63338753, -23.53497664], [-46.63359918, -23.53506121], [-46.63405078, -23.5349504], [-46.6347531, -23.53476403], [-46.63603601, -23.53443235], [-46.63669283, -23.53428595], [-46.63694622, -23.53419738], [-46.63726727, -23.53380774], [-46.63780157, -23.533015], [-46.63824826, -23.5322899], [-46.63867327, -23.53149346], [-46.63926166, -23.53047695], [-46.64005403, -23.52902423], [-46.64065061, -23.52794676]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua jose paulino',
            'obs': null,
            'perimeter': 1168.48524,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.251',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62578675, -23.53157279], [-46.62570127, -23.53124695], [-46.62561602, -23.52795466]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida da cantareira',
            'obs': null,
            'perimeter': 401.83465,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.254',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62755288, -23.52826734], [-46.62741107, -23.52820612], [-46.62688552, -23.52795912]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua tapajoz',
            'obs': null,
            'perimeter': 76.22485,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.255',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62641671, -23.5303938], [-46.62567097, -23.53007691]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua tibiriça',
            'obs': null,
            'perimeter': 83.84623,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.249',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62592782, -23.53203515], [-46.62617169, -23.53256713], [-46.62670652, -23.53388828], [-46.62732858, -23.53538667]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da cantareira',
            'obs': null,
            'perimeter': 397.81252,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.268',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62228612, -23.53501593], [-46.62225103, -23.53620404], [-46.62211519, -23.53891952], [-46.62205141, -23.5393023], [-46.62199211, -23.54036469], [-46.62193597, -23.54106789], [-46.62190574, -23.54132464], [-46.62184369, -23.54170823], [-46.62164569, -23.54279575], [-46.6213495, -23.54386844], [-46.62036459, -23.54526398]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua monsenhor andrade',
            'obs': null,
            'perimeter': 1172.10129,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.269',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6250235, -23.52988654], [-46.62484154, -23.53107449], [-46.62472695, -23.53206798]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua itariry',
            'obs': null,
            'perimeter': 243.50997,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.270',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62578642, -23.53157153], [-46.62547819, -23.53189609], [-46.62472695, -23.53206798], [-46.62363866, -23.53236341]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua pasteur',
            'obs': null,
            'perimeter': 242.65387,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.274',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62764293, -23.53140664], [-46.62690821, -23.53109035], [-46.62649819, -23.53091027]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua amelia sa barbosa',
            'obs': 'n.o. (no oficial)',
            'perimeter': 129.17216,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.275',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62721624, -23.53229856], [-46.62723273, -23.53220716], [-46.62764293, -23.53140664]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua gabriella sa barbosa',
            'obs': 'n.o. (no oficial)',
            'perimeter': 108.31245,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.276',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62730281, -23.5320704], [-46.62696896, -23.53192195], [-46.62626777, -23.53162212], [-46.62616169, -23.53157391]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua odette sa barbosa',
            'obs': 'n.o. (no oficial)',
            'perimeter': 128.84689,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.277',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62695429, -23.53191567], [-46.62729685, -23.53125766], [-46.62781203, -23.53027503]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua mathilde sa barbosa',
            'obs': 'n.o. (no oficial)',
            'perimeter': 201.70206,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.278',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62772382, -23.53044327], [-46.62766979, -23.53042229], [-46.62737309, -23.53029366]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua teresa benedita sa barbosa',
            'obs': 'n.o. (no oficial)',
            'perimeter': 39.46512,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.281',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61836745, -23.52794533], [-46.61825753, -23.52803347], [-46.61793049, -23.52829273], [-46.61731989, -23.52919206], [-46.61721245, -23.52940207], [-46.61735487, -23.52944846]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua das olarias',
            'obs': null,
            'perimeter': 217.55869,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.282',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61490471, -23.52873961], [-46.61556063, -23.5286479], [-46.61569065, -23.52868684], [-46.61650341, -23.52904104], [-46.61723983, -23.52934854], [-46.61735784, -23.52944773], [-46.61740358, -23.52955578], [-46.61762372, -23.5298524], [-46.61778784, -23.53006544], [-46.61800783, -23.53025416], [-46.61810593, -23.53029014], [-46.61822328, -23.53046335], [-46.61828735, -23.53059888], [-46.618399, -23.53122305], [-46.61859606, -23.53222634]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua rio bonito',
            'obs': null,
            'perimeter': 617.3701,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.505',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64466029, -23.55453215], [-46.64301975, -23.55439161]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua quatorze de julho',
            'obs': null,
            'perimeter': 168.2113,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.283',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61859689, -23.53222613], [-46.61867454, -23.53233734], [-46.6189577, -23.53282191], [-46.61924709, -23.5333152], [-46.61988433, -23.53438971], [-46.62035953, -23.53522533], [-46.62038732, -23.53599345], [-46.62041138, -23.53800341], [-46.62043752, -23.54011534]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua rodrigues dos santos',
            'obs': null,
            'perimeter': 919.44941,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.285',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61862061, -23.53226011], [-46.61854182, -23.53233061], [-46.61665494, -23.53554459]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maria marcelina',
            'obs': null,
            'perimeter': 415.94353,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.418',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64489954, -23.55226277], [-46.64481955, -23.55223785], [-46.64329203, -23.55188078]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua ricardo baptista',
            'obs': null,
            'perimeter': 169.50936,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.286',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61879078, -23.53253627], [-46.61876141, -23.53283087], [-46.61885571, -23.53535682], [-46.61896764, -23.53722492], [-46.61903426, -23.53948349], [-46.61737648, -23.54181276]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barao de ladario',
            'obs': null,
            'perimeter': 1078.61234,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.288',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61599825, -23.53122577], [-46.61490474, -23.530079]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua carlos de campos',
            'obs': null,
            'perimeter': 169.10535,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.289',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61587439, -23.53109588], [-46.61491534, -23.53215675]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua mendes gonçalves',
            'obs': null,
            'perimeter': 152.94754,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.290',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61523936, -23.53179834], [-46.61492533, -23.53146322]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr. virg. do nascimento',
            'obs': null,
            'perimeter': 49.04634,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.298',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61777047, -23.53364449], [-46.61780707, -23.53392574], [-46.61770211, -23.53544076], [-46.61772907, -23.53560212], [-46.61764369, -23.53735141], [-46.617621, -23.53790503], [-46.61751446, -23.54010853], [-46.6173898, -23.54023234], [-46.61715148, -23.54055846], [-46.61658504, -23.54132295]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua miller',
            'obs': null,
            'perimeter': 881.90704,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.301',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64940054, -23.53876966], [-46.64968957, -23.53899269], [-46.65010995, -23.53929551], [-46.65022529, -23.53943395], [-46.65016427, -23.53954403], [-46.64991757, -23.53966069], [-46.6497614, -23.53958902], [-46.64917262, -23.53911889]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo de santa cecilia',
            'obs': null,
            'perimeter': 251.63033,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.302',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64927169, -23.53896409], [-46.6488601, -23.53870644], [-46.64797866, -23.53816766], [-46.64791126, -23.53812882], [-46.64651507, -23.53728638]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua anna cintra',
            'obs': null,
            'perimeter': 337.27284,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.264',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62331013, -23.53474884], [-46.62298837, -23.53371255], [-46.62226745, -23.53129333], [-46.62199022, -23.53033579], [-46.62170734, -23.52937567], [-46.62141974, -23.52841135]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua carnot',
            'obs': null,
            'perimeter': 727.91687,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.296',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6166169, -23.53293754], [-46.61655369, -23.53301373], [-46.61549552, -23.53492493], [-46.61539085, -23.53501204], [-46.61537644, -23.53545073], [-46.61534794, -23.53684761], [-46.61531981, -23.53869868], [-46.61530195, -23.53889093], [-46.6149055, -23.53939269]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua casemiro de abreu',
            'obs': null,
            'perimeter': 761.12336,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.297',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61665263, -23.53554482], [-46.61607637, -23.53560361], [-46.61574927, -23.5352911], [-46.61543899, -23.53497197], [-46.61491939, -23.53441322]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua silva telles',
            'obs': null,
            'perimeter': 236.27011,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.303',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65125163, -23.53890456], [-46.65129813, -23.53898896], [-46.65139532, -23.53928945], [-46.65162652, -23.54000091], [-46.6521338, -23.54156599], [-46.65214663, -23.54162897]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua fortunato',
            'obs': null,
            'perimeter': 315.46054,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.295',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61568208, -23.53164031], [-46.61560443, -23.53175753], [-46.61492118, -23.53393783]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua mendes junior',
            'obs': null,
            'perimeter': 266.54548,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.305',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6557011, -23.54155318], [-46.65558126, -23.54155049], [-46.65493472, -23.5415629], [-46.65446192, -23.54157676], [-46.65312585, -23.54162227], [-46.65214663, -23.54162897], [-46.65189129, -23.54164397], [-46.65152626, -23.54165557], [-46.65116353, -23.54166053], [-46.65088065, -23.54167241], [-46.65008226, -23.54167862], [-46.64879082, -23.54172007], [-46.64776142, -23.54174054]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua jaguaribe',
            'obs': null,
            'perimeter': 811.02949,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.306',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65053359, -23.5406402], [-46.65062425, -23.5406184], [-46.65112282, -23.54047737], [-46.65150445, -23.54036627], [-46.65172555, -23.54030644], [-46.65200517, -23.54022451], [-46.6526383, -23.54005023], [-46.65270704, -23.54003069], [-46.65300323, -23.53994868], [-46.65309711, -23.53993137], [-46.65328612, -23.53992385], [-46.65516047, -23.5398588]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua canuto do val',
            'obs': null,
            'perimeter': 484.16128,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.307',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65516982, -23.5398905], [-46.65527562, -23.53986821], [-46.65602315, -23.53967784]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua baroneza de itu',
            'obs': null,
            'perimeter': 90.26641,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.308',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65497071, -23.5415622], [-46.65495071, -23.54148692], [-46.65481312, -23.5410736], [-46.65460923, -23.54050155], [-46.65440545, -23.539885], [-46.65408758, -23.53896075], [-46.65353004, -23.5373345], [-46.65347038, -23.5372282], [-46.65346628, -23.53710937], [-46.65289334, -23.53644749], [-46.65267025, -23.53619194]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barao de tatuhy',
            'obs': null,
            'perimeter': 647.33215,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.309',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65384904, -23.53826496], [-46.65375596, -23.53829836], [-46.65329519, -23.53868253], [-46.6528171, -23.53908452], [-46.65245864, -23.53938505]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua imaculado conceiçao',
            'obs': null,
            'perimeter': 189.1689,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.310',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65602917, -23.54262198], [-46.65451049, -23.54266771], [-46.65313851, -23.54269351], [-46.65268296, -23.54269485], [-46.65124094, -23.54270895]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'dr martinico prado',
            'obs': null,
            'perimeter': 489.01553,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.311',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64999561, -23.5416814], [-46.64998332, -23.54160462], [-46.64985141, -23.54124951], [-46.64971907, -23.54085915], [-46.64957795, -23.54044733], [-46.64945761, -23.54011158]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua jesuino paschoal',
            'obs': null,
            'perimeter': 182.44972,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.312',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64855858, -23.54007192], [-46.64905279, -23.54037241]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barao de joatinga',
            'obs': null,
            'perimeter': 60.4461,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.313',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64544946, -23.54328944], [-46.64536046, -23.54327678], [-46.64497065, -23.54301072], [-46.64456616, -23.54276047], [-46.64430277, -23.54258508], [-46.6431606, -23.54186338], [-46.64218259, -23.54123331], [-46.6420942, -23.54118673], [-46.6415924, -23.54085613], [-46.64130517, -23.54067859], [-46.63979813, -23.53970704], [-46.63877223, -23.53904994], [-46.63782264, -23.53844059], [-46.63693289, -23.5378722]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua aurora',
            'obs': null,
            'perimeter': 1057.47021,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.314',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63692932, -23.53788991], [-46.63657553, -23.53788649], [-46.63568302, -23.53784801], [-46.63558965, -23.53784899], [-46.63534786, -23.53786132], [-46.63526298, -23.53786221], [-46.6347642, -23.53785963], [-46.63452798, -23.53785548], [-46.63427404, -23.53786673], [-46.63345467, -23.53785381], [-46.63293183, -23.53784835]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua washington luis',
            'obs': null,
            'perimeter': 408.36062,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.338',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64272576, -23.53252208], [-46.6418768, -23.53198554]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'alameda glette',
            'obs': null,
            'perimeter': 105.09744,
            'id_type': 10,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.316',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64655275, -23.54146446], [-46.64655178, -23.54137847], [-46.64649318, -23.54110922], [-46.64639068, -23.54057616], [-46.64612909, -23.53930136], [-46.64611089, -23.53925523], [-46.64605145, -23.53917356]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maria theresa',
            'obs': null,
            'perimeter': 259.90332,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.318',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64524852, -23.54012279], [-46.64516793, -23.54016854], [-46.64429954, -23.54108464], [-46.64341723, -23.54202553], [-46.64291559, -23.54253839]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr. vieira de carvalho',
            'obs': null,
            'perimeter': 358.62844,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.319',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64536626, -23.54183671], [-46.64443272, -23.54267161], [-46.64390312, -23.54314437], [-46.64377723, -23.54326314]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do arouche',
            'obs': null,
            'perimeter': 226.45425,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.320',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64567884, -23.54148271], [-46.6456688, -23.54135994], [-46.64538614, -23.54051501], [-46.64524852, -23.54012279], [-46.64519331, -23.5399487], [-46.64495996, -23.53978844], [-46.64462371, -23.53957869], [-46.64382295, -23.53907415], [-46.64318172, -23.53865543], [-46.64238909, -23.53814147], [-46.6422895, -23.53807861], [-46.64218273, -23.53799175], [-46.64207384, -23.53789924], [-46.64196189, -23.53780865], [-46.64149891, -23.53741738], [-46.64048288, -23.53669593], [-46.63968, -23.53613591], [-46.63879248, -23.53553629]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua general osorio',
            'obs': null,
            'perimeter': 994.07591,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.321',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64427669, -23.54110901], [-46.643963, -23.54091134], [-46.64370889, -23.54076464], [-46.64348046, -23.54061762], [-46.64291408, -23.54029039], [-46.64285675, -23.54025472], [-46.64242816, -23.53999336], [-46.64216093, -23.53983106], [-46.64143294, -23.53940278], [-46.640451, -23.53881144], [-46.64032327, -23.53873614], [-46.6397206, -23.53837023], [-46.63847957, -23.53762007], [-46.63799028, -23.53732803], [-46.63753873, -23.53705282], [-46.63694316, -23.53668977]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua victoria',
            'obs': null,
            'perimeter': 894.60172,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.322',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64235982, -23.53972322], [-46.64205532, -23.54010678], [-46.64066121, -23.54194376], [-46.6405981, -23.54213042]], [[-46.65049537, -23.52894377], [-46.64973126, -23.52995779], [-46.64924206, -23.53061498], [-46.64832357, -23.53185829], [-46.64731863, -23.5332202], [-46.64613365, -23.53482596], [-46.64542712, -23.53573642], [-46.64453439, -23.53688276], [-46.64375753, -23.53790735], [-46.64235982, -23.53972322]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conselheiro nebias',
            'obs': null,
            'perimeter': 1777.03395,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.323',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64332183, -23.53968636], [-46.64321692, -23.5396284], [-46.64269244, -23.53929108], [-46.64191115, -23.53877191], [-46.64094938, -23.53814818], [-46.639847, -23.53742244], [-46.6390694, -23.53689054], [-46.63815955, -23.53629754], [-46.63784568, -23.53608469], [-46.63746303, -23.53582991], [-46.63701748, -23.53552724], [-46.63689455, -23.53551861]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos gusmoes',
            'obs': null,
            'perimeter': 804.20244,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.324',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63879452, -23.53553767], [-46.63845533, -23.53595918], [-46.63817335, -23.53630654], [-46.63766434, -23.53693539], [-46.63756271, -23.53706744], [-46.63729352, -23.53739967], [-46.63704108, -23.53772773], [-46.6369316, -23.53776776]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do triumpho',
            'obs': null,
            'perimeter': 313.50425,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.325',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64234952, -23.54206224], [-46.6428157, -23.54164118]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa joaquim gustavo',
            'obs': null,
            'perimeter': 66.6344,
            'id_type': 3,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.503',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64566506, -23.55541807], [-46.64544584, -23.55773134], [-46.64534246, -23.5582806]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua ruy barbosa',
            'obs': null,
            'perimeter': 318.89919,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.328',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63984604, -23.54091221], [-46.63980251, -23.54097024], [-46.63904794, -23.54186722], [-46.63834527, -23.54270842]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua amador bueno',
            'obs': null,
            'perimeter': 251.11058,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.335',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63629046, -23.53973145], [-46.63639838, -23.53975729], [-46.63759104, -23.5405349], [-46.63866527, -23.54121651], [-46.64012724, -23.5423956], [-46.64100366, -23.54308284]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua ypiranga',
            'obs': null,
            'perimeter': 609.48394,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.336',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6498087, -23.53701018], [-46.64982206, -23.53700063]], [[-46.65194941, -23.53413289], [-46.65148685, -23.5348231], [-46.65074948, -23.53577679], [-46.64982122, -23.53700174]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua de sao joao',
            'obs': null,
            'perimeter': 386.77748,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.330',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64521033, -23.53737725], [-46.64454641, -23.53686733], [-46.64375407, -23.53631823], [-46.6428806, -23.53557934]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua general rondon',
            'obs': null,
            'perimeter': 310.48127,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.332',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63690345, -23.54148782], [-46.63668353, -23.54139775], [-46.63660133, -23.54153059], [-46.63647678, -23.54172641], [-46.63661377, -23.54175795], [-46.63672249, -23.54171082], [-46.63690345, -23.54148782]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo santa ephigenia',
            'obs': null,
            'perimeter': 124.17333,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.51',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64169429, -23.54524788], [-46.64107084, -23.54474832], [-46.63949681, -23.54346302], [-46.63894273, -23.54306175]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua d. jose de barros',
            'obs': null,
            'perimeter': 370.96064,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.337',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6498087, -23.53701018], [-46.64954358, -23.53685088], [-46.64805671, -23.53589478], [-46.64781283, -23.53572781], [-46.64729863, -23.53541624], [-46.64698779, -23.53521623], [-46.64621236, -23.53471931], [-46.64533768, -23.53416894], [-46.64438804, -23.53356953], [-46.64356033, -23.53306091]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'alameda glette',
            'obs': null,
            'perimeter': 773.595,
            'id_type': 10,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.333',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63656113, -23.54083281], [-46.63563286, -23.54114244]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua coronel baptista da luz',
            'obs': null,
            'perimeter': 100.79259,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.329',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63755559, -23.54298478], [-46.63774259, -23.54329982], [-46.63796903, -23.54360934], [-46.63894494, -23.54305834], [-46.63834865, -23.54270437], [-46.63786811, -23.54240112], [-46.63755559, -23.54298478]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo do paysandu',
            'obs': null,
            'perimeter': 401.91596,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.334',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63559574, -23.54104309], [-46.63402192, -23.54153732]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua capitao mor jeronymo leitao',
            'obs': null,
            'perimeter': 169.75875,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.339',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64937277, -23.53550237], [-46.64875018, -23.5363407]], [[-46.65498601, -23.52810954], [-46.65412729, -23.52919838], [-46.65346113, -23.53006562], [-46.6518704, -23.53216598], [-46.65127158, -23.53296459], [-46.64937277, -23.53550237]], [[-46.64937277, -23.53550237], [-46.64937256, -23.53548527]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua victorino carmillo',
            'obs': null,
            'perimeter': 1113.8782,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.340',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63622346, -23.53941167], [-46.63614287, -23.53911936], [-46.63605795, -23.53876584], [-46.63601027, -23.53846256], [-46.63588831, -23.53785686], [-46.63568241, -23.53666036], [-46.63546515, -23.53536948]], [[-46.63668353, -23.54139775], [-46.63656113, -23.54083281], [-46.63637366, -23.54012862], [-46.63622346, -23.53941167]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da conceicao',
            'obs': null,
            'perimeter': 679.46747,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.384',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62215655, -23.53809271], [-46.62201985, -23.53804623], [-46.62163347, -23.53805917], [-46.62041139, -23.5380036], [-46.61898872, -23.53793952], [-46.61762191, -23.53788281], [-46.61616727, -23.53782713], [-46.61533356, -23.53779423], [-46.61490098, -23.53777523]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua oriente',
            'obs': null,
            'perimeter': 742.50177,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.341',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63605355, -23.53873786], [-46.63520705, -23.53894883], [-46.63488568, -23.53905115], [-46.6344496, -23.53915606], [-46.63420881, -23.53921204], [-46.63377217, -23.53923371], [-46.63327719, -23.539237], [-46.63284259, -23.53924485], [-46.63241564, -23.5392421], [-46.6320147, -23.53938198], [-46.63122345, -23.53957945], [-46.63063944, -23.53972218], [-46.63003403, -23.53986323], [-46.62936642, -23.54001865], [-46.62928471, -23.54011709]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua senador queiroz',
            'obs': null,
            'perimeter': 715.74113,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.342',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63530137, -23.54024238], [-46.63548071, -23.54019034], [-46.63633569, -23.53994739]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa beneficiencia portugueza',
            'obs': null,
            'perimeter': 110.54716,
            'id_type': 3,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.343',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63625907, -23.542701], [-46.63594579, -23.54280161], [-46.63585372, -23.54282581], [-46.63551454, -23.5427855], [-46.63497341, -23.5427112], [-46.63472398, -23.542707]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr pedro lessa',
            'obs': null,
            'perimeter': 159.89703,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.344',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63450924, -23.53914171], [-46.63447743, -23.53947047], [-46.63429086, -23.54124209], [-46.63428024, -23.5414562]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua d. francisco de souza',
            'obs': null,
            'perimeter': 257.41171,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.345',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63372724, -23.54115877], [-46.6337732, -23.54104808], [-46.63384738, -23.53922997]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua augusto de queiroz',
            'obs': null,
            'perimeter': 214.61612,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.346',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63327453, -23.53923705], [-46.63326936, -23.53942514], [-46.6332063, -23.54068777], [-46.63319006, -23.54084742]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua augusto severo',
            'obs': null,
            'perimeter': 178.57326,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.347',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63293197, -23.53784607], [-46.63261786, -23.53783646], [-46.63202791, -23.53798917], [-46.63060682, -23.53834452], [-46.62874008, -23.53882158], [-46.62829055, -23.53894751], [-46.62758888, -23.53922093]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua paula souza',
            'obs': null,
            'perimeter': 568.54454,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.349',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63060335, -23.5383454], [-46.63045665, -23.53804576], [-46.63023435, -23.53749573], [-46.62993121, -23.53674524]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua antonio paes',
            'obs': null,
            'perimeter': 190.10316,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.350',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62899184, -23.53698745], [-46.62920582, -23.53745667], [-46.62967954, -23.5385815]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua plinio ramos',
            'obs': null,
            'perimeter': 190.00137,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.353',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63094899, -23.54366496], [-46.63066476, -23.54334938], [-46.63032889, -23.54254234], [-46.63004369, -23.54186119], [-46.62960923, -23.54082128], [-46.62941147, -23.54037004], [-46.62928421, -23.54011701], [-46.62903526, -23.53949881], [-46.62875681, -23.5388173], [-46.62810236, -23.537227], [-46.62732846, -23.53538669]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da cantareira',
            'obs': null,
            'perimeter': 990.85585,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.354',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62848497, -23.53572119], [-46.62792191, -23.53593234]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sa barbosa',
            'obs': 'n.o. (no oficial)',
            'perimeter': 62.066,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.355',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62883828, -23.53655532], [-46.62848079, -23.53572276], [-46.62827996, -23.53523738], [-46.62763029, -23.53365712]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua lazaro',
            'obs': null,
            'perimeter': 343.85496,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.357',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62767982, -23.53533155], [-46.6277047, -23.53541042], [-46.62792191, -23.53593234], [-46.62818258, -23.5365466], [-46.62830804, -23.53684742]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua possidonio ignacio',
            'obs': null,
            'perimeter': 179.74593,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.358',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62875585, -23.53636334], [-46.62817714, -23.53653378], [-46.62785086, -23.53662896]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos clerigos',
            'obs': null,
            'perimeter': 96.97477,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.331',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6411213, -23.53567956], [-46.64085388, -23.53604165], [-46.6404124, -23.53664677], [-46.6398478, -23.53742296], [-46.6393307, -23.53813455], [-46.63869901, -23.53900296], [-46.63821868, -23.53966615], [-46.63807655, -23.53986204], [-46.63690345, -23.54148782]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua santa ephigenia',
            'obs': null,
            'perimeter': 774.10578,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.365',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6281637, -23.54274889], [-46.6281144, -23.54172493], [-46.6279894, -23.54136381], [-46.62767627, -23.5406229], [-46.62737678, -23.54007359]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua luiz de camoes',
            'obs': null,
            'perimeter': 311.6376,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.374',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63288919, -23.53851618], [-46.63277107, -23.53850618], [-46.63218488, -23.53847528]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'becco da fabrica',
            'obs': null,
            'perimeter': 72.06211,
            'id_type': 8,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.375',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63085212, -23.54255889], [-46.63069928, -23.54261591], [-46.63047524, -23.54267543], [-46.63038845, -23.54268547], [-46.62936451, -23.54269421], [-46.62899603, -23.54272769]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua ceres',
            'obs': null,
            'perimeter': 191.92742,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.376',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62757592, -23.54273724], [-46.62757911, -23.5423176], [-46.62758514, -23.54179015], [-46.62759976, -23.54128186]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua carlos garcia',
            'obs': null,
            'perimeter': 161.20083,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.377',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62799333, -23.54137518], [-46.62681032, -23.54107785], [-46.62472649, -23.54050744], [-46.62203918, -23.53952142]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua americo brasiliense',
            'obs': null,
            'perimeter': 642.4604,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.378',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6266909, -23.54314034], [-46.62644498, -23.54307276], [-46.62505158, -23.54274479], [-46.62396034, -23.54247967]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua alvares de azevedo',
            'obs': null,
            'perimeter': 288.25465,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.379',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62526604, -23.54220626], [-46.62497089, -23.54210096], [-46.62420235, -23.54185216], [-46.62346268, -23.54160073], [-46.62193149, -23.54110596]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua fernandes silva',
            'obs': null,
            'perimeter': 361.63674,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.389',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61819373, -23.5406645], [-46.61745115, -23.54017141], [-46.61659778, -23.53963137], [-46.61594971, -23.53920871], [-46.61530945, -23.53881023], [-46.61491395, -23.53853664]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conselheiro belisario',
            'obs': null,
            'perimeter': 409.53297,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.399',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61713631, -23.54057893], [-46.6179158, -23.54105501]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa da concordia',
            'obs': null,
            'perimeter': 95.46688,
            'id_type': 3,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.380',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62191376, -23.54125651], [-46.62180201, -23.54121893], [-46.62147062, -23.54100014], [-46.62051935, -23.5403745]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua florida',
            'obs': null,
            'perimeter': 173.07098,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.381',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61945806, -23.5414523], [-46.62026217, -23.5419481], [-46.62164191, -23.54280944]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sampaio moreira',
            'obs': null,
            'perimeter': 268.90196,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.382',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62044383, -23.54206151], [-46.62016041, -23.542469], [-46.61950349, -23.54342515], [-46.61887592, -23.54436317]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua correa de andrade',
            'obs': null,
            'perimeter': 301.00624,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.383',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62044258, -23.54365096], [-46.6201949, -23.54401837], [-46.61982875, -23.54453], [-46.61962, -23.54481532]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua oyapock',
            'obs': null,
            'perimeter': 153.90382,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.480',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61572556, -23.55481552], [-46.61577598, -23.55558341]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'n.o. (no oficial)',
            'perimeter': 85.19623,
            'id_type': 0,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.385',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62225769, -23.53597862], [-46.62215121, -23.53597004], [-46.62191202, -23.53596141], [-46.62158378, -23.53597819], [-46.6214558, -23.53597952], [-46.62038588, -23.5359536], [-46.61888981, -23.53592595]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua elisa whitacker',
            'obs': null,
            'perimeter': 344.06627,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.386',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61892863, -23.53657381], [-46.61902631, -23.53656593], [-46.61978663, -23.53659958], [-46.62039482, -23.53661997], [-46.62110449, -23.53667195], [-46.62161672, -23.53669333], [-46.62179043, -23.53667964], [-46.62222668, -23.5366908]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua henrique dias',
            'obs': null,
            'perimeter': 337.28597,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.388',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62040266, -23.53727499], [-46.62033034, -23.53728828], [-46.61896762, -23.53722453], [-46.61823283, -23.53719307], [-46.61765283, -23.53716411]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua julio ribeiro',
            'obs': null,
            'perimeter': 281.26716,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.390',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61663823, -23.53965696], [-46.6165829, -23.53972956], [-46.61614197, -23.54023033], [-46.61571066, -23.54073616]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sayao lobato',
            'obs': null,
            'perimeter': 152.5136,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.393',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61489884, -23.54054498], [-46.61511187, -23.54030391], [-46.61549376, -23.53984862], [-46.61601387, -23.53925055], [-46.61605897, -23.53918987], [-46.61606788, -23.5391337], [-46.61607856, -23.53895943], [-46.61616439, -23.53782702], [-46.6162718, -23.53700124], [-46.61646327, -23.53598866], [-46.616078, -23.53560344]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maria marcolina',
            'obs': null,
            'perimeter': 606.51365,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.401',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6560397, -23.55275992], [-46.65569225, -23.55266303], [-46.65546897, -23.5525645], [-46.65453192, -23.55181775], [-46.65315741, -23.55072883]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua bella cintra',
            'obs': null,
            'perimeter': 373.8236,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.402',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65573938, -23.55397185], [-46.65567314, -23.55405177], [-46.65529967, -23.55487116], [-46.65528032, -23.55496756], [-46.65551343, -23.55610999], [-46.65545756, -23.5571049], [-46.65532102, -23.558047], [-46.655322, -23.55812504], [-46.65533927, -23.55819535], [-46.65537009, -23.55825797]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua peixoto gomide',
            'obs': null,
            'perimeter': 489.00036,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.404',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65474635, -23.55690812], [-46.65456757, -23.55785613]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da fonte',
            'obs': null,
            'perimeter': 106.56353,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.406',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65549504, -23.55601984], [-46.65515155, -23.55593069], [-46.65434809, -23.55571039], [-46.65424805, -23.55562787], [-46.65414466, -23.55565592], [-46.65357721, -23.55548071], [-46.65153053, -23.55488941]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua herculano de freitas',
            'obs': null,
            'perimeter': 426.78877,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.407',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65537592, -23.55543609], [-46.65526869, -23.55541999], [-46.65450059, -23.55518986], [-46.65283907, -23.55465918], [-46.65259778, -23.55519775]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua itarare',
            'obs': null,
            'perimeter': 337.60281,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.409',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65259736, -23.55781659], [-46.65177777, -23.55740838], [-46.65119055, -23.55709013], [-46.65060765, -23.55678777], [-46.65029146, -23.55653929], [-46.64985221, -23.55612848], [-46.64988085, -23.5557914]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua saracura pequena',
            'obs': null,
            'perimeter': 376.67808,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.410',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64985221, -23.55612848], [-46.64977354, -23.55682012], [-46.64965986, -23.55824866]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua rocha',
            'obs': null,
            'perimeter': 235.64736,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.411',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65069312, -23.55824901], [-46.6498787, -23.55758619], [-46.64972191, -23.55746899]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua itapeva',
            'obs': null,
            'perimeter': 131.52065,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.415',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64716658, -23.55826899], [-46.64720436, -23.55788705], [-46.64728345, -23.5570793], [-46.64744045, -23.55584098], [-46.64746206, -23.55557763], [-46.6475453, -23.55483666], [-46.64757249, -23.5546184], [-46.64767456, -23.55457924]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua doutor luiz barreto',
            'obs': null,
            'perimeter': 417.73083,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.416',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64943929, -23.55652656], [-46.64917644, -23.55656436], [-46.64832467, -23.55648236], [-46.64783292, -23.55643856], [-46.64736332, -23.55644935], [-46.64697994, -23.5564616], [-46.64656395, -23.55645692]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sao vicente',
            'obs': null,
            'perimeter': 294.62363,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.419',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64335527, -23.5510579], [-46.64329203, -23.55188078], [-46.64320446, -23.55268224], [-46.64311161, -23.55355281], [-46.6429333, -23.555181], [-46.64280795, -23.55661008], [-46.64271308, -23.55747895], [-46.64263547, -23.55826501]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua major diogo',
            'obs': null,
            'perimeter': 801.58362,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.420',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64153177, -23.5582595], [-46.64214462, -23.5577379]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua humayta',
            'obs': null,
            'perimeter': 85.15511,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.421',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63904052, -23.55826432], [-46.64051703, -23.55716698]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua condessa de sao joaquim',
            'obs': null,
            'perimeter': 193.62483,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.423',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63980562, -23.55769571], [-46.6402931, -23.5582597]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': null,
            'perimeter': 79.86292,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.425',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64153177, -23.5582595], [-46.64051703, -23.55716698], [-46.63992917, -23.55640164], [-46.63978564, -23.55627215], [-46.63955013, -23.55586582], [-46.63873586, -23.55440334], [-46.63789033, -23.55281861], [-46.6376541, -23.55239071], [-46.63684049, -23.55089822], [-46.63666709, -23.55061149]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida brigadeiro luiz antonio',
            'obs': null,
            'perimeter': 986.81431,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.426',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6415237, -23.55320908], [-46.64155588, -23.55269183], [-46.64163961, -23.5511167]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua japura',
            'obs': null,
            'perimeter': 232.02694,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.427',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6423119, -23.55116703], [-46.64163944, -23.55111994], [-46.64108367, -23.55105765], [-46.64037856, -23.55151889]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua jacarehy',
            'obs': null,
            'perimeter': 214.28384,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.430',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64046224, -23.55403534], [-46.63973216, -23.55383024], [-46.63952661, -23.55384905], [-46.63936873, -23.55392726], [-46.6388446, -23.55416576], [-46.63865762, -23.55425669]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua aguiar de barros',
            'obs': null,
            'perimeter': 198.56587,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.431',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64023211, -23.5549561], [-46.64010232, -23.55486201], [-46.63967864, -23.55409781], [-46.63953368, -23.5538484], [-46.63906344, -23.55297207], [-46.63858461, -23.55210201]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua francisca miquelina',
            'obs': null,
            'perimeter': 359.56221,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.432',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63967984, -23.55159904], [-46.63858461, -23.55210201], [-46.63771724, -23.55250508]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maria paula',
            'obs': null,
            'perimeter': 224.09314,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.438',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6401213, -23.55538985], [-46.63943208, -23.55565379], [-46.63877019, -23.55586559], [-46.63761493, -23.55624186], [-46.6362979, -23.55666997]], [[-46.64294487, -23.55518015], [-46.64012192, -23.55538745]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua jaceguay',
            'obs': null,
            'perimeter': 704.50236,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.439',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63909726, -23.55822215], [-46.63902512, -23.55801294], [-46.63813786, -23.55607154]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua condessa de sao joaquim',
            'obs': null,
            'perimeter': 257.61679,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.440',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63700323, -23.55825851], [-46.63642513, -23.55722242], [-46.6362979, -23.55666997], [-46.63608089, -23.55568223], [-46.63599213, -23.55546194], [-46.63577382, -23.55501761], [-46.63486441, -23.55313462], [-46.6348006, -23.55302035]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da liberdade',
            'obs': null,
            'perimeter': 625.73225,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.441',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6345062, -23.55240019], [-46.63404929, -23.55257564], [-46.6343557, -23.55318608], [-46.6348006, -23.55302035], [-46.63450315, -23.55239743]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo sete de setembro',
            'obs': null,
            'perimeter': 249.38912,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.443',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63573477, -23.55288776], [-46.63608778, -23.55285789], [-46.63612392, -23.55285989], [-46.6362857, -23.55301037], [-46.63700169, -23.55396352], [-46.63855609, -23.55593533]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da assemblea',
            'obs': null,
            'perimeter': 461.69222,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.444',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63900087, -23.55579177], [-46.63891922, -23.55571236], [-46.63852679, -23.55560745], [-46.63849599, -23.55558069], [-46.6381609, -23.55514586], [-46.63728519, -23.55401898], [-46.63717828, -23.55394903], [-46.63706679, -23.5540461]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa jandaia',
            'obs': null,
            'perimeter': 299.78229,
            'id_type': 3,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.445',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63540956, -23.5542634], [-46.63530089, -23.55449304], [-46.63525538, -23.55477401], [-46.63517934, -23.55550872], [-46.63507207, -23.55720447], [-46.63499723, -23.55827032]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua galvao bueno',
            'obs': null,
            'perimeter': 447.34598,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.446',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63669001, -23.55769716], [-46.63649358, -23.55772695], [-46.63603238, -23.55775082], [-46.63503289, -23.55776252]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua thomaz gonzaga',
            'obs': null,
            'perimeter': 169.5302,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.447',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63642503, -23.55722199], [-46.63626336, -23.55724929], [-46.6358945, -23.55723416], [-46.63588085, -23.55738165], [-46.63592236, -23.55740261], [-46.63651757, -23.5573881]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo da polvóra',
            'obs': null,
            'perimeter': 136.48769,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.448',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6358945, -23.55723416], [-46.63563812, -23.55720729], [-46.63551914, -23.55720186], [-46.63534233, -23.55721174], [-46.6351421, -23.55720315], [-46.63507245, -23.55719845], [-46.63496035, -23.55716496], [-46.63431604, -23.55713163], [-46.63406607, -23.55711986]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua americo de campos',
            'obs': null,
            'perimeter': 187.64759,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.449',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63406607, -23.55711986], [-46.63394924, -23.55705336], [-46.6328997, -23.55701934], [-46.63249033, -23.55701343], [-46.63193258, -23.55697581], [-46.63080006, -23.55690215], [-46.62962485, -23.5568366], [-46.62947209, -23.55678117], [-46.62911821, -23.55692982], [-46.62852829, -23.55716649], [-46.62763849, -23.55753776], [-46.62743552, -23.55760847]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sao paulo',
            'obs': null,
            'perimeter': 700.24014,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.405',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65549477, -23.55601854], [-46.65559036, -23.55597133], [-46.65605223, -23.55555829]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barbosa rodriquez',
            'obs': null,
            'perimeter': 76.7671,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.408',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65124615, -23.55273212], [-46.65118043, -23.55281585], [-46.65074214, -23.55334897], [-46.65007677, -23.55412665], [-46.65004676, -23.55436338], [-46.64995126, -23.55501724], [-46.64983736, -23.55500733], [-46.64914169, -23.55480841], [-46.648876, -23.55473072], [-46.64883221, -23.55472112], [-46.64837658, -23.55494986], [-46.64797376, -23.55514459]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua paim',
            'obs': null,
            'perimeter': 513.1797,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.479',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61489775, -23.55489162], [-46.61633039, -23.55475991]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua nitcheroy',
            'obs': null,
            'perimeter': 146.98675,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.493',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61922728, -23.5574628], [-46.6193267, -23.55826407]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dos alpes',
            'obs': null,
            'perimeter': 89.31602,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.450',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62797153, -23.5582301], [-46.62852627, -23.55806985], [-46.62863968, -23.55807104], [-46.62920109, -23.55803427], [-46.63134504, -23.55813584], [-46.63283345, -23.5582308], [-46.63394535, -23.55827382]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barao de iguape',
            'obs': null,
            'perimeter': 613.48303,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.451',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63189442, -23.55828212], [-46.63189982, -23.55817124], [-46.63192056, -23.55789525], [-46.63192657, -23.55733879], [-46.63192753, -23.55697548], [-46.63194097, -23.55538758], [-46.63194336, -23.5546296], [-46.6319299, -23.55416941], [-46.63190671, -23.55375203]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua thomaz ribeiro de lima',
            'obs': null,
            'perimeter': 501.86179,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.452',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63295642, -23.55598207], [-46.63193501, -23.55609216]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr lund',
            'obs': null,
            'perimeter': 104.98847,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.455',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63147047, -23.55694576], [-46.63141007, -23.55739527], [-46.63134343, -23.55813576], [-46.63132209, -23.55827948]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sinimou',
            'obs': null,
            'perimeter': 148.51493,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.458',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62850629, -23.55717567], [-46.62886034, -23.55792424], [-46.62892232, -23.55805253], [-46.6290224, -23.55826881]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua teixeira leite',
            'obs': null,
            'perimeter': 132.03109,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.475',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62778117, -23.55170053], [-46.62787785, -23.55173267], [-46.62847998, -23.55181372], [-46.62868449, -23.55182796], [-46.62889212, -23.55185581], [-46.62916852, -23.55189416]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua nioac',
            'obs': null,
            'perimeter': 143.51671,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.476',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62495209, -23.55195847], [-46.62347253, -23.55207797], [-46.62234382, -23.55217668]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua coronel seabra',
            'obs': null,
            'perimeter': 267.388,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.477',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62507885, -23.55262417], [-46.62440971, -23.5526855], [-46.62361101, -23.55275766], [-46.62246303, -23.55286165]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua bento pires',
            'obs': null,
            'perimeter': 268.35253,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.481',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6149069, -23.55564023], [-46.61577598, -23.55558341], [-46.61734212, -23.55553527], [-46.62008251, -23.55542178], [-46.6222977, -23.55531563]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua xingu',
            'obs': null,
            'perimeter': 755.44152,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.495',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62196109, -23.55821417], [-46.62204398, -23.55745247], [-46.62210432, -23.55683128], [-46.62213502, -23.55648916]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua luiz gama',
            'obs': null,
            'perimeter': 191.86453,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.442',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6354496, -23.55291051], [-46.6354854, -23.5528056], [-46.63544165, -23.55239756], [-46.63534613, -23.55148662], [-46.6352805, -23.55137735]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua dr rodrigo silva',
            'obs': null,
            'perimeter': 172.7738,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.517',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6556983, -23.54877451], [-46.65604242, -23.54862771]], [[-46.65455787, -23.55024449], [-46.6554133, -23.5488933], [-46.65569543, -23.54876839]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sergipe',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.457',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63027778, -23.55827594], [-46.63017527, -23.55808043], [-46.62957859, -23.55692628], [-46.62949072, -23.55678793], [-46.62943396, -23.55667554], [-46.62853068, -23.55492731], [-46.62763723, -23.55316151], [-46.62738541, -23.5526657], [-46.6273582, -23.55261054], [-46.62734056, -23.5524705], [-46.62737611, -23.55231345]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua glycerio',
            'obs': null,
            'perimeter': 728.07664,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.482',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62225767, -23.55601491], [-46.62229208, -23.55531589], [-46.62246762, -23.55411616], [-46.62254195, -23.55350763]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua luiz gama',
            'obs': null,
            'perimeter': 279.37822,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.488',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6204489, -23.55631886], [-46.62042328, -23.5559009], [-46.62039275, -23.55540691], [-46.62036883, -23.55502077], [-46.62035857, -23.55468318], [-46.62032229, -23.55434596], [-46.62028369, -23.55365772]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua coronel cintra',
            'obs': null,
            'perimeter': 295.24091,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.490',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62163434, -23.55156419], [-46.62165578, -23.55173243], [-46.62173097, -23.55258237], [-46.62181642, -23.55357241]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua itapira',
            'obs': null,
            'perimeter': 223.18835,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.491',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62157924, -23.55628762], [-46.6204489, -23.55631886], [-46.61907339, -23.55636894], [-46.61710251, -23.55645941], [-46.61552708, -23.55653446], [-46.61490429, -23.55656226]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua odorico mendes',
            'obs': null,
            'perimeter': 682.15504,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.36',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63314375, -23.54895823], [-46.63312472, -23.54947394], [-46.63338441, -23.55000291], [-46.63393379, -23.55114662], [-46.63431095, -23.55189705], [-46.63459826, -23.55178903], [-46.63484642, -23.55166991], [-46.63441879, -23.55077869], [-46.63408348, -23.55008901], [-46.63386016, -23.54966794], [-46.6335608, -23.54901232]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'praça da se',
            'obs': null,
            'perimeter': 734.12052,
            'id_type': 6,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.496',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61916197, -23.5570589], [-46.61907856, -23.55636875], [-46.6190356, -23.55581415], [-46.61900766, -23.5554663], [-46.6188444, -23.55375102]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua oscar horta',
            'obs': null,
            'perimeter': 367.79657,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.134',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62503268, -23.54741383], [-46.62497797, -23.54752917], [-46.62387289, -23.55065859], [-46.62387389, -23.55074048], [-46.62387165, -23.55073846]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua cap. faustino de lima',
            'obs': null,
            'perimeter': 387.80376,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.11',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63649616, -23.55012176], [-46.63610193, -23.55024366], [-46.63569321, -23.55037922], [-46.63527237, -23.55054008], [-46.63479459, -23.5506898], [-46.63441879, -23.55077869]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua senador feijo',
            'obs': null,
            'perimeter': 224.44597,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.19',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63593675, -23.54760379], [-46.63563921, -23.54772065], [-46.63555155, -23.54773314], [-46.63549933, -23.54773754], [-46.63535066, -23.54771983], [-46.63513915, -23.54769314], [-46.63487959, -23.54766888], [-46.63465651, -23.54764165], [-46.63448342, -23.54758823], [-46.63438898, -23.54756031], [-46.63412711, -23.54749261]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da quitanda',
            'obs': null,
            'perimeter': 190.67435,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.96',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64333533, -23.54503398], [-46.64330943, -23.54507806], [-46.6431841, -23.54563351], [-46.64306529, -23.54616041], [-46.64271772, -23.54776293], [-46.64263915, -23.54801429]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua de sao luiz',
            'obs': null,
            'perimeter': 337.93937,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.42',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63165114, -23.54781452], [-46.63146226, -23.54775422], [-46.63107479, -23.54763584], [-46.63098034, -23.54760483]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maria benedicta',
            'obs': null,
            'perimeter': 72.32043,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.400',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65522543, -23.55349596], [-46.6556936, -23.55266062]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua costa',
            'obs': null,
            'perimeter': 104.13049,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.64',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63865767, -23.54958497], [-46.63885993, -23.54968779], [-46.63896898, -23.55018501], [-46.63899482, -23.55030049], [-46.63901621, -23.55033724], [-46.63907631, -23.55040252], [-46.63985644, -23.55099101], [-46.64006608, -23.55116241], [-46.64033127, -23.55145828], [-46.64044821, -23.55160814], [-46.6405111, -23.55175857], [-46.64054047, -23.5518772], [-46.64063768, -23.55328522], [-46.64040721, -23.55427065], [-46.64010634, -23.5554484], [-46.63992917, -23.55640164]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua santo amaro',
            'obs': null,
            'perimeter': 841.71773,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.514',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64355968, -23.53306178], [-46.6427113, -23.53251294]], [[-46.64321222, -23.53352498], [-46.64236742, -23.53299499]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo coraçao de jesus',
            'obs': null,
            'perimeter': 0,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.259',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62422891, -23.53080933], [-46.62374865, -23.52928147]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua madeira',
            'obs': null,
            'perimeter': 176.16596,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.91',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64902911, -23.54782478], [-46.64895999, -23.54772481], [-46.64893584, -23.54713287], [-46.6488989, -23.54536564], [-46.64886675, -23.54464253], [-46.64883821, -23.54376952], [-46.648813, -23.54274257], [-46.64879065, -23.54171185]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua cesario mota',
            'obs': null,
            'perimeter': 679.28931,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.125',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65456711, -23.54441885], [-46.65457391, -23.54433687], [-46.65455298, -23.54364847], [-46.65453348, -23.54308841], [-46.65451035, -23.54266514], [-46.65446003, -23.54153432], [-46.65441323, -23.54141239], [-46.65432281, -23.54130067], [-46.65414239, -23.54111199], [-46.65298793, -23.53993305], [-46.65170195, -23.53860159], [-46.65074982, -23.53764489], [-46.6498087, -23.53701018]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua martim francisco',
            'obs': null,
            'perimeter': 1013.52632,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.515',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64793014, -23.54103466], [-46.64811688, -23.54100239], [-46.6485697, -23.54070338], [-46.6490396, -23.54038089], [-46.64944545, -23.5401198], [-46.65018964, -23.53961686], [-46.65042162, -23.53946199], [-46.65170226, -23.53860191], [-46.65170963, -23.5385961]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'alameda barrosrua frederico abranches',
            'obs': null,
            'perimeter': 981.29155,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.516',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65170963, -23.5385961], [-46.65337736, -23.53728318], [-46.65357913, -23.53716394], [-46.65428771, -23.53695185], [-46.65495913, -23.53676925], [-46.65569342, -23.53657246], [-46.65601313, -23.53647337]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'alameda barros',
            'obs': null,
            'perimeter': 981.29155,
            'id_type': 10,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.7',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63224253, -23.54863575], [-46.63321269, -23.5489829], [-46.63343349, -23.54904819], [-46.63363767, -23.54899066]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua floriano peixoto',
            'obs': null,
            'perimeter': 151.72253,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.499',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61852064, -23.55193863], [-46.6186111, -23.55267379]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa placidina',
            'obs': null,
            'perimeter': 81.93693,
            'id_type': 3,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.500',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61924033, -23.55263543], [-46.6186111, -23.55267379], [-46.61680373, -23.5528765], [-46.61548797, -23.55296779]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua placidina',
            'obs': null,
            'perimeter': 384.97449,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.502',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61867603, -23.55110807], [-46.61884262, -23.55086491], [-46.6191567, -23.55036518], [-46.61951154, -23.54982701], [-46.61968859, -23.54957619]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua flora',
            'obs': null,
            'perimeter': 198.69985,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.508',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63036251, -23.54883487], [-46.62977978, -23.54861627]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'sem nome',
            'perimeter': 64.23146,
            'id_type': 0,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.509',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62678623, -23.54183908], [-46.6244918, -23.54110754], [-46.62199557, -23.5403028]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua benjamin de oliveira',
            'obs': null,
            'perimeter': 517.88825,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.518',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65224638, -23.55325966], [-46.65111799, -23.55582861]], [[-46.651123, -23.55581721], [-46.65108688, -23.55589474], [-46.65109145, -23.55589679]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua pennaforte mendes',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.519',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64488466, -23.55768164], [-46.64270835, -23.55747851]], [[-46.64818092, -23.55797352], [-46.64488466, -23.55768164]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua conselheiro carrao',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.522',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63844004, -23.54948197], [-46.63826505, -23.54971391], [-46.63807328, -23.54996243], [-46.63794029, -23.55005419], [-46.63747702, -23.55025474], [-46.63670184, -23.55059607], [-46.63555453, -23.55110512], [-46.63546877, -23.55113388], [-46.6353885, -23.5511656], [-46.63535502, -23.55119718], [-46.6353392, -23.55122857], [-46.63532913, -23.55124769], [-46.6352805, -23.55137735]], [[-46.63528081, -23.55137786], [-46.63484158, -23.55167223]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do riachuelo',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.162',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62490583, -23.55125869], [-46.62333628, -23.55140929], [-46.62222975, -23.55152129], [-46.62216096, -23.55149627], [-46.62089908, -23.55165901], [-46.61951148, -23.55182083], [-46.61936008, -23.5518278], [-46.61802746, -23.55200374], [-46.61719203, -23.55152541], [-46.61670588, -23.55123984], [-46.61527648, -23.55042192], [-46.61488201, -23.55017864]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua visconde de parnahyba',
            'obs': null,
            'perimeter': 1087.58476,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.164',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61781618, -23.54371482], [-46.6182222, -23.54311704], [-46.61896481, -23.54205631], [-46.61906026, -23.54190943], [-46.61943246, -23.54148005], [-46.61991758, -23.54095434], [-46.62052066, -23.54037323]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua cruz branca',
            'obs': null,
            'perimeter': 463.26716,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.182',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65252264, -23.53346854], [-46.65265141, -23.533681], [-46.65271858, -23.53399611], [-46.65210687, -23.53401302], [-46.65193825, -23.53414954], [-46.65174402, -23.53402129], [-46.65217494, -23.53371443], [-46.65252264, -23.53346854]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'praça olavo bilac',
            'obs': null,
            'perimeter': 272.65658,
            'id_type': 6,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.205',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63970664, -23.53210297], [-46.63963604, -23.53209623], [-46.63933519, -23.53188272], [-46.63915834, -23.53179452], [-46.63867378, -23.5314938], [-46.63815215, -23.531137], [-46.63808734, -23.53104054], [-46.63800728, -23.53103137], [-46.63647175, -23.5314215], [-46.63552696, -23.53167515], [-46.63398678, -23.53205901], [-46.63258085, -23.53242884]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua ribeiro de lima',
            'obs': null,
            'perimeter': 788.63529,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.226',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63366658, -23.53504467], [-46.63391031, -23.53580443], [-46.63414418, -23.53656192], [-46.63429632, -23.53709228], [-46.63472352, -23.53849972], [-46.63488676, -23.53905482], [-46.63502145, -23.53948095], [-46.63562409, -23.54112021], [-46.63588574, -23.54178364], [-46.6361192, -23.54234795], [-46.63632515, -23.54286779], [-46.63634403, -23.54308634], [-46.63633803, -23.54303669]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua brigadeiro tobias',
            'obs': null,
            'perimeter': 938.28019,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.248',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62807412, -23.52797582], [-46.62748282, -23.52904929], [-46.62686438, -23.53018808], [-46.62592782, -23.53203515]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'avenida tamanduatehy',
            'obs': null,
            'perimeter': 500.18498,
            'id_type': 2,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.260',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6256711, -23.53008203], [-46.625371, -23.53004321], [-46.62405163, -23.52944839], [-46.62374865, -23.52928147], [-46.62342038, -23.52915637], [-46.62261413, -23.52877453]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua vidal de negreiros',
            'obs': null,
            'perimeter': 345.77449,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.279',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62659256, -23.531761], [-46.62693941, -23.53110571]], [[-46.62693941, -23.53110571], [-46.62694024, -23.53110414]], [[-46.62748531, -23.5299962], [-46.62747999, -23.53006724], [-46.6273731, -23.53029367], [-46.62693941, -23.53110571]], [[-46.62693941, -23.53110571], [-46.62693941, -23.53110571]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua benecdita sa barbosa',
            'obs': 'n.o. (no oficial)',
            'perimeter': 216.4215,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.294',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61754276, -23.53403235], [-46.61746087, -23.53397165], [-46.61686105, -23.53325697], [-46.61634046, -23.53257588], [-46.61555083, -23.5314538]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua parahyba',
            'obs': null,
            'perimeter': 351.21408,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.317',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64603208, -23.53916432], [-46.64603087, -23.53916345]], [[-46.64603087, -23.53916345], [-46.64575434, -23.53896325], [-46.64535755, -23.53869631], [-46.64458452, -23.53814311], [-46.64392587, -23.53768532], [-46.64314751, -23.53712554], [-46.64221013, -23.53647155], [-46.64158904, -23.53603221], [-46.64144248, -23.53588421], [-46.64086318, -23.53551508], [-46.64062134, -23.53533257], [-46.6401925, -23.53504144], [-46.63979247, -23.53478082], [-46.63979473, -23.53477778]], [[-46.64604479, -23.5391773], [-46.64603087, -23.53916345]], [[-46.64603087, -23.53916345], [-46.64603087, -23.53916345]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua duque de caxias',
            'obs': null,
            'perimeter': 804.00564,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.398',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61574563, -23.54244626], [-46.6165926, -23.54132763], [-46.61737205, -23.54181001], [-46.61659327, -23.54296559]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo da concordia',
            'obs': null,
            'perimeter': 397.59822,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.369',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63389232, -23.53580927], [-46.6330485, -23.5359955], [-46.63272381, -23.53602895], [-46.63198391, -23.5362124], [-46.62993121, -23.53674524], [-46.62899269, -23.5369893], [-46.62809338, -23.53720564], [-46.62733536, -23.53742601]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua maua',
            'obs': null,
            'perimeter': 693.55531,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.392',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.61737648, -23.54181276], [-46.61658504, -23.54132295], [-46.61571066, -23.54073616], [-46.61511121, -23.54039583], [-46.615113, -23.54014928], [-46.61489384, -23.53990209]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua chavantes',
            'obs': null,
            'perimeter': 342.29113,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.35',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63098128, -23.54416316], [-46.63092193, -23.5432475], [-46.63076918, -23.54174086], [-46.63065423, -23.54033794], [-46.63060657, -23.53835391], [-46.63060682, -23.53834452]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barao de duprat',
            'obs': null,
            'perimeter': 645.79472,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.37',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63255567, -23.55012761], [-46.63251362, -23.55021496], [-46.63187711, -23.5508754], [-46.63162873, -23.55113874], [-46.6309017, -23.55193428], [-46.63044775, -23.5524291], [-46.63044701, -23.55249525]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua das flores',
            'obs': null,
            'perimeter': 341.37001,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.417',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64792749, -23.55644698], [-46.64794228, -23.55581577], [-46.64793094, -23.55562005], [-46.64792636, -23.55526122], [-46.64797376, -23.55514459], [-46.6477288, -23.55469244], [-46.64767456, -23.55457924], [-46.6475285, -23.55428044], [-46.64685704, -23.55301409], [-46.64651597, -23.5526708], [-46.64612389, -23.55235139], [-46.64574935, -23.55208468], [-46.64542716, -23.5519204], [-46.64496137, -23.55171499], [-46.64381002, -23.55124931], [-46.64119735, -23.55014957], [-46.64040603, -23.54976008], [-46.63961597, -23.54939126], [-46.63951152, -23.54938537], [-46.63934842, -23.54939408], [-46.6388152, -23.54941548]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua de santo antonio',
            'obs': null,
            'perimeter': 1336.29303,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.453',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63394535, -23.55827382], [-46.63399569, -23.55814253], [-46.63406607, -23.55711986], [-46.63410811, -23.55654588], [-46.63418054, -23.55552788], [-46.63433121, -23.55351201], [-46.6343557, -23.55318608]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da gloria',
            'obs': null,
            'perimeter': 565.55823,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.6',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63433248, -23.54580084], [-46.63427451, -23.54645359], [-46.63423079, -23.5470028], [-46.63416411, -23.54737252], [-46.63392293, -23.54815527], [-46.63363767, -23.54899066]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua quinze de novembro',
            'obs': null,
            'perimeter': 362.13283,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.523',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63873836, -23.52792815], [-46.63907294, -23.52855865]], [[-46.65227731, -23.53648293], [-46.65087826, -23.53561023], [-46.64980793, -23.53492079], [-46.64896725, -23.53439049], [-46.64726153, -23.53329757], [-46.64640871, -23.53273801], [-46.64545587, -23.53213512], [-46.64378279, -23.53108985], [-46.64296302, -23.53057051], [-46.64218057, -23.53006505], [-46.64199426, -23.52991467], [-46.64021639, -23.52909546], [-46.63906517, -23.52859036]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua silva pinto',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.525',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63546642, -23.55286122], [-46.63561113, -23.55386441]], [[-46.63561113, -23.55386441], [-46.63561252, -23.55387401], [-46.63553273, -23.55448372]], [[-46.63553273, -23.55448372], [-46.63552916, -23.55451103]], [[-46.63573477, -23.55288776], [-46.63561113, -23.55386441]], [[-46.63561113, -23.55386441], [-46.63553273, -23.55448372]], [[-46.63553273, -23.55448372], [-46.63553273, -23.55448372]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'praça carlos gomes',
            'obs': null,
            'perimeter': 0,
            'id_type': 6,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.526',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64775023, -23.54143486], [-46.6477504, -23.54143944]], [[-46.6477504, -23.54143944], [-46.64776107, -23.54172873], [-46.64645244, -23.54175194], [-46.64536626, -23.54183671], [-46.64540788, -23.5417996]], [[-46.64540788, -23.5417996], [-46.64566725, -23.54156837], [-46.64567884, -23.54148271], [-46.6477504, -23.54143944]], [[-46.6477504, -23.54143944], [-46.64775521, -23.54143934]], [[-46.64427637, -23.54110935], [-46.64540788, -23.5417996]], [[-46.64540788, -23.5417996], [-46.64540788, -23.5417996]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo do arouche',
            'obs': null,
            'perimeter': 0,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.527',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62428433, -23.53449952], [-46.62426993, -23.5344347], [-46.62393429, -23.53333151], [-46.62358837, -23.53219873], [-46.62324702, -23.53105145], [-46.62268595, -23.52916476], [-46.62261998, -23.52880632]], [[-46.62261998, -23.52880632], [-46.62261413, -23.52877453]], [[-46.62261998, -23.52880632], [-46.62239553, -23.52816761]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua caninde',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.14',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6343557, -23.55318608], [-46.63378922, -23.55205753], [-46.63315284, -23.55080866], [-46.63284025, -23.5501769], [-46.63273842, -23.54945493]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua onze de agosto',
            'obs': null,
            'perimeter': 448.05179,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.17',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63504013, -23.54639566], [-46.6348626, -23.54637439], [-46.63460338, -23.54634385], [-46.6342876, -23.54630626]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa do commercio',
            'obs': null,
            'perimeter': 77.46928,
            'id_type': 3,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.18',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63392945, -23.54813412], [-46.63371878, -23.54802047], [-46.63363204, -23.5479404], [-46.63345349, -23.54770896], [-46.63334094, -23.54757131], [-46.63292311, -23.54710137], [-46.63254144, -23.54667925], [-46.63181174, -23.54587291]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua general carneiro',
            'obs': null,
            'perimeter': 332.44543,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.20',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63363767, -23.54899066], [-46.63431895, -23.54884026], [-46.63462511, -23.54870883], [-46.63628342, -23.54787903], [-46.63684332, -23.54759877]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua direita',
            'obs': null,
            'perimeter': 363.69537,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.21',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6366759, -23.54893689], [-46.63664816, -23.54884901], [-46.63613609, -23.54795275], [-46.63593446, -23.54760469], [-46.63527309, -23.54644298], [-46.63518515, -23.54632471], [-46.63515581, -23.54623213], [-46.63484402, -23.54569398], [-46.63465939, -23.54534217], [-46.63437725, -23.54483265], [-46.63409353, -23.54431799]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua de sao bento',
            'obs': null,
            'perimeter': 576.01968,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.22',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63752562, -23.54935348], [-46.6374846, -23.54890899], [-46.63751896, -23.54881618], [-46.63705543, -23.54799478], [-46.63684252, -23.54759917], [-46.63625946, -23.54656096], [-46.63549316, -23.54518249], [-46.63479307, -23.54443717], [-46.63454489, -23.54418559], [-46.63437645, -23.54407696]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua libero badaro',
            'obs': null,
            'perimeter': 680.56889,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.23',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63647678, -23.54172641], [-46.63630225, -23.54189169], [-46.63502071, -23.54313164], [-46.63426455, -23.54387196]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'viaducto santa ephigenia',
            'obs': null,
            'perimeter': 327.84244,
            'id_type': 5,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.24',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6320147, -23.53938198], [-46.63206817, -23.54055678], [-46.63207909, -23.54145809], [-46.63212791, -23.5417869], [-46.63223008, -23.54228429], [-46.632476, -23.54358243], [-46.63255083, -23.54400758], [-46.63257183, -23.54413052], [-46.63256483, -23.54424061], [-46.63212725, -23.54524403], [-46.63181551, -23.54587708], [-46.63121938, -23.54712845], [-46.63037799, -23.54880519], [-46.63010893, -23.54932098], [-46.63007919, -23.54936251]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua vinte e cinco de marco',
            'obs': null,
            'perimeter': 1164.11193,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.27',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63163109, -23.55013596], [-46.63156115, -23.55014327], [-46.63149525, -23.55012522], [-46.63069789, -23.5497862], [-46.6298107, -23.54942072], [-46.62892571, -23.54905082], [-46.62862466, -23.54892248], [-46.62839644, -23.54877026], [-46.6281994, -23.54865593], [-46.62795958, -23.54853682], [-46.62768164, -23.54842916], [-46.62740873, -23.54833533], [-46.62587055, -23.54779201], [-46.62582969, -23.54777514]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'ladeira do carmo',
            'obs': null,
            'perimeter': 649.74545,
            'id_type': 7,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.186',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65010835, -23.53116865], [-46.64999061, -23.53131361], [-46.64977879, -23.53160109], [-46.64961417, -23.53181413], [-46.64944964, -23.53203561], [-46.64931435, -23.53221242], [-46.64910045, -23.53251683], [-46.6490066, -23.53263342], [-46.64885109, -23.53284212], [-46.64871368, -23.53303161], [-46.6485853, -23.53321044], [-46.64849054, -23.53332975], [-46.64810696, -23.53383927], [-46.64717772, -23.53497735], [-46.64653404, -23.53578692], [-46.64525697, -23.53732017], [-46.64455588, -23.53817817], [-46.6437751, -23.53913264], [-46.64318386, -23.53985491], [-46.64208102, -23.54120284]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua barao de limeira',
            'obs': null,
            'perimeter': 1381.14825,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.209',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63540979, -23.52792591], [-46.6355182, -23.52837111], [-46.63586942, -23.52948455], [-46.6364875, -23.5314175], [-46.63695248, -23.53295446], [-46.63718324, -23.53369107], [-46.63727833, -23.53382309], [-46.63727742, -23.53382439]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua prates',
            'obs': null,
            'perimeter': 681.46934,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.241',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63321394, -23.53442838], [-46.63287225, -23.5345004], [-46.631643, -23.53467507], [-46.62891297, -23.53513805], [-46.62711347, -23.53542042], [-46.62601729, -23.53559701], [-46.6239247, -23.53592063], [-46.62224054, -23.53620582]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sao caetano',
            'obs': null,
            'perimeter': 1137.73077,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.12',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63338665, -23.55000195], [-46.633143, -23.5501068], [-46.6328549, -23.55017158], [-46.63276736, -23.55020338], [-46.63188208, -23.5498865]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua santa theresa',
            'obs': null,
            'perimeter': 164.29297,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.25',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6323213, -23.54643599], [-46.63225735, -23.54654652], [-46.6318503, -23.5473714], [-46.6314415, -23.54828093], [-46.63105697, -23.54916274], [-46.6309744, -23.549272], [-46.63069789, -23.5497862]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'travessa do mercado',
            'obs': null,
            'perimeter': 406.82495,
            'id_type': 3,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.34',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63230572, -23.54268361], [-46.63187457, -23.54275278]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua lucrecia leme',
            'obs': null,
            'perimeter': 44.68358,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.26',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63163109, -23.55013596], [-46.6317056, -23.55008903], [-46.63188208, -23.5498865], [-46.63191644, -23.54980848], [-46.63202337, -23.54938207], [-46.63208938, -23.54917238], [-46.63218025, -23.54883615], [-46.63224253, -23.54863575]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'sem nome',
            'perimeter': 181.41896,
            'id_type': 0,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.28',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62988069, -23.54956421], [-46.62878799, -23.55068801], [-46.62815977, -23.55132501], [-46.62770698, -23.55177411], [-46.62757933, -23.55193967], [-46.62752284, -23.55204686], [-46.6274112, -23.55224393], [-46.62737611, -23.55231345]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua frederico alvarenga',
            'obs': null,
            'perimeter': 399.18903,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.29',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63160325, -23.55013887], [-46.63141806, -23.55041444], [-46.63070484, -23.5511881], [-46.62959154, -23.55239601], [-46.62957936, -23.55242206], [-46.62958334, -23.55249114]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do carmo',
            'obs': null,
            'perimeter': 334.6855,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.52',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63894683, -23.54305945], [-46.63831132, -23.54268861], [-46.63771522, -23.54233124], [-46.63731594, -23.54209015], [-46.63719392, -23.54199641], [-46.63714823, -23.54195998], [-46.63706008, -23.5419069], [-46.63687636, -23.5418015], [-46.63672249, -23.54171082]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua antonio de godoy',
            'obs': null,
            'perimeter': 271.99912,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.53',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63661377, -23.54175795], [-46.63650302, -23.54207508], [-46.63646647, -23.54226161], [-46.63642464, -23.5425555], [-46.63642241, -23.54261476], [-46.63634084, -23.5430776], [-46.63612298, -23.54397364], [-46.63611839, -23.54416139]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua do seminario',
            'obs': null,
            'perimeter': 271.70382,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.30',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63329857, -23.54321453], [-46.63314356, -23.5433083], [-46.63248163, -23.54361445]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'ladeira da constituicao',
            'obs': null,
            'perimeter': 94.54125,
            'id_type': 7,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.31',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6324477, -23.54343308], [-46.6320216, -23.54350436]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua virgilina salles',
            'obs': null,
            'perimeter': 44.2161,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.32',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63253924, -23.5442993], [-46.6323068, -23.54427466], [-46.6319066, -23.54423791], [-46.63113687, -23.54417433], [-46.63098128, -23.54416316], [-46.63053031, -23.54451084]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua itoby',
            'obs': null,
            'perimeter': 219.81358,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.33',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63213263, -23.54425867], [-46.63213304, -23.54414084], [-46.63207645, -23.5438292], [-46.6320216, -23.54350436], [-46.63170059, -23.54186349]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua santo andre',
            'obs': null,
            'perimeter': 269.10137,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.474',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62881285, -23.5522732], [-46.62781533, -23.5521865], [-46.62747582, -23.55212985]], [[-46.62881285, -23.5522732], [-46.6288997, -23.55228472], [-46.62913289, -23.55234257], [-46.62936832, -23.55247343], [-46.62942246, -23.55248885], [-46.63202756, -23.55248995], [-46.63269814, -23.55249357], [-46.63285081, -23.55252927]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua tabatinguera',
            'obs': null,
            'perimeter': 555.49597,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.478',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62523526, -23.55326922], [-46.62454476, -23.55338919], [-46.62388733, -23.55342893], [-46.62374566, -23.55343264], [-46.62326235, -23.55347131], [-46.62257495, -23.55350469], [-46.62180842, -23.55357312], [-46.6202742, -23.55365825], [-46.61842421, -23.55377828], [-46.6169111, -23.55390997], [-46.61490987, -23.55409851]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da mooca',
            'obs': null,
            'perimeter': 1058.69763,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.16',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63450314, -23.54843779], [-46.63450333, -23.54819911], [-46.63457349, -23.54790906], [-46.63463626, -23.54768628], [-46.63467495, -23.54760102], [-46.63486979, -23.54694908], [-46.63500439, -23.54650026], [-46.63504013, -23.54639566], [-46.63518515, -23.54632471]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua alvares penteado',
            'obs': null,
            'perimeter': 250.43699,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.40',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63185916, -23.54735345], [-46.63123133, -23.54710337]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua sao nicolau',
            'obs': null,
            'perimeter': 69.82794,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.94',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.64891589, -23.54617864], [-46.64789392, -23.54620459]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua cunha horta',
            'obs': null,
            'perimeter': 104.38336,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.15',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.6346006, -23.5486578], [-46.63450314, -23.54843779]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo da misericordia',
            'obs': null,
            'perimeter': 26.31756,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.247',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63303936, -23.53529263], [-46.63338965, -23.53497749]], [[-46.63386656, -23.54404128], [-46.63373066, -23.54397943], [-46.63369261, -23.54392809], [-46.63329758, -23.54321512], [-46.63317008, -23.5429961], [-46.63302663, -23.54243022], [-46.63284382, -23.54173353], [-46.63272746, -23.54136434], [-46.63271701, -23.54129818], [-46.63271902, -23.54117774], [-46.63272331, -23.54109931], [-46.63275762, -23.5406284], [-46.63285356, -23.53906615], [-46.63291041, -23.53818857], [-46.6330589, -23.53583025], [-46.63303936, -23.53529263]], [[-46.63303936, -23.53529263], [-46.63303902, -23.53528316]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua florencio de abreu',
            'obs': null,
            'perimeter': 1049.43771,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.367',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63580786, -23.54448521], [-46.63559795, -23.54413031], [-46.63478373, -23.54280665], [-46.63407532, -23.54162515], [-46.63387065, -23.54128853], [-46.63383641, -23.54123517], [-46.63379596, -23.54119911], [-46.63367507, -23.54112815], [-46.63300928, -23.54074277], [-46.63290776, -23.5407081], [-46.63285279, -23.54069938], [-46.63266493, -23.54065766], [-46.63247049, -23.54062283], [-46.63218924, -23.54057322], [-46.63216033, -23.54057147], [-46.63206824, -23.54056257], [-46.63065421, -23.54033715], [-46.62930718, -23.54012032], [-46.62790495, -23.53991877], [-46.6277732, -23.53990074]], [[-46.62743918, -23.5399798], [-46.6277732, -23.53990074]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua anhangabahu',
            'obs': null,
            'perimeter': 1091.25175,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.513',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63838794, -23.54855107], [-46.63827952, -23.54859214], [-46.63765964, -23.54887574]], [[-46.63748612, -23.54890488], [-46.63679599, -23.54893527], [-46.63667574, -23.54893637], [-46.63580266, -23.54897596], [-46.63541837, -23.54900359], [-46.63525855, -23.54900986], [-46.63494723, -23.54902538], [-46.63488196, -23.5490276], [-46.63485818, -23.54902836], [-46.63480328, -23.54901873], [-46.6347715, -23.54901369], [-46.63465742, -23.54899068], [-46.63451535, -23.54896304], [-46.6344388, -23.5489465], [-46.6344243, -23.54893799], [-46.63439291, -23.54890465], [-46.63435079, -23.54887195], [-46.63428926, -23.54884682]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua jose bonifacio',
            'obs': null,
            'perimeter': 0,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.141',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.62625058, -23.544839], [-46.62631585, -23.54650226], [-46.62633648, -23.54698852], [-46.626127, -23.54757274], [-46.6260258, -23.54784685], [-46.62596066, -23.54808217], [-46.62500668, -23.55070932], [-46.62490383, -23.55126959], [-46.62494425, -23.55191665], [-46.62507057, -23.55259002], [-46.62523526, -23.55326922]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua da figueira',
            'obs': null,
            'perimeter': 959.59403,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.8',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63546877, -23.55113388], [-46.63541893, -23.55104172], [-46.63527129, -23.55053638], [-46.63513733, -23.55012068], [-46.63501917, -23.5497337], [-46.63490778, -23.54936415], [-46.6347715, -23.54901369], [-46.6346006, -23.5486578]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua quintino bocayuva',
            'obs': null,
            'perimeter': 288.72243,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.304',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.65571104, -23.54157535], [-46.65602817, -23.54147176]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'rua veiga filho',
            'obs': null,
            'perimeter': 34.35295,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.9',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63385652, -23.54966915], [-46.63398324, -23.54962727], [-46.63433866, -23.5495352], [-46.63476974, -23.54946406], [-46.63481043, -23.54945204], [-46.63492027, -23.54940559]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'barao de paranapiacaba',
            'obs': null,
            'perimeter': 112.84862,
            'id_type': 1,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.38',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63426455, -23.54387196], [-46.63386654, -23.54404125], [-46.63400474, -23.54429085], [-46.63410911, -23.54428713], [-46.63417543, -23.54431014], [-46.63438393, -23.54419296], [-46.63437645, -23.54407696], [-46.63434765, -23.54394804], [-46.63426586, -23.54387067]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': 'largo de sao bento',
            'obs': null,
            'perimeter': 158.03055,
            'id_type': 4,
            'first_year': 1920,
            'last_year': 1930
          }
        }, {
          'type': 'Feature',
          'id': 'streets.39',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[[-46.63290019, -23.54887108], [-46.63292928, -23.54880473], [-46.63308938, -23.54840547], [-46.63320545, -23.5480971], [-46.63325589, -23.54802193], [-46.63336475, -23.54801218], [-46.63344117, -23.54802286], [-46.6337292, -23.54802609]]]
          },
          'geometry_name': 'geom',
          'properties': {
            'name': null,
            'obs': 'sem nome',
            'perimeter': 149.47135,
            'id_type': 0,
            'first_year': 1920,
            'last_year': 1930
          }
        }],
        'crs': {'type': 'name', 'properties': {'name': 'urn:ogc:def:crs:EPSG::4326'}}
      }

      var vectorSourcePlaces = new ol.source.Vector({
        features: (new ol.format.GeoJSON()).readFeatures(geojsonPlaces)
      })

      var vectorSourceStreets = new ol.source.Vector({
        features: (new ol.format.GeoJSON()).readFeatures(geojasonStreets)
      })

      const vectorLayerStreets = new ol.layer.Vector({
        title: 'Streets',
        visible: true,
        source: vectorSourceStreets,
        style: streetsStyle
      })

      const vectorLayerPlaces = new ol.layer.Vector({
        title: 'Places',
        visible: true,
        source: vectorSourcePlaces,
        style: placeStyle
      })

      overlayGroup.getLayers().push(
        new ol.layer.Tile({
          title: 'SP 1930',
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

      overlayGroup.getLayers().push(
        vectorLayerStreets
      )
      overlayGroup.getLayers().push(
        vectorLayerPlaces
      )

    }
  }
</script>

<style lang="sass" scoped>
  .map
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: 69px
    background: #fff
</style>
