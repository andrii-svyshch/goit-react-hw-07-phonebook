(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{18:function(e,t,n){e.exports={form:"ContactForm_form__1tat8"}},19:function(e,t,n){e.exports={filter:"Filter_filter__1YYud"}},20:function(e,t,n){e.exports={item:"ContactList_item__jC9zY"}},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),o=n(7),i=n.n(o),s=n(3),b=n(9),j=n(4),u=n(15),l=n.n(u),d=n(5),O=n(16),f=n.n(O),m=n(10),h=n(2),p=n(38),x=Object(j.b)("contacts.Add",(function(e,t){return{payload:{name:e,number:t,id:Object(p.a)()}}})),v=Object(j.b)("contacts/Delete"),g=Object(j.b)("contacts/Filter"),C=Object(j.c)([],(c={},Object(m.a)(c,x,(function(e,t){var n=t.payload;return[].concat(Object(b.a)(e),[n])})),Object(m.a)(c,v,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),y=Object(j.c)("",Object(m.a)({},g,(function(e,t){return t.payload}))),k=Object(h.b)({items:C,filter:y}),_=[].concat(Object(b.a)(Object(j.d)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})),[l.a]),w={key:"phonebook",storage:f.a,blacklist:["filter"]},A=Object(j.a)({reducer:{contacts:Object(d.g)(w,k)},middleware:_,devTools:!1}),z={store:A,persistor:Object(d.h)(A)},F=n(17),N=n(13),S=n(18),D=n.n(S),J=function(e){return e.contacts.items},L=function(e){return e.contacts.filter},Y=function(e){var t=J(e),n=L(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},Z=n(1);function q(){var e=Object(r.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),o=Object(N.a)(a,2),i=o[0],b=o[1],j=Object(s.c)(J),u=Object(s.b)(),l=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":c(r);break;case"number":b(r)}};return Object(Z.jsx)("div",{children:Object(Z.jsxs)("form",{className:D.a.form,onSubmit:function(e){e.preventDefault();!function(e){return j.find((function(t){return t.name===e}))}(n)?u(x(n,i)):alert("".concat(n," is already in contacts")),c(""),b("")},children:[Object(Z.jsx)("label",{htmlFor:"",children:"Name"}),Object(Z.jsx)("input",{type:"text",name:"name",value:n,onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(Z.jsx)("label",{htmlFor:"",children:"Number"}),Object(Z.jsx)("input",{type:"tel",name:"number",value:i,onChange:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(Z.jsx)("button",{type:"submit",children:"Add contact"})]})})}var B=n(19),M=n.n(B);function E(){var e=Object(s.c)(L),t=Object(s.b)();return Object(Z.jsx)("div",{className:M.a.filter,children:Object(Z.jsxs)("label",{children:["Find contacts by name",Object(Z.jsx)("input",{type:"text",value:e,onChange:function(e){return t(g(e.target.value))}})]})})}var I=n(20),P=n.n(I);function T(){var e=Object(s.c)(Y),t=Object(s.b)();return Object(Z.jsx)("ul",{children:e.map((function(e){var n=e.name,c=e.number,r=e.id;return Object(Z.jsxs)("li",{className:P.a.item,children:[Object(Z.jsxs)("p",{children:[n," : ",c]}),Object(Z.jsx)("button",{onClick:function(){return t(v(r))},children:"Delete"})]},Object(p.a)())}))})}function $(){return Object(Z.jsxs)("div",{className:"container",children:[Object(Z.jsx)("h1",{children:"Phonebook"}),Object(Z.jsx)(q,{}),Object(Z.jsx)("h2",{children:"Contacts"}),Object(Z.jsx)(E,{}),Object(Z.jsx)(T,{})]})}n(36);i.a.render(Object(Z.jsx)(a.a.StrictMode,{children:Object(Z.jsx)(s.a,{store:z.store,children:Object(Z.jsx)(F.a,{loading:null,persistor:z.persistor,children:Object(Z.jsx)($,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.39ee347a.chunk.js.map