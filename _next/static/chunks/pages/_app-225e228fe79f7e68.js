(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7390)}])},7394:function(e,t,n){"use strict";n.d(t,{zt:function(){return i},_y:function(){return o}});var r=(0,n(7294).createContext)([{},function(){}]),i=r.Provider,o=(r.Consumer,r)},749:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=JSON.parse('{"author":{"name":"Brian Holt","company":"Stripe"},"title":"Complete Intro to Web Dev v3","subtitle":"Learn to write websites with HTML, CSS, and JavaScript","frontendMastersLink":"https://frontendmasters.com/courses/web-development-v3/","social":{"linkedin":"btholt","github":"btholt","twitter":"holtbt"},"description":"Learn to be a web developer from nothing from industry veteran Brian Holt","keywords":["web dev","web developer","css","javascript","html","visual studio code","learn to code"],"productionBaseUrl":"/complete-intro-to-web-dev-v3"}'),i={author:{name:"An Author",company:"An Author's Company"},title:"A Superb Course",subtitle:"That Teaches Nice Things",frontendMastersLink:"",description:"A nice course for nice people.",keywords:["a nice course","for people","to learn","nice things"],social:{linkedin:"btholt",github:"btholt",twitter:"holtbt"},productionBaseUrl:"/"};function o(){return Object.assign({},i,r)}},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(1003),l=n(880),s=n(9246);var u={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),o=a.default.useMemo((function(){var t=i(c.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,h=o.as,p=e.children,v=e.replace,m=e.shallow,g=e.scroll,x=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var b=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,j=i(s.useIntersection({rootMargin:"200px"}),2),w=j[0],y=j[1],k=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);a.default.useEffect((function(){var e=y&&n&&c.isLocalURL(d),t="undefined"!==typeof x?x:r&&r.locale,i=u[d+"%"+h+(t?"%"+t:"")];e&&!i&&f(r,d,h,{locale:t})}),[h,d,y,x,n,r]);var _={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,r,{shallow:o,locale:l,scroll:a}))}(e,r,d,h,v,m,g,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof x?x:r&&r.locale,A=r&&r.isLocaleDomain&&c.getDomainLocale(h,C,r&&r.locales,r&&r.domainLocales);_.href=A||c.addBasePath(c.addLocale(h,C,r&&r.defaultLocale))}return a.default.cloneElement(t,_)};t.default=d},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,u=o.useRef(),f=i(o.useState(!1),2),d=f[0],h=f[1],p=i(o.useState(t?t.current:null),2),v=p[0],m=p[1],g=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),s.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:n}))}),[r,v,n,d]);return o.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&m(t.current)}),[t]),[g,d]};var o=n(7294),a=n(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[]},7390:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),i=n(9008),o=(n(6728),n(3774),n(8754),n(2754),n(8369),n(1195),n(7294)),a=n(4298);function c(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip-github-social",children:(0,r.jsx)("rect",{width:"32",height:"32"})})}),(0,r.jsx)("g",{id:"github-social",clipPath:"url(#clip-github-social)",children:(0,r.jsxs)("g",{id:"Group_272","data-name":"Group 272",transform:"translate(13522.5 -6994)",children:[(0,r.jsx)("path",{id:"Subtraction_33","data-name":"Subtraction 33",d:"M-24967.5,8041a15.9,15.9,0,0,1-11.312-4.688A15.893,15.893,0,0,1-24983.5,8025a15.893,15.893,0,0,1,4.689-11.315A15.894,15.894,0,0,1-24967.5,8009a15.894,15.894,0,0,1,11.313,4.686A15.893,15.893,0,0,1-24951.5,8025a15.893,15.893,0,0,1-4.689,11.313A15.9,15.9,0,0,1-24967.5,8041Zm-3.781-4.571h0v3.918h7.895v-6.665a1.836,1.836,0,0,0-1.2-1.718c5.1-.617,7.467-2.975,7.467-7.424a7.176,7.176,0,0,0-1.637-4.728,6.74,6.74,0,0,0,.275-1.812,4.34,4.34,0,0,0-.52-2.452.574.574,0,0,0-.359-.1c-1.061,0-3.465,1.411-3.936,1.694a16.644,16.644,0,0,0-4.2-.489,16.379,16.379,0,0,0-3.969.445c-.846-.5-2.91-1.649-3.859-1.649a.566.566,0,0,0-.354.095,4.3,4.3,0,0,0-.521,2.452,6.7,6.7,0,0,0,.244,1.718,7.346,7.346,0,0,0-1.6,4.822,7.263,7.263,0,0,0,1.533,4.985c1.193,1.359,3.115,2.165,5.871,2.464a1.826,1.826,0,0,0-1.129,1.693v.5h0l-.006,0a7.121,7.121,0,0,1-2.033.363,2.608,2.608,0,0,1-.965-.158,4.438,4.438,0,0,1-1.836-1.881,2.361,2.361,0,0,0-1.248-1.091,3.472,3.472,0,0,0-1.217-.3.584.584,0,0,0-.545.224.282.282,0,0,0,.027.367,1.875,1.875,0,0,0,.447.307,4.732,4.732,0,0,1,.561.355,10.726,10.726,0,0,1,1.682,2.755c.043.092.078.163.105.217a3.876,3.876,0,0,0,2.42,1.185,6.036,6.036,0,0,0,.607.025c.875,0,1.988-.124,2-.125Z",transform:"translate(11461 -1015)",fill:"var(--footer-icons)"}),(0,r.jsxs)("g",{id:"Ellipse_670","data-name":"Ellipse 670",transform:"translate(-13522.5 6994)",fill:"none",stroke:"var(--icons)",strokeWidth:"1",children:[(0,r.jsx)("circle",{cx:"16",cy:"16",r:"16",stroke:"none"}),(0,r.jsx)("circle",{cx:"16",cy:"16",r:"15.5",fill:"none"})]})]})})]})}function l(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"40",height:"32",viewBox:"0 0 40 32",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip-twitter-social",children:(0,r.jsx)("rect",{width:"40",height:"32"})})}),(0,r.jsx)("g",{id:"twitter-social",clipPath:"url(#clip-twitter-social)",children:(0,r.jsx)("g",{id:"Group_269","data-name":"Group 269",transform:"translate(-230.23 -1140.849)",children:(0,r.jsx)("path",{id:"Path_419","data-name":"Path 419",d:"M266.12,1148.861v1.035a23.092,23.092,0,0,1-1.507,8.1,24.08,24.08,0,0,1-4.475,7.381,22.175,22.175,0,0,1-7.306,5.4,24.129,24.129,0,0,1-10,2.07,23.7,23.7,0,0,1-6.667-.945,22.83,22.83,0,0,1-5.936-2.655q.959.091,1.963.09a16.518,16.518,0,0,0,5.434-.9,17.111,17.111,0,0,0,4.749-2.52,8.275,8.275,0,0,1-4.749-1.643,7.8,7.8,0,0,1-2.877-3.983,8.268,8.268,0,0,0,1.507.135,8.58,8.58,0,0,0,2.146-.27,8.16,8.16,0,0,1-5.685-4.344,8.326,8.326,0,0,1-.89-3.578v-.135a7.775,7.775,0,0,0,3.744,1.035,8.183,8.183,0,0,1-2.671-2.9,7.817,7.817,0,0,1-.982-3.848,7.948,7.948,0,0,1,1.1-4.05,23.53,23.53,0,0,0,16.895,8.46,9.221,9.221,0,0,1-.183-1.845,7.787,7.787,0,0,1,1.1-4.05,8.216,8.216,0,0,1,2.991-2.948,7.991,7.991,0,0,1,4.087-1.1,8.184,8.184,0,0,1,5.982,2.566,16.087,16.087,0,0,0,5.205-1.98,7.784,7.784,0,0,1-1.393,2.588,8.4,8.4,0,0,1-2.215,1.913,16.856,16.856,0,0,0,4.749-1.305A17.032,17.032,0,0,1,266.12,1148.861Z",fill:"var(--footer-icons)"})})})]})}function s(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip-linkedin-social",children:(0,r.jsx)("rect",{width:"32",height:"32"})})}),(0,r.jsx)("g",{id:"linkedin-social",clipPath:"url(#clip-linkedin-social)",children:(0,r.jsx)("g",{id:"Group_270","data-name":"Group 270",transform:"translate(-86.349 -633.073)",children:(0,r.jsx)("path",{id:"Path_375","data-name":"Path 375",d:"M115.789,633.073a2.324,2.324,0,0,1,1.682.676,2.194,2.194,0,0,1,.695,1.627V662.8a2.131,2.131,0,0,1-.695,1.609,2.314,2.314,0,0,1-1.646.659H88.69a2.307,2.307,0,0,1-1.646-.659,2.128,2.128,0,0,1-.695-1.609V635.376a2.19,2.19,0,0,1,.695-1.627,2.322,2.322,0,0,1,1.682-.676h27.063Zm-20.224,9.672a2.561,2.561,0,0,0,0-3.584,2.658,2.658,0,0,0-1.938-.712,2.724,2.724,0,0,0-1.957.712,2.371,2.371,0,0,0-.75,1.792,2.4,2.4,0,0,0,.731,1.792,2.605,2.605,0,0,0,1.9.713h.037A2.7,2.7,0,0,0,95.565,642.745ZM96,645.434H91.213V659.88H96Zm17.3,6.144a7.007,7.007,0,0,0-1.573-4.9,5.68,5.68,0,0,0-6.839-.769,5.663,5.663,0,0,0-1.426,1.573v-2.048H98.674q.036.841,0,7.717v6.728h4.791V651.8a3.592,3.592,0,0,1,.146-1.17,2.913,2.913,0,0,1,.878-1.206,2.429,2.429,0,0,1,1.609-.549,2.108,2.108,0,0,1,1.865.914,4.265,4.265,0,0,1,.549,2.341v7.752H113.3Z",fill:"var(--footer-icons)"})})})]})}function u(e){var t=e.twitter,n=e.linkedin,i=e.github;return(0,r.jsx)("footer",{className:"footer",children:(0,r.jsxs)("ul",{className:"socials",children:[t?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://twitter.com/".concat(t),children:(0,r.jsx)(l,{})})}):null,i?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://github.com/".concat(i),children:(0,r.jsx)(c,{})})}):null,n?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://linkedin.com/in/".concat(n),children:(0,r.jsx)(s,{})})}):null,(0,r.jsx)("li",{className:"social",children:(0,r.jsxs)("div",{className:"terms",children:[(0,r.jsx)("p",{children:"Content Licensed Under CC-BY-NC-4.0"}),(0,r.jsx)("p",{children:"Code Samples and Excercises Licensed Under Apache 2.0"}),(0,r.jsxs)("p",{children:["Site Designed by"," ",(0,r.jsx)("a",{href:"https://www.alexdanielson.com/",children:"Alex Danielson"})]})]})})]})})}var f=n(1664),d=n(7394),h=(0,o.createContext)([{},function(){}]),p=h.Provider,v=(h.Consumer,h);function m(e){var t=(0,o.useContext)(d._y)[0],n=t.section,i=t.title,a=t.icon,c=(0,o.useContext)(v).frontendMastersLink;return(0,r.jsxs)("header",{className:"navbar",children:[(0,r.jsx)("h1",{className:"navbar-brand",children:(0,r.jsx)(f.default,{href:"/",children:e.title})}),(0,r.jsxs)("div",{className:"navbar-info",children:[c?(0,r.jsx)("a",{href:c,className:"cta-btn",children:"Watch on Frontend Masters"}):null,n?(0,r.jsxs)("h2",{children:[n," ",(0,r.jsx)("i",{className:"fas fa-".concat(a)})," ",i]}):null]})]})}var g=n(749);function x(e){var t=e.children,n=(0,g.Z)(),i=(0,o.useState)({});return(0,r.jsx)(p,{value:n,children:(0,r.jsxs)(d.zt,{value:i,children:[(0,r.jsxs)("div",{className:"course-app",children:[(0,r.jsx)(m,{title:n.title}),(0,r.jsx)("div",{className:"content-container",children:(0,r.jsx)("div",{className:"main",children:t})}),(0,r.jsx)(u,{twitter:n.social.twitter,github:n.social.github,linkedin:n.social.linkedin})]}),(0,r.jsx)(a.default,{strategy:"beforeInteractive",src:"/complete-intro-to-web-dev-v3/js/klipse/klipse_plugin.min.js"}),(0,r.jsx)("script",{async:!0,defer:!0,src:"https://a.holt.courses/latest.js","data-hostname":"web-dev-v3.holt.courses"}),(0,r.jsx)("noscript",{children:(0,r.jsx)("img",{src:"https://a.holt.courses/noscript.gif?hostname=web-dev-v3.holt.courses",alt:"",referrerPolicy:"no-referrer-when-downgrade"})})]})})}function b(e){var t=e.children;return(0,r.jsx)(x,{children:t})}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}function y(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(b,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat("/complete-intro-to-web-dev-v3","/images/apple-touch-icon.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat("/complete-intro-to-web-dev-v3","/images/favicon-32x32.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("/complete-intro-to-web-dev-v3","/images/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("/complete-intro-to-web-dev-v3","/images/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat("/complete-intro-to-web-dev-v3","/images/favicon.ico")})]}),(0,r.jsx)(t,w({},n))]})}globalThis.klipse_settings={selector_eval_js:".language-javascript",selector_eval_html:".language-html",codemirror_options_in:{indentUnit:2,lineWrapping:!0,lineNumbers:!0,autoCloseBrackets:!0},codemirror_options_out:{lineWrapping:!0,lineNumbers:!0}}},6728:function(){},3774:function(){},1195:function(){},8369:function(){},2754:function(){},8754:function(){},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},4298:function(e,t,n){e.exports=n(3573)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(880)}));var n=e.O();_N_E=n}]);