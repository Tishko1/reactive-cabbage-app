"use strict";(self.webpackChunkreactive_cabbage=self.webpackChunkreactive_cabbage||[]).push([[843],{4897:function(n,e,t){t.d(e,{Z:function(){return C}});var i,r,a,o,d,c,p=t(9439),s=t(2791),x=t(9434),l=t(7689),f=t(5570),h=t(6351),u=t(1093),m=t(4164),g=t(168),b=t(8789),w=b.ZP.div(i||(i=(0,g.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]))),v=b.ZP.div(r||(r=(0,g.Z)(["\n  z-index: 110;\n  position: fixed;\n  top: 250px;\n  left: 50%;\n  transform: translateX(-50%);\n  max-width: 280px;\n  max-height: 163px;\n  width: 100%;\n  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n  border-radius: 30px;\n  @media screen and (min-width: 768px) {\n    max-width: 288px;\n    top: 160px;\n  }\n  @media screen and (min-width: 1280px) {\n    max-width: 288px;\n    top: 160px;\n    left: 52%;\n  }\n  &:before {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: -9%;\n    left: 20%;\n    border-left: 16px solid transparent;\n    border-right: 16px solid transparent;\n    border-bottom: 16px solid #1d346a;\n  }\n"]))),j=b.ZP.h2(a||(a=(0,g.Z)(["\n  padding-top: 40px;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.43;\n  margin-bottom: 20px;\n  color: #ffffff;\n  @media screen and (min-width: 768px) {\n    padding-left: 29px;\n    padding-right: 29px;\n  }\n"]))),Z=b.ZP.p(o||(o=(0,g.Z)(["\n  padding-bottom: 49px;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.33;\n  color: #ffffff;\n  @media screen and (min-width: 768px) {\n    padding-left: 29px;\n    padding-right: 29px;\n  }\n"]))),y=t(3329),k=document.querySelector("#modal-root"),P=document.querySelector("body"),z=function(){var n=(0,s.useState)(!0),e=(0,p.Z)(n,2),t=e[0],i=e[1];return(0,s.useEffect)((function(){return P.classList.add("no-scroll"),function(){return P.classList.remove("no-scroll")}}),[]),(0,m.createPortal)(t&&(0,y.jsx)(w,{onClick:function(n){n.currentTarget===n.target&&(i(!1),P.classList.remove("no-scroll"))},children:(0,y.jsxs)(v,{children:[(0,y.jsx)(j,{children:"Hello! To get started, enter the current balance of your account!"}),(0,y.jsx)(Z,{children:"You can't spend money until you have it :)"})]})}),k)},F=b.ZP.form(d||(d=(0,g.Z)(["\n  /* margin: 0 auto 50px; */\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    gap: 20px;\n    margin: 0 auto;\n\n    @media screen and (min-width: 320px) and (max-width: 767px) {\n      margin: 0 auto;\n      margin-bottom: 0;\n    }\n  }\n\n  .title {\n    color: rgba(82, 85, 95, 0.7);\n    margin-bottom: 8px;\n    font-size: 12px;\n    line-height: calc(14 / 12);\n    font-weight: 500;\n    text-align: center;\n  }\n  .inputTag {\n    font-weight: 700;\n    width: 125px;\n    /* height: 44px; */\n    /* padding: 22px 0px; */\n    color: #52555f;\n    text-align: center;\n    border: 2px solid white;\n    border-radius: 16px;\n    outline: none;\n    background-color: #f2f5fc;\n    ::-webkit-outer-spin-button,\n    ::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    :focus {\n      background-color: #fff;\n    }\n    &::placeholder {\n      color: #000;\n      letter-spacing: 0.02em;\n      font-weight: 700;\n      font-size: 12px;\n      line-height: 1.17;\n    }\n    @media screen and (min-width: 768px) {\n      width: 125px;\n      /* padding: 12px 0px; */\n      border-radius: 16px;\n    }\n\n    @media screen and (min-width: 320px) and (max-width: 767px) {\n      width: 140px;\n      height: 44px;\n      padding: 20px 0px;\n      border-radius: 22px 0 0 22px;\n    }\n  }\n  .btn {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px;\n    background-color: #f2f5fc;\n    width: 125px;\n    height: 44px;\n    padding: 12px 18px;\n    color: rgba(82, 85, 95, 0.7);\n    text-align: left;\n    text-transform: uppercase;\n    border: 2px solid white;\n    border-left: none;\n    border-radius: 16px;\n    outline: none;\n    transition-property: color, background-color, border-color, box-shadow,\n      transform;\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n      color: white;\n      background-color: #ff751d;\n      border-color: #ff751d;\n      box-shadow: 0px 0px 2px 1px #f5f6fb;\n      transform: scale(1.01);\n    }\n    @media screen and (min-width: 768px) {\n      width: 125px;\n      padding: 12px 6px;\n      border-radius: 16px;\n      text-align: center;\n      border-left: 2px solid white;\n    }\n    @media screen and (min-width: 320px) and (max-width: 767px) {\n      width: 140px;\n      height: 44px;\n      border-radius: 0 22px 22px 0;\n    }\n  }\n"]))),S=b.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    gap: 0;\n  }\n"]))),C=function(){var n,e=(0,x.v9)(h.QM),t=(0,l.TH)(),i=(0,x.I0)(),r=(0,s.useState)(!1),a=(0,p.Z)(r,2),o=a[0],d=a[1],c=(0,s.useRef)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(F,{onSubmit:function(e){e.preventDefault(),n=e.target.balance.value},ref:c,children:[(0,y.jsx)("h2",{className:"title",children:"Balance:"}),(0,y.jsxs)(S,{children:[(0,y.jsx)("input",{onChange:function(e){n=e.target.value},className:"inputTag",type:"number",name:"balance",title:"Please, enter your balance",pattern:"[0-9, .UAH]*",placeholder:"".concat(Number(e).toFixed(2)," UAH"),required:!0}),(0,y.jsx)("button",{type:"submit",className:"btn",onClick:function(){d(!0)},children:"Confirm"})]})]}),"/expenses"===t.pathname&&(0,y.jsx)(z,{}),o&&(0,y.jsx)(u.Z,{changeBalance:"true",closeModal:function(){d(!1)},dispatch:function(){i((0,f.Fg)(n)),c.current.reset()},text:"SURE",balance:e,onDelete:function(){},children:"Are you sure?"})]})}},6214:function(n,e,t){t.d(e,{Aq:function(){return g},UE:function(){return k},dt:function(){return b},fq:function(){return v},g:function(){return w},j$:function(){return y},p:function(){return Z},w2:function(){return j}});var i,r,a,o,d,c,p,s,x,l,f=t(168),h=t(8789),u=t(1809),m=t(1087),g=(t(8200),h.ZP.div(i||(i=(0,f.Z)(["\n  top: 0;\n  left: 0;\n  height: 526px;\n  background-color: #f5f6fb;\n  border-bottom-left-radius: 10%;\n  width: 100%;\n\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    height: 296px;\n  }\n"])))),b=(0,h.ZP)(u.mQ)(r||(r=(0,f.Z)(["\n  margin: 0 auto;\n  background-color: transparent;\n  @media (max-width: 767px) {\n    & .react-tabs__tab--selected {\n      background-color: #f7741d;\n      color: #ffffff;\n      border-color: transparent;\n    }\n  }\n  @media (min-width: 768px) {\n    & .react-tabs__tab--selected {\n      border-color: transparent;\n    }\n  }\n  @media (min-width: 768px) {\n    max-width: 704px;\n    border-radius: 30px;\n    & .react-tabs__tab-panel--selected {\n      position: relative;\n      top: -24px;\n      border-radius: 0 30px 30px 30px;\n      box-shadow: 0px 50px 60px rgba(170, 178, 197, 0.2);\n      background-color: #ffffff;\n    }\n  }\n  @media (min-width: 1280px) {\n    max-width: 1098px;\n  }\n  & .react-tabs__tab-list {\n    border: none;\n    margin: 0;\n  }\n"]))),w=(0,h.ZP)(u.OK)(a||(a=(0,f.Z)(["\n  /* background-color: #f7741d; */\n  background: #f5f6fb;\n  width: 50%;\n  height: 53px;\n  padding: 19px 12px;\n  text-align: center;\n  border: 1px solid #ffff;\n  transition: background-color 250ms ease;\n\n  @media (min-width: 768px) {\n    background-color: #fefefe;\n    padding: 13px 12px;\n    width: 138px;\n    height: 40px;\n    border-radius: 30px 30px 0 0;\n  }\n\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    z-index: 10;\n  }\n  .active {\n    color: #ff751d;\n    @media screen and (min-width: 320px) and (max-width: 767px) {\n      /* background: rgba(245, 246, 251, 1); */\n      color: #ffff;\n    }\n  }\n"]))),v=(0,h.ZP)(u.td)(o||(o=(0,f.Z)(["\n  display: flex;\n  width: 100%;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  margin: 0;\n\n  @media (min-width: 768px) {\n    position: relative;\n    width: 276px;\n  }\n\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    bottom: -16px;\n  }\n"]))),j=(0,h.ZP)(m.OL)(d||(d=(0,f.Z)(["\n  color: #010101;\n  font-family: 'Roboto';\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.17;\n  text-align: center;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  transition: color 250ms ease;\n  @media (min-width: 768px) {\n    margin: 0px 25px;\n    color: black;\n  }\n"]))),Z=(0,h.ZP)(m.rU)(c||(c=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 45px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  line-height: 1.9;\n  font-weight: 400;\n  color: rgba(82, 85, 95, 0.7);\n  :hover,\n  :focus {\n    color: #ff751d;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n  }\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    margin-bottom: 32px;\n  }\n  .reportsIcon {\n    margin-left: 15px;\n    width: 24px;\n    height: 24px;\n    fill: #ff751d;\n\n    :hover .reportsIcon,\n    :focus .reportsIcon {\n      fill: #ff751d;\n    }\n  }\n"]))),y=h.ZP.div(p||(p=(0,f.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 40px 140px 8px;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    flex-direction: column;\n    padding: 40px 16px 8px;\n    flex-wrap: wrap-reverse;\n    margin-bottom: 0;\n    flex-direction: column-reverse;\n  }\n"]))),k=(h.ZP.div(s||(s=(0,f.Z)(["\n  padding-top: 14px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  gap: 35px;\n  flex-direction: column-reverse;\n\n  .reportLink {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: flex-end;\n    text-decoration: none;\n    font-size: 12px;\n    color: rgba(82, 85, 95, 0.7);\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n      color: #ff751d;\n    }\n  }\n\n  @media (min-width: 768px) {\n    gap: 251px;\n    flex-direction: row;\n    align-items: center;\n    padding-top: 40px;\n    max-width: 704pxpx;\n    margin-bottom: 60px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 1098px;\n    gap: 298px;\n    justify-content: flex-end;\n  }\n"]))),h.ZP.div(x||(x=(0,f.Z)(["\n  position: relative;\n  top: 10px;\n"]))));h.ZP.div(l||(l=(0,f.Z)(["\n  padding: 15px;\n  display: flex;\n"])))},1697:function(n,e,t){t.r(e),t.d(e,{ReportPage:function(){return Un},default:function(){return _n}});var i,r,a,o,d=t(2791),c=t(9439),p=t(9434),s=t(6351),x=t(4190),l=t(168),f=t(8789),h=f.ZP.ul(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0%;\n  padding: 0;\n  &.incomeList {\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),u=f.ZP.li(r||(r=(0,l.Z)(["\n  flex-grow: 1;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n\n  align-items: center;\n  width: calc((100% - 20px) / 3);\n  margin: 0%;\n  padding: 20px 0;\n  gap: 5px;\n  // border-bottom: 1px solid black;\n\n  &.active {\n    fill: #ff751d;\n  }\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    fill: #ff751d;\n  }\n\n  @media screen and (min-width: 768px) {\n    border: none;\n    width: calc((100% - 64px) / 6);\n  }\n  &.income {\n    max-width: 90px;\n    flex-grow: 0;\n  }\n"]))),m=f.ZP.li(a||(a=(0,l.Z)(["\n  flex-grow: 1;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: calc((100% - 20px) / 3);\n  margin: 0%;\n  padding: 20px 0;\n  gap: 5px;\n  border-bottom: 1px solid black;\n\n  &.active {\n    fill: #ff751d;\n  }\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    fill: #ff751d;\n  }\n\n  @media screen and (min-width: 768px) {\n    border: none;\n    width: calc((100% - 64px) / 6);\n  }\n\n  max-width: 90px;\n  flex-grow: 0;\n"]))),g=f.ZP.svg(o||(o=(0,l.Z)(["\n  position: relative;\n"]))),b=t(4904);var w=t.p+"static/media/bgcForSvg.9948a09e481b3d692e82a7a76990676d.svg";var v=t.p+"static/media/orangeBgc.f69281f95d47540c19ff50c7cc25e3ce.svg";var j,Z,y=t.p+"static/media/reports.4d7a7e3d3ec2ded8dedf6f767623529a.svg",k=t(3329),P=function(n){var e,t=n.onChange,i=(0,p.I0)(),r=(0,d.useState)({}),a=(0,c.Z)(r,2),o=a[0],l=a[1],f=(0,d.useState)(""),j=(0,c.Z)(f,2),Z=j[0],P=j[1],z=(0,p.v9)(s.jG),F=[],S=(0,d.useMemo)((function(){var n,e;return null!==(n=null===z||void 0===z||null===(e=z.expenses)||void 0===e?void 0:e.expensesData)&&void 0!==n?n:{}}),[z]),C=(0,d.useMemo)((function(){var n,e;return null!==(n=null===z||void 0===z||null===(e=z.incomes)||void 0===e?void 0:e.incomesData)&&void 0!==n?n:{}}),[z]);(0,d.useEffect)((function(){"expenses"===t?(l(null!==S&&void 0!==S?S:{}),P("")):(l(null!==C&&void 0!==C?C:{}),P(""))}),[t,S,C,P]);var A=function(n){P(n.currentTarget.id);var e=F.filter((function(e){return e[0].replace(/\s+/g,"")===n.currentTarget.id}));i((0,x.Vd)(e))},M=null!==(e=Object.entries(o))&&void 0!==e?e:[];return(0,k.jsx)("div",{children:(0,k.jsx)(h,{className:"incomes"===t?"incomeList":"",children:M.map((function(n){var e=n[0].replace(/\s+/g,"");return F.push(n),"expenses"===t?(0,k.jsxs)(u,{id:e,onClick:A,className:e===Z?"active":"",children:[(0,k.jsx)("p",{children:n[1].total.toFixed(2)}),(0,k.jsxs)(g,{width:"56",height:"56",children:[(0,k.jsx)("svg",{src:e===Z?v:w,width:"59",height:"46",viewBox:"0 0 54 47","background-position":"center",className:e===Z?"active":""}),(0,k.jsx)("use",{href:"".concat(y,"#").concat(e)})]}),(0,k.jsx)("p",{children:(0,b.z)(n[0]).toUpperCase()})]},e):"incomes"===t?(0,k.jsxs)(m,{id:e,onClick:A,className:e===Z?"active":"",children:[(0,k.jsx)("p",{children:n[1].total.toFixed(2)}),(0,k.jsxs)(g,{width:"56",height:"56",className:e===Z?"active":"",children:[(0,k.jsx)("svg",{src:e===Z?v:w,width:"59",height:"46",viewBox:"0 0 54 47","background-position":"center",className:e===Z?"active":""}),(0,k.jsx)("use",{href:"".concat(y,"#").concat(e)})]}),(0,k.jsx)("p",{children:(0,b.z)(n[0]).toUpperCase()})]},e):(0,k.jsx)(k.Fragment,{})}))})})},z=f.ZP.div(j||(j=(0,l.Z)(["\nmargin-top: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),F=f.ZP.button(Z||(Z=(0,l.Z)(["\n  background-color: transparent;\n  border: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  "])));var S,C,A,M,D,H,B,E,q,K,L,N,T,U,_,R,I,Q,V,W,J,O=t.p+"static/media/reportsswitch.4d7a7e3d3ec2ded8dedf6f767623529a.svg",G=function(n){var e=n.onButtonClick,t=n.children,i=function(n){var t=n.currentTarget.name;e(t)};return(0,k.jsxs)(z,{children:[(0,k.jsx)(F,{name:"decrement",onClick:i,children:(0,k.jsx)("svg",{width:"6",height:"12",children:(0,k.jsx)("use",{href:"".concat(O,"#icon-prev")})})}),t,(0,k.jsx)(F,{name:"increment",onClick:i,children:(0,k.jsx)("svg",{width:"6",height:"12",children:(0,k.jsx)("use",{href:"".concat(O,"#icon-next")})})})]})},Y=t(108),$=t(466),X=t(2891),nn=t(2839),en=t(6710),tn=t(5185),rn=t(7970),an=t(1048),on=t(7402).Z.div(S||(S=(0,l.Z)(["\n  font-size: 10px;\n\n  width: 100%;\n  height: 422px;\n  margin: 0 auto;\n\n  margin-top: 32px;\n  margin-bottom: 80px;\n  border-radius: 30px;\n  background-color: #fff;\n  box-sizing: revert;\n\n    @media screen and (min-width: 768px) {\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n\t }\n\n"]))),dn=function(n){var e=n.budget,t=(0,d.useRef)(),i=(0,p.v9)((function(n){return n.reportsQuery.filteredDate[0]})),r=(0,p.v9)((function(n){return n.reports})).reports,a=(0,d.useState)([]),o=(0,c.Z)(a,2),s=o[0],x=o[1],l=(0,d.useState)({}),f=(0,c.Z)(l,2),h=f[0],u=f[1],m=(0,d.useState)({}),g=(0,c.Z)(m,2),w=g[0],v=g[1],j=(0,d.useState)({}),Z=(0,c.Z)(j,2),y=Z[0],P=Z[1],z=(0,d.useState)({layout:"vertical"}),F=(0,c.Z)(z,2),S=F[0],C=F[1],A=function(){var n=t.current||{},e=n.clientHeight,i=n.clientWidth;u({clientHeight:e,clientWidth:i}),Math.max(document.documentElement.clientWidth,window.innerWidth||0)<=768?(v({type:"number",dataKey:"",hide:!0}),P({type:"category",dataKey:"name",hide:!0}),C({layout:"vertical",textAnchor:"start",shapeRadius:[0,10,10,0],strokeVertical:!1})):(v({type:"category",dataKey:"name",hide:!1}),P({type:"number",dataKey:"",hide:!0}),C({layout:"horizontal",textAnchor:"middle",shapeRadius:[10,10,0,0],strokeHorizontal:!0}))};(0,d.useEffect)((function(){if(i){var n=[];for(var t in i[1])n.push({name:t,pv:i[1][t]});x(n)}else if(r[e]){var a=[];for(var o in r[e]["".concat(e,"Data")])a.push({name:(0,b.z)(o),pv:r[e]["".concat(e,"Data")][o].total});x(a)}}),[i,e,r]),(0,d.useEffect)((function(){return window.addEventListener("resize",A),A(),function(){window.removeEventListener("resize",A)}}),[]);var M=function(n){var e=n.name,t=(n.payload,n.x),i=n.y,r=n.width,a=(n.height,n.value);return(0,k.jsx)("text",{x:t+r/2,y:i,fill:"#666",textAnchor:S.textAnchor,dy:-6,children:"".concat(w.hide?e:"","   ").concat(a," UAH")})};return(0,k.jsx)(on,{ref:t,children:(0,k.jsxs)(Y.v,{margin:{top:40,right:40,bottom:40,left:40},layout:S.layout,width:h.clientWidth,height:h.clientHeight,data:s,barCategoryGap:5,fontSize:12,children:[(0,k.jsx)($.K,{hide:w.hide,type:w.type,dataKey:w.dataKey,stroke:"##52555F",width:20,fontSize:12}),(0,k.jsx)(X.B,{hide:y.hide,type:y.type,dataKey:y.dataKey,stroke:"#52555F",tickCount:10,width:50,fontSize:12}),(0,k.jsx)(nn.q,{stroke:"#ccc",horizontal:S.strokeHorizontal,vertical:!1,strokeDasharray:"0 0"}),(0,k.jsxs)(en.$,{dataKey:"pv",fill:"#FF751D",barSize:40,shape:(0,k.jsx)(tn.A,{radius:S.shapeRadius}),children:[(0,k.jsx)(rn.e,{content:M,position:"top"}),(0,k.jsx)(rn.e,{content:M,position:"top"}),s.map((function(n,e){return(0,k.jsx)(an.b,{fill:e%3?"#FFB182":"#FF751D"},"cell-".concat(e))}))]})]})})},cn=f.ZP.ul(C||(C=(0,l.Z)(["\n  display: flex;\n  /* margin-bottom: 30px; */\n  border: 1px solid transparent;\n  border-radius: 20px;\n  ","\n  background-color: #fff;\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n"])),""),pn=f.ZP.li(A||(A=(0,l.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  gap: 5px;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 10px 25px 10px;\n  &:nth-child(2n)::before {\n    content: '';\n    position: absolute;\n    border-left: 1px solid;\n    left: 0px;\n    bottom: 5px;\n    z-index: 1;\n    height: 90%;\n    color: #e0e5eb;\n    @media screen and (min-width: 768px) {\n      height: 80%;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    padding: 16px 0;\n    flex-direction: row;\n    &:first-child {\n      padding-right: 20px;\n      justify-content: flex-end;\n    }\n    &:last-child {\n      padding-left: 20px;\n      justify-content: flex-start;\n    }\n  }\n"]))),sn=f.ZP.p(M||(M=(0,l.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  color: #52555f;\n"]))),xn=f.ZP.span(D||(D=(0,l.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  color: #e53935;\n"]))),ln=f.ZP.span(H||(H=(0,l.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  color: #407946;\n"]))),fn=f.ZP.div(B||(B=(0,l.Z)(["\n  padding-top: 30px;\n  margin-top: 32px;\n  border-radius: 30px;\n    background-color: #fff;\n  @media screen and (min-width: 768px) {\n    padding: 20px 40px;\n    margin-top: 32px;\n    border-radius: 30px;\n    background-color: #fff;\n  }\n  @media screen and (min-width: 1280px) {\n    padding: 20px 205px;\n  }\n"]))),hn=f.ZP.div(E||(E=(0,l.Z)(["\n  margin: 0 auto;\n  align-items: center;\n  display: flex;\n  width: 130px;\n"]))),un=f.ZP.p(q||(q=(0,l.Z)(["\n  width: 120px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: #000000;\n"]))),mn=function(){var n,e,t=(0,p.I0)(),i=(0,p.v9)(s.PS),r=(0,p.v9)(s.jq),a=(0,d.useState)("expenses"),o=(0,c.Z)(a,2),l=o[0],f=o[1];return(0,k.jsxs)("div",{children:[(0,k.jsxs)(cn,{children:[(0,k.jsxs)(pn,{children:[(0,k.jsx)(sn,{children:"Expenses:"}),(0,k.jsxs)(xn,{children:["- ",null!==(n=r.toFixed(2))&&void 0!==n?n:0]})]}),(0,k.jsxs)(pn,{children:[(0,k.jsx)(sn,{children:"Income:"}),(0,k.jsxs)(ln,{children:["+ ",null!==(e=i.toFixed(2))&&void 0!==e?e:0]})]})]}),(0,k.jsxs)(fn,{children:[(0,k.jsx)(hn,{children:(0,k.jsx)(G,{onButtonClick:function(){if("expenses"===l)return f("incomes"),void t((0,x.Vd)([]));f("expenses"),t((0,x.Vd)([]))},children:(0,k.jsx)(un,{children:l})})}),(0,k.jsx)(P,{onChange:l})]}),(0,k.jsx)(dn,{budget:l})]})},gn=t(7689),bn=t(4805),wn="expenses",vn=t(1087),jn=(0,f.ZP)(vn.rU)(K||(K=(0,l.Z)(["\n  background-color: transparent;\n  border: transparent;\n  padding: 0%;\n  text-decoration: none;\n\n  display: flex;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    width: calc(100% / 3);\n    padding-top: 0;\n  }\n"]))),Zn=(f.ZP.button(L||(L=(0,l.Z)(["\n  @media screen and (min-width: 320px) {\n    display: none;\n  }\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n  @media screen and (min-width: 1280px) {\n    display: block;\n    font-size: 12px;\n    line-height: 1.16;\n    letter-spacing: 0.02em;\n    text-transform: uppercase;\n\n    color: rgba(82, 85, 95, 0.7);\n    padding: 12px 30px;\n    border: 2px solid white;\n    border-radius: 16px;\n    :hover,\n    :focus {\n      color: white;\n      background-color: #ff751d;\n      border-color: #ff751d;\n  }\n  }\n"]))),f.ZP.span(N||(N=(0,l.Z)(["\n  color: rgba(82, 85, 95, 0.7);\n  font-size: 12px;\n  font-weight: 500;\n  /* @media screen and (min-width: 768px) { */\n  @media screen and (min-width: 320px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-left: 15px;\n    display: block;\n  }\n"])))),yn=f.ZP.div(T||(T=(0,l.Z)(["\n  padding-top: 16px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    padding-top: 40px;\n    padding-bottom: 32px;\n  }\n"]))),kn=f.ZP.div(U||(U=(0,l.Z)(["\n  @media screen and (min-width: 768px) {\n    /* display: flex;\n    justify-content: space-between;\n    align-items: center; */\n    width: calc((100% / 3) * 2);\n  }\n"]))),Pn=f.ZP.div(_||(_=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    ","\n    gap: 20px;\n  }\n"])),""),zn=f.ZP.p(R||(R=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.16;\n  align-items: center;\n  text-align: center;\n  ","\n  margin-bottom: 8px;\n  color: rgba(82, 85, 95, 0.7);\n  padding-top: 32px;\n  @media screen and (min-width: 768px) {\n    padding-top: 0;\n    margin: 0;\n    padding-left: 33px;\n  }\n  @media screen and (min-width: 768px) {\n    padding-left: 15px;\n  }\n"])),""),Fn=f.ZP.p(I||(I=(0,l.Z)(["\n  padding: 15px 29px;\n  border: 2px solid white;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.16;\n  text-align: center;\n  ","\n  text-transform: uppercase;\n  background-color: #F2F5FC;\n  color: #000000;\n  width: 183px;\n  margin-bottom: 32px;\n  outline: none;\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  :focus {\n    background-color: #fff;\n  }\n  &::placeholder {\n    color: #000;\n    letter-spacing: 0.02em;\n    font-weight: 700;\n    font-size: 12px;\n    line-height: 1.17;\n  }\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n    padding: 12px 0;\n    width: 125px;\n    border-radius: 16px;\n  }\n"])),""),Sn=t(4897),Cn=new Date,An=["January","February","March","April","May","June","July","August","September","October","November","December"],Mn=function(){return Cn.getMonth()},Dn=t(5570),Hn=f.ZP.div(Q||(Q=(0,l.Z)(["\n  padding-top: 16px;\n  text-align: center;\n  position: relative;\n  @media screen and (min-width: 768px) {\n    padding-top: 0;\n    margin-left: auto;\n  }\n"]))),Bn=f.ZP.button(V||(V=(0,l.Z)(["\n  width: 140px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  padding: 0 5px;\n  border: none;\n  color: #000;\n  background-color: var(--color-white);\n"]))),En=f.ZP.p(W||(W=(0,l.Z)(["\n  color: rgba(82, 85, 95, 0.7);\n  font-size: 12px;\n"]))),qn=function(){var n=(0,d.useState)(0),e=(0,c.Z)(n,2),t=e[0],i=e[1],r=(0,d.useState)(""),a=(0,c.Z)(r,2),o=a[0],s=a[1],l=(0,d.useState)(""),f=(0,c.Z)(l,2),h=f[0],u=f[1],m=(0,p.I0)();(0,d.useEffect)((function(){i(Mn()),s(An[Mn()]),u(Cn.getFullYear())}),[]),(0,d.useEffect)((function(){s(An[t]);var n="";n=t+1<10?"0"+(t+1):t+1;var e="".concat(h,"-").concat(n);"-01"!==e&&m((0,Dn.JL)(e)),m((0,x.Lv)("".concat(h,"-").concat(n)))}),[t,h,m]);return(0,k.jsxs)(Hn,{children:[(0,k.jsx)(En,{children:"Current period:"}),(0,k.jsx)(G,{onButtonClick:function(n){switch(n){case"decrement":m((0,x.Vd)([])),i(t-1),0===t&&(i(11),u(h-1));break;case"increment":m((0,x.Vd)([])),i(t+1),11===t&&(i(0),u(h+1));break;default:return}},children:(0,k.jsxs)(Bn,{children:[o," ",h]})})]})},Kn=function(){var n,e,t,i,r=(0,gn.TH)(),a=(0,p.v9)(s.QM),o={isMobile:(0,bn.useMediaQuery)({query:"(max-width: 767px)"}),isTablet:(0,bn.useMediaQuery)({query:"((min-width: 768px) and (max-width: 1279px))"}),isDesktop:(0,bn.useMediaQuery)({query:"(min-width: 1280px)"})},d=o.isMobile,c=o.isTablet,x=o.isDesktop;return(0,k.jsxs)(yn,{children:[(0,k.jsxs)(jn,{to:null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:wn,children:[(0,k.jsx)("svg",{width:"24",height:"24",children:(0,k.jsx)("use",{href:"".concat(y,"#icon-back")})}),(0,k.jsx)(Zn,{children:"Main page"})]}),(0,k.jsx)(kn,{children:(0,k.jsxs)(Pn,{children:[d&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(qn,{}),(0,k.jsx)(zn,{children:"Balance:"}),(0,k.jsxs)(Fn,{children:[null!==(t=a.toFixed(2))&&void 0!==t?t:0," UAH"]})]}),c&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(zn,{children:"Balance:"}),(0,k.jsxs)(Fn,{children:[null!==(i=a.toFixed(2))&&void 0!==i?i:0," UAH"]}),(0,k.jsx)(qn,{})]}),x&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Sn.Z,{}),(0,k.jsx)(qn,{})]})]})})]})},Ln=f.ZP.div(J||(J=(0,l.Z)(["\n \n  padding: 0 20px;\n  @media screen and (min-width: 768px) {\n    /* margin: 0 32px; */\n    padding: 0 32px;\n \n  }\n  @media screen and (min-width: 1280px) {\n    padding: 0 123px;\n \n  }\n"]))),Nn=t(1425),Tn=t(6214);function Un(){return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(Tn.Aq,{children:[(0,k.jsxs)(Ln,{children:[(0,k.jsx)(Kn,{}),(0,k.jsx)(mn,{})]}),(0,k.jsx)(Nn.Z,{})]})})}var _n=Un}}]);
//# sourceMappingURL=843.a8f9f472.chunk.js.map