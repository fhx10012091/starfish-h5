import{_ as h,d as _,r as i,c as g,a as f,f as y,h as n,w as l,b as v,j as s,n as m,k as w,l as C,p as b,q as k,T as S,s as B,E as D,u as F,v as $}from"./main-837926ce.js";/* empty css                */const E=_({props:{dialogclass:String,showDialog:Boolean,width:Number},emits:["open","close"],setup(e,{emit:o}){const a=i(!1),c=i(""),r=i(""),p=i(!1),t=g(()=>typeof e.width=="number"?e.width+"px":e);return{isshow:a,title:c,icon:r,isFullScreen:p,newWidth:t,init(d,u){c.value=d,r.value=u},show(){a.value=!0,o("open")},close(){a.value=!1,o("close")}}}}),N={key:0,class:"MyDialogFrame"},M={class:"pageContent",style:{height:"100%",padding:"0",overflow:"hidden","background-color":"transparent"}},T={class:"my-icon"},V={class:"my-title"},q={class:"my-toolbar"},z=s("em",{class:"iconfont icon-guanbi"},null,-1),H=s("div",{class:"myDialogMask"},null,-1);function W(e,o,a,c,r,p){const t=D,d=F,u=$;return f(),y(B,{to:"body"},[n(S,{name:"fade"},{default:l(()=>[e.isshow||e.showDialog?(f(),v("div",N,[s("div",{class:m(["MyDialogBody",[{fullscreen:e.isFullScreen},e.dialogclass]]),style:w(`width: ${e.newWidth}`)},[s("div",M,[n(u,{class:"my-pageContainer"},{default:l(()=>[n(d,{class:"my-pageHeader",style:{height:"45px"}},{default:l(()=>[s("div",T,[s("em",{class:m(["iconfont",e.icon])},null,2)]),s("div",V,C(e.title),1),s("div",q,[n(t,{class:"my-toolbtn",onClick:o[0]||(o[0]=j=>e.isFullScreen=!e.isFullScreen)},{default:l(()=>[s("em",{class:m(["iconfont icon",{"icon-suoxiao1":e.isFullScreen,"icon-quanping":!e.isFullScreen}])},null,2)]),_:1}),n(t,{class:"my-toolbtn",onClick:e.close},{default:l(()=>[z]),_:1},8,["onClick"])])]),_:1}),b(e.$slots,"default")]),_:3})])],6),H])):k("",!0)]),_:3})])}var I=h(E,[["render",W]]);export{I as default};