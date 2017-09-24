/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(a,g){a.Xa=function(c,b){this.data=c||{};if(!(c instanceof Array)&&"function"!=typeof c&&"function"!=typeof c.subscribe)throw Error(a.ga.Qd._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.ga.Qd._ERR_DATA_INVALID_TYPE_DETAIL);null!=b&&null!=b.idAttribute||a.C.info(a.Xa.Qd._INFO_ARRAY_TABLE_DATASOURCE_IDATTR);a.Xa.N.constructor.call(this,c,b);this.tf=[];this.Na={};if(null!=c&&void 0!==c&&(this.WZ=null,null!=b&&null!=b.idAttribute&&(this.WZ=b.idAttribute),
this.p=c instanceof Array?c:c(),this.Gg=this.p.length,!(c instanceof Array))){var d=this;c.subscribe(function(a){if(d.wga()){var b,c=[],g=[];for(b=0;b<a.length;b++)"deleted"===a[b].status&&c.push(a[b].value);d.remove(c,null);c=[];g=[];for(b=0;b<a.length;b++)"added"===a[b].status&&(c.push(a[b].value),g.push(a[b].index));d.add(c,{at:g})}},null,"arrayChange")}if(null!=b&&("enabled"==b.startFetch||null==b.startFetch)||null==b)this.dI=!0};o_("ArrayTableDataSource",a.Xa,a);a.f.xa(a.Xa,a.ga,"oj.ArrayTableDataSource");
a.Xa.prototype.wn=null;a.f.j("ArrayTableDataSource.prototype.comparator",{wn:a.Xa.prototype.wn});a.Xa.prototype.sortCriteria=null;a.f.j("ArrayTableDataSource.prototype.sortCriteria",{sortCriteria:a.Xa.prototype.sortCriteria});a.Xa.prototype.Init=function(){a.Xa.N.Init.call(this)};a.f.j("ArrayTableDataSource.prototype.Init",{Init:a.Xa.prototype.Init});a.Xa.prototype.add=function(a,b){b=b||{};this.zx();return this.Exa(a,b.at,b)};a.f.j("ArrayTableDataSource.prototype.add",{add:a.Xa.prototype.add});a.Xa.prototype.at=
function(a){this.zx();var b;b=0>a||a>=this.Na.data.length?null:{data:this.Na.data[a],index:a,key:this.wB(this.Na.data[a])};return new Promise(function(a){a(b)})};a.f.j("ArrayTableDataSource.prototype.at",{at:a.Xa.prototype.at});a.Xa.prototype.change=function(c,b){b=b||{};this.zx();var d=b.silent,e,f,g,k,l={data:[],keys:[],indexes:[]};c instanceof Array||(c=[c]);for(e=0;e<c.length;e++)f=c[e],null!=f&&(g=this.wB(f),k=this.fm(g,null),l.data.push(this.vn(f)),l.keys.push(g),l.indexes.push(k.index),this.Na.data[k.index]=
f);!d&&0<l.data.length&&a.ga.N.handleEvent.call(this,a.ga.Y.CHANGE,l);return Promise.resolve(l)};a.f.j("ArrayTableDataSource.prototype.change",{change:a.Xa.prototype.change});a.Xa.prototype.fetch=function(a){a=a||{};return"init"!=a.fetchType||this.dI?this.Bh(a):Promise.resolve()};a.f.j("ArrayTableDataSource.prototype.fetch",{fetch:a.Xa.prototype.fetch});a.Xa.prototype.get=function(a,b){b=b||{};this.zx();return Promise.resolve(this.fm(a,b))};a.f.j("ArrayTableDataSource.prototype.get",{get:a.Xa.prototype.get});
a.Xa.prototype.getCapability=function(){return"full"};a.f.j("ArrayTableDataSource.prototype.getCapability",{getCapability:a.Xa.prototype.getCapability});a.Xa.prototype.remove=function(a,b){b=b||{};this.zx();return this.Hy(a,b)};a.f.j("ArrayTableDataSource.prototype.remove",{remove:a.Xa.prototype.remove});a.Xa.prototype.reset=function(c,b){b=b||{};b.previousRows=this.Na;var d=b.silent;null!=c&&(this.p=c);this.Na={};this.Gg=0;d||a.ga.N.handleEvent.call(this,a.ga.Y.RESET,null);return Promise.resolve()};
a.f.j("ArrayTableDataSource.prototype.reset",{reset:a.Xa.prototype.reset});a.Xa.prototype.sort=function(c){null==c?c=this.sortCriteria:this.sortCriteria=c;this.zx();var b=this;return new Promise(function(d){c=c||{};var e=b.gG();b.Na.data.sort(function(c,d){return a.Xa.Lka(c,d,e,b)});b.FNa=!0;var f={header:c.key,direction:c.direction};a.ga.N.handleEvent.call(b,a.ga.Y.SORT,f);d(f)})};a.f.j("ArrayTableDataSource.prototype.sort",{sort:a.Xa.prototype.sort});a.Xa.prototype.totalSize=function(){return this.Gg};
a.f.j("ArrayTableDataSource.prototype.totalSize",{totalSize:a.Xa.prototype.totalSize});a.Xa.prototype.Exa=function(c,b,d){var e,f;d=d||{};var g=d.silent,k={data:[],keys:[],indexes:[]};c instanceof Array||(c=[c]);null==b||b instanceof Array||(b=[b]);for(d=0;d<c.length;d++)if(f=c[d],null!=f){e=this.wB(f);k.data.push(this.vn(f));k.keys.push(e);if(!0==this.FNa&&0<this.Na.data.length)for(e=0;e<this.Na.data.length;e++)if(0>a.Xa.Lka(f,this.Na.data[e],this.gG(),this)){this.Na.data.splice(e,0,f);k.indexes.push(e);
break}else{if(e==this.Na.data.length-1){this.Na.data.push(f);k.indexes.push(e+1);break}}else null==b?(this.Na.data.push(f),k.indexes.push(this.Na.data.length-1)):(this.Na.data.splice(b[d],0,f),k.indexes.push(b[d]));this.Gg++;this.zH()}!g&&0<k.data.length&&a.ga.N.handleEvent.call(this,a.ga.Y.ADD,k);return Promise.resolve(k)};a.Xa.prototype.zx=function(){this.wga()||(this.data instanceof Array||"function"!=typeof this.data||"function"!=typeof this.data.subscribe||(this.p=this.data()),this.Na=this.DB(this.p),
this.Gg=this.p.length)};a.Xa.prototype.wga=function(){return null==this.Na||null==this.Na.data?!1:!0};a.Xa.prototype.Bh=function(c){c=c||{};this.cI(c);this.zx();var b;try{b=0<c.pageSize?c.pageSize:-1;this.Aa||(this.Aa=0);this.Aa=null==c.startIndex?this.Aa:c.startIndex;var d=a.Xa.qN(this.Na,this.Aa,b),e=[],f=[],g,k,l;for(g=this.Aa;g<=d;g++)k=this.wB(this.Na.data[g]),l=this.vn(this.Na.data[g]),e[g-this.Aa]=l,f[g-this.Aa]=k}catch(m){return this.Ho(c,null,m),Promise.reject(m)}d<this.Aa&&(this.Aa=d+1);
c.pageSize=b;c.startIndex=this.Aa;c.refresh=!0;b={data:e,keys:f,startIndex:this.Aa};this.Ho(c,b,null);return Promise.resolve(b)};a.Xa.prototype.fm=function(a){var b,d,e,f,h=null;for(b=0;b<this.Na.data.length;b++)if(e=this.Na.data[b],void 0!==e)if(f=this.wB(e),g.isArray(f)&&g.isArray(a)){if(f.length==a.length){var k=!0;for(d=0;d<a.length;d++)if(f[d]!=a[d]){k=!1;break}k&&(d=this.vn(e),h={data:d,key:f,index:this.Na.indexes[b]})}}else f==a&&(d=this.vn(e),h={data:d,key:f,index:this.Na.indexes[b]});return h};
a.Xa.prototype.gG=function(){var a=this.comparator;if(null==a){var b=this.sortCriteria.key,d=this.sortCriteria.direction;"ascending"==d?a=function(a){return g.isFunction(a[b])?a[b]():a[b]}:"descending"==d&&(a=function(a,c){var d,k;g.isFunction(a[b])?(d=a[b](),k=c[b]()):(d=a[b],k=c[b]);return d===k?0:d>k?-1:1})}return a};a.Xa.prototype.zH=function(){for(var a=0;a<this.Na.data.length;a++)this.Na.indexes[a]=a};a.Xa.prototype.Hy=function(c,b){var d,e;b=b||{};var f=b.silent,g={data:[],keys:[],indexes:[]};
c instanceof Array||(c=[c]);var k=[];for(d=0;d<c.length;d++)e=c[d],null!=e&&(e=this.wB(e),e=this.fm(e,null),null!=e&&k.push({data:e.data,key:e.key,index:e.index}));k.sort(function(a,b){return a.index-b.index});for(d=0;d<k.length;d++)g.data.push(k[d].data),g.keys.push(k[d].key),g.indexes.push(k[d].index);for(d=g.indexes.length-1;0<=d;d--)this.Na.data.splice(g.indexes[d],1),this.Na.indexes.splice(g.indexes[d],1),this.Gg--,this.zH();!f&&0<g.data.length&&a.ga.N.handleEvent.call(this,a.ga.Y.REMOVE,g);
return Promise.resolve(g)};a.Xa.prototype.cI=function(c){c.silent||a.ga.N.handleEvent.call(this,a.ga.Y.REQUEST,{startIndex:c.startIndex})};a.Xa.prototype.Ho=function(c,b,d){null!=d?a.ga.N.handleEvent.call(this,a.ga.Y.ERROR,d):c.silent||a.ga.N.handleEvent.call(this,a.ga.Y.SYNC,b)};a.Xa.ls=function(a,b,d){if("descending"==d){if(a<b)return 1;if(b<a)return-1}else{if(a>b)return 1;if(b>a)return-1}return 0};a.Xa.qN=function(a,b,d){var e=a.data.length-1;0<d&&(e=b+d-1,e=e>a.data.length-1?a.data.length-1:e);
return e};a.Xa.Gc=function(a,b){return g.isFunction(a[b])?a[b]():a[b]};a.Xa.prototype.DB=function(a){var b=a.length-1,d={},e,f;d.data=[];d.indexes=[];this.qu=null;for(e=0;e<=b;e++){var g={},k=a[e];for(f in k)k.hasOwnProperty(f)&&(g[f]=k[f],0==e&&(null==this.qu&&(this.qu=[]),this.qu.push(f)));d.data[e]=g;d.indexes[e]=e}return d};a.Xa.prototype.wB=function(c){var b,d=this.wY(c);if(g.isArray(d)){var e;b=[];for(e=0;e<d.length;e++)if(d[e]in c)b[e]=a.Xa.Gc(c,d[e]);else throw c=a.ya.Sc(a.Xa.Qd._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW,
[d[e]]),Error(c);}else if(d in c)b=a.Xa.Gc(c,d);else throw c=a.ya.Sc(a.Xa.Qd._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW,[d]),Error(c);return b};a.Xa.prototype.wY=function(a){if(null!=this.WZ)return this.WZ;if(null==this.qu){this.qu=[];for(var b in a)a.hasOwnProperty(b)&&this.qu.push(b)}return this.qu.hasOwnProperty("id")?"id":this.qu};a.Xa.Lka=function(c,b,d,e){var f,h=e.sortCriteria.direction;if(g.isFunction(d)){if(1===d.length){f=d.call(e,c);e=d.call(e,b);c=a.Ua.ud(f)?f.split(","):[f];b=a.Ua.ud(e)?
e.split(","):[e];for(d=0;d<c.length;d++)if(f=a.Xa.ls(c[d],b[d],h),0!==f)return f;return 0}return d.call(e,c,b)}if(a.Ua.ud(d)){var k=d.split(",");for(d=0;d<k.length;d++)if(f=a.Xa.Gc(c,k[d]),e=a.Xa.Gc(b,k[d]),f=a.Xa.ls(f,e,h),0!==f)return f}return 0};a.Xa.prototype.vn=function(c){var b={},d,e=Object.keys(c);for(d=0;d<e.length;d++)a.Xa.iX(b,c,e[d]);return b};a.Xa.iX=function(a,b,d){Object.defineProperty(a,d,{get:function(){return b[d]},set:function(a){b[d]=a},enumerable:!0})};a.Xa.Qd={_INFO_ARRAY_TABLE_DATASOURCE_IDATTR:"idAttribute option has not been specified. Will default to using 'id' if the field exists. If not, will use all the fields.",
_ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW:"Specified idAttribute {0} not in row data. Please ensure all specified idAttribute fields are in the row data or do not specify idAttribute and all fields will be used as id."}});