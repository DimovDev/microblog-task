(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{52:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(20),r=a.n(n),o=(a(52),a(4)),l=a(7),i=a(8),j=a(21),d=a(86),b=a(18),u=a.n(b),O=u.a.create({baseURL:"http://localhost:8080"}),h=a(1);var m=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(),r=Object(o.a)(n,2),i=(r[0],r[1]);return Object(c.useEffect)((function(){O.post("posts/posts").then((function(e){200===e.status?(a=e.data.posts,0===e.data.error&&e.data.posts?s(a):i(!0)):i(!0)})).catch((function(e){i(!0)}))}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.a,{className:"pt-5",children:[Object(h.jsx)("h1",{className:"text-center",children:"Articles"}),a&&!!a.length&&a.map((function(e,t){return Object(h.jsxs)(j.a,{className:"pt-2",children:[Object(h.jsx)("img",{src:"/postImages/".concat(e.id,"/").concat(e.image),alt:e.title,className:"align-self-center mr-4",width:64,height:64}),Object(h.jsxs)(j.a.Body,{children:[Object(h.jsx)("h2",{children:e.title}),Object(h.jsxs)("p",{children:[e.content.substring(0,300),"....",Object(h.jsx)(l.b,{to:{pathname:"/singlePost/",state:{id:e.id}},children:"Read more"})]})]})]})}))]})})},x=a(91),p=a(87),f=a(88);a(80);var g=Object(i.f)((function(e){e.props;var t=Object(c.useState)(!1),a=Object(o.a)(t,2),s=(a[0],a[1]),n=Object(c.useState)(!1),r=Object(o.a)(n,2),j=r[0],b=r[1],u=Object(c.useState)(!1),m=Object(o.a)(u,2),x=m[0],g=m[1],v=Object(c.useState)(!1),S=Object(o.a)(v,2),N=(S[0],S[1]),C=Object(c.useState)(""),w=Object(o.a)(C,2),E=(w[0],w[1],Object(c.useState)([])),P=Object(o.a)(E,2);return P[0],P[1],Object(c.useEffect)((function(){O.post("posts/posts").then((function(e){200===e.status?(j=e.data.posts,0===e.data.error&&e.data.posts?b(j):s(!0)):s(!0)})).catch((function(e){s(!0)}))}),[x]),setTimeout((function(){g(!1)}),5e3),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(d.a,{className:"mt-5",children:[Object(h.jsxs)(l.b,{to:{pathname:"/addPost/"},children:[" ",Object(h.jsx)(p.a,{variant:"outline-primary",size:"sm",className:"float-right mb-2",children:"Add New Post"})]}),Object(h.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"pb-2",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:"Content"}),Object(h.jsx)("th",{children:"Image"}),Object(h.jsx)("th",{children:"Action"})]})}),Object(h.jsx)("tbody",{children:j&&!!j.length&&j.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t+1}),Object(h.jsx)("td",{children:e.title}),Object(h.jsxs)("td",{children:[e.content.substring(0,50),"...."]}),Object(h.jsx)("td",{children:Object(h.jsx)("img",{src:"/postImages/".concat(e.id,"/").concat(e.image),alt:e.title,width:50,height:50})}),Object(h.jsxs)("td",{children:[Object(h.jsx)(l.b,{to:{pathname:"/editPost/",state:{id:e.id}},children:Object(h.jsx)(p.a,{variant:"outline-success",size:"sm",className:"ml-1",children:"Edit"})}),Object(h.jsx)(p.a,{variant:"outline-danger",size:"sm",className:"ml-2",onClick:function(){!function(e){console.log(e),N(e),O.post("posts/delete",{id:e}).then((function(e){200===e.status&&0===e.data.error?(g(e.data.message),console.log(e.data.message)):s(!0)})).catch((function(e){s(!0)})),i.a}(e.id)},children:"Delete"})]})]},e.id)}))})]})]}),Object(h.jsx)("p",{className:"text-danger text-center text-capitalize",children:x})]})}));var v=Object(i.f)((function(e){e.props;var t=Object(c.useState)(!1),a=Object(o.a)(t,2),s=(a[0],a[1]),n=Object(c.useState)(!1),r=Object(o.a)(n,2),j=r[0],b=r[1],u=Object(c.useState)(!1),m=Object(o.a)(u,2),x=m[0],g=m[1],v=Object(c.useState)(!1),S=Object(o.a)(v,2),N=(S[0],S[1]);return Object(c.useEffect)((function(){O.post("users/users").then((function(e){200===e.status?(j=e.data.users,0===e.data.error&&e.data.users?b(j):s(!0)):s(!0)})).catch((function(e){s(!0)}))}),[x]),setTimeout((function(){g(!1)}),5e3),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(d.a,{className:"mt-5",children:[Object(h.jsxs)(l.b,{to:{pathname:"/addAdmin/"},children:[" ",Object(h.jsx)(p.a,{variant:"outline-primary",size:"sm",className:"float-right mb-2",children:"Add New Admin"})]}),Object(h.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"pb-2",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Email"}),Object(h.jsx)("th",{children:"Action"})]})}),Object(h.jsx)("tbody",{children:j&&!!j.length&&j.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t+1}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.email}),Object(h.jsxs)("td",{children:[Object(h.jsx)(l.b,{to:{pathname:"/editAdmin/",state:{id:e.id}},children:Object(h.jsx)(p.a,{variant:"outline-success",size:"sm",className:"ml-1",children:"Edit"})}),Object(h.jsx)(p.a,{variant:"outline-danger",size:"sm",className:"ml-2",onClick:function(){!function(e){console.log(e),N(e),O.post("users/delete",{id:e}).then((function(e){200===e.status&&0===e.data.error?(g(e.data.message),console.log(e.data.message)):s(!0)})).catch((function(e){s(!0)})),i.a}(e.id)},children:"Delete"})]})]},e.id)}))})]})]}),Object(h.jsx)("p",{className:"text-danger text-center text-capitalize",children:x})]})})),S=a(90),N=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(o.a)(n,2),l=r[0],i=r[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),u=b[0],m=b[1],x=Object(c.useState)(""),f=Object(o.a)(x,2),g=f[0],v=f[1],N=Object(c.useState)(""),C=Object(o.a)(N,2),w=C[0],E=C[1],P=Object(c.useState)(""),y=Object(o.a)(P,2),I=y[0],L=y[1];return Object(c.useEffect)((function(){}),[I]),setTimeout((function(){L(!1)}),5e3),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{className:"pt-5",children:Object(h.jsxs)(S.a,{children:[Object(h.jsxs)(S.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(S.a.Label,{children:"Name"}),Object(h.jsx)(S.a.Control,{type:"text",placeholder:"Enter name",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)(S.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(S.a.Label,{children:"Email address"}),Object(h.jsx)(S.a.Control,{type:"email",placeholder:"Enter email",value:l,onChange:function(e){return i(e.target.value)}})]}),Object(h.jsxs)(S.a.Group,{controlId:"formBasicPassword",children:[Object(h.jsx)(S.a.Label,{children:"Password"}),Object(h.jsx)(S.a.Control,{type:"password",placeholder:"Password",value:u,onChange:function(e){return m(e.target.value)}})]}),Object(h.jsxs)(S.a.Group,{controlId:"formBasicCheckbox",children:[Object(h.jsx)(S.a.Label,{children:"Confirm Password"}),Object(h.jsx)(S.a.Control,{type:"password",placeholder:"Confirm Password",value:g,onChange:function(e){return v(e.target.value)}})]}),Object(h.jsx)(p.a,{variant:"primary",onClick:function(){O.post("users/create",{name:a,email:l,password:u,confirmPassword:g}).then((function(e){200===e.status?0===e.data.error&&e.data?L(e.data.message):(L(e.data.message),E(w)):E(w)})).catch((function(e){E(w)}))},children:"Submit"})]})}),I&&Object(h.jsx)("p",{className:"text-danger text-center text-capitalize",children:I})]})},C=function(e){var t=e.location.state.id,a=Object(c.useState)(""),s=Object(o.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(""),i=Object(o.a)(l,2),j=i[0],b=i[1],u=Object(c.useState)(""),m=Object(o.a)(u,2),x=m[0],f=m[1],g=Object(c.useState)(""),v=Object(o.a)(g,2),N=v[0],C=v[1],w=Object(c.useState)(""),E=Object(o.a)(w,2),P=E[0],y=E[1],I=Object(c.useState)(""),L=Object(o.a)(I,2),F=L[0],A=L[1];return Object(c.useEffect)((function(){O.post("users/edit",{id:t}).then((function(e){200===e.status&&0===e.data.error&&e.data?(console.log("result",e.data.user.name),r(e.data.user.name),b(e.data.user.email)):y(P)})).catch((function(e){y(P)}))}),[]),setTimeout((function(){A(!1)}),5e3),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{className:"pt-5",children:Object(h.jsxs)(S.a,{children:[Object(h.jsxs)(S.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(S.a.Label,{children:"Name"}),Object(h.jsx)(S.a.Control,{type:"text",placeholder:"Enter name",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(h.jsxs)(S.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(S.a.Label,{children:"Email address"}),Object(h.jsx)(S.a.Control,{type:"email",placeholder:"Enter email",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(h.jsxs)(S.a.Group,{controlId:"formBasicPassword",children:[Object(h.jsx)(S.a.Label,{children:"Password"}),Object(h.jsx)(S.a.Control,{type:"password",placeholder:"Password",value:x,onChange:function(e){return f(e.target.value)}})]}),Object(h.jsxs)(S.a.Group,{controlId:"formBasicCheckbox",children:[Object(h.jsx)(S.a.Label,{children:"Confirm Password"}),Object(h.jsx)(S.a.Control,{type:"password",placeholder:"Confirm Password",value:N,onChange:function(e){return C(e.target.value)}})]}),Object(h.jsx)(p.a,{variant:"primary",onClick:function(){O.post("users/update",{id:t,name:n,email:j,password:x,confirmPassword:N}).then((function(e){200===e.status?(0===e.data.error&&e.data||y(e.data.error),A(e.data.message)):y(e.data.error)})).catch((function(e){y(P)}))},children:"Submit"})]})}),Object(h.jsx)("p",{className:"text-danger text-center text-capitalize",children:F})]})},w=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(o.a)(n,2),l=r[0],i=r[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),u=(b[0],b[1],Object(c.useState)("")),m=Object(o.a)(u,2),x=m[0],f=m[1],g=Object(c.useState)(""),v=Object(o.a)(g,2),N=v[0],C=v[1],w=Object(c.useState)(""),E=Object(o.a)(w,2),P=E[0],y=E[1],I=Object(c.useState)("Choose File"),L=Object(o.a)(I,2),F=(L[0],L[1]),A=Object(c.useState)(!1),k=Object(o.a)(A,2),G=k[0],z=k[1];Object(c.useEffect)((function(){}),[N,P,G]),setTimeout((function(){C(!1)}),5e3);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(d.a,{className:"pt-5",children:[Object(h.jsx)("h1",{children:"Add New Post"}),Object(h.jsxs)(S.a,{className:"pt-3",children:[Object(h.jsxs)(S.a.Group,{controlId:"",children:[Object(h.jsx)(S.a.Label,{children:"Title"}),Object(h.jsx)(S.a.Control,{type:"text",placeholder:"Enter title",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)(S.a.Group,{controlId:"",children:[Object(h.jsx)(S.a.Label,{children:"Content"}),Object(h.jsx)(S.a.Control,{as:"textarea",placeholder:"Enter content",value:l,onChange:function(e){return i(e.target.value)}})]}),Object(h.jsxs)(S.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(h.jsx)(S.a.Label,{children:"Please select image"}),Object(h.jsx)(S.a.Control,{type:"file",accept:"image/*",onChange:function(e){y(e.target.files[0]),F(e.target.files[0].name)}})]}),P&&Object(h.jsx)("div",{className:"form-group preview",children:Object(h.jsx)("img",{src:P?URL.createObjectURL(P):null,alt:P?P.name:null,width:200,height:200})}),Object(h.jsx)(p.a,{variant:"primary",onClick:function(){return function(e){var t=new FormData;t.append("file",P),t.append("content",l),t.append("title",a),O.post("posts/create",t).then((function(e){200===e.status?0===e.data.error&&e.data?(C(e.data.message),z(G)):(C(e.data.message),f(x)):f(x)})).catch((function(e){f(x)}))}()},children:"Submit"})]})]}),N&&Object(h.jsx)("p",{className:"text-danger text-center text-capitalize",children:N})]})},E=function(e){var t=e.location.state.id,a=Object(c.useState)(""),s=Object(o.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(""),i=Object(o.a)(l,2),j=i[0],b=i[1],u=Object(c.useState)(""),m=Object(o.a)(u,2),x=(m[0],m[1],Object(c.useState)("")),f=Object(o.a)(x,2),g=f[0],v=f[1],N=Object(c.useState)(""),C=Object(o.a)(N,2),w=C[0],E=C[1],P=Object(c.useState)(""),y=Object(o.a)(P,2),I=y[0],L=y[1],F=Object(c.useState)("Choose File"),A=Object(o.a)(F,2),k=(A[0],A[1]),G=Object(c.useState)("Choose File"),z=Object(o.a)(G,2),B=z[0],D=z[1];Object(c.useEffect)((function(){O.post("posts/edit",{id:t}).then((function(e){200===e.status&&0===e.data.error&&e.data?(console.log("result",e.data.post.title),r(e.data.post.title),b(e.data.post.content),L(e.data.post.file),D(e.data.post)):v(g)})).catch((function(e){v(g)}))}),[]),setTimeout((function(){E(!1)}),5e3);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(d.a,{className:"pt-5",children:[Object(h.jsx)("h1",{children:"Edit Post"}),Object(h.jsxs)(S.a,{className:"pt-3",children:[Object(h.jsxs)(S.a.Group,{controlId:"",children:[Object(h.jsx)(S.a.Label,{children:"Title"}),Object(h.jsx)(S.a.Control,{type:"text",placeholder:"Enter title",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(h.jsxs)(S.a.Group,{controlId:"",children:[Object(h.jsx)(S.a.Label,{children:"Content"}),Object(h.jsx)(S.a.Control,{as:"textarea",placeholder:"Enter content",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(h.jsx)("div",{className:"form-group preview",children:Object(h.jsx)("img",{src:"/postImages/".concat(B.id,"/").concat(B.image),alt:B.title,width:200,height:200})}),Object(h.jsxs)(S.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(h.jsx)(S.a.Label,{children:"Please select new image "}),Object(h.jsx)(S.a.Control,{type:"file",accept:"image/*",onChange:function(e){L(e.target.files[0]),k(e.target.files[0].name)}})]}),Object(h.jsx)(p.a,{variant:"primary",onClick:function(){return function(){var e=new FormData;e.append("file",I),e.append("content",j),e.append("title",n),e.append("id",t),O.post("posts/update",e).then((function(e){200===e.status?(0===e.data.error&&e.data||v(e.data.error),E(e.data.message)):v(e.data.error)})).catch((function(e){v(g)}))}()},children:"Submit"})]})]}),Object(h.jsx)("p",{className:"text-danger text-center text-capitalize",children:w})]})};var P=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(d.a,{className:"mt-3",children:Object(h.jsxs)(x.a,{fill:!0,variant:"tabs",sticky:"top",defaultActiveKey:"/users",children:[Object(h.jsx)(l.b,{className:"ml-5",to:"/users",children:"Users"}),Object(h.jsx)(l.b,{className:"ml-5",to:"/posts",children:"Post"})]})}),Object(h.jsx)(i.b,{component:v,exact:!0,path:"/users"}),Object(h.jsx)(i.b,{component:g,exact:!0,path:"/posts"}),Object(h.jsx)(i.b,{component:N,exact:!0,path:"/addAdmin"}),Object(h.jsx)(i.b,{component:C,exact:!0,path:"/editAdmin"}),Object(h.jsx)(i.b,{component:w,exact:!0,path:"/addPost"}),Object(h.jsx)(i.b,{component:E,exact:!0,path:"/editPost"})]})})})},y=Object(c.createContext)();function I(){return Object(c.useContext)(y)}var L=function(e){var t,a,s=Object(c.useState)(!1),n=Object(o.a)(s,2),r=(n[0],n[1]),l=Object(c.useState)(""),j=Object(o.a)(l,2),b=j[0],u=j[1],m=Object(c.useState)(""),x=Object(o.a)(m,2),f=x[0],g=x[1],v=Object(c.useState)(""),N=Object(o.a)(v,2),C=N[0],w=N[1],E=I(),P=E.authData,y=E.setAuth,L=(null===e||void 0===e||null===(t=e.location)||void 0===t||null===(a=t.state)||void 0===a?void 0:a.referer)||"/";return P?Object(h.jsx)(i.a,{to:L}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{className:"pt-5 ",children:Object(h.jsxs)(S.a,{className:"col-6 ",children:[Object(h.jsxs)(S.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(S.a.Label,{children:"Email address"}),Object(h.jsx)(S.a.Control,{type:"email",placeholder:"Enter email",value:b,onChange:function(e){return u(e.target.value)}})]}),Object(h.jsxs)(S.a.Group,{controlId:"formBasicPassword",children:[Object(h.jsx)(S.a.Label,{children:"Password"}),Object(h.jsx)(S.a.Control,{type:"password",placeholder:"Password",value:f,onChange:function(e){return g(e.target.value)}})]}),Object(h.jsx)(p.a,{variant:"primary",onClick:function(){O.post("/login",{email:b,password:f}).then((function(e){if(200===e.status)if(0===e.data.error&&e.data.authData){y(e.data.authData);var t=e.data.authData;localStorage.setItem("user",t),w(e.data.authData.message)}else w(e.data.message),r(!0);else r(!0)})).catch((function(e){r(!0)}))},children:"Log in"})]})}),C&&Object(h.jsx)("p",{className:"text-danger text-center text-capitalize",children:C})]})};var F=function(){var e=I(),t=e.authed,a=e.setAuth;return Object(c.useEffect)((function(){a(),localStorage.clear()}),[a]),t?null:Object(h.jsx)(i.a,{to:"/"})},A=a(44),k=a.n(A);var G=function(e){var t,a,s=I(),n=s.authData,r=s.setAuth;Object(c.useEffect)((function(){u.a.CancelToken.source();try{r(localStorage.getItem("user"))}catch(e){r(null)}}),[r]);var o=(null===e||void 0===e||null===(t=e.location)||void 0===t||null===(a=t.state)||void 0===a?void 0:a.referer)||"/";return n?Object(h.jsx)(i.a,{to:o.pathname}):null===n?Object(h.jsx)(i.a,{to:{pathname:"/login",state:{referer:o}}}):Object(h.jsx)(k.a,{wait:2e3,children:Object(h.jsx)("h1",{children:"Logging in..."})})},z=a(28),B=a(47),D=["component"];function T(e){var t=e.component,a=Object(B.a)(e,D),c=I().authData;return Object(h.jsx)(i.b,Object(z.a)(Object(z.a)({},a),{},{render:function(e){return c?Object(h.jsx)(t,Object(z.a)({},e)):Object(h.jsx)(i.a,{to:{pathname:"/auth",state:{referer:e.location}}})}}))}T.defaultProps={location:null};var R=T,U=a(12),H=a.n(U);function J(e){var t=e.children,a=Object(c.useState)(!1),s=Object(o.a)(a,2),n=s[0],r=s[1],l=I().setAuth;return Object(c.useEffect)((function(){localStorage.getItem("user");n||(l(localStorage.getItem("user")),r(!0))}),[n,l]),Object(h.jsx)(h.Fragment,{children:n?t:null})}J.propTypes={children:H.a.array},J.defaultProps={children:[]};var M=J,K=a(89),q=function(){return Object(h.jsx)("h1",{children:"404: Page Not Found"})};var Q=function(e){var t=e.location.state.id,a=Object(c.useState)(""),s=Object(o.a)(a,2),n=s[0],r=s[1],l=Object(c.useState)(),i=Object(o.a)(l,2),b=(i[0],i[1]);return Object(c.useEffect)((function(){O.post("posts/post",{id:t}).then((function(e){200===e.status?(n=e.data.post,console.log(n),0===e.data.error&&e.data.post?r(n):b(!0)):b(!0)})).catch((function(e){b(!0)}))}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.a,{className:"pt-5",children:[Object(h.jsx)("h1",{className:"text-center",children:n.title}),Object(h.jsxs)(j.a,{className:"pt-2",children:[Object(h.jsx)("img",{src:"/postImages/".concat(n.id,"/").concat(n.image),alt:n.title,className:"align-self-center mr-4",width:64,height:64}),Object(h.jsx)(j.a.Body,{children:Object(h.jsx)("p",{children:n.content})})]})]})})};var V=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],s=t[1],n=function(){return a?Object(h.jsxs)("span",{children:["Hello ",a.email]}):null};return Object(h.jsx)(y.Provider,{value:{authData:a,setAuth:function(e){s(e)}},children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(M,{children:Object(h.jsx)(K.a,{collapseOnSelect:!0,sticky:"top",expand:"sm",bg:"dark",variant:"dark",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(K.a.Brand,{className:"mb-1 ",to:"/",children:" Micro Blog"}),Object(h.jsx)(K.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsxs)(K.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsxs)(x.a,{className:"mr-auto ",children:[Object(h.jsx)(l.b,{className:"ml-2",to:"/",children:"Home"}),a?Object(h.jsx)(l.b,{className:"ml-2",to:"/admin",children:"Admin Page"}):""]}),Object(h.jsxs)(x.a,{className:"ml-auto mt-2",children:[a?Object(h.jsx)(l.b,{className:"ml-2",to:"/logout",children:"Logout"}):Object(h.jsx)(l.b,{className:"ml-2",to:"/login",children:"Login"}),Object(h.jsx)(l.b,{className:"ml-2",to:"#",children:Object(h.jsx)(n,{})})]})]})]})})}),Object(h.jsx)(i.b,{component:m,exact:!0,path:"/"}),Object(h.jsx)(i.b,{component:L,exact:!0,path:"/login"}),Object(h.jsx)(i.b,{component:G,exact:!0,path:"/auth"}),Object(h.jsx)(i.b,{component:F,exact:!0,path:"/logout"}),Object(h.jsx)(i.b,{component:Q,exact:!0,path:"/singlePost"}),Object(h.jsx)(R,{component:P,path:"/admin"}),Object(h.jsx)(i.b,{component:q,path:"/pages/NotFoundPage"})]})})};a(83);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(V,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.deb6bc9d.chunk.js.map