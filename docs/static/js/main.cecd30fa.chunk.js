(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{32:function(t,e,c){},56:function(t,e,c){"use strict";c.r(e);var n=c(0),o=c.n(n),s=c(27),i=c.n(s),a=(c(32),c(5)),r=c(10),j=c(15),d=c(1),u=function(t){var e=t.setToDoCreate,c=Object(j.a)(),n=c.register,o=c.handleSubmit,s=c.reset;return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"form-create",onSubmit:o((function(t){e(t),s()})),children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",Object(r.a)({placeholder:"Write a task",id:"task"},n("task")))}),Object(d.jsx)("div",{children:Object(d.jsx)("input",Object(r.a)({placeholder:"Write your name"},n("student")))}),Object(d.jsx)("button",{children:"Save"})]})})},b=c(4),p=c(7),O=c.n(p),l=function(t){return O.a.post("https://todos-go.herokuapp.com/api/todos",t)},h=function(t){var e="https://todos-go.herokuapp.com/api/todos/".concat(t);return O.a.delete(e)},f=function(){return O.a.get("https://todos-go.herokuapp.com/api/todos")},m=function(t,e){var c="https://todos-go.herokuapp.com/api/todos/".concat(t);return O.a.put(c,e)},x=c(12),v=c(13),k=function(t){var e=t.toDos,c=t.handleUpdate,n=t.setIsCompleted,o=Object(j.a)(),s=o.register,i=o.handleSubmit;return Object(d.jsx)("form",{className:"form-item",onSubmit:i((function(t){n({task:e.task,student:e.student,isCompleted:t.completed})})),children:e.isCompleted?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(r.a)({type:"checkbox",id:"is-completed",checked:!0},s("completed"))),Object(d.jsxs)("button",{onClick:function(){return c(e.id)},children:[" ",Object(d.jsx)(x.a,{icon:v.a})]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(r.a)({type:"checkbox",id:"is-completed"},s("completed"))),Object(d.jsxs)("button",{onClick:function(){return c(e.id)},children:[" ",Object(d.jsx)(x.a,{icon:v.a})]})]})})},C=function(t){var e=t.toDoCreate,c=Object(n.useState)([]),o=Object(a.a)(c,2),s=o[0],i=o[1],r=Object(n.useState)(""),j=Object(a.a)(r,2),u=j[0],p=j[1],O=Object(n.useState)(""),C=Object(a.a)(O,2),S=C[0],g=C[1],D=Object(n.useState)({}),N=Object(a.a)(D,2),E=N[0],y=N[1];Object(n.useEffect)((function(){f().then((function(t){return i(t.data.todos)}))}),[]),Object(n.useEffect)((function(){h(u).then((function(){i(s.filter((function(t){return t.id!==u})))}))}),[u]),Object(n.useEffect)((function(){l(e).then((function(t){i([].concat(Object(b.a)(s),[t.data]))}))}),[e]),Object(n.useEffect)((function(){m(S,E).then((function(){i(Object(b.a)(s.filter((function(t){return t.id!==E.id}))))}))}),[E]);var I=function(t){g(t)},T=s.map((function(t){return Object(d.jsxs)("div",{className:"container-list",children:[Object(d.jsxs)("div",{className:"tasks",children:[Object(d.jsx)(k,{toDos:t,handleUpdate:I,setIdUpdate:g,setIsCompleted:y}),Object(d.jsx)("span",{children:t.task})," -",Object(d.jsx)("span",{children:t.student})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return e=t.id,void p(e);var e},children:Object(d.jsx)(x.a,{icon:v.b})})})]},t.id)}));return Object(d.jsx)("div",{className:"container-todo",children:T})};var S=function(){var t=Object(n.useState)({}),e=Object(a.a)(t,2),c=e[0],o=e[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"ToDo App"}),Object(d.jsx)(u,{setToDoCreate:o}),Object(d.jsx)(C,{toDoCreate:c})]})};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.cecd30fa.chunk.js.map