import{j as e,c as r}from"./misc-D9gxsTwp.js";const c=""+new URL("sprite-DE4H1Up_.svg",import.meta.url).href;function a({name:n,className:t,title:i,children:o,...s}){return o?e.jsxs("span",{className:"inline-flex items-center",children:[e.jsx(a,{name:n,className:t,title:i,...s}),o]}):e.jsxs("svg",{...s,className:r("inline h-6 w-6 self-center",t),children:[i?e.jsx("title",{children:i||n}):null,e.jsx("use",{href:`${c}#${n}`})]})}a.__docgenInfo={description:`Renders an SVG icon. The icon defaults to the size of the font. To make it
align vertically with neighboring text, you can pass the text as a child of
the icon and it will be automatically aligned.
Alternatively, if you're not ok with the icon being to the left of the text,
you need to wrap the icon and text in a common parent and set the parent to
display "flex" (or "inline-flex") with "items-center" and a reasonable gap.

Pass \`title\` prop to the \`Icon\` component to get \`<title>\` element rendered
in the SVG container, providing this way for accessibility.`,methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};const l=({className:n,...t})=>e.jsx("button",{className:r("inline-flex h-7 w-7 items-center justify-center whitespace-nowrap rounded-md border border-base bg-neutral-0 p-2 transition-colors hover:bg-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",n),...t});l.displayName="IconButton";l.__docgenInfo={description:"",methods:[],displayName:"IconButton"};export{l as I,a};
