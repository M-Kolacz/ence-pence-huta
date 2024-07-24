import{j as r}from"./jsx-runtime-BZf_YgVj.js";import{s as C,d as i}from"./storybook-b3FPHv77.js";import{B as c,v as B,s as b}from"./button-CcPzkKtg.js";import{I as j}from"./icon-DxR5d0Rk.js";import"./index-CEThVCg_.js";import"./entry-preview-D6uH2-Qp.js";import"./react-18-__cZF4IP.js";import"./index-DRe9y7bH.js";import"./modes-CfxMDJKC.js";import"./index-MeWECQMo.js";import"./misc-Bk0sxs-g.js";import"./index-Bb4qSo10.js";const P={title:"⚛️ Atoms/Button",component:c,parameters:{layout:"centered",...C("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=20-76&t=SgllQF4sLHtxY4V0-4")},args:{children:"Click me",variant:"default",size:"default",disabled:!1},argTypes:{variant:{options:B,control:{type:"radio"}},size:{options:b,control:{type:"radio"}},...i(["asChild"])},tags:["autodocs"]},s={args:{variant:"default"}},n={args:{variant:"outline",size:"icon",children:r.jsx(j,{name:"baby-shoes"})},argTypes:{...i(["size","children","variant"])}},t={render:a=>r.jsx("div",{className:"flex gap-4",children:B.map(e=>r.jsx(c,{...a,variant:e},e))}),argTypes:{...i(["variant"])}},o={render:a=>r.jsx("div",{className:"flex gap-4",children:b.map(e=>r.jsx(c,{...a,size:e,children:e==="icon"?null:a.children},e))}),argTypes:{...i(["size"])}};var p,d,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,u,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'icon',
    children: <Icon name="baby-shoes" />
  },
  argTypes: {
    ...disableControls<typeof Button>(['size', 'children', 'variant'])
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,f,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                {variations.map(variant => <Button key={variant} {...args} variant={variant} />)}
            </div>;
  },
  argTypes: {
    ...disableControls<typeof Button>(['variant'])
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,z,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                {sizes.map(size => <Button key={size} {...args} size={size} children={size === 'icon' ? null : args.children} />)}
            </div>;
  },
  argTypes: {
    ...disableControls<typeof Button>(['size'])
  }
}`,...(x=(z=o.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};const _=["Component","IconButton","Variants","Sizes"];export{s as Component,n as IconButton,o as Sizes,t as Variants,_ as __namedExportsOrder,P as default};
