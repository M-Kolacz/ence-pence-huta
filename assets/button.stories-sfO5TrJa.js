import{j as r}from"./jsx-runtime-BZf_YgVj.js";import{s as w,d as i}from"./storybook-b3FPHv77.js";import{B as p,v as C,s as E}from"./button-CcPzkKtg.js";import{I as B}from"./icon-DxR5d0Rk.js";import"./index-CEThVCg_.js";import"./entry-preview-D6uH2-Qp.js";import"./react-18-__cZF4IP.js";import"./index-DRe9y7bH.js";import"./modes-CfxMDJKC.js";import"./index-MeWECQMo.js";import"./misc-Bk0sxs-g.js";import"./index-Bb4qSo10.js";const O={title:"⚛️ Atoms/Button",component:p,parameters:{layout:"centered",...w("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=177-5&t=fp53uoEO5s9CIEdr-4")},args:{children:"Click me",variant:"default",size:"default",disabled:!1},argTypes:{variant:{options:C,control:{type:"radio"}},size:{options:E,control:{type:"radio"}},...i(["asChild"])},tags:["autodocs"]},n={args:{variant:"default"}},s={args:{variant:"outline",size:"icon",children:r.jsx(B,{name:"add"})},argTypes:{...i(["size","children","variant"])},parameters:{...w("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=184-256&t=fp53uoEO5s9CIEdr-4")}},t={render:a=>r.jsx("div",{className:"flex gap-4",children:C.map(e=>r.jsx(p,{...a,variant:e},e))}),argTypes:{...i(["variant"])}},o={render:a=>r.jsx("div",{className:"flex gap-4",children:E.map(e=>r.jsx(p,{...a,size:e,children:e==="icon"?null:a.children},e))}),argTypes:{...i(["size"])}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,u,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'icon',
    children: <Icon name="add" />
  },
  argTypes: {
    ...disableControls<typeof Button>(['size', 'children', 'variant'])
  },
  parameters: {
    ...setDesignPreview('https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=184-256&t=fp53uoEO5s9CIEdr-4')
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,f,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                {variations.map(variant => <Button key={variant} {...args} variant={variant} />)}
            </div>;
  },
  argTypes: {
    ...disableControls<typeof Button>(['variant'])
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var z,x,y;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                {sizes.map(size => <Button key={size} {...args} size={size} children={size === 'icon' ? null : args.children} />)}
            </div>;
  },
  argTypes: {
    ...disableControls<typeof Button>(['size'])
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const H=["Component","IconButton","Variants","Sizes"];export{n as Component,s as IconButton,o as Sizes,t as Variants,H as __namedExportsOrder,O as default};
