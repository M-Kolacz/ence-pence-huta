import{R as m,r as f}from"./index-CEThVCg_.js";import{c as U,R as W,a as z,u as T,b as Y,d as q,e as G}from"./index-Bd0nuzNA.js";import"./index-DRe9y7bH.js";const{makeDecorator:B,addons:w}=__STORYBOOK_MODULE_PREVIEW_API__;var y="storybook/react-router-v6",F="reactRouter",s={CLEAR:`${y}/clear`,NAVIGATION:`${y}/navigation`,STORY_LOADED:`${y}/story-loaded`,ROUTE_MATCHES:`${y}/route-matches`,ACTION_INVOKED:`${y}/action_invoked`,ACTION_SETTLED:`${y}/action_settled`,LOADER_INVOKED:`${y}/loader_invoked`,LOADER_SETTLED:`${y}/loader_settled`},I=m.createContext([]),C=m.createContext(void 0);function J(){let[t,r]=f.useState([]),e=z;return e.Provider._context=new Proxy(e.Provider._context??{},{set(a,n,i){return n==="_currentValue"&&i!==void 0&&r(o=>i.matches.length>o.length?i.matches:o),Reflect.set(a,n,i)}}),t}function Q(t){let r={};return t.forEach((e,a)=>{if(e instanceof File){r[a]={filename:e.name,filesize:e.size,filetype:e.type};return}r[a]=e}),r}async function P(t){let r=t.clone(),e=r.headers.get("content-type")||"",a;switch(!0){case e.startsWith("text"):a=await r.text();break;case e.startsWith("application/json"):a=await r.json();break;case e.startsWith("multipart/form-data"):case e.startsWith("application/x-www-form-urlencoded"):{a=Q(await r.formData());break}}return a}var L=()=>{let t=f.useRef(0);return f.useCallback(async(r,e)=>{t.current++;let a=`${r}_${t.current}`;switch(r){case s.ACTION_INVOKED:{let{request:n,params:i,context:o}=e,h={url:n.url,method:n.method,body:await P(n)};return{key:a,type:r,data:{params:i,request:h,context:o}}}case s.ACTION_SETTLED:return{key:a,type:r,data:e};case s.LOADER_INVOKED:{let{request:n,params:i,context:o}=e,h={url:n.url,method:n.method,body:await P(n)};return{key:a,type:r,data:{params:i,request:h,context:o}}}case s.LOADER_SETTLED:return{key:a,type:r,data:e}}},[])};function X(){let t=w.getChannel(),r=L();return f.useCallback(e=>async function(a){if(e===void 0)return;t.emit(s.ACTION_INVOKED,await r(s.ACTION_INVOKED,a));let n=await e(a);return t.emit(s.ACTION_SETTLED,await r(s.ACTION_SETTLED,n)),n},[t,r])}function Z(){let t=w.getChannel(),r=L();return f.useCallback(e=>async function(a){if(e===void 0)return;t.emit(s.LOADER_INVOKED,await r(s.LOADER_INVOKED,a));let n=await e(a);return t.emit(s.LOADER_SETTLED,await r(s.LOADER_SETTLED,n)),n},[t,r])}function tt(){let t=X(),r=Z(),e=f.useCallback(a=>a.map(n=>{let{action:i,loader:o,children:h,lazy:d}=n,u={...n};return d&&(u.lazy=async function(){let l=await d(),c={...l};return l.action&&(c.action=t(l.action)),l.loader&&(c.loader=r(l.loader)),c}),i&&(u.action=t(i)),o&&(u.loader=r(o)),h&&(u.children=e(h)),u}),[t,r]);return e}var x=()=>{let t=m.useContext(C);if(t===void 0)throw new Error("useStory should be used inside <StoryContext>");return t};function N(t,r,e=0){return t.length===1&&(t[0].children===void 0||t[0].children.length===0)?[{...t[0],element:r}]:t.findIndex(a=>a.useStoryElement)!==-1?t.map(a=>a.useStoryElement?{...a,element:r}:a):t.map(a=>a.children?{...a,children:N(a.children,r)}:a)}var S;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(S||(S={}));function et(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function rt(t,r){{typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}var A;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(A||(A={}));function _(t,r){r===void 0&&(r={});let e=t;e.endsWith("*")&&e!=="*"&&!e.endsWith("/*")&&(rt(!1,'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".')),e=e.replace(/\*$/,"/*"));let a=e.startsWith("/")?"/":"",n=o=>o==null?"":typeof o=="string"?o:String(o),i=e.split(/\/+/).map((o,h,d)=>{if(h===d.length-1&&o==="*")return n(r["*"]);let u=o.match(/^:([\w-]+)(\??)$/);if(u){let[,l,c]=u,E=r[l];return et(c==="?"||E!=null,'Missing ":'+l+'" param'),n(E)}return o.replace(/\?$/g,"")}).filter(o=>!!o);return a+i.join("/")}var b=["post","put","patch","delete"];new Set(b);var at=["get",...b];new Set(at);function nt({navigationHistory:t,location:r,routes:e}){if(t!==void 0){let l=[],c,E=Object.values(t);for(let g=0;g<E.length;g++){let{path:O,pathParams:R,searchParams:V,hash:H,state:K,isInitialLocation:M}=E[g];M&&(c=g);let D=v(e),j=(typeof O=="function"?O(D,R??{}):O)??D;l.push({pathname:_(j??"/",R),search:new URLSearchParams(V).toString(),hash:H,state:K})}return c??(c=l.length-1),{initialEntries:l,initialIndex:c}}let{path:a,pathParams:n,searchParams:i,hash:o,state:h}=r??{},d=v(e),u=(typeof a=="function"?a(d,n??{}):a)??d;return{initialEntries:[{pathname:_(u,n),search:new URLSearchParams(i).toString(),hash:o,state:h}],initialIndex:0}}function v(t=[],r="/"){if(t.length!==1)return r;let e=t[0],a=ot(r,e.path);return e.children===void 0||e.children.length===0?a:v(e.children,a)}function ot(t,r=""){let e=["","/"],a=t.split("/").filter(i=>!e.includes(i)),n=r.split("/").filter(i=>!e.includes(i));return"/"+[...a,...n].join("/")}function p(t,r){return Object.prototype.hasOwnProperty.call(t,r)}function it(t){return arguments.length===0?[]:Array.isArray(t)?t:[t]}function lt(t){var r;return t===void 0?[{path:"/"}]:typeof t=="string"?[{path:t}]:(t=it(t),t.length===1&&((r=t[0]).path??(r.path="/")),t)}var k=()=>m.useContext(I);function st(t){let r={};return t.forEach((e,a)=>{let n=r[a];if(typeof n=="string"){r[a]=[n,e];return}if(Array.isArray(n)){r[a]=[...n,e];return}r[a]=e}),r}var ut=()=>{let t=T(),r=t.pathname;return t.search.length>0&&(r+=`?${t.search}`),t.hash.length>0&&(r+=`#${t.hash}`),r},ct=()=>{let t=f.useRef(0),r=T(),e=Y(),[a]=q(),n=G(),i=k(),o=st(a),h=ut(),d=i.map(l=>{let c={path:l.route.path};return Object.keys(l.params).length>0&&(c.params=l.params),c}),u={url:h,path:r.pathname,routeParams:e,searchParams:o,hash:r.hash,routeState:r.state,routeMatches:d};return l=>{t.current++;let c=`${l}_${t.current}`;switch(l){case s.STORY_LOADED:return{key:c,type:l,data:u};case s.NAVIGATION:return{key:c,type:l,data:{...u,navigationType:n}};case s.ROUTE_MATCHES:return{key:c,type:l,data:{matches:d}}}}};function $(){let{renderStory:t,storyContext:r}=x(),e=w.getChannel(),a=T(),n=k(),i=ct(),o=f.useRef(),h=f.useRef(),d=f.useRef(),u=o.current!==void 0,l=u&&a.key!==o.current;return l&&h.current!==a.key&&(e.emit(s.NAVIGATION,i(s.NAVIGATION)),h.current=a.key),l&&n.length>0&&n!==d.current&&e.emit(s.ROUTE_MATCHES,i(s.ROUTE_MATCHES)),!u&&n.length>0&&(e.emit(s.STORY_LOADED,i(s.STORY_LOADED)),o.current=a.key,d.current=n),d.current=n,m.createElement(m.Fragment,null,t(r))}$.displayName="RouterLogger";function ht(){let{addonParameters:t={}}=x(),{hydrationData:r,routing:e,navigationHistory:a,location:n}=t,i=tt(),o=f.useMemo(()=>{let h=lt(e),d=i(h),u=N(d,m.createElement($,null)),{initialEntries:l,initialIndex:c}=nt({navigationHistory:a,location:n,routes:u});return U(u,{initialEntries:l,initialIndex:c,hydrationData:r})},[i,r,n,a,e]);return m.createElement(W,{router:o,fallbackElement:m.createElement(dt,null)})}function dt(){return m.createElement("p",null,"Performing initial data load")}var mt=({renderStory:t,storyContext:r,addonParameters:e})=>{let a=J();return m.createElement(C.Provider,{value:{renderStory:t,storyContext:r,addonParameters:e}},m.createElement(I.Provider,{value:a},m.createElement(ht,null)))};function pt(t){if(m.isValidElement(t))return!0;switch(!0){case m.isValidElement(t):case typeof t=="string":case typeof t=="number":case typeof t=="boolean":case t===null:case t===void 0:case(t instanceof Object&&p(t,Symbol.iterator)):return!0}return!1}function ft(t){return pt(t)?{element:t}:t}function yt(t={}){let r=["location","navigationHistory","routing"];if(Object.keys(t??{}).some(a=>r.includes(a)))return t;let e={routing:{},location:{},hydrationData:void 0};if(p(t,"routePath")&&(e.location.path=t.routePath,e.routing.path=t.routePath),p(t,"routeParams")&&(e.location.pathParams=t.routeParams),p(t,"routeState")&&(e.location.state=t.routeState),p(t,"routeHandle")&&(e.routing.handle=t.routeHandle),p(t,"searchParams")&&(e.location.searchParams=t.searchParams),p(t,"browserPath")&&(e.location.path=t.browserPath),p(t,"loader")&&(e.routing.loader=t.loader),p(t,"action")&&(e.routing.action=t.action),p(t,"errorElement")&&(e.routing.errorElement=t.errorElement),p(t,"hydrationData")&&(e.hydrationData=t.hydrationData),p(t,"shouldRevalidate")&&(e.routing.shouldRevalidate=t.shouldRevalidate),p(t,"routeId")&&(e.routing.id=t.routeId),p(t,"outlet")){let a=ft(t.outlet);a.path??(a.path=""),e.routing.children=[a]}return e.routing.useStoryElement=!0,e}var Et=B({name:"withRouter",parameterName:F,wrapper:(t,r,{parameters:e})=>{let a=yt(e);return m.createElement(mt,{renderStory:t,storyContext:r,addonParameters:a})}});const Tt={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[Et]};export{Tt as default};
