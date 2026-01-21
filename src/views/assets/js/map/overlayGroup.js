import { Group } from "ol/layer";

const overlayGroupGeolocation = new Group({
  title: "overlays_geolocation",
  layers: [],
});

const overlayGroupExternal = new Group({
  title: "overlays_external",
  layers: [],
});

const overlayGroupRasters = new Group({
  title: "overlays_rasters",
  layers: [],
});

const overlayGroupOther = new Group({
  title: "overlays_other",
  layers: [],
});

const overlayGroup = new Group({
  title: "overlays",
  layers: [],
});

export {
  overlayGroupGeolocation,
  overlayGroupExternal,
  overlayGroupRasters,
  overlayGroupOther,
  overlayGroup,
};
