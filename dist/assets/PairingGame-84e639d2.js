import{m as i,r as f,o as r,c as d,a as t,b as p,w as u,F as v,k as D,q as w,s as A,n as N,t as P,p as O,e as C,_ as o}from"./index-d6735393.js";import{d as I}from"./vuedraggable.umd-e54994ea.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const b={name:"PairingGame",components:{draggable:I,ImageContainer:i(()=>o(()=>import("./ImageContainer-af1b21ab.js"),["assets/ImageContainer-af1b21ab.js","assets/get_assets-e179de71.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-d6735393.js","assets/index-797b4968.css","assets/ImageContainer-0167eafa.css"])),ImageWithText:i(()=>o(()=>import("./ImageWithText-fbe6b8e9.js"),["assets/ImageWithText-fbe6b8e9.js","assets/get_assets-e179de71.js","assets/ImageContainer-af1b21ab.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-d6735393.js","assets/index-797b4968.css","assets/ImageContainer-0167eafa.css","assets/ImageWithText-df75e332.css"])),TextOnly:i(()=>o(()=>import("./TextOnly-dcdf288f.js"),["assets/TextOnly-dcdf288f.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-d6735393.js","assets/index-797b4968.css","assets/TextOnly-52890f30.css"])),Clock:i(()=>o(()=>import("./clock-c5f7d622.js"),["assets/clock-c5f7d622.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-d6735393.js","assets/index-797b4968.css","assets/clock-3fd4d24b.css"])),Water:i(()=>o(()=>import("./Water-edf207ea.js"),["assets/Water-edf207ea.js","assets/get_assets-e179de71.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-d6735393.js","assets/index-797b4968.css","assets/Water-e451b2e9.css"]))},props:{GameData:{type:Object,required:!0},GameConfig:{type:Object,required:!0},id:{type:String,required:!0}},data(){return{Selections:[],Question:[],AnswersOld:[],AnswersNew:[],FalseOption:[]}},methods:{},created(){this.Selections=this.GameData.Properties,this.Question=this.GameData.Pairs.map(e=>e.Question);for(var s in this.GameData.Pairs)this.AnswersNew.push([]),this.AnswersOld.push([])},mounted(){},methods:{PoplastAdd(s){let e=this.AnswersOld[s][0];if(this.FalseOption[s]=!1,console.log(e),this.AnswersNew[s].length>1)for(var n in this.AnswersNew[s])this.AnswersNew[s][n].Tag==e.Tag&&(n==0?(this.Selections.push(this.AnswersNew[s][0]),this.AnswersNew[s]=[this.AnswersNew[s][1]]):(this.Selections.push(this.AnswersNew[s][1]),this.AnswersNew[s]=[this.AnswersNew[s][0]]));this.AnswersOld=this.AnswersNew},CheckAnswer(){let s=!0;for(var e in this.FalseOption)this.FalseOption[e]=!1;for(var e in this.GameData.Pairs)this.GameData.Pairs[e].Answer!=this.AnswersNew[e][0].Tag&&(s=!1,this.FalseOption[e]=!0);s?(this.$emit("play-effect","CorrectSound"),this.$emit("add-record",[this.GameData.Pairs,this.AnswersNew,"正確"]),this.$emit("next-question")):(console.log("Wrong"),this.$emit("play-effect","WrongSound"),this.$emit("add-record",[this.GameData.Pairs,this.AnswersNew,"錯誤"]))}}},g=s=>(O("data-v-46f2f71b"),s=s(),C(),s),y={class:"Outter"},S={class:"Container"},G={class:"Selection"},k=g(()=>t("p",{class:"Title"},"選項區",-1)),E={class:"DragElement"},F={class:"dragable"},V={class:"QuestionArea"},L=g(()=>t("p",{class:"Title"},"答案區",-1)),Q={class:"Pair"},q={class:"dragable"},R={class:"Question"};function B(s,e,n,W,l,_){const m=f("draggable");return r(),d("div",y,[t("div",S,[t("div",G,[k,t("div",E,[p(m,{list:l.Selections,"item-key":"Tag",group:"Answer",class:"InnerComponent"},{item:u(({element:a})=>[t("div",F,[(r(),w(A(a.Name),{Data:a.Data,ID:this.id},null,8,["Data","ID"]))])]),_:1},8,["list"])])]),t("div",V,[L,(r(!0),d(v,null,D(n.GameData.Pairs,(a,c)=>(r(),d("div",Q,[t("div",{class:N(["Answer",{False:l.FalseOption[c]==!0}])},[p(m,{list:l.AnswersNew[c],"item-key":"Tag",group:"Answer",onChange:h=>_.PoplastAdd(c)},{item:u(({element:h})=>[t("div",q,[(r(),w(A(h.Name),{Data:h.Data,ID:this.id},null,8,["Data","ID"]))])]),_:2},1032,["list","onChange"])],2),t("div",R,P(a.Question),1)]))),256))])]),t("button",{class:"Submit",type:"button",onClick:e[0]||(e[0]=(...a)=>_.CheckAnswer&&_.CheckAnswer(...a))},"送出答案")])}const H=T(b,[["render",B],["__scopeId","data-v-46f2f71b"]]);export{H as default};
