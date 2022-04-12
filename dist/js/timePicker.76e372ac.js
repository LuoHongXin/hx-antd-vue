(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["timePicker"],{"097b":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("title-detail",{attrs:{title:"TimePicker 时间选择框",detail:"输入或选择时间的控件。"}}),t("title-detail",{attrs:{title:"注意value 和 onChange 需要配合使用。也可以直接使用v-model。"}}),t("a-tabs",{attrs:{type:"card"}},[t("a-tab-pane",{key:"1",attrs:{tab:"12 小时制"}},[t("time-picker-one"),t("api-table",{attrs:{data:e.tableData,title:"API"}}),t("api-table",{attrs:{data:e.tableDataFn,title:"事件"}}),t("api-table",{attrs:{data:e.tableDataMethods,title:"方法"}})],1),t("a-tab-pane",{key:"2",attrs:{tab:"双向数据绑定"}},[t("time-picker-change"),t("api-table",{attrs:{data:e.tableData,title:"API"}}),t("api-table",{attrs:{data:e.tableDataFn,title:"事件"}}),t("api-table",{attrs:{data:e.tableDataMethods,title:"方法"}})],1),t("a-tab-pane",{key:"3",attrs:{tab:"双个选择"}},[t("range-time"),t("api-table",{attrs:{data:e.tableData1,title:"rangeTimePicker"}})],1)],1)],1)},l=[],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("com-show",[t("a-space",[t("y-time-picker",{attrs:{"use12-hours":""},on:{change:e.onChange}}),t("y-time-picker",{attrs:{"use12-hours":"",format:"h:mm:ss A"},on:{change:e.onChange}}),t("y-time-picker",{attrs:{"use12-hours":"",format:"h:mm a"},on:{change:e.onChange}})],1),t("title-detail",{attrs:{title:"12 小时制",detail:"12 小时制的时间选择器，默认的 format 为 h:mm:ss a。"}}),t("pre",{staticClass:"line-numbers"},[e._v("      "),t("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}},[e._v("\n      ")]),e._v("\n  ")]),t("pre",{staticClass:"line-numbers"},[e._v("      "),t("code",{staticClass:"language-javascript"},[e._v("\n        export default {\n          methods: {\n            onChange(time, timeString) {\n              console.log(time, timeString);\n            },\n          },\n        };\n      ")]),e._v("\n  ")])],1)},s=[],p={name:"timePickerOne",data:function(){return{html:'<template>\n        <div>\n          <y-time-picker use12-hours @change="onChange" />\n          <y-time-picker use12-hours format="h:mm:ss A" @change="onChange" />\n          <y-time-picker use12-hours format="h:mm a" @change="onChange" />\n        </div>\n      </template>'}},methods:{onChange:function(e,a){console.log(e,a)}}},o=p,r=t("2877"),m=Object(r["a"])(o,i,s,!1,null,null,null),u=m.exports,c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("com-show",[t("div",[t("p",[e._v("use value and @change")]),t("y-time-picker",{attrs:{value:e.value},on:{change:e.onChange}}),t("br"),t("br"),t("p",[e._v("v-model")]),t("y-time-picker",{model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[t("template",{slot:"addon"},[t("y-button",{attrs:{type:"link"},on:{click:e.onClick}},[e._v("此刻")])],1)],2),t("br"),t("br"),t("p",[e._v("Do not change")]),t("y-time-picker",{attrs:{value:e.value2,disabled:""}}),t("br"),t("br"),t("y-time-picker",{attrs:{value:e.value2}})],1),t("pre",{staticClass:"line-numbers"},[e._v("      "),t("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}},[e._v("\n      ")]),e._v("\n  ")]),t("pre",{staticClass:"line-numbers"},[e._v("      "),t("code",{staticClass:"language-javascript"},[e._v("\n        import moment from 'moment';\n        export default {\n          data() {\n            return {\n              value: null,\n              value2: moment(),\n            };\n          },\n          methods: {\n            onChange(time) {\n              console.log(time);\n              this.value = time;\n            },\n            onClick() {\n              this.value = moment();\n            }\n          },\n        };\n      ")]),e._v("\n  ")])])},d=[],v=t("c1df"),b=t.n(v),h={name:"timePickerChange",data:function(){return{html:'<template>\n          <div>\n            <p>use value and @change</p>\n            <y-time-picker :value="value" @change="onChange" />\n            <br />\n            <br />\n            <p>v-model</p>\n            <y-time-picker v-model="value">\n              <template slot="addon">\n                <y-button type="link" @click="onClick">此刻</y-button>\n              </template>\n            </y-time-picker>\n            <br />\n            <br />\n            <p>Do not change</p>\n            <y-time-picker :value="value2" disabled />\n            <br />\n            <br />\n            <y-time-picker :value="value2" />\n          </div>\n        </template>',value:null,value2:b()()}},methods:{onChange:function(e){console.log(e),this.value=e},onClick:function(){this.value=b()()}}},f=h,g=Object(r["a"])(f,c,d,!1,null,null,null),y=g.exports,x=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("com-show",[t("div",[t("y-range-time-picker",{attrs:{disabled:""},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),t("br"),t("br"),t("y-range-time-picker",{on:{change:e.onChange},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),t("pre",{staticClass:"line-numbers"},[e._v("      "),t("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}},[e._v("\n      ")]),e._v("\n  ")]),t("pre",{staticClass:"line-numbers"},[e._v("      "),t("code",{staticClass:"language-javascript"},[e._v("\n        import moment from 'moment';\n        export default {\n          data() {\n            return {\n              value1: [moment(), null],\n            };\n          },\n          methods: {\n            onChange(time) {\n              console.log(time);\n              this.value = time;\n            },\n          },\n        };\n      ")]),e._v("\n  ")])])},k=[],C={name:"myRangeTimePicker",data:function(){return{html:'<template>\n          <div>\n            <y-range-time-picker disabled v-model="value1" />\n            <br />\n            <br />\n            <y-range-time-picker v-model="value1" @change="onChange" />\n          </div>\n        </template>',value1:[b()(),null]}},methods:{onChange:function(e){console.log(e),this.value=e}}},_=C,P=Object(r["a"])(_,x,k,!1,null,null,null),D=P.exports,w={name:"myTimePicker",components:{timePickerOne:u,timePickerChange:y,rangeTime:D},data:function(){return{tableData:[{params:"autoWidth",explain:"默认宽度, 父盒子撑开",type:"boolean",default:"false"},{params:"widthSize",explain:"尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种",type:"string",default:"m"},{params:"addon",explain:"选择框底部显示自定义的内容",type:"slot | slot-scope"},{params:"allowClear",explain:"是否展示清除按钮",type:"boolean",default:"true"},{params:"autoFocus",explain:"自动获取焦点",type:"boolean",default:"false"},{params:"clearText",explain:"清除按钮的提示文案",type:"string",default:"clear"},{params:"defaultOpenValue",explain:"当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值",type:"moment",default:"moment()"},{params:"defaultValue",explain:"默认时间",type:"moment",default:"无"},{params:"disabled",explain:"禁用全部操作",type:"boolean",default:"false"},{params:"disabledHours",explain:"禁止选择部分小时选项",type:"function()",default:"无"},{params:"disabledMinutes",explain:"禁止选择部分分钟选项",type:"function(selectedHour)",default:"无"},{params:"disabledSeconds",explain:"禁止选择部分秒选项",type:"function(selectedHour, selectedMinute)",default:"无"},{params:"format",explain:"展示的时间格式",type:"string",default:'"HH:mm:ss"\t'},{params:"getPopupContainer",explain:"定义浮层的容器，默认为 body 上新建 div",type:"function(trigger)"},{params:"hideDisabledOptions",explain:"隐藏禁止选择的选项",type:"boolean",default:"false"},{params:"hourStep",explain:"小时选项间隔",type:"number",default:"1"},{params:"inputReadOnly",explain:"设置输入框为只读（避免在移动设备上打开虚拟键盘）",type:"boolean",default:"false"},{params:"minuteStep",explain:"分钟选项间隔",type:"number",default:"1"},{params:"open(.sync)",explain:"面板是否打开",type:"boolean",default:"false"},{params:"placeholder",explain:"没有值的时候显示的内容",type:"string",default:'"请选择时间"'},{params:"popupClassName",explain:"弹出层类名",type:"string"},{params:"popupStyle",explain:"弹出层样式对象",type:"object"},{params:"secondStep",explain:"秒选项间隔",type:"number",default:"1"},{params:"suffixIcon",explain:"自定义的选择框后缀图标",type:"string | VNode | slot"},{params:"clearIcon",explain:"自定义的清除图标",type:"string | VNode | slot"},{params:"use12Hours",explain:"使用 12 小时制，为 true 时 format 默认为 h:mm:ss a",type:"boolean",default:"false"},{params:"value(v-model)",explain:"当前时间",type:"moment"},{params:"align",explain:"该值将合并到 placement 的配置中，设置参考 dom-align",type:"Object"},{params:"valueFormat",explain:"可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 moment 对象",type:"string，具体格式"}],tableDataFn:[{params:"change",explain:"时间发生变化的回调",type:"function(time: moment | string, timeString: string): void"},{params:"openChange",explain:"面板打开/关闭时的回调",type:"(open: boolean): void"}],tableDataMethods:[{params:"blur()",explain:"移除焦点"},{params:"focus()",explain:"获取焦点"}],tableData1:[{params:"autoWidth",explain:"默认宽度, 父盒子撑开",type:"boolean",default:"false"},{params:"widthSize",explain:"尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种",type:"string",default:"l"},{params:"valueArr(v-model)",explain:"当前时间",type:"[ ] |　moment"},{params:"disabled",explain:"禁用全部操作",type:"boolean",default:"false"},{params:"allowClear",explain:"是否展示清除按钮",type:"boolean",default:"true"},{params:"params",explain:"拥有所有参数见time-pickerAPI",type:"{ option1: {}, option2: {} }"},{params:"titles",explain:"没有值的时候显示的内容",type:'["", ""]'},{params:"suffixIcon",explain:"自定义的选择框后缀图标",type:"slot"},{params:"clearIcon",explain:"自定义的清除图标",type:"slot"},{params:"change",explain:"时间发生变化的回调",type:"function([time: moment, time: moment ])"}]}}},O=w,S=Object(r["a"])(O,n,l,!1,null,null,null);a["default"]=S.exports}}]);
//# sourceMappingURL=timePicker.76e372ac.js.map