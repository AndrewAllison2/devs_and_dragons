import{_ as p,r as m,d as _,e as d,C as u,f as g,o as c,c as i,a,z as C,B as f,h,g as v,F as y,i as b,j as x,P as w,A as r,m as B,p as k,q as P}from"./index-2f04f537.js";const S={setup(){const e=m("");async function t(){try{await x.getCampaigns()}catch(s){w.error(s.message)}}return _(()=>{t()}),{account:d(()=>r.account),filterBy:e,campaigns:d(()=>e.value==""?r.campaigns:r.campaigns.filter(s=>s.name.toLowerCase().includes(e.value.toLowerCase())))}},components:{CampaignCardComponent:u}},I=e=>(k("data-v-510524b3"),e=e(),P(),e),V={class:"background h-100 container-fluid"},j={class:"row justify-content-center m-0 d-flex"},N={class:"col-md-4 col-12 m-1 text-center"},L={class:"elevation-3 rounded fs-5 search text-light p-1"},M={key:0,class:"btn btn-danger mt-2",type:"button","data-bs-toggle":"modal","data-bs-target":"#createCampaignModal"},q=I(()=>a("i",{class:"mdi mdi-plus-box"},null,-1)),A={class:"row justify-content-center p-1"},F={class:"col-12 col-md-9 scroll backdrop rounded"},T={class:"row justify-content-center p-2"};function z(e,t,s,o,D,E){const l=g("CampaignCardComponent");return c(),i("div",V,[a("div",j,[a("div",N,[a("div",L,[C(a("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o.filterBy=n),class:"rounded-pill m-2 w-75",placeholder:"Search Campaigns",type:"search",id:"site-campaigns",name:"q"},null,512),[[f,o.filterBy]])]),o.account.id?(c(),i("button",M,[q,h(" Create Campaign")])):v("",!0)])]),a("div",A,[a("div",F,[a("div",T,[(c(!0),i(y,null,b(o.campaigns,n=>(c(),i("div",{class:"col-md-3 col-12 m-2 text-light animate__animated animate__fadeIn camp-card",key:n.id},[B(l,{campaignProp:n},null,8,["campaignProp"])]))),128))])])])])}const G=p(S,[["render",z],["__scopeId","data-v-510524b3"]]);export{G as default};
