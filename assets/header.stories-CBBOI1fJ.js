import{j as s}from"./jsx-runtime-CGpYA4L6.js";import{w as i,u as E,s as h}from"./index-BvL_sk5E.js";import{s as x,a as n}from"./storybook-fP5FfkVL.js";import{H as k}from"./header-Rgg8Vght.js";import{A as B}from"./app--kGS62sV.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bqoxw6Vv.js";import"./entry-preview-CiarxA3d.js";import"./react-18-CzlTUK1-.js";import"./index-DMWgzpko.js";import"./modes-DycAkefs.js";import"./Logo-BsIrmi8u.js";import"./index-D_gScRAs.js";import"./index-CjAzGtZG.js";import"./misc-opz8xCVi.js";import"./button-BHZWfFOt.js";import"./index-Bb4qSo10.js";import"./icon-Du6O1_GD.js";import"./components-C3aYRwzD.js";import"./index-D2H79pPL.js";import"./navigation-link-DiABlst_.js";const X={title:"Organisms/Header",component:k,parameters:{layout:"fullscreen",...x("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=100-225&t=fp53uoEO5s9CIEdr-4")},args:{},argTypes:{},decorators:[r=>s.jsx(B,{children:s.jsx(r,{})})]},e={name:"Mobile - closed navigation",parameters:{...n("Mobile")}},a={name:"Mobile - open navigation",parameters:{...n("Mobile"),...x("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=200-1369&t=1zUiTMlrtdfwd4MW-4")},play:async({canvasElement:r})=>{const y=await i(r).findByRole("button",{expanded:!1});await E.click(y),await i(await h.findByRole("dialog")).findByRole("button",{name:"Strona główna"})}},t={parameters:{...n("Tablet")}},o={parameters:{...n("Desktop")}};var p,m,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Mobile - closed navigation',
  parameters: {
    ...setViewport('Mobile')
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Mobile - open navigation',
  parameters: {
    ...setViewport('Mobile'),
    ...setDesignPreview('https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=200-1369&t=1zUiTMlrtdfwd4MW-4')
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = await canvas.findByRole('button', {
      expanded: false
    });
    await userEvent.click(menuButton);
    const dialog = within(await screen.findByRole('dialog'));
    await dialog.findByRole('button', {
      name: 'Strona główna'
    });
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var w,f,g;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    ...setViewport('Tablet')
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,v,M;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    ...setViewport('Desktop')
  }
}`,...(M=(v=o.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const Y=["Mobile","MobileOpen","Tablet","Desktop"];export{o as Desktop,e as Mobile,a as MobileOpen,t as Tablet,Y as __namedExportsOrder,X as default};
