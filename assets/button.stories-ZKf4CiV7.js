import{j as n}from"./jsx-runtime-CGpYA4L6.js";import{s as I,d as i}from"./storybook-BaQXd8pY.js";import{B as c,v as w,s as C}from"./button-CT9zIEWy.js";import{I as E}from"./icon-ykWCEmDo.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./entry-preview-BXWVXEbm.js";import"./react-18-8-Ar02Sp.js";import"./index-SjZJwJVu.js";import"./modes-DycAkefs.js";import"./index-CjAzGtZG.js";import"./misc-DsGL97bO.js";import"./index-Bb4qSo10.js";const H={title:"Atoms/Button",component:c,parameters:{layout:"centered",...I("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=177-5&t=fp53uoEO5s9CIEdr-4")},args:{children:"Click me",variant:"default",size:"default",disabled:!1},argTypes:{variant:{options:w,control:{type:"radio"}},size:{options:C,control:{type:"radio"}},...i(["asChild"])},tags:["autodocs"]},a={args:{variant:"default"}},t={args:{variant:"outline",size:"icon",children:n.jsx(E,{name:"add"}),title:"Icon button"},argTypes:{...i(["size","children","variant"])},parameters:{...I("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=184-256&t=fp53uoEO5s9CIEdr-4")}},s={render:r=>n.jsx("div",{className:"flex gap-4",children:w.map(e=>n.jsx(c,{...r,variant:e},e))}),argTypes:{...i(["variant"])}},o={render:r=>n.jsx("div",{className:"flex gap-4",children:C.map(e=>n.jsx(c,{...r,size:e,children:e==="icon"?null:r.children,title:e==="icon"?"Icon button":void 0},e))}),argTypes:{...i(["size"])}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,u,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'icon',
    children: <Icon name="add" />,
    title: 'Icon button'
  },
  argTypes: {
    ...disableControls<typeof Button>(['size', 'children', 'variant'])
  },
  parameters: {
    ...setDesignPreview('https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=184-256&t=fp53uoEO5s9CIEdr-4')
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,f,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                {variations.map(variant => <Button key={variant} {...args} variant={variant} />)}
            </div>;
  },
  argTypes: {
    ...disableControls<typeof Button>(['variant'])
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var z,x,y;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                {sizes.map(size => <Button key={size} {...args} size={size} children={size === 'icon' ? null : args.children} title={size === 'icon' ? 'Icon button' : undefined} />)}
            </div>;
  },
  argTypes: {
    ...disableControls<typeof Button>(['size'])
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const _=["Component","IconButton","Variants","Sizes"];export{a as Component,t as IconButton,o as Sizes,s as Variants,_ as __namedExportsOrder,H as default};
