(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3ca5338"],{"0643":function(e,n,t){},2517:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("inputNumber"),t("inputNumberTable")],1)},l=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("title-detail",{attrs:{title:"InputNumber 数字输入框",detail:""}}),t("h3",{staticClass:"fun-title"},[e._v("代码演示")]),t("title-detail",{attrs:{title:"数字输入框。",detail:""}}),t("com-show",[t("div",[t("y-input-number",{attrs:{id:"inputNumber",min:1,max:10},on:{change:e.onChange},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),e._v(" 当前值："+e._s(e.value)+" "),t("div",{staticStyle:{"margin-bottom":"24px"}}),t("p",[e._v("三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。")]),t("div",[t("y-input-number",{attrs:{size:"large",min:1,max:1e5,"default-value":3},on:{change:e.onChange}}),t("y-input-number",{attrs:{min:1,max:1e5,"default-value":3},on:{change:e.onChange}}),t("y-input-number",{attrs:{size:"small",min:1,max:1e5,"default-value":3},on:{change:e.onChange}})],1),t("div",[t("div",{staticStyle:{"margin-bottom":"24px"}}),t("p",[e._v("点击按钮切换可用状态。")]),t("y-input-number",{attrs:{min:1,max:10,disabled:e.disabled,"default-value":3}}),t("div",{staticStyle:{marginTop:"20px"}},[t("y-button",{attrs:{type:"primary"},on:{click:function(n){e.disabled=!e.disabled}}},[e._v(" Toggle disabled ")])],1)],1),t("div",{staticStyle:{"margin-bottom":"24px"}}),t("p",[e._v("和原生的数字输入框一样，value 的精度由 step 的小数位数决定。")]),t("y-input-number",{attrs:{min:0,max:10,step:.1},on:{change:e.onChange},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("div",{staticStyle:{"margin-bottom":"24px"}}),t("p",[e._v("计算器")]),t("y-input-number",{attrs:{size:"small",calculator:"",min:0,max:10},on:{change:e.onChange}}),t("div",{staticStyle:{"margin-bottom":"24px"}}),t("p",[e._v("step 小数位数。")]),t("y-input-number",{attrs:{disabled:"",calculator:"",min:0,max:10,step:.1},on:{change:e.onChange}})],1),t("pre",{staticClass:"line-numbers"},[e._v("      "),t("code",{staticClass:"language-html",domProps:{textContent:e._s('<div>\n        <y-input-number id="inputNumber" v-model="value" :min="1" :max="10" @change="onChange" />\n        当前值：{{ value }}\n      </div>\n      <div style="margin-bottom:24px" />\n      <p>三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。</p>\n      <div>\n        <y-input-number size="large" :min="1" :max="100000" :default-value="3" @change="onChange" />\n        <y-input-number :min="1" :max="100000" :default-value="3" @change="onChange" />\n        <y-input-number size="small" :min="1" :max="100000" :default-value="3" @change="onChange" />\n      </div>\n      <div style="margin-bottom:24px" />\n      <p >点击按钮切换可用状态。</p>\n      <y-input-number :min="1" :max="10" :disabled="disabled" :default-value="3" />\n      <div style="marginTop:20px">\n          <y-button type="primary" @click="disabled = !disabled">\n            Toggle disabled\n          </y-button>\n        </div>\n      </div>\n      <div style="margin-bottom:24px" />\n      <p >和原生的数字输入框一样，value 的精度由 step 的小数位数决定。</p>\n      <y-input-number :min="0" :max="10" :step="0.1" @change="onChange" />\n      <div style="margin-bottom:24px" />\n      <p >计算器</p>\n      <y-input-number calculator :min="0" :max="10" @change="onChange" />\n      <div style="margin-bottom:24px" />\n      <p >step 小数位数。</p>\n      <y-input-number calculator :min="0" :max="10" :step="0.1" @change="onChange" />')}},[e._v("\n      ")]),e._v("\n    ")]),t("pre",{staticClass:"line-numbers"},[e._v("        "),t("code",{staticClass:"language-javascript"},[e._v("\n          "+e._s(e.code)+"\n        ")]),e._v("\n    ")])])],1)},u=[],p={name:"inputNumber",data:function(){return{value:3,code:"<script>\n            export default {\n              data() {\n                return {\n                  value: 3,\n                  disabled: true,\n                };\n              },\n              methods: {\n                onChange(value) {\n                  console.log('changed', value);\n                },\n              },\n            };\n          </ script>\n          <style scoped>\n          .ant-input-number {\n            margin-right: 10px;\n          }\n          </style>",disabled:!0}},methods:{onChange:function(e){console.log("changed",e)}}},s=p,o=(t("f5b2"),t("2877")),m=Object(o["a"])(s,i,u,!1,null,"e98ee9a8",null),r=m.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("api-table",{attrs:{data:e.tableDataInput,title:"InputNumber"}})],1)},c=[],b={name:"inputTable",data:function(){return{tableDataInput:[{params:"calculator",explain:"计算器模式",type:"boolean",default:"false"},{params:"autoWidth",explain:"默认宽度, 父盒子撑开",type:"boolean",default:"false"},{params:"widthSize",explain:"尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种",type:"string",default:"m"},{params:"type",explain:"图标类型。遵循图标的命名规范",type:"string",default:"-"},{params:"style",explain:"设置图标的样式，例如 fontSize 和 color",type:"string|slot",default:""},{params:"theme",explain:"图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标",type:0,default:"outlined"},{params:"spin",explain:"是否有旋转动画",type:"boolean",default:"false\t"},{params:"rotate",explain:"图标旋转角度（1.4.0 后新增，IE9 无效）",type:"number",default:""},{params:"component",explain:"控制如何渲染图标，通常是一个渲染根标签为 <svg> 的 Vue 组件，会使 type 属性失效",type:"ComponentType<CustomIconComponentProps>",default:""},{params:"twoToneColor",explain:"仅适用双色图标。设置双色图标的主要颜色",type:"string (十六进制颜色)\t",default:""}]}}},v=b,g=Object(o["a"])(v,d,c,!1,null,null,null),x=g.exports,y={name:"myInputNumber",components:{inputNumber:r,inputNumberTable:x}},h=y,f=Object(o["a"])(h,a,l,!1,null,null,null);n["default"]=f.exports},f5b2:function(e,n,t){"use strict";t("0643")}}]);
//# sourceMappingURL=chunk-d3ca5338.d0d0c3f9.js.map