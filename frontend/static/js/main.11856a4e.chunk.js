(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),m=t.n(r),s=(t(23),t(2)),c=t(6);var o=function(e){let a={};return""===e.email?a.email="email should not empty":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)?a.email="":a.email="Email not valid",""===e.password?a.password="Password should not be empty":/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(e.password)?a.password="":a.password="Password must be at least 8 chartchets",a},d=t(32);var i=function(){const[e,a]=Object(n.useState)({email:"",password:""}),t=Object(s.o)(),[r,m]=Object(n.useState)({}),i=e=>{a(a=>({...a,[e.target.name]:[e.target.value]}))};return l.a.createElement("div",{className:"d-flex justify-content-center align-items-center bg-primary vh-100"},l.a.createElement("div",{className:"bg-white p-3 rounded w-25"},l.a.createElement("h2",null,"Sign in"),l.a.createElement("p",null),l.a.createElement("form",{action:"",onSubmit:a=>{a.preventDefault(),m(o(e)),""===r.email&&""===r.password&&d.a.post("".concat("https://bakarthikkumar.com/api","/login"),e).then(e=>{"Success"===e.data?t("/home"):alert("No records found! Please check your email or password")}).catch(e=>console.log(e))}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",placeholder:"e.g example@email.com",name:"email",onChange:i,className:"form-control rounded-0"}),r.email&&l.a.createElement("span",{className:"text-danger"}," ",r.email)),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",placeholder:"Enter password",name:"password",onChange:i,className:"form-control rounded-0"}),r.password&&l.a.createElement("span",{className:"text-danger"}," ",r.password)),l.a.createElement("button",{type:"submit",className:"btn btn-success border w-100 rounded-100"},"Sign in"),l.a.createElement("p",null,"Don't have an account?"),l.a.createElement(c.b,{to:"/signup",className:"btn btn-success border w-100 rounded-100"},"Sign up"))))};var u=function(e){let a={};return""===e.name?a.name="name should not empty":a.name="",""===e.email?a.email="email should not empty":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)?a.email="":a.email="Email not valid",""===e.password?a.password="Password should not be empty":/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(e.password)?a.password="":a.password="Password must be at least 8 character",a};var p=function(){const[e,a]=Object(n.useState)({name:"",email:"",password:""}),t=Object(s.o)(),[r,m]=Object(n.useState)({}),o=e=>{a(a=>({...a,[e.target.name]:[e.target.value]}))};return l.a.createElement("div",{className:"d-flex justify-content-center align-items-center bg-primary vh-100"},l.a.createElement("div",{className:"bg-white p-3 rounded w-25"},l.a.createElement("h2",null,"Sign up"),l.a.createElement("p",null," "),l.a.createElement("form",{action:"",onSubmit:a=>{a.preventDefault(),m(u(e)),""===r.name&&""===r.email&&""===r.password&&d.a.post("".concat("https://bakarthikkumar.com/api","/signup"),e).then(e=>{t("/")}).catch(e=>console.log(e))}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",placeholder:"Enter Name",name:"name",onChange:o,className:"form-control rounded-0"}),r.name&&l.a.createElement("span",{className:"text-danger"}," ",r.name)),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",placeholder:"e.g example@email.com",name:"email",onChange:o,className:"form-control rounded-0"}),r.email&&l.a.createElement("span",{className:"text-danger"}," ",r.email)),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",placeholder:"Enter password",name:"password",onChange:o,className:"form-control rounded-0"}),r.password&&l.a.createElement("span",{className:"text-danger"}," ",r.password)),l.a.createElement("button",{type:"submit",className:"btn btn-success border w-100 rounded-100"},"Sign up"),l.a.createElement("p",null,"Already have an account?"),l.a.createElement(c.b,{to:"/",className:"btn btn-success border w-100 rounded-100"},"Sign in"))))},E=t(33);var h=function(){const[e,a]=Object(n.useState)([]),[t,r]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{d.a.get("".concat("https://bakarthikkumar.com/api","/loginData")).then(e=>{a(e.data),r(!1)}).catch(e=>{console.error("Error fetching login data:",e),r(!1)})},[]),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"my-4"},"Login Data"),t?l.a.createElement("p",null,"Loading..."):0===e.length?l.a.createElement("p",null,"No login data available"):l.a.createElement(E.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"))),l.a.createElement("tbody",null,e.map((e,a)=>l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email))))))};var b=function(){return l.a.createElement(c.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(i,null)}),l.a.createElement(s.a,{path:"/signup",element:l.a.createElement(p,null)}),l.a.createElement(s.a,{path:"/home",element:l.a.createElement(h,null)})))};var g=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then(a=>{let{getCLS:t,getFID:n,getFCP:l,getLCP:r,getTTFB:m}=a;t(e),n(e),l(e),r(e),m(e)})};t(29);m.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.11856a4e.chunk.js.map