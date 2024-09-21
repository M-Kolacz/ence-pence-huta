import{r as o}from"./index-CleY8y_P.js";import{p as D,f as R,N,L as H,m as M,u as I,g as O,D as T,h as U}from"./index-D2H79pPL.js";/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},y.apply(this,arguments)}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function v(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function A(e,r){if(e.id in r)return r[e.id];try{let t=await import(e.module);return r[e.id]=t,t}catch{return window.__remixContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function K(e,r,t){let n=await Promise.all(e.map(async a=>{let s=await A(r.routes[a.route.id],t);return s.links?s.links():[]}));return J(n.flat(1).filter(B).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function P(e,r,t,n,a,s){let c=g(e),f=(u,l)=>t[l]?u.route.id!==t[l].route.id:!0,m=(u,l)=>{var h;return t[l].pathname!==u.pathname||((h=t[l].route.path)===null||h===void 0?void 0:h.endsWith("*"))&&t[l].params["*"]!==u.params["*"]};return s==="data"&&a.search!==c.search?r.filter((u,l)=>{if(!n.routes[u.route.id].hasLoader)return!1;if(f(u,l)||m(u,l))return!0;if(u.route.shouldRevalidate){var p;let i=u.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=t[0])===null||p===void 0?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof i=="boolean")return i}return!0}):r.filter((u,l)=>{let h=n.routes[u.route.id];return(s==="assets"||h.hasLoader)&&(f(u,l)||m(u,l))})}function z(e,r,t){let n=g(e);return k(r.filter(a=>t.routes[a.route.id].hasLoader).map(a=>{let{pathname:s,search:c}=n,f=new URLSearchParams(c);return f.set("_data",a.route.id),`${s}?${f}`}))}function Y(e,r){return k(e.map(t=>{let n=r.routes[t.route.id],a=[n.module];return n.imports&&(a=a.concat(n.imports)),a}).flat(1))}function k(e){return[...new Set(e)]}function G(e){let r={},t=Object.keys(e).sort();for(let n of t)r[n]=e[n];return r}function J(e,r){let t=new Set;return new Set(r),e.reduce((n,a)=>{let s=JSON.stringify(G(a));return t.has(s)||(t.add(s),n.push({key:s,link:a})),n},[])}function g(e){let r=D(e);return r.search===void 0&&(r.search=""),r}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function W(e,r,t,n,a){let s=d=>d.filter(u=>e.routes[u].hasLoader).join(",");if(!t.some(d=>{var u,l;return((u=r[d.id])===null||u===void 0?void 0:u.shouldRevalidate)||((l=e.routes[d.id])===null||l===void 0?void 0:l.hasClientLoader)}))return a;let f=s(t.map(d=>d.id)),m=s(n.filter(d=>{var u;return!((u=e.routes[d.id])!==null&&u!==void 0&&u.hasClientLoader)}).map(d=>d.id));return f!==m&&a.searchParams.set("_routes",m),a}function X(e){let r=typeof e=="string"?new URL(e,window.location.origin):e;return r.pathname=`${r.pathname==="/"?"_root":r.pathname}.data`,r}/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Q(){let e=o.useContext(T);return v(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function V(){let e=o.useContext(U);return v(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}const E=o.createContext(void 0);E.displayName="Remix";function S(){let e=o.useContext(E);return v(e,"You must render this element inside a <Remix> element"),e}function x(e,r){let[t,n]=o.useState(!1),[a,s]=o.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:m,onMouseLeave:d,onTouchStart:u}=r,l=o.useRef(null);o.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let i=_=>{_.forEach(b=>{s(b.isIntersecting)})},w=new IntersectionObserver(i,{threshold:.5});return l.current&&w.observe(l.current),()=>{w.disconnect()}}},[e]);let h=()=>{e==="intent"&&n(!0)},p=()=>{e==="intent"&&(n(!1),s(!1))};return o.useEffect(()=>{if(t){let i=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(i)}}},[t]),[a,l,{onFocus:L(c,h),onBlur:L(f,p),onMouseEnter:L(m,h),onMouseLeave:L(d,p),onTouchStart:L(u,h)}]}const C=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;let Z=o.forwardRef(({to:e,prefetch:r="none",...t},n)=>{let a=typeof e=="string"&&C.test(e),s=R(e),[c,f,m]=x(r,t);return o.createElement(o.Fragment,null,o.createElement(N,y({},t,m,{ref:F(n,f),to:e})),c&&!a?o.createElement($,{page:s}):null)});Z.displayName="NavLink";let j=o.forwardRef(({to:e,prefetch:r="none",...t},n)=>{let a=typeof e=="string"&&C.test(e),s=R(e),[c,f,m]=x(r,t);return o.createElement(o.Fragment,null,o.createElement(H,y({},t,m,{ref:F(n,f),to:e})),c&&!a?o.createElement($,{page:s}):null)});j.displayName="Link";function L(e,r){return t=>{e&&e(t),t.defaultPrevented||r(t)}}function $({page:e,...r}){let{router:t}=Q(),n=o.useMemo(()=>M(t.routes,e,t.basename),[t.routes,e,t.basename]);return n?o.createElement(ee,y({page:e,matches:n},r)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function q(e){let{manifest:r,routeModules:t}=S(),[n,a]=o.useState([]);return o.useEffect(()=>{let s=!1;return K(e,r,t).then(c=>{s||a(c)}),()=>{s=!0}},[e,r,t]),n}function ee({page:e,matches:r,...t}){let n=I(),{future:a,manifest:s,routeModules:c}=S(),{matches:f}=V(),m=o.useMemo(()=>P(e,r,f,s,n,"data"),[e,r,f,s,n]),d=o.useMemo(()=>P(e,r,f,s,n,"assets"),[e,r,f,s,n]),u=o.useMemo(()=>z(e,m,s),[m,e,s]),l=o.useMemo(()=>Y(d,s),[d,s]),h=q(d),p=null;if(!a.unstable_singleFetch)p=u.map(i=>o.createElement("link",y({key:i,rel:"prefetch",as:"fetch",href:i},t)));else if(m.length>0){let i=W(s,c,r.map(w=>w.route),m.map(w=>w.route),X(e));i.searchParams.get("_routes")!==""&&(p=o.createElement("link",y({key:i.pathname+i.search,rel:"prefetch",as:"fetch",href:i.pathname+i.search},t)))}return o.createElement(o.Fragment,null,p,l.map(i=>o.createElement("link",y({key:i,rel:"modulepreload",href:i},t))),h.map(({key:i,link:w})=>o.createElement("link",y({key:i},w))))}function ne(e={}){return O(e)}function F(...e){return r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}export{j as L,Z as N,ne as u};
