// all sample files should not be minified or bundled because it messes up
// how they are shown in the browser, and thus how they are shown in the demo
// but we still want to bundle files that are not "sample" files
var nonSampleBundle = [
  "[shared/*.js]",
  "[*.js]",
  "*.html!text",
  "shared/*.html!text",
  "[installation/*.js]",
  "installation/*.html!text",
  "[about/*.js]",
  "about/*.html!text",
  "[theme-selector/*.js]",
  "theme-selector/*.html!text",
  "[kendo/*.js]",
  "kendo/*.html!text",
  "[kendomodal/*.js]",
  "kendomodal/*.html!text",
];
// var kendoBundle = [
//   './kendo-sdk/js/jquery.min',
//    './kendo-sdk/js/kendo.all.min',
//   "[aurelia-kendoui-bridge]",
//   "[aurelia-kendoui-bridge/**/*.js]",
//   "aurelia-kendoui-bridge/**/*.html!text",
//   "aurelia-after-attached-plugin",
//   "aurelia-after-attached-plugin/**/*",
//   "kendo-sdk/styles/kendo.common.min.css!", // text sufix removed
//   "./kendo-sdk/styles/kendo.material.min.css!"// text sufix removed
// ];
// var kendoBundle =[  
// "includes": ["kendo-ui/js/*.min.js"],
//    "excludes": [
//      "[kendo-ui/js/angular.min.js]",
//      "[kendo-ui/js/jquery.min.js]",
//      "[kendo-ui/js/kendo.angular.min.js]",
//      "[kendo-ui/js/kendo.angular2.min.js]",
//      "[kendo-ui/js/kendo.spreadsheet.min.js]",
//      "[kendo-ui/js/kendo.all.min.js]",
//      "[kendo-ui/js/kendo.web.min.js]",
//      "[kendo-ui/js/kendo.dataviz.min.js]",
//      "[kendo-ui/js/kendo.dataviz.mobile.min.js]",
//      "[kendo-ui/js/kendo.mobile.min.js]"
//    ]
// ],


var aureliaBundle = [
  "aurelia-framework",
  "aurelia-bootstrapper",
  "aurelia-router",
  "aurelia-templating-binding",
  "aurelia-templating-resources",
  "aurelia-templating-router",
  "aurelia-loader-default",
  "aurelia-history-browser",
  "aurelia-logging-console",
  "aurelia-http-client",
  "aurelia-validation"
];

var pluginsBundle = [
  "[aurelia-materialize-bridge]",
  "[aurelia-materialize-bridge/**/*.js]",
  "aurelia-materialize-bridge/**/*.css!text",
  "aurelia-materialize-bridge/**/*.html!text",
  "[aurelia-kendoui-bridge]",
  "[aurelia-kendoui-bridge/**/*.js]",
  "aurelia-kendoui-bridge/**/*.html!text",
  "showdown",
  "prism",
  // "jquery",
  "nprogress",
  "css",
  "text",
  "json",
  "core-js/library/**/*",
  "babel",
  'showdown-prettify'
  //  "bootstrap",
  // "bootstrap/css/bootstrap.css!text"
];
var kendoBundle = [
  '[kendo-sdk/js/*.min.js]',

  "aurelia-after-attached-plugin",
  "aurelia-after-attached-plugin/**/*",
 // "[kendo-sdk/styles/kendo.common.min.css!]", // text sufix removed
 // "[./kendo-sdk/styles/kendo.material.min.css!]"// text sufix removed
];
// concatenate all bundle definitions
var bundle = nonSampleBundle.concat(aureliaBundle, pluginsBundle,kendoBundle);


module.exports = {
  "bundles": {
    "src/app-build": {
      "includes": bundle,
      "options": {
        "inject": true,
        "minify": true,
        "rev": true
      }
    },
    "src/materialize": {
      "includes": ["materialize"],
      "options": {
        "inject": true,
        "minify": true,
        "rev": true
      }
    }
  }
}
