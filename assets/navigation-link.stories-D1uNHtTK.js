import{j as o}from"./jsx-runtime-CGpYA4L6.js";import{s as g,d}from"./storybook-BaQXd8pY.js";import{N as t}from"./navigation-link-TI6H-V9j.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./entry-preview-BXWVXEbm.js";import"./react-18-8-Ar02Sp.js";import"./index-SjZJwJVu.js";import"./modes-DycAkefs.js";import"./misc-BN-iWz0l.js";import"./index-Bb4qSo10.js";import"./index-bC7_7EF_.js";const E={title:"⚛️ Atoms/Navigation Link",component:t,parameters:{layout:"centered",...g("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=20-32&t=fp53uoEO5s9CIEdr-4")},args:{children:"Strona główna",to:"/abc"},argTypes:{...d(["about"])},tags:["autodocs"]},r={args:{}},a={render:e=>o.jsxs("div",{className:"flex gap-4",children:[o.jsx(t,{...e,to:"/"}),o.jsx(t,{...e,to:"/abc"})]}),argTypes:{...d(["to"])}};var s,n,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                <NavigationLink {...args} to="/" />
                <NavigationLink {...args} to="/abc" />
            </div>;
  },
  argTypes: {
    ...disableControls<typeof NavigationLink>(['to'])
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const L=["Component","Variants"];export{r as Component,a as Variants,L as __namedExportsOrder,E as default};
