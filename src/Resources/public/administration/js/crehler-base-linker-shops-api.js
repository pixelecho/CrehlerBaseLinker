!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/bundles/administration/",t(t.s="NOl4")}({"6ZVK":function(e){e.exports=JSON.parse('{"crehler-baselinker-shops-api":{"config":{"credentialCheckButton":"Test API credentials"}}}')},A7Ly:function(e,n){e.exports='<a href="https://panel-d.baselinker.com/list_integrations.php" target="_blank" rel="noreferrer">\n    {{ $tc(\'crehler-baselinker-shops-api.config.credentialCheckButton\') }}\n</a>\n'},NOl4:function(e,n,t){"use strict";t.r(n);var r=t("A7Ly"),o=t.n(r);Shopware.Component.register("cr-baselinker",{template:o.a});var i=t("dJ0u"),a=t("6ZVK"),l=t("nmpF");Shopware.Locale.extend("de-DE",i),Shopware.Locale.extend("en-GB",a),Shopware.Locale.extend("pl-PL",l)},dJ0u:function(e){e.exports=JSON.parse('{"crehler-baselinker-shops-api":{"config":{"credentialCheckButton":"API-Anmeldeinformationen testen"}}}')},nmpF:function(e){e.exports=JSON.parse('{"crehler-baselinker-shops-api":{"config":{"credentialCheckButton":"Testuj dane uwierzytelniające API"}}}')}});