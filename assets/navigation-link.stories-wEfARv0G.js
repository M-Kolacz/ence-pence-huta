import{j as o}from"./jsx-runtime-BZf_YgVj.js";import{s as g,d}from"./storybook-b3FPHv77.js";import{N as t}from"./navigation-link-DjoqhjKI.js";import"./index-CEThVCg_.js";import"./entry-preview-D6uH2-Qp.js";import"./react-18-__cZF4IP.js";import"./index-DRe9y7bH.js";import"./modes-CfxMDJKC.js";import"./misc-Bk0sxs-g.js";import"./index-Bb4qSo10.js";import"./index-Bd0nuzNA.js";const C={title:"⚛️ Atoms/Navigation Link",component:t,parameters:{layout:"centered",...g("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=20-32&t=fp53uoEO5s9CIEdr-4")},args:{children:"Strona główna",to:"/abc"},argTypes:{...d(["about"])},tags:["autodocs"]},r={args:{}},a={render:e=>o.jsxs("div",{className:"flex gap-4",children:[o.jsx(t,{...e,to:"/"}),o.jsx(t,{...e,to:"/abc"})]}),argTypes:{...d(["to"])}};var s,n,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const E=["Component","Variants"];export{r as Component,a as Variants,E as __namedExportsOrder,C as default};
