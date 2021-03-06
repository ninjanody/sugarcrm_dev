/*
 Copyright (c) 2010, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.com/yui/license.html
 version: 3.3.0
 build: 3167
 */
YUI.add('datasource-arrayschema',function(Y){var DataSourceArraySchema=function(){DataSourceArraySchema.superclass.constructor.apply(this,arguments);};Y.mix(DataSourceArraySchema,{NS:"schema",NAME:"dataSourceArraySchema",ATTRS:{schema:{}}});Y.extend(DataSourceArraySchema,Y.Plugin.Base,{initializer:function(config){this.doBefore("_defDataFn",this._beforeDefDataFn);},_beforeDefDataFn:function(e){var data=(Y.DataSource.IO&&(this.get("host")instanceof Y.DataSource.IO)&&Y.Lang.isString(e.data.responseText))?e.data.responseText:e.data,response=Y.DataSchema.Array.apply.call(this,this.get("schema"),data);if(!response){response={meta:{},results:data};}
this.get("host").fire("response",Y.mix({response:response},e));return new Y.Do.Halt("DataSourceArraySchema plugin halted _defDataFn");}});Y.namespace('Plugin').DataSourceArraySchema=DataSourceArraySchema;},'3.3.0',{requires:['datasource-local','plugin','dataschema-array']});
