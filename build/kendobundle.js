"dist/kendo-bundle":{
      "includes":[
        'jquery',
        "aurelia-kendoui-bridge",
        "aurelia-kendoui-bridge/common/options-builder.js",
        "aurelia-kendoui-bridge/common/template-compiler.js",
        "aurelia-kendoui-bridge/common/template-gatherer.js",
        "aurelia-kendoui-bridge/common/template.js",
        "aurelia-kendoui-bridge/grid/col.html!text",
        "aurelia-kendoui-bridge/grid/col.js",
        "aurelia-kendoui-bridge/grid/grid.html!text",
        "aurelia-kendoui-bridge/grid/grid.js",
        "aurelia-kendoui-bridge/pdf/pdf.js",
        "css",
        "kendo.autocomplete.min",
        "kendo.binder.min",
        "kendo.color.min",
        "kendo.columnmenu.min",
        "kendo.columnsorter.min",
        "kendo.core.min",
        "kendo.data.min",
        "kendo.data.odata.min",
        "kendo.data.signalr.min",
        "kendo.data.xml.min",
        "kendo.drawing.min",
        "kendo.editable.min",
        "kendo.filtermenu.min",
        "kendo.grid.min",
        "kendo.groupable.min",
        "kendo.menu.min",
        "kendo.mobile.actionsheet.min",
        "kendo.mobile.loader.min",
        "kendo.mobile.pane.min",
        "kendo.mobile.popover.min",
        "kendo.mobile.shim.min",
        "kendo.mobile.view.min",
        "kendo.pager.min",
        "kendo.progressbar.min",
        "kendo.reorderable.min",
        "kendo.resizable.min",
        "kendo.selectable.min",
        "kendo.sortable.min",
        "kendo.validator.min",
        "kendo.view.min",
        "kendo.window.min",
        "kendo-ui/styles/kendo.common.min.css!text",
        "kendo-ui/styles/kendo.material.min.css!text"
      ],
      "excludes":[
        "aurelia-binding/**/*.*",
        "aurelia-dependency-injection/**/*.*",
        "aurelia-loader/**/*.*r",
        "aurelia-metadata/**/*.*",
        "aurelia-pal/**/*.*",
        "aurelia-path/**/*.*",
        "aurelia-task-queue/**/*.*",
        "aurelia-templating/**/*.*",
        "aurelia-templating-resources",
 
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    },
After bundling, in config I can see what the bundle contains:

"kendo-bundle.js": [
     "github:systemjs/plugin-css@0.1.25.js",
     "github:systemjs/plugin-css@0.1.25/css.js",
     "kendo-ui/styles/kendo.common.min.css!github:systemjs/plugin-text@0.0.8.js",
     "kendo-ui/styles/kendo.material.min.css!github:systemjs/plugin-text@0.0.8.js",
     "kendo.autocomplete.min",
     "kendo.binder.min",
     "kendo.calendar.min",
     "kendo.color.min",
     "kendo.columnmenu.min",
     "kendo.columnsorter.min",
     "kendo.combobox.min",
     "kendo.core.min",
     "kendo.data.min",
     "kendo.data.odata.min",
     "kendo.data.signalr.min",
     "kendo.data.xml.min",
     "kendo.datepicker.min",
     "kendo.draganddrop.min",
     "kendo.drawing.min",
     "kendo.dropdownlist.min",
     "kendo.editable.min",
     "kendo.excel.min",
     "kendo.filtercell.min",
     "kendo.filtermenu.min",
     "kendo.fx.min",
     "kendo.grid.min",
     "kendo.groupable.min",
     "kendo.list.min",
     "kendo.menu.min",
     "kendo.mobile.actionsheet.min",
     "kendo.mobile.loader.min",
     "kendo.mobile.pane.min",
     "kendo.mobile.popover.min",
     "kendo.mobile.scroller.min",
     "kendo.mobile.shim.min",
     "kendo.mobile.view.min",
     "kendo.numerictextbox.min",
     "kendo.ooxml.min",
     "kendo.pager.min",
     "kendo.pdf.min",
     "kendo.popup.min",
     "kendo.progressbar.min",
     "kendo.reorderable.min",
     "kendo.resizable.min",
     "kendo.selectable.min",
     "kendo.sortable.min",
     "kendo.userevents.min",
     "kendo.validator.min",
     "kendo.view.min",
     "kendo.window.min",
     "npm:aurelia-kendoui-bridge@0.11.9.js",
     "npm:aurelia-kendoui-bridge@0.11.9/common/bindables.js",
     "npm:aurelia-kendoui-bridge@0.11.9/common/constants.js",
     "npm:aurelia-kendoui-bridge@0.11.9/common/control-properties.js",
     "npm:aurelia-kendoui-bridge@0.11.9/common/decorators.js",
     "npm:aurelia-kendoui-bridge@0.11.9/common/options-builder.js",
     "npm:aurelia-kendoui-bridge@0.11.9/common/template-compiler.js",
     "npm:aurelia-kendoui-bridge@0.11.9/common/template-gatherer.js",
     "npm:aurelia-kendoui-bridge@0.11.9/common/template.js",
     "npm:aurelia-kendoui-bridge@0.11.9/common/util.js",
     "npm:aurelia-kendoui-bridge@0.11.9/common/widget-base.js",
     "npm:aurelia-kendoui-bridge@0.11.9/config-builder.js",
     "npm:aurelia-kendoui-bridge@0.11.9/grid/col.html!github:systemjs/plugin-text@0.0.8.js",
     "npm:aurelia-kendoui-bridge@0.11.9/grid/col.js",
     "npm:aurelia-kendoui-bridge@0.11.9/grid/grid.html!github:systemjs/plugin-text@0.0.8.js",
     "npm:aurelia-kendoui-bridge@0.11.9/grid/grid.js",
     "npm:aurelia-kendoui-bridge@0.11.9/index.js",
     "npm:aurelia-kendoui-bridge@0.11.9/pdf/pdf.js",
     "npm:jquery@2.1.4.js",
     "npm:jquery@2.1.4/dist/jquery.min.js"
   ],
Please, notice that the following files are in the bundle:

"kendo.core.min",
 "kendo.data.min",
 "kendo.data.odata.min",
 "kendo.data.signalr.min",
  "kendo.data.xml.min",

"kendo-ui/styles/kendo.common.min.css!github:systemjs/plugin-text@0.0.8.js",

     "kendo-ui/styles/kendo.material.min.css!github:systemjs/plugin-text@0.0.8.js",

 

In my aurelia view model class I'm importing kendo.data.min in order to being able to instantiate a kendo.data.dataSource instance:

import 'core.data.min'
 
export class MyViewModel{
public activate(){
 this.data = new kendo.data.DataSource({
      data: this.myData,
      page: 1,
      pageSize: 50,
      
    });
}
}
Then in the view, I'm also importing the required css files:

<template>
  <require from="kendo-ui/styles/kendo.common.min.css!"></require>
  <require from="kendo-ui/styles/kendo.material.min.css!"></require>
  <require from="aurelia-kendoui-bridge/grid/grid"></require>
  <require from="aurelia-kendoui-bridge/grid/col"></require>
  <require from="aurelia-kendoui-bridge/common/template"></require>
...
</template>
If i then run the app in my development machine I can see that :

"kendo.core.min.js",
 "kendo.data.min.js",
 "kendo.data.odata.min.js",
 "kendo.data.signalr.min.js",
  "kendo.data.xml.min.js",

"kendo-ui/styles/kendo.common.min.css",

"kendo-ui/styles/kendo.materiak.min.css",

 

all these files are loaded individually when they should be loaded through the bundle (kendo-bundle is correctly loaded and I can see a kendoGrid widget working fine. If I remove the import of kendo.data.min from my view model I can then see that kendo.core.min.js, kendo.data.min.js, kendo.data.odata.min.js, kendo.data.signalr.min.js and kendo.dataxml.min.js files are not loaded (but I can instantiante a kendo.data.dataSource

 

It seems is mapping and paths issue with jspm config, but I'm unable to figure out what's happening

my config,js paths section looks like:

paths: {
   "*": "dist/*",
   "github:*": "jspm_packages/github/*",
   "npm:*": "jspm_packages/npm/*",
   "kendo.*": "vendors/js/kendo.*.js",
   "kendo-ui/*": "vendors/*"
 },
 

and my package.json jspm section looks like:

"jspm": {
    "dependencies": {
      "aurelia-animator-css": "npm:aurelia-animator-css@^1.0.0-rc.1.0.0",
      "aurelia-binding": "npm:aurelia-binding@^1.0.0-rc.1.0.3",
      "aurelia-bootstrapper": "npm:aurelia-bootstrapper@^1.0.0-rc.1.0.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@^1.0.0-rc.1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@^1.0.0-rc.1.0.1",
      "aurelia-framework": "npm:aurelia-framework@^1.0.0-rc.1.0.2",
      "aurelia-history-browser": "npm:aurelia-history-browser@^1.0.0-rc.1.0.0",
      "aurelia-html-import-template-loader": "npm:aurelia-html-import-template-loader@^1.0.0-rc.1.0.0",
      "aurelia-i18n": "npm:aurelia-i18n@^1.0.0-rc.1.0.0",
      "aurelia-kendoui-bridge": "npm:aurelia-kendoui-bridge@^0.11.9",
      "aurelia-loader-default": "npm:aurelia-loader-default@^1.0.0-rc.1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@^1.0.0-rc.1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@^1.0.0-rc.1.0.1",
      "aurelia-path": "npm:aurelia-path@^1.0.0-rc.1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@^1.0.0-rc.1.0.0",
      "aurelia-polymer": "github:roguePanda/aurelia-polymer@1.0.0-beta",
      "aurelia-router": "npm:aurelia-router@^1.0.0-rc.1.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@^1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@^1.0.0-rc.1.0.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@^1.0.0-rc.1.0.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@^1.0.0-rc.1.0.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@^1.0.0-rc.1.0.1",
      "aurelia-validation": "npm:aurelia-validation@0.6.7",
      "bluebird": "npm:bluebird@^3.4.1",
      "css": "github:systemjs/plugin-css@^0.1.25",
      "fetch": "github:github/fetch@^1.0.0",
      "i18next-xhr-backend": "npm:i18next-xhr-backend@^0.6.0",
      "jquery": "npm:jquery@2.1.4",
      "numbro": "npm:numbro@^1.8.1",
      "text": "github:systemjs/plugin-text@^0.0.8"
    },
    "devDependencies": {}
  },
Reply
 
Daní

Daní avatar
305 posts
Member since:
Feb 2008
 
Posted 27 Jul 2016 Link to this post

After some digging I did find a solution:

1) fisrt of all, at config.js modify paths section as follows:

paths: {
   "*": "dist/*",
   "github:*": "jspm_packages/github/*",
   "npm:*": "jspm_packages/npm/*",
   "kendo.*": "vendors/js/kendo.*", // notice I removed .js suffix
   "kendo-ui/*": "vendors/*"
 },
Notice I removed .js suffix per kendo.* entry. The .js suffix was confusing jspm bundle so it mapped kendo.data.min to /*domain*/vendors/js/kendo.data.min but when importing kendo.data.core in view model systemjs is trying to load /*domain*/vendors/js/kendo.data.min.js, so the mapped entry does not match with the required module. By removing the .js suffix in the path entry, jspm bundle then maps kendo.data.min to /*domain*/vendors/js/kendo.data.min.js so when importing the module in es6 the loader loads the module from the bundle

 

Then, when defining the bundle, remove the !text prefix for the css files:

"dist/kendo-bundle":{
      "includes":[
        'jquery',
        "aurelia-kendoui-bridge",
        "aurelia-kendoui-bridge/common/options-builder.js",
        "aurelia-kendoui-bridge/common/template-compiler.js",
        "aurelia-kendoui-bridge/common/template-gatherer.js",
        "aurelia-kendoui-bridge/common/template.js",
        "aurelia-kendoui-bridge/grid/col.html!text",
        "aurelia-kendoui-bridge/grid/col.js",
        "aurelia-kendoui-bridge/grid/grid.html!text",
        "aurelia-kendoui-bridge/grid/grid.js",
        "aurelia-kendoui-bridge/pdf/pdf.js",
        "css",
        "kendo.autocomplete.min",
        "kendo.binder.min",
        "kendo.color.min",
        "kendo.columnmenu.min",
        "kendo.columnsorter.min",
        "kendo.core.min",
        "kendo.data.min",
        "kendo.data.odata.min",
        "kendo.data.signalr.min",
        "kendo.data.xml.min",
        "kendo.drawing.min",
        "kendo.editable.min",
        "kendo.filtermenu.min",
        "kendo.grid.min",
        "kendo.groupable.min",
        "kendo.menu.min",
        "kendo.mobile.actionsheet.min",
        "kendo.mobile.loader.min",
        "kendo.mobile.pane.min",
        "kendo.mobile.popover.min",
        "kendo.mobile.shim.min",
        "kendo.mobile.view.min",
        "kendo.pager.min",
        "kendo.progressbar.min",
        "kendo.reorderable.min",
        "kendo.resizable.min",
        "kendo.selectable.min",
        "kendo.sortable.min",
        "kendo.validator.min",
        "kendo.view.min",
        "kendo.window.min",
        "kendo-ui/styles/kendo.common.min.css!", // text sufix removed
        "kendo-ui/styles/kendo.material.min.css!"// text sufix removed
      ],
      "excludes":[
        "aurelia-binding/**/*.*",
        "aurelia-dependency-injection/**/*.*",
        "aurelia-loader/**/*.*r",
        "aurelia-metadata/**/*.*",
        "aurelia-pal/**/*.*",
        "aurelia-path/**/*.*",
        "aurelia-task-queue/**/*.*",
        "aurelia-templating/**/*.*",
        "aurelia-templating-resources",
 
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    },
