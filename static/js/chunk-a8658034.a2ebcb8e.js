(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8658034"],{"20ca":function(t,a,e){"use strict";e.d(a,"a",(function(){return l}));const l=(t,a)=>{let e,l=a||300;return function(){let a=arguments;e&&clearTimeout(e);let r=!e;e=setTimeout(()=>{e=null},l),r&&t.apply(this,a)}}},d6e2:function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(a){t.visible=a}}},[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.dataFormSubmit()}}},[e("el-form-item",{attrs:{label:"标签名称",rules:[{required:!0,message:"标签名称不能为空",trigger:"blur"},{pattern:/\s\S+|S+\s|\S/,message:"请输入正确的标签名称",trigger:"blur"}],prop:"title"}},[e("el-input",{model:{value:t.dataForm.title,callback:function(a){t.$set(t.dataForm,"title",a)},expression:"dataForm.title"}})],1),e("el-form-item",{attrs:{label:"状态",prop:"status"}},[e("el-radio-group",{model:{value:t.dataForm.status,callback:function(a){t.$set(t.dataForm,"status",a)},expression:"dataForm.status"}},[e("el-radio",{attrs:{label:1}},[t._v("正常")]),e("el-radio",{attrs:{label:0}},[t._v("禁用")])],1)],1),e("el-form-item",{attrs:{label:"列表样式",prop:"style"}},[e("el-radio-group",{model:{value:t.dataForm.style,callback:function(a){t.$set(t.dataForm,"style",a)},expression:"dataForm.style"}},[e("el-radio",{attrs:{label:0}},[t._v("一列一个")]),e("el-radio",{attrs:{label:1}},[t._v("一列两个")]),e("el-radio",{attrs:{label:2}},[t._v("一列三个")])],1)],1),e("el-form-item",{attrs:{label:"排序",prop:"seq"}},[e("el-input-number",{attrs:{"controls-position":"right",min:0,label:"排序号"},model:{value:t.dataForm.seq,callback:function(a){t.$set(t.dataForm,"seq",a)},expression:"dataForm.seq"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.visible=!1}}},[t._v("取消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},r=[],s=e("20ca"),o={data(){return{visible:!1,roleList:[],dataForm:{id:null,title:null,shopId:null,status:1,isDefault:null,prodCount:null,seq:null,style:0},dataRule:{}}},methods:{init(t){this.dataForm.id=t||0,this.visible=!0,this.$nextTick(()=>{this.$refs["dataForm"].resetFields(),this.dataForm.id&&this.$http({url:this.$http.adornUrl("/prod/prodTag/info/"+this.dataForm.id),method:"get",params:this.$http.adornParams()}).then(({data:t})=>{this.dataForm=t})})},dataFormSubmit:Object(s["a"])((function(){this.$refs["dataForm"].validate(t=>{t&&this.$http({url:this.$http.adornUrl("/prod/prodTag"),method:this.dataForm.id?"put":"post",data:this.$http.adornData(this.dataForm)}).then(({data:t})=>{this.$message({message:"操作成功",type:"success",duration:1500,onClose:()=>{this.visible=!1,this.$emit("refreshDataList")}})})})}))}},i=o,n=e("2877"),d=Object(n["a"])(i,l,r,!1,null,null,null);a["default"]=d.exports}}]);