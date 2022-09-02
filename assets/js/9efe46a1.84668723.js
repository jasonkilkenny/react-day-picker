"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7797],{942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(2685),a=n(1244),i=(n(7378),n(5318)),o=["components"],l={},s="Localization",c={unversionedId:"basics/localization",id:"basics/localization",title:"Localization",description:"Changing locale",source:"@site/docs/basics/localization.md",sourceDirName:"basics",slug:"/basics/localization",permalink:"/basics/localization",draft:!1,editUrl:"https://github.com/gpbl/react-day-picker/edit/master/website/docs/basics/localization.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Styling DayPicker",permalink:"/basics/styling"},next:{title:"Keyboard Navigation",permalink:"/basics/keyboard"}},p={},d=[{value:"Changing locale",id:"changing-locale",level:2},{value:"Overriding the first day of the week",id:"overriding-the-first-day-of-the-week",level:3},{value:"Switching to right-to-left direction",id:"switching-to-right-to-left-direction",level:2},{value:"Adopting other numbering systems",id:"adopting-other-numbering-systems",level:2},{value:"ARIA labels translations",id:"aria-labels-translations",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"localization"},"Localization"),(0,i.kt)("h2",{id:"changing-locale"},"Changing locale"),(0,i.kt)("p",null,"To change the locale, pass to the ",(0,i.kt)("inlineCode",{parentName:"p"},"locale")," prop a date-fns ",(0,i.kt)("a",{parentName:"p",href:"http://date-fns.org/docs/Locale"},"Locale object"),"."),(0,i.kt)("p",null,"For example, to localize the calendar in Spanish, import the locale object from date-fns and pass it to the component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"spanish\n")),(0,i.kt)("h3",{id:"overriding-the-first-day-of-the-week"},"Overriding the first day of the week"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"weekStartsOn")," prop to change the first day of the week:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"spanish-week-starts-on\n")),(0,i.kt)("h2",{id:"switching-to-right-to-left-direction"},"Switching to right-to-left direction"),(0,i.kt)("p",null,"To add right-to-left text direction, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"dir")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"rtl"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"rtl\n")),(0,i.kt)("h2",{id:"adopting-other-numbering-systems"},"Adopting other numbering systems"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"/guides/formatters"},"formatters")," to change the numbering system used in the calendar."),(0,i.kt)("p",null,"For example, to switch to hindu-arabic using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"},"toLocaleString"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"numbering-system\n")),(0,i.kt)("h2",{id:"aria-labels-translations"},"ARIA labels translations"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/daypickerdefaultprops#labels"},"labels prop")," to translate the labels used for ARIA."))}m.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);