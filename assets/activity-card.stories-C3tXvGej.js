import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{s as l,d as u}from"./storybook-BaQXd8pY.js";import{A as c,v as d}from"./activity-card-BkkLvX8i.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./entry-preview-BXWVXEbm.js";import"./react-18-8-Ar02Sp.js";import"./index-SjZJwJVu.js";import"./modes-DycAkefs.js";import"./misc-opz8xCVi.js";import"./index-Bb4qSo10.js";const T={title:"Molecules/ActivityCard",component:c,parameters:{layout:"centered",...l("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=250-1832&t=9r8tiuEMeZmOureV-4")},args:{variant:"art"},argTypes:{variant:{options:d,control:{type:"radio"}}},tags:["autodocs"]},r={},a={render:v=>e.jsx("div",{className:"flex gap-4",children:d.map(t=>e.jsx(c,{...v,variant:t},t))}),argTypes:{...u(["variant"])}};var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var n,p,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex gap-4">
                {variations.map(variant => <ActivityCard key={variant} {...args} variant={variant} />)}
            </div>;
  },
  argTypes: {
    ...disableControls<typeof ActivityCard>(['variant'])
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const b=["Component","Variants"];export{r as Component,a as Variants,b as __namedExportsOrder,T as default};
