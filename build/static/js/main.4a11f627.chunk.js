(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t(5),r=t.n(o),c=(t(14),t(6)),i=t(8),s=t(9),l=t(7),u=(t(15),t(3)),j=t(0);function d(){var e=Object(a.useState)(0),n=Object(u.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)(0),c=Object(u.a)(r,2),i=c[0],s=c[1],l=Object(a.useState)(0),d=Object(u.a)(l,2),b=d[0],p=d[1],h=Object(a.useState)("add"),f=Object(u.a)(h,2),O=f[0],v=f[1];function g(e){return""===e?0:e}function x(e,n,t){switch(t){case"add":default:o(parseInt(e)+parseInt(n));break;case"subs":o(parseInt(e)-parseInt(n));break;case"mul":o(parseInt(e)*parseInt(n));break;case"div":o(parseInt(e)/parseInt(n))}}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Mini Calculator"}),Object(j.jsxs)("label",{children:["Number 1",Object(j.jsx)("input",{style:{marginLeft:"10px"},type:"number",onChange:function(e){var n=g(e.target.value);s(n),x(n,b,O)}})]}),Object(j.jsx)("p",{}),Object(j.jsx)("label",{for:"operators",children:"Operator: "}),Object(j.jsxs)("select",{id:"operators",name:"operators",onChange:function(e){var n=g(e.target.value);v(n),x(i,b,n)},children:[Object(j.jsx)("option",{value:"add",children:"+"}),Object(j.jsx)("option",{value:"subs",children:"-"}),Object(j.jsx)("option",{value:"mul",children:"x"}),Object(j.jsx)("option",{value:"div",children:"/"})]}),Object(j.jsx)("p",{}),Object(j.jsxs)("label",{children:["Number 2",Object(j.jsx)("input",{style:{marginLeft:"10px"},type:"number",onChange:function(e){var n=g(e.target.value);p(n),x(i,n,O)}})]}),Object(j.jsxs)("h1",{children:["Result = ",t]})]})}var b=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("h1",{className:"App-title",children:"Submission CICD Pipeline Dicoding"})}),Object(j.jsx)("h1",{children:"Evando"}),Object(j.jsx)(d,{})]})}}]),t}(a.Component),p=b,h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(j.jsx)(p,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");h?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):f(e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.4a11f627.chunk.js.map