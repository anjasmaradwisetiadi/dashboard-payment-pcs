import{C as h,r as y,e as g,o as s,c as n,b as e,F as f,f as x,g as i,u as a,B as b,n as _,t as m}from"./index-SrFXS6_M.js";import{u as w,c as k,a as c,L as v}from"./Loading-CFQ6W8FX.js";import"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";const L={data:[{name:"Reimborsments",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",date:"Yesterday",status:"Unread",image:"src/assets/image/coin.png",thumbnail:"check"},{name:"Reimborsments",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer viewed",date:"Today",status:"Read",image:"src/assets/image/coin.png",thumbnail:"check"},{name:"Reimborsments",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer new follower",date:"2024-05-26",status:"Unread",image:"src/assets/image/coin.png",thumbnail:"check"},{name:"Sickness",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",date:"2024-05-25",status:"Unread",image:"src/assets/image/pill.png",thumbnail:"close"},{name:"Sickness",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",date:"2024-05-24",status:"Read",image:"src/assets/image/pill.png",thumbnail:"close"},{name:"Sickness",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",date:"2024-05-23",status:"Read",image:"src/assets/image/pill.png",thumbnail:"close"},{name:"Sicknessr",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer liked",date:"2024-05-22",status:"Unread",image:"src/assets/image/pill.png",thumbnail:"close"},{name:"Sickness",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",date:"2024-05-21",status:"Unread",image:"src/assets/image/pill.png",thumbnail:"check"},{name:"Sickness",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer in a comment",date:"2024-05-20",status:"Read",image:"src/assets/image/pill.png",thumbnail:"close"},{name:"Overtime",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",date:"2024-05-19",status:"Unread",image:"src/assets/image/pill.png",thumbnail:"check"},{name:"Overtime",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer unknown device",date:"2024-05-18",status:"Read",image:"src/assets/image/pill.png",thumbnail:"thumbnail"},{name:"Overtime",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer suspicious activity",date:"2024-05-17",status:"Unread",image:"src/assets/image/pill.png",thumbnail:"next"},{name:"Overtime",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer available",date:"2024-05-16",status:"Read",image:"src/assets/image/pill.png",thumbnail:"next"},{name:"Overtime",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",date:"2024-05-15",status:"Unread",image:"src/assets/image/pill.png",thumbnail:"next"},{name:"Overtime",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer on your photo",date:"2024-05-14",status:"Read",image:"src/assets/image/pill.png",thumbnail:"check"}]},I=h("notification",{state:()=>({notification:L}),actions:{},getters:{}}),S={id:"Notification"},U={class:"mt-14"},R={class:"px-3 p-2"},j={class:"flex"},z={class:"w-3/12 flex relative"},N={class:"bg-gradient-to-r from-red-primary to-red-secondary relative flex justify-center rounded-lg w-24 max-h-14 mb-10 shadow-md z-1"},O=["src"],B={key:0,class:"absolute flex justify-end items-end w-24 h-16 mb-2 pr-0.5 text-white z-2"},D=e("span",{class:"flex justify-center items-center bg-green-400 material-icons rounded-full h-5 w-5 p-1",style:{"font-size":"14px"}}," check ",-1),C=[D],F={key:1,class:"absolute flex justify-end items-end w-24 h-16 mb-2 pr-0.5 text-white z-2"},V=e("span",{class:"flex justify-center items-center bg-red-700 material-icons rounded-full h-5 w-5 p-1",style:{"font-size":"14px"}}," close ",-1),W=[V],E={key:2,class:"absolute flex justify-end items-end w-24 h-16 mb-2 pr-0.5 text-white z-2"},M=e("span",{class:"flex justify-center items-center bg-blue-400 material-icons rounded-full h-5 w-5 p-1",style:{"font-size":"14px"}}," arrow_forward ",-1),T=[M],Y={class:"flex flex-col w-6/12 pl-3 pr-2 text-sm"},q={class:"font-bold mb-1"},A={class:"text-justify leading-4"},G={class:"w-3/12 text-center text-gray-500 text-sm text-right pr-1"},H={key:1,class:"flex justify-center items-center text-center min-h-screen"},J=e("div",{class:"font-bold text-base"}," Data Not Found ",-1),K=[J],te={__name:"Notification",setup(P){const p=I(),o=w(),r=y(p.notification);return g(()=>{o.simulateLoading()}),(Q,X)=>{var d,u;return s(),n("div",S,[e("div",U,[(d=r.data)!=null&&d.length?(s(!0),n(f,{key:0},x(r.data,(t,l)=>(s(),n("div",{class:_(["cursor-pointer",t.status==="Unread"?"bg-blue-100":""]),key:l},[e("div",R,[e("div",j,[e("div",z,[e("div",N,[e("img",{class:"w-14 h-14 rounded-lg",src:a(k).baseUrl+t.image,alt:"user_1"},null,8,O)]),t.thumbnail==="check"?(s(),n("span",B,C)):i("",!0),t.thumbnail==="close"?(s(),n("span",F,W)):i("",!0),t.thumbnail==="next"?(s(),n("span",E,T)):i("",!0)]),e("div",Y,[e("div",q,m(a(c).truncateWord(t.name,17)),1),e("div",A,m(a(c).truncateWord(t.description,116)),1)]),e("div",G,m(t.date),1)])])],2))),128)):i("",!0),(u=r.data)!=null&&u.length?i("",!0):(s(),n("div",H,K))]),a(o).loading?(s(),b(v,{key:0})):i("",!0)])}}};export{te as default};
