// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/asset-details.html":'\x3cdiv style\x3d"height: 100%; width: 100%"\x3e\r\n  \x3cdiv style\x3d"height: 100%; width: 100%" data-dojo-attach-point\x3d"assetDetailsParent"\x3e\r\n    \x3cdiv class\x3d"esriCTContentSection"\x3e\r\n      \x3cdiv class\x3d"esriCTAssetDetailsTitle"\x3e\r\n        ${nls.workBench.assetDetailsTitle}\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTNoAssetMessage" tabindex\x3d"0" role\x3d"presentation" aria-label\x3d"${nls.workBench.noAssetAddedMsg}" data-dojo-attach-point\x3d"noAssetDetails"\x3e\r\n        ${nls.workBench.noAssetAddedMsg}\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"assetDetailsNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"listNode"\x3e\x3c/div\x3e\r\n        \x3cdiv\x3e\r\n          \x3cdiv style\x3d"width: 100%; float: left;"\x3e\r\n            \x3cdiv class\x3d"esriCTTotalCostTitle" title\x3d"${nls.assetDetails.totalCostTitle}"\x3e${nls.assetDetails.totalCostTitle}\x3c/div\x3e\r\n            \x3cdiv style\x3d"height: 30px;" class\x3d"esriCTEditEquationIcon" data-dojo-attach-point\x3d"additionalCostBtn" tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.assetDetails.totalCostTitle}"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"totalProjectCost"\x3e\r\n            \x3ctable class\x3d"esriCTTable" style\x3d"width: 100%;"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr tabindex\x3d"0"\x3e\r\n                  \x3ctd class\x3d"esriCTBoldFont esriCTAssetDetailsTotalCostLabel" data-dojo-attach-point\x3d"totalCostLabel"\x3e${nls.projectOverview.totalCostLabel}\x3c/td\x3e\r\n                  \x3ctd class\x3d"esriCTBoldFont esriCTAssetDetailsTotalCost" data-dojo-attach-point\x3d"totalCost"\x3e\x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n            \x3ctable class\x3d"esriCTTable" style\x3d"width: 100%;"\x3e\r\n              \x3ctbody data-dojo-attach-point\x3d"additionalCostTable"\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n            \x3ctable class\x3d"esriCTTable" style\x3d"width: 100%;"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr tabindex\x3d"0"\x3e\r\n                  \x3ctd class\x3d"esriCTBoldFont esriCTAssetDetailsGrossCostLabel" data-dojo-attach-point\x3d"grossCostLabel"\x3e${nls.projectOverview.grossCostLabel}\x3c/td\x3e\r\n                  \x3ctd class\x3d"esriCTBoldFont esriCTAssetDetailsGrossCost" data-dojo-attach-point\x3d"grossCost"\x3e\x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd style\x3d"font-weight: normal; font-style: italic;" colspan\x3d"2" data-dojo-attach-point\x3d"roundingLabel"\x3e${nls.projectOverview.roundingLabel}\x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTPageFooter"\x3e\r\n      \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"okButton" tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.common.back}"\x3e${nls.common.back}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"height: 100%; width: 100%" class\x3d"esriCTHidden" data-dojo-attach-point\x3d"costEquationEditorParent"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/html jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./asset-details.html dojo/_base/lang dojo/dom-construct dojo/_base/array dojo/dom-class dojo/dom-attr dojo/string dojo/on dojo/query dijit/TooltipDialog dijit/popup esri/graphicsUtils ./advance-item-list ./cost-equation-editor dojo/keys dojo/_base/event dijit/focus jimu/utils".split(" "),function(B,C,D,E,F,G,h,c,v,n,g,A,f,l,H,x,I,J,K,k,q,r,w){return B([D,E,F],{templateString:G,baseClass:"jimu-widget-cost-analysis-asset-details",
_layerDetailsNode:{},_layerIndexes:[],_openGroups:{},postCreate:function(){this.inherited(arguments);this._layerDetailsNode={};this._openGroups={};this.listData=[];this._layerIndexes=[];v.forEach(this.config.layerSettings,h.hitch(this,function(a){if(a.editable&&this.map.getLayer(a.id)){var b;this._openGroups[a.id]=[];this._layerDetailsNode[a.id]=c.create("div");b={title:this.map.getLayer(a.id).name,content:this._layerDetailsNode[a.id],icon:"",actionIcon:"",isOpen:!1,isHidden:!0};this.listData.push(b);
this._layerIndexes.push(a.id)}}))},startup:function(){this.inherited(arguments);this._initItemList();this._initCostEquationEditor();this.own(f(document.body,"click",h.hitch(this,function(a){this.isPartOfPopup(a.target||a.srcElement)||this._closePopupDialog()})));this.own(f(this.okButton,"click",h.hitch(this,function(){this.emit("onOkButtonClicked")})));this.own(f(this.okButton,"keydown",h.hitch(this,function(a){if(a.keyCode===k.ENTER||a.keyCode===k.SPACE)q.stop(a),this.emit("onOkButtonClicked")})));
this.own(f(this.additionalCostBtn,"click",h.hitch(this,function(){this.emit("showAdditionalCost")})));this.own(f(this.additionalCostBtn,"keydown",h.hitch(this,function(a){if(a.keyCode===k.ENTER||a.keyCode===k.SPACE)q.stop(a),this.emit("showAdditionalCost")})))},reset:function(){for(var a in this._openGroups)this._openGroups[a]=[]},_initItemList:function(){var a;this.itemList=new J({itemList:this.listData,showArrow:!0,togglePanels:!0,openMultiple:!0,setAutoHeight:!0,highlighter:!0,highlighterColor:this.config.selectedThemeColor,
widgetDomNode:this.widgetDomNode,nls:this.nls},c.create("div",{},this.listNode));this.own(f(this.itemList,"onActionButtonClicked",h.hitch(this,function(a){this.emit("actionClicked",a)})));this.own(f(this.itemList,"onTitleClicked",h.hitch(this,function(a){this.emit("titleClicked",a)})));this.own(f(this.itemList,"onLoad",h.hitch(this,function(){this.emit("onLoad")})));this.itemList.startup();a=this._createTooltipDialogContent();this.assetDetailsDialog=new H({"class":this.baseClass,content:a,style:"width : 180px"})},
_createTooltipDialogContent:function(){var a,b,d;a=c.create("div",{},null);b=c.create("div",{style:"height : 20px; margin: 0px"},a);b=c.create("div",{"class":"esriCTDialogIcon esriCTClose",title:this.nls.workBench.closeDialog,tabindex:"0",role:"button","aria-label":this.nls.workBench.closeDialog},b);this.own(f(b,"click",h.hitch(this,this._closePopupDialog)));this.own(f(b,"keydown",h.hitch(this,function(a){if(a.keyCode===k.ENTER||a.keyCode===k.SPACE||a.keyCode===k.ESCAPE)q.stop(a),this._closePopupDialog()})));
b=c.create("div",{"class":"esriCTRowContainer",title:this.nls.workBench.zoomToAsset,tabindex:"0",role:"button","aria-label":this.nls.workBench.zoomToAsset},a);d=c.create("div",{"class":"esriCTRowContainer",title:this.nls.workBench.deleteAsset,tabindex:"0",role:"button","aria-label":this.nls.workBench.deleteAsset},a);c.create("div",{"class":"esriCTDialogIcon esriCTZoom"},b);c.create("div",{"class":"esriCTTooltipDialogLabel esriCTEllipsis",innerHTML:this.nls.workBench.zoomToAsset},b);this.own(f(b,"click",
h.hitch(this,function(a){q.stop(a);this._zoomToAsset();this._support508ToPopupDialog();r.focus(a.currentTarget)})));this.own(f(b,"keydown",h.hitch(this,function(a){if(a.keyCode===k.ENTER||a.keyCode===k.SPACE)q.stop(a),this._zoomToAsset(),this._support508ToPopupDialog(),r.focus(a.currentTarget);a.keyCode===k.ESCAPE&&(q.stop(a),this._closePopupDialog())})));c.create("div",{"class":"esriCTDialogIcon esriCTDelete"},d);c.create("div",{"class":"esriCTTooltipDialogLabel",innerHTML:this.nls.workBench.deleteAsset},
d);this.own(f(d,"click",h.hitch(this,this._deleteAsset)));this.own(f(d,"keydown",h.hitch(this,function(a){if(a.keyCode===k.ENTER||a.keyCode===k.SPACE)q.stop(a),this._deleteAsset();a.keyCode===k.ESCAPE&&(q.stop(a),this._closePopupDialog())})));return a},_zoomToAsset:function(){var a,b;this.selectedRowInfo&&(a=this.assetDetails[this.selectedRowInfo.layerId][this.selectedRowInfo.templateName][this.selectedRowInfo.region][this.selectedRowInfo.scenario],b=this.layerInfosObj.getLayerInfoById(this.selectedRowInfo.layerId).layerObject.objectIdField,
a&&v.some(a,h.hitch(this,function(a){if(a.attributes[b].toString()===this.selectedRowInfo.objectId)return this.map.setExtent(I.graphicsExtent([a]).expand(1.5)),!0})))},_deleteAsset:function(){if(this.selectedRowInfo){var a,b;a=this.map.getLayer(this.selectedRowInfo.layerId);(b=this.assetDetails[this.selectedRowInfo.layerId][this.selectedRowInfo.templateName][this.selectedRowInfo.region][this.selectedRowInfo.scenario])&&v.some(b,h.hitch(this,function(b){if(b.attributes[a.objectIdField].toString()===
this.selectedRowInfo.objectId)return b._layer=a,a.applyEdits(null,null,[b]),!0}));this._closePopupDialog()}},_rowClick:function(a){a.stopPropagation();a.preventDefault();l(".esriCTRowSelected",this.assetDetailsNode).removeClass("esriCTRowSelected");n.add(a.currentTarget,"esriCTRowSelected");this.selectedRowInfo={};this.selectedRowInfo.templateName=g.get(a.currentTarget,"templateName");this.selectedRowInfo.region=g.get(a.currentTarget,"region");this.selectedRowInfo.scenario=g.get(a.currentTarget,"scenario");
this.selectedRowInfo.layerId=g.get(a.currentTarget,"layerId");this.selectedRowInfo.objectId=g.get(a.currentTarget,"objectId");this._openPopupDialog(this.assetDetailsDialog,a)},_createExpandCollapseButton:function(a,b,d,m){a=c.create("div",{"class":"esriCTToggleIcon",tabindex:"-1",role:"button","aria-label":m,"aria-expanded":"false"},a);-1===this._openGroups[d].indexOf(b)?n.add(a,"esriCTExpandIcon"):n.add(a,"esriCTCollapseIcon");g.set(a,"groupId",b);g.set(a,"layerId",d);this.own(f(a,"click",h.hitch(this,
function(a){this.expandCollapseBtnClicked(a)})));this.own(f(a,"keydown",h.hitch(this,function(a){if(a.keyCode===k.ENTER||a.keyCode===k.SPACE)q.stop(a),this.expandCollapseBtnClicked(a)})));return a},expandCollapseBtnClicked:function(a){var b,d,m;b=g.get(a.currentTarget,"groupId");d=g.get(a.currentTarget,"layerId");m=l("[tableGroupId \x3d "+b.replace(/"/g,'\\"')+"]",this.assetDetailsNode)[0];n.contains(a.currentTarget,"esriCTCollapseIcon")?(n.replace(a.currentTarget,"esriCTExpandIcon","esriCTCollapseIcon"),
n.add(m,"esriCTHidden"),this._openGroups[d].splice(this._openGroups[d].indexOf(b),1),this._TabIndexToAssetDetailsTableRows(a,"-1"),g.set(a.currentTarget,"aria-expanded","false")):(n.replace(a.currentTarget,"esriCTCollapseIcon","esriCTExpandIcon"),n.remove(m,"esriCTHidden"),this._openGroups[d].push(b),this._TabIndexToAssetDetailsTableRows(a,"0"),g.set(a.currentTarget,"aria-expanded","true"))},_createEditEquationButton:function(a,b,d){a=c.create("div",{"class":"esriCTEditEquationIcon",tabindex:"-1",
role:"button","aria-label":d+this.nls.common.edit+this.nls.workBench.costEquationTitle},a);g.set(a,"templateName",b.templateName);g.set(a,"region",b.regionName);g.set(a,"scenario",b.scenario);g.set(a,"layerId",b.layerId);g.set(a,"equation",b.equation);this.own(f(a,"click",h.hitch(this,function(a){this._editEquationBtnClicked(a)})));this.own(f(a,"keydown",h.hitch(this,function(a){if(a.keyCode===k.ENTER||a.keyCode===k.SPACE)q.stop(a),this._editEquationBtnClicked(a)})));return a},_editEquationBtnClicked:function(a){var b=
{};this.currentEditEquationBtn=a.currentTarget;n.add(a.currentTarget,"esriCTEditEquationBtnClicked");b.templateName=g.get(a.currentTarget,"templateName");b.region=g.get(a.currentTarget,"region");b.scenario=g.get(a.currentTarget,"scenario");b.layerId=g.get(a.currentTarget,"layerId");b.equation=g.get(a.currentTarget,"equation");n.add(this.assetDetailsParent,"esriCTHidden");n.remove(this.costEquationEditorParent,"esriCTHidden");this._costEquationEditor&&this._costEquationEditor.setGroupInfo(b)},_createAssetDetailsTable:function(a,
b,d,m){var e,y,u,l,p=0,t=0,z;z=this.layerInfosObj.getLayerInfoById(m.layerId).layerObject.objectIdField;e=c.create("table",{style:{width:"100%"},"class":"esriCTTable"},a);-1===this._openGroups[m.layerId].indexOf(b)&&n.add(e,"esriCTHidden");g.set(e,"tableGroupId",b);y=c.create("tbody",{},e);"point"!==d[0].geometry.type?(l=this.appUtils.getUnitsAbbreviation(d[0].geometry.type,this.config.generalSettings.measurementUnit),b="polygon"===d[0].geometry.type?this.nls.statisticsType.areaLabel:this.nls.statisticsType.lengthLabel):
(l=this.nls.workBench.units,b=this.nls.statisticsType.countLabel);u=c.create("tr",{},y);c.create("td",{innerHTML:this.nls.workBench.objectIdColTitle},u);c.create("td",{innerHTML:b},u);c.create("td",{innerHTML:this.nls.workBench.costColTitle},u);v.forEach(d,h.hitch(this,function(a){var b,e;e=c.create("tr",{"class":"esriCTSelectableRow",tabindex:"-1",role:"button"},y);b=a.featureDimension;g.set(e,"templateName",m.templateName);g.set(e,"region",m.regionName);g.set(e,"scenario",m.scenario);g.set(e,"layerId",
m.layerId);g.set(e,"objectId",a.attributes[z]);this.own(f(e,"click",h.hitch(this,this._rowClick)));this.own(f(e,"keydown",h.hitch(this,function(a){if(a.keyCode===k.ENTER||a.keyCode===k.SPACE)q.stop(a),this._rowClick(a)})));"point"!==d[0].geometry.type&&(b=this.appUtils.applyRounding(b));c.create("td",{innerHTML:a.attributes[z]},e);c.create("td",{innerHTML:b+" "+l},e);b=this.config.generalSettings.currency+" "+this.appUtils.applyRounding(a.individualCost);c.create("td",{innerHTML:b,"class":"esriCTAssetItemDetailsCostingValue"},
e);p+=a.individualCost;t+=a.featureDimension}));"point"!==d[0].geometry.type&&(t=this.appUtils.applyRounding(t));this._addAriaLableToRows(e);a=c.create("table",{style:{width:"100%"},"class":"esriCTTable"},a);a=c.create("tr",{"class":"esriCTGroupSummaryTotalRow",tabindex:"-1","aria-label":"Total "+b+" "+t+" "+l+" Total "+this.nls.workBench.costColTitle+" "+p},c.create("tbody",{},a));c.create("td",{"class":"esriCTGroupSummaryTotalTitle",innerHTML:"Total:"},a);c.create("td",{innerHTML:t+" "+l},a);p=
this.config.generalSettings.currency+" "+this.appUtils.applyRounding(p);c.create("td",{innerHTML:p,"class":"esriCTGroupSummaryTotalCost"},a)},showAssetDetails:function(a,b){var d,m=!1;this.assetDetails=a;for(var e in this._layerDetailsNode)if(d=this._layerIndexes.indexOf(e),c.empty(this._layerDetailsNode[e]),this.itemList.hide(d),a.hasOwnProperty(e))for(var f in a[e])for(var u in a[e][f])for(var l in a[e][f][u]){var p,t,k,q;p=u;k=l;var r;r=f+" ";t=a[e][f][u][l];0<t.length&&(m={templateName:f,regionName:u,
scenario:l,layerId:e,equation:t[0].templateInfo.COSTEQUATION},"null"===p?p=this.nls.scenarioSelection.noneText:r+=A.substitute(this.nls.assetDetails.inGeography,{geography:p}),"null"===k?k=this.nls.scenarioSelection.noneText:r+=A.substitute(this.nls.assetDetails.withScenario,{scenario:k}),p=e+" - "+f+" - "+p+" - "+k,p=h.trim(p),k=c.create("div",{"class":"esriCTGroupSummary"},this._layerDetailsNode[e]),q=c.create("div",{"class":"esriCTGroupTitleParent"},k),this._createExpandCollapseButton(q,p,e,r),
c.create("div",{"class":"esriCTGroupTitle",innerHTML:r},q),this._createEditEquationButton(q,m,r),this._createAssetDetailsTable(k,p,t,m),this.itemList.show(d),m=!0)}m?(n.add(this.noAssetDetails,"esriCTHidden"),g.set(this.noAssetDetails,"tabindex","-1"),this.emit("onAssetDeleted",!1)):(n.remove(this.noAssetDetails,"esriCTHidden"),g.set(this.noAssetDetails,"tabindex","0"),this.emit("onAssetDeleted",!0));setTimeout(h.hitch(this,function(){b&&this.setFirstAndLastNode()}),500)},_openPopupDialog:function(a,
b){"keydown"===b.type?x.open({popup:a,around:b.currentTarget}):x.open({popup:a,x:b.pageX,y:b.pageY});this._support508ToPopupDialog()},_closePopupDialog:function(){var a=l(".esriCTRowSelected",this.assetDetailsNode);x.close(this.assetDetailsDialog);a&&0<a.length&&(r.focus(a[0]),a.removeClass("esriCTRowSelected"))},_initCostEquationEditor:function(){this._costEquationEditor||(this._costEquationEditor=new K({nls:this.nls,map:this.map,config:this.config,appUtils:this.appUtils,widgetDomNode:this.widgetDomNode},
c.create("div",{},this.costEquationEditorParent)),this.own(f(this._costEquationEditor,"onOkButtonClicked",h.hitch(this,function(a){this.emit("groupCostEquationUpdated",a);n.add(this.costEquationEditorParent,"esriCTHidden");n.remove(this.assetDetailsParent,"esriCTHidden");this.setFirstAndLastNode();this._focusCurrentEquationEditorBtn()}))),this.own(f(this._costEquationEditor,"onCancelButtonClicked",h.hitch(this,function(){n.add(this.costEquationEditorParent,"esriCTHidden");n.remove(this.assetDetailsParent,
"esriCTHidden");this.setFirstAndLastNode();this._focusCurrentEquationEditorBtn()}))),this._costEquationEditor.startup())},isPartOfPopup:function(a){var b;b=this.assetDetailsDialog.domNode;return a===b||C.isDescendant(a,b)},grossCostUpdated:function(a,b,d){b=this.appUtils.roundProjectCostValue(this.config.generalSettings.roundCostType,b);b=this.config.generalSettings.currency+" "+b;g.set(this.grossCost,"innerHTML",b);this._updateAdditionalCostTable(a,d);a=this.grossCostLabel.innerHTML.replace("*",
this.nls.projectOverview.roundingLabel);g.set(this.grossCostLabel,"aria-label",a.replace("*",""))},totalCostUpdated:function(a){a=this.appUtils.roundProjectCostValue(this.config.generalSettings.roundCostType,a);a=this.config.generalSettings.currency+" "+a;g.set(this.totalCost,"innerHTML",a);a=this.totalCostLabel.innerHTML.replace("*",this.nls.projectOverview.roundingLabel);g.set(this.totalCostLabel,"aria-label",a.replace("*",""))},_updateAdditionalCostTable:function(a,b){var d,m;c.empty(this.additionalCostTable);
if(this.config.projectCostSettings&&0<this.config.projectCostSettings.length||0<b.length)for(d=c.create("th"),g.set(d,"role","heading"),d.appendChild(c.create("td",{innerHTML:this.nls.assetDetails.additionalCostLabel})),d.appendChild(c.create("td",{innerHTML:this.nls.assetDetails.additionalCostValue})),d.appendChild(c.create("td",{innerHTML:this.nls.assetDetails.additionalCostNetValue})),this.additionalCostTable.appendChild(d),d=0;d<b.length;d++){var e,h,f;h=c.create("tr",{tabindex:"0"});e=b[d];m=
parseFloat(e.value);switch(e.type){case "+":f=a+=m;break;case "_":f=a-=m;break;case "*":f=a*=m;break;case "%":f=a+=a*m/100}f=this.appUtils.roundProjectCostValue(this.config.generalSettings.roundCostType,f);f=this.config.generalSettings.currency+" "+f;h.appendChild(c.create("td",{innerHTML:e.label}));h.appendChild(c.create("td",{innerHTML:e.value}));h.appendChild(c.create("td",{innerHTML:f,"class":"esriCTAssetItemDetailsNetValue"}));g.set(h,"aria-label",this.nls.assetDetails.additionalCostLabel+" "+
e.label+" "+this.nls.assetDetails.additionalCostValue+" "+e.value+" "+this.nls.assetDetails.additionalCostNetValue+" "+f);this.additionalCostTable.appendChild(h)}},_focusCurrentEquationEditorBtn:function(){var a=l(".esriCTEditEquationBtnClicked",this.domNode);a&&0<a.length&&(r.focus(a[0]),n.remove(this.currentEditEquationBtn,"esriCTEditEquationBtnClicked"))},setFirstAndLastNode:function(a){var b,d,c,e,f,g,k,p;k=0;n.contains(this.noAssetDetails,"esriCTHidden")?(b=l(".esriCTItem",this.assetDetailsNode))&&
0<b.length&&b.forEach(h.hitch(this,function(a){"none"!==a.style.display&&(k||(k=1,w.initFirstFocusNode(this.widgetDomNode,a.children[0]),r.focus(a.children[0])),d=l(".esriCTItemTitle",a)[0],c=l(".esriCTItemContent",a)[0],e=l(".esriCTToggleIcon",a),f=l(".esriCTEditEquationIcon",a),g=l(".esriCTSelectableRow",a),p=l(".esriCTGroupSummaryTotalRow",a),d&&c&&(n.contains(c,"esriCTItemContentActive")?(this.itemList._setTabIndexToNodes(e,"0"),this.itemList._setTabIndexToNodes(f,"0"),this.itemList._setTabIndexToNodes(g,
"0"),this.itemList._setTabIndexToNodes(p,"0")):(this.itemList._setTabIndexToNodes(e,"-1"),this.itemList._setTabIndexToNodes(f,"-1"),this.itemList._setTabIndexToNodes(g,"-1"),this.itemList._setTabIndexToNodes(p,"-1"))))})):(r.focus(this.noAssetDetails),w.initFirstFocusNode(this.widgetDomNode,this.noAssetDetails));w.initLastFocusNode(this.widgetDomNode,this.okButton);a&&!n.contains(this.costEquationEditorParent,"esriCTHidden")&&this._costEquationEditor._add508SupportCostEquationEditor()},_support508ToPopupDialog:function(){var a=
l(".esriCTDialogIcon",this.assetDetailsDialog.domNode);a&&0<a.length&&(w.initFirstFocusNode(a[0]),r.focus(a[0]),w.initLastFocusNode(a[2]))},_TabIndexToAssetDetailsTableRows:function(a,b){var d=l(".esriCTSelectableRow",a.currentTarget.parentNode.parentNode);a=l(".esriCTGroupSummaryTotalRow",a.currentTarget.parentNode.parentNode);d&&0<d.length&&v.forEach(d,h.hitch(this,function(a){g.set(a,"tabindex",b)}));a&&0<a.length&&v.forEach(a,h.hitch(this,function(a){g.set(a,"tabindex",b)}))},_addAriaLableToRows:function(a){for(var b=
a.rows[0].cells[1].innerHTML,d=1;d<a.rows.length;d++){for(var c=this.nls.workBench.objectIdColTitle,e=0;e<a.rows[d].cells.length;e++)0===e&&(c=c+" "+a.rows[d].cells[e].innerHTML),1===e&&(c=c+" "+b+" "+a.rows[d].cells[e].innerHTML),2===e&&(c=c+" "+this.nls.workBench.costColTitle+" "+a.rows[d].cells[e].innerHTML);g.set(a.rows[d],"aria-label",c)}}})});