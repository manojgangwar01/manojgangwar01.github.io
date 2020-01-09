define(['dojo/_base/declare',
'dojo/on',
'dijit/_WidgetsInTemplateMixin',
  'jimu/BaseWidget',
  'jimu/WidgetManager',
  'jimu/PanelManager',
      'esri/map'

],
function(declare,on, _WidgetsInTemplateMixin, BaseWidget,WidgetManager,PanelManager, map) {
    var handlerStreetView;
    
    var clazz = declare([BaseWidget,_WidgetsInTemplateMixin], {
        templateString: '<div> <br /> <br />1. Click on the map, and Streetview will open for this location in a new window <br /> <br /><hr>' + '2. Click the "Cancel" button to de-activate the tool.. <br /><br />'+ '<br /> <input type="button" style="background-color: rgb(125,125,125)!important;"  class="jimu-btn" id="btnPict" value="Cancel" data-dojo-attach-event="click:_EarthClick"> <br /> <br /> <br /> </div> ',
        
        onOpen: function(){

            //this._EarthClick();
 
            EarthConfigURL = this.config.configText;
            map = this.map;

            
            //handlers 
            if (handlerStreetView) {
                handlerStreetView.remove();
                handlerStreetView= null;
            } else {



                map.setMapCursor("url(./widgets/Streetview/images/streetview.cur),auto");
                handlerStreetView = map.on("click", function (evt) {

                    pt = esri.geometry.webMercatorToGeographic(evt.mapPoint);
                    url = "https://earth.google.com/web/@" + pt.y + "," + pt.x + EarthConfigURL;
					url_s = "http://maps.google.com/?cbll=" +  pt.y + "," + pt.x + "&cbp=12,90,0,0,5&layer=c" + EarthConfigURL;

                    window.open(url_s);

                    ///// remove after one click
                   // map.setMapCursor("default");
                    ////remove after one click
                    

                   // handlerStreetView.remove();
                });
            }; 


        }, 
        onClose: function(){
            map = this.map;
            map.setMapCursor("default");
            if (handlerStreetView) {
                handlerStreetView.remove();
                handlerStreetView= null;
            }
        },

      

        _EarthClick: function () {

            map = this.map;
            map.setMapCursor("default");
            if (handlerStreetView) {
                handlerStreetView.remove();
                handlerStreetView= null;
            }
            PanelManager.getInstance().closePanel(this.id + '_panel');

            
            /* EarthConfigURL = this.config.configText;
            map = this.map;

            var handlerStreetView;
            //handlers 
            if (handlerStreetView) {
                handlerStreetView.remove();
                handlerStreetView= null;
            } else {



                map.setMapCursor("url(./widgets/Streetview/images/streetview.cur),auto");
                handlerStreetView = map.on("click", function (evt) {

                    pt = esri.geometry.webMercatorToGeographic(evt.mapPoint);
                    url = "https://earth.google.com/web/@" + pt.y + "," + pt.x + EarthConfigURL;
					url_s = "http://maps.google.com/?cbll=" +  pt.y + "," + pt.x + "&cbp=12,90,0,0,5&layer=c" + EarthConfigURL;

                    window.open(url_s);

                    ///// remove after one click
                    map.setMapCursor("default");
                    ////remove after one click
                    

                    handlerStreetView.remove();
                });
            };  /// end els e for handlerStreetView */


            /////  end of street view widget

            /////
        }
});

clazz.hasStyle = false;
clazz.hasUIFile = false;
clazz.hasLocale = false;
clazz.hasConfig = false;
return clazz;
});

