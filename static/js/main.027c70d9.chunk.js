(this["webpackJsonpmini-project"]=this["webpackJsonpmini-project"]||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(17),c=a.n(r),s=a(44),o=a(5),i=a(14),m=(a(91),a(4)),u=a.n(m),p=a(10),d=a(167),E=a(37),b=a(19),g=function(e){var t=Object(E.a)(),a=t.register,n=t.handleSubmit,r=Object(o.f)(),c=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,d.a.signIn(t.email,t.password);case 4:a=e.sent,console.log(a),b.b.success("you are successfuly logged in."),r.push("home"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),b.b.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"box-form login ".concat(e.class)},l.a.createElement("div",{className:"box-login-tab"}),l.a.createElement("div",{className:"box-login-title"},l.a.createElement("h5",{style:{marginLeft:"3em",marginTop:"10px"}},"LOGIN")),l.a.createElement("div",{className:"box-login"},l.a.createElement("div",{className:"fieldset-body"},l.a.createElement("button",{onClick:e.click,className:"b b-form",title:"Mais Informa\xe7\xf5es"},"Register"),l.a.createElement("form",{onSubmit:n(c)},l.a.createElement("p",{className:"field"},l.a.createElement("label",null,"E-MAIL"),l.a.createElement("input",{ref:a,name:"email",type:"email"})),l.a.createElement("p",{className:"field"},l.a.createElement("label",null,"PASSWORD"),l.a.createElement("input",{ref:a,name:"password",type:"password"})),l.a.createElement("input",{type:"submit",value:"Login"})))))},f=a(82),v=function(e){var t=Object(E.a)(),a=t.register,n=t.handleSubmit,r=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.signUp(Object(f.a)({},t));case 3:a=e.sent,console.log(a),b.b.success("you are successfuly signed up now log in."),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),b.b.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:" ".concat(e.class)},l.a.createElement("div",{className:"box-login-tab"}),l.a.createElement("div",{className:"box-login-title"},l.a.createElement("h5",{style:{marginLeft:"3em",marginTop:"10px"}},"Register")),l.a.createElement("div",{className:"box-login"},l.a.createElement("div",{className:"fieldset-body"},l.a.createElement("button",{onClick:e.click,className:"b b-form"},"Login"),l.a.createElement("form",{onSubmit:n(r)},l.a.createElement("p",{className:"field"},l.a.createElement("label",null,"E-MAIL"),l.a.createElement("input",{ref:a,name:"username",type:"email"})),l.a.createElement("p",{className:"field"},l.a.createElement("label",null,"PASSWORD"),l.a.createElement("input",{ref:a,name:"password",type:"password",title:"Password"})),l.a.createElement("input",{type:"submit",value:"Register"})))))};var x=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"box"},l.a.createElement(g,{click:function(){r(!0)},class:a?"l-opacity":"l-opacity2"}),l.a.createElement(v,{click:function(){r(!1)},class:a?"loginbox":"loginbox2"}))},N=a(165),y=a(166),h=a(169),O=function(e){return l.a.createElement("td",{style:{border:"2px solid #483187"},className:"text-center"},e.children)},w=a(168);var I=function(){var e=Object(w.a)({dragdrop:{border:"2px solid #483187",height:"50px",width:"100%",lineHeight:"45px",textAlign:"center",marginBottom:"0.8em"},uploadbtn:{background:"#483187",width:"100%"}})();return l.a.createElement("div",null,l.a.createElement("input",{className:e.dragdrop,type:"file",onChange:function(e){var t=e.target.files[0];(t=new File([t],'file"name',{type:t.type})).src=URL.createObjectURL(e.target.files[0])}}),l.a.createElement(h.a,{className:e.uploadbtn},"Upload"))};var S=function(e){return l.a.createElement(N.a,{style:{marginTop:"15%"}},l.a.createElement(y.a,{style:{border:"2px solid #483187"},striped:!0,bordered:!0,hover:!0},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement(O,null,"test"),l.a.createElement(O,null,l.a.createElement(h.a,{className:"w-100",variant:"danger"},"Delete")),l.a.createElement(O,null,l.a.createElement(h.a,{className:"w-100",style:{backgroundColor:"#483187"}},"Share"))))),l.a.createElement(I,null))};a(150),a(151);var k=function(e){return l.a.createElement(s.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:x}),l.a.createElement(o.a,{path:"/Home",exact:!0,component:S})),l.a.createElement(b.a,null))},L=a(39);a(38).a.configure({Auth:{mandatorySignIn:!0,region:L.cognito.REGION,userPoolId:L.cognito.USER_POOL_ID,userPoolWebClientId:L.cognito.APP_CLIENT_ID}}),c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root"))},39:function(e){e.exports=JSON.parse('{"cognito":{"REGION":"us-east-2","USER_POOL_ID":"us-east-2_NGv0LEYIm","APP_CLIENT_ID":"gl430gljcd4rmul0uv32mievs"}}')},86:function(e,t,a){e.exports=a(153)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.027c70d9.chunk.js.map