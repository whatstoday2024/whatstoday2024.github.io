import{_ as v,u as x,B as p,m as V,c as h,b as t,a as e,w as k,F as y,k as _,r,o as g,t as M,i as F,h as f}from"./index-BPoPsjoA.js";const D={data(){return{user:{email:"",password:""},errorMsg:"",isLoading:!1}},watch:{"user.email":function(){this.errorMsg=""},"user.password":function(){this.errorMsg=""}},computed:{...x(_,["memberData"])},methods:{login(){document.title="後台登入",this.isLoading=!0,p.post("https://vue3-course-api.hexschool.io/v2/admin/signin",{username:this.user.email,password:this.user.password}).then(a=>{const o=a.data.token,l=a.data.expired;document.cookie=`token=${o}`,document.cookie=`expDate=${l}`,p.post("https://whatstoday2024-8nsu.onrender.com/login",this.user).then(d=>{const{accessToken:s,user:n}=d.data;document.cookie=`whatstoday=${s}`,document.cookie=`whatstodayMember=${n.id}`,this.setMemberData(n),this.$router.push("/admin/dashboard")}).catch(()=>{this.errorMsg="登入失敗"})}).catch(a=>{this.errorMsg=a.response.data.message}).finally(()=>{this.isLoading=!1})},...V(_,["setMemberData"])},async mounted(){}},S={class:"container flex-fill py-4 py-lg-5 d-flex align-items-center"},B={class:"w-100"},C={class:"row g-3 g-lg-4 justify-content-evenly"},L={class:"col-lg-6"},E=e("h1",{class:"h2 mb-3 text-center"},"後台登入(僅供管理者)",-1),N={key:0,class:"text-center text-danger"},$={class:"form-floating mb-4"},q=e("label",{for:"email"},"請輸入電子信箱",-1),U={class:"form-floating mb-4"},j=e("label",{for:"password"},"請輸入密碼",-1),z=e("button",{type:"submit",class:"btn btn-brand-blue btn-lg rounded-pill mb-4"},"登入",-1);function A(a,o,l,d,s,n){const b=r("loadingVue"),c=r("VField"),m=r("ErrorMessage"),w=r("VForm");return g(),h(y,null,[t(b,{active:s.isLoading},null,8,["active"]),e("div",S,[e("div",B,[e("div",C,[e("div",L,[t(w,{class:"card rounded-4 p-4 p-lg-5",onSubmit:n.login},{default:k(({errors:u})=>[E,s.errorMsg?(g(),h("h4",N,M(s.errorMsg),1)):F("",!0),e("div",$,[t(c,{type:"email",id:"email",placeholder:"請輸入電子信箱",name:"信箱",class:f(["form-control",{"is-invalid":u.信箱}]),rules:"email|required",modelValue:s.user.email,"onUpdate:modelValue":o[0]||(o[0]=i=>s.user.email=i)},null,8,["class","modelValue"]),t(m,{name:"信箱",class:"invalid-feedback"}),q]),e("div",U,[t(c,{type:"password",id:"password",placeholder:"請輸入密碼",name:"密碼",class:f(["form-control",{"is-invalid":u.密碼}]),rules:"required",modelValue:s.user.password,"onUpdate:modelValue":o[1]||(o[1]=i=>s.user.password=i)},null,8,["class","modelValue"]),t(m,{name:"密碼",class:"invalid-feedback"}),j]),z]),_:1},8,["onSubmit"])])])])])],64)}const G=v(D,[["render",A]]);export{G as default};
