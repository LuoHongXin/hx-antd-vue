(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dab50"],{"6d6b":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("myTagInput")],1)},l=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("title-detail",{attrs:{title:"标签输入框",detail:"可输入新增标签，并选择标签"}}),e("h3",{staticClass:"fun-title"},[t._v("代码演示")]),e("funTitleDetail",{attrs:{title:"基本用法",detail:""}}),e("com-show",[e("y-tag-input",{attrs:{data:[{label:"CNware",value:"1"}]},on:{inputNewTag:t.inputNewTag},model:{value:t.selectTag,callback:function(a){t.selectTag=a},expression:"selectTag"}}),e("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.selectTag))])],1),e("pre",{staticClass:"line-numbers"},[t._v("      "),e("code",{staticClass:"language-html",domProps:{textContent:t._s("<y-tag-input v-model='selectTag' @inputNewTag='inputNewTag' :data='[{ label: 'CNware', value: '1' }]'></y-tag-input>")}},[t._v("\n      ")]),t._v("\n  ")]),t._m(0),e("api-table",{attrs:{data:t.tableData}})],1)},u=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("pre",{staticClass:"line-numbers"},[t._v("      "),e("code",{staticClass:"language-javascript"},[t._v("\n          export default {\n              data() {\n                  return {\n                  selectTag: [],\n                  };\n              },\n              methods: {\n                  inputNewTag(val) {\n                  console.log('%c%s', 'color:blue', val);\n                  },\n              },\n          };\n      ")]),t._v("\n  ")])}],i={name:"myTagInput",data:function(){return{selectTag:[],tableData:[{params:"data",explain:'初始标签数据，格式：[{label: "CNware",value: "1"}]',type:"Array",default:"[]"},{params:"v-model",explain:"选中的标签value值",type:"Array",default:"[]"},{params:"canAdd",explain:"是否支持可以新增",type:"Boolean",default:"true"},{params:"themeColor",explain:"主题颜色",type:"string",default:"red"},{params:"inputNewTag",explain:"新增标签回调函数",type:"Function"}]}},methods:{inputNewTag:function(t){console.log("%c%s","color:blue",t)}}},r=i,c=e("2877"),p=Object(c["a"])(r,s,u,!1,null,null,null),o=p.exports,d={name:"myinput",components:{myTagInput:o}},g=d,m=Object(c["a"])(g,n,l,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0dab50.738105e4.js.map