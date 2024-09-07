import{j as r}from"./jsx-runtime-CGpYA4L6.js";import{w as E,u as m}from"./index-BvL_sk5E.js";import{s as R,a as p}from"./storybook-BaQXd8pY.js";import{T as A,t as a}from"./testimonials-Brl-Hv1K.js";import{A as D}from"./app--kGS62sV.js";import{M}from"./main-DnU6mDru.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bqoxw6Vv.js";import"./entry-preview-BXWVXEbm.js";import"./react-18-8-Ar02Sp.js";import"./index-SjZJwJVu.js";import"./modes-DycAkefs.js";import"./misc-opz8xCVi.js";import"./button-BHZWfFOt.js";import"./index-CjAzGtZG.js";import"./index-Bb4qSo10.js";import"./dot-D536Chsp.js";import"./avatar-Be9kqohs.js";const U={title:"Organisms/Testimonials",component:A,parameters:{layout:"fullscreen",...R("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=261-4716&t=GhlP2VAdQe4cmQbA-4")},decorators:[o=>r.jsx(D,{children:r.jsx(M,{children:r.jsx(o,{})})})]},e={parameters:{...p("Mobile")}},n={parameters:{...p("Tablet")}},i={parameters:{...p("Desktop")}},s={name:"Navigate through testimonials",play:async({canvasElement:o})=>{const t=E(o),g=await t.findAllByRole("button",{name:/Wyświetl opinie numer.*/});await t.findByText(a[0].description),await m.click(g[1]),await t.findByText(a[1].description);const h=await t.findByRole("button",{name:"Następna opinia"});await m.click(h),await t.findByText(a[2].description);const k=await t.findByRole("button",{name:"Poprzednia opinia"});await m.click(k),await t.findByText(a[1].description)}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    ...setViewport('Mobile')
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,w,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    ...setViewport('Tablet')
  }
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var v,B,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    ...setViewport('Desktop')
  }
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var x,T,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Navigate through testimonials',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testimonialButtons = await canvas.findAllByRole('button', {
      name: /Wyświetl opinie numer.*/
    });
    await canvas.findByText(testimonials[0].description);
    await userEvent.click((testimonialButtons[1] as Element));
    await canvas.findByText(testimonials[1].description);
    const nextButton = await canvas.findByRole('button', {
      name: 'Następna opinia'
    });
    await userEvent.click(nextButton);
    await canvas.findByText(testimonials[2].description);
    const prevButton = await canvas.findByRole('button', {
      name: 'Poprzednia opinia'
    });
    await userEvent.click(prevButton);
    await canvas.findByText(testimonials[1].description);
  }
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const X=["Mobile","Tablet","Desktop","NavigateThroughTestimonials"];export{i as Desktop,e as Mobile,s as NavigateThroughTestimonials,n as Tablet,X as __namedExportsOrder,U as default};
