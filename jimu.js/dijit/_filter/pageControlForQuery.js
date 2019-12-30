// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/_filter/pageControlForQuery.html":'\x3cdiv class\x3d"pageControl pageItem"\x3e\r\n  \x3c!--\r\n  \x3cdiv data-dojo-attach-point\x3d"prevPage" class\x3d"pageBtn pageDisabled pageItem"\x3e\x3c-prevPage\x3c/div\x3e\r\n  \x3cdiv class\x3d"pageItem" data-dojo-attach-point\x3d"currentPage"\x3e1\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"nextPage" class\x3d"pageBtn pageItem"\x3enextPage-\x3e\x3c/div\x3e\r\n  --\x3e\r\n\r\n  \x3c!-- \x3cdiv data-dojo-attach-point\x3d"addNextPage"\x3eLoad more data(Test)\x3c/div\x3e --\x3e\r\n\x3c/div\x3e'}});
define("dojo/Deferred esri/tasks/query dojo/_base/array dojo/_base/lang dojo/_base/declare jimu/Query jimu/LayerStructure dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./pageControlForQuery.html jimu/filterUtils jimu/utils".split(" "),function(h,k,l,e,n,g,p,q,r,t,u,v,m){return n([q,r,t],{templateString:u,layerUrl:null,fieldInfo:null,fieldPopupInfo:null,spatialReference:null,layerDefinition:null,isNumberField:!1,showNullValues:!1,_isUniqueValueCacheFinish:!1,_uniqueValueCache:{},
_uniqueValueCacheForOtherTypes:{},_codedvalueCache:[],cascadeFilterExprs:"1\x3d1",numbericFieldLength:{esriFieldTypeOID:32,esriFieldTypeSmallInteger:16,esriFieldTypeInteger:32,esriFieldTypeSingle:128,esriFieldTypeDouble:1024},pageIndex:1,pageSize:1E3,postCreate:function(){this.inherited(arguments);this.spatialReference=p.getInstance().map.spatialReference;this.reset();this.queryType=g.getQueryType(this.layerDefinition);this.isNumberField?this.fieldLength=this.numbericFieldLength[this.fieldInfo.type]:
(this.filterUtils=new v,this.isLayerHosted=m.isHostedService(this.layerUrl))},reset:function(){this.pageIndex=1;this._isUniqueValueCacheFinish=!1;this._uniqueValueCache={};this._uniqueValueCacheForOtherTypes={};this._codedvalueCache=[]},isKeyQueryLoader:!1,_searchKey:function(a){var c=new h,b=new k,d="";this.isNumberField?d="CAST("+this.fieldInfo.name+" AS CHAR("+this.fieldLength+")) LIKE '%"+a+"%'":(d=this.isLayerHosted&&this.filterUtils.containsNonLatinCharacter(a)?"N":"",d=this.isLayerHosted?this.fieldInfo.name+
" LIKE "+d+"'%"+a.replace(/\'/g,"''")+"%'":"UPPER("+this.fieldInfo.name+") LIKE "+d+"'%"+a.replace(/\'/g,"''").toUpperCase()+"%'");b.where="(("+this.cascadeFilterExprs+") AND ("+d+"))";b.geometry=null;b.outSpatialReference=this.spatialReference;b.outFields=[this.fieldInfo.name];b.returnDistinctValues=!0;b.returnGeometry=!1;b.orderByFields=b.outFields;this.layerLoaderForKey=new g({url:this.layerUrl,query:b,pageSize:this.pageSize});this.isKeyQueryLoader=!0;this._uniqueValueCacheForOtherTypes={};this.queryByPage(!0).then(e.hitch(this,
function(a){c.resolve(a)}),e.hitch(this,function(a){c.reject("reject:"+a)}));return c},_searchKeyLocal:function(a){a=a.toUpperCase();this.isKeyQueryLoader=!1;var c=[],b=this._codedvalueCache,d;if(0<b.length)for(var f=0;f<b.length;f++)d=b[f],d.label&&0<=d.label.toString().toUpperCase().indexOf(a)&&c.push(d);else for(f in b=this._uniqueValueCache,b)for(var e=b[f],g=0;g<e.length;g++){d=e[g];var h=d.label;h&&0<=h.toString().toUpperCase().indexOf(a)&&c.push(d)}return c},queryByPage:function(a){var c=new h;
this.layerLoader&&this.layerLoader.query.where!==this.cascadeFilterExprs&&(this.layerLoader=null,this.isKeyQueryLoader=!1,this.reset());if(!this.layerLoader){var b=new k;b.where=this.cascadeFilterExprs;b.geometry=null;b.outSpatialReference=this.spatialReference;b.outFields=[this.fieldInfo.name];b.returnDistinctValues=!0;b.returnGeometry=!1;b.orderByFields=b.outFields;this.layerLoader=new g({url:this.layerUrl,query:b,pageSize:this.pageSize})}a&&(this.pageIndex=1);a=[];if(this.isKeyQueryLoader){if(this._uniqueValueCacheForOtherTypes[this.pageIndex])return a=
this._resolveValueLabelsFromCache(this._uniqueValueCacheForOtherTypes),c.resolve(a),c;a=this.layerLoaderForKey}else{if(this._uniqueValueCache[this.pageIndex])return a=this._resolveValueLabelsFromCache(this._uniqueValueCache),c.resolve(a),c;a=this.layerLoader}1===this.queryType?a.queryByPage(this.pageIndex).then(e.hitch(this,function(a){if(a){var b=a.features||[];a=b.length;this.showNullValues||(b=this._getNotNullValues(b));b=this._getValueLabelsFromFeatures(b);this.isKeyQueryLoader?(this._uniqueValueCacheForOtherTypes[this.pageIndex-
1]=b,a<this.pageSize&&(this._uniqueValueCacheForOtherTypes[this.pageIndex]=[])):(this._uniqueValueCache[this.pageIndex-1]=b,a<this.pageSize&&(this._uniqueValueCache[this.pageIndex]=[],this._isUniqueValueCacheFinish=!0));0===b.length&&this.pageIndex--;c.resolve(b)}else c.reject("Can't get features from current layer")}),e.hitch(this,function(a){c.reject(a)})):a.getAllFeatures().then(e.hitch(this,function(a){if(a){var b=a.features||[];this.showNullValues||(b=this._getNotNullValues(b));a=0<b.length?
!0:!1;b=this._getDistinctValues(b);b=this._getValueLabelsFromFeatures(b);b=this.isKeyQueryLoader?this._getAndStoreValueLabelsForOtherTypes(b,this._uniqueValueCacheForOtherTypes):this._getAndStoreValueLabelsForOtherTypes(b,this._uniqueValueCache);this._isUniqueValueCacheFinish=!0;c.resolve(a?b:[])}else c.reject("Can't get features from current layer")}),e.hitch(this,function(a){c.reject(a)}));this.pageIndex++;return c},_resolveValueLabelsFromCache:function(a){a=a[this.pageIndex];0!==a.length&&this.pageIndex++;
return a},_getAndStoreValueLabelsForOtherTypes:function(a,c){for(var b=0;b<a.length;b+=this.pageSize)c[parseInt(b/this.pageSize,10)+1]=a.slice(b,b+this.pageSize);for(var d in c)a=parseInt(d,10)+1,c[a]||(c[a]=[]);return c[1]},_getDistinctValues:function(a){var c={},b=[],d;for(d in a){var f=a[d],e=f.attributes[this.fieldInfo.name];c[e]||(c[e]=!0,b.push(f))}return b},_getNotNullValues:function(a){return a=l.filter(a,e.hitch(this,function(a){a=a.attributes[this.fieldInfo.name];return"\x3cNull\x3e"!==
a&&null!==a}))},_getValueLabelsFromFeatures:function(a){var c=this.fieldInfo.name;a=l.map(a,function(a){return a.attributes[c]});a=m._getValues(this.layerDefinition,this.fieldPopupInfo,c,a);"esriFieldTypeDate"===this.fieldInfo.type&&(a=this._getDistinctValueLabelsByFormat(a));return a},_getDistinctValueLabelsByFormat:function(a){var c={},b=[],d;for(d in a){var e=a[d].value;c[e]||(c[e]=!0,b.push(a[d]))}return b}})});