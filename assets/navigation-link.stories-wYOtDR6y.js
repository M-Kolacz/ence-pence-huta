import{j as o}from"./jsx-runtime-BZf_YgVj.js";import{d}from"./storybook-DFGEZ4OP.js";import{N as t}from"./navigation-link-BEDEtndJ.js";import"./index-CEThVCg_.js";import"./index-Bb4qSo10.js";import"./misc-6wHo9vsf.js";import"./index-Bd0nuzNA.js";import"./index-DRe9y7bH.js";const j={title:"Navigation Link",component:t,parameters:{layout:"centered"},args:{children:"Strona główna",to:"/abc"},argTypes:{...d(["about"])},tags:["autodocs"]},a={args:{}},r={render:e=>o.jsxs("div",{className:"flex gap-4",children:[o.jsx(t,{...e,to:"/"}),o.jsx(t,{...e,to:"/abc"})]}),argTypes:{...d(["to"])}};var s,n,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                <NavigationLink {...args} to="/" />
                <NavigationLink {...args} to="/abc" />
            </div>;
  },
  argTypes: {
    ...disableControls<typeof NavigationLink>(['to'])
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const k=["Component","Variants"];export{a as Component,r as Variants,k as __namedExportsOrder,j as default};
