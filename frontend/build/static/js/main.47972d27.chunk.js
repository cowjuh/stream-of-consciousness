(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(n,e,t){},132:function(n,e,t){},159:function(n,e){},168:function(n,e,t){},170:function(n,e,t){"use strict";t.r(e);var o,c,i=t(1),a=t.n(i),r=t(92),l=t.n(r),s=(t(102),t(4)),d=t(13),b=t(8),u=(t(36),t(2)),j=t(3),x=t(6),h=t.n(x),p=t(0),g=j.a.div(o||(o=Object(u.a)(["\n    background-color: ",";\n    display: inline-block;\n    color: ",";\n    border-radius: 5px;\n    padding: 2px 8px;\n    margin-right: 5px;\n    margin-bottom: 5px;\n    cursor: pointer;\n    transition: all 250ms;\n\n    :hover{\n        background-color: #e91e63;\n        color: white;\n    }\n"])),(function(n){return n.hover?"#e91e63":"#E4E6E8"}),(function(n){return n.hover?"white":"#70777F"})),f=function(n){return Object(p.jsx)(g,{hover:n.hover,onClick:function(){return n.onClick(n.value)},children:n.value})},O=j.a.button(c||(c=Object(u.a)(["\n    display: inline-block;\n    text-align: center;\n    border-radius: 5px;\n    font-weight: 600;\n    transition: all 250ms;\n    margin-right: 10px;\n    padding: 5px 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    color: $color-black;\n    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);\n    border: solid 3px transparent;\n    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #e1f549, #29d0be, #6cb8ea, #ff5959);\n    background-origin: border-box;\n    background-clip: content-box, border-box;\n    box-shadow: 2px 1000px 1px #fff inset;\n      \n      :hover {\n        box-shadow: none;\n        color: white;\n      }\n"]))),m=function(n){return Object(p.jsx)(O,{onClick:n.onClick,children:n.value})};function v(n){return h.a.get("api/notes/user/".concat(n)).then((function(n){return n.data})).catch((function(n){return console.log(n)}))}function w(n){return n.split(",").filter((function(n){return/\S/.test(n)}))}var k,y,S,C,E,N,F,A,T=t(12),L=t(9),D=t(43),z=t.n(D),_=function(n){return Object(p.jsx)("div",{children:Object(p.jsx)(D.GoogleLogout,{clientId:"979808801196-vn8rcr3df9c1qtgm1adfo4geksn3sioi.apps.googleusercontent.com",buttonText:"Log Out",onLogoutSuccess:function(e){console.log("Logout made successfully"),n.handleLogout()}})})},I=j.a.div(k||(k=Object(u.a)(["\n    height: 100vh;\n    width: ",";\n    padding: ",";\n    position: fixed;\n    background-color: white;\n    z-index: 2;\n    overflow-x: hidden;\n    border-right: 1px solid #E6E6E6;\n    transition: all 250ms;\n\n    ::-webkit-scrollbar{\n        display: none;\n    }\n"])),(function(n){return n.mobile?"300px":"250px"}),(function(n){return n.mobile?"0px 30px 30px 30px":"30px"})),M=j.a.div(y||(y=Object(u.a)(["\n    margin-bottom: 20px;\n    position: relative;\n"]))),U=j.a.div(S||(S=Object(u.a)(["\n    cursor: pointer;\n    padding: 2px 0px;\n    overflow: hidden; \n    margin-top: -1px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 600;\n    color: ",";\n\n    :hover {\n        color: #e91e63;\n    }\n"])),(function(n){return n.active?"#3f51b5":"#555555"})),W=j.a.h5(C||(C=Object(u.a)(["\n    margin-top: 20px;\n    text-transform: uppercase;\n    font-size: 12px;\n    color: gray;\n"]))),R=Object(j.a)(d.b)(E||(E=Object(u.a)(["\n    text-decoration: none;\n    color: inherit;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n        color: black;\n    }\n"]))),B=j.a.div(N||(N=Object(u.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 56px;\n    padding: 10px 0px;\n    border-bottom: 1px solid #F6F6F6;\n    background-color: white;\n"]))),P=j.a.h2(F||(F=Object(u.a)(["\n    color: black;\n    display: inline-block;\n    margin: 0;\n    transition: all 250ms;\n    :hover {\n        background: -webkit-linear-gradient(110deg, #e1f549, #29d0be, #6cb8ea, #ff5959);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n"]))),G=function(n){n.tags;var e=n.notes,t=n.categories,o=Object(i.useState)(5),c=Object(s.a)(o,2),a=c[0],r=c[1],l=n.handleLogout,d=function(){n.toggleSidebar&&n.toggleSidebar()};return Object(p.jsxs)(I,{mobile:!!n.mobile,children:[Object(p.jsx)(M,{children:n.mobile?Object(p.jsxs)(B,{children:[Object(p.jsx)(R,{to:{pathname:"/"},onClick:d,children:Object(p.jsx)(P,{children:"Notule."})}),Object(p.jsx)(T.a,{icon:L.h,style:{fontSize:"18px"},onClick:d})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(R,{to:{pathname:"/"},children:Object(p.jsx)(P,{children:"Notule."})})})}),Object(p.jsx)(M,{children:Object(p.jsx)(R,{to:{pathname:"/new"},onClick:d,children:Object(p.jsx)(m,{value:"New Note"})})}),Object(p.jsxs)(M,{children:[Object(p.jsx)(W,{children:"CATEGORY"}),Object(p.jsx)(R,{onClick:d,to:{pathname:"/category/All"},children:Object(p.jsx)(U,{children:"All"})}),t&&t.map((function(n){return Object(p.jsx)(R,{onClick:d,to:{pathname:"/category/".concat(n)},children:Object(p.jsx)(U,{children:n})})}))]}),Object(p.jsxs)(M,{children:[Object(p.jsx)(W,{children:"RECENT"}),e&&e.slice(0).reverse().slice(0,a).map((function(n){return Object(p.jsx)(R,{onClick:d,to:{pathname:"/note/".concat(n._id)},children:Object(p.jsx)(U,{children:n.title})})})),e&&e.length>5&&Object(p.jsx)("a",{style:{cursor:"pointer"},className:"link",onClick:function(){r(5===a?e.length:5)},children:5===a?"Show all...":"Show less..."})]}),Object(p.jsx)(_,{handleLogout:l})]})},J=t(45),Y=t(96),q=t.n(Y),K=t(47),H=t.n(K),V=(t(132),H.a.defaults.allowedTags.concat(["img","h1","h2","h3"])),$=Object.assign({},H.a.defaults.allowedAttributes,{img:["alt","src"]}),Q={p:{color:"blue"}};function X(n){var e=n.text;return Object(p.jsx)("div",{style:Q,dangerouslySetInnerHTML:{__html:H()(q()(e.replace(/href/g,"target='_blank' href")),{allowedTags:V,allowedAttributes:$})}})}var Z=j.a.div(A||(A=Object(u.a)(["\n  max-width: 750px;\n"])));function nn(n){var e=n.content;return Object(p.jsx)(Z,{children:Object(p.jsx)(X,{text:e})})}var en,tn,on,cn,an,rn,ln,sn,dn,bn,un,jn,xn,hn,pn=t(18),gn=t.n(pn),fn=t(29),On=t.n(fn),mn=j.a.div(en||(en=Object(u.a)(["\n    background-color: ",";\n    display: inline-block;\n    color: ",";\n    border-radius: 20px;\n    padding: 1px 8px;\n    transition: all 250ms;\n      \n      :hover {\n        color: white;\n        background-color: #e91e63;\n      }\n"])),(function(n){return n.hover?"#e91e63":"#E4E6E8"}),(function(n){return n.hover?"white":"#70777F"})),vn=Object(j.a)(d.b)(tn||(tn=Object(u.a)(["\n    text-decoration: none;\n    color: inherit;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n        color: inherit;\n    }\n"]))),wn=function(n){return Object(p.jsx)(vn,{to:{pathname:"/category/".concat(n.value)},children:Object(p.jsx)(mn,{hover:n.hover,children:n.value})})};j.a.div(on||(on=Object(u.a)(["\n    background-color: #F9F9F9;\n    border: none;\n    border-radius: 5px;\n    padding: 20px;\n    margin-bottom: 20px;\n    width: 100%;\n\n    background-image: radial-gradient(#E7E7E7 1px, #F9F9F9 1px);\n    background-size: 20px 20px;\n"]))),j.a.div(cn||(cn=Object(u.a)(["\n    width: 100%;\n"]))),j.a.form(an||(an=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: start;\n"]))),j.a.input(rn||(rn=Object(u.a)(["\n    border-radius: 3px;\n    border: none;\n    padding: 5px;\n    background-color: white;\n    margin-bottom: 10px;\n    min-width: 500px;\n    width: 100%;\n    @media(max-width: 768px){\n        min-width: 0;\n    }\n"]))),j.a.textarea(ln||(ln=Object(u.a)(["\n    border-radius: 3px;\n    border: none;\n    padding: 5px;\n    margin-bottom: 10px;\n    background-color: white;\n    min-height: 300px;\n    min-width: 500px;\n    width: 100%;\n    @media(max-width: 768px){\n        min-width: 0;\n        min-height: 60vh;\n    }\n"]))),j.a.div(sn||(sn=Object(u.a)(["\n    width: 100%;\n"])));var kn,yn,Sn,Cn,En,Nn=j.a.div(dn||(dn=Object(u.a)(["\n    position: relative;\n    cursor: pointer;\n    background-color: #F9F9F9;\n    border: none;\n    border-radius: 5px;\n    padding: 20px;\n    min-width: 100px;\n    min-height: 200px;\n    transition: all 250ms;\n\n    @media(max-width: 768px){\n        min-width: 0;\n    }\n\n    :hover {\n        transform: scale(1.02);\n        background-color: #fde8ef;\n    }\n\n    :hover h4{\n        color: #e91e63;\n    }\n\n    :hover p{\n        color: #e91e63;\n    }\n"]))),Fn=Object(j.a)(d.b)(bn||(bn=Object(u.a)(["\n    text-decoration: none;\n    color: inherit;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n        color: inherit;\n    }\n"]))),An=j.a.div(un||(un=Object(u.a)(["\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;  \n    color: #7A7F89;\n    color: ",";\n    transition: all 250ms;\n"])),(function(n){return n.color})),Tn=j.a.div(jn||(jn=Object(u.a)(["\n    display: inline-block;\n    width: 100%;\n    padding: 60px 20px 5px 20px;\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    transition: all 250ms;\n    background-image: linear-gradient(#fde8ef00, #fde8ef00 ,#fde8ef);\n"]))),Ln=j.a.p(xn||(xn=Object(u.a)(["\n    margin: 0;\n"]))),Dn=j.a.h4(hn||(hn=Object(u.a)(["\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;  \n"]))),zn=function(n){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),o=(t[0],t[1],Object(i.useState)(n.title)),c=Object(s.a)(o,2),a=c[0],r=(c[1],Object(i.useState)(n.content)),l=Object(s.a)(r,2),d=l[0],b=(l[1],Object(i.useState)(n.category)),u=Object(s.a)(b,2),j=u[0],x=(u[1],Object(i.useState)(n.tags)),h=Object(s.a)(x,2),g=h[0],O=(h[1],Object(i.useState)()),m=Object(s.a)(O,2),v=(m[0],m[1],Object(i.useState)(!1)),w=Object(s.a)(v,2),k=w[0],y=w[1],S=n.id;new Date(n.createdAt).toDateString(),new Date(n.updatedAt).toDateString();gn.a.extend(On.a);gn()().to(n.updatedAt);var C=gn()().to(n.createdAt);return Object(p.jsx)(Fn,{style:{textDecoration:"none"},to:"/note/".concat(S),children:Object(p.jsx)(Nn,{onMouseOver:function(){return y(!0)},onMouseLeave:function(){return y(!1)},children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[Object(p.jsx)(Ln,{children:C}),j&&Object(p.jsx)(wn,{hover:k,value:j})]}),Object(p.jsx)(Dn,{children:a}),Object(p.jsx)(An,{color:k?"#e91e6373":"#7A7F89",children:d}),g&&k&&Object(p.jsx)(Tn,{className:"mb-4",children:g.map((function(n){return Object(p.jsx)(f,{hover:k,value:n})}))})]})})})},_n=j.a.div(kn||(kn=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));\n    gap: 1.5rem;\n    width: 100%;\n"])));function In(n){var e=n.notes;return Object(p.jsx)(_n,{children:e&&e.slice(0).reverse().map((function(e){return Object(p.jsx)(zn,{id:e._id,title:e.title,content:e.content,category:e.category,tags:e.tags&&e.tags,createdAt:e.createdAt,updatedAt:e.updatedAt,handleDelete:function(){return n.handleDelete(e._id)}},e._id)}))})}var Mn,Un,Wn;j.a.div(yn||(yn=Object(u.a)(["\n    width: 100%;\n"]))),j.a.form(Sn||(Sn=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: start;\n    margin-bottom: 20px;\n"]))),j.a.input(Cn||(Cn=Object(u.a)(["\n    border-radius: 3px;\n    border: none;\n    padding: 5px;\n    background-color: #f0f2f5;\n    margin-bottom: 10px;\n    width: 100%;\n"]))),j.a.textarea(En||(En=Object(u.a)(["\n    border-radius: 3px;\n    border: none;\n    padding: 5px;\n    margin-bottom: 10px;\n    background-color: #f0f2f5;\n    min-height: 80px;\n    box-sizing:border-box;\n    -webkit-box-sizing: border-box;\n    width: 100%;\n    @media(max-width: 768px){\n        min-height: 60vh;\n    }\n"])));var Rn=j.a.input(Mn||(Mn=Object(u.a)(["\n    border-radius: 3px;\n    border: none;\n    padding: 5px;\n    background-color: #f0f2f5;\n    width: 100%;\n    @media(max-width: 768px){\n        min-width: 0;\n    }\n"]))),Bn=j.a.div(Un||(Un=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n"])));Object(j.a)(T.a)(Wn||(Wn=Object(u.a)(["\n    color: #D6D6D6;\n    cursor: pointer;\n    :hover {\n      color: gray;\n    }\n"])));function Pn(){var n=Object(i.useState)(),e=Object(s.a)(n,2),t=e[0],o=e[1],c=Object(i.useState)(),a=Object(s.a)(c,2),r=a[0],l=a[1],d=Object(i.useState)(null),b=Object(s.a)(d,2),u=b[0],j=b[1],x=Object(i.useState)(!1),g=Object(s.a)(x,2),f=(g[0],g[1]),O=Object(i.useState)("list"),m=Object(s.a)(O,2);m[0],m[1];Object(i.useEffect)((function(){h.a.get("/notes/").then((function(n){l(n.data),f(!0),o(!1)})).catch((function(n){return console.log(n)}))}),[t]);return Object(p.jsxs)(J.a,{className:"px-4 d-flex flex-column justify-content-center align-items-center",children:[Object(p.jsx)(Bn,{children:Object(p.jsx)("form",{onSubmit:function(n){n.preventDefault(),h.a.get("notes/filterByTag/?tag=".concat(u)).then((function(n){l(n.data)})).catch((function(n){return console.log(n)}))},className:"mt-4",children:Object(p.jsx)(Rn,{type:"text",placeholder:"Filter by tag",onChange:function(n){return j(n.target.value)}})})}),Object(p.jsx)(In,{notes:r,handleDelete:function(n){h.a.delete("notes/".concat(n)).then(console.log("Note deleted!")).catch((function(n){return console.log(n)}));var e=r.filter((function(e){return e._id!==n}));l(e)}})]})}t(168);var Gn,Jn,Yn,qn,Kn,Hn,Vn,$n,Qn,Xn,Zn,ne,ee,te,oe,ce,ie,ae=j.a.div(Gn||(Gn=Object(u.a)(["\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    padding: 10px;\n    border-radius: 10px;\n    transition: all 250ms;\n    font-size: 14px;\n    margin-right: ",";\n    background-color: ",";\n\n    :hover {\n        transform: scale(1.1);\n    }\n"])),(function(n){return n.margin?"10px":"none"}),(function(n){return n.color+"30"})),re=function(n){return Object(p.jsx)(ae,{margin:n.margin,onClick:n.onClick?function(){return n.onClick()}:null,color:n.color,children:Object(p.jsx)(T.a,{color:n.color,icon:n.icon})})},le=function(){var n=Object(i.useState)(window.innerWidth),e=Object(s.a)(n,2),t=e[0],o=e[1],c=Object(i.useState)(!1),a=Object(s.a)(c,2),r=a[0],l=a[1];return Object(i.useEffect)((function(){var n=function(){o(window.innerWidth),l(window.innerWidth<768)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),{width:t,isMobile:r}},se=j.a.div(Jn||(Jn=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  padding: 0px 30px;\n  position: relative;\n\n  @media (max-width: 768px) {\n    height: 95vh;\n  }\n"]))),de=j.a.div(Yn||(Yn=Object(u.a)(["\n  padding: 10px 0px;\n  border-bottom: 1px solid #f6f6f6;\n"]))),be=j.a.div(qn||(qn=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  border-bottom: 1px solid #f6f6f6;\n  background-color: white;\n  position: fixed;\n"]))),ue=j.a.div(Kn||(Kn=Object(u.a)(["\n  height: auto;\n  min-width: 50%;\n  flex: 1;\n  border: none;\n  resize: none;\n  margin: 0px;\n\n  :focus {\n    outline: none !important;\n    color: black;\n  }\n"]))),je=j.a.div(Hn||(Hn=Object(u.a)(["\n  display: flex;\n  height: 30px;\n  align-items: center;\n"]))),xe=Object(j.a)(T.a)(Vn||(Vn=Object(u.a)(["\n  font-size: 14px;\n  margin-right: 10px;\n"]))),he=j.a.p($n||($n=Object(u.a)(["\n  cursor: default;\n  margin: 0;\n  color: gray;\n  margin-right: 10px;\n  display: inline-block;\n  min-width: 120px;\n"]))),pe=j.a.div(Qn||(Qn=Object(u.a)(["\n  height: auto;\n  min-width: 50%;\n  border-left: 1px solid #e6e6e6;\n  padding: 10px;\n"]))),ge=j.a.div(Xn||(Xn=Object(u.a)(["\n  display: ",";\n  justify-content: space-between;\n  width: 100%;\n"])),(function(n){return n.isMobile?"block":"flex"})),fe=j.a.h5(Zn||(Zn=Object(u.a)(["\n  margin-top: 20px;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: gray;\n"]))),Oe=function(n){var e=n.user,t=Object(i.useState)(n&&n.title),o=Object(s.a)(t,2),c=o[0],a=o[1],r=Object(i.useState)(n&&n.content),l=Object(s.a)(r,2),u=l[0],j=l[1],x=Object(i.useState)(n&&n.content),g=Object(s.a)(x,2),O=g[0],v=g[1],k=Object(i.useState)(n&&n.category),y=Object(s.a)(k,2),S=y[0],C=y[1],E=Object(i.useState)(n&&n.tags),N=Object(s.a)(E,2),F=N[0],A=N[1],T=Object(i.useState)(),D=Object(s.a)(T,2),z=D[0],_=D[1],I=Object(i.useState)(!1),M=Object(s.a)(I,2),U=M[0],W=M[1],R=Object(i.useState)(!!n.newNote),B=Object(s.a)(R,2),P=B[0],G=(B[1],Object(i.useState)()),J=Object(s.a)(G,2),Y=J[0],q=J[1],K=n&&n.id;gn.a.extend(On.a);var H=n&&gn()().to(n.updatedAt),V=(n&&gn()().to(n.createdAt),Object(b.g)()),$=new URLSearchParams(window.location.search).get("category"),Q=le().isMobile,X=function(n){var e="".concat(n);V.push(e)};return Object(p.jsx)(d.a,{children:Object(p.jsxs)(se,{children:[Object(p.jsx)(be,{children:P?Object(p.jsx)(m,{onClick:function(){var t;z?(t=w(z),A(t)):t=F;var o={userID:e._id,title:c,content:u,category:S,tags:t};h.a.post("api/notes/add",o).then((function(n){console.log(n.data),X("/note/".concat(n.data))})).catch((function(n){console.log(n)})),n.handleUpdate()},value:"Create"}):Object(p.jsxs)(p.Fragment,{children:[U?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{onClick:function(){var e;n.handleUpdate(),z?(e=w(z),A(e)):e=F;var t={title:c,content:u,category:S,tags:e};h.a.post("api/notes/update/".concat(K),t).then((function(n){console.log(n.data)})).catch((function(n){console.log(n)})),W(!1)},value:"Save"}),Object(p.jsx)("a",{onClick:function(){return W(!1)},style:{color:"#888888",cursor:"pointer"},className:"m-0 mr-2",children:"Cancel"})]}):Object(p.jsx)(re,{margin:!0,onClick:function(){return W(!0)},color:"#3f51b5",icon:L.e}),Object(p.jsx)(re,{margin:!0,onClick:function(){navigator.clipboard.writeText("http://hellohellohello.world/note/".concat(K)),q(!0);var n=setTimeout((function(){q(!1)}),3e3);return function(){return clearTimeout(n)}},color:"#4caf97",icon:L.d}),Object(p.jsx)(re,{margin:!0,onClick:function(){X("/"),n.handleUpdate(),h.a.delete("api/notes/".concat(K)).then(console.log("Note deleted!")).catch((function(n){console.log(n)}))},color:"#e91e63",icon:L.i}),Y&&Object(p.jsx)("p",{style:{color:"#888888"},className:"m-0",children:"Copied link to clipboard!"})]})}),Object(p.jsxs)(de,{style:{marginTop:"50px"},children:[Object(p.jsxs)(je,{children:[Object(p.jsx)(xe,{color:"#C4C6C8",icon:L.b}),Object(p.jsx)(he,{children:"Updated"}),Object(p.jsx)(ue,{style:{color:"#888888"},contentEditable:!1,children:H&&!P?H:"-"})]}),Object(p.jsxs)(je,{children:[Object(p.jsx)(xe,{color:"#C4C6C8",icon:L.f}),Object(p.jsx)(he,{children:"Tags"}),U||P?Object(p.jsx)(ue,{id:"note-tags",onInput:function(n){return _(n.currentTarget.textContent)},className:"text-editor",contentEditable:!0,placeholder:"None",children:F&&F.map((function(n){return n?n+",":""}))}):Object(p.jsx)(ue,{children:F&&F.map((function(n){return Object(p.jsx)(f,{value:n,onClick:function(){return console.log("Clicked tag: ",n)}})}))})]}),Object(p.jsxs)(je,{children:[Object(p.jsx)(xe,{color:"#C4C6C8",icon:L.g}),Object(p.jsx)(he,{children:"Category"}),Object(p.jsxs)(ue,{id:"note-category",suppressContentEditableWarning:!0,onBlur:function(n){return C(n.currentTarget.textContent)},className:"text-editor",contentEditable:U||P,placeholder:"None",children:[S&&!P&&S,P&&$]})]})]}),Object(p.jsxs)(de,{className:"flex-grow-1",children:[Object(p.jsx)(ue,{id:"note-title",onBlur:function(n){return a(n.currentTarget.textContent)},style:{fontSize:"40px"},className:"text-editor",contentEditable:U||P,placeholder:"Untitled",children:c&&c}),Object(p.jsxs)(ge,{isMobile:Q,children:[Object(p.jsxs)("div",{children:[(U||P)&&Object(p.jsx)(fe,{children:"MARKDOWN EDITOR"}),U||P?Object(p.jsx)(ue,{id:"note-content",suppressContentEditableWarning:!0,onInput:function(n){return function(n){n.preventDefault(),v(n.currentTarget.textContent)}(n)},onBlur:function(n){return j(n.target.textContent)},className:"text-editor flex-grow-1",contentEditable:!0,placeholder:"This supports Markdown!",spellCheck:"true",children:u&&u}):Object(p.jsx)(nn,{content:u})]}),U&&Object(p.jsxs)(pe,{children:[Object(p.jsx)(fe,{children:"MARKDOWN PREVIEW"}),Object(p.jsx)(nn,{content:O})]})]})]})]})})},me=function(n){var e=window.location.pathname.split("/").pop(),t=Object(i.useState)(),o=Object(s.a)(t,2),c=o[0],a=o[1];return Object(i.useEffect)((function(){(function(n){return h.a.get("api/notes/".concat(n)).then((function(n){return n.data})).catch((function(n){return console.log(n)}))})(e).then((function(n){return a(n)}))}),[]),Object(p.jsx)(p.Fragment,{children:c&&Object(p.jsx)(Oe,{id:c._id,title:c.title,content:c.content,category:c.category,tags:c.tags&&c.tags,createdAt:c.createdAt,updatedAt:c.updatedAt,handleUpdate:n.handleUpdate},c._id)})},ve=j.a.h5(ne||(ne=Object(u.a)(["\n  margin-top: 20px;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: gray;\n"]))),we=j.a.input(ee||(ee=Object(u.a)(["\n  border-radius: 3px;\n  border: none;\n  padding: 5px;\n  background-color: #f0f2f5;\n  @media (max-width: 768px) {\n    min-width: 0;\n  }\n  :focus {\n    outline: none;\n  }\n"]))),ke=j.a.div(te||(te=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 768px) {\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-items: start;\n  }\n"]))),ye=function(n){var e=n.user,t=window.location.pathname.split("/").pop(),o=Object(i.useState)(),c=Object(s.a)(o,2),a=c[0],r=c[1],l=Object(i.useState)(),d=Object(s.a)(l,2),u=d[0],j=d[1],x=Object(i.useState)(!1),g=Object(s.a)(x,2),f=g[0],O=g[1],w=Object(b.g)(),k=function(n){var e="".concat(n);w.push(e)};Object(i.useEffect)((function(){!1===f&&e&&("All"===t?v(e._id).then((function(n){return r(n)})).catch((function(n){return console.log(n)})):function(n,e){return h.a.get("api/notes/categories/".concat(n,"/?userID=").concat(e)).then((function(n){return n.data})).catch((function(n){return console.log(n)}))}(t,e._id).then((function(n){return r(n)})).catch((function(n){return console.log(n)})))}),[f]);var y=function(){j(""),O(!1)};return Object(p.jsxs)(J.a,{className:"p-4",children:[Object(p.jsx)(ve,{children:"CATEGORY"}),Object(p.jsx)("h1",{children:t}),Object(p.jsxs)(ke,{children:[Object(p.jsx)(m,{onClick:function(){k("All"!=t?"/new/?category=".concat(t):"/new/")},value:"New Note"}),Object(p.jsxs)("form",{onSubmit:function(n){n.preventDefault(),h.a.get("api/notes/filterByTag/".concat(e._id,"/?tag=").concat(u,"&category=").concat(t)).then((function(n){console.log(n.data),r(n.data)})).catch((function(n){return console.log(n)})),O(!0)},className:"mt-4 mb-4",children:[Object(p.jsx)(we,{className:"mr-3",type:"text",placeholder:"Filter by tag",value:u,onChange:function(n){return j(n.target.value)}}),Object(p.jsx)("button",{type:"submit",style:{all:"initial"},children:Object(p.jsx)(re,{margin:!!f,onClick:null,color:"#3f51b5",icon:L.c})}),f&&Object(p.jsx)("button",{type:"reset",onSubmit:y,onClick:y,style:{all:"initial"},children:Object(p.jsx)(re,{color:"#e91e63",icon:L.h})})]})]}),a&&Object(p.jsx)(In,{notes:a})]})},Se=j.a.div(oe||(oe=Object(u.a)(["\n    position: fixed;\n    display: flex;\n    padding: 0px 30px;\n    align-items: center;\n    height: 56px;\n    background-color: white;\n    border-bottom: 1px solid #F6F6F6;\n    width: 100vw;\n    z-index: 1;\n"]))),Ce=function(n){return Object(p.jsx)(Se,{children:Object(p.jsx)(T.a,{style:{fontSize:"18px",cursor:"pointer"},onClick:function(){return n.toggleSidebar()},icon:L.a})})},Ee=j.a.h1(ce||(ce=Object(u.a)(["\n  font-size: 50px;\n  display: inline-block;\n  margin: 0;\n  background: -webkit-linear-gradient(\n    110deg,\n    #e1f549,\n    #29d0be,\n    #6cb8ea,\n    #ff5959\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]))),Ne=(j.a.div(ie||(ie=Object(u.a)(["\n  height: 20px;\n  width: 100px;\n  background: -webkit-linear-gradient(\n    110deg,\n    #e1f549,\n    #29d0be,\n    #6cb8ea,\n    #ff5959\n  );\n"]))),function(n){return Object(p.jsxs)(J.a,{className:"vh-100 d-flex flex-column justify-content-center align-items-center",children:[Object(p.jsx)(Ee,{children:"Notule."}),Object(p.jsx)("h4",{children:"Your stream of consciousness."}),Object(p.jsx)(z.a,{clientId:"979808801196-vn8rcr3df9c1qtgm1adfo4geksn3sioi.apps.googleusercontent.com",buttonText:"Sign up with Google",onSuccess:function(e){e.profileObj.email;var t=e.profileObj;console.log("PROFILE OBJECT: ",t);var o={email:t.email,firstName:t.givenName,lastName:t.familyName,googleID:t.googleId};h.a.get("/api/users/email/".concat(t.email)).then((function(e){console.log(e),null!=e.data?n.handleLogIn(e.data):h.a.post("/api/users/add",o).then((function(e){return n.handleLogIn(e.data)})).catch((function(n){return console.log(n)}))})).catch((function(n){return console.log(n)}))},onFailure:function(n){console.log("[Login failed] res: ",n)},cookiePolicy:"single_host_origin",style:{marginTop:"100px"},isSignedIn:!0})]})});t(17);var Fe=function(){var n=Object(i.useState)(),e=Object(s.a)(n,2),t=e[0],o=e[1],c=Object(i.useState)(),a=Object(s.a)(c,2),r=a[0],l=a[1],u=Object(i.useState)(),j=Object(s.a)(u,2),x=j[0],g=j[1],f=Object(i.useState)(),O=Object(s.a)(f,2),m=O[0],w=O[1],k=Object(i.useState)(),y=Object(s.a)(k,2),S=y[0],C=y[1],E=Object(i.useState)(!1),N=Object(s.a)(E,2),F=N[0],A=N[1],T=Object(i.useState)(window.innerWidth),L=Object(s.a)(T,2),D=L[0],z=L[1],_=Object(i.useState)(!1),I=Object(s.a)(_,2),M=I[0],U=I[1],W=function(){A(!F)},R=function(){U(!M)},B=function(){o(void 0),l(!1),W(),console.log("this stuff ran")};return Object(i.useEffect)((function(){var n,e=function(){return z(window.innerWidth)};return window.addEventListener("resize",e),r&&t&&(console.log(t),v(t._id).then((function(n){return g(n)})),(n=t._id,h.a.get("api/notes/tags/user/".concat(n)).then((function(n){return n.data})).catch((function(n){return console.log(n)}))).then((function(n){return w(n)})),function(n){return console.log("getAllCategories: ",n),h.a.get("api/notes/categories/user/".concat(n)).then((function(n){return n.data})).catch((function(n){return console.log(n)}))}(t._id).then((function(n){return C(n)}))),function(){return window.removeEventListener("resize",e)}}),[F]),Object(p.jsx)(p.Fragment,{children:r?Object(p.jsx)(d.a,{children:Object(p.jsxs)("div",{style:{position:"relative"},children:[D<768?Object(p.jsx)(Ce,{toggleSidebar:function(){return R()}}):Object(p.jsx)(G,{notes:x,tags:m,categories:S,handleLogout:B}),M&&Object(p.jsx)(G,{mobile:!0,toggleSidebar:R,notes:x,tags:m,categories:S,handleLogout:B}),Object(p.jsx)("div",{style:D<768?{paddingTop:"56px"}:{marginLeft:"250px"},children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.a,{exact:!0,from:"/",to:"/category/All"}),Object(p.jsx)(b.a,{exact:!0,from:"/auth",to:"/category/All"}),Object(p.jsx)(b.b,{path:"/hey",render:r?null:Object(p.jsx)(b.a,{to:"/auth"})}),Object(p.jsx)(b.b,{exact:!0,path:"/",children:Object(p.jsx)(Pn,{setNotes:g,notes:x})}),Object(p.jsx)(b.b,{exact:!0,path:"/new",children:Object(p.jsx)(Oe,{newNote:!0,user:t,handleUpdate:W})}),Object(p.jsx)(b.b,{path:"/note/:id",render:function(n){return Object(p.jsx)(me,{handleUpdate:W},n.location.key)}}),Object(p.jsx)(b.b,{path:"/category/:category",render:function(n){return Object(p.jsx)(ye,{user:t},n.location.key)}}),Object(p.jsx)(b.b,{exact:!0,path:"/auth",component:Ne}),Object(p.jsx)(b.b,{path:"/",children:Object(p.jsx)("p",{children:"404 Page"})})]})})]})}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Ne,{handleLogIn:function(n){o(n),l(!0),W()}}),Object(p.jsx)(d.a,{children:Object(p.jsx)(b.d,{children:Object(p.jsx)(b.a,{from:"/",to:"/auth"})})})]})})},Ae=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,172)).then((function(e){var t=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),o(n),c(n),i(n),a(n)}))};l.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(Fe,{})}),document.getElementById("root")),Ae()},56:function(n,e){},57:function(n,e){},81:function(n,e){},87:function(n,e){}},[[170,1,2]]]);
//# sourceMappingURL=main.47972d27.chunk.js.map