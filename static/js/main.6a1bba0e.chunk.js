(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(5),r=c(2),i=c(3),o=c.n(i),d=c(1),j=(c(13),c(14),c(4)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.onSelect,s=e.selectedTodo;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:t}),Object(b.jsx)("td",{className:"is-vcentered",children:n&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()("",{"has-text-success":n,"has-text-danger":!n}),children:a})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:u()("far",{"fa-eye-slash":(null===s||void 0===s?void 0:s.id)===t,"fa-eye":(null===s||void 0===s?void 0:s.id)!==t})})})})})]},t)}))})]})};!function(e){e.All="all",e.Completed="completed",e.Active="active"}(s||(s={}));var m=function(e){var t=e.query,c=e.setQuery,a=e.filterType,n=e.setFilterType;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){switch(e.target.value){case s.Active:n(s.Active);break;case s.Completed:n(s.Completed);break;default:n(s.All)}},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(b.jsx)("button",{"aria-label":"Delete","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})};function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=function(e){return O("/users/".concat(e))},f=(c(16),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.todo,c=e.onClose,s=Object(d.useState)(null),a=Object(r.a)(s,2),n=a[0],i=a[1],j=t.id,h=t.title,m=t.completed,O=t.userId,p=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(O);case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){p()}),[]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),n?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(j)}),Object(b.jsx)("button",{"aria-label":"Close",type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:h}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(b.jsx)("strong",{className:u()({"has-text-success":m,"has-text-danger":!m}),children:m?"Done":"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(b.jsx)(f,{})]})},v=function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(!1),i=Object(r.a)(n,2),j=i[0],u=i[1],x=Object(d.useState)(""),v=Object(r.a)(x,2),N=v[0],y=v[1],g=Object(d.useState)(s.All),k=Object(r.a)(g,2),C=k[0],w=k[1],S=Object(d.useState)(null),T=Object(r.a)(S,2),A=T[0],_=T[1],E=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("/todos");case 2:t=e.sent,a(t),u(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){E()}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{query:N,setQuery:y,filterType:C,setFilterType:w})}),Object(b.jsx)("div",{className:"block",children:j?Object(b.jsx)(h,{todos:c.filter((function(e){var t=e.title.toLowerCase(),c=N.toLowerCase();return t.includes(c)})).filter((function(e){switch(C){case s.Active:return!e.completed;case s.Completed:return e.completed;default:return e}})),onSelect:_,selectedTodo:A}):Object(b.jsx)(f,{})})]})})}),A&&Object(b.jsx)(p,{todo:A,onClose:function(){return _(null)}})]})};n.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6a1bba0e.chunk.js.map