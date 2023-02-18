import L from "leaflet";

import ProjectionControl from "./ProjectionControl";
import MousePositionControl from "./MousePositionControl";
import AstroDrawFilterControl from "./AstroDrawFilterControl";
import ViewCenterControl from "./ViewCenterControl";

/**
 * @class AstroControlManager
 * @aka L.Class.AstroControlManager
 * @inherits L.Class
 *
 * @classdesc
 * Adds all of the needed controls to the AstroMap.
 */
export default L.AstroControlManager = L.Class.extend({
  /**
   * @function AstroControlManager.prototype.initialize
   * @description Creates all of the required controls.
   * @param {AstroMap} map - The AstroMap to add the controls to. We need to pass in the map here
   *                         because the drawnItems FeatureGroup needs it when initialized.
   */
  initialize: function(map) {
    this._controls = [];
    this._projControl = new ProjectionControl();
    this._controls.push(this._projControl);

    this._mouseControl = new MousePositionControl({
      numDigits: 3
    });
    this._controls.push(this._mouseControl);

    this._zoomControl = new L.Control.Zoom();
    this._controls.push(this._zoomControl);

    this._viewCenterControl = new ViewCenterControl();
    this._controls.push(this._viewCenterControl);

    let drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    this._drawControl = new AstroDrawFilterControl({
      edit: {
        featureGroup: drawnItems
      }
    });
    this._controls.push(this._drawControl);
  },

  /**
   * @function AstroControlManager.prototype.addTo
   * @description Adds all of the controls to the AstroMap.
   * @param {AstroMap} map - The AstroMap to add the controls to.
   */
  addTo: function(map) {
    this._controls.forEach(function(control, index) {
      map.addControl(control);
    });
    map.addControl(new L.Control.Scale({ imperial: false }));
  },

});
