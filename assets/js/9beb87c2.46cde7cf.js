"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80],{6367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>v,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var a=n(2685),r=n(1244),l=(n(7378),n(5318)),i=["components"],o=[{value:"v8.0.7",id:"v807",level:3},{value:"v8.0.6",id:"v806",level:3},{value:"v8.0.5",id:"v805",level:3},{value:"v8.0.4",id:"v804",level:3},{value:"v8.0.3",id:"v803",level:3},{value:"v8.0.2",id:"v802",level:3},{value:"v8.0.1",id:"v801",level:3},{value:"v8.0",id:"v80",level:2},{value:"Notable changes",id:"notable-changes",level:3},{value:"Older changelog",id:"older-changelog",level:2}],p={toc:o};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"v807"},"v8.0.7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fixed: missing ",(0,l.kt)("inlineCode",{parentName:"li"},"dropdown_year")," CSS class in ",(0,l.kt)("inlineCode",{parentName:"li"},"YearsDropdown")," by @pwolfert in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker/pull/1466"},"#1466")),(0,l.kt)("li",{parentName:"ul"},"fixed: Maximum update depth exceeded when select the range date by @gpbl in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker/pull/1470"},"#1470"))),(0,l.kt)("h3",{id:"v806"},"v8.0.6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fixed: exclude internal modifiers from the ",(0,l.kt)("inlineCode",{parentName:"li"},"styles")," props (",(0,l.kt)("inlineCode",{parentName:"li"},"modifiersStyles")," should be used instead) by @gpbl in e1449eaa"),(0,l.kt)("li",{parentName:"ul"},"fixed: better typings for the props returned by ",(0,l.kt)("inlineCode",{parentName:"li"},"useInput")," by @gpbl in 3ea6728b")),(0,l.kt)("p",null,"In the rare cases you are using an invalid key to the ",(0,l.kt)("inlineCode",{parentName:"p"},"styles")," prop, you may get type errors when upgrading to this release. Just remove the invalid lines from the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"styles"),", as they weren't working anyway. See issue ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/issues/1464"},"#1464"),"."),(0,l.kt)("h3",{id:"v805"},"v8.0.5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"changed: use ",(0,l.kt)("inlineCode",{parentName:"li"},"aria-disabled")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"disabled")," attribute in buttons (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker/pull/1451"},"#1451"),")"),(0,l.kt)("li",{parentName:"ul"},"fixed: focus navigation breaks with disabled days (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker/pull/1451"},"#1451"),")")),(0,l.kt)("h3",{id:"v804"},"v8.0.4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"changed: add src directory to the package for better source maps")),(0,l.kt)("h3",{id:"v803"},"v8.0.3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fix: ",(0,l.kt)("inlineCode",{parentName:"li"},"toMonth")," prop to include the full month (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker/pull/1429"},"#1429"),")"),(0,l.kt)("li",{parentName:"ul"},"changed: better date-fns import should improve tree-shaking (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker/pull/1436"},"#1436"),")"),(0,l.kt)("li",{parentName:"ul"},"changed: removed ",(0,l.kt)("inlineCode",{parentName:"li"},"browser")," entry in ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker/pull/1436"},"#1436"),")")),(0,l.kt)("h3",{id:"v802"},"v8.0.2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"new: added ",(0,l.kt)("inlineCode",{parentName:"li"},"weekStartsOn")," prop (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker/pull/1422"},"#1422"),")"),(0,l.kt)("li",{parentName:"ul"},"new: split the ",(0,l.kt)("inlineCode",{parentName:"li"},"Caption")," components into ",(0,l.kt)("inlineCode",{parentName:"li"},"CaptionDropdowns")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"CaptionNavigation")," components. This change should make easier to customize the caption. (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker/pull/1426"},"#1426"),")")),(0,l.kt)("h3",{id:"v801"},"v8.0.1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"changed: added React 18 to the peer dependencies")),(0,l.kt)("h2",{id:"v80"},"v8.0"),(0,l.kt)("p",null,"This version introduces breaking changes and it is mostly incompatible with v7. See the ",(0,l.kt)("a",{parentName:"p",href:"https://react-day-picker.js.org"},"redesigned website")," for more details."),(0,l.kt)("h3",{id:"notable-changes"},"Notable changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"native TypeScript support"),(0,l.kt)("li",{parentName:"ul"},"selection modes: single, multiple, range"),(0,l.kt)("li",{parentName:"ul"},"added ",(0,l.kt)("a",{parentName:"li",href:"http://date-fns.org"},"date-fns")," library as peer dependecy"),(0,l.kt)("li",{parentName:"ul"},"replaced ",(0,l.kt)("inlineCode",{parentName:"li"},"DayPickerInput")," component with ",(0,l.kt)("inlineCode",{parentName:"li"},"useInput")," hook"),(0,l.kt)("li",{parentName:"ul"},"improved ARIA support")),(0,l.kt)("p",null,"See also: \u27a1\ufe0f ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://react-day-picker.js.org/guides/upgrading"},"Upgrading from v7")),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"older-changelog"},"Older changelog"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/v7/CHANGELOG.md"},"/v7/CHANGELOG.md")," for the changelog of versions before 8."))}d.isMDXComponent=!0;var u=["components"],c={title:"Changelog",hide_title:!0,pagination_next:null,pagination_prev:null},s=void 0,m={unversionedId:"changelog",id:"changelog",title:"Changelog",description:"",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"Changelog",hide_title:!0,pagination_next:null,pagination_prev:null},sidebar:"developmentSidebar"},h={},g=o,k={toc:g};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(d,{mdxType:"ChangeLog"}))}v.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,h=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);