"use strict";(self.webpackChunkekhool_ui_docs=self.webpackChunkekhool_ui_docs||[]).push([[4682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,b=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(b,l(l({ref:t},s),{},{components:n})):a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Sidebar",sidebar_position:3},l="Sidebar",o={unversionedId:"sidebar",id:"version-1.0/sidebar",title:"Sidebar",description:"Navigation drawers provide access to destinations in your app. Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.",source:"@site/versioned_docs/version-1.0/sidebar.md",sourceDirName:".",slug:"/sidebar",permalink:"/docs/sidebar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/sidebar.md",tags:[],version:"1.0",sidebarPosition:3,frontMatter:{sidebar_label:"Sidebar",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Header",permalink:"/docs/header"},next:{title:"Icon Button",permalink:"/docs/iconbutton"}},p={},d=[{value:"Preview",id:"preview",level:2},{value:"Api",id:"api",level:3},{value:"Usage",id:"usage",level:3},{value:"Props",id:"props",level:3},{value:"Sample data",id:"sample-data",level:3},{value:"Object explanation",id:"object-explanation",level:4}],s={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sidebar"},"Sidebar"),(0,r.kt)("p",null,"Navigation drawers provide access to destinations in your app. Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen."),(0,r.kt)("h2",{id:"preview"},"Preview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sidebar",src:n(4539).Z,width:"385",height:"835"})),(0,r.kt)("h3",{id:"api"},"Api"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"import { Sidebar } from 'ekhool-ui'\n")),(0,r.kt)("p",null,"To use this sidebar, import Sidebar from ekhool-ui"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<Sidebar\n    accountUrl={'ACCOUNT_URL_HERE'}\n    data={SIDEBAR_DATA_HERE}\n    onChange={(val) => console.log(val)}\n    expanded={true}\n    position={'fixed'}\n/>\n")),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accountUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Account session url generated while logging in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"[ ]"),(0,r.kt)("td",{parentName:"tr",align:null},"Data to be rendered in sidebar. Check the sample data ",(0,r.kt)("a",{parentName:"td",href:"/docs/sidebar#sample-data"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expanded"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"if  ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," sidebar menu will be expanded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position"),(0,r.kt)("td",{parentName:"tr",align:null},"'absolute' 'inherit' 'fixed' 'relative' 'sticky'"),(0,r.kt)("td",{parentName:"tr",align:null},"'fixed'"),(0,r.kt)("td",{parentName:"tr",align:null},"Position to be applied to the sidebar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"returns ",(0,r.kt)("inlineCode",{parentName:"td"},"path")," of clicked item")))),(0,r.kt)("h3",{id:"sample-data"},"Sample data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebarData"',title:'"sidebarData"'},"    [\n        {\n            id: 1,\n            icon: 'menu',\n            title: 'Menu',\n            active: true,\n            children: [\n            {\n                id: 1,\n                icon: 'person',\n                title: 'Users',\n                path: '/users',\n                active: false,\n                children: [\n                {\n                    id: 2,\n                    icon: 'people',\n                    title: 'Students',\n                    path: '/students',\n                    active: false,\n                },\n                {\n                    id: 3,\n                    icon: 'manage_accounts',\n                    component: (\n                        <button onClick={() => console.log(\"Button clicked\") } >Account</button>\n                    ),\n                    path: '/admins',\n                    active: false,\n                },\n                ]\n            },\n            {\n                id: 2,\n                icon: 'settings',\n                title: 'Settings',\n                path: '/settings',\n                active: true,\n            },\n            ]\n        },\n    ]\n")),(0,r.kt)("h4",{id:"object-explanation"},"Object explanation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"id")," - unique id for every single objects."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"icon")," - name of icon from ",(0,r.kt)("a",{parentName:"p",href:"https://fonts.google.com/icons?icon.style=Rounded&icon.set=Material+Icons"},"Material-Icons"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"title")," - title to be shown."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"active")," - active tab which will be highlighted."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"path")," - path or route which will be returned while clicking the ListItem."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"children")," - array of items which will be rendered inside the Menu component."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"component")," - any ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element"},"HTML-elements")," to be rendered inside the sidebar."))}c.isMDXComponent=!0},4539:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sidebar-8dbc3ca661e791fb19c1e837abd9c465.svg"}}]);