/**
 * @license RequireJS text 2.0.12 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

define(["module"],function(e){var n,t,r,i,o,a=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],s=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,l=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,u="undefined"!=typeof location&&location.href,c=u&&location.protocol&&location.protocol.replace(/\:/,""),f=u&&location.hostname,p=u&&(location.port||void 0),d={},m=e.config&&e.config()||{};n={version:"2.0.12",strip:function(e){if(e){e=e.replace(s,"");var n=e.match(l);n&&(e=n[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:m.createXhr||function(){var e,n,t;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(n=0;3>n;n+=1){t=a[n];try{e=new ActiveXObject(t)}catch(r){}if(e){a=[t];break}}return e},parseName:function(e){var n,t,r,i=!1,o=e.indexOf("."),a=0===e.indexOf("./")||0===e.indexOf("../");if(-1!==o&&(!a||o>1)){n=e.substring(0,o);t=e.substring(o+1,e.length)}else n=e;r=t||n;o=r.indexOf("!");if(-1!==o){i="strip"===r.substring(o+1);r=r.substring(0,o);t?t=r:n=r}return{moduleName:n,ext:t,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,r,i){var o,a,s,l=n.xdRegExp.exec(e);if(!l)return!0;o=l[2];a=l[3];a=a.split(":");s=a[1];a=a[0];return!(o&&o!==t||a&&a.toLowerCase()!==r.toLowerCase()||(s||a)&&s!==i)},finishLoad:function(e,t,r,i){r=t?n.strip(r):r;m.isBuild&&(d[e]=r);i(r)},load:function(e,t,r,i){if(i&&i.isBuild&&!i.inlineText)r();else{m.isBuild=i&&i.isBuild;var o=n.parseName(e),a=o.moduleName+(o.ext?"."+o.ext:""),s=t.toUrl(a),l=m.useXhr||n.useXhr;0!==s.indexOf("empty:")?!u||l(s,c,f,p)?n.get(s,function(t){n.finishLoad(e,o.strip,t,r)},function(e){r.error&&r.error(e)}):t([a],function(e){n.finishLoad(o.moduleName+"."+o.ext,o.strip,e,r)}):r()}},write:function(e,t,r){if(d.hasOwnProperty(t)){var i=n.jsEscape(d[t]);r.asModule(e+"!"+t,"define(function () { return '"+i+"';});\n")}},writeFile:function(e,t,r,i,o){var a=n.parseName(t),s=a.ext?"."+a.ext:"",l=a.moduleName+s,u=r.toUrl(a.moduleName+s)+".js";n.load(l,r,function(){var t=function(e){return i(u,e)};t.asModule=function(e,n){return i.asModule(e,u,n)};n.write(e,l,t,o)},o)}};if("node"===m.env||!m.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]){t=require.nodeRequire("fs");n.get=function(e,n,r){try{var i=t.readFileSync(e,"utf8");0===i.indexOf("﻿")&&(i=i.substring(1));n(i)}catch(o){r&&r(o)}}}else if("xhr"===m.env||!m.env&&n.createXhr())n.get=function(e,t,r,i){var o,a=n.createXhr();a.open("GET",e,!0);if(i)for(o in i)i.hasOwnProperty(o)&&a.setRequestHeader(o.toLowerCase(),i[o]);m.onXhr&&m.onXhr(a,e);a.onreadystatechange=function(){var n,i;if(4===a.readyState){n=a.status||0;if(n>399&&600>n){i=new Error(e+" HTTP status: "+n);i.xhr=a;r&&r(i)}else t(a.responseText);m.onXhrComplete&&m.onXhrComplete(a,e)}};a.send(null)};else if("rhino"===m.env||!m.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java)n.get=function(e,n){var t,r,i="utf-8",o=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),i)),l="";try{t=new java.lang.StringBuffer;r=s.readLine();r&&r.length()&&65279===r.charAt(0)&&(r=r.substring(1));null!==r&&t.append(r);for(;null!==(r=s.readLine());){t.append(a);t.append(r)}l=String(t.toString())}finally{s.close()}n(l)};else if("xpconnect"===m.env||!m.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces){r=Components.classes;i=Components.interfaces;Components.utils["import"]("resource://gre/modules/FileUtils.jsm");o="@mozilla.org/windows-registry-key;1"in r;n.get=function(e,n){var t,a,s,l={};o&&(e=e.replace(/\//g,"\\"));s=new FileUtils.File(e);try{t=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream);t.init(s,1,0,!1);a=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream);a.init(t,"utf-8",t.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);a.readString(t.available(),l);a.close();t.close();n(l.value)}catch(u){throw new Error((s&&s.path||"")+": "+u)}}}return n});