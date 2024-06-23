import{s as y,d as o,j as r}from"./misc-CiXTtBsd.js";import{B as a}from"./button-C5FEj1sC.js";import"./modes-CfxMDJKC.js";import"./index-CEThVCg_.js";import"./index-MeWECQMo.js";import"./index-Bb4qSo10.js";const h={title:"⚛️ Atoms/Button",component:a,parameters:{layout:"centered",...y("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=20-76&t=SgllQF4sLHtxY4V0-4")},args:{children:"Click me",variant:"primary",size:"default"},argTypes:{variant:{options:["primary","secondary","outline","secondary-outline"],control:{type:"radio"}},size:{options:["default","sm","lg"],control:{type:"radio"}},...o(["asChild"])},tags:["autodocs"]},s={args:{variant:"primary"}},t={render:e=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(a,{...e,variant:"primary"}),r.jsx(a,{...e,variant:"secondary"}),r.jsx(a,{...e,variant:"outline"}),r.jsx(a,{...e,variant:"secondary-outline"})]}),argTypes:{...o(["variant"])}},n={render:e=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(a,{...e,size:"sm"}),r.jsx(a,{...e,size:"default"}),r.jsx(a,{...e,size:"lg"})]}),argTypes:{...o(["size"])}};var i,p,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                <Button {...args} variant="primary" />
                <Button {...args} variant="secondary" />
                <Button {...args} variant="outline" />
                <Button {...args} variant="secondary-outline" />
            </div>;
  },
  argTypes: {
    ...disableControls<typeof Button>(['variant'])
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,g,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                <Button {...args} size="sm" />
                <Button {...args} size="default" />
                <Button {...args} size="lg" />
            </div>;
  },
  argTypes: {
    ...disableControls<typeof Button>(['size'])
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const S=["Component","Variants","Sizes"];export{s as Component,n as Sizes,t as Variants,S as __namedExportsOrder,h as default};
