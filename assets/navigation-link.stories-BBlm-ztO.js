import{j as t}from"./jsx-runtime-BZf_YgVj.js";import{s as g,d}from"./storybook-b3FPHv77.js";import{N as o}from"./navigation-link-CX74Jnap.js";import"./index-CEThVCg_.js";import"./entry-preview-D6uH2-Qp.js";import"./react-18-__cZF4IP.js";import"./index-DRe9y7bH.js";import"./modes-CfxMDJKC.js";import"./index-Bb4qSo10.js";import"./misc-Bk0sxs-g.js";import"./index-Bd0nuzNA.js";const y={title:"⚛️ Atoms/Navigation Link",component:o,parameters:{layout:"centered",...g("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=20-35&t=SgllQF4sLHtxY4V0-4")},args:{children:"Strona główna",to:"/abc"},argTypes:{...d(["about"])},tags:["autodocs"]},r={args:{}},a={render:e=>t.jsxs("div",{className:"flex gap-4",children:[t.jsx(o,{...e,to:"/"}),t.jsx(o,{...e,to:"/abc"})]}),argTypes:{...d(["to"])}};var s,n,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                <NavigationLink {...args} to="/" />
                <NavigationLink {...args} to="/abc" />
            </div>;
  },
  argTypes: {
    ...disableControls<typeof NavigationLink>(['to'])
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const h=["Component","Variants"];export{r as Component,a as Variants,h as __namedExportsOrder,y as default};
