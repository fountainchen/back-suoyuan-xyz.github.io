(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55d898ac","chunk-2d2eab5a","chunk-db556704","chunk-2d0d096d"],{"0e93":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[a("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),a("div",{staticClass:"editor-custom-btn-container"},[a("el-upload",{staticClass:"upload-demo",attrs:{"list-type":"picture",action:t.$http.adornUrl("/admin/file/upload/element"),headers:{Authorization:t.$cookie.get("Authorization")},"on-success":t.imageSuccessCBK,"show-file-list":!1,"before-upload":t.beforeAvatarUpload}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传图片")])],1)],1)])},r=[],i=a("bcf3");const o=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"];var n=o;const l=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"];var u=l;let p=[];function d(){return window.tinymce}const c=(t,e)=>{const a=document.getElementById(t),s=e||function(){};if(!a){const e=document.createElement("script");e.src=t,e.id=t,document.body.appendChild(e),p.push(s);const a="onload"in e?r:i;a(e)}function r(e){e.onload=function(){this.onerror=this.onload=null;for(const t of p)t(null,e);p=null},e.onerror=function(){document.body.removeChild(e),this.onerror=this.onload=null,s(new Error("Failed to load "+t),e)}}function i(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;for(const e of p)e(null,t);p=null}}}a&&s&&(d()?s(null,a):p.push(s))};var m=c;const h="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",g="https://unpkg.zhimg.com/tinymce-all-in-one@4.9.3/tinymce.min.js",f="https://unpkg.com/tinymce-all-in-one@4.9.3/tinymce.min.js";var b={name:"Tinymce",components:{mulPicUpload:i["a"]},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,resourcesUrl:"http://rrip0d5so.bkt.clouddn.com/"}},computed:{language(){return localStorage.getItem("lang")||"zh_CN"},containerWidth(){const t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?t+"px":t}},watch:{value(t){!this.hasChange&&this.hasInit&&this.$nextTick(()=>window.tinymce.get(this.tinymceId).setContent(t||""))},language(){this.destroyTinymce(),this.$nextTick(()=>this.initTinymce())}},mounted(){this.init()},activated(){window.tinymce&&this.initTinymce()},deactivated(){this.destroyTinymce()},destroyed(){this.destroyTinymce()},methods:{init(){m(h,t=>{t?m(g,e=>{e?m(f,e=>{e?this.$message.error(t.message):this.initTinymce()}):this.initTinymce()}):this.initTinymce()})},initTinymce(){const t=this;window.tinymce.init({language:this.language,selector:"#"+this.tinymceId,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:u,menubar:this.menubar,plugins:n,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:e=>{t.value&&e.setContent(t.value),t.hasInit=!0,e.on("NodeChange Change KeyUp SetContent",()=>{this.hasChange=!0,this.$emit("input",e.getContent())})},setup(e){e.on("FullscreenStateChanged",e=>{t.fullscreen=e.state})},convert_urls:!1})},destroyTinymce(){const t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent(t){window.tinymce&&window.tinymce.get(this.tinymceId).setContent(t)},getContent(){window.tinymce.get(this.tinymceId).getContent()},beforeAvatarUpload(t){const e="image/jpeg"===t.type||"image/png"===t.type||"image/gif"===t.type||"image/jpg"===t.type;e||this.$message.error("上传图片只能是jpeg/jpg/png/gif 格式!");const a=t.size/1024/1024<2;return a||this.$message.error("上传图片大小不能超过 2MB!"),a&&e},imageSuccessCBK(t,e,a){const s=this;a.forEach(t=>{window.tinymce.get(s.tinymceId).insertContent(`<img class="wscnph" src="${this.resourcesUrl+t.response}" >`)})}}},v=b,y=(a("ec6f"),a("2877")),k=Object(y["a"])(v,s,r,!1,null,"32b8f29a",null);e["a"]=k.exports},"20ca":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));const s=(t,e)=>{let a,s=e||300;return function(){let e=arguments;a&&clearTimeout(a);let r=!a;a=setTimeout(()=>{a=null},s),r&&t.apply(this,e)}}},"55ac":function(t,e,a){},6775:function(t,e,a){"use strict";a("d0bd")},"692f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-prod-prod-transport"},[a("el-form-item",{attrs:{label:"运费设置",rules:[{required:!0,message:"运费模板不能为空"}]}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.changeTransport},model:{value:t.transportId,callback:function(e){t.transportId=e},expression:"transportId"}},t._l(t.transportList,(function(t){return a("el-option",{key:t.transportId,attrs:{label:t.transName,value:t.transportId}})})),1)],1),a("el-form-item",[t.transportInfo.transfees?a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.transportInfo.transfees}},[a("el-table-column",{attrs:{label:"配送区域",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.cityList.length?t._l(e.row.cityList,(function(e){return a("el-tag",{key:e.areaId},[t._v(t._s(e.areaName))])})):a("span",[t._v("所有地区")])]}}],null,!1,2372662209)}),a("el-table-column",{attrs:{prop:"firstPiece",label:t.tableTitle[0]}}),a("el-table-column",{attrs:{prop:"firstFee",label:t.tableTitle[1]}}),a("el-table-column",{attrs:{prop:"continuousPiece",label:t.tableTitle[2]}}),a("el-table-column",{attrs:{prop:"continuousFee",label:t.tableTitle[3]}})],1):t._e()],1),1===t.transportInfo.hasFreeCondition?a("el-form-item",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.transportInfo.transfeeFrees}},[a("el-table-column",{attrs:{label:"指定区域",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.freeCityList,(function(e){return a("el-tag",{key:e.areaId},[t._v(t._s(e.areaName))])}))}}],null,!1,569599057)}),a("el-table-column",{attrs:{prop:"freeType",label:"包邮条件"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.freeType?a("span",[t._v("满件/重量/体积包邮")]):t._e(),1===e.row.freeType?a("span",[t._v("满金额包邮")]):t._e(),2===e.row.freeType?a("span",[t._v("满件/重量/体积且满金额包邮")]):t._e()]}}],null,!1,816184073)}),a("el-table-column",{attrs:{prop:"amount"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.freeType?a("span",[t._v("满"+t._s(e.row.amount)+"元金额包邮")]):t._e(),0===e.row.freeType?a("span",[t._v("满"+t._s(e.row.piece)+"件/重量/体积包邮")]):t._e(),2===e.row.freeType?a("span",[t._v("满"+t._s(e.row.piece)+"件/重量/体积且满"+t._s(e.row.amount)+"元金额包邮")]):t._e()]}}],null,!1,3850401481)})],1)],1):t._e()],1)},r=[],i={data(){return{transportId:null,transportList:[{transportId:null,transName:""}],transportInfo:{hasFreeCondition:!1,transfeeFrees:[{freeCityList:[]}]}}},props:{value:{default:null,type:Number}},computed:{tableTitle(){var t=[["首件(个)","运费(元)","续件(个)","续费(元)"],["首重(kg)","运费(元)","续重(kg)","续费(元)"],["首体积(m³)","运费(元)","续体积(m³)","续费(元)"]];return this.transportInfo.chargeType?t[this.transportInfo.chargeType]:t[0]}},created(){this.getTransportList()},watch:{value:function(t){this.transportId=t}},methods:{getTransportList(){this.$http({url:this.$http.adornUrl("/shop/transport/list"),method:"get",params:this.$http.adornParams({})}).then(({data:t})=>{this.transportList=t})},changeTransport(t){this.$emit("input",t),t&&this.$http({url:this.$http.adornUrl("/shop/transport/info/"+t),method:"get",params:this.$http.adornParams({})}).then(({data:t})=>{this.transportInfo=t})}}},o=i,n=a("2877"),l=Object(n["a"])(o,s,r,!1,null,null,null);e["default"]=l.exports},8497:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-prod-sku-tag"},[a("el-form-item",{attrs:{label:"商品规格"}},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.shopTagInput()}}},[t._v("添加规格")]),t._l(t.skuTags,(function(e,s){return a("div",{key:s},[a("span",[t._v(t._s(e.tagName))]),a("el-button",{staticClass:"button-new-tag",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.removeTag(s)}}},[t._v("删除")]),a("br"),t._l(e.tagItems,(function(e,r){return a("el-tag",{key:e.valueId,attrs:{closable:"","disable-transitions":!1},on:{close:function(e){return t.handleTagClose(s,r)}}},[t._v(" "+t._s(e.propValue)+" ")])})),t.tagItemInputs[s]&&t.tagItemInputs[s].visible?a("el-input",{ref:"saveTagInput"+s,refInFor:!0,staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(e){return t.handleInputConfirm(s)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(s)}},model:{value:t.tagItemInputs[s].value,callback:function(e){t.$set(t.tagItemInputs[s],"value",e)},expression:"tagItemInputs[tagIndex].value"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){return t.showTagInput(s)}}},[t._v("+ 添加")])],2)}))],2),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.isShowTagInput,expression:"isShowTagInput"}],attrs:{label:"规格名"}},[a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择"},on:{change:t.handleTagClick},model:{value:t.addTagInput.propName,callback:function(e){t.$set(t.addTagInput,"propName",e)},expression:"addTagInput.propName"}},t._l(t.unUseTags,(function(t){return a("el-option",{key:t.propId,attrs:{label:t.propName,value:t.propName}})})),1)],1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.isShowTagInput,expression:"isShowTagInput"}],attrs:{label:"规格值"}},[a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择"},model:{value:t.addTagInput.selectValues,callback:function(e){t.$set(t.addTagInput,"selectValues",e)},expression:"addTagInput.selectValues"}},t._l(t.dbTagValues,(function(t){return a("el-option",{key:t.valueId,attrs:{label:t.propValue,value:t.propValue}})})),1)],1)],1),a("el-form-item",[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShowTagInput,expression:"isShowTagInput"}],attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.addTag()}}},[t._v("确定")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShowTagInput,expression:"isShowTagInput"}],attrs:{size:"mini"},on:{click:function(e){return t.hideTagInput()}}},[t._v("取消")])],1)],1)},r=[],i={data(){return{value:[],isShowTagInput:!1,addTagInput:{propName:"",selectValues:[]},type:0,tagItemName:"",tagName:"",tagNameIndex:0,tagItemInputs:[],dbTags:[],dbTagValues:[],specs:[],maxValueId:0,maxPropId:0,initing:!1}},created:function(){this.$http({url:this.$http.adornUrl("/prod/spec/list"),method:"get",params:this.$http.adornParams()}).then(({data:t})=>{this.dbTags=t,this.maxPropId=t?Math.max.apply(Math,t.map(t=>t.propId)):0}),this.$http({url:this.$http.adornUrl("/prod/spec/listSpecMaxValueId"),method:"get",params:this.$http.adornParams()}).then(({data:t})=>{this.maxValueId=t||0})},props:{skuList:{default:[]}},computed:{unUseTags(){let t=[];for(let e=0;e<this.dbTags.length;e++){const a=this.dbTags[e];let s=this.skuTags.findIndex(t=>t.tagName===a.propName);-1===s&&t.push(a)}return t},skuTags:{get(){return this.$store.state.prod.skuTags},set(t){this.$store.commit("prod/updateSkuTags",t)}},defalutSku(){return this.$store.state.prod.defalutSku}},watch:{skuTags:{handler(t,e){if(this.initing)return void(this.initing=!1);let a=[];if(4===this.type)this.skuList.forEach(t=>{let e=t.properties.split(";");this.tagItemName!==e[this.tagNameIndex].split(":")[1]&&a.push(t)});else if(2===this.type){var s=this.tagName+":"+this.tagItemName;let e=[];t.forEach(r=>{if(0===a.length){if(this.tagName===r.tagName){let t=Object.assign({},this.defalutSku);t.properties=s,a.push(t)}else r.tagItems.forEach(t=>{let e=Object.assign({},this.defalutSku);e.properties=`${r.tagName}:${t.propValue}`,a.push(e)});1===t.length&&(a=this.skuList.concat(a))}else e=[],this.tagName===r.tagName?a.forEach(t=>{if(-1===t.properties.indexOf(this.tagName)){let a=Object.assign({},t);a.properties=`${t.properties};${s}`,e.push(a)}}):r.tagItems.forEach(t=>{a.forEach(a=>{if(-1===a.properties.indexOf(r.tagName)){let s=Object.assign({},a);s.properties=`${a.properties};${r.tagName}:${t.propValue}`,e.push(s)}})}),a=this.skuList.concat(e),console.log("skuList",a)})}else{let e=[];t.forEach(t=>{0===a.length?t.tagItems.forEach(e=>{let s=Object.assign({},this.defalutSku);s.properties=`${t.tagName}:${e.propValue}`,a.push(s)}):(e=[],t.tagItems.forEach(s=>{a.forEach(a=>{let r=Object.assign({},a);r.properties=`${a.properties};${t.tagName}:${s.propValue}`,e.push(r)})}),a=e)})}a.length||a.push(Object.assign({},this.defalutSku)),this.$emit("change",a)},deep:!0}},methods:{init(t){if(this.value=t,!t||!t.length)return this.skuTags=[],void this.$emit("change",[Object.assign({},this.defalutSku)]);this.initing=!0;let e=[];for(let a=0;a<t.length;a++){const s=t[a];if(!s.properties)break;let r=s.properties.split(";");for(let t in r){let a=r[t].split(":");e[t]||(e[t]={tagName:a[0],tagItems:[]},this.tagItemInputs.push({visible:!1,value:""}));let s=e[t].tagItems.findIndex(t=>t.propValue===a[1]);-1===s&&e[t].tagItems.push({propValue:a[1]})}}this.skuTags=e},shopTagInput(){this.isShowTagInput=!this.isShowTagInput},hideTagInput(){this.isShowTagInput=!1,this.cleanTagInput()},addTag(){let t=this.addTagInput.selectValues;if(!this.addTagInput.propName)return void this.$message.error("请输入规格名");if(!t.length)return void this.$message.error("请输入规格值");this.isShowTagInput=!1;for(let a=0;a<t.length;a++){const e=t[a];let s="[object Object]"===Object.prototype.toString.call(e);if(!s){this.maxPropId=this.maxPropId+1;break}}let e=[];for(let a=0;a<t.length;a++){const s=t[a];let r="[object Object]"===Object.prototype.toString.call(s);r?e.push(s):(this.maxValueId=this.maxValueId+1,e.push({propId:this.maxPropId,propValue:s,valueId:this.maxValueId}))}this.$store.commit("prod/addSkuTag",{tagName:this.addTagInput.propName,tagItems:e}),this.type=1,this.cleanTagInput()},cleanTagInput(){this.addTagInput={propName:"",selectValues:[]},this.dbTagValues=[]},handleTagClick(){this.dbTagValues=[],this.addTagInput.selectValues=[];let t=this.dbTags.findIndex(t=>t.propName===this.addTagInput.propName);-1!==t&&this.$http({url:this.$http.adornUrl("/prod/spec/listSpecValue/"+this.dbTags[t].propId),method:"get",params:this.$http.adornParams()}).then(({data:t})=>{this.dbTagValues=t})},handleTagClose(t,e){this.tagName=this.skuTags[t].tagName,this.tagNameIndex=t,this.tagItemName=this.skuTags[t].tagItems[e].propValue,1!==this.skuTags[t].tagItems.length&&(this.type=4,this.$store.commit("prod/removeSkuTagItem",{tagIndex:t,tagItemIndex:e}))},handleInputConfirm(t){if(this.checkTagItem(t))return;var e=this.skuTags[t].tagItems,a=this.tagItemInputs[t].value;let s=e.length-1;this.tagName=this.skuTags[t].tagName,this.tagItemName=this.tagItemInputs[t].value;let r=this.getMaxValueId(this.skuTags[t].tagItems),i={propId:-1===s?0:this.skuTags[t].tagItems[s].propId,propValue:a,valueId:-1===s?0:r+1};i&&this.$store.commit("prod/addSkuTagItem",{tagIndex:t,tagItem:i}),this.tagItemInputs[t].visible=!1,this.tagItemInputs[t].value="",this.type=2},showTagInput(t){this.tagItemInputs.push({visible:!1,value:""}),this.tagItemInputs[t].visible=!0,this.$nextTick(()=>{this.$refs["saveTagInput"+t][0].$refs.input.focus()})},getMaxValueId(t){let e=Math.max.apply(Math,t.map(t=>t.valueId));return e},removeTag(t){this.type=3,this.$store.commit("prod/removeSkuTag",t)},checkTagItem(t){let e=this.tagItemInputs[t].value;if(!e)return this.tagItemInputs[t].visible=!1,this.tagItemInputs[t].value="",!0;var a=!1;return this.skuTags.forEach(t=>{let s=t.tagItems.map((t,e)=>t.propValue);if(s.indexOf(e)>-1)return a=!0,this.$message.error("product.specificationValue"),!1}),a}}},o=i,n=(a("6775"),a("2877")),l=Object(n["a"])(o,s,r,!1,null,null,null);e["default"]=l.exports},"8a6c":function(t,e,a){"use strict";a("9c7a")},"8e08":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-prod-info"},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"产品图片"}},[a("mul-pic-upload",{model:{value:t.dataForm.imgs,callback:function(e){t.$set(t.dataForm,"imgs",e)},expression:"dataForm.imgs"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:t.dataForm.status,callback:function(e){t.$set(t.dataForm,"status",e)},expression:"dataForm.status"}},[a("el-radio",{attrs:{label:1}},[t._v("上架")]),a("el-radio",{attrs:{label:0}},[t._v("下架")])],1)],1),a("el-form-item",{attrs:{label:"产品分类",rules:[{required:!0,message:"请选择产品分类"}],prop:"categoryId"}},[a("el-col",{attrs:{span:8}},[a("el-cascader",{attrs:{"expand-trigger":"hover",options:t.category.list,props:t.category.props,"change-on-select":""},on:{change:t.handleCategoryChange},model:{value:t.category.selected,callback:function(e){t.$set(t.category,"selected",e)},expression:"category.selected"}})],1)],1),a("el-form-item",{attrs:{label:"产品分组",rules:[{required:!0,message:"请选择产品分组"}]}},[a("el-col",{attrs:{span:8}},[a("el-select",{staticStyle:{width:"250px"},attrs:{multiple:"",placeholder:"请选择"},model:{value:t.dataForm.tagList,callback:function(e){t.$set(t.dataForm,"tagList",e)},expression:"dataForm.tagList"}},t._l(this.tags,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)],1),a("el-form-item",{attrs:{label:"产品名称",prop:"prodName",rules:[{required:!0,message:"产品名称不能为空"},{pattern:/\s\S+|S+\s|\S/,message:"请输入正确的产品名称",trigger:"blur"}]}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{placeholder:"产品名称",maxlength:"50"},model:{value:t.dataForm.prodName,callback:function(e){t.$set(t.dataForm,"prodName",e)},expression:"dataForm.prodName"}})],1)],1),a("el-form-item",{attrs:{label:"产品卖点",prop:"brief",rules:[{required:!1,pattern:/\s\S+|S+\s|\S/,message:"请输入正确的产品卖点",trigger:"blur"}]}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"产品卖点"},model:{value:t.dataForm.brief,callback:function(e){t.$set(t.dataForm,"brief",e)},expression:"dataForm.brief"}})],1)],1),a("el-form-item",{attrs:{label:"配送方式"}},[a("el-checkbox",{model:{value:t.dataForm.deliveryMode.hasShopDelivery,callback:function(e){t.$set(t.dataForm.deliveryMode,"hasShopDelivery",e)},expression:"dataForm.deliveryMode.hasShopDelivery"}},[t._v("商家配送")]),a("el-checkbox",{model:{value:t.dataForm.deliveryMode.hasUserPickUp,callback:function(e){t.$set(t.dataForm.deliveryMode,"hasUserPickUp",e)},expression:"dataForm.deliveryMode.hasUserPickUp"}},[t._v("用户自提")])],1),a("prod-transport",{directives:[{name:"show",rawName:"v-show",value:t.dataForm.deliveryMode.hasShopDelivery,expression:"dataForm.deliveryMode.hasShopDelivery"}],model:{value:t.dataForm.deliveryTemplateId,callback:function(e){t.$set(t.dataForm,"deliveryTemplateId",e)},expression:"dataForm.deliveryTemplateId"}}),a("sku-tag",{ref:"skuTag",attrs:{skuList:t.dataForm.skuList},on:{change:t.skuTagChangeSkuHandler}}),a("sku-table",{ref:"skuTable",attrs:{prodName:t.dataForm.prodName},on:{"update:prodName":function(e){return t.$set(t.dataForm,"prodName",e)},"update:prod-name":function(e){return t.$set(t.dataForm,"prodName",e)}},model:{value:t.dataForm.skuList,callback:function(e){t.$set(t.dataForm,"skuList",e)},expression:"dataForm.skuList"}}),a("el-form-item",{attrs:{label:"产品详情",prop:"content"}},[a("tiny-mce",{ref:"content",staticStyle:{width:"1000px"},model:{value:t.dataForm.content,callback:function(e){t.$set(t.dataForm,"content",e)},expression:"dataForm.content"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataFormSubmit()}}},[t._v("确定")])],1)],1)],1)},r=[],i=a("ed08"),o=a("bcf3"),n=a("692f"),l=a("8497"),u=a("9279"),p=a("0e93"),d=a("20ca"),c={data(){return{category:{list:[],selected:[],props:{value:"categoryId",label:"categoryName"}},dataForm:{prodName:"",brief:"",pic:"",imgs:"",categoryId:0,prodId:0,skuList:[],tagList:[],content:"",status:1,deliveryMode:{hasShopDelivery:!1,hasUserPickUp:!1},deliveryTemplateId:null},tags:[],resourcesUrl:"http://rrip0d5so.bkt.clouddn.com/"}},components:{MulPicUpload:o["a"],ProdTransport:n["default"],TinyMce:p["a"],SkuTag:l["default"],SkuTable:u["default"]},computed:{defalutSku(){return this.$store.state.prod.defalutSku}},activated(){this.dataForm.prodId=this.$route.query.prodId,this.getDataList()},methods:{getDataList(){this.getTagList(),this.getCategoryList().then(()=>{this.dataForm.prodId?this.$http({url:this.$http.adornUrl("/prod/prod/info/"+this.dataForm.prodId),method:"get",params:this.$http.adornParams()}).then(({data:t})=>{this.dataForm=t,this.dataForm.deliveryMode=JSON.parse(t.deliveryMode),this.$refs.skuTag.init(t.skuList),this.$refs.skuTable.init(),this.category.selected=Object(i["c"])(this.category.list,this.dataForm.categoryId,"categoryId","children").reverse(),this.dataForm.tagList=t.tagList}):this.$nextTick(()=>{this.$refs["dataForm"].resetFields(),this.$refs.skuTag.init(),this.dataForm.pic="",this.dataForm.imgs=""})})},getCategoryList(){return this.$http({url:this.$http.adornUrl("/prod/category/listCategory"),method:"get",params:this.$http.adornParams()}).then(({data:t})=>{this.category.list=Object(i["e"])(t,"categoryId","parentId")})},handleCategoryChange(t){this.dataForm.categoryId=t[t.length-1]},dataFormSubmit:Object(d["a"])((function(){this.$refs["dataForm"].validate(t=>{if(!t)return;if(!this.dataForm.imgs)return void this.errorMsg("请选择图片上传");if(!this.dataForm.deliveryMode)return void this.errorMsg("请选择配送方式");if(this.dataForm.deliveryMode.hasShopDelivery&&!this.dataForm.deliveryTemplateId)return void this.errorMsg("请选择运费模板");let e=Object.assign({},this.dataForm);this.paramSetPriceAndStocks(e),e.deliveryMode=void 0,e.deliveryModeVo=this.dataForm.deliveryMode,e.pic=this.dataForm.imgs.split(",")[0],this.$http({url:this.$http.adornUrl("/prod/prod"),method:e.prodId?"put":"post",data:this.$http.adornData(e)}).then(({data:t})=>{this.$message({message:"操作成功",type:"success",duration:1500,onClose:()=>{this.visible=!1,this.$store.commit("common/removeMainActiveTab"),this.$router.push({name:"prod-prodList"}),this.$emit("refreshDataList")}})})})})),paramSetPriceAndStocks(t){t.totalStocks=0,t.price=0,t.oriPrice=0;for(let e=0;e<t.skuList.length;e++){const a=t.skuList[e];1===a.status&&(0===t.price&&(t.price=a.price?Number.parseFloat(a.price):0),t.price=Math.min(t.price,a.price),t.price===a.price&&(t.oriPrice=a.oriPrice?Number.parseFloat(a.oriPrice):0),t.totalStocks+=a.stocks?Number.parseInt(a.stocks):0)}1===t.skuList.length&&(t.skuList[0].prodName=this.dataForm.prodName)},skuTagChangeSkuHandler(t){const e=this.dataForm.prodName;t.forEach(t=>{if(t.properties){t.skuName="";let a=t.properties.split(";");for(const e in a)t.skuName+=a[e].split(":")[1]+" ";t.prodName=e+" "+t.skuName}}),this.dataForm.skuList=t},errorMsg(t){this.$message({message:t,type:"error",duration:1500})},getTagList(){this.$http({url:this.$http.adornUrl("/prod/prodTag/listTagList"),method:"get",params:this.$http.adornParams()}).then(({data:t})=>{this.tags=t})}}},m=c,h=a("2877"),g=Object(h["a"])(m,s,r,!1,null,null,null);e["default"]=g.exports},9279:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-prod-sku-table"},[a("el-form-item",[a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.value,border:"","span-method":t.tableSpanMethod}},[t._l(t.tableLeftTitles,(function(e,s){return a("el-table-column",{key:s,attrs:{label:e},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.properties.split(";")[s].split(":")[1])+" ")]}}],null,!0)})})),t.tableLeftTitles.length?a("el-table-column",{attrs:{prop:"pic",label:"sku图片",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("pic-upload",{model:{value:e.row.pic,callback:function(a){t.$set(e.row,"pic",a)},expression:"scope.row.pic"}})]}}],null,!1,1005777877)}):t._e(),t.tableLeftTitles.length?a("el-table-column",{attrs:{prop:"prodName",label:"商品名称",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{type:"textarea",disabled:!e.row.status},model:{value:e.row.prodName,callback:function(a){t.$set(e.row,"prodName",a)},expression:"scope.row.prodName"}})]}}],null,!1,1047629452)}):t._e(),a("el-table-column",{attrs:{prop:"price",label:"销售价",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{attrs:{size:"small","controls-position":"right",precision:2,max:1e9,min:.01,disabled:!e.row.status},model:{value:e.row.price,callback:function(a){t.$set(e.row,"price",a)},expression:"scope.row.price"}})]}}])}),a("el-table-column",{attrs:{prop:"oriPrice",label:"市场价",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{attrs:{size:"small","controls-position":"right",precision:2,max:1e9,min:.01,disabled:!e.row.status},model:{value:e.row.oriPrice,callback:function(a){t.$set(e.row,"oriPrice",a)},expression:"scope.row.oriPrice"}})]}}])}),a("el-table-column",{attrs:{prop:"stocks",label:"库存",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{attrs:{size:"small",min:0,"controls-position":"right",type:"number",disabled:!e.row.status},model:{value:e.row.stocks,callback:function(a){t.$set(e.row,"stocks",a)},expression:"scope.row.stocks"}})]}}])}),a("el-table-column",{attrs:{prop:"weight",label:"商品重量(kg)",width:"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{attrs:{precision:2,min:0,"controls-position":"right",disabled:!e.row.status},model:{value:e.row.weight,callback:function(a){t.$set(e.row,"weight",a)},expression:"scope.row.weight"}})]}}])}),a("el-table-column",{attrs:{prop:"volume",label:"商品体积(m³)",width:"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{attrs:{precision:2,min:0,"controls-position":"right",disabled:!e.row.status},model:{value:e.row.volume,callback:function(a){t.$set(e.row,"volume",a)},expression:"scope.row.volume"}})]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.changeSkuStatus(""+e.$index)}}},[t._v("禁用")]):a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.changeSkuStatus(""+e.$index)}}},[t._v("启用")])]}}])})],2)],1)],1)},r=[],i=a("cf95"),o={data(){return{dbSpecs:[],dbSpecValues:[],specs:[],initing:!1}},components:{PicUpload:i["a"]},props:{value:{default:[],type:Array},prodName:{default:""}},watch:{prodName:function(){this.skuAddProdName()}},created:function(){this.$http({url:this.$http.adornUrl("/prod/spec/list"),method:"get",params:this.$http.adornParams()}).then(({data:t})=>{this.dbSpecs=t})},computed:{tableLeftTitles(){let t=[];for(let e=0;e<this.skuTags.length;e++){const a=this.skuTags[e];t.push(a.tagName)}return t},skuTags:{get(){return this.$store.state.prod.skuTags}},defalutSku(){return this.$store.state.prod.defalutSku}},methods:{init(){this.initing=!0},getTableSpecData(){return this.value},tableSpanMethod({row:t,column:e,rowIndex:a,columnIndex:s}){},changeSkuStatus(t){this.value[t].status=this.value[t].status?0:1},skuAddProdName(){if(this.initing)return;let t=[];for(let e=0;e<this.value.length;e++){const a=Object.assign({},this.value[e]);if(!a.properties)return;a.skuName="";let s=a.properties.split(";");for(const t in s)a.skuName+=s[t].split(":")[1]+" ";a.prodName=this.prodName+" "+a.skuName,t.push(a)}this.$emit("input",t)}}},n=o,l=(a("8a6c"),a("2877")),u=Object(l["a"])(n,s,r,!1,null,null,null);e["default"]=u.exports},"94ed":function(t,e,a){"use strict";a("55ac")},"9c7a":function(t,e,a){},bcf3:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-upload",{attrs:{action:t.$http.adornUrl("/admin/file/upload/element"),headers:{Authorization:t.$cookie.get("Authorization")},"list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,"on-success":t.handleUploadSuccess,"file-list":t.imageList,"before-upload":t.beforeAvatarUpload}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},r=[],i={data(){return{dialogImageUrl:"",dialogVisible:!1,resourcesUrl:"http://rrip0d5so.bkt.clouddn.com/"}},props:{mprodImg:{default:"",type:String}},computed:{imageList(){let t=[];if(this.mprodImg){let e=this.mprodImg.split(",");for(let a=0;a<e.length;a++)t.push({url:this.resourcesUrl+e[a],response:e[a]})}return this.$emit("input",this.mprodImg),t}},methods:{handleUploadSuccess(t,e,a){let s=a.map(t=>t.response.data).join(",");this.$emit("input",s)},beforeAvatarUpload(t){const e="image/jpeg"===t.type||"image/png"===t.type||"image/gif"===t.type||"image/jpg"===t.type;e||this.$message.error("上传图片只能是jpeg/jpg/png/gif 格式!");const a=t.size/1024/1024<2;return a||this.$message.error("上传图片大小不能超过 2MB!"),a&&e},handleRemove(t,e){let a=e.map(t=>t.response).join(",");this.$emit("input",a)},handlePictureCardPreview(t){this.dialogImageUrl=t.url,this.dialogVisible=!0}}},o=i,n=a("2877"),l=Object(n["a"])(o,s,r,!1,null,null,null);e["a"]=l.exports},cf95:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-upload",{staticClass:"pic-uploader-component",attrs:{action:t.$http.adornUrl("/admin/file/upload/element"),headers:{Authorization:t.$cookie.get("Authorization")},"show-file-list":!1,"on-success":t.handleUploadSuccess,"before-upload":t.beforeAvatarUpload}},[t.imgUrl?a("img",{staticClass:"pic",attrs:{src:t.resourcesUrl+t.imgUrl}}):a("i",{staticClass:"el-icon-plus pic-uploader-icon"})])],1)},r=[],i={data(){return{resourcesUrl:"http://rrip0d5so.bkt.clouddn.com/"}},props:{imgUrl:{default:"",type:String}},methods:{handleUploadSuccess(t,e,a){this.imgUrl=t.data,this.$emit("input",e.response)},beforeAvatarUpload(t){const e=t.size/1024/1024<2,a="image/jpeg"===t.type||"image/png"===t.type||"image/gif"===t.type||"image/jpg"===t.type;return a||this.$message.error("上传图片只能是jpeg/jpg/png/gif 格式!"),e||this.$message.error("上传图片大小不能超过 2MB!"),e&&a}}},o=i,n=(a("94ed"),a("2877")),l=Object(n["a"])(o,s,r,!1,null,null,null);e["a"]=l.exports},d0bd:function(t,e,a){},e5b3:function(t,e,a){},ec6f:function(t,e,a){"use strict";a("e5b3")}}]);