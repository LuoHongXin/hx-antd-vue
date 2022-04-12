(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["divider "],{ae43:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-detail",{attrs:{title:"Divider 分割线",detail:"区隔内容的分割线。"}}),a("h3",{staticClass:"fun-title"},[t._v("代码演示")]),a("declareList",{attrs:{title:"通用场景",value:t.declareList}}),a("funTitleDetail",{attrs:{title:"垂直分隔",detail:"下面仅为例子，表格操作需使用 Button 按钮 组件的表格操作按钮"}}),a("com-show",[a("div",[t._v(" 新增 "),a("y-divider",{attrs:{type:"vertical"}}),a("a",{attrs:{href:"#"}},[t._v("删除")]),a("y-divider",{attrs:{type:"vertical"}}),a("a",{attrs:{href:"#"}},[t._v("修改")])],1)]),a("pre",{staticClass:"line-numbers"},[t._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:t._s(t.html)}},[t._v("\n      ")]),t._v("\n  ")]),a("funTitleDetail",{attrs:{title:"水平分割",detail:"默认为水平分割线，可在中间加入文字。"}}),a("com-show",[a("p",[t._v(" 在 ES6 中为我们新增了两个数据结构 WeakMap、WeakSet，就是为了解决内存泄漏的问题。 ")]),a("a-divider"),a("p",[t._v(" 它的键名所引用的对象都是弱引用，就是垃圾回收机制遍历的时候不考虑该引用。 ")]),a("a-divider",[t._v("加入的文字")]),a("p",[t._v(" 只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。 ")]),a("a-divider",{attrs:{dashed:""}}),a("p",[t._v(" 也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。 ")]),a("a-divider",{attrs:{orientation:"right"}},[t._v("加入的文字")])],1),a("pre",{staticClass:"line-numbers"},[t._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:t._s(t.html2)}},[t._v("\n      ")]),t._v("\n  ")]),a("api-table",{attrs:{data:t.tableData}})],1)},n=[],r={name:"Divider",data:function(){return{declareList:["对不同章节的文本段落进行分割","对行内文字/链接进行分割，例如按钮中的表格操作按钮就是利用了分割线。"],html:'<div>\n        新增\n        <y-divider type="vertical" />\n        <a href="#">删除</a>\n        <y-divider type="vertical" />\n        <a href="#">修改</a>\n      </div>',html2:'<p>\n        在 ES6 中为我们新增了两个数据结构 WeakMap、WeakSet，就是为了解决内存泄漏的问题。\n      </p>\n      <a-divider />\n      <p>\n        它的键名所引用的对象都是弱引用，就是垃圾回收机制遍历的时候不考虑该引用。\n      </p>\n      <a-divider>加入的文字</a-divider>\n      <p>\n        只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。\n      </p>\n      <a-divider dashed />\n      <p>\n        也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。\n      </p>\n      <a-divider orientation="right">加入的文字</a-divider>',tableData:[{params:"dashed",explain:"是否虚线",type:"Boolean",default:"false"},{params:"orientation",explain:"分割线标题的位置",type:"enum: left right",default:"center"},{params:"type",explain:"水平还是垂直类型",type:"enum: horizontal vertical",default:"horizontal"}]}}},d=r,l=a("2877"),s=Object(l["a"])(d,i,n,!1,null,"a2965354",null);e["default"]=s.exports}}]);
//# sourceMappingURL=divider .3835d626.js.map