import{_ as x,C as q,t as H,z as k,a as s,f,w as a,h as l,j as g,B as y,M as j,E as A,N as M,v as N,b as p,O as V,P as U,F as b,e as C,q as v,n as J,T as K,G as I,H as O,Q as B,A as P,s as Q,I as W,J as X,K as Y,L as Z}from"./main-837926ce.js";/* empty css                */import{E as $,a as ee}from"./el-table-column-213ae48b.js";const te={props:{fieldList:{type:Object,default(){return{}}},data:{type:Object,default(){return{}}}},data(){return{table:[],groupSelect:[{value:"andgroup",label:"+并组"},{value:"orgroup",label:"+或组"},{value:"data",label:"条件"}],logicList:[{value:"=",label:"等于"},{value:"!=",label:"不等于"}],typeList:[{rule:[],value:"常量",label:"常量"}]}},computed:{newtypeList(){const e=this.fieldList.find(t=>{if(this.table&&this.table.length>0&&t.value==this.table[0].field)return t});return e&&e.options?[{rule:[],value:"选项",label:"选项"}]:e&&e.switch?[{value:"布尔",label:"布尔"}]:this.typeList}},methods:{handleType(e){e=="布尔"&&(this.table[0].value=!0)},getFiled(){return!this.table[0]||!this.table[0].field?[]:this.fieldList.find(t=>{if(this.table&&this.table.length>0&&t.value==this.table[0].field)return t}).options||[]},getMultiple(){return!!this.fieldList.find(t=>{if(this.table&&this.table.length>0&&t.value==this.table[0].field)return t}).multiple},getLogic(){const e=this.fieldList.find(t=>{if(this.table&&this.table.length>0&&t.value==this.table[0].field)return t});return e&&e.options&&e.multiple?[{value:"in",label:"包含"},{value:"not in",label:"不包含"}]:e&&e.switch?[{value:"=",label:"等于"}]:this.logicList},show(e){this.$refs.maxJsonDialog.init("可用条件","icon-icon-bianji"),this.$refs.maxJsonDialog.show(),Object.keys(e).length>0&&(this.table=[e])},onAddItem(){this.table.push({field:"",logic:"",type:"",value:""})},getTypeIsChange(e){const t=this.table[e];return!!t.type&&t.type=="常量"},getRules(e){var t;return{value:(t=this.typeList.find(u=>u.value==e))==null?void 0:t.rule}},closeDialog(){this.$refs.maxJsonDialog.close()},deleteRow(){this.table=[]},async saveJson(){if(this.table.length>0){const e=this.table[0];if(!e.field){B({type:"error",message:"字段不能为空!"});return}if(!e.type){B({type:"error",message:"请选择值类型!!"});return}if(e.type&&e.type=="选项"&&!e.value){B({type:"error",message:"值类型为字段时值不能为空!"});return}for(const t in this.table[0])this.data[t]=this.table[0][t]}else for(const e in this.data)delete this.data[e];B({message:"保存成功",type:"success"}),this.closeDialog(),this.$emit("end")}}};function le(e,t,u,d,c,i){const m=I,_=O,h=$,E=W,F=X,r=Y,D=Z,w=A,S=ee,T=j,R=M,G=N,z=k("CustomDialog");return s(),f(Q,{to:"body"},[l(z,{ref:"maxJsonDialog",dialogclass:"maxJsonDialog"},{default:a(()=>[l(T,{style:{padding:"0"}},{default:a(()=>[l(G,{style:{height:"100%"}},{default:a(()=>[l(T,{class:"my-pageMain"},{default:a(()=>[l(S,{data:c.table,style:{width:"100%"},border:""},{default:a(()=>[l(h,{prop:"field",label:"字段"},{default:a(o=>[l(_,{modelValue:o.row.field,"onUpdate:modelValue":n=>o.row.field=n,placeholder:"请选择"},{default:a(()=>[l(m,{label:"未选择",value:""}),(s(!0),p(b,null,C(u.fieldList,(n,L)=>(s(),f(m,{key:L,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),l(h,{prop:"logic",label:"逻辑"},{default:a(o=>[l(_,{modelValue:o.row.logic,"onUpdate:modelValue":n=>o.row.logic=n,placeholder:"请选择"},{default:a(()=>[(s(!0),p(b,null,C(i.getLogic(),n=>(s(),f(m,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),l(h,{prop:"type",label:"值类型"},{default:a(o=>[l(_,{modelValue:o.row.type,"onUpdate:modelValue":n=>o.row.type=n,placeholder:"请选择",onChange:i.handleType},{default:a(()=>[(s(!0),p(b,null,C(i.newtypeList,n=>(s(),f(m,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),l(h,{prop:"value",label:"值"},{default:a(o=>[i.getTypeIsChange(o.$index,e.index)?(s(),f(r,{key:0,model:o.row,rules:i.getRules(o.row.type),ref:"formList"},{default:a(()=>[l(F,{prop:"value"},{default:a(()=>[l(E,{text:"",modelValue:o.row.value,"onUpdate:modelValue":n=>o.row.value=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1032,["model","rules"])):v("",!0),o.row.type=="选项"?(s(),f(_,{key:1,modelValue:o.row.value,"onUpdate:modelValue":n=>o.row.value=n,filterable:"",placeholder:"请选择",multiple:i.getMultiple()},{default:a(()=>[l(m,{label:"未选择",value:""}),(s(!0),p(b,null,C(i.getFiled(),(n,L)=>(s(),f(m,{key:L,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","multiple"])):v("",!0),o.row.type=="布尔"?(s(),f(D,{key:2,modelValue:o.row.value,"onUpdate:modelValue":n=>o.row.value=n,"active-icon":e.Check,"inactive-icon":e.Close},null,8,["modelValue","onUpdate:modelValue","active-icon","inactive-icon"])):v("",!0)]),_:1}),l(h,{fixed:"right",label:"操作",width:"200"},{default:a(o=>[l(w,{size:"small",type:"danger",onClick:P(n=>i.deleteRow(o.$index,e.index),["prevent"])},{default:a(()=>[y(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),c.table.length==0?(s(),f(w,{key:0,class:"mt-4",text:"",onClick:i.onAddItem,style:{width:"100%"}},{default:a(()=>[y("+条件")]),_:1},8,["onClick"])):v("",!0)]),_:1}),l(R,{class:"my-Footer",style:{height:"60px","padding-top":"10px"}},{default:a(()=>[l(w,{type:"primary",onClick:i.saveJson},{default:a(()=>[y("保存")]),_:1},8,["onClick"]),l(w,{onClick:i.closeDialog},{default:a(()=>[y("关闭")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},512)])}var ae=x(te,[["render",le]]);const ue={name:"ConditionGroup",components:{ConditionTanc:ae},props:{result:{type:Object,default(){return{}}},index:{type:Number,default:0},fieldList:{type:Array,default(){return[]}},rightField:{type:Array,default(){return[]}},request:{type:Array,default(){return[]}}},data(){return{groupSelect:[{value:"andgroup",label:"+并组"},{value:"orgroup",label:"+或组"},{value:"data",label:"条件"}]}},watch:{result:{handler(){this.$forceUpdate()},deep:!0}},methods:{onAddItem(){if(this.result.type){switch(!this.result.result&&this.result.type!="data"&&(this.result.result=[]),this.result.type=="data"&&!this.result.data&&(this.result.data={}),this.result.control=!0,this.result.type){case"orgroup":this.result.result.push({type:"orgroup",result:[]});break;case"andgroup":this.result.result.push({type:"andgroup",result:[]});break;case"data":this.result.result.push({type:"data",data:{}});break}this.handleUpdateForce()}},handleControl(e){this.result.control=e,this.handleUpdateForce()},onDeleteItem(){this.index==0?(delete this.result.data,delete this.result.result,delete this.result.type,this.handleUpdateForce()):this.$emit("delete",this.index)},handleDelete(e){this.result.result.splice(e,1),this.handleUpdateForce()},onChange(e){this.result.type=e,e=="andgroup"?(this.result.result=[],this.result.data&&delete this.result.data):e=="orgroup"?(this.result.result=[],this.result.data&&delete this.result.data):(this.result.data={},this.result.result&&delete this.result.result),this.handleUpdateForce()},handleUpdateForce(){this.$forceUpdate(),this.$emit("update")},onEditData(){this.$refs.ConditionTanc.show(this.result.data)}}},ne={class:"control"},ie={class:"moreCondition"};function se(e,t,u,d,c,i){const m=I,_=O,h=A,E=k("ConditionGroup",!0),F=k("ConditionTanc");return s(),p("div",{class:J(["conditionSelect",u.result.type])},[V(g("div",ne,[u.result.control?(s(),p("span",{key:1,class:"iconfont icon-jianhao",onClick:t[1]||(t[1]=r=>i.handleControl(!1))})):(s(),p("span",{key:0,class:"iconfont icon-jiahao",onClick:t[0]||(t[0]=r=>i.handleControl(!0))}))],512),[[U,u.result.result&&u.result.result.length>0&&u.result.type!=="data"]]),l(_,{modelValue:u.result.type,"onUpdate:modelValue":t[2]||(t[2]=r=>u.result.type=r),placeholder:"请选择",onChange:i.onChange},{default:a(()=>[(s(!0),p(b,null,C(c.groupSelect,r=>(s(),f(m,{key:r.value,label:r.label,value:r.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),l(h,{type:"primary",onClick:i.onAddItem,size:"small",disabled:!u.result.type||u.result.type=="data"},{default:a(()=>[y("增加条件")]),_:1},8,["onClick","disabled"]),l(h,{type:"danger",onClick:i.onDeleteItem,size:"small"},{default:a(()=>[y("删除")]),_:1},8,["onClick"]),u.result.type=="data"?(s(),f(h,{key:0,type:"primary",onClick:i.onEditData,size:"small"},{default:a(()=>[y("编辑")]),_:1},8,["onClick"])):v("",!0),l(K,null,{default:a(()=>[V(g("div",ie,[(s(!0),p(b,null,C(u.result.result,(r,D)=>(s(),p("div",{key:D,class:"selectList"},[l(E,{result:r,onUpdate:i.handleUpdateForce,onDelete:i.handleDelete,index:D,fieldList:u.fieldList},null,8,["result","onUpdate","onDelete","index","fieldList"])]))),128)),u.result.result&&u.result.result.length>=2?(s(),p("div",{key:0,class:J(["line",u.result.type])},null,2)):v("",!0)],512),[[U,u.result.type&&u.result.type!=="data"&&u.result.control]])]),_:1}),V(g("div",null,[l(F,{ref:"ConditionTanc",data:u.result.data,fieldList:u.fieldList,onEnd:i.handleUpdateForce},null,8,["data","fieldList","onEnd"])],512),[[U,u.result.type&&u.result.type=="data"]])],2)}var oe=x(ue,[["render",se]]);const re={components:{ConditionGroup:oe},props:{data:{type:Object,default(){return{}}},item:{type:Object,default(){return{}}}},data(){return{result:{},stringLink:"",leftField:[],rightField:[],condition:[],request:[]}},watch:{result:{handler(){console.log(this.result),this.$forceUpdate()},deep:!0}},emits:["change"],methods:{async show(){var e,t;this.$refs.maxJsonDialog.init("可用条件","icon-icon-bianji"),this.$refs.maxJsonDialog.show(),await this.$nextTick();const u=(e=q)==null?void 0:e.get("allFormList"),d=[];(t=H(u))==null||t.forEach(c=>{window.VueContext.$Flex.getFormDataList(c,d,this.data.fieldName)}),this.result=typeof this.data[this.item.data.fieldName]=="string"?JSON.parse(this.data[this.item.data.fieldName]):this.data[this.item.data.fieldName],console.log(d),this.leftField=d},handleUpdateForce(){this.$forceUpdate(),this.stringLink=this.filterCondition(this.result)},filterCondition(e){if(e.type=="andgroup"||e.type=="orgroup"){const t=e.result.map(d=>this.filterCondition(d)).join(e.type=="andgroup"?'<span class="and">and</span>':'<span class="or">or</span>');return`<span class='kh ${e.type}'>(${t})</span>`}else return e.type=="data"?`<span class='data kh'>${this.getDataConditionRelate(e)}</span>`:""},getDataConditionRelate(e){if(Object.keys(e.data).length==0)return"空";const t=e.data,u=t.field;let d;if(t.type=="选项"){const c=t.value;d=`${JSON.stringify(c)}`}else(t.type=="常量"||t.type=="布尔")&&(d=t.value);return`${u} ${t.logic} ${d}`},closeDialog(){this.$refs.maxJsonDialog.close()},saveJson(){this.$emit("change",this.result),this.closeDialog()}}},de=g("div",{class:"tipContent"},"满足以下所有条件时,此组件可用",-1),ce={class:"conditionContainer"},he={class:"stringlist"},fe=["innerHTML"];function pe(e,t,u,d,c,i){const m=k("ConditionGroup"),_=j,h=A,E=M,F=N,r=k("CustomDialog");return s(),f(r,{ref:"maxJsonDialog",dialogclass:"conditionModule"},{default:a(()=>[l(_,{style:{padding:"0"}},{default:a(()=>[l(F,{style:{height:"100%"}},{default:a(()=>[l(_,{class:"my-pageMain"},{default:a(()=>[de,g("div",ce,[l(m,{result:c.result,onUpdate:i.handleUpdateForce,fieldList:c.leftField},null,8,["result","onUpdate","fieldList"]),g("div",he,[g("pre",{innerHTML:c.stringLink},null,8,fe)])])]),_:1}),l(E,{class:"my-Footer",style:{height:"60px","padding-top":"10px"}},{default:a(()=>[l(h,{type:"primary",onClick:i.saveJson},{default:a(()=>[y("保存")]),_:1},8,["onClick"]),l(h,{onClick:i.closeDialog},{default:a(()=>[y("关闭")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},512)}var ge=x(re,[["render",pe]]);export{ge as default};