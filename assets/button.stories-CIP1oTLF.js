import{j as r}from"./jsx-runtime-BZf_YgVj.js";import{d as o}from"./storybook-DFGEZ4OP.js";import{B as e}from"./button-CUj6j8d_.js";import"./index-CEThVCg_.js";import"./index-MeWECQMo.js";import"./index-Bb4qSo10.js";import"./misc-6wHo9vsf.js";const S={title:"Button",component:e,parameters:{layout:"centered"},args:{children:"Click me",variant:"primary",size:"default"},argTypes:{variant:{options:["primary","secondary","outline","secondary-outline"],control:{type:"radio"}},size:{options:["default","sm","lg"],control:{type:"radio"}},...o(["asChild"])},tags:["autodocs"]},s={args:{variant:"primary"}},t={render:a=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(e,{...a,variant:"primary"}),r.jsx(e,{...a,variant:"secondary"}),r.jsx(e,{...a,variant:"outline"}),r.jsx(e,{...a,variant:"secondary-outline"})]}),argTypes:{...o(["variant"])}},n={render:a=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(e,{...a,size:"sm"}),r.jsx(e,{...a,size:"default"}),r.jsx(e,{...a,size:"lg"})]}),argTypes:{...o(["size"])}};var i,p,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const T=["Component","Variants","Sizes"];export{s as Component,n as Sizes,t as Variants,T as __namedExportsOrder,S as default};
