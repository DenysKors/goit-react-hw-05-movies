"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[36],{36:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,o,i,a=t(861),l=t(439),u=t(757),c=t.n(u),s=t(791),d=t(87),p=t(689),f=t(168),h=t(444),x=h.ZP.form(r||(r=(0,f.Z)(["\n  display: flex;\n  /* align-items: center; */\n  width: 100%;\n  max-width: 300px;\n  /* background-color: gray;\n  border-radius: 3px;\n  overflow: hidden; */\n"]))),m=h.ZP.button(o||(o=(0,f.Z)(["\n  display: inline-block;\n  width: 68px;\n  height: 38px;\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    background-color: darkgray;\n    color: white;\n  }\n"]))),b=h.ZP.input(i||(i=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font-size: 20px;\n  padding-left: 4px;\n  padding-right: 4px;\n  border: 2px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n  &:focus {\n    outline: none;\n    border-color: cadetblue;\n  }\n"]))),g=t(184),v=function(n){var e=n.onSubmit,t=(0,s.useState)(""),r=(0,l.Z)(t,2),o=r[0],i=r[1];return(0,g.jsxs)(x,{onSubmit:function(n){if(n.preventDefault(),""===o.trim())return alert("Enter request to search");e(o),i("")},children:[(0,g.jsx)(b,{type:"text",autocomplete:"off",value:o,placeholder:"Search movies",onChange:function(n){var e=n.target.value;i(e)}}),(0,g.jsx)(m,{type:"submit",children:"Search"})]})},k=t(637),w=function(){var n,e=(0,s.useState)(null),t=(0,l.Z)(e,2),r=t[0],o=t[1],i=(0,d.lr)(),u=(0,l.Z)(i,2),f=u[0],h=u[1],x=(0,p.TH)(),m=null!==(n=f.get("query"))&&void 0!==n?n:"";(0,s.useEffect)((function(){function n(){return n=(0,a.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.Pt)(e);case 3:t=n.sent,o(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),n.apply(this,arguments)}""!==m&&function(e){n.apply(this,arguments)}(m)}),[m]);return(0,g.jsxs)("main",{children:[(0,g.jsx)(v,{onSubmit:function(n){var e=n.toLowerCase().trim();h(""!==e?{query:e}:{})}}),r&&(0,g.jsx)("ul",{children:r.map((function(n){return(0,g.jsx)("li",{style:{marginBottom:8},children:(0,g.jsx)(d.rU,{to:"/movies/".concat(n.id),state:{from:x},children:n.original_title?n.original_title:n.original_name})},n.id)}))})]})}}}]);
//# sourceMappingURL=36.062b5e8e.chunk.js.map