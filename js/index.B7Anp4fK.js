import{j as e,L as n,O as a,c as l,a as d,R as u,b as h}from"./vendor.ClrVj0cE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const f="/vite-react-router/assets/react.CHdo91hT.svg",m="/vite-react-router/vite.svg";function p(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("a",{href:"https://vitejs.dev",target:"_blank",children:e.jsx("img",{src:m,className:"logo",alt:"Vite logo"})}),e.jsx("a",{href:"https://react.dev",target:"_blank",children:e.jsx("img",{src:f,className:"logo react",alt:"React logo"})})]}),e.jsx("h1",{children:"Vite + React"}),e.jsxs("nav",{children:[e.jsx(n,{to:"/vite-react-router/",children:"Home"})," | ",e.jsx(n,{to:"/vite-react-router/contact",children:"Contact"})]}),e.jsx(a,{}),e.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}function g(){return e.jsx("h2",{children:"Home"})}function j(){return e.jsx("h2",{children:"Contact"})}const x=l([{path:"/vite-react-router/",element:e.jsx(p,{}),children:[{path:"/vite-react-router/",element:e.jsx(g,{})},{path:"/vite-react-router/contact",element:e.jsx(j,{})}]}]);d.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(h,{router:x})}));
