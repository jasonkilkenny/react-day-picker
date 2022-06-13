"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4535],{2780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(2685),a=r(1244),o=(r(7378),r(5318)),i=["components"],c={},p="Working with the source",s={unversionedId:"development/source",id:"development/source",title:"Working with the source",description:"The DayPicker monorepo works together with Yarn workspaces:",source:"@site/docs/development/source.md",sourceDirName:"development",slug:"/development/source",permalink:"/development/source",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"developmentSidebar",previous:{title:"Contributing",permalink:"/development"},next:{title:"Documenting DayPicker",permalink:"/development/docs"}},l={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"Development scripts",id:"development-scripts",level:2},{value:"Testing",id:"testing",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-the-source"},"Working with the source"),(0,o.kt)("p",null,"The DayPicker monorepo works together with ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/workspaces"},"Yarn workspaces"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./package/react-day-picker"),": this workspace contains the DayPicker source code and the development tools"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./website"),": the ",(0,o.kt)("a",{parentName:"li",href:"http://v2.docusaurus.io"},"Docusaurus")," app for ",(0,o.kt)("a",{parentName:"li",href:"http://react-day-picker-next.netlify.app"},"the documentation website"))),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the monorepo and install the dependencies"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ git clone git@github.com:gpbl/react-day-picker.git\n$ cd react-day-picker\n$ yarn install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/master/react-day-picker.code-workspace"},"react-day-picker.code-workspace")," with vscode for a ready development environment."))),(0,o.kt)("h2",{id:"development-scripts"},"Development scripts"),(0,o.kt)("p",null,"While working with the source code you will find useful these scripts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn workspace react-day-picker typecheck-watch # start the typecheck in watch mode\n$ yarn workspace react-day-picker develop         # start the build in watch mode\n$ yarn workspace website start                    # start the website in watch mode\n$ yarn workspace website typecheck-watch          # start the typecheck in watch mode for website\n")),(0,o.kt)("p",null,"Some These are configured to start when opening the vscode project."),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"In DayPicker we run unit tests and integration tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn workspace react-day-picker test  # run the unit tests\n$ yarn workspace website test           # run the integration tests\n")),(0,o.kt)("p",null,"Run the relative watch script to run the test in watch mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn workspace react-day-picker test-watch  # run the unit tests\n$ yarn workspace website test-watch           # run the integration tests\n")))}m.isMDXComponent=!0},5318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,i(i({ref:t},l),{},{components:r})):n.createElement(k,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);