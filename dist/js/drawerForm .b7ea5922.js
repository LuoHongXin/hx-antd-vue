(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["drawerForm "],{"895d":function(e,t,l){"use strict";l.r(t);var r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"contanier"},[l("funTitleDetail",{attrs:{title:"抽屉表单",detail:"抽屉表单也是最常见的表单输入场景之一，在表单内容过多，弹窗表单不适合时，我们就采用抽屉表单，根据开发情况，我们可以调整 抽屉drawer 的宽度以及表单的 label-col 和 wrapperCol，建议为 3 : 21 ,最大为 5 : 19，最小为 2:22。"}}),l("com-show",{staticStyle:{padding:"16px 24px"}},[l("y-button",{attrs:{type:"primary"},on:{click:function(t){e.visible=!e.visible}}},[e._v(e._s(e.visible?"关闭":"打开")+"抽屉表单")]),l("y-drawer",{attrs:{title:"标题",visible:e.visible},on:{close:function(t){e.visible=!1}}},[l("div",{staticStyle:{"text-align":"right"},attrs:{slot:"footer"},slot:"footer"},[l("y-button",{on:{click:function(t){e.visible=!1}}},[e._v(" 取消 ")]),l("y-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" 确定 ")])],1),l("y-form-model",{ref:"ruleForm",attrs:{labelAlign:"left",model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[l("y-form-model-item",{ref:"name",attrs:{label:"输入框",prop:"name"}},[l("y-input",{on:{blur:function(){e.$refs.name.onFieldBlur()}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),l("y-form-model-item",{attrs:{label:"文本域",prop:"info"}},[l("y-textarea",{model:{value:e.form.info,callback:function(t){e.$set(e.form,"info",t)},expression:"form.info"}})],1),l("y-form-model-item",{attrs:{label:"数字输入框",prop:"num"}},[l("y-input-number",{attrs:{calculator:"",min:0,max:10},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1),l("y-form-model-item",{attrs:{label:"选择器",prop:"select"}},[l("y-select",{model:{value:e.form.select,callback:function(t){e.$set(e.form,"select",t)},expression:"form.select"}},[l("a-select-option",{attrs:{value:"jack"}},[e._v(" Jack ")]),l("a-select-option",{attrs:{value:"lucy"}},[e._v(" Lucy ")])],1)],1)],1)],1)],1)],1)},o=[],a={name:"drawerForm",data:function(){return{visible:!1,labelCol:{span:3},wrapperCol:{span:21},form:{name:"",info:"",num:0,select:"jack"},rules:{name:[{required:!0,message:"请输入输入框",trigger:"blur"},{min:3,max:5,message:"最短3个字符，最长5个字符",trigger:"blur"}]}}},methods:{onSubmit:function(){this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))}}},n=a,i=l("2877"),s=Object(i["a"])(n,r,o,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=drawerForm .b7ea5922.js.map