(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/Cf1":function(e,t,n){},"8s5r":function(e,t,n){},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function l(e){return function(t){return r.createElement(s,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,l=e.title,s=c(e,["attr","title"]);return r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:o({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Bl7J"),o=n("vrFN"),c=n("ma3e"),l=(n("c/pC"),n("9Hrx")),s=(n("8s5r"),function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:"Card"},a.a.createElement(c.b,null),a.a.createElement("h3",null," ",this.props.header),a.a.createElement("p",null," ",this.props.text," "))},t}(a.a.Component)),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:"Card"},a.a.createElement(c.a,null),a.a.createElement("h3",null," ",this.props.header),a.a.createElement("p",null," ",this.props.text," "))},t}(a.a.Component),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:"Card",id:this.props.thisId},a.a.createElement(c.e,null),a.a.createElement("h3",null," ",this.props.header),a.a.createElement("p",null," ",this.props.text," "))},t}(a.a.Component),d=function(){var e=Object(r.useState)({itemOne:!1,itemTwo:!1}),t=e[0],n=e[1],i=Object(r.useRef)(null),o=Object(r.useRef)(null);return Object(r.useLayoutEffect)((function(){var e=function(e){return e.getBoundingClientRect().top},t=e(i.current),r=e(o.current),a=function(){var e=window.scrollY;n(t<e?function(e){return Object.assign({},e,{itemOne:!0})}:function(e){return Object.assign({},e,{itemOne:!1})}),n(r<e-300?function(e){return Object.assign({},e,{itemTwo:!0})}:function(e){return Object.assign({},e,{itemTwo:!1})})};return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}})),a.a.createElement("div",{id:"Our-services"},a.a.createElement("section",null,a.a.createElement("div",{className:t.itemOne?"Description-container":"hide Description-container",id:"Learn more",ref:i},a.a.createElement("div",{className:"Left-Description-container"}," "),a.a.createElement("div",{className:"Right-Description-container"},a.a.createElement("ul",null,a.a.createElement("h1",null," Our Services "),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  "))))),a.a.createElement("div",{className:t.itemTwo?"Card-group":"hide Card-group",id:"Learn more",ref:o},a.a.createElement(s,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",header:"Learn Coding"}),a.a.createElement(u,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",header:"Take Our Courses"}),a.a.createElement(m,{thisId:"LastCard",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",header:"Join the Community"})))};n("/Cf1"),t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Home"}),a.a.createElement("div",{className:"Main"},a.a.createElement("div",{className:"Hero"},a.a.createElement("h2",null,"Learn programmming at"),a.a.createElement("h1",null," The Coding ",a.a.createElement("span",{id:"coding"}," Saturn")),a.a.createElement("p",null,"Take Youtube lession and join our Discord server to learn programming languages such as C++, C# and Python"),a.a.createElement("a",{href:"#Our-services"}," Learn More ")),a.a.createElement("div",null,a.a.createElement(d,null),a.a.createElement("div",{className:"Main-Footer"},a.a.createElement("h3",null," What to get Started? "),a.a.createElement("ul",{className:"button-group"},a.a.createElement("a",{href:""}," Take Courses on Youtube"),a.a.createElement("a",{href:""}," Join our Discord ")),a.a.createElement("ul",{className:"contact-links",id:"Get started"},a.a.createElement("a",{href:""}," ",a.a.createElement(c.d,{id:"instagram-icon"})," "),a.a.createElement("a",{href:""}," ",a.a.createElement(c.c,{id:"discord-icon"})," "))))))}},"c/pC":function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-3fc25396ea23a81beedb.js.map