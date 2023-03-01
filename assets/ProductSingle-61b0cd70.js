import{S as l}from"./sweetalert2.all-281a79b7.js";import{_ as h,o as d,c as r,a as t,F as g,e as f,t as c,f as v,v as w,d as P,g as b}from"./index-ecb93a64.js";import{_ as x}from"./loading-44eca6fd.js";const{VITE_APP_URL:a,VITE_APP_PATH:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"kevin-jiang",BASE_URL:"/week6-Vue-Router/",MODE:"production",DEV:!1,PROD:!0},y={data(){return{product:{},NewQty:1,loadingItem:""}},methods:{getProduct(){this.$http.get(`${a}/api/${u}/product/${this.$route.params.id}`).then(o=>{this.product=o.data.product,this.NewQty=1})},addCart(o,e){const n={product_id:o,qty:e};this.loadingItem=o,this.$http.post(`${a}api/${u}/cart`,{data:n}).then(_=>{this.loadingItem="",l.fire({position:"top-end",icon:"success",title:"加入購物車成功(ﾉ>ω<)ﾉ",showConfirmButton:!1,timer:1500,toast:!0}),this.getProduct()}).catch(()=>{l.fire({icon:"error",title:"加入購物車失敗(‘⊙д-)",showConfirmButton:!1,timer:1500})})}},mounted(){this.getProduct()}},I=t("h2",null,"單一產品介紹",-1),V={class:"row"},E={class:"col-md-4"},N=["src"],T={class:"row mt-3"},k=["src"],A={class:"col-md-8 text-start d-flex justify-content-between flex-column"},B={class:"p-3 pt-0"},C={class:"badge rounded-pill text-bg-primary fs-5 text-white mb-3"},U={class:"fs-5"},D={class:"fs-5"},Q={class:"row"},R=t("div",{class:"col-md-6"},null,-1),S={class:"col-md-6 text-end"},L={class:"input-group text-end mt-5"},j=["disabled"],F=["disabled"],H={key:0,src:x,alt:"loading",width:"20"};function M(o,e,n,_,s,p){return d(),r("div",null,[I,t("div",V,[t("div",E,[t("img",{src:s.product.imageUrl,alt:"主要圖片",class:"img-fluid w-100"},null,8,N),t("div",T,[(d(!0),r(g,null,f(s.product.imagesUrl,(i,m)=>(d(),r("div",{class:"col-md-6",key:m+"image"},[t("img",{src:i,alt:"次要圖片",class:"img-fluid"},null,8,k)]))),128))])]),t("div",A,[t("div",B,[t("span",C,c(s.product.category),1),t("p",U,"商品名稱:"+c(s.product.title),1),t("p",D,"商品內容:"+c(s.product.description),1)]),t("div",Q,[R,t("div",S,[t("div",L,[v(t("input",{type:"number",min:"1",class:"form-control w-50","onUpdate:modelValue":e[0]||(e[0]=i=>s.NewQty=i),disabled:s.loadingItem===s.product.id},null,8,j),[[w,s.NewQty]]),t("button",{class:"btn btn-primary btn-lg",onClick:e[1]||(e[1]=i=>p.addCart(s.product.id,s.NewQty)),disabled:s.loadingItem===s.product.id},[P(" 加入購物車 "),s.loadingItem===s.product.id?(d(),r("img",H)):b("",!0)],8,F)])])])])])])}const G=h(y,[["render",M]]);export{G as default};