(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3ed5"],{"03ea":function(a,e,t){"use strict";t.r(e);var l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("h3",{staticClass:"fun-title"},[a._v("代码演示")]),t("com-show",[t("y-radio",{attrs:{"default-checked":!0}}),t("br"),t("br"),t("y-radio",{attrs:{disabled:""}}),t("br"),t("br"),t("y-radio",[a._v("单选项目")]),t("br"),t("br"),t("y-radio",{attrs:{disabled:"","default-checked":!0}},[a._v("单选项目")]),t("br"),t("br"),t("y-radio-group",{attrs:{options:a.plainOptions},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}})],1),t("pre",{staticClass:"line-numbers"},[a._v("    "),t("code",{staticClass:"language-html",domProps:{textContent:a._s(a.html)}},[a._v("\n    ")]),a._v("\n  ")]),a._m(0),t("api-table",{attrs:{data:a.tableData,title:"radio API"}}),t("api-table",{attrs:{data:a.tableDataGroup,title:"radio-group API"}}),t("api-table",{attrs:{data:a.tableDataGroupFn,title:"radio-group 事件"}})],1)},n=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("pre",{staticClass:"line-numbers"},[a._v("    "),t("code",{staticClass:"language-javascript"},[a._v("\n    const plainOptions = ['Apple', 'Pear', 'Orange'];\n      export default {\n        data() {\n          return {\n            plainOptions,\n            value: \"\"\n          }\n        }\n      };\n    ")]),a._v("\n  ")])}],r=["Apple","Pear","Orange"],i={name:"basis",data:function(){return{html:'<y-radio :default-checked="true"></y-radio>\n      <br><br>\n      <y-radio disabled></y-radio>\n      <br><br>\n      <y-radio>单选项目</y-radio>\n      <br><br>\n      <y-radio disabled :default-checked="true">单选项目</y-radio>\n      <br /><br />\n      <y-radio-group :options="plainOptions" default-value="Apple" />',plainOptions:r,value:"Apple",tableData:[{params:"autoFocus",explain:"自动获取焦点",type:"boolean",default:"false"},{params:"checked",explain:"指定当前是否选中",type:"boolean",default:"false"},{params:"defaultChecked",explain:"初始是否选中",type:"boolean",default:"false"},{params:"value",explain:"根据 value 进行比较，判断是否选中",type:"any"}],tableDataGroup:[{params:"defaultValue",explain:"默认选中的值",type:"any"},{params:"disabled",explain:"禁选所有子单选器",type:"boolean",default:"false"},{params:"name",explain:'RadioGroup 下所有 input[type="radio"] 的 name 属性',type:"string"},{params:"options",explain:"以配置形式设置子元素",type:"\tstring[] | Array<{ label: string value: string disabled?: boolean }>"},{params:"size",explain:"大小，只对按钮样式生效",type:"large | default | small",default:"default"},{params:"value(v-model)",explain:"用于设置当前选中的值\t",type:"any"},{params:"buttonStyle",explain:"RadioButton 的风格样式，目前有描边和填色两种风格",type:"outline | solid",default:"outline"}],tableDataGroupFn:[{params:"change",explain:"选项变化时的回调函数",type:"Function(e:Event)"}]}},watch:{value:function(a){console.log(a)}}},o=i,p=t("2877"),s=Object(p["a"])(o,l,n,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0a3ed5.d5945ee1.js.map