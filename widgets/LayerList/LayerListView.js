// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/LayerList/LayerListView.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-list-operations" role\x3d\'button\' aria-haspopup\x3d\'true\' aria-label\x3d"${nls.tipLayerListOperation}" aria-expanded\x3d"false" tabindex\x3d"0" data-dojo-attach-point\x3d"layerListOperations"\x3e\r\n    \x3c!--div class\x3d"setting-image jimu-icon jimu-icon-setting jimu-state-disabled"\x3e\x3c/div--\x3e\r\n  \x3c/div\x3e\r\n  \x3ctable class\x3d"layer-list-table"\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/tbody\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"tableListTable"\x3e\x3c/tbody\x3e       \r\n  \x3c/table\x3e\r\n  \x3cdiv class\x3d"supports-508-node" tabindex\x3d"0" data-dojo-attach-point\x3d"supports508Node"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dijit/_WidgetBase dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom-construct dojo/on dojo/keys dijit/focus dojo/query jimu/dijit/CheckBox jimu/dijit/DropMenu jimu/dijit/LoadingShelter jimu/utils ./PopupMenu dijit/_TemplatedMixin dojo/text!./LayerListView.html dojo/dom-class dojo/dom-style ./NlsStrings".split(" "),function(x,y,p,m,v,n,r,g,k,q,z,A,B,w,C,D,E,u,t,F){return y([x,D],{templateString:E,_currentSelectedLayerRowNode:null,operationsDropMenu:null,_layerNodeHandles:null,
_layerDomNodeStorage:null,_firstLayerNode:!1,_lastLayerNode:null,_eventHandlers:null,_layerIndexs:null,postMixInProperties:function(){this.inherited(arguments);this.nls=F.value;this._layerDomNodeStorage={};this._eventHandlers=[];this._initLayerIndexs()},postCreate:function(){this.refresh();this._initOperations()},_initLayerIndexs:function(){var a=2;this._layerIndexs={};this.operLayerInfos.traversalAll(p.hitch(this,function(b){this._layerIndexs[b.id]=a++}))},refresh:function(){this._removeLayerNodes();
m.forEach(this.operLayerInfos.getLayerInfoArray(),function(a){this.drawListNode(a,0,this.layerListTable)},this);this.config.showBasemap&&m.forEach(this.operLayerInfos.getBasemapLayerInfoArray(),function(a){this.drawListNode(a,0,this.layerListTable)},this);m.forEach(this.operLayerInfos.getTableInfoArray(),function(a){this.drawListNode(a,0,this.tableListTable)},this);m.forEach(this._eventHandlers,function(a){a.remove&&a.remove()});this._supports508Accessibility()},drawListNode:function(a,b,c,d){var e;
!this.isLayerHiddenInWidget(a)&&this.layerFilter.isValidLayerInfo(a)&&(e=this._layerDomNodeStorage[a.getObjectId()],(a.isRootLayer()||a.isTable)&&e?(n.place(e.layerTrNode,c,d),n.place(e.layerContentTrNode,c,d)):0===a.newSubLayers.length?(e=this.addLayerNode(a,b,c,d),this.config.showLegend?this.addLegendNode(a,b,e.subNode):(a=q(".showLegend-div",e.layerTrNode)[0])&&u.add(a,"hidden")):(e=this.addLayerNode(a,b,c,d),m.forEach(a.newSubLayers,p.hitch(this,function(a,b){this.drawListNode(b,a+1,e.subNode)},
b))))},addLayerNode:function(a,b,c,d){var e=this._layerIndexs[a.id],f,h,l,g,k,m,q=a.getRootLayerInfo();this._layerDomNodeStorage[a.getObjectId()]={layerTrNode:null,layerContentTrNode:null,layerNodeEventHandles:[],layerNodeReferredDijits:[],layerInfo:a};f=n.create("tr",{"class":"jimu-widget-row layer-row layer-tr-node-"+a.id+"",tabindex:0,"aria-label":(a.isTable?window.jimuNls.common.table:window.jimuNls.common.layer)+" "+a.title,layerTrNodeId:a.id});n.place(f,c,d);this._firstLayerNode||(this._firstLayerNode=
f);this._lastLayerNode=f;this._lastLayerInfo=a;h=n.create("td",{"class":"col col1"},f);for(l=0;l<b;l++)n.create("div",{"class":"begin-blank-div jimu-float-leading",innerHTML:""},h);m=n.create("div",{"class":"showLegend-div jimu-float-leading ",tabindex:e,role:"button","aria-label":this.nls.expandLayer,"aria-expanded":"false",imageShowLegendDivId:a.id},h);l=n.create("div",{"class":"div-select jimu-float-leading"},h);g=new z({checked:a.isVisible(),"class":"visible-checkbox-"+a.id});n.place(g.domNode,
l);v.setAttr(g.domNode,"tabindex",e);k=n.create("div",{"class":"noLegend-div jimu-float-leading"},h);var u;u=a.isTable?"images/table.png":a.isBasemap()?"images/basemap.png":"images/noLegend.png";n.create("img",{"class":"noLegend-image",src:this.layerListWidget.folderUrl+u,alt:"l"},k);if(a.isTiled||a.isTable)t.set(m,"display","none"),t.set(l,"display","none"),t.set(k,"display","block");a.isBasemap()&&(t.set(m,"display","block"),t.set(l,"display","none"),t.set(k,"display","block"),t.set(k,"width","auto"),
t.set(k,"margin-left","2px"));t.set(h,"width",12*b+40+"px");b=n.create("td",{"class":"col col2"},f);h="";try{a.isInScale()||(h="grayed-title")}catch(G){console.warn(G.message)}n.create("div",{innerHTML:a.title,"class":"layer-title-div-"+a.id+" div-content jimu-float-leading "+h},b);h=n.create("td",{"class":"col col3"},f);k=this.hasContentMenu()?"display: block":"display: none";e=n.create("div",{"class":"layers-list-popupMenu-div ",tabindex:e,role:"button","aria-haspopup":"true","aria-expanded":"false",
"aria-label":this.nls.tipLayerOperation,style:k},h);h=n.create("tr",{"class":"",layerContentTrNodeId:a.id});n.place(h,c,d);c=n.create("td",{"class":"",colspan:"3"},h);c=n.create("table",{"class":"layer-sub-node",subNodeId:a.id},c);d=this.own(r(b,"click",p.hitch(this,this._onRowTrClick,a,m,f,c)));this._storeLayerNodeEventHandle(q,d[0]);d=this.own(r(m,"click",p.hitch(this,this._onRowTrClick,a,m,f,c)));this._storeLayerNodeEventHandle(q,d[0]);d=this.own(r(g.domNode,"click",p.hitch(this,this._onCkSelectNodeClick,
a,g)));this._storeLayerNodeEventHandle(q,d[0]);d=this.own(r(e,"click",p.hitch(this,this._onPopupMenuClick,a,e,f)));this._storeLayerNodeEventHandle(q,d[0]);d=this.own(r(f,"keydown",p.hitch(this,this._onLayerNodeKey,m,e)));this._storeLayerNodeEventHandle(q,d[0]);d=this.own(r(m,"keydown",p.hitch(this,this._onImageShowLegendKey,a,m,f,c,e)));this._storeLayerNodeEventHandle(q,d[0]);d=this.own(r(l,"keydown",p.hitch(this,this._onCkSelectDivKey,a,g,f)));this._storeLayerNodeEventHandle(q,d[0]);d=this.own(r(e,
"keydown",p.hitch(this,this._onPopupMenuNodeKey,a,e,f,m)));this._storeLayerNodeEventHandle(q,d[0]);this._layerDomNodeStorage[a.getObjectId()].layerTrNode=f;this._layerDomNodeStorage[a.getObjectId()].layerContentTrNode=h;this.layerFilter.isExpanded(a)&&this._foldOrUnfoldLayer(a,!1,m,c);return{layerTrNode:f,subNode:c}},hasContentMenu:function(){var a=!1,b;if(this.config.contextMenu)for(b in this.config.contextMenu)this.config.contextMenu.hasOwnProperty(b)&&"function"!==typeof this.config.contextMenu[b]&&
(a=a||this.config.contextMenu[b]);else a=!0;return a},addLegendNode:function(a,b,c){c=n.create("tr",{"class":"legend-node-tr",tabindex:0},c);n.create("td",{"aria-label":window.jimuNls.common.layer+" "+window.jimuNls.statisticsChart.legend},c);c=n.create("td",{"class":"legend-node-td"},c);try{var d=a.createLegendsNode();t.set(d,"font-size",12*(b+1)+"px");n.place(d,c)}catch(e){console.error(e)}},redrawLegends:function(a){var b=q("div[legendsDivId\x3d'"+a.id+"']",this.layerListTable)[0];b&&(b._legendDijit&&
b._legendDijit.destroy&&b._legendDijit.destroy(),a.drawLegends(b,this.layerListWidget.appConfig.portalUrl))},_storeLayerNodeEventHandle:function(a,b){(a=this._layerDomNodeStorage[a.getObjectId()])&&a.layerNodeEventHandles.push(b)},_storeLayerNodeDijit:function(a,b){(a=this._layerDomNodeStorage[a.getObjectId()])&&a.layerNodeReferredDijits.push(b)},_clearLayerDomNodeStorage:function(){var a,b=[];this.operLayerInfos.traversalAll(function(a){b.push(a)});for(var c in this._layerDomNodeStorage)this._layerDomNodeStorage.hasOwnProperty(c)&&
"function"!==typeof this._layerDomNodeStorage[c]&&(a=m.some(b,function(a){if(a.getObjectId().toString()===c)return!0},this),a||(m.forEach(this._layerDomNodeStorage[c].layerNodeEventHandles,function(a){a.remove()},this),m.forEach(this._layerDomNodeStorage[c].layerNodeReferredDijits,function(a){a.destroy()},this),n.destroy(this._layerDomNodeStorage[c].layerTrNode),n.destroy(this._layerDomNodeStorage[c].layerContentTrNode),delete this._layerDomNodeStorage[c]))},_removeLayerNodes:function(){var a,b;this._clearLayerDomNodeStorage();
for(var c in this._layerDomNodeStorage)this._layerDomNodeStorage.hasOwnProperty(c)&&"function"!==typeof this._layerDomNodeStorage[c]&&(a=this._layerDomNodeStorage[c])&&a.layerInfo&&a.layerInfo.isRootLayer()&&a.layerContentTrNode&&a.layerTrNode&&((b=a.layerTrNode.parentNode)&&b.removeChild(a.layerTrNode),(b=a.layerContentTrNode.parentNode)&&b.removeChild(a.layerContentTrNode))},_foldSwitch:function(a,b,c){return"none"===t.get(c,"display")?this._foldOrUnfoldLayer(a,!1,b,c):this._foldOrUnfoldLayer(a,
!0,b,c)},_foldOrUnfoldLayer:function(a,b,c,d){var e=e?c:q("div[imageShowLegendDivId\x3d'"+a.id+"']",this.layerListTable)[0],f=f?d:q("table[subNodeId\x3d'"+a.id+"']",this.layerListTable)[0];c=null;e&&f&&(b?(t.set(f,"display","none"),u.remove(e,"unfold"),c=!0,v.setAttr(e,"aria-label",this.nls.expandLayer),v.setAttr(e,"aria-expanded","false")):(t.set(f,"display","table"),u.add(e,"unfold"),c=!1,v.setAttr(e,"aria-label",this.nls.collapseLayer),v.setAttr(e,"aria-expanded","true"),a.isLeaf()&&(b=q(".legends-div",
f)[0],e=q(".legends-loading-img",b)[0],b&&e&&a.drawLegends(b,this.layerListWidget.appConfig.portalUrl))));return c},_foldOrUnfoldLayers:function(a,b){m.forEach(a,function(a){this._foldOrUnfoldLayer(a,b)},this)},_onCkSelectNodeClick:function(a,b,c){c.ctrlKey||c.metaKey?a.isRootLayer()?this.turnAllRootLayers(b.checked):this.turnAllSameLevelLayers(a,b.checked):(this.layerListWidget._denyLayerInfosIsVisibleChangedResponseOneTime=!0,a.setTopLayerVisible(b.checked));c.stopPropagation()},_onPopupMenuClick:function(a,
b,c,d){var e=a.getRootLayerInfo(),f=b.popupMenu;if(!f){f=(new C({_layerInfo:a,box:this.layerListWidget.domNode.parentNode,popupMenuNode:b,layerListWidget:this.layerListWidget,_config:this.config})).placeAt(b);b.popupMenu=f;this._storeLayerNodeDijit(e,f);var h=this.own(r(f,"onMenuClick",p.hitch(this,this._onPopupMenuItemClick,a,f)));this._storeLayerNodeEventHandle(e,h[0]);h=this.own(b.popupMenu.on("onOpenMenu",p.hitch(this,this._onPopupMenuOpen,a,b,e)));this._storeLayerNodeEventHandle(e,h[0])}this._changeSelectedLayerRow(c);
f&&"opened"===f.state?f.closeDropMenu():(this._hideCurrentPopupMenu(),f&&(this.currentPopupMenu=f,f.openDropMenu()));this.operationsDropMenu&&"opened"===this.operationsDropMenu.state&&this.operationsDropMenu.closeDropMenu();d.stopPropagation()},_hideCurrentPopupMenu:function(){this.currentPopupMenu&&"opened"===this.currentPopupMenu.state&&this.currentPopupMenu.closeDropMenu()},_onLayerListWidgetPaneClick:function(){this.operationsDropMenu&&this.operationsDropMenu.closeDropMenu()},_onRowTrClick:function(a,
b,c,d,e){this._changeSelectedLayerRow(c);b=this._foldSwitch(a,b,d);c._expanded=!b;if(e.ctrlKey||e.metaKey)a.isRootLayer()?this.foldOrUnfoldAllRootLayers(b):this.foldOrUnfoldSameLevelLayers(a,b)},_changeSelectedLayerRow:function(a){this._currentSelectedLayerRowNode&&this._currentSelectedLayerRowNode===a||(this._currentSelectedLayerRowNode&&u.remove(this._currentSelectedLayerRowNode,"jimu-widget-row-selected"),u.add(a,"jimu-widget-row-selected"),this._currentSelectedLayerRowNode=a)},_onPopupMenuItemClick:function(a,
b,c,d){d={itemKey:c.key,extraData:d,layerListWidget:this.layerListWidget,layerListView:this};"transparency"===c.key?"none"===t.get(b.transparencyDiv,"display")?b.showTransNode(a.getOpacity(),c):b.hideTransNode():"setVisibilityRange"===c.key?"none"===t.get(b.setVisibilityRangeNode,"display")?b.showSetVisibilityRangeNode(a,c):b.hideSetVisibilityRangeNode():(a=b.popupMenuInfo.onPopupMenuClick(d),a.closeMenu&&b.closeDropMenu())},_exchangeLayerTrNode:function(a,b){a=q("tr[layerTrNodeId\x3d'"+a.id+"']",
this.layerListTable)[0];var c=q("tr[layerTrNodeId\x3d'"+b.id+"']",this.layerListTable)[0];b=q("tr[layerContentTrNodeId\x3d'"+b.id+"']",this.layerListTable)[0];a&&c&&b&&(this.layerListTable.removeChild(c),this.layerListTable.insertBefore(c,a),this.layerListTable.removeChild(b),this.layerListTable.insertBefore(b,a))},_getMovedSteps:function(a,b){var c=1,d,e=this.operLayerInfos.getLayerInfoArray();m.forEach(e,function(b,c){a.id===b.id&&(d=c)},this);if("moveup"===b)for(;!e[d].isFirst&&!(d--,!this.isLayerHiddenInWidget(e[d])&&
this.layerFilter.isValidLayerInfo(e[d])||e[d].isFirst);)c++;else for(;!e[d].isLast&&!(d++,!this.isLayerHiddenInWidget(e[d])&&this.layerFilter.isValidLayerInfo(e[d])||e[d].isLast);)c++;return c},moveUpLayer:function(a){var b=this._getMovedSteps(a,"moveup");this.layerListWidget._denyLayerInfosReorderResponseOneTime=!0;(b=this.operLayerInfos.moveUpLayer(a,b))&&this._exchangeLayerTrNode(b,a)},moveDownLayer:function(a){var b=this._getMovedSteps(a,"movedown");this.layerListWidget._denyLayerInfosReorderResponseOneTime=
!0;(b=this.operLayerInfos.moveDownLayer(a,b))&&this._exchangeLayerTrNode(a,b)},isLayerHiddenInWidget:function(a){var b=!1,c=a;if(a&&this.config.layerOptions&&void 0!==this.config.layerOptions[a.id])for(;c&&!(b=b||!this.config.layerOptions[c.id].display);)c=c.parentLayerInfo;else b=!1;return b},isFirstDisplayedLayerInfo:function(a){var b,c;a.isFirst||!a.isRootLayer()||a.isBasemap()?b=!0:(b=this._getMovedSteps(a,"moveup"),c=this.operLayerInfos.getLayerInfoArray(),a=this.operLayerInfos._getTopLayerInfoIndexById(a.id),
b=this.isLayerHiddenInWidget(c[a-b])||!this.layerFilter.isValidLayerInfo(c[a-b])?!0:!1);return b},isLastDisplayedLayerInfo:function(a){var b,c;a.isLast||!a.isRootLayer()||a.isBasemap()?b=!0:(b=this._getMovedSteps(a,"movedown"),c=this.operLayerInfos.getLayerInfoArray(),a=this.operLayerInfos._getTopLayerInfoIndexById(a.id),b=this.isLayerHiddenInWidget(c[a+b])||!this.layerFilter.isValidLayerInfo(c[a+b])?!0:!1);return b},_initOperations:function(){this.operationsDropMenu=(new A({items:[{key:"turnAllLayersOn",
label:this.nls.turnAllLayersOn},{key:"turnAllLayersOff",label:this.nls.turnAllLayersOff},{key:"separator"},{key:"expandAllLayers",label:this.nls.expandAllLayers},{key:"collapseAlllayers",label:this.nls.collapseAlllayers}],box:this.layerListWidget.domNode.parentNode})).placeAt(this.layerListOperations);var a=q("div.jimu-dropmenu \x3e div:first-child",this.layerListOperations)[0];a&&(u.remove(a,["jimu-icon-btn","popup-menu-button"]),u.add(a,["feature-action","icon-operation"]));this.operationsDropMenu.btnNode&&
this.own(r(this.operationsDropMenu.btnNode,"click",p.hitch(this,this._onLayerListOperationsClick)));this.own(r(this.operationsDropMenu,"onMenuClick",p.hitch(this,this._onOperationsMenuItemClick)));this.operationsDropMenuLoading=(new B({hidden:!0})).placeAt(this.operationsDropMenu.domNode);this.own(r(this.layerListOperations,"keydown",p.hitch(this,this._onLayerListOperationsKey)));this.own(r(this.operationsDropMenu,"onOpenMenu",p.hitch(this,this._onOperationsDropMenuOpen)))},_onLayerListOperationsClick:function(){this._hideCurrentPopupMenu()},
_onOperationsMenuItemClick:function(a){switch(a.key){case "turnAllLayersOn":this.turnAllRootLayers(!0);break;case "turnAllLayersOff":this.turnAllRootLayers(!1);break;case "expandAllLayers":this.foldOrUnfoldAllLayers(!1);break;case "collapseAlllayers":this.foldOrUnfoldAllLayers(!0)}},turnAllRootLayers:function(a){var b=this.operLayerInfos.getLayerInfoArray();m.forEach(b,function(b){this.isLayerHiddenInWidget(b)||b.setTopLayerVisible(a)},this)},turnAllSameLevelLayers:function(a,b){var c={},d=a.getRootLayerInfo();
d.traversal(p.hitch(this,function(d){d.parentLayerInfo&&d.parentLayerInfo.id===a.parentLayerInfo.id&&!this.isLayerHiddenInWidget(d)?c[d.id]={visible:b}:c[d.id]={visible:d.isVisible()}}));d.resetLayerObjectVisibility(c)},foldOrUnfoldAllRootLayers:function(a){var b=m.filter(this.operLayerInfos.getLayerInfoArray(),function(a){return!this.isLayerHiddenInWidget(a)},this);this._foldOrUnfoldLayers(b,a)},foldOrUnfoldSameLevelLayers:function(a,b){a.parentLayerInfo&&(a=m.filter(a.parentLayerInfo.getSubLayers(),
function(a){return!this.isLayerHiddenInWidget(a)},this),this._foldOrUnfoldLayers(a,b))},foldOrUnfoldAllLayers:function(a){var b=[],c=[];this.operationsDropMenuLoading.show();this.operLayerInfos.traversal(p.hitch(this,function(a){this.isLayerHiddenInWidget(a)||(a.isRootLayer()?c.push(a):b.push(a))}));var b=c.concat(b),d=0,e=b.length;setTimeout(p.hitch(this,function(){if(d<e){var c=b.slice(d,d+50);this._foldOrUnfoldLayers(c,a);d+=50;setTimeout(p.hitch(this,arguments.callee),60)}else this.operationsDropMenuLoading.hide()}),
60)},_supports508Accessibility:function(){var a;this._lastLayerNode?(a=r(this.layerListWidget.layerFilter.searchButton,"keydown",p.hitch(this,"_onSearchButtonKey")),this._eventHandlers.push(a),a=r(this.supports508Node,"focus",p.hitch(this,"_onLastNodeFocus")),this._eventHandlers.push(a),w.initLastFocusNode(this.layerListWidget.domNode,this.supports508Node)):(w.initLastFocusNode(this.layerListWidget.domNode,this.layerListOperations),a=r(this.supports508Node,"focus",p.hitch(this,"_onLastNodeFocus")),
this._eventHandlers.push(a))},_onSearchButtonKey:function(a){a.keyCode===g.TAB&&a.shiftKey&&(a.stopPropagation(),a.preventDefault(),this._backToLastNodeFlag=!0)},_getLastExpandedLayerNode:function(){for(var a=this._lastLayerNode,b=null,c=this._lastLayerInfo;c;){var d=c.parentLayerInfo;if(d){if((b=this._layerDomNodeStorage[d.getObjectId()].layerTrNode)&&b._expanded){a=this._layerDomNodeStorage[c.getObjectId()].layerTrNode;break}}else{a=this._layerDomNodeStorage[c.getObjectId()].layerTrNode;break}c=
d}return a},_onLastNodeFocus:function(){if(this._backToLastNodeFlag){var a=this._getLastExpandedLayerNode();a&&k.focus(a);this._backToLastNodeFlag=!1}else k.focus(this.layerListWidget.layerFilter.searchButton)},_onLastLayerNodeKey:function(a){a.keyCode!==g.TAB||a.shiftKey||(a.stopPropagation(),a.preventDefault(),k.focus(this.layerListWidget.layerFilter.searchButton))},_onLayerNodeKey:function(a,b,c){c.keyCode===g.ENTER&&(c.stopPropagation(),c.preventDefault(),"none"===v.getStyle(a,"display")?k.focus(b):
k.focus(a))},_onImageShowLegendKey:function(a,b,c,d,e,f){f.keyCode===g.TAB&&f.stopPropagation();f.keyCode===g.TAB&&f.shiftKey?(f.stopPropagation(),f.preventDefault(),k.focus(e)):f.keyCode===g.ESCAPE?(f.stopPropagation(),f.preventDefault(),k.focus(c)):f.keyCode===g.ENTER&&(f.stopPropagation(),f.preventDefault(),this._onRowTrClick(a,b,c,d,f))},_onCkSelectDivKey:function(a,b,c,d){d.keyCode===g.TAB&&d.stopPropagation();if(d.keyCode===g.ESCAPE)d.stopPropagation(),d.preventDefault(),k.focus(c);else if(d.keyCode===
g.SPACE||d.keyCode===g.ENTER)d.stopPropagation(),d.preventDefault(),b.checked?b.uncheck(!0):b.check(!0),this._onCkSelectNodeClick(a,b,d)},_onPopupMenuNodeKey:function(a,b,c,d,e){e.keyCode===g.TAB&&e.stopPropagation();if(e.keyCode===g.TAB&&!e.shiftKey)e.stopPropagation(),e.preventDefault(),k.focus(d);else if(e.keyCode===g.ESCAPE)e.stopPropagation(),e.preventDefault(),k.focus(c);else if(e.keyCode===g.ENTER||e.keyCode===g.DOWN_ARROW||e.keyCode===g.UP_ARROW)e.stopPropagation(),e.preventDefault(),this._onPopupMenuClick(a,
b,c,e)},_onPopupMenuOpen:function(a,b,c){var d=q(".menu-item",b.popupMenu.dropMenuNode),d=d.filter(function(a){return v.hasClass(a,"menu-item-hidden")?!1:!0}),e=d[0],f=d[d.length-1];d.forEach(function(a,g){var h=!1,l=!1,m=d[g-1],n=d[g+1];0===g?(k.focus(a),h=!0):g===d.length-1&&(l=!0);a.hasBeenOpened||(g=this.own(r(a,"keydown",p.hitch(this,this._onPopupMenuItemKey,b,m,n,e,f,h,l))),this._storeLayerNodeEventHandle(c,g[0]),a.hasBeenOpened=!0)},this)},_onPopupMenuItemKey:function(a,b,c,d,e,f,h,l){if(l.keyCode===
g.DOWN_ARROW)l.stopPropagation(),l.preventDefault(),c&&k.focus(c);else if(l.keyCode===g.UP_ARROW)l.stopPropagation(),l.preventDefault(),b&&k.focus(b);else if(l.keyCode===g.HOME)l.stopPropagation(),l.preventDefault(),d&&k.focus(d);else if(l.keyCode===g.END)l.stopPropagation(),l.preventDefault(),e&&k.focus(e);else if(l.keyCode===g.ESCAPE||l.keyCode===g.TAB)l.stopPropagation(),l.preventDefault(),k.focus(a),a.popupMenu.closeDropMenu()},_enableNavMode:function(a){a.keyCode!==g.TAB||w.isInNavMode()||v.addClass(document.body,
"jimu-nav-mode")},_onLayerListOperationsKey:function(a){a.keyCode===g.ENTER&&this.operationsDropMenu._onBtnClick(a)},_onOperationsDropMenuOpen:function(){var a=q(".menu-item",this.operationsDropMenu.domNode),a=a.filter(function(a){return v.hasClass(a,"menu-item-hidden")?!1:!0}),b=a[0],c=a[a.length-1];a.forEach(function(d,e){var f=!1,g=!1,l=a[e-1],m=a[e+1];0===e?(k.focus(d),f=!0):e===a.length-1&&(g=!0);d.hasBeenOpened||(this.own(r(d,"keydown",p.hitch(this,this._onLayerListOperationsMenuItemKey,l,m,
b,c,f,g))),d.hasBeenOpened=!0)},this)},_onLayerListOperationsMenuItemKey:function(a,b,c,d,e,f,h){if(h.keyCode===g.DOWN_ARROW)h.stopPropagation(),h.preventDefault(),b&&k.focus(b);else if(h.keyCode===g.UP_ARROW)h.stopPropagation(),h.preventDefault(),a&&k.focus(a);else if(h.keyCode===g.HOME)h.stopPropagation(),h.preventDefault(),c&&k.focus(c);else if(h.keyCode===g.END)h.stopPropagation(),h.preventDefault(),d&&k.focus(d);else if(h.keyCode===g.ESCAPE||h.keyCode===g.TAB)h.stopPropagation(),h.preventDefault(),
k.focus(this.layerListOperations),this.operationsDropMenu.closeDropMenu()}})});