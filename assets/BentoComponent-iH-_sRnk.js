import{_ as L,j as b,o as m,c as h,a as t,t as n,i as k,l as j,x as S,h as U,F as I,p as P,e as V}from"./index-CWK_X_q9.js";const r=2e3,F={props:["bentoTemp","generateBento","memberData"],data(){return{apiUrl:"https://whatstoday2024-8nsu.onrender.com",mealType:"午餐",bentoDate:"",bentoRecords:[],path:""}},methods:{async getBentoRecords(){await this.axios.get(`${this.apiUrl}/600/users/${this.memberData.id}/records/`).then(l=>{this.bentoRecords=l.data.message})},async saveToDiary(){await this.getBentoRecords();let l=new Date().toISOString().slice(0,10);const o={...this.bentoTemp,date:this.bentoDate?this.bentoDate:l,mealType:this.mealType},e=this.bentoRecords.find(c=>c.date===o.date&&c.mealType===o.mealType);e?confirm("該時段已有便當紀錄，請問是否決定覆蓋該紀錄？")&&await this.axios.patch(`${this.apiUrl}/600/records/${e.id}`,o).then(()=>{b.success("紀錄已存至便當日記！",{autoClose:r})}):await this.axios.post(`${this.apiUrl}/600/users/${this.memberData.id}/records/`,o).then(()=>{b.success("紀錄已存至便當日記！",{autoClose:r})})},async deleteRecord(){await this.axios.delete(`${this.apiUrl}/600/records/${this.bentoTemp.idTemp}`).then(()=>{b.success("便當紀錄刪除成功！",{autoClose:r}),setTimeout(()=>{location.reload()},r)})}},mounted(){this.path=this.$route.path}},s=l=>(P("data-v-a35644b6"),l=l(),V(),l),N={class:"modal fade",id:"bentoModal",tabindex:"-1","aria-labelledby":"bentoModalLabel","aria-hidden":"true"},z={class:"modal-dialog modal-lg modal-dialog-centered"},E={class:"modal-content bento"},O=s(()=>t("div",{class:"modal-header px-4"},[t("h3",{class:"modal-title",id:"bentoModalLabel"},"今天吃什麼？"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),q={class:"modal-body row m-0 row-cols-1 row-cols-lg-2"},A={class:"bento-description col-lg-4 order-last order-lg-1 row m-0 p-lg-3"},G={class:"nutrition-portion p-3 col-6 col-lg-12"},H=s(()=>t("h4",{class:"mb-3 lh-base"},"營養比例：",-1)),J={class:"row row-cols-1"},K={class:"col row row-cols-2"},Q=s(()=>t("div",{class:"col"},[t("p",{class:"m-0"},"澱粉")],-1)),W={class:"col"},X={class:"m-0 text-end"},Y={class:"col row row-cols-2"},Z=s(()=>t("div",{class:"col"},[t("p",{class:"m-0"},"蛋白質")],-1)),$={class:"col"},tt={class:"m-0 text-end"},et={class:"col row row-cols-2"},ot=s(()=>t("div",{class:"col"},[t("p",{class:"m-0"},"蔬菜")],-1)),st={class:"col"},at={class:"m-0 text-end"},lt={key:0,class:"btns text-center p-3 col-6 col-lg-12"},dt=s(()=>t("button",{class:"btn btn-outline-primary re-generate-btn px-4 py-3 m-2","data-bs-toggle":"modal","data-bs-target":"#confirmRegenerateBentoModal",title:"重新生成便當"},"重新生成便當",-1)),it=["title","disabled"],nt={key:1,class:"btns text-center p-3 col-6 col-lg-12"},ct=s(()=>t("button",{class:"btn btn-outline-primary re-generate-btn px-4 py-3 m-2","data-bs-toggle":"modal","data-bs-target":"#confirmDeleteRecordModal",title:"刪除此便當紀錄"},"刪除此便當紀錄",-1)),rt={class:"bento-presentation col-lg-8 order-first order-lg-2"},bt={class:"border border-gray border-3 rounded w-100 h-100 p-3 pb-4"},mt={class:"row g-2 h-100"},ht={class:"col col-4 h-50"},_t={class:"side-dish border border-gray border-3 rounded h-100"},gt=["src","alt","title"],ut={class:"col col-4 h-50"},vt={class:"side-dish border border-gray border-3 rounded h-100"},pt=["src","alt","title"],yt={class:"col col-4 h-50"},Tt={class:"side-dish border border-gray border-3 rounded h-100"},ft=["src","alt","title"],Dt={class:"col col-12 h-50"},wt={class:"border border-gray border-3 rounded col-12 h-100 p-0 d-flex"},xt={class:"staple w-50"},Mt=["src","alt","title"],Ct={class:"entree w-50"},Bt=["src","alt","title"],Rt={class:"modal fade",id:"confirmRegenerateBentoModal",tabindex:"-1","aria-labelledby":"confirmRegenerateBentoModalLabel","aria-hidden":"true"},kt={class:"modal-dialog modal-dialog-centered"},Ut={class:"modal-content"},Lt=s(()=>t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"confirmRegenerateBentoModalLabel"},"是否確認重新生成新的便當？"),t("button",{type:"button",class:"btn-close","aria-label":"Close","data-bs-toggle":"modal","data-bs-target":"#bentoModal"})],-1)),jt=s(()=>t("div",{class:"modal-body"}," 此操作將無法復原，請確認是否執行。 ",-1)),St={class:"modal-footer"},It=s(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#bentoModal"},"取消",-1)),Pt={class:"modal fade",id:"saveToBentoDiaryModal",tabindex:"-1","aria-labelledby":"saveToBentoDiaryModalLabel","aria-hidden":"true"},Vt={class:"modal-dialog modal-dialog-centered"},Ft={class:"modal-content"},Nt=s(()=>t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"saveToBentoDiaryModalLabel"},"存至便當日記"),t("button",{type:"button",class:"btn-close","data-bs-toggle":"modal","data-bs-target":"#bentoModal","aria-label":"Close"})],-1)),zt={class:"modal-body"},Et={class:"mb-3"},Ot=s(()=>t("label",{class:"mx-2",for:"bentoDate"},"便當日記：",-1)),qt=s(()=>t("label",{class:"mx-2",for:"bentoDate"},"這是我的：",-1)),At={class:"btn-group",role:"group","aria-label":"Basic outlined example"},Gt={class:"modal-footer"},Ht={class:"modal fade",id:"confirmDeleteRecordModal",tabindex:"-1","aria-labelledby":"confirmDeleteRecordModalLabel","aria-hidden":"true"},Jt={class:"modal-dialog modal-dialog-centered"},Kt={class:"modal-content"},Qt=s(()=>t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"confirmDeleteRecordModalLabel"},"是否確認刪除此便當紀錄？"),t("button",{type:"button",class:"btn-close","aria-label":"Close","data-bs-toggle":"modal","data-bs-target":"#bentoModal"})],-1)),Wt=s(()=>t("div",{class:"modal-body"}," 此操作將無法復原，請確認是否執行。 ",-1)),Xt={class:"modal-footer"},Yt=s(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#bentoModal"},"取消",-1));function Zt(l,o,e,c,d,i){var _,g,u,v,p,y,T,f,D,w,x,M,C,B,R;return m(),h(I,null,[t("div",N,[t("div",z,[t("div",E,[O,t("div",q,[t("div",A,[t("div",G,[H,t("div",J,[t("div",K,[Q,t("div",W,[t("p",X,n(Math.round(e.bentoTemp.starchTotalPortion/4*100)/100)+" 碗",1)])]),t("div",Y,[Z,t("div",$,[t("p",tt,n(e.bentoTemp.proteinTotalPortion)+" 份",1)])]),t("div",et,[ot,t("div",st,[t("p",at,n(e.bentoTemp.vegetableTotalPortion)+" 份",1)])])])]),d.path==="/menu"?(m(),h("div",lt,[dt,t("button",{class:"btn btn-primary save-to-diary-btn px-4 py-3 m-2","data-bs-toggle":"modal","data-bs-target":"#saveToBentoDiaryModal",title:e.memberData.id?"存至便當日記":"便當日記為會員限定功能",disabled:!e.memberData.id},"存至便當日記",8,it)])):k("",!0),d.path==="/member/bento-diary"?(m(),h("div",nt,[t("p",null,n(e.bentoTemp.dateTemp),1),t("p",null,n(e.bentoTemp.mealType),1),ct])):k("",!0)]),t("div",rt,[t("div",bt,[t("div",mt,[t("div",ht,[t("div",_t,[t("img",{class:"img rounded object-fit-cover h-100",src:(_=e.bentoTemp.sideDishes[0])==null?void 0:_.imgUrl,alt:((g=e.bentoTemp.sideDishes[0])==null?void 0:g.title)+"的圖片",title:(u=e.bentoTemp.sideDishes[0])==null?void 0:u.title},null,8,gt)])]),t("div",ut,[t("div",vt,[t("img",{class:"img rounded object-fit-cover h-100",src:(v=e.bentoTemp.sideDishes[1])==null?void 0:v.imgUrl,alt:((p=e.bentoTemp.sideDishes[1])==null?void 0:p.title)+"的圖片",title:(y=e.bentoTemp.sideDishes[1])==null?void 0:y.title},null,8,pt)])]),t("div",yt,[t("div",Tt,[t("img",{class:"img rounded object-fit-cover h-100",src:(T=e.bentoTemp.sideDishes[2])==null?void 0:T.imgUrl,alt:((f=e.bentoTemp.sideDishes[2])==null?void 0:f.title)+"的圖片",title:(D=e.bentoTemp.sideDishes[2])==null?void 0:D.title},null,8,ft)])]),t("div",Dt,[t("div",wt,[t("div",xt,[t("img",{class:"img img-fluid object-fit-cover h-100",src:(w=e.bentoTemp.stapleCourse)==null?void 0:w.imgUrl,alt:((x=e.bentoTemp.stapleCourse)==null?void 0:x.title)+"的圖片",title:(M=e.bentoTemp.stapleCourse)==null?void 0:M.title},null,8,Mt)]),t("div",Ct,[t("img",{class:"img img-fluid object-fit-cover h-100",src:(C=e.bentoTemp.mainCourse)==null?void 0:C.imgUrl,alt:((B=e.bentoTemp.mainCourse)==null?void 0:B.title)+"的圖片",title:(R=e.bentoTemp.mainCourse)==null?void 0:R.title},null,8,Bt)])])])])])])])])])]),t("div",Rt,[t("div",kt,[t("div",Ut,[Lt,jt,t("div",St,[It,t("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=(...a)=>e.generateBento&&e.generateBento(...a)),"data-bs-toggle":"modal","data-bs-target":"#bentoModal"},"確認")])])])]),t("div",Pt,[t("div",Vt,[t("div",Ft,[Nt,t("div",zt,[t("div",Et,[Ot,j(t("input",{class:"form-control me-4 w-auto d-inline-block",id:"bentoDate",type:"date","onUpdate:modelValue":o[1]||(o[1]=a=>d.bentoDate=a)},null,512),[[S,d.bentoDate]])]),t("div",null,[qt,t("div",At,[t("button",{type:"button",class:U(["lunch-btn btn btn-outline-primary px-2 py-1",{active:d.mealType==="午餐"}]),onClick:o[2]||(o[2]=a=>d.mealType="午餐")},"午餐",2),t("button",{type:"button",class:U(["dinner-btn btn btn-outline-primary px-2 py-1",{active:d.mealType==="晚餐"}]),onClick:o[3]||(o[3]=a=>d.mealType="晚餐")},"晚餐",2)])])]),t("div",Gt,[t("button",{type:"button",class:"btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#bentoModal",onClick:o[4]||(o[4]=(...a)=>i.getBentoRecords&&i.getBentoRecords(...a))},"取消"),t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:o[5]||(o[5]=(...a)=>i.saveToDiary&&i.saveToDiary(...a))},"確認儲存")])])])]),t("div",Ht,[t("div",Jt,[t("div",Kt,[Qt,Wt,t("div",Xt,[Yt,t("button",{type:"button",class:"btn btn-primary",onClick:o[6]||(o[6]=(...a)=>i.deleteRecord&&i.deleteRecord(...a)),"data-bs-dismiss":"modal"},"確認")])])])])],64)}const te=L(F,[["render",Zt],["__scopeId","data-v-a35644b6"]]);export{te as B};
