(this["webpackJsonpreact-training"]=this["webpackJsonpreact-training"]||[]).push([[0],{153:function(e,t,r){},154:function(e,t,r){},463:function(e,t,r){"use strict";r.r(t);var c=r(2),n=r(146),s=r.n(n),l=(r(153),r(154),r(65)),a=r(66),o=r(69),b=r(68),i=r(1),d=function(e){return Object(i.jsx)("button",{onClick:e.klik,children:e.text})},j=(c.Component,r(39)),x=r.n(j),u=r(67),h=r(25),m=r(50);function O(e){var t=e.color,r=e.func,c=e.sym;return Object(i.jsx)("button",{style:{background:t},onClick:r,children:c})}c.Component;var p=function(e){return Object(i.jsx)("h1",{children:e.count})};r(156);function f(e){var t=e.text;return Object(i.jsx)("div",{style:{border:"5px solid blue",width:"30%",margin:"0 35% 0 35%",borderRadius:"15px"},children:t})}function v(){var e=this,t=Object(c.useState)(0),r=Object(h.a)(t,2),n=r[0],s=r[1],l=Object(c.useState)([]),a=Object(h.a)(l,2),o=a[0],b=a[1],d=function(){var e=Object(u.a)(x.a.mark((function e(){var t,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,b(r),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){d()}),[]);return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)("div",{className:"bg-gray-100 rounded-xl p-8",children:Object(i.jsx)("h2",{className:"text-lg font-semibold",children:"ToDo"})}),Object(i.jsx)("div",{}),Object(i.jsx)(f,{text:"Saldo anda adalah : Rp. ".concat(n)}),Object(i.jsx)("br",{}),Object(i.jsx)("hr",{}),"Apakah mau tambah saldo?",Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:function(){return s(n+(e=1e3)),void setTimeout((function(){alert("Terima kasih, saldo anda bertambah ".concat(e,", menjadi ").concat(n+e))}),1200);var e},className:"bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded m-2",children:"Tambah Rp.1000"}),Object(i.jsx)("button",{onClick:function(){return s(n+(e=5e3)),void setTimeout((function(){alert("Terima kasih, saldo anda bertambah ".concat(e,", menjadi ").concat(n+e))}),1500);var e},className:"bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2",children:"Tambah Rp.5000"}),Object(i.jsx)("hr",{}),"Apakah mau tarik saldo?",Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:function(){return e.tarikSaldo1000()},className:"bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded m-2",children:"Tarik Rp.1000"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"flex flex-col container max-w-md mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow",children:Object(i.jsx)("ul",{class:"flex flex-col divide-y w-full",children:o.map((function(e,t){return Object(i.jsx)("li",{className:"flex flex-row",children:Object(i.jsx)("div",{className:"select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4",children:Object(i.jsxs)("div",{className:"flex-1 pl-1 mr-16",children:[Object(i.jsx)("div",{className:"font-medium dark:text-white",children:e.name}),Object(i.jsx)("div",{className:"text-gray-600 dark:text-gray-200 text-sm",children:e.phone})]})})})}))})})]})}var k=r(41),g=r(6);function y(){return Object(i.jsx)(k.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("ul",{class:"flex border-b",children:[Object(i.jsx)("li",{class:"-mb-px mr-1",children:Object(i.jsx)(k.b,{class:"bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold",to:"/",children:"Home"})}),Object(i.jsx)("li",{class:"mr-1",children:Object(i.jsx)(k.b,{class:"bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",to:"/about",children:"About"})}),Object(i.jsx)("li",{class:"mr-1",children:Object(i.jsx)(k.b,{class:"bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",to:"/users",children:"Users"})}),Object(i.jsx)("li",{class:"mr-1",children:Object(i.jsx)(k.b,{class:"bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",to:"/bank",children:"Bank"})})]}),Object(i.jsxs)(g.c,{children:[Object(i.jsx)(g.a,{path:"/about",component:N}),Object(i.jsx)(g.a,{path:"/users",children:Object(i.jsx)(T,{})}),Object(i.jsx)(g.a,{path:"/bank",children:Object(i.jsx)(v,{})}),Object(i.jsx)(g.a,{path:"/",children:Object(i.jsx)(w,{})})]})]})})}function w(){return Object(i.jsxs)(m.Fragment,{children:[Object(i.jsx)("h1",{children:"My Home"}),Object(i.jsx)("p",{children:"lalallala"})]})}function N(){return Object(i.jsx)("h2",{children:"About"})}function T(){return Object(i.jsx)("h2",{children:"Users"})}var C=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h2",{children:"Hello Everyone"}),Object(i.jsx)(y,{})]})};s.a.render(Object(i.jsx)(C,{}),document.getElementById("root"))}},[[463,1,2]]]);
//# sourceMappingURL=main.9bb5976f.chunk.js.map