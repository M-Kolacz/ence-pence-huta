import{j as F,c as H}from"./misc-D9gxsTwp.js";import{c as I}from"./index-Bb4qSo10.js";import{r as o}from"./index-CEThVCg_.js";import{p as M,f as g,N as O,L as T,m as U,u as A,D as B,g as K}from"./index-Bd0nuzNA.js";/**
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
 */function Y(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function V(e,r,t){let n=await Promise.all(e.map(async a=>{let s=await z(r.routes[a.route.id],t);return s.links?s.links():[]}));return W(n.flat(1).filter(Y).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function P(e,r,t,n,a,s){let c=R(e),f=(i,l)=>t[l]?i.route.id!==t[l].route.id:!0,m=(i,l)=>{var h;return t[l].pathname!==i.pathname||((h=t[l].route.path)===null||h===void 0?void 0:h.endsWith("*"))&&t[l].params["*"]!==i.params["*"]};return s==="data"&&a.search!==c.search?r.filter((i,l)=>{if(!n.routes[i.route.id].hasLoader)return!1;if(f(i,l)||m(i,l))return!0;if(i.route.shouldRevalidate){var p;let u=i.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=t[0])===null||p===void 0?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:i.params,defaultShouldRevalidate:!0});if(typeof u=="boolean")return u}return!0}):r.filter((i,l)=>{let h=n.routes[i.route.id];return(s==="assets"||h.hasLoader)&&(f(i,l)||m(i,l))})}function j(e,r,t){let n=R(e);return k(r.filter(a=>t.routes[a.route.id].hasLoader).map(a=>{let{pathname:s,search:c}=n,f=new URLSearchParams(c);return f.set("_data",a.route.id),`${s}?${f}`}))}function G(e,r){return k(e.map(t=>{let n=r.routes[t.route.id],a=[n.module];return n.imports&&(a=a.concat(n.imports)),a}).flat(1))}function k(e){return[...new Set(e)]}function J(e){let r={},t=Object.keys(e).sort();for(let n of t)r[n]=e[n];return r}function W(e,r){let t=new Set;return new Set(r),e.reduce((n,a)=>{let s=JSON.stringify(J(a));return t.has(s)||(t.add(s),n.push({key:s,link:a})),n},[])}function R(e){let r=M(e);return r.search===void 0&&(r.search=""),r}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X(e,r,t,n,a){let s=d=>d.filter(i=>e.routes[i].hasLoader).join(",");if(!t.some(d=>{var i,l;return((i=r[d.id])===null||i===void 0?void 0:i.shouldRevalidate)||((l=e.routes[d.id])===null||l===void 0?void 0:l.hasClientLoader)}))return a;let f=s(t.map(d=>d.id)),m=s(n.filter(d=>{var i;return!((i=e.routes[d.id])!==null&&i!==void 0&&i.hasClientLoader)}).map(d=>d.id));return f!==m&&a.searchParams.set("_routes",m),a}function Q(e){let r=typeof e=="string"?new URL(e,window.location.origin):e;return r.pathname=`${r.pathname==="/"?"_root":r.pathname}.data`,r}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Z(){let e=o.useContext(B);return w(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function q(){let e=o.useContext(K);return w(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}const E=o.createContext(void 0);E.displayName="Remix";function x(){let e=o.useContext(E);return w(e,"You must render this element inside a <Remix> element"),e}function S(e,r){let[t,n]=o.useState(!1),[a,s]=o.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:m,onMouseLeave:d,onTouchStart:i}=r,l=o.useRef(null);o.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let u=b=>{b.forEach(D=>{s(D.isIntersecting)})},y=new IntersectionObserver(u,{threshold:.5});return l.current&&y.observe(l.current),()=>{y.disconnect()}}},[e]);let h=()=>{e==="intent"&&n(!0)},p=()=>{e==="intent"&&(n(!1),s(!1))};return o.useEffect(()=>{if(t){let u=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(u)}}},[t]),[a,l,{onFocus:L(c,h),onBlur:L(f,p),onMouseEnter:L(m,h),onMouseLeave:L(d,p),onTouchStart:L(i,h)}]}const N=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;let C=o.forwardRef(({to:e,prefetch:r="none",...t},n)=>{let a=typeof e=="string"&&N.test(e),s=g(e),[c,f,m]=S(r,t);return o.createElement(o.Fragment,null,o.createElement(O,v({},t,m,{ref:$(n,f),to:e})),c&&!a?o.createElement(_,{page:s}):null)});C.displayName="NavLink";let ee=o.forwardRef(({to:e,prefetch:r="none",...t},n)=>{let a=typeof e=="string"&&N.test(e),s=g(e),[c,f,m]=S(r,t);return o.createElement(o.Fragment,null,o.createElement(T,v({},t,m,{ref:$(n,f),to:e})),c&&!a?o.createElement(_,{page:s}):null)});ee.displayName="Link";function L(e,r){return t=>{e&&e(t),t.defaultPrevented||r(t)}}function _({page:e,...r}){let{router:t}=Z(),n=o.useMemo(()=>U(t.routes,e,t.basename),[t.routes,e,t.basename]);return n?o.createElement(re,v({page:e,matches:n},r)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function te(e){let{manifest:r,routeModules:t}=x(),[n,a]=o.useState([]);return o.useEffect(()=>{let s=!1;return V(e,r,t).then(c=>{s||a(c)}),()=>{s=!0}},[e,r,t]),n}function re({page:e,matches:r,...t}){let n=A(),{future:a,manifest:s,routeModules:c}=x(),{matches:f}=q(),m=o.useMemo(()=>P(e,r,f,s,n,"data"),[e,r,f,s,n]),d=o.useMemo(()=>P(e,r,f,s,n,"assets"),[e,r,f,s,n]),i=o.useMemo(()=>j(e,m,s),[m,e,s]),l=o.useMemo(()=>G(d,s),[d,s]),h=te(d),p=null;if(!a.unstable_singleFetch)p=i.map(u=>o.createElement("link",v({key:u,rel:"prefetch",as:"fetch",href:u},t)));else if(m.length>0){let u=X(s,c,r.map(y=>y.route),m.map(y=>y.route),Q(e));u.searchParams.get("_routes")!==""&&(p=o.createElement("link",v({key:u.pathname+u.search,rel:"prefetch",as:"fetch",href:u.pathname+u.search},t)))}return o.createElement(o.Fragment,null,p,l.map(u=>o.createElement("link",v({key:u,rel:"modulepreload",href:u},t))),h.map(({key:u,link:y})=>o.createElement("link",v({key:u},y))))}function $(...e){return r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}const ne=I("font-sans text-p1 font-bold text-neutral-500 hover:text-primary-950",{variants:{active:{true:"text-neutral-950",false:""}},defaultVariants:{active:!1}}),ae=e=>{const{className:r,...t}=e;return F.jsx(C,{className:({isActive:n})=>H(ne({active:n}),r),...t})};ae.__docgenInfo={description:"",methods:[],displayName:"NavigationLink"};export{ee as L,ae as N};
