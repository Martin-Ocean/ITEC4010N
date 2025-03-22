"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[104],{325:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(1317);const o=(e,t,r,n=[])=>{let o=e;t.forEach(((e,s)=>{s===t.length-1?Array.isArray(o)?o[Number(e)]=r:o&&"object"==typeof o&&(o[e]=r):o&&"object"==typeof o&&(o[e]||(o[e]=n.includes(e)?[]:{}),o=o[e])}))};function s(e,t){const{prefix:r,shouldSkipGeneratingVar:n}=t||{},s={},i={},a={};var c,u;return c=(e,t,c)=>{if(!("string"!=typeof t&&"number"!=typeof t||n&&n(e,t))){const n=`--${r?`${r}-`:""}${e.join("-")}`,u=((e,t)=>"number"==typeof t?["lineHeight","fontWeight","opacity","zIndex"].some((t=>e.includes(t)))||e[e.length-1].toLowerCase().includes("opacity")?t:`${t}px`:t)(e,t);Object.assign(s,{[n]:u}),o(i,e,`var(${n})`,c),o(a,e,`var(${n}, ${u})`,c)}},u=e=>"vars"===e[0],function e(t,r=[],n=[]){Object.entries(t).forEach((([t,o])=>{(!u||u&&!u([...r,t]))&&null!=o&&("object"==typeof o&&Object.keys(o).length>0?e(o,[...r,t],Array.isArray(o)?[...n,t]:n):c([...r,t],o,n))}))}(e),{css:s,vars:i,varsWithDefaults:a}}const i=function(e,t={}){const{getSelector:r=b,disableCssColorScheme:o,colorSchemeSelector:i}=t,{colorSchemes:a={},components:c,defaultColorScheme:u="light",...l}=e,{vars:p,css:f,varsWithDefaults:d}=s(l,t);let m=d;const y={},{[u]:h,...g}=a;if(Object.entries(g||{}).forEach((([e,r])=>{const{vars:o,css:i,varsWithDefaults:a}=s(r,t);m=(0,n.A)(m,a),y[e]={css:i,vars:o}})),h){const{css:e,vars:r,varsWithDefaults:o}=s(h,t);m=(0,n.A)(m,o),y[u]={css:e,vars:r}}function b(t,r){let n=i;if("class"===i&&(n=".%s"),"data"===i&&(n="[data-%s]"),i?.startsWith("data-")&&!i.includes("%s")&&(n=`[${i}="%s"]`),t){if("media"===n){if(e.defaultColorScheme===t)return":root";const n=a[t]?.palette?.mode||t;return{[`@media (prefers-color-scheme: ${n})`]:{":root":r}}}if(n)return e.defaultColorScheme===t?`:root, ${n.replace("%s",String(t))}`:n.replace("%s",String(t))}return":root"}return{vars:m,generateThemeVars:()=>{let e={...p};return Object.entries(y).forEach((([,{vars:t}])=>{e=(0,n.A)(e,t)})),e},generateStyleSheets:()=>{const t=[],n=e.defaultColorScheme||"light";function s(e,r){Object.keys(r).length&&t.push("string"==typeof e?{[e]:{...r}}:e)}s(r(void 0,{...f}),f);const{[n]:i,...c}=y;if(i){const{css:e}=i,t=a[n]?.palette?.mode,c=!o&&t?{colorScheme:t,...e}:{...e};s(r(n,{...c}),c)}return Object.entries(c).forEach((([e,{css:t}])=>{const n=a[e]?.palette?.mode,i=!o&&n?{colorScheme:n,...t}:{...t};s(r(e,{...i}),i)})),t}}}},999:(e,t,r)=>{r.d(t,{A:()=>n});const n=function(e,t,r){return void 0===e||"string"==typeof e?t:{...t,ownerState:{...t.ownerState,...r}}}},1317:(e,t,r)=>{r.d(t,{A:()=>a,Q:()=>s});var n=r(6540),o=r(4405);function s(e){if("object"!=typeof e||null===e)return!1;const t=Object.getPrototypeOf(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)}function i(e){if(n.isValidElement(e)||(0,o.Hy)(e)||!s(e))return e;const t={};return Object.keys(e).forEach((r=>{t[r]=i(e[r])})),t}function a(e,t,r={clone:!0}){const c=r.clone?{...e}:e;return s(e)&&s(t)&&Object.keys(t).forEach((u=>{n.isValidElement(t[u])||(0,o.Hy)(t[u])?c[u]=t[u]:s(t[u])&&Object.prototype.hasOwnProperty.call(e,u)&&s(e[u])?c[u]=a(e[u],t[u],r):r.clone?c[u]=s(t[u])?i(t[u]):t[u]:c[u]=t[u]})),c}},1523:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(6540),o=r(7365);function s(...e){return n.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{(0,o.A)(e,t)}))}),e)}},1529:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(6540);const o="undefined"!=typeof window?n.useLayoutEffect:n.useEffect},1547:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(6540),o=r(1529);const s=function(e){const t=n.useRef(e);return(0,o.A)((()=>{t.current=e})),n.useRef(((...e)=>(0,t.current)(...e))).current}},1609:(e,t,r)=>{r.d(t,{Ay:()=>s});var n=r(9071);const o={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function s(e,t,r="Mui"){const s=o[t];return s?`${r}-${s}`:`${n.A.generate(e)}-${t}`}},2221:(e,t,r)=>{r.d(t,{b:()=>i});var n=r(6540),o=r(7379);r(4848);const s=n.createContext(void 0);function i({props:e,name:t}){return function(e){const{theme:t,name:r,props:n}=e;if(!t||!t.components||!t.components[r])return n;const s=t.components[r];return s.defaultProps?(0,o.A)(s.defaultProps,n):s.styleOverrides||s.variants?n:(0,o.A)(s,n)}({props:e,name:t,theme:{components:n.useContext(s)}})}},2295:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(6540);const o={};function s(e,t){const r=n.useRef(o);return r.current===o&&(r.current=e(t)),r}},2325:(e,t,r)=>{function n(e){return e&&e.ownerDocument||document}r.d(t,{A:()=>n})},2337:(e,t,r)=>{function n(e){return function(t){return"media"===e?`@media (prefers-color-scheme: ${t})`:e?e.startsWith("data-")&&!e.includes("%s")?`[${e}="${t}"] &`:"class"===e?`.${t} &`:"data"===e?`[data-${t}] &`:`${e.replace("%s",t)} &`:"&"}}r.d(t,{E:()=>n})},2501:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(6540);function o({controlled:e,default:t,name:r,state:o="value"}){const{current:s}=n.useRef(void 0!==e),[i,a]=n.useState(t);return[s?e:i,n.useCallback((e=>{s||a(e)}),[])]}},2505:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(4164),o=r(4959);const s=function(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((r=>{t[r]=e[r]})),t},i=function(e){const{getSlotProps:t,additionalProps:r,externalSlotProps:i,externalForwardedProps:a,className:c}=e;if(!t){const e=(0,n.A)(r?.className,c,a?.className,i?.className),t={...r?.style,...a?.style,...i?.style},o={...r,...a,...i};return e.length>0&&(o.className=e),Object.keys(t).length>0&&(o.style=t),{props:o,internalRef:void 0}}const u=(0,o.A)({...a,...i}),l=s(i),p=s(a),f=t(u),d=(0,n.A)(f?.className,r?.className,c,a?.className,i?.className),m={...f?.style,...r?.style,...a?.style,...i?.style},y={...f,...r,...p,...l};return d.length>0&&(y.className=d),Object.keys(m).length>0&&(y.style=m),{props:y,internalRef:f.ref}}},2550:(e,t,r)=>{function n(e){const t={};return Object.entries(e).forEach((e=>{const[r,n]=e;"object"==typeof n&&(t[r]=`${n.fontStyle?`${n.fontStyle} `:""}${n.fontVariant?`${n.fontVariant} `:""}${n.fontWeight?`${n.fontWeight} `:""}${n.fontStretch?`${n.fontStretch} `:""}${n.fontSize||""}${n.lineHeight?`/${n.lineHeight} `:""}${n.fontFamily||""}`)})),t}r.d(t,{A:()=>n})},2778:(e,t,r)=>{function n(e=""){function t(...r){if(!r.length)return"";const n=r[0];return"string"!=typeof n||n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, ${n}`:`, var(--${e?`${e}-`:""}${n}${t(...r.slice(1))})`}return(r,...n)=>`var(--${e?`${e}-`:""}${r}${t(...n)})`}r.d(t,{A:()=>n})},2967:(e,t,r)=>{r.d(t,{A:()=>i}),r(6540);var n=r(9940),o=r(4152),s=r(4848);const i=function({styles:e,themeId:t,defaultTheme:r={}}){const i=(0,o.A)(r),a="function"==typeof e?e(t&&i[t]||i):e;return(0,s.jsx)(n.A,{styles:a})}},3139:(e,t,r)=>{r.d(t,{X4:()=>f,e$:()=>m,eM:()=>p,YL:()=>u,a:()=>h,Cg:()=>d,Me:()=>a,Nd:()=>y,Y9:()=>b,j4:()=>g});var n=r(9453);const o=function(e,t=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,r))};function s(e,t=0,r=1){return o(e,t,r)}function i(e){if(e.type)return e;if("#"===e.charAt(0))return i(function(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&1===r[0].length&&(r=r.map((e=>e+e))),r?`rgb${4===r.length?"a":""}(${r.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),r=e.substring(0,t);if(!["rgb","rgba","hsl","hsla","color"].includes(r))throw new Error((0,n.A)(9,e));let o,s=e.substring(t+1,e.length-1);if("color"===r){if(s=s.split(" "),o=s.shift(),4===s.length&&"/"===s[3].charAt(0)&&(s[3]=s[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(o))throw new Error((0,n.A)(10,o))}else s=s.split(",");return s=s.map((e=>parseFloat(e))),{type:r,values:s,colorSpace:o}}const a=(e,t)=>{try{return(e=>{const t=i(e);return t.values.slice(0,3).map(((e,r)=>t.type.includes("hsl")&&0!==r?`${e}%`:e)).join(" ")})(e)}catch(t){return e}};function c(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return t.includes("rgb")?n=n.map(((e,t)=>t<3?parseInt(e,10):e)):t.includes("hsl")&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),n=t.includes("color")?`${r} ${n.join(" ")}`:`${n.join(", ")}`,`${t}(${n})`}function u(e){e=i(e);const{values:t}=e,r=t[0],n=t[1]/100,o=t[2]/100,s=n*Math.min(o,1-o),a=(e,t=(e+r/30)%12)=>o-s*Math.max(Math.min(t-3,9-t,1),-1);let u="rgb";const l=[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))];return"hsla"===e.type&&(u+="a",l.push(t[3])),c({type:u,values:l})}function l(e){let t="hsl"===(e=i(e)).type||"hsla"===e.type?i(u(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function p(e,t){const r=l(e),n=l(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function f(e,t){return e=i(e),t=s(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,c(e)}function d(e,t,r){try{return f(e,t)}catch(t){return e}}function m(e,t){if(e=i(e),t=s(t),e.type.includes("hsl"))e.values[2]*=1-t;else if(e.type.includes("rgb")||e.type.includes("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-t;return c(e)}function y(e,t,r){try{return m(e,t)}catch(t){return e}}function h(e,t){if(e=i(e),t=s(t),e.type.includes("hsl"))e.values[2]+=(100-e.values[2])*t;else if(e.type.includes("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(e.type.includes("color"))for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return c(e)}function g(e,t,r){try{return h(e,t)}catch(t){return e}}function b(e,t,r){try{return function(e,t=.15){return l(e)>.5?m(e,t):h(e,t)}(e,t)}catch(t){return e}}},3205:(e,t,r)=>{function n(e=window){const t=e.document.documentElement.clientWidth;return e.innerWidth-t}r.d(t,{A:()=>n})},3539:(e,t,r)=>{r.d(t,{Ay:()=>a,BO:()=>i,Yn:()=>s});var n=r(3967),o=r(9499);function s(e,t,r=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&r){const r=`vars.${t}`.split(".").reduce(((e,t)=>e&&e[t]?e[t]:null),e);if(null!=r)return r}return t.split(".").reduce(((e,t)=>e&&null!=e[t]?e[t]:null),e)}function i(e,t,r,n=r){let o;return o="function"==typeof e?e(r):Array.isArray(e)?e[r]||n:s(e,r)||n,t&&(o=t(o,n,e)),o}const a=function(e){const{prop:t,cssProperty:r=e.prop,themeKey:a,transform:c}=e,u=e=>{if(null==e[t])return null;const u=e[t],l=s(e.theme,a)||{};return(0,o.NI)(e,u,(e=>{let o=i(l,c,e);return e===o&&"string"==typeof e&&(o=i(l,c,`${t}${"default"===e?"":(0,n.A)(e)}`,e)),!1===r?o:{[r]:o}}))};return u.propTypes={},u.filterProps=[t],u}},3571:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(3967),o=r(7611),s=r(3539),i=r(9499),a=r(6171),c=r(8348);const u=function(){function e(e,t,r,o){const a={[e]:t,theme:r},c=o[e];if(!c)return{[e]:t};const{cssProperty:u=e,themeKey:l,transform:p,style:f}=c;if(null==t)return null;if("typography"===l&&"inherit"===t)return{[e]:t};const d=(0,s.Yn)(r,l)||{};return f?f(a):(0,i.NI)(a,t,(t=>{let r=(0,s.BO)(d,p,t);return t===r&&"string"==typeof t&&(r=(0,s.BO)(d,p,`${e}${"default"===t?"":(0,n.A)(t)}`,t)),!1===u?r:{[u]:r}}))}return function t(r){const{sx:n,theme:s={}}=r||{};if(!n)return null;const u=s.unstable_sxConfig??c.A;function l(r){let n=r;if("function"==typeof r)n=r(s);else if("object"!=typeof r)return r;if(!n)return null;const c=(0,i.EU)(s.breakpoints),l=Object.keys(c);let p=c;return Object.keys(n).forEach((r=>{const a="function"==typeof(c=n[r])?c(s):c;var c;if(null!=a)if("object"==typeof a)if(u[r])p=(0,o.A)(p,e(r,a,s,u));else{const e=(0,i.NI)({theme:s},a,(e=>({[r]:e})));!function(...e){const t=e.reduce(((e,t)=>e.concat(Object.keys(t))),[]),r=new Set(t);return e.every((e=>r.size===Object.keys(e).length))}(e,a)?p=(0,o.A)(p,e):p[r]=t({sx:a,theme:s})}else p=(0,o.A)(p,e(r,a,s,u))})),(0,a._S)(s,(0,i.vf)(l,p))}return Array.isArray(n)?n.map(l):l(n)}}();u.filterProps=["sx"];const l=u},3788:(e,t,r)=>{r.d(t,{I:()=>s});var n=r(6540);r(4848);const o=n.createContext(),s=()=>n.useContext(o)??!1},3967:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(9453);function o(e){if("string"!=typeof e)throw new Error((0,n.A)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},4135:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(6540),o=r(4164),s=r(4763),i=r(3571),a=r(9599),c=r(4152),u=r(4848);function l(e={}){const{themeId:t,defaultTheme:r,defaultClassName:l="MuiBox-root",generateClassName:p}=e,f=(0,s.Ay)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(i.A);return n.forwardRef((function(e,n){const s=(0,c.A)(r),{className:i,component:d="div",...m}=(0,a.A)(e);return(0,u.jsx)(f,{as:d,ref:n,className:(0,o.A)(i,p?p(l):l),theme:t&&s[t]||s,...m})}))}},4152:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(6641),o=r(6540),s=r(8221);const i=(0,n.A)(),a=function(e=i){return function(e=null){const t=o.useContext(s.T);return t&&(r=t,0!==Object.keys(r).length)?t:e;var r}(e)}},4580:(e,t,r)=>{r.d(t,{LX:()=>m,MA:()=>d,_W:()=>y,Lc:()=>g,Ms:()=>b});var n=r(9499),o=r(3539),s=r(7611);const i={m:"margin",p:"padding"},a={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},c={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},u=function(){const e={};return t=>(void 0===e[t]&&(e[t]=(e=>{if(e.length>2){if(!c[e])return[e];e=c[e]}const[t,r]=e.split(""),n=i[t],o=a[r]||"";return Array.isArray(o)?o.map((e=>n+e)):[n+o]})(t)),e[t])}(),l=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],p=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],f=[...l,...p];function d(e,t,r,n){const s=(0,o.Yn)(e,t,!0)??r;return"number"==typeof s||"string"==typeof s?e=>"string"==typeof e?e:"string"==typeof s?`calc(${e} * ${s})`:s*e:Array.isArray(s)?e=>{if("string"==typeof e)return e;const t=Math.abs(e),r=s[t];return e>=0?r:"number"==typeof r?-r:`-${r}`}:"function"==typeof s?s:()=>{}}function m(e){return d(e,"spacing",8)}function y(e,t){return"string"==typeof t||null==t?t:e(t)}function h(e,t){const r=m(e.theme);return Object.keys(e).map((o=>function(e,t,r,o){if(!t.includes(r))return null;const s=function(e,t){return r=>e.reduce(((e,n)=>(e[n]=y(t,r),e)),{})}(u(r),o),i=e[r];return(0,n.NI)(e,i,s)}(e,t,o,r))).reduce(s.A,{})}function g(e){return h(e,l)}function b(e){return h(e,p)}function A(e){return h(e,f)}g.propTypes={},g.filterProps=l,b.propTypes={},b.filterProps=p,A.propTypes={},A.filterProps=f},4661:(e,t,r)=>{var n;r.d(t,{A:()=>a});var o=r(6540);let s=0;const i={...n||(n=r.t(o,2))}.useId;function a(e){if(void 0!==i){const t=i();return e??t}return function(e){const[t,r]=o.useState(e),n=e||t;return o.useEffect((()=>{null==t&&(s+=1,r(`mui-${s}`))}),[t]),n}(e)}},4705:(e,t,r)=>{function n(e,t=166){let r;function n(...n){clearTimeout(r),r=setTimeout((()=>{e.apply(this,n)}),t)}return n.clear=()=>{clearTimeout(r)},n}r.d(t,{A:()=>n})},4849:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(6540),o=r(4164),s=r(1609),i=r(5659),a=r(3967),c=r(7379),u=r(4152);const l=(0,r(8351).Ay)();var p=r(6641),f=r(4848);const d=(0,p.A)(),m=l("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,a.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),y=e=>function({props:e,name:t,defaultTheme:r,themeId:n}){let o=(0,u.A)(r);return n&&(o=o[n]||o),function(e){const{theme:t,name:r,props:n}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,c.A)(t.components[r].defaultProps,n):n}({theme:o,name:t,props:e})}({props:e,name:"MuiContainer",defaultTheme:d}),h=(e,t)=>{const{classes:r,fixed:n,disableGutters:o,maxWidth:c}=e,u={root:["root",c&&`maxWidth${(0,a.A)(String(c))}`,n&&"fixed",o&&"disableGutters"]};return(0,i.A)(u,(e=>(0,s.Ay)(t,e)),r)};function g(e={}){const{createStyledComponent:t=m,useThemeProps:r=y,componentName:s="MuiContainer"}=e,i=t((({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const n=r,o=e.breakpoints.values[n];return 0!==o&&(t[e.breakpoints.up(n)]={maxWidth:`${o}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}})));return n.forwardRef((function(e,t){const n=r(e),{className:a,component:c="div",disableGutters:u=!1,fixed:l=!1,maxWidth:p="lg",classes:d,...m}=n,y={...n,component:c,disableGutters:u,fixed:l,maxWidth:p},g=h(y,s);return(0,f.jsx)(i,{as:c,ownerState:y,className:(0,o.A)(g.root,a),ref:t,...m})}))}},4877:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(2325);function o(e){return(0,n.A)(e).defaultView||window}},4899:(e,t,r)=>{function n(e){try{return e.matches(":focus-visible")}catch(e){}return!1}r.d(t,{A:()=>n})},4959:(e,t,r)=>{r.d(t,{A:()=>n});const n=function(e,t=[]){if(void 0===e)return{};const r={};return Object.keys(e).filter((r=>r.match(/^on[A-Z]/)&&"function"==typeof e[r]&&!t.includes(r))).forEach((t=>{r[t]=e[t]})),r}},5659:(e,t,r)=>{function n(e,t,r=void 0){const n={};for(const o in e){const s=e[o];let i="",a=!0;for(let e=0;e<s.length;e+=1){const n=s[e];n&&(i+=(!0===a?"":" ")+t(n),a=!1,r&&r[n]&&(i+=" "+r[n]))}n[o]=i}return n}r.d(t,{A:()=>n})},6171:(e,t,r)=>{function n(e,t){if(!e.containerQueries)return t;const r=Object.keys(t).filter((e=>e.startsWith("@container"))).sort(((e,t)=>{const r=/min-width:\s*([0-9.]+)/;return+(e.match(r)?.[1]||0)-+(t.match(r)?.[1]||0)}));return r.length?r.reduce(((e,r)=>{const n=t[r];return delete e[r],e[r]=n,e}),{...t}):t}function o(e,t){return"@"===t||t.startsWith("@")&&(e.some((e=>t.startsWith(`@${e}`)))||!!t.match(/^@\d/))}function s(e,t){const r=t.match(/^@([^/]+)?\/?(.+)?$/);if(!r)return null;const[,n,o]=r,s=Number.isNaN(+n)?n||0:+n;return e.containerQueries(o).up(s)}function i(e){const t=(e,t)=>e.replace("@media",t?`@container ${t}`:"@container");function r(r,n){r.up=(...r)=>t(e.breakpoints.up(...r),n),r.down=(...r)=>t(e.breakpoints.down(...r),n),r.between=(...r)=>t(e.breakpoints.between(...r),n),r.only=(...r)=>t(e.breakpoints.only(...r),n),r.not=(...r)=>{const o=t(e.breakpoints.not(...r),n);return o.includes("not all and")?o.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):o}}const n={},o=e=>(r(n,e),n);return r(o),{...e,containerQueries:o}}r.d(t,{Ay:()=>i,CT:()=>s,_S:()=>n,ob:()=>o})},6641:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(1317);var o=r(6171);const s={borderRadius:4};var i=r(6955),a=r(3571),c=r(8348);function u(e,t){const r=this;if(r.vars){if(!r.colorSchemes?.[e]||"function"!=typeof r.getColorSchemeSelector)return{};let n=r.getColorSchemeSelector(e);return"&"===n?t:((n.includes("data-")||n.includes("."))&&(n=`*:where(${n.replace(/\s*&$/,"")}) &`),{[n]:t})}return r.palette.mode===e?t:{}}const l=function(e={},...t){const{breakpoints:r={},palette:l={},spacing:p,shape:f={},...d}=e,m=function(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5,...o}=e,s=(e=>{const t=Object.keys(e).map((t=>({key:t,val:e[t]})))||[];return t.sort(((e,t)=>e.val-t.val)),t.reduce(((e,t)=>({...e,[t.key]:t.val})),{})})(t),i=Object.keys(s);function a(e){return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${r})`}function c(e){return`@media (max-width:${("number"==typeof t[e]?t[e]:e)-n/100}${r})`}function u(e,o){const s=i.indexOf(o);return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${r}) and (max-width:${(-1!==s&&"number"==typeof t[i[s]]?t[i[s]]:o)-n/100}${r})`}return{keys:i,values:s,up:a,down:c,between:u,only:function(e){return i.indexOf(e)+1<i.length?u(e,i[i.indexOf(e)+1]):a(e)},not:function(e){const t=i.indexOf(e);return 0===t?a(i[1]):t===i.length-1?c(i[t]):u(e,i[i.indexOf(e)+1]).replace("@media","@media not all and")},unit:r,...o}}(r),y=(0,i.A)(p);let h=(0,n.A)({breakpoints:m,direction:"ltr",components:{},palette:{mode:"light",...l},spacing:y,shape:{...s,...f}},d);return h=(0,o.Ay)(h),h.applyStyles=u,h=t.reduce(((e,t)=>(0,n.A)(e,t)),h),h.unstable_sxConfig={...c.A,...d?.unstable_sxConfig},h.unstable_sx=function(e){return(0,a.A)({sx:e,theme:this})},h}},6673:(e,t,r)=>{function n(...e){return e.reduce(((e,t)=>null==t?e:function(...r){e.apply(this,r),t.apply(this,r)}),(()=>{}))}r.d(t,{A:()=>n})},6677:(e,t,r)=>{r.d(t,{A:()=>n});const n=function(e,t,r){return"function"==typeof e?e(t,r):e}},6955:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(4580);function o(e=8,t=(0,n.LX)({spacing:e})){if(e.mui)return e;const r=(...e)=>(0===e.length?[1]:e).map((e=>{const r=t(e);return"number"==typeof r?`${r}px`:r})).join(" ");return r.mui=!0,r}},7118:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(4763);function o(e){const{variants:t,...r}=e,o={variants:t,style:(0,n.tT)(r),isProcessed:!0};return o.style===r||t&&t.forEach((e=>{"function"!=typeof e.style&&(e.style=(0,n.tT)(e.style))})),o}},7223:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(6540);function o(e){return parseInt(n.version,10)>=19?e?.props?.ref||null:e?.ref||null}},7365:(e,t,r)=>{function n(e,t){"function"==typeof e?e(t):e&&(e.current=t)}r.d(t,{A:()=>n})},7379:(e,t,r)=>{function n(e,t){const r={...t};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const s=o;if("components"===s||"slots"===s)r[s]={...e[s],...r[s]};else if("componentsProps"===s||"slotProps"===s){const o=e[s],i=t[s];if(i)if(o){r[s]={...i};for(const e in o)if(Object.prototype.hasOwnProperty.call(o,e)){const t=e;r[s][t]=n(o[t],i[t])}}else r[s]=i;else r[s]=o||{}}else void 0===r[s]&&(r[s]=e[s])}return r}r.d(t,{A:()=>n})},7611:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(1317);const o=function(e,t){return t?(0,n.A)(e,t,{clone:!1}):e}},8348:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(4580),o=r(3539),s=r(7611);const i=function(...e){const t=e.reduce(((e,t)=>(t.filterProps.forEach((r=>{e[r]=t})),e)),{}),r=e=>Object.keys(e).reduce(((r,n)=>t[n]?(0,s.A)(r,t[n](e)):r),{});return r.propTypes={},r.filterProps=e.reduce(((e,t)=>e.concat(t.filterProps)),[]),r};var a=r(9499);function c(e){return"number"!=typeof e?e:`${e}px solid`}function u(e,t){return(0,o.Ay)({prop:e,themeKey:"borders",transform:t})}const l=u("border",c),p=u("borderTop",c),f=u("borderRight",c),d=u("borderBottom",c),m=u("borderLeft",c),y=u("borderColor"),h=u("borderTopColor"),g=u("borderRightColor"),b=u("borderBottomColor"),A=u("borderLeftColor"),v=u("outline",c),x=u("outlineColor"),w=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=(0,n.MA)(e.theme,"shape.borderRadius",4,"borderRadius"),r=e=>({borderRadius:(0,n._W)(t,e)});return(0,a.NI)(e,e.borderRadius,r)}return null};w.propTypes={},w.filterProps=["borderRadius"],i(l,p,f,d,m,y,h,g,b,A,w,v,x);const $=e=>{if(void 0!==e.gap&&null!==e.gap){const t=(0,n.MA)(e.theme,"spacing",8,"gap"),r=e=>({gap:(0,n._W)(t,e)});return(0,a.NI)(e,e.gap,r)}return null};$.propTypes={},$.filterProps=["gap"];const k=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=(0,n.MA)(e.theme,"spacing",8,"columnGap"),r=e=>({columnGap:(0,n._W)(t,e)});return(0,a.NI)(e,e.columnGap,r)}return null};k.propTypes={},k.filterProps=["columnGap"];const S=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=(0,n.MA)(e.theme,"spacing",8,"rowGap"),r=e=>({rowGap:(0,n._W)(t,e)});return(0,a.NI)(e,e.rowGap,r)}return null};function j(e,t){return"grey"===t?t:e}function C(e){return e<=1&&0!==e?100*e+"%":e}S.propTypes={},S.filterProps=["rowGap"],i($,k,S,(0,o.Ay)({prop:"gridColumn"}),(0,o.Ay)({prop:"gridRow"}),(0,o.Ay)({prop:"gridAutoFlow"}),(0,o.Ay)({prop:"gridAutoColumns"}),(0,o.Ay)({prop:"gridAutoRows"}),(0,o.Ay)({prop:"gridTemplateColumns"}),(0,o.Ay)({prop:"gridTemplateRows"}),(0,o.Ay)({prop:"gridTemplateAreas"}),(0,o.Ay)({prop:"gridArea"})),i((0,o.Ay)({prop:"color",themeKey:"palette",transform:j}),(0,o.Ay)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:j}),(0,o.Ay)({prop:"backgroundColor",themeKey:"palette",transform:j}));const O=(0,o.Ay)({prop:"width",transform:C}),P=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{const r=e.theme?.breakpoints?.values?.[t]||a.zu[t];return r?"px"!==e.theme?.breakpoints?.unit?{maxWidth:`${r}${e.theme.breakpoints.unit}`}:{maxWidth:r}:{maxWidth:C(t)}};return(0,a.NI)(e,e.maxWidth,t)}return null};P.filterProps=["maxWidth"];const M=(0,o.Ay)({prop:"minWidth",transform:C}),E=(0,o.Ay)({prop:"height",transform:C}),R=(0,o.Ay)({prop:"maxHeight",transform:C}),I=(0,o.Ay)({prop:"minHeight",transform:C}),T=((0,o.Ay)({prop:"size",cssProperty:"width",transform:C}),(0,o.Ay)({prop:"size",cssProperty:"height",transform:C}),i(O,P,M,E,R,I,(0,o.Ay)({prop:"boxSizing"})),{border:{themeKey:"borders",transform:c},borderTop:{themeKey:"borders",transform:c},borderRight:{themeKey:"borders",transform:c},borderBottom:{themeKey:"borders",transform:c},borderLeft:{themeKey:"borders",transform:c},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:c},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:w},color:{themeKey:"palette",transform:j},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:j},backgroundColor:{themeKey:"palette",transform:j},p:{style:n.Ms},pt:{style:n.Ms},pr:{style:n.Ms},pb:{style:n.Ms},pl:{style:n.Ms},px:{style:n.Ms},py:{style:n.Ms},padding:{style:n.Ms},paddingTop:{style:n.Ms},paddingRight:{style:n.Ms},paddingBottom:{style:n.Ms},paddingLeft:{style:n.Ms},paddingX:{style:n.Ms},paddingY:{style:n.Ms},paddingInline:{style:n.Ms},paddingInlineStart:{style:n.Ms},paddingInlineEnd:{style:n.Ms},paddingBlock:{style:n.Ms},paddingBlockStart:{style:n.Ms},paddingBlockEnd:{style:n.Ms},m:{style:n.Lc},mt:{style:n.Lc},mr:{style:n.Lc},mb:{style:n.Lc},ml:{style:n.Lc},mx:{style:n.Lc},my:{style:n.Lc},margin:{style:n.Lc},marginTop:{style:n.Lc},marginRight:{style:n.Lc},marginBottom:{style:n.Lc},marginLeft:{style:n.Lc},marginX:{style:n.Lc},marginY:{style:n.Lc},marginInline:{style:n.Lc},marginInlineStart:{style:n.Lc},marginInlineEnd:{style:n.Lc},marginBlock:{style:n.Lc},marginBlockStart:{style:n.Lc},marginBlockEnd:{style:n.Lc},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:$},rowGap:{style:S},columnGap:{style:k},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:C},maxWidth:{style:P},minWidth:{transform:C},height:{transform:C},maxHeight:{transform:C},minHeight:{transform:C},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}})},8351:(e,t,r)=>{r.d(t,{Ay:()=>d});var n=r(4763),o=r(1317),s=r(6641),i=r(3571),a=r(7118);const c=(0,s.A)();function u(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}function l(e){return e?(t,r)=>r[e]:null}function p(e,t){const r="function"==typeof t?t(e):t;if(Array.isArray(r))return r.flatMap((t=>p(e,t)));if(Array.isArray(r?.variants)){let t;if(r.isProcessed)t=r.style;else{const{variants:e,...n}=r;t=n}return f(e,r.variants,[t])}return r?.isProcessed?r.style:r}function f(e,t,r=[]){let n;e:for(let o=0;o<t.length;o+=1){const s=t[o];if("function"==typeof s.props){if(n??={...e,...e.ownerState,ownerState:e.ownerState},!s.props(n))continue}else for(const t in s.props)if(e[t]!==s.props[t]&&e.ownerState?.[t]!==s.props[t])continue e;"function"==typeof s.style?(n??={...e,...e.ownerState,ownerState:e.ownerState},r.push(s.style(n))):r.push(s.style)}return r}function d(e={}){const{themeId:t,defaultTheme:r=c,rootShouldForwardProp:s=u,slotShouldForwardProp:d=u}=e;function y(e){!function(e,t,r){e.theme=function(e){for(const t in e)return!1;return!0}(e.theme)?r:e.theme[t]||e.theme}(e,t,r)}return(e,t={})=>{(0,n.HX)(e,(e=>e.filter((e=>e!==i.A))));const{name:r,slot:c,skipVariantsResolver:h,skipSx:g,overridesResolver:b=l(m(c)),...A}=t,v=void 0!==h?h:c&&"Root"!==c&&"root"!==c||!1,x=g||!1;let w=u;"Root"===c||"root"===c?w=s:c?w=d:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(w=void 0);const $=(0,n.Ay)(e,{shouldForwardProp:w,label:void 0,...A}),k=e=>{if("function"==typeof e&&e.__emotion_real!==e)return function(t){return p(t,e)};if((0,o.Q)(e)){const t=(0,a.A)(e);return t.variants?function(e){return p(e,t)}:t.style}return e},S=(...t)=>{const n=[],o=t.map(k),s=[];if(n.push(y),r&&b&&s.push((function(e){const t=e.theme,n=t.components?.[r]?.styleOverrides;if(!n)return null;const o={};for(const t in n)o[t]=p(e,n[t]);return b(e,o)})),r&&!v&&s.push((function(e){const t=e.theme,n=t?.components?.[r]?.variants;return n?f(e,n):null})),x||s.push(i.A),Array.isArray(o[0])){const e=o.shift(),t=new Array(n.length).fill(""),r=new Array(s.length).fill("");let i;i=[...t,...e,...r],i.raw=[...t,...e.raw,...r],n.unshift(i)}const a=[...n,...o,...s],c=$(...a);return e.muiName&&(c.muiName=e.muiName),c};return $.withConfig&&(S.withConfig=$.withConfig),S}}function m(e){return e?e.charAt(0).toLowerCase()+e.slice(1):e}},8413:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(1609);function o(e,t,r="Mui"){const o={};return t.forEach((t=>{o[t]=(0,n.Ay)(e,t,r)})),o}},8473:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(6540);function o(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName??e.type?._payload?.value?.muiName)}},9071:(e,t,r)=>{r.d(t,{A:()=>o});const n=e=>e,o=(()=>{let e=n;return{configure(t){e=t},generate:t=>e(t),reset(){e=n}}})()},9329:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(1523),o=r(999),s=r(2505),i=r(6677);const a=function(e){const{elementType:t,externalSlotProps:r,ownerState:a,skipResolvingSlotProps:c=!1,...u}=e,l=c?{}:(0,i.A)(r,a),{props:p,internalRef:f}=(0,s.A)({...u,externalSlotProps:l}),d=(0,n.A)(f,l?.ref,e.additionalProps?.ref);return(0,o.A)(t,{...p,ref:d},a)}},9451:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(7118);const o={theme:void 0};function s(e){let t,r;return function(s){let i=t;return void 0!==i&&s.theme===r||(o.theme=s.theme,i=(0,n.A)(e(o)),t=i,r=s.theme),i}}},9453:(e,t,r)=>{function n(e,...t){const r=new URL(`https://mui.com/production-error/?code=${e}`);return t.forEach((e=>r.searchParams.append("args[]",e))),`Minified MUI error #${e}; visit ${r} for the full message.`}r.d(t,{A:()=>n})},9499:(e,t,r)=>{r.d(t,{EU:()=>c,NI:()=>a,kW:()=>l,vf:()=>u,zu:()=>o});var n=r(6171);const o={xs:0,sm:600,md:900,lg:1200,xl:1536},s={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${o[e]}px)`},i={containerQueries:e=>({up:t=>{let r="number"==typeof t?t:o[t]||t;return"number"==typeof r&&(r=`${r}px`),e?`@container ${e} (min-width:${r})`:`@container (min-width:${r})`}})};function a(e,t,r){const a=e.theme||{};if(Array.isArray(t)){const e=a.breakpoints||s;return t.reduce(((n,o,s)=>(n[e.up(e.keys[s])]=r(t[s]),n)),{})}if("object"==typeof t){const e=a.breakpoints||s;return Object.keys(t).reduce(((s,c)=>{if((0,n.ob)(e.keys,c)){const e=(0,n.CT)(a.containerQueries?a:i,c);e&&(s[e]=r(t[c],c))}else if(Object.keys(e.values||o).includes(c))s[e.up(c)]=r(t[c],c);else{const e=c;s[e]=t[e]}return s}),{})}return r(t)}function c(e={}){const t=e.keys?.reduce(((t,r)=>(t[e.up(r)]={},t)),{});return t||{}}function u(e,t){return e.reduce(((e,t)=>{const r=e[t];return(!r||0===Object.keys(r).length)&&delete e[t],e}),t)}function l({values:e,breakpoints:t,base:r}){const n=r||function(e,t){if("object"!=typeof e)return{};const r={},n=Object.keys(t);return Array.isArray(e)?n.forEach(((t,n)=>{n<e.length&&(r[t]=!0)})):n.forEach((t=>{null!=e[t]&&(r[t]=!0)})),r}(e,t),o=Object.keys(n);if(0===o.length)return e;let s;return o.reduce(((t,r,n)=>(Array.isArray(e)?(t[r]=null!=e[n]?e[n]:e[s],s=n):"object"==typeof e?(t[r]=null!=e[r]?e[r]:e[s],s=r):t[r]=e,t)),{})}},9599:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(1317),o=r(8348);const s=e=>{const t={systemProps:{},otherProps:{}},r=e?.theme?.unstable_sxConfig??o.A;return Object.keys(e).forEach((n=>{r[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t};function i(e){const{sx:t,...r}=e,{systemProps:o,otherProps:i}=s(r);let a;return a=Array.isArray(t)?[o,...t]:"function"==typeof t?(...e)=>{const r=t(...e);return(0,n.Q)(r)?{...o,...r}:o}:{...o,...t},{...i,sx:a}}},9787:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(2295),o=r(6540);const s=[];class i{static create(){return new i}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout((()=>{this.currentId=null,t()}),e)}clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function a(){const e=(0,n.A)(i.create).current;var t;return t=e.disposeEffect,o.useEffect(t,s),e}}}]);