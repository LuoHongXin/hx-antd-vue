(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jsonViewer "],{e175:function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("title-detail",{attrs:{title:"JsonViewer JSON数据高亮",detail:"在显示请求体JSON数据时，高亮数据。"}}),n("h3",{staticClass:"fun-title"},[e._v("代码演示")]),n("funTitleDetail",{attrs:{title:"普通展示状态"}}),n("com-show",[n("y-json-viewer",{attrs:{value:e.jsonData}})],1),n("pre",{staticClass:"line-numbers"},[e._v("      "),n("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}},[e._v("\n      ")]),e._v("\n  ")]),n("funTitleDetail",{attrs:{title:"复制装箱排序状态"}}),n("com-show",[n("y-json-viewer",{attrs:{value:e.jsonData,"expand-depth":5,copyable:"",boxed:"",sort:""}})],1),n("pre",{staticClass:"line-numbers"},[e._v("      "),n("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html2)}},[e._v("\n      ")]),e._v("\n      "),n("code",{staticClass:"language-JavaScript",domProps:{textContent:e._s(e.js)}},[e._v("\n      ")]),e._v("\n  ")]),n("api-table",{attrs:{data:e.tableData}}),n("api-table",{attrs:{data:e.tableData2,title:"事件"}}),n("api-table",{attrs:{data:e.tableData3,title:"插槽"}})],1)},o=[],r=n("3a0d"),i={name:"myjsonViewer",components:{YJsonViewer:r["b"]},data:function(){return{jsonData:{total:25,limit:10,skip:0,links:{previous:void 0,next:function(){}},data:[{id:"5968fcad629fa84ab65a5247",firstname:"Ada",lastname:"Lovelace",awards:null,known:["mathematics","computing"],position:{lat:44.563836,lng:6.495139},description:'Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer,\n            chiefly known for her work on Charles Babbage\'s proposed mechanical general-purpose computer,\n            the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation,\n            and published the first algorithm intended to be carried out by such a machine.\n            As a result, she is sometimes regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.',bornAt:"1815-12-10T00:00:00.000Z",diedAt:"1852-11-27T00:00:00.000Z"},{id:"5968fcad629fa84ab65a5246",firstname:"Grace",lastname:"Hopper",awards:["Defense Distinguished Service Medal","Legion of Merit","Meritorious Service Medal","American Campaign Medal","World War II Victory Medal","National Defense Service Medal","Armed Forces Reserve Medal","Naval Reserve Medal","Presidential Medal of Freedom"],known:null,position:{lat:43.614624,lng:3.879995},description:"Grace Brewster Murray Hopper (née Murray; December 9, 1906 – January 1, 1992)\n            was an American computer scientist and United States Navy rear admiral.\n            One of the first programmers of the Harvard Mark I computer,\n            she was a pioneer of computer programming who invented one of the first compiler related tools.\n            She popularized the idea of machine-independent programming languages, which led to the development of COBOL,\n            an early high-level programming language still in use today.",bornAt:"1815-12-10T00:00:00.000Z",diedAt:"1852-11-27T00:00:00.000Z"}]},declareList2:["message.success(content, [duration], onClose)","message.error(content, [duration], onClose)","message.info(content, [duration], onClose)","message.warning(content, [duration], onClose)","message.warn(content, [duration], onClose)","message.loading(content, [duration], onClose)"],html:'<y-json-viewer :value="jsonData"></y-json-viewer>',html2:'<y-json-viewer :value="jsonData" :expand-depth="5" copyable boxed sort></y-json-viewer>',js:"import { YJsonViewer } from '~';\n      export default {\n        name: 'myjsonViewer',\n        components: {\n          YJsonViewer,\n        },\n        data() {\n          return {\n            jsonData: {\n              total: 25,\n              limit: 10,\n              skip: 0,\n              links: {\n                previous: undefined,\n                next: function() {},\n              },\n              data: [\n                {\n                  id: '5968fcad629fa84ab65a5247',\n                  firstname: 'Ada',\n                  lastname: 'Lovelace',\n                  awards: null,\n                  known: ['mathematics', 'computing'],\n                  position: {\n                    lat: 44.563836,\n                    lng: 6.495139,\n                  },\n                  description: \"Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer,\n                  chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer,\n                  the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation,\n                  and published the first algorithm intended to be carried out by such a machine.\n                  As a result, she is sometimes regarded as the first to recognise the full potential of a \"computing machine\" and the first computer programmer.\",\n                  bornAt: '1815-12-10T00:00:00.000Z',\n                  diedAt: '1852-11-27T00:00:00.000Z',\n                },\n                {\n                  id: '5968fcad629fa84ab65a5246',\n                  firstname: 'Grace',\n                  lastname: 'Hopper',\n                  awards: [\n                    'Defense Distinguished Service Medal',\n                    'Legion of Merit',\n                    'Meritorious Service Medal',\n                    'American Campaign Medal',\n                    'World War II Victory Medal',\n                    'National Defense Service Medal',\n                    'Armed Forces Reserve Medal',\n                    'Naval Reserve Medal',\n                    'Presidential Medal of Freedom',\n                  ],\n                  known: null,\n                  position: {\n                    lat: 43.614624,\n                    lng: 3.879995,\n                  },\n                  description: \"Grace Brewster Murray Hopper (née Murray; December 9, 1906 – January 1, 1992)\n                  was an American computer scientist and United States Navy rear admiral.\n                  One of the first programmers of the Harvard Mark I computer,\n                  she was a pioneer of computer programming who invented one of the first compiler related tools.\n                  She popularized the idea of machine-independent programming languages, which led to the development of COBOL,\n                  an early high-level programming language still in use today.\",\n                  bornAt: '1815-12-10T00:00:00.000Z',\n                  diedAt: '1852-11-27T00:00:00.000Z',\n                },\n              ],\n            },\n          };\n        },\n      };",tableData:[{params:"value（v-model）",explain:"JSON数据",type:"Object|Array|String",default:""},{params:"expand-depth",explain:"展开层级",type:"number",default:"1"},{params:"copyable",explain:"是否需要复制按钮，也可配置对象{copyText: 'copy', copiedText: 'copied', timeout: 2000}，或直接设Boolean值",type:"Object|Boolean",default:"false"},{params:"sort",explain:"是否显示排序字段",type:"Boolean",default:"false"},{params:"boxed",explain:"为组件添加一个花哨的“装箱”样式",type:"Boolean",default:"false"},{params:"theme",explain:"自定义主题css类名",type:"string",default:"jv-light"},{params:"expanded",explain:"默认情况下展开视图",type:"number",default:"1"},{params:"timeformat",explain:"自定义时间格式功能",type:"function",default:"time => time.toLocaleString()"},{params:"preview-mode",explain:"未展开时的预览模式",type:"Boolean",default:"false"},{params:"show-array-index",explain:"显示数组下标",type:"Boolean",default:"true"},{params:"show-double-quotes",explain:"是否带双引号",type:"Boolean",default:"false"}],tableData2:[{params:"copied",explain:"在文本复制后发出copyEvent",type:"function",default:"复制成功event"},{params:"keyclick",explain:"点击事件",type:"function",default:""}],tableData3:[{params:"copy",explain:"自定义复制按钮，局部作用域变量{copied: boolean}",type:"slot",default:""}]}}},s=i,l=n("2877"),d=Object(l["a"])(s,t,o,!1,null,"374d6dab",null);a["default"]=d.exports}}]);
//# sourceMappingURL=jsonViewer .8f5e9dd8.js.map