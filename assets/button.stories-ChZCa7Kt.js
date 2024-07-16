import{j as r}from"./jsx-runtime-BZf_YgVj.js";import{s as l,d}from"./storybook-b3FPHv77.js";import{B as a}from"./button-Of2PYBoO.js";import"./index-CEThVCg_.js";import"./entry-preview-D6uH2-Qp.js";import"./react-18-__cZF4IP.js";import"./index-DRe9y7bH.js";import"./modes-CfxMDJKC.js";import"./index-MeWECQMo.js";import"./index-Bb4qSo10.js";import"./misc-Bk0sxs-g.js";const V={title:"⚛️ Atoms/Button",component:a,parameters:{layout:"centered",...l("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=20-76&t=SgllQF4sLHtxY4V0-4")},args:{children:"Click me",variant:"primary",size:"default"},argTypes:{variant:{options:["primary","secondary","outline","secondary-outline"],control:{type:"radio"}},size:{options:["default","sm","lg"],control:{type:"radio"}},...d(["asChild"])},tags:["autodocs"]},e={args:{variant:"primary"}},n={render:t=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(a,{...t,variant:"primary"}),r.jsx(a,{...t,variant:"secondary"}),r.jsx(a,{...t,variant:"outline"}),r.jsx(a,{...t,variant:"secondary-outline"})]}),argTypes:{...d(["variant"])}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,m,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const z=["Component","Variants"];export{e as Component,n as Variants,z as __namedExportsOrder,V as default};
