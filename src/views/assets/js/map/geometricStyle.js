/*
  WARNING:

  Do NOT use a `string color` (i.e. blue, black, etc.) as a fill color, use an `hexadecimal` or `RGBA` color instead,
  because if you use a `string color`, this color will not be recognized by the color picker on the map as default color.
*/

const DEFAULT_STROKE_COLOR = 'rgba(255, 255, 255, 1)';
const DEFAULT_FILL_COLOR = 'rgba(0, 0, 0, 1)';
const DEFAULT_FILL_COLOR_TRANSPARENT = 'rgba(255, 255, 255, 0.5)';
const DEFAULT_STROKE_WIDTH = 3;
const DEFAULT_RADIUS = 8;

const getRandomColor = (alpha = 1) => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${alpha})`;

const getStroke = (color = DEFAULT_STROKE_COLOR) => new ol.style.Stroke({
    color,
    width: DEFAULT_STROKE_WIDTH
});

const getPointStyle = (random = false) => new ol.style.Style({
    image: new ol.style.Circle({
        radius: DEFAULT_RADIUS,
        stroke: getStroke(),
        fill: new ol.style.Fill({
            color: random ? getRandomColor(1) : DEFAULT_FILL_COLOR
        })
    })
});

const getLineStyle = (random = false) => new ol.style.Style({
    stroke: getStroke(random ? getRandomColor(1) : 'rgba(0, 0, 255, 1)')
});

const getPolygonStyle = (random = false) => new ol.style.Style({
    stroke: getStroke(),
    fill: new ol.style.Fill({
        color: random ? getRandomColor(0.5) : DEFAULT_FILL_COLOR_TRANSPARENT
    })
});

export {
    getPointStyle,
    getLineStyle,
    getPolygonStyle
};