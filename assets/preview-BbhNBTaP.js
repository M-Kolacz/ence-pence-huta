const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-BLDV9GbX.js","./iframe-B_nup7e7.js","./index-CEThVCg_.js","./react-18-__cZF4IP.js","./index-DRe9y7bH.js","./index-BP0s9Yi5.js","./index-MeWECQMo.js","./index-DXimoRZY.js","./index-9UrncIcR.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-B_nup7e7.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-BLDV9GbX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
