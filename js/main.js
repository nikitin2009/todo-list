!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){const e=document.getElementById("projectsList");return{renderProjects:function(t){e.innerHTML="",t.forEach(t=>{const n=document.createElement("a"),r=document.createElement("span");r.classList.add("badge","badge-danger","badge-pill"),r.innerHTML="&times;",n.href="#",n.innerText=t.title,n.append(r),n.classList.add("list-group-item","list-group-item-action","list-group-item-secondary","d-flex","justify-content-between","align-items-center"),e.append(n)}),e.children[0].classList.add("active")}}}();class o{constructor(e){this.title=e,this.tasks=[]}}(function(){const e={projects:[],currentProject:null};return{init:function(){e.projects=[new o("Default project")],e.currentProject=e.projects.first,r.renderProjects(e.projects)}}})().init()}]);