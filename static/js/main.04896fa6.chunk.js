(this.webpackJsonptaskie=this.webpackJsonptaskie||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(6),i=n.n(c),r=(n(12),n(7)),l=n(4),o=(n(13),n(0)),d=function(e){var t=e.task,n=e.removeTask;return Object(o.jsxs)("div",{className:"text-lg mx-4 text-light-VeryDarkGrayishBlue flex justify-between text-right",children:[t,Object(o.jsx)("button",{onClick:function(){return n(t)},className:"",children:"X"})]})},u=function(e){var t=e.tasks,n=e.removeTask;return Object(o.jsx)("div",{className:"taskContainer",children:Object(o.jsx)("ul",{children:t.map((function(e){return Object(o.jsx)("li",{className:"border-b py-4 border-light-LightGrayishBlue",children:Object(o.jsx)(d,{task:e,removeTask:n},e)})}))})})},j=function(e){var t=e.addTask,n=Object(s.useState)(""),a=Object(l.a)(n,2),c=a[0],i=a[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(c),i("")},children:Object(o.jsx)("input",{value:c,onChange:function(e){return i(e.target.value)},className:"p-4 text-2xl rounded-md w-full shadow-md focus:outline-none",placeholder:"Add a new task"})})};var b=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("tasks"));e&&a(e)}),[]),Object(s.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(n))}),[n]),Object(o.jsx)("div",{className:"bg-light-VeryLightGray h-screen",children:Object(o.jsx)("div",{className:"bg-top bg-gradient-to-r from-gradients-b to-gradients-a max-h-60",children:Object(o.jsxs)("div",{id:"mainContainer",className:"mx-5 md:w-8/12 md:mx-auto max-w-screen-lg",children:[Object(o.jsx)("h1",{className:"pt-10 mb-4 text-left text-4xl tracking-widest font-bold text-light-VeryLightGray",children:"TASKIE"}),Object(o.jsx)("div",{children:Object(o.jsx)(j,{addTask:function(e){a([].concat(Object(r.a)(n),[e]))}})}),Object(o.jsx)("div",{id:"taskList",className:"bg-white mt-10 max-h-screen rounded-md shadow-md",children:Object(o.jsx)(u,{tasks:n,removeTask:function(e){a(n.filter((function(t){return e!==t})))}})}),Object(o.jsxs)("div",{id:"bottomMenu",className:"flex justify-between",children:[Object(o.jsxs)("p",{className:"text-light-DarkGrayishBlue",children:[n.length," tasks left"]}),Object(o.jsx)("div",{id:"taskFilters",className:""})]})]})})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.04896fa6.chunk.js.map