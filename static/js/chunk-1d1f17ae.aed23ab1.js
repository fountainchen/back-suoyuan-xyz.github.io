(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d1f17ae","chunk-151b2f1e"],{"20ca":function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));const r=(t,a)=>{let e,r=a||300;return function(){let a=arguments;e&&clearTimeout(e);let i=!e;e=setTimeout(()=>{e=null},r),i&&t.apply(this,a)}}},dadd:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mod-user-userAddr"},[e("avue-crud",{ref:"crud",attrs:{page:t.page,data:t.dataList,"table-loading":t.dataListLoading,option:t.tableOption},on:{"search-change":t.searchChange,"on-load":t.getDataList,"refresh-change":t.refreshChange,"row-del":t.rowDel},scopedSlots:t._u([{key:"menu",fn:function(a){return[t.isAuth("user:addr:update")?e("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small"},on:{click:function(e){return t.addOrUpdateHandle(a.row.addrId)}}},[t._v("修改")]):t._e(),t.isAuth("user:addr:delete")?e("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(e){return t.rowDel(a.row,a.$index)}}},[t._v("删除")]):t._e()]}}])},[e("template",{slot:"menuLeft"},[t.isAuth("user:addr:save")?e("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"small"},on:{click:function(a){return t.addOrUpdateHandle()}}},[t._v("新增")]):t._e()],1)],2),t.addOrUpdateVisible?e("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.refreshChange}}):t._e()],1)},i=[];const s={searchMenuSpan:6,columnBtn:!1,border:!0,index:!0,indexLabel:"序号",stripe:!0,menuAlign:"center",align:"center",addBtn:!1,editBtn:!1,delBtn:!1,viewBtn:!1,column:[{label:"收货人名称",prop:"receiver"},{label:"省",prop:"province"},{label:"城市",prop:"city"},{label:"区",prop:"area"},{label:"地址",prop:"addr"},{label:"邮编",prop:"postCode"},{label:"手机",prop:"mobile"},{label:"状态",prop:"status",search:!0,type:"select",dicData:[{label:"无效",value:0},{label:"正常",value:1}]},{label:"默认地址",prop:"commonAddr",dicData:[{label:"否",value:0},{label:"是",value:1}]},{label:"建立时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"}]};var d=e("e4af"),l={data(){return{dataList:[],page:{total:0,currentPage:1,pageSize:10},dataListLoading:!1,tableOption:s,permission:{delBtn:this.isAuth("user:userAddr:delete")},addOrUpdateVisible:!1}},created(){},mounted(){},components:{AddOrUpdate:d["default"]},methods:{getDataList(t,a,e){this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/user/addr/page"),method:"get",params:this.$http.adornParams(Object.assign({current:null==t?this.page.currentPage:t.currentPage,size:null==t?this.page.pageSize:t.pageSize},a))}).then(({data:t})=>{this.dataList=t.records,this.page.total=t.total,this.dataListLoading=!1,e&&e()})},addOrUpdateHandle(t){this.addOrUpdateVisible=!0,this.$nextTick(()=>{this.$refs.addOrUpdate.init(t)})},rowDel(t,a){this.$confirm("确定进行删除操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$http({url:this.$http.adornUrl("/user/addr/"+t.addrId),method:"delete",data:this.$http.adornData({})}).then(({data:t})=>{this.$message({message:"操作成功",type:"success",duration:1500,onClose:()=>{this.getDataList(this.page)}})})}).catch(()=>{})},refreshChange(){this.getDataList(this.page)},searchChange(t,a){this.getDataList(this.page,t,a)}}},o=l,n=e("2877"),c=Object(n["a"])(o,r,i,!1,null,"8d7b2c62",null);a["default"]=c.exports},e4af:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{attrs:{title:t.dataForm.addrId?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(a){t.visible=a}}},[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"100px"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.dataFormSubmit()}}},[e("el-form-item",{attrs:{label:"收货人姓名",prop:"receiver"}},[e("el-input",{model:{value:t.dataForm.receiver,callback:function(a){t.$set(t.dataForm,"receiver",a)},expression:"dataForm.receiver"}})],1),e("el-form-item",{attrs:{label:"省份"}},[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{prop:"province"}},[e("el-select",{attrs:{placeholder:"请选择"},on:{change:t.selectProvince},model:{value:t.dataForm.provinceId,callback:function(a){t.$set(t.dataForm,"provinceId",a)},expression:"dataForm.provinceId"}},t._l(t.provinceList,(function(t){return e("el-option",{key:t.areaId,attrs:{label:t.areaName,value:t.areaId}})})),1)],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{prop:"city"}},[e("el-select",{attrs:{placeholder:"请选择"},on:{change:t.selectCity},model:{value:t.dataForm.cityId,callback:function(a){t.$set(t.dataForm,"cityId",a)},expression:"dataForm.cityId"}},t._l(t.cityList,(function(t){return e("el-option",{key:t.areaId,attrs:{label:t.areaName,value:t.areaId}})})),1)],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{prop:"area"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataForm.areaId,callback:function(a){t.$set(t.dataForm,"areaId",a)},expression:"dataForm.areaId"}},t._l(t.areaList,(function(t){return e("el-option",{key:t.areaId,attrs:{label:t.areaName,value:t.areaId}})})),1)],1)],1)],1),e("el-form-item",{attrs:{label:"详细地址",prop:"addr"}},[e("el-input",{model:{value:t.dataForm.addr,callback:function(a){t.$set(t.dataForm,"addr",a)},expression:"dataForm.addr"}})],1),e("el-form-item",{attrs:{label:"邮编",prop:"postCode"}},[e("el-input",{model:{value:t.dataForm.postCode,callback:function(a){t.$set(t.dataForm,"postCode",a)},expression:"dataForm.postCode"}})],1),e("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[e("el-input",{model:{value:t.dataForm.mobile,callback:function(a){t.$set(t.dataForm,"mobile",a)},expression:"dataForm.mobile"}})],1),e("el-form-item",{attrs:{label:"状态",prop:"status"}},[e("el-radio-group",{attrs:{size:"medium"},model:{value:t.dataForm.status,callback:function(a){t.$set(t.dataForm,"status",a)},expression:"dataForm.status"}},[e("el-radio",{attrs:{label:1}},[t._v("正常")]),e("el-radio",{attrs:{label:0}},[t._v("禁用")])],1)],1),e("el-form-item",{attrs:{label:"默认地址",prop:"commonAddr"}},[e("el-radio-group",{attrs:{size:"medium"},model:{value:t.dataForm.commonAddr,callback:function(a){t.$set(t.dataForm,"commonAddr",a)},expression:"dataForm.commonAddr"}},[e("el-radio",{attrs:{label:0}},[t._v("否")]),e("el-radio",{attrs:{label:1}},[t._v("是")])],1)],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.visible=!1}}},[t._v("取消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},i=[],s=e("20ca"),d={data(){return{visible:!1,roleList:[],provinceList:[],cityList:[],areaList:[],dataForm:{addrId:null,userId:null,receiver:null,provinceId:null,province:null,city:null,cityId:null,area:null,areaId:null,postCode:null,addr:null,mobile:null,status:1,commonAddr:0},dataRule:{}}},methods:{init(t){this.dataForm.addrId=t||0,this.visible=!0,this.$nextTick(()=>{this.$refs["dataForm"].resetFields(),this.cityList=[],this.areaList=[],this.dataForm.provinceId=null,this.dataForm.cityId=null,this.dataForm.areaId=null,this.dataForm.addrId&&this.$http({url:this.$http.adornUrl("/user/addr/info/"+this.dataForm.addrId),method:"get",params:this.$http.adornParams()}).then(({data:t})=>{this.dataForm=t,this.dataForm.addr=t.addr,this.dataForm.addrName=t.addrName,this.dataForm.areaId=t.areaId,this.dataForm.cityId=t.cityId,this.dataForm.provinceId=t.provinceId,this.listAreaByParentId(t.provinceId).then(({data:t})=>{this.cityList=t}),this.listAreaByParentId(t.cityId).then(({data:t})=>{this.areaList=t})})}),this.listAreaByParentId().then(({data:t})=>{this.provinceList=t})},listAreaByParentId(t){return t||(t=0),this.$http({url:this.$http.adornUrl("/admin/area/listByPid"),method:"get",params:this.$http.adornParams({pid:t})})},selectProvince(t){this.dataForm.cityId=null,this.dataForm.city="",this.listAreaByParentId(t).then(({data:t})=>{this.cityList=t})},selectCity(t){this.dataForm.areaId=null,this.dataForm.area="",this.listAreaByParentId(t).then(({data:t})=>{this.areaList=t})},dataFormSubmit:Object(s["a"])((function(){for(let t=0;t<this.provinceList.length;t++)this.provinceList[t].areaId===this.dataForm.provinceId&&(this.dataForm.province=this.provinceList[t].areaName);for(let t=0;t<this.cityList.length;t++)this.cityList[t].areaId===this.dataForm.cityId&&(this.dataForm.city=this.cityList[t].areaName);for(let t=0;t<this.areaList.length;t++)this.areaList[t].areaId===this.dataForm.areaId&&(this.dataForm.area=this.areaList[t].areaName);this.$refs["dataForm"].validate(t=>{t&&this.$http({url:this.$http.adornUrl("/user/addr"),method:this.dataForm.addrId?"put":"post",data:this.$http.adornData(this.dataForm)}).then(({data:t})=>{this.$message({message:"操作成功",type:"success",duration:1500,onClose:()=>{this.visible=!1,this.$refs["dataForm"].resetFields(),this.$emit("refreshDataList")}})})})}))}},l=d,o=e("2877"),n=Object(o["a"])(l,r,i,!1,null,null,null);a["default"]=n.exports}}]);