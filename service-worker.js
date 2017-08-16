"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/me/index.html","8c1888790f80354e92263e90d8c67c2b"],["/me/static/css/main.387b728f.css","4ac088f7e2b95238ba2d4969bc9fc31b"],["/me/static/js/main.1e454694.js","f6e9778c3e1f5b1ef315c57dd5d1bdad"],["/me/static/media/calculator.8b063bf5.png","8b063bf526368b603e5cf87139558c10"],["/me/static/media/codepen.f439fb6f.svg","f439fb6fe4bf774b58d9b3dffa83eade"],["/me/static/media/github.bc534cd9.svg","bc534cd9deaf2bb81d39bf49e36d35c6"],["/me/static/media/jackhou.77d50d12.png","77d50d1278acb8a26a45271c086caab5"],["/me/static/media/linkedin.f05e7996.svg","f05e7996f7f0e31fe2c60eb6b9f1cb73"],["/me/static/media/markdown.e3168fbf.png","e3168fbfb8925ab3acc6c98f614244b4"],["/me/static/media/navbarHori.8464d9b4.png","8464d9b47634bbdeb3e61d80fde0d4be"],["/me/static/media/navbarVer.68d99649.png","68d99649003a43598050cadc8cc03a53"],["/me/static/media/pin.5b2adfc5.svg","5b2adfc55ab9a8c29c2c133f0cd0544a"],["/me/static/media/quotescreenshot.c0550004.png","c05500044be942b2c6c0a98cd0ba8578"],["/me/static/media/recipebox.c2454743.png","c245474335c1c7eb0427e6256301c03f"],["/me/static/media/resume.cb012c94.pdf","cb012c94e0974e11edfc95af4afb52e5"],["/me/static/media/simon.b61adb22.png","b61adb22f633148b93ba3b47624e0f55"],["/me/static/media/tictactoe.eefa5e68.png","eefa5e6806e192dcdc9ba83298a84b60"],["/me/static/media/timer.b043df49.png","b043df49899c527b05f95b4cc00ef37b"],["/me/static/media/twitter.e91a3939.svg","e91a39395f268d7bae39adb83e8e81e2"],["/me/static/media/weatherapp.e6d23a77.png","e6d23a775d6dd49b46aaf0faeb8854ba"],["/me/static/media/wikiViewer.6cd7d3b8.png","6cd7d3b8f88abd705b5e4c0bd87452e5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/me/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});