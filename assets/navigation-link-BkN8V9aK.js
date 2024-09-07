import{j as F}from"./jsx-runtime-CGpYA4L6.js";import{c as H}from"./misc-opz8xCVi.js";import{c as I}from"./index-Bb4qSo10.js";import{r as s}from"./index-CleY8y_P.js";import{p as M,f as P,N as O,L as T,m as U,u as A,D as B,g as K}from"./index-bC7_7EF_.js";/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function v(){return v=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},v.apply(this,arguments)}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function z(e,r){if(e.id in r)return r[e.id];try{let t=await import(e.module);return r[e.id]=t,t}catch{return window.__remixContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Y(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function j(e,r,t){let n=await Promise.all(e.map(async a=>{let o=await z(r.routes[a.route.id],t);return o.links?o.links():[]}));return W(n.flat(1).filter(Y).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function g(e,r,t,n,a,o){let c=R(e),f=(i,l)=>t[l]?i.route.id!==t[l].route.id:!0,m=(i,l)=>{var h;return t[l].pathname!==i.pathname||((h=t[l].route.path)===null||h===void 0?void 0:h.endsWith("*"))&&t[l].params["*"]!==i.params["*"]};return o==="data"&&a.search!==c.search?r.filter((i,l)=>{if(!n.routes[i.route.id].hasLoader)return!1;if(f(i,l)||m(i,l))return!0;if(i.route.shouldRevalidate){var p;let u=i.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=t[0])===null||p===void 0?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:i.params,defaultShouldRevalidate:!0});if(typeof u=="boolean")return u}return!0}):r.filter((i,l)=>{let h=n.routes[i.route.id];return(o==="assets"||h.hasLoader)&&(f(i,l)||m(i,l))})}function G(e,r,t){let n=R(e);return k(r.filter(a=>t.routes[a.route.id].hasLoader).map(a=>{let{pathname:o,search:c}=n,f=new URLSearchParams(c);return f.set("_data",a.route.id),`${o}?${f}`}))}function J(e,r){return k(e.map(t=>{let n=r.routes[t.route.id],a=[n.module];return n.imports&&(a=a.concat(n.imports)),a}).flat(1))}function k(e){return[...new Set(e)]}function V(e){let r={},t=Object.keys(e).sort();for(let n of t)r[n]=e[n];return r}function W(e,r){let t=new Set;return new Set(r),e.reduce((n,a)=>{let o=JSON.stringify(V(a));return t.has(o)||(t.add(o),n.push({key:o,link:a})),n},[])}function R(e){let r=M(e);return r.search===void 0&&(r.search=""),r}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X(e,r,t,n,a){let o=d=>d.filter(i=>e.routes[i].hasLoader).join(",");if(!t.some(d=>{var i,l;return((i=r[d.id])===null||i===void 0?void 0:i.shouldRevalidate)||((l=e.routes[d.id])===null||l===void 0?void 0:l.hasClientLoader)}))return a;let f=o(t.map(d=>d.id)),m=o(n.filter(d=>{var i;return!((i=e.routes[d.id])!==null&&i!==void 0&&i.hasClientLoader)}).map(d=>d.id));return f!==m&&a.searchParams.set("_routes",m),a}function Q(e){let r=typeof e=="string"?new URL(e,window.location.origin):e;return r.pathname=`${r.pathname==="/"?"_root":r.pathname}.data`,r}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Z(){let e=s.useContext(B);return w(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function q(){let e=s.useContext(K);return w(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}const E=s.createContext(void 0);E.displayName="Remix";function x(){let e=s.useContext(E);return w(e,"You must render this element inside a <Remix> element"),e}function S(e,r){let[t,n]=s.useState(!1),[a,o]=s.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:m,onMouseLeave:d,onTouchStart:i}=r,l=s.useRef(null);s.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let u=b=>{b.forEach(D=>{o(D.isIntersecting)})},y=new IntersectionObserver(u,{threshold:.5});return l.current&&y.observe(l.current),()=>{y.disconnect()}}},[e]);let h=()=>{e==="intent"&&n(!0)},p=()=>{e==="intent"&&(n(!1),o(!1))};return s.useEffect(()=>{if(t){let u=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(u)}}},[t]),[a,l,{onFocus:L(c,h),onBlur:L(f,p),onMouseEnter:L(m,h),onMouseLeave:L(d,p),onTouchStart:L(i,h)}]}const N=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;let C=s.forwardRef(({to:e,prefetch:r="none",...t},n)=>{let a=typeof e=="string"&&N.test(e),o=P(e),[c,f,m]=S(r,t);return s.createElement(s.Fragment,null,s.createElement(O,v({},t,m,{ref:$(n,f),to:e})),c&&!a?s.createElement(_,{page:o}):null)});C.displayName="NavLink";let ee=s.forwardRef(({to:e,prefetch:r="none",...t},n)=>{let a=typeof e=="string"&&N.test(e),o=P(e),[c,f,m]=S(r,t);return s.createElement(s.Fragment,null,s.createElement(T,v({},t,m,{ref:$(n,f),to:e})),c&&!a?s.createElement(_,{page:o}):null)});ee.displayName="Link";function L(e,r){return t=>{e&&e(t),t.defaultPrevented||r(t)}}function _({page:e,...r}){let{router:t}=Z(),n=s.useMemo(()=>U(t.routes,e,t.basename),[t.routes,e,t.basename]);return n?s.createElement(re,v({page:e,matches:n},r)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function te(e){let{manifest:r,routeModules:t}=x(),[n,a]=s.useState([]);return s.useEffect(()=>{let o=!1;return j(e,r,t).then(c=>{o||a(c)}),()=>{o=!0}},[e,r,t]),n}function re({page:e,matches:r,...t}){let n=A(),{future:a,manifest:o,routeModules:c}=x(),{matches:f}=q(),m=s.useMemo(()=>g(e,r,f,o,n,"data"),[e,r,f,o,n]),d=s.useMemo(()=>g(e,r,f,o,n,"assets"),[e,r,f,o,n]),i=s.useMemo(()=>G(e,m,o),[m,e,o]),l=s.useMemo(()=>J(d,o),[d,o]),h=te(d),p=null;if(!a.unstable_singleFetch)p=i.map(u=>s.createElement("link",v({key:u,rel:"prefetch",as:"fetch",href:u},t)));else if(m.length>0){let u=X(o,c,r.map(y=>y.route),m.map(y=>y.route),Q(e));u.searchParams.get("_routes")!==""&&(p=s.createElement("link",v({key:u.pathname+u.search,rel:"prefetch",as:"fetch",href:u.pathname+u.search},t)))}return s.createElement(s.Fragment,null,p,l.map(u=>s.createElement("link",v({key:u,rel:"modulepreload",href:u},t))),h.map(({key:u,link:y})=>s.createElement("link",v({key:u},y))))}function $(...e){return r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}const ne=I(["px-2","py-4","rounded-md","font-sans","text-p1","font-bold","hover:text-primary","focus-visible:outline-ring"],{variants:{active:{true:"text-foreground",false:"text-muted-foreground"}},defaultVariants:{active:!1}}),ae=e=>{const{className:r,...t}=e;return F.jsx(C,{className:({isActive:n})=>H(ne({active:n}),r),...t})};ae.__docgenInfo={description:"",methods:[],displayName:"NavigationLink"};export{ee as L,ae as N};
