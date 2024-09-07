import{j as s}from"./jsx-runtime-CGpYA4L6.js";import{s as l,d}from"./storybook-BaQXd8pY.js";import{D as t}from"./dot-D536Chsp.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./entry-preview-BXWVXEbm.js";import"./react-18-8-Ar02Sp.js";import"./index-SjZJwJVu.js";import"./modes-DycAkefs.js";import"./misc-opz8xCVi.js";import"./index-Bb4qSo10.js";const w={title:"Atoms/Dot",component:t,parameters:{layout:"centered",...l("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=272-1386&t=GhlP2VAdQe4cmQbA-4")},args:{isActive:!1,"aria-label":"Dot"},tags:["autodocs"],argTypes:{...d(["aria-label"])}},e={},r={render:o=>s.jsxs("div",{className:"flex space-x-4",children:[s.jsx(t,{...o}),s.jsx(t,{...o,isActive:!0})]}),argTypes:{...d(["isActive"])}};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex space-x-4">
                <Dot {...args} />
                <Dot {...args} isActive />
            </div>;
  },
  argTypes: {
    ...disableControls<typeof Dot>(['isActive'])
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const C=["Component","States"];export{e as Component,r as States,C as __namedExportsOrder,w as default};
