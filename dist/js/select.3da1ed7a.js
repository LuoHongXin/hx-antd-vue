(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["select"],{fbf1:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-detail",{attrs:{title:"注意",detail:"Select选择器checkbox模式下所有api 事件都不同， 使用请切换checkboxSelect选择器tag 查看api"}}),a("a-tabs",{attrs:{type:"card"}},[a("a-tab-pane",{key:"1",attrs:{tab:"Select选择器"}},[a("NormalSelect"),a("api-table",{attrs:{data:e.tableData,title:"Select API"}}),a("api-table",{attrs:{data:e.tableDataFn,title:"Select 事件"}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"checkboxSelect选择器"}},[a("CheckboxSelect")],1),a("a-tab-pane",{key:"3",attrs:{tab:"nameSelect具名选择器"}},[a("NameSelect")],1),a("a-tab-pane",{key:"4",attrs:{tab:"SearchSelect"}},[a("SearchSelect")],1),a("a-tab-pane",{key:"5",attrs:{tab:"InfiniteSelect大数据下拉框"}},[a("InfiniteSelect")],1)],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-detail",{attrs:{title:"Select选择器",detail:"从多个选项中选择一个或多个选项，并呈现选择结果。"}}),a("h3",{staticClass:"fun-title"},[e._v("代码演示")]),a("funTitleDetail",{attrs:{title:"常规",detail:"注意如果你遇到菜单滚动定位问题，尝试给父元素设置position: relative"}}),a("com-show",[a("div",{staticStyle:{position:"relative"}},[a("y-select",{attrs:{options:e.options,disabled:""}}),a("br"),a("br"),a("div",[e._v("不使用v-model")]),a("y-select",{attrs:{defaultValue:"jack"}},[a("y-select-option",{attrs:{value:"jack"}},[e._v(" Jack ")]),a("y-select-option",{attrs:{value:"lucy"}},[e._v(" Lucy ")])],1),a("br"),a("br"),a("y-select",{attrs:{value:e.value1}},[a("y-select-option",{attrs:{value:"jack"}},[e._v(" Jack ")]),a("y-select-option",{attrs:{value:"lucy"}},[e._v(" Lucy ")])],1),a("br"),a("br"),a("div",[e._v("使用v-model")]),a("y-select",{model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},[a("y-select-option",{attrs:{value:"jack"}},[e._v(" Jack ")]),a("y-select-option",{attrs:{value:"lucy"}},[e._v(" Lucy ")]),a("y-select-option",{attrs:{value:"disabled",disabled:""}},[e._v(" Disabled ")])],1),a("br"),a("br"),a("y-select",{attrs:{mode:"multiple",options:e.options}})],1)]),a("pre",{staticClass:"line-numbers"},[e._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:e._s('<y-select :options="options" disabled />\n      <br /><br />\n      <div>不使用v-model</div>\n      <y-select defaultValue="jack">\n        <y-select-option value="jack">\n          Jack\n        </y-select-option>\n        <y-select-option value="lucy">\n          Lucy\n        </y-select-option>\n      </y-select>\n      <br /><br />\n      <y-select :value="value1">\n        <y-select-option value="jack">\n          Jack\n        </y-select-option>\n        <y-select-option value="lucy">\n          Lucy\n        </y-select-option>\n      </y-select>\n      <br /><br />\n      <div>使用v-model</div>\n      <y-select v-model="value1">\n        <y-select-option value="jack">\n          Jack\n        </y-select-option>\n        <y-select-option value="lucy">\n          Lucy\n        </y-select-option>\n        <y-select-option value="disabled" disabled>\n          Disabled\n        </y-select-option>\n      </y-select>\n      <br /><br />\n      <y-select mode="multiple" :options="options"></y-select>\n      </div>')}}),e._v("\n  ")]),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",{staticClass:"line-numbers"},[e._v("    "),a("code",{staticClass:"language-javascript"},[e._v("\n      export default {\n          data() {\n            return {\n              value1: '',\n              options: [\n                {\n                  value: 'jack',\n                  disabled: true,\n                  label: 'jack1jack1jack1jack1jack1jack1',\n                },\n                {\n                  value: 'jack1',\n                  label: 'jack1',\n                },\n                {\n                  value: 'jack2',\n                  label: 'jack2',\n                },\n                {\n                  value: 'jack3',\n                  label: 'jack3',\n                },\n              ],\n            };\n          },\n          watch: {\n            value1(value1) {\n              console.log(value1, 'value1');\n            },\n          },\n      };\n    ")]),e._v("\n  ")])}],o={name:"NormalSelect",data:function(){return{options:[{value:"jack",disabled:!0,label:"jack1jack1jack1jack1jack1jack1"},{value:"jack1",label:"jack1"},{value:"jack2",label:"jack2"},{value:"jack3",label:"jack3"}],value1:""}},watch:{value1:function(e){console.log(e,"value1")}}},c=o,p=a("2877"),r=Object(p["a"])(c,s,i,!1,null,null,null),u=r.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-detail",{attrs:{title:"Select选择器",detail:"从多个选项中选择一个或多个选项，并呈现选择结果。"}}),a("h3",{staticClass:"fun-title"},[e._v("代码演示")]),a("funTitleDetail",{attrs:{title:"常规",detail:"注意如果你遇到菜单滚动定位问题，尝试给父元素设置position: relative"}}),a("com-show",[a("div",{staticStyle:{position:"relative"}},[a("y-select",{attrs:{checkbox:"",options:e.options},on:{select:e.select},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)]),a("pre",{staticClass:"line-numbers"},[e._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:e._s('<y-select checkbox :options="options" v-model="value1"> </y-select>')}}),e._v("\n  ")]),e._m(0),a("api-table",{attrs:{data:e.tableData,title:"checkboxSelect API"}}),a("api-table",{attrs:{data:e.tableDataFn,title:"checkboxSelect 事件"}})],1)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",{staticClass:"line-numbers"},[e._v("    "),a("code",{staticClass:"language-javascript"},[e._v("\n      export default {\n          data() {\n            return {\n              value1: '',\n               options: [\n                {\n                  value: '1',\n                  disabled: true,\n                  scopedSlots: {\n                    title: 'title',\n                  },\n                  label: 'jack',\n                },\n                {\n                  value: '2',\n                  label: 'jack1',\n                  scopedSlots: {\n                    title: 'title',\n                  },\n                },\n                {\n                  value: '3',\n                  label: 'jack2',\n                  scopedSlots: {\n                    title: 'title',\n                  },\n                },\n                {\n                  value: '4',\n                  label: 'jack3',\n                  scopedSlots: {\n                    title: 'title',\n                  },\n                },\n              ],\n            };\n          },\n          watch: {\n            value1(value1) {\n              console.log(value1, 'value1');\n            },\n          },\n      };\n    ")]),e._v("\n  ")])}],m={name:"checkboxSelect",data:function(){return{options:[{value:"1",disabled:!0,scopedSlots:{title:"jack"},label:"jack"},{value:"2",label:"jack1",scopedSlots:{title:"title"}},{value:"3",label:"jack2",scopedSlots:{title:"title"}},{value:"4",label:"jack3",scopedSlots:{title:"title"}}],value1:"",tableData:[{params:"autoWidth",explain:"默认宽度, 父盒子撑开",type:"boolean",default:"false"},{params:"widthSize",explain:"尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种",type:"string",default:"单选s 多选xl"},{params:"tooltip",explain:'是否显示tooltip，只有在设置options构造数据源时生效(数据源需要设置scopedSlots: { title: "title" })',type:"boolean",default:"true"},{params:"placement",explain:"显示tooltip时候的方向（参考y-tooltip）",type:"string",default:"right"},{params:"getPopupContainer",explain:"默认渲染父节点上（parentNode），可修改渲染body上",type:"Function(triggerNode)",default:"triggerNode => triggerNode.parentNode || document.body（防止出问题加个body）"},{params:"value(v-model)",explain:"数据判定",type:"string | string[ ] | number | number[ ] "},{params:"checkbox",explain:"显示 checkbox",type:"boolen",default:"false"},{params:"disabled",explain:"禁用",type:"boolen",default:"false"}],tableDataFn:[{params:"options",explain:"options 数据，目前不支持slot default selectOption 节点",type:"array"},{params:"check",explain:"点击复选框触发",type:"function(checkedKeys, e:{checked: bool, checkedNodes, node, event})"},{params:"load",explain:"节点加载完毕时触发",type:"function(loadedKeys, {event, node})"},{params:"rightClick",explain:"响应右键点击",type:"function({event, node})"},{params:"select",explain:"点击树节点触发",type:"function(selectedKeys, e:{selected: bool, selectedNodes, node, event})"}]}},methods:{select:function(e){console.log(e,"select")}}},y=m,x=Object(p["a"])(y,d,v,!1,null,null,null),b=x.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-detail",{attrs:{title:"具名选择器",detail:"结合业务封装的常见选择器。"}}),a("h3",{staticClass:"fun-title"},[e._v("代码演示")]),a("funTitleDetail",{attrs:{title:"常规",detail:""}}),a("com-show",[a("y-name-select",{attrs:{option:e.option,title:"主机池"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),a("div",[e._v("value1："+e._s(e.value1))])],1),a("pre",{staticClass:"line-numbers"},[e._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}}),e._v("\n      "),a("code",{staticClass:"language-javascript"},[e._v("\n      export default {\n          name: 'NameSelect',\n          data() {\n              return {\n                  value1: '',\n                  option: [\n                      {\n                          title: '主机池排序1',\n                          value: '1',\n                      },\n                      {\n                          title: '集群排序2',\n                          value: '2',\n                      },\n                      {\n                          title: '宿主机排序3',\n                          value: '3',\n                      },\n                      {\n                          title: '虚拟机排序4',\n                          value: '4',\n                      },\n                      {\n                          title: '主机池排序5主机池排序5',\n                          value: '5',\n                      },\n                  ],\n              }\n          }\n      }\n    ")]),e._v("\n  ")]),a("funTitleDetail",{attrs:{title:"名称可选",detail:""}}),a("com-show",[a("y-name-select",{attrs:{option:e.option,titleSelect:e.titleSelect},on:{titleChange:e.titleChange},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),a("div",[e._v("value2："+e._s(e.value2))]),a("div",[e._v("titleChangeVal："+e._s(e.titleChangeVal))])],1),a("pre",{staticClass:"line-numbers"},[e._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html2)}}),e._v("\n      "),a("code",{staticClass:"language-javascript"},[e._v("\n      export default {\n          name: 'NameSelect',\n          data() {\n              return {\n                  value2: '',\n                  titleChangeVal: '',\n                  titleSelect: [\n                      { title: '主机池', value: 'hostPool' },\n                      { title: '集群', value: 'cluster' },\n                      { title: '宿主机', value: 'host' },\n                  ],\n                  option: [\n                      {\n                          title: '主机池排序1',\n                          value: '1',\n                      },\n                      {\n                          title: '集群排序2',\n                          value: '2',\n                      },\n                      {\n                          title: '宿主机排序3',\n                          value: '3',\n                      },\n                      {\n                          title: '虚拟机排序4',\n                          value: '4',\n                      },\n                      {\n                          title: '主机池排序5主机池排序5',\n                          value: '5',\n                      },\n                  ],\n              }\n          },\n           methods: {\n              titleChange({ value }) {\n                  this.titleChangeVal = value;\n              },\n          },\n      }\n    ")]),e._v("\n  ")]),a("funTitleDetail",{attrs:{title:"搜索下拉",detail:""}}),a("com-show",[a("y-name-select",{attrs:{width:"200",maxNum:3,isSearch:!0,option:e.option,title:"可搜索下拉主机池"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),a("div",[e._v("value3："+e._s(e.value3))])],1),a("pre",{staticClass:"line-numbers"},[e._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html3)}}),e._v("\n      "),a("code",{staticClass:"language-javascript"},[e._v("\n      export default {\n          name: 'NameSelect',\n          data() {\n              return {\n                  value3: '',\n                  option: [\n                      {\n                          title: '主机池排序1',\n                          value: '1',\n                      },\n                      {\n                          title: '集群排序2',\n                          value: '2',\n                      },\n                      {\n                          title: '宿主机排序3',\n                          value: '3',\n                      },\n                      {\n                          title: '虚拟机排序4',\n                          value: '4',\n                      },\n                      {\n                          title: '主机池排序5主机池排序5',\n                          value: '5',\n                      },\n                  ],\n              }\n          },\n         \n      }\n    ")]),e._v("\n  ")]),a("api-table",{attrs:{data:e.tableData}})],1)},h=[],g={name:"NameSelect",data:function(){return{value1:"",value2:"",value3:"",titleChangeVal:"",titleSelect:[{title:"主机池",value:"hostPool"},{title:"集群",value:"cluster"},{title:"宿主机",value:"host"}],option:[{title:"主机池排序1",value:"1"},{title:"集群排序2",value:"2"},{title:"宿主机排序3",value:"3"},{title:"虚拟机排序4",value:"4"},{title:"主机池排序5主机池排序5",value:"5"}],html:'<y-name-select v-model="value1" :option="option" title="主机池" />\n      <div>value1：{{ value1 }}</div>',html2:'<y-name-select v-model="value2" @titleChange="titleChange" :option="option" :titleSelect="titleSelect" />\n      <div>value2：{{ value2 }}</div>\n      <div>titleChangeVal：{{ titleChangeVal }}</div>',html3:'<y-name-select v-model="value3" width="200" :maxNum="3" :isSearch="true" :option="option" title="可搜索下拉主机池" />\n      <div>value3：{{ value3 }}</div>',tableData:[{params:"width",explain:"下拉选择宽度",type:"Number | String",default:"146"},{params:"isSearch",explain:"是否为搜索选择",type:"boolen",default:"false"},{params:"maxAlarmTips",explain:"选择超出maxNum提示，其中可设置$为maxNum变量",type:"string",default:"一次最多能查看$台资源的性能数据"},{params:"titleSelect",explain:"搜索框前面的名称选项，默认显示数组第一个作为名称，有 titleSelect 将会替掉 title，格式为 [ { title:**, value:** } ]",type:"Array",default:""},{params:"title",explain:"搜索框前面的名称",type:"String",default:""},{params:"maxNum",explain:"可选择的最多数量，仅搜索选择情况下可用，默认非搜索下拉选择只可单选",type:"Number",default:"1"},{params:"selectValue",explain:"选中的数据，即v-model绑定的数据",type:"String | Number",default:"false"},{params:"option",explain:"下拉选择选项，[ { title:**, value:** } ]",type:"Array",default:""},{params:"change",explain:"下拉选择改变回调事件，形参为改变后的选项value",type:"function",default:""},{params:"titleChange",explain:"名称下拉选择改变回调事件",type:"function",default:""}]}},methods:{titleChange:function(e){var t=e.value;this.titleChangeVal=t}}},k=g,_=Object(p["a"])(k,f,h,!1,null,null,null),S=_.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-detail",{attrs:{title:"SearchSelect",detail:"结合业务封装的常见选择器。"}}),a("h3",{staticClass:"fun-title"},[e._v("代码演示")]),a("funTitleDetail",{attrs:{title:"常规",detail:""}}),a("com-show",[a("y-search-select",{attrs:{search:e.search,dropdownStyle:{width:"260px"},placeholder:"请选择账号",inputPlaceholder:"请输入账号名"},on:{"update:search":function(t){e.search=t}},model:{value:e.selectData,callback:function(t){e.selectData=t},expression:"selectData"}},[e._l(e.selectList,(function(t){return a("y-select-option",{key:t.key,attrs:{value:t.key,disabled:"active"!==t.status}},[a("y-tooltip",{staticStyle:{display:"flex","align-items":"center"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))]),a("y-svg-icon",{staticStyle:{"font-size":"20px"},attrs:{"icon-class":"eyes_visible"}}),a("span",{staticClass:"text"},[e._v(" "+e._s(t.name)+" ")]),a("y-tag",{attrs:{color:"active"===t.status?"green":"red"}},[e._v(" "+e._s("active"===t.status?"正常":"异常")+" ")])],1)],1)})),a("y-button",{staticStyle:{width:"100%"},attrs:{slot:"footer"},slot:"footer"},[e._v(" 账号管理 ")])],2),a("div",[e._v("selectData: "+e._s(e.selectData))]),a("div",[e._v("search: "+e._s(e.search))])],1),a("pre",{staticClass:"line-numbers"},[e._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}}),e._v("\n      "),a("code",{staticClass:"language-javascript"},[e._v("\n      export default {\n        data() {\n          return {\n            selectData: '',\n            search: '',\n            list: [\n              { key: 1, status: 'active', name: 'hhh' },\n              { key: 2, status: 'error', name: 'xxx' },\n            ],\n          };\n        },\n        computed: {\n          selectList() {\n            // 通过输入框中的数据来进行筛选\n            const search = this.search;\n            const list = this.list;\n            if (!search) return list;\n            return list.filter(o => o.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);\n          },\n        },\n      };\n    ")]),e._v("\n  ")]),a("api-table",{attrs:{data:e.tableData}}),a("api-table",{attrs:{data:e.tableDataApi}})],1)},j=[],D=(a("ac1f"),a("841c"),a("4de4"),a("b0c0"),{name:"SearchSelect",data:function(){return{selectData:"",search:"",list:[{key:1,status:"active",name:"hhh"},{key:2,status:"error",name:"xxx"}],html:'<y-search-select\n        v-model="selectData"\n        :search.sync="search"\n        :dropdownStyle="{ width: \'260px\' }"\n        placeholder="请选择账号"\n        inputPlaceholder="请输入账号名"\n      >\n        <y-select-option v-for="t in selectList" :key="t.key" :value="t.key" :disabled="t.status !== \'active\'">\n          <y-tooltip style="display:flex;align-items: center;">\n            <span slot="title">{{ t.name }}</span>\n            <y-svg-icon icon-class="eyes_visible" style="font-size: 20px;" />\n            <span class="text">\n              {{ t.name }}\n            </span>\n            <y-tag :color="t.status === \'active\' ? \'green\' : \'red\'">\n              {{ t.status === \'active\' ? \'正常\' : \'异常\' }}\n            </y-tag>\n          </y-tooltip>\n        </y-select-option>\n        <y-button style="width:100%;" slot="footer">\n          账号管理\n        </y-button>\n      </y-search-select>\n      <div>selectData: {{ selectData }}</div>\n      <div>search: {{ search }}</div>',tableData:[{params:"getPopupContainer",explain:"默认渲染父节点的父节点上（parentNode），可修改渲染body上",type:"Function(triggerNode)",default:"triggerNode => triggerNode.parentNode.parentNode || document.body（注意需要渲染在这个组件外）"},{params:"footer",explain:"如不需要底部设置false",type:"slot | Boolean",default:"true"},{params:"okText",explain:"默认底部按钮的文字, 自定义插槽则不生效",type:"string|number",default:"账号管理"},{params:"value(v-model)",type:"String",default:""},{params:"search",explain:"搜索框绑定的数据 search.sync",type:"string",default:""},{params:"placeholder",explain:"选择框默认文字",type:"string",default:""},{params:"inputPlaceholder",explain:"input选择框默认文字",type:"string",default:""},{params:"emptyScene",explain:"无状态显示见empty组件",type:"String | slot",default:""},{params:"widthSize",explain:"尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种",type:"string",default:"单选s 多选xl"},{params:"autoWidth",explain:"默认宽度, 父盒子撑开",type:"boolean",default:"false"},{params:"dropdownStyle",explain:"下拉菜单的 style 属性",type:"Object",default:""},{params:"dropdownClassName",explain:"下拉菜单的 className 属性",type:"String",default:""}],tableDataApi:[{params:"input-change",explain:"input的change回调",type:"Function(value))"},{params:"ok",explain:"默认底部按钮的点击事件",type:"Function()"}]}},computed:{selectList:function(){var e=this.search,t=this.list;return e?t.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>=0})):t}}}),w=D,N=Object(p["a"])(w,C,j,!1,null,null,null),P=N.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-detail",{attrs:{title:"SearchSelect",detail:"结合业务封装的常见选择器。"}}),a("h3",{staticClass:"fun-title"},[e._v("代码演示")]),a("funTitleDetail",{attrs:{title:"常规",detail:"api与下拉选择基本一直，但是仅支持 options 传入选项模式"}}),a("com-show",[a("div",[e._v("单选：")]),a("YInfiniteSelect",{key:"2222",attrs:{showSearch:"",options:e.options,placeholder:"请选择账号"},model:{value:e.selectData,callback:function(t){e.selectData=t},expression:"selectData"}}),a("br"),a("div",[e._v("多选：")]),a("YInfiniteSelect",{key:"1111",attrs:{showSearch:"",mode:"multiple",options:e.options,placeholder:"请选择账号"},model:{value:e.selectData2,callback:function(t){e.selectData2=t},expression:"selectData2"}}),a("div",[e._v("selectData: "+e._s(e.selectData))]),a("div",[e._v("selectData2: "+e._s(e.selectData2))])],1),a("pre",{staticClass:"line-numbers"},[e._v("      "),a("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}}),e._v("\n      "),a("code",{staticClass:"language-javascript",domProps:{textContent:e._s(e.js)}},[e._v("\n     \n    ")]),e._v("\n  ")])],1)},O=[],L={name:"SearchSelect",data:function(){return{options:[],selectData:"",selectData2:"",html:'<YInfiniteSelect key="2222" showSearch v-model="selectData" :options="options" placeholder="请选择账号" />\n      <YInfiniteSelect key="1111" showSearch v-model="selectData2" mode="multiple" :options="options" placeholder="请选择账号" />\n      <div>selectData: {{ selectData }}</div>\n      <div>selectData: {{ selectData2 }}</div>\n      <div>search: {{ search }}</div>',js:" export default {\n          data() {\n            return {\n              selectData: '',\n              selectData2: '',\n            };\n          },\n          created() {\n            const arr = [];\n            for (let index = 0; index < 10000; index++) {\n              arr.push({\n                value: 'value' + index,\n                label: 'label' + index,\n              });\n            }\n            this.options = arr;\n          },\n        };"}},created:function(){for(var e=this,t=[],a=0;a<1e4;a++)t.push({value:"value"+a,label:"label"+a});setTimeout((function(){e.options=t}),5e3)}},I=L,F=Object(p["a"])(I,V,O,!1,null,null,null),T=F.exports,A={name:"Select",components:{NormalSelect:u,CheckboxSelect:b,NameSelect:S,SearchSelect:P,InfiniteSelect:T},data:function(){return{tableData:[{params:"autoWidth",explain:"默认宽度, 父盒子撑开",type:"boolean",default:"false"},{params:"widthSize",explain:"尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种",type:"string",default:"单选s 多选xl"},{params:"tooltip",explain:"是否显示tooltip，只有在设置options构造数据源时生效",type:"boolean",default:"true"},{params:"placement",explain:"显示tooltip时候的方向（参考y-tooltip）",type:"string",default:"right"},{params:"checkbox",explain:"显示 checkbox",type:"boolen",default:"false"},{params:"getPopupContainer",explain:"默认渲染父节点上（parentNode），可修改渲染body上",type:"Function(triggerNode)",default:"triggerNode => triggerNode.parentNode || document.body（防止出问题加个body）"},{params:"suffixIcon",explain:"自定义的选择框后缀图标",type:"VNode | slot"},{params:"allowClear",explain:"支持清除",type:"boolean",default:"true"},{params:"removeIcon",explain:"自定义的多选框清除图标",type:"VNode | slot"},{params:"clearIcon",explain:"自定义的多选框清空图标",type:"VNode | slot"},{params:"menuItemSelectedIcon",explain:"自定义当前选中的条目图标",type:"VNode | slot"},{params:"value(v-model)",explain:"数据判定",type:"string | string[ ] | number | number[ ] "},{params:"defaultOpen",explain:"是否默认展开下拉菜单",type:"\tboolean",default:"false"},{params:"open",explain:"是否展开下拉菜单",type:"\tboolean"},{params:"options",explain:"options 数据，如果设置则不需要手动构造 selectOption 节点",type:"array"},{params:"optionsKey",explain:"设置选项的key，默认为value，若有同value，却需要根据对象其它属性作key可进行设置",type:"String",default:"value"},{params:"mode",explain:"支持多选（当设置 checkbox  时自动变为 多选）",type:"'default' | 'multiple' | 'tags' | 'combobox'",default:"default"},{params:"size",explain:"选择框大小，可选 large small",type:"string",default:"default"},{params:"showArrow",explain:"是否显示下拉小箭头",type:"boolean",default:"true"},{params:"showSearch",explain:"使单选模式可搜索",type:"boolean",default:"false"},{params:"placeholder",explain:"选择框默认文字",type:"\tstring|slot"},{params:"optionLabelProp",explain:"回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。",type:"string",default:"children （combobox 模式下为 value）"},{params:"optionFilterProp",explain:"搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索",type:"string",default:"value"},{params:"notFoundContent",explain:"当下拉列表为空时显示的内容",type:"string|slot",default:"Not Found"},{params:"maxTagTextLength",explain:"最大显示的 tag 文本长度",type:"number"},{params:"maxTagPlaceholder",explain:"隐藏 tag 时显示的内容",type:"slot/function(omittedValues)"},{params:"maxTagCount",explain:"最多显示多少个 tag",type:"number"},{params:"labelInValue",explain:"是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes} 的格式",type:"boolean",default:"false"},{params:"firstActiveValue",explain:"默认高亮的选项",type:"string|string[ ]"},{params:"filterOption",explain:"是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。",type:"boolean or function(inputValue, option)",default:"true"},{params:"dropdownMenuStyle",explain:"dropdown 菜单自定义样式",type:"object"},{params:"dropdownStyle",explain:"下拉菜单的 style 属性",type:"object"},{params:"dropdownClassName\t",explain:"下拉菜单的 className 属性",type:"string"},{params:"dropdownMatchSelectWidth\t",explain:"下拉菜单和选择器同宽",type:"boolean",default:"true"},{params:"defaultActiveFirstOption",explain:"是否默认高亮第一个选项。",type:"boolean",default:"false"},{params:"autoFocus",explain:"默认获取焦点",type:"boolean",default:"false"}],tableDataFn:[{params:"blur",explain:"失去焦点的时回调",type:"function"},{params:"change",explain:"选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数",type:"function(value, option:Option/Array<Option>)"},{params:"deselect",explain:"取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效",type:"function(value，option:Option)"},{params:"focus",explain:"获得焦点时回调",type:"function"},{params:"inputKeydown",explain:"键盘按下时回调",type:"function"},{params:"mouseenter",explain:"鼠标移入时回调",type:"function"},{params:"mouseleave",explain:"鼠标移出时回调",type:"function"},{params:"popupScroll",explain:"下拉列表滚动时的回调",type:"function"},{params:"search",explain:"文本框值变化时回调",type:"function(value: string)"},{params:"select",explain:"被选中时调用，参数为选中项的 value (或 key) 值",type:"function(value, option:Option)"},{params:"dropdownVisibleChange",explain:"展开下拉菜单的回调",type:"function(open)"}]}}},$=A,E=Object(p["a"])($,l,n,!1,null,null,null);t["default"]=E.exports}}]);