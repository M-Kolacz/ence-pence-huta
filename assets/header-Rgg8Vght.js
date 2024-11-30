import{j as b}from"./jsx-runtime-CGpYA4L6.js";import{R as r,r as F}from"./index-CleY8y_P.js";import{L as We,n as Be}from"./Logo-BsIrmi8u.js";import{$ as Et,a as St,b as Tt,c as Rt,d as $t,e as Nt,f as Ot,g as Ct}from"./index-D_gScRAs.js";import{c as le}from"./misc-opz8xCVi.js";import{B as me}from"./button-BHZWfFOt.js";import{I as Se}from"./icon-Du6O1_GD.js";import{L as jt}from"./components-C3aYRwzD.js";import{N as At}from"./navigation-link-DiABlst_.js";function It(e){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}const Ge=r.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,handleOnly:!1,isOpen:!1,isDragging:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{},direction:"bottom"}),ge=()=>{const e=r.useContext(Ge);if(!e)throw new Error("useDrawerContext must be used within a Drawer.Root");return e};It("[vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-handle]{display:block;position:relative;opacity:.8;margin-left:auto;margin-right:auto;height:5px;width:56px;border-radius:1rem;touch-action:pan-y;cursor:grab}[vaul-handle]:active,[vaul-handle]:hover{opacity:1}[vaul-handle]:active{cursor:grabbing}[vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]){opacity:1}@media (hover:hover) and (pointer:fine){[vaul-drawer]{user-select:none}}@media (pointer:fine){[vaul-handle-hitarea]:{width:100%;height:100%}}");const Ht=typeof window<"u"?F.useLayoutEffect:F.useEffect;function Ne(...e){return(...n)=>{for(let t of e)typeof t=="function"&&t(...n)}}function Mt(){return Ce(/^Mac/)}function Pt(){return Ce(/^iPhone/)}function Lt(){return Ce(/^iPad/)||Mt()&&navigator.maxTouchPoints>1}function Ke(){return Pt()||Lt()}function Ce(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.platform):void 0}const Te=typeof document<"u"&&window.visualViewport;function Ye(e){let n=window.getComputedStyle(e);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function Je(e){for(Ye(e)&&(e=e.parentElement);e&&!Ye(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}const _t=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let he=0,Re;function Ut(e={}){let{isDisabled:n}=e;Ht(()=>{if(!n)return he++,he===1&&(Ke()?Re=kt():Re=Vt()),()=>{he--,he===0&&Re()}},[n])}function Vt(){return Ne(Qe(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`))}function kt(){let e,n=0,t=w=>{e=Je(w.target),!(e===document.documentElement&&e===document.body)&&(n=w.changedTouches[0].pageY)},a=w=>{if(!e||e===document.documentElement||e===document.body){w.preventDefault();return}let f=w.changedTouches[0].pageY,c=e.scrollTop,H=e.scrollHeight-e.clientHeight;H!==0&&((c<=0&&f>n||c>=H&&f<n)&&w.preventDefault(),n=f)},i=w=>{let f=w.target;Oe(f)&&f!==document.activeElement&&(w.preventDefault(),f.style.transform="translateY(-2000px)",f.focus(),requestAnimationFrame(()=>{f.style.transform=""}))},l=w=>{let f=w.target;Oe(f)&&(f.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{f.style.transform="",Te&&(Te.height<window.innerHeight?requestAnimationFrame(()=>{Fe(f)}):Te.addEventListener("resize",()=>Fe(f),{once:!0}))}))},u=()=>{window.scrollTo(0,0)},h=window.pageXOffset,x=window.pageYOffset,T=Ne(Qe(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`));window.scrollTo(0,0);let A=Ne(ie(document,"touchstart",t,{passive:!1,capture:!0}),ie(document,"touchmove",a,{passive:!1,capture:!0}),ie(document,"touchend",i,{passive:!1,capture:!0}),ie(document,"focus",l,!0),ie(window,"scroll",u));return()=>{T(),A(),window.scrollTo(h,x)}}function Qe(e,n,t){let a=e.style[n];return e.style[n]=t,()=>{e.style[n]=a}}function ie(e,n,t,a){return e.addEventListener(n,t,a),()=>{e.removeEventListener(n,t,a)}}function Fe(e){let n=document.scrollingElement||document.documentElement;for(;e&&e!==n;){let t=Je(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let a=t.getBoundingClientRect().top,i=e.getBoundingClientRect().top,l=e.getBoundingClientRect().bottom;const u=t.getBoundingClientRect().bottom;l>u&&(t.scrollTop+=i-a)}e=t.parentElement}}function Oe(e){return e instanceof HTMLInputElement&&!_t.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function zt(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function Wt(...e){return n=>e.forEach(t=>zt(t,n))}function Ze(...e){return F.useCallback(Wt(...e),e)}let ae=null;function Bt({isOpen:e,modal:n,nested:t,hasBeenOpened:a,preventScrollRestoration:i,noBodyStyles:l}){const[u,h]=r.useState(()=>typeof window<"u"?window.location.href:""),x=r.useRef(0),T=r.useCallback(()=>{if(ae===null&&e&&!l){ae={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height,right:"unset"};const{scrollX:w,innerHeight:f}=window;document.body.style.setProperty("position","fixed","important"),Object.assign(document.body.style,{top:`${-x.current}px`,left:`${-w}px`,right:"0px",height:"auto"}),window.setTimeout(()=>window.requestAnimationFrame(()=>{const c=f-window.innerHeight;c&&x.current>=f&&(document.body.style.top=`${-(x.current+c)}px`)}),300)}},[e]),A=r.useCallback(()=>{if(ae!==null&&!l){const w=-parseInt(document.body.style.top,10),f=-parseInt(document.body.style.left,10);Object.assign(document.body.style,ae),window.requestAnimationFrame(()=>{if(i&&u!==window.location.href){h(window.location.href);return}window.scrollTo(f,w)}),ae=null}},[u]);return r.useEffect(()=>{function w(){x.current=window.scrollY}return w(),window.addEventListener("scroll",w),()=>{window.removeEventListener("scroll",w)}},[]),r.useEffect(()=>{t||!a||(e?(!window.matchMedia("(display-mode: standalone)").matches&&T(),n||window.setTimeout(()=>{A()},500)):A())},[e,a,u,n,t,T,A]),{restorePositionSetting:A}}const et=new WeakMap;function E(e,n,t=!1){if(!e||!(e instanceof HTMLElement))return;let a={};Object.entries(n).forEach(([i,l])=>{if(i.startsWith("--")){e.style.setProperty(i,l);return}a[i]=e.style[i],e.style[i]=l}),!t&&et.set(e,a)}function pe(e,n){if(!e||!(e instanceof HTMLElement))return;let t=et.get(e);t&&(n?e.style[n]=t[n]:Object.entries(t).forEach(([a,i])=>{e.style[a]=i}))}const j=e=>{switch(e){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return e}};function we(e,n){if(!e)return null;const t=window.getComputedStyle(e),a=t.transform||t.webkitTransform||t.mozTransform;let i=a.match(/^matrix3d\((.+)\)$/);return i?parseFloat(i[1].split(", ")[j(n)?13:12]):(i=a.match(/^matrix\((.+)\)$/),i?parseFloat(i[1].split(", ")[j(n)?5:4]):null)}function Yt(e){return 8*(Math.log(e+1)-2)}const D={DURATION:.5,EASE:[.32,.72,0,1]},tt=.4;function nt(e){const n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...t)=>n.current==null?void 0:n.current.call(n,...t),[])}function Ft({defaultProp:e,onChange:n}){const t=r.useState(e),[a]=t,i=r.useRef(a),l=nt(n);return r.useEffect(()=>{i.current!==a&&(l(a),i.current=a)},[a,i,l]),t}function Xt({prop:e,defaultProp:n,onChange:t=()=>{}}){const[a,i]=Ft({defaultProp:n,onChange:t}),l=e!==void 0,u=l?e:a,h=nt(t),x=r.useCallback(T=>{if(l){const w=typeof T=="function"?T(e):T;w!==e&&h(w)}else i(T)},[l,e,i,h]);return[u,x]}function qt({activeSnapPointProp:e,setActiveSnapPointProp:n,snapPoints:t,drawerRef:a,overlayRef:i,fadeFromIndex:l,onSnapPointChange:u,direction:h="bottom"}){const[x,T]=Xt({prop:e,defaultProp:t==null?void 0:t[0],onChange:n}),A=r.useMemo(()=>x===(t==null?void 0:t[t.length-1])||null,[t,x]),w=t&&t.length>0&&(l||l===0)&&!Number.isNaN(l)&&t[l]===x||!t,f=r.useMemo(()=>t==null?void 0:t.findIndex(v=>v===x),[t,x]),c=r.useMemo(()=>{var v;return(v=t==null?void 0:t.map(o=>{const y=typeof window<"u",N=typeof o=="string";let O=0;if(N&&(O=parseInt(o,10)),j(h)){const d=N?O:y?o*window.innerHeight:0;return y?h==="bottom"?window.innerHeight-d:-window.innerHeight+d:d}const R=N?O:y?o*window.innerWidth:0;return y?h==="right"?window.innerWidth-R:-window.innerWidth+R:R}))!=null?v:[]},[t]),H=r.useMemo(()=>f!==null?c==null?void 0:c[f]:null,[c,f]),I=r.useCallback(v=>{var o;const y=(o=c==null?void 0:c.findIndex(N=>N===v))!=null?o:null;u(y),E(a.current,{transition:`transform ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`,transform:j(h)?`translate3d(0, ${v}px, 0)`:`translate3d(${v}px, 0, 0)`}),c&&y!==c.length-1&&y!==l?E(i.current,{transition:`opacity ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`,opacity:"0"}):E(i.current,{transition:`opacity ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`,opacity:"1"}),T(y!==null?t==null?void 0:t[y]:null)},[a.current,t,c,l,i,T]);r.useEffect(()=>{if(x||e){var v;const o=(v=t==null?void 0:t.findIndex(y=>y===e||y===x))!=null?v:-1;c&&o!==-1&&typeof c[o]=="number"&&I(c[o])}},[x,e,t,c,I]);function X({draggedDistance:v,closeDrawer:o,velocity:y,dismissible:N}){if(l===void 0)return;const O=h==="bottom"||h==="right"?(H??0)-v:(H??0)+v,R=f===l-1,d=f===0,M=v>0;if(R&&E(i.current,{transition:`opacity ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`}),y>2&&!M){N?o():I(c[0]);return}if(y>2&&M&&c&&t){I(c[t.length-1]);return}const k=c==null?void 0:c.reduce((P,W)=>typeof P!="number"||typeof W!="number"?P:Math.abs(W-O)<Math.abs(P-O)?W:P),L=j(h)?window.innerHeight:window.innerWidth;if(y>tt&&Math.abs(v)<L*.4){const P=M?1:-1;if(P>0&&A){I(c[t.length-1]);return}if(d&&P<0&&N&&o(),f===null)return;I(c[f+P]);return}I(k)}function U({draggedDistance:v}){if(H===null)return;const o=h==="bottom"||h==="right"?H-v:H+v;(h==="bottom"||h==="right")&&o<c[c.length-1]||(h==="top"||h==="left")&&o>c[c.length-1]||E(a.current,{transform:j(h)?`translate3d(0, ${o}px, 0)`:`translate3d(${o}px, 0, 0)`})}function B(v,o){if(!t||typeof f!="number"||!c||l===void 0)return null;const y=f===l-1;if(f>=l&&o)return 0;if(y&&!o)return 1;if(!w&&!y)return null;const O=y?f+1:f-1,R=y?c[O]-c[O-1]:c[O+1]-c[O],d=v/Math.abs(R);return y?1-d:d}return{isLastSnapPoint:A,activeSnapPoint:x,shouldFade:w,getPercentageDragged:B,setActiveSnapPoint:T,activeSnapPointIndex:f,onRelease:X,onDrag:U,snapPointsOffset:c}}const Gt=.25,Kt=100,Xe=8,J=16,qe=26,$e="vaul-dragging";function rt({open:e,onOpenChange:n,children:t,shouldScaleBackground:a,onDrag:i,onRelease:l,snapPoints:u,nested:h=!1,setBackgroundColorOnScale:x=!0,closeThreshold:T=Gt,scrollLockTimeout:A=Kt,dismissible:w=!0,handleOnly:f=!1,fadeFromIndex:c=u&&u.length-1,activeSnapPoint:H,setActiveSnapPoint:I,fixed:X,modal:U=!0,onClose:B,noBodyStyles:v,direction:o="bottom",preventScrollRestoration:y=!0,disablePreventScroll:N=!1}){var O;const[R=!1,d]=r.useState(!1),[M,k]=r.useState(!1),[L,P]=r.useState(!1),[W,se]=r.useState(!1),[q,ve]=r.useState(!1),[ut,Me]=r.useState(!1),G=r.useRef(null),ue=r.useRef(null),be=r.useRef(null),ye=r.useRef(null),te=r.useRef(null),ne=r.useRef(!1),xe=r.useRef(null),De=r.useRef(0),Q=r.useRef(!1),Pe=r.useRef(0),m=r.useRef(null),Le=r.useRef(((O=m.current)==null?void 0:O.getBoundingClientRect().height)||0),Ee=r.useRef(0),ct=r.useCallback(s=>{u&&s===oe.length-1&&(ue.current=new Date)},[]),{activeSnapPoint:dt,activeSnapPointIndex:re,setActiveSnapPoint:_e,onRelease:ft,snapPointsOffset:oe,onDrag:mt,shouldFade:Ue,getPercentageDragged:ht}=qt({snapPoints:u,activeSnapPointProp:H,setActiveSnapPointProp:I,drawerRef:m,fadeFromIndex:c,overlayRef:G,onSnapPointChange:ct,direction:o});Ut({isDisabled:!R||q||!U||ut||!M||N});const{restorePositionSetting:pt}=Bt({isOpen:R,modal:U,nested:h,hasBeenOpened:M,preventScrollRestoration:y,noBodyStyles:v});function Z(){return(window.innerWidth-qe)/window.innerWidth}function wt(s){var p;!w&&!u||m.current&&!m.current.contains(s.target)||(Le.current=((p=m.current)==null?void 0:p.getBoundingClientRect().height)||0,ve(!0),be.current=new Date,Ke()&&window.addEventListener("touchend",()=>ne.current=!1,{once:!0}),s.target.setPointerCapture(s.pointerId),De.current=j(o)?s.clientY:s.clientX)}function Ve(s,p){var S;let g=s;const $=(S=window.getSelection())==null?void 0:S.toString(),C=m.current?we(m.current,o):null,_=new Date;if(g.hasAttribute("data-vaul-no-drag")||g.closest("[data-vaul-no-drag]"))return!1;if(o==="right"||o==="left")return!0;if(ue.current&&_.getTime()-ue.current.getTime()<500)return!1;if(C!==null&&(o==="bottom"?C>0:C<0))return!0;if($&&$.length>0)return!1;if(te.current&&_.getTime()-te.current.getTime()<A&&C===0||p)return te.current=_,!1;for(;g;){if(g.scrollHeight>g.clientHeight){if(g.scrollTop!==0)return te.current=new Date,!1;if(g.getAttribute("role")==="dialog")return!0}g=g.parentNode}return!0}function gt(s){if(m.current&&q){const p=o==="bottom"||o==="right"?1:-1,S=(De.current-(j(o)?s.clientY:s.clientX))*p,g=S>0,$=u&&!w&&!g;if($&&re===0)return;const C=Math.abs(S),_=document.querySelector("[vaul-drawer-wrapper]");let z=C/Le.current;const Y=ht(C,g);if(Y!==null&&(z=Y),$&&z>=1||!ne.current&&!Ve(s.target,g))return;if(m.current.classList.add($e),ne.current=!0,E(m.current,{transition:"none"}),E(G.current,{transition:"none"}),u&&mt({draggedDistance:S}),g&&!u){const K=Yt(S),fe=Math.min(K*-1,0)*p;E(m.current,{transform:j(o)?`translate3d(0, ${fe}px, 0)`:`translate3d(${fe}px, 0, 0)`});return}const de=1-z;if((Ue||c&&re===c-1)&&(i==null||i(s,z),E(G.current,{opacity:`${de}`,transition:"none"},!0)),_&&G.current&&a){const K=Math.min(Z()+z*(1-Z()),1),fe=8-z*8,ze=Math.max(0,14-z*14);E(_,{borderRadius:`${fe}px`,transform:j(o)?`scale(${K}) translate3d(0, ${ze}px, 0)`:`scale(${K}) translate3d(${ze}px, 0, 0)`,transition:"none"},!0)}if(!u){const K=C*p;E(m.current,{transform:j(o)?`translate3d(0, ${K}px, 0)`:`translate3d(${K}px, 0, 0)`})}}}r.useEffect(()=>()=>{ce(!1),pt()},[]),r.useEffect(()=>{var s;function p(){if(!m.current)return;const S=document.activeElement;if(Oe(S)||Q.current){var g;const $=((g=window.visualViewport)==null?void 0:g.height)||0;let C=window.innerHeight-$;const _=m.current.getBoundingClientRect().height||0;Ee.current||(Ee.current=_);const z=m.current.getBoundingClientRect().top;if(Math.abs(Pe.current-C)>60&&(Q.current=!Q.current),u&&u.length>0&&oe&&re){const Y=oe[re]||0;C+=Y}if(Pe.current=C,_>$||Q.current){const Y=m.current.getBoundingClientRect().height;let de=Y;Y>$&&(de=$-qe),X?m.current.style.height=`${Y-Math.max(C,0)}px`:m.current.style.height=`${Math.max(de,$-z)}px`}else m.current.style.height=`${Ee.current}px`;u&&u.length>0&&!Q.current?m.current.style.bottom="0px":m.current.style.bottom=`${Math.max(C,0)}px`}}return(s=window.visualViewport)==null||s.addEventListener("resize",p),()=>{var S;return(S=window.visualViewport)==null?void 0:S.removeEventListener("resize",p)}},[re,u,oe]);function ee(){m.current&&(vt(),B==null||B(),E(m.current,{transform:j(o)?`translate3d(0, ${o==="bottom"?"100%":"-100%"}, 0)`:`translate3d(${o==="right"?"100%":"-100%"}, 0, 0)`,transition:`transform ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`}),E(G.current,{opacity:"0",transition:`opacity ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`}),ce(!1),setTimeout(()=>{P(!1),d(!1)},300),setTimeout(()=>{u&&_e(u[0])},D.DURATION*1e3))}r.useEffect(()=>{if(!R&&a){const s=setTimeout(()=>{pe(document.body)},200);return()=>clearTimeout(s)}},[R,a]),r.useLayoutEffect(()=>{e?(d(!0),k(!0)):ee()},[e]),r.useEffect(()=>{W&&(n==null||n(R))},[R]),r.useEffect(()=>{se(!0)},[]);function ke(){if(!m.current)return;const s=document.querySelector("[vaul-drawer-wrapper]"),p=we(m.current,o);E(m.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`}),E(G.current,{transition:`opacity ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`,opacity:"1"}),a&&p&&p>0&&R&&E(s,{borderRadius:`${Xe}px`,overflow:"hidden",...j(o)?{transform:`scale(${Z()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${Z()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${D.DURATION}s`,transitionTimingFunction:`cubic-bezier(${D.EASE.join(",")})`},!0)}function vt(){!q||!m.current||(m.current.classList.remove($e),ne.current=!1,ve(!1),ye.current=new Date)}function bt(s){if(!q||!m.current)return;m.current.classList.remove($e),ne.current=!1,ve(!1),ye.current=new Date;const p=we(m.current,o);if(!Ve(s.target,!1)||!p||Number.isNaN(p)||be.current===null)return;const S=ye.current.getTime()-be.current.getTime(),g=De.current-(j(o)?s.clientY:s.clientX),$=Math.abs(g)/S;if($>.05&&(Me(!0),setTimeout(()=>{Me(!1)},200)),u){ft({draggedDistance:g*(o==="bottom"||o==="right"?1:-1),closeDrawer:ee,velocity:$,dismissible:w}),l==null||l(s,!0);return}if(o==="bottom"||o==="right"?g>0:g<0){ke(),l==null||l(s,!0);return}if($>tt){ee(),l==null||l(s,!1);return}var C;const _=Math.min((C=m.current.getBoundingClientRect().height)!=null?C:0,window.innerHeight);if(p>=_*T){ee(),l==null||l(s,!1);return}l==null||l(s,!0),ke()}r.useEffect(()=>{R&&(E(document.documentElement,{scrollBehavior:"auto"}),ue.current=new Date,ce(!0))},[R]),r.useEffect(()=>{if(m.current&&L){var s;const p=m==null||(s=m.current)==null?void 0:s.querySelectorAll("*");p==null||p.forEach(S=>{const g=S;(g.scrollHeight>g.clientHeight||g.scrollWidth>g.clientWidth)&&g.classList.add("vaul-scrollable")})}},[L]);function ce(s){const p=document.querySelector("[vaul-drawer-wrapper]");!p||!a||(s?(x&&(v||(E(document.body,{background:document.body.style.backgroundColor||document.body.style.background}),E(document.body,{background:"black"},!0))),E(p,{borderRadius:`${Xe}px`,overflow:"hidden",...j(o)?{transform:`scale(${Z()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${Z()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${D.DURATION}s`,transitionTimingFunction:`cubic-bezier(${D.EASE.join(",")})`})):(pe(p,"overflow"),pe(p,"transform"),pe(p,"borderRadius"),E(p,{transitionProperty:"transform, border-radius",transitionDuration:`${D.DURATION}s`,transitionTimingFunction:`cubic-bezier(${D.EASE.join(",")})`})))}function yt(s){const p=s?(window.innerWidth-J)/window.innerWidth:1,S=s?-J:0;xe.current&&window.clearTimeout(xe.current),E(m.current,{transition:`transform ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`,transform:`scale(${p}) translate3d(0, ${S}px, 0)`}),!s&&m.current&&(xe.current=setTimeout(()=>{const g=we(m.current,o);E(m.current,{transition:"none",transform:j(o)?`translate3d(0, ${g}px, 0)`:`translate3d(${g}px, 0, 0)`})},500))}function xt(s,p){if(p<0)return;const S=j(o)?window.innerHeight:window.innerWidth,g=(S-J)/S,$=g+p*(1-g),C=-J+p*J;E(m.current,{transform:j(o)?`scale(${$}) translate3d(0, ${C}px, 0)`:`scale(${$}) translate3d(${C}px, 0, 0)`,transition:"none"})}function Dt(s,p){const S=j(o)?window.innerHeight:window.innerWidth,g=p?(S-J)/S:1,$=p?-J:0;p&&E(m.current,{transition:`transform ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`,transform:j(o)?`scale(${g}) translate3d(0, ${$}px, 0)`:`scale(${g}) translate3d(${$}px, 0, 0)`})}return r.createElement(Ct,{modal:U,onOpenChange:s=>{if(e!==void 0){n==null||n(s);return}s?(k(!0),d(s)):ee()},open:R},r.createElement(Ge.Provider,{value:{visible:L,activeSnapPoint:dt,snapPoints:u,setActiveSnapPoint:_e,drawerRef:m,overlayRef:G,scaleBackground:ce,onOpenChange:n,onPress:wt,setVisible:P,onRelease:bt,onDrag:gt,dismissible:w,handleOnly:f,isOpen:R,isDragging:q,shouldFade:Ue,closeDrawer:ee,onNestedDrag:xt,onNestedOpenChange:yt,onNestedRelease:Dt,keyboardIsOpen:Q,openProp:e,modal:U,snapPointsOffset:oe,direction:o}},t))}const Jt=250,Qt=120,ot=r.forwardRef(function({preventCycle:e=!1,children:n,...t},a){const{visible:i,closeDrawer:l,isDragging:u,snapPoints:h,activeSnapPoint:x,setActiveSnapPoint:T,dismissible:A,handleOnly:w,onPress:f,onDrag:c}=ge(),H=r.useRef(null),I=r.useRef(!1);function X(){if(I.current){v();return}window.setTimeout(()=>{U()},Qt)}function U(){if(u||e||I.current){v();return}if(v(),(!h||h.length===0)&&A){l();return}if(x===h[h.length-1]&&A){l();return}const y=h.findIndex(O=>O===x);if(y===-1)return;const N=h[y+1];T(N)}function B(){H.current=window.setTimeout(()=>{I.current=!0},Jt)}function v(){window.clearTimeout(H.current),I.current=!1}return r.createElement("div",{onClick:X,onDoubleClick:()=>{I.current=!0,l()},onPointerCancel:v,onPointerDown:o=>{w&&f(o),B()},onPointerMove:o=>{w&&c(o)},ref:a,"vaul-drawer-visible":i?"true":"false","vaul-handle":"","aria-hidden":"true",...t},r.createElement("span",{"vaul-handle-hitarea":"","aria-hidden":"true"},n))});ot.displayName="Drawer.Handle";const it=r.forwardRef(function({children:e,...n},t){const{overlayRef:a,snapPoints:i,onRelease:l,shouldFade:u,isOpen:h,visible:x}=ge(),T=Ze(t,a),A=i&&i.length>0;return r.createElement(Et,{onMouseUp:l,ref:T,"vaul-drawer-visible":x?"true":"false","vaul-overlay":"","vaul-snap-points":h&&A?"true":"false","vaul-snap-points-overlay":h&&u?"true":"false",...n})});it.displayName="Drawer.Overlay";const at=r.forwardRef(function({onOpenAutoFocus:e,onPointerDownOutside:n,onAnimationEnd:t,style:a,...i},l){const{drawerRef:u,onPress:h,onRelease:x,onDrag:T,dismissible:A,keyboardIsOpen:w,snapPointsOffset:f,visible:c,closeDrawer:H,modal:I,openProp:X,onOpenChange:U,setVisible:B,handleOnly:v,direction:o}=ge(),y=Ze(l,u),N=r.useRef(null),O=r.useRef(!1),R=(d,M,k=0)=>{if(O.current)return!0;const L=Math.abs(d.y),P=Math.abs(d.x),W=P>L,se=["bottom","right"].includes(M)?1:-1;if(M==="left"||M==="right"){if(!(d.x*se<0)&&P>=0&&P<=k)return W}else if(!(d.y*se<0)&&L>=0&&L<=k)return!W;return O.current=!0,!0};return r.useEffect(()=>{B(!0)},[]),r.createElement(St,{"vaul-drawer":"","vaul-drawer-direction":o,"vaul-drawer-visible":c?"true":"false",...i,ref:y,style:f&&f.length>0?{"--snap-point-height":`${f[0]}px`,...a}:a,onOpenAutoFocus:d=>{if(e)e(d);else{var M;d.preventDefault(),(M=u.current)==null||M.focus()}},onPointerDown:d=>{v||(i.onPointerDown==null||i.onPointerDown.call(i,d),N.current={x:d.clientX,y:d.clientY},h(d))},onPointerDownOutside:d=>{if(n==null||n(d),!I||d.defaultPrevented){d.preventDefault();return}w.current&&(w.current=!1),d.preventDefault(),U==null||U(!1),!(!A||X!==void 0)&&H()},onFocusOutside:d=>{if(!I){d.preventDefault();return}},onEscapeKeyDown:d=>{if(!I){d.preventDefault();return}},onPointerMove:d=>{if(v||(i.onPointerMove==null||i.onPointerMove.call(i,d),!N.current))return;const M=d.clientY-N.current.y,k=d.clientX-N.current.x,L=d.pointerType==="touch"?10:2;R({x:k,y:M},o,L)?T(d):(Math.abs(k)>L||Math.abs(M)>L)&&(N.current=null)},onPointerUp:d=>{i.onPointerUp==null||i.onPointerUp.call(i,d),N.current=null,O.current=!1,x(d)}})});at.displayName="Drawer.Content";function Zt({onDrag:e,onOpenChange:n,...t}){const{onNestedDrag:a,onNestedOpenChange:i,onNestedRelease:l}=ge();if(!a)throw new Error("Drawer.NestedRoot must be placed in another drawer");return r.createElement(rt,{nested:!0,onClose:()=>{i(!1)},onDrag:(u,h)=>{a(u,h),e==null||e(u,h)},onOpenChange:u=>{u&&i(u),n==null||n(u)},onRelease:l,...t})}const V={Root:rt,NestedRoot:Zt,Content:at,Handle:ot,Overlay:it,Trigger:Tt,Portal:Rt,Close:$t,Title:Nt,Description:Ot},je=({shouldScaleBackground:e=!0,...n})=>b.jsx(V.Root,{shouldScaleBackground:e,...n});je.displayName="Drawer";const en=V.Trigger,tn=V.Portal,nn=V.Close,Ae=F.forwardRef(({className:e,...n},t)=>b.jsx(V.Overlay,{ref:t,className:le("fixed inset-0 z-50 bg-neutral-950/80",e),...n}));Ae.displayName=V.Overlay.displayName;const Ie=F.forwardRef(({className:e,children:n,...t},a)=>b.jsxs(tn,{children:[b.jsx(Ae,{}),b.jsx(V.Content,{ref:a,className:le("bg-white fixed bottom-0 right-0 z-50 mt-24 flex h-full w-[75%] flex-col border bg-background",e),...t,children:n})]}));Ie.displayName="DrawerContent";const He=({className:e,...n})=>b.jsx("div",{className:le("grid gap-1.5 text-center sm:text-left",e),...n});He.displayName="DrawerHeader";const lt=F.forwardRef(({className:e,...n},t)=>b.jsx(V.Title,{ref:t,className:le("font-semibold leading-none text-lg tracking-tight",e),...n}));lt.displayName=V.Title.displayName;const st=F.forwardRef(({className:e,...n},t)=>b.jsx(V.Description,{ref:t,className:le("text-sm text-muted-foreground",e),...n}));st.displayName=V.Description.displayName;je.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{shouldScaleBackground:{defaultValue:{value:"true",computed:!1},required:!1}}};Ae.__docgenInfo={description:"",methods:[]};Ie.__docgenInfo={description:"",methods:[],displayName:"DrawerContent"};He.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader"};lt.__docgenInfo={description:"",methods:[]};st.__docgenInfo={description:"",methods:[]};const rn=()=>{const[e,n]=F.useState(!1);return b.jsxs("header",{className:"col-span-full flex items-center justify-between",children:[b.jsx("img",{src:We,alt:"Ence Pence Nowa Huta",className:"md:h-[121px] md:w-[150px]"}),b.jsxs(je,{open:e,onOpenChange:n,direction:"right",children:[b.jsx(en,{asChild:!0,children:b.jsx(me,{size:"icon",variant:"outline",className:"visible md:hidden",title:"Nawigacja strony",children:b.jsx(Se,{name:"add"})})}),b.jsxs(Ie,{className:"flex flex-col gap-section p-app outline-none",children:[b.jsxs(He,{className:"flex items-center justify-between",children:[b.jsx("img",{src:We,alt:"Ence Pence Nowa Huta",className:"md:h-[121px] md:w-[150px]"}),b.jsx(nn,{asChild:!0,children:b.jsx(me,{size:"icon",variant:"outline",title:"Nawigacja strony",children:b.jsx(Se,{name:"cancel"})})})]}),b.jsx("ul",{className:"flex flex-col gap-base",children:Be.map(t=>b.jsx("li",{className:"w-full",children:b.jsxs(me,{variant:"secondary",className:"w-full justify-start text-left",children:[b.jsx(Se,{name:t.icon,className:"mr-2.5"}),t.children]})},t.to))})]})]}),b.jsx("nav",{className:"hidden md:block","aria-label":"Nawigacja strony",children:b.jsx("ul",{className:"list-none gap-subtle md:flex",children:Be.filter(t=>t.to!=="/galeria").map(t=>t.to==="/kontakt"?b.jsx("li",{className:"flex items-center justify-center",children:b.jsx(me,{variant:"outline",asChild:!0,children:b.jsx(jt,{...t})})},t.to):b.jsx("li",{className:"flex items-center justify-center",children:b.jsx(At,{...t,className:"text-xl font-bold"})},t.to))})})]})};rn.__docgenInfo={description:"",methods:[],displayName:"Header"};export{rn as H};