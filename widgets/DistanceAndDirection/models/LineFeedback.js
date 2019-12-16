// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/has dojo/topic esri/toolbars/draw esri/graphic esri/geometry/Polyline esri/geometry/geometryEngine jimu/utils ./Feedback".split(" "),function(m,h,n,q,e,k,p,g,l,r,f){f=m([f],{constructor:function(a){m.safeMixin(this,a);this.syncEvents();this.initGeometryService()},syncEvents:function(){e.subscribe("manual-startpoint-input",h.hitch(this,this.onLineStartManualInputHandler));e.subscribe("manual-line-end-point-input",h.hitch(this,this.onLineEndManualInputHandler));
e.subscribe("clear-points",h.hitch(this,this.clearPoints))},clearPoints:function(a){a&&(this._points=[],this.map.graphics.clear())},onLineStartManualInputHandler:function(a){this._points=[];this._points.push(a.offset(0,0));this.set("startPoint",this._points[0]);this.map.centerAt(a)},onLineEndManualInputHandler:function(a){this._points.push(a.offset(0,0));this.set("endPoint",this._points[1])},getAngle:function(a,b){var c=null,c=(180*Math.atan2(b.x-a.x,b.y-a.y)/Math.PI+360)%360;"mils"===this.angleUnit&&
(c*=17.777777778);return c.toFixed(2)},_onClickHandler:function(a){var b;this.map.snappingManager&&(b=this.map.snappingManager._snappingPoint);var c=b||a.mapPoint,d=this.map,e,f;this._processAfterMapClick(c).then(h.hitch(this,function(a){this._points.push(c);switch(this._geometryType){case k.POINT:this.set("startPointDD",a);this.set("startPoint",this._points[0]);this._drawEnd(c);this._setTooltipMessage(0);break;case k.POLYLINE:if(2===this._points.length){this.set("endPoint",this._points[1]);this.set("endPointDD",
a);this._onDblClickHandler();return}1===this._points.length?(this.set("startPoint",this._points[0]),this.set("startPointDD",a),a=new g(d.spatialReference),a.addPath(this._points),this._graphic=d.graphics.add(new p(a,this.lineSymbol),!0),d.snappingManager&&d.snappingManager._setGraphic(this._graphic),this.canProjectLocally&&(this._onMouseMoveHandler_connect=n.connect(d,"onMouseMove",this._onMouseMoveHandler)),this._tGraphic=d.graphics.add(new p(new g({paths:[[[c.x,c.y],[c.x,c.y]]],spatialReference:d.spatialReference}),
this.lineSymbol),!0)):(this.set("endPoint",this._points[1]),this.set("endPointDD",a),this._graphic.geometry._insertPoints([c],0),this._graphic.setGeometry(this._graphic.geometry).setSymbol(this.lineSymbol),e=this._tGraphic,f=e.geometry,f.setPoint(0,0,c),f.setPoint(0,1,c),e.setGeometry(f))}this._setTooltipMessage(this._points.length);1===this._points.length&&"polyline"===this._geometryType&&(a=this._tooltip)&&(a.innerHTML=r.sanitizeHTML(this.nls.clickToFinishLineMessage))}))},_onDblClickHandler:function(a){var b;
b=this._points;var c=this.map.spatialReference;q("esri-touch")&&a&&b.push(a.mapPoint);a=new g({paths:[[[b[0].x,b[0].y],[b[1].x,b[1].y]]],spatialReference:c});b=new g({paths:[[[this.startPointDD.x,this.startPointDD.y],[this.endPointDD.x,this.endPointDD.y]]],spatialReference:this.startPointDD.spatialReference});b.geodesicLength=l.geodesicLength(b,9001);this._onMouseMoveHandler_connect&&n.disconnect(this._onMouseMoveHandler_connect);var c=this.coordTool.convertMetersToUnits(b.geodesicLength,this.lengthUnit),
d=this.getAngle(this.startPointDD,this.endPointDD);e.publish("DD_LINE_LENGTH_DID_CHANGE",c);e.publish("DD_LINE_ANGLE_DID_CHANGE",d);this._clear();this._setTooltipMessage(0);b={geometry:a,geographicGeometry:b};a=new g(a.toJson());a.result=b;this._drawEnd(a)},_onMouseMoveHandler:function(a){var b;this.map.snappingManager&&(b=this.map.snappingManager._snappingPoint);var c=this._geometryType===k.POLYLINE?this._points[0]:this._points[this._points.length-1];a=b||a.mapPoint;var d=this._tGraphic.geometry;
d.setPoint(0,0,{x:c.x,y:c.y});d.setPoint(0,1,{x:a.x,y:a.y});b=l.geodesicDensify(d,10001);d=l.geodesicLength(d,9001);this._graphic.setGeometry(b);b=this.coordTool.convertMetersToUnits(d,this.lengthUnit);c=this.getAngle(c,a);e.publish("DD_LINE_LENGTH_DID_CHANGE",b);e.publish("DD_LINE_ANGLE_DID_CHANGE",c)}});f.drawnLineLengthDidChange="DD_LINE_LENGTH_DID_CHANGE";f.drawnLineAngleDidChange="DD_LINE_ANGLE_DID_CHANGE";return f});