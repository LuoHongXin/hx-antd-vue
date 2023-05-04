(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tree"],{"4a44":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("title-detail",{attrs:{title:"Tree 树形控件",detail:"体现父子层级关系的信息组织方式。"}}),n("h3",{staticClass:"fun-title"},[e._v("代码演示")]),n("declareList",{attrs:{title:"通用原则",value:e.declareList}}),n("tree1"),n("tree2"),n("tree3"),n("tree4"),n("tree6"),n("api-table",{attrs:{data:e.tableData}}),n("api-table",{attrs:{title:"事件",data:e.tableData2}}),n("api-table",{attrs:{title:"TreeNode props",detail:"结点描述数据对象，是 treeNodes 中的一项，TreeNode 使用相同的 API。",data:e.tableData3}}),n("api-table",{attrs:{title:"DirectoryTree props",data:e.tableData4}})],1)},l=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("funTitleDetail",{attrs:{title:"基本用法",detail:"最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。"}}),n("com-show",[n("y-tree",{attrs:{checkable:"","tree-data":e.treeData,"default-expanded-keys":["0-0-0","0-0-1"],"default-selected-keys":["0-0-0","0-0-1"],"default-checked-keys":["0-0-0","0-0-1"]},on:{select:e.onSelect,check:e.onCheck},scopedSlots:e._u([{key:"custom",fn:function(t){var a=t.title;return n("span",{staticStyle:{color:"#1890ff"}},[e._v(e._s(a))])}}])},[n("span",{staticStyle:{color:"#1890ff"},attrs:{slot:"title0010"},slot:"title0010"},[e._v("sss")])])],1),n("pre",{staticClass:"line-numbers"},[e._v("      "),n("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}},[e._v("\n      ")]),e._v("\n      "),n("code",{staticClass:"language-JavaScript",domProps:{textContent:e._s(e.js)}},[e._v("\n      ")]),e._v("\n  ")])],1)},s=[],c=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf123",key:"0-0-0-1",scopedSlots:{title:"custom"}}]},{title:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",slots:{title:"title0010"}}]}]}],r={name:"myTree1",data:function(){return{treeData:c,html:'<y-tree\n        checkable\n        :tree-data="treeData"\n        :default-expanded-keys="[\'0-0-0\', \'0-0-1\']"\n        :default-selected-keys="[\'0-0-0\', \'0-0-1\']"\n        :default-checked-keys="[\'0-0-0\', \'0-0-1\']"\n        @select="onSelect"\n        @check="onCheck"\n      >\n        <span slot="title0010" style="color: #1890ff">sss</span>\n        <span slot="custom" slot-scope="{ title }" style="color: #1890ff">{{ title }}</span>\n      </y-tree>',js:"\n      const treeData = [\n        {\n            title: 'parent 1',\n            key: '0-0',\n            children: [\n                {\n                    title: 'parent 1-0',\n                    key: '0-0-0',\n                    disabled: true,\n                    children: [\n                        { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },\n                        { title: 'leaf123', key: '0-0-0-1' },\n                    ],\n                },\n                {\n                    title: 'parent 1-1',\n                    key: '0-0-1',\n                    children: [{ key: '0-0-1-0', slots: { title: 'title0010' } }],\n                },\n            ],\n        },\n     ];\n      export default {\n          data() {\n            return {\n                treeData,\n            };\n          },\n          methods: {\n           onSelect(selectedKeys, info) {\n                console.log('selected', selectedKeys, info);\n            },\n            onCheck(checkedKeys, info) {\n                console.log('onCheck', checkedKeys, info);\n            },\n          },\n        };"}},methods:{onSelect:function(e,t){console.log("selected",e,t)},onCheck:function(e,t){console.log("onCheck",e,t)}}},i=r,d=n("2877"),y=Object(d["a"])(i,o,s,!1,null,null,null),p=y.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("funTitleDetail",{attrs:{title:"受控操作示例",detail:""}}),n("com-show",[n("y-tree",{attrs:{checkable:"","expanded-keys":e.expandedKeys,"auto-expand-parent":e.autoExpandParent,"selected-keys":e.selectedKeys,"tree-data":e.treeData},on:{expand:e.onExpand,select:e.onSelect},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}})],1),n("pre",{staticClass:"line-numbers"},[e._v("      "),n("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}},[e._v("\n      ")]),e._v("\n      "),n("code",{staticClass:"language-JavaScript",domProps:{textContent:e._s(e.js)}},[e._v("\n      ")]),e._v("\n  ")])],1)},f=[],k=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]},{title:"0-0-2",key:"0-0-2"}]},{title:"0-1",key:"0-1",children:[{title:"0-1-0-0",key:"0-1-0-0"},{title:"0-1-0-1",key:"0-1-0-1"},{title:"0-1-0-2",key:"0-1-0-2"}]},{title:"0-2",key:"0-2"}],h={name:"myTree2",data:function(){return{expandedKeys:["0-0-0","0-0-1"],autoExpandParent:!0,checkedKeys:["0-0-0"],selectedKeys:[],treeData:k,html:'<y-tree\n        v-model="checkedKeys"\n        checkable\n        :expanded-keys="expandedKeys"\n        :auto-expand-parent="autoExpandParent"\n        :selected-keys="selectedKeys"\n        :tree-data="treeData"\n        @expand="onExpand"\n        @select="onSelect"\n      />',js:"\n      const treeData = [\n            {\n                title: '0-0',\n                key: '0-0',\n                children: [\n                {\n                    title: '0-0-0',\n                    key: '0-0-0',\n                    children: [\n                        { title: '0-0-0-0', key: '0-0-0-0' },\n                        { title: '0-0-0-1', key: '0-0-0-1' },\n                        { title: '0-0-0-2', key: '0-0-0-2' },\n                    ],\n                },\n                {\n                    title: '0-0-1',\n                    key: '0-0-1',\n                    children: [\n                        { title: '0-0-1-0', key: '0-0-1-0' },\n                        { title: '0-0-1-1', key: '0-0-1-1' },\n                        { title: '0-0-1-2', key: '0-0-1-2' },\n                    ],\n                },\n                {\n                    title: '0-0-2',\n                    key: '0-0-2',\n                },\n                ],\n            },\n            {\n                title: '0-1',\n                key: '0-1',\n                children: [\n                    { title: '0-1-0-0', key: '0-1-0-0' },\n                    { title: '0-1-0-1', key: '0-1-0-1' },\n                    { title: '0-1-0-2', key: '0-1-0-2' },\n                ],\n            },\n            {\n                title: '0-2',\n                key: '0-2',\n            },\n        ];\n      export default {\n          data() {\n            return {\n                expandedKeys: ['0-0-0', '0-0-1'],\n                autoExpandParent: true,\n                checkedKeys: ['0-0-0'],\n                selectedKeys: [],\n                treeData,\n            };\n          },\n           watch: {\n                checkedKeys(val) {\n                    console.log('onCheck', val);\n                },\n            },\n          methods: {\n            onExpand(expandedKeys) {\n                console.log('onExpand', expandedKeys);\n                this.expandedKeys = expandedKeys;\n                this.autoExpandParent = false;\n            },\n            onCheck(checkedKeys) {\n                console.log('onCheck', checkedKeys);\n                this.checkedKeys = checkedKeys;\n            },\n            onSelect(selectedKeys, info) {\n                console.log('onSelect', info);\n                this.selectedKeys = selectedKeys;\n            },\n          },\n        };"}},watch:{checkedKeys:function(e){console.log("onCheck",e)}},methods:{onExpand:function(e){console.log("onExpand",e),this.expandedKeys=e,this.autoExpandParent=!1},onCheck:function(e){console.log("onCheck",e),this.checkedKeys=e},onSelect:function(e,t){console.log("onSelect",t),this.selectedKeys=e}}},m=h,x=Object(d["a"])(m,u,f,!1,null,null,null),b=x.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("funTitleDetail",{attrs:{title:"自定义图标",detail:"可以针对不同的节点定制图标。"}}),n("com-show",[n("y-tree",{attrs:{"tree-data":e.treeData,"show-icon":"","default-expand-all":"","default-selected-keys":["0-0-0"]},scopedSlots:e._u([{key:"custom",fn:function(e){var t=e.selected;return[n("a-icon",{attrs:{type:t?"frown":"frown-o"}})]}}])},[n("a-icon",{attrs:{slot:"switcherIcon",type:"down"},slot:"switcherIcon"}),n("a-icon",{attrs:{slot:"smile",type:"smile-o"},slot:"smile"}),n("a-icon",{attrs:{slot:"meh",type:"smile-o"},slot:"meh"})],1)],1),n("pre",{staticClass:"line-numbers"},[e._v("      "),n("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}},[e._v("\n      ")]),e._v("\n      "),n("code",{staticClass:"language-JavaScript",domProps:{textContent:e._s(e.js)}},[e._v("\n      ")]),e._v("\n  ")])],1)},g=[],w=[{title:"parent 1",key:"0-0",slots:{icon:"smile"},children:[{title:"leaf",key:"0-0-0",slots:{icon:"meh"}},{title:"leaf",key:"0-0-1",scopedSlots:{icon:"custom"}}]}],K={name:"myTree3",data:function(){return{treeData:w,html:'<y-tree :tree-data="treeData" show-icon default-expand-all :default-selected-keys="[\'0-0-0\']">\n        <a-icon slot="switcherIcon" type="down" />\n        <a-icon slot="smile" type="smile-o" />\n        <a-icon slot="meh" type="smile-o" />\n        <template slot="custom" slot-scope="{ selected }">\n          <a-icon :type="selected ? \'frown\' : \'frown-o\'" />\n        </template>\n      </y-tree>',js:"\n      const treeData = [\n        {\n          title: 'parent 1',\n          key: '0-0',\n          slots: {\n            icon: 'smile',\n          },\n          children: [\n            { title: 'leaf', key: '0-0-0', slots: { icon: 'meh' } },\n            { title: 'leaf', key: '0-0-1', scopedSlots: { icon: 'custom' } },\n          ],\n        },\n      ];\n      export default {\n          data() {\n            return {\n                treeData,\n            };\n          },\n          methods: {\n            onSelect(selectedKeys, info) {\n              console.log('selected', selectedKeys, info);\n            },\n            onCheck(checkedKeys, info) {\n              console.log('onCheck', checkedKeys, info);\n            },\n          },\n        };"}},methods:{onSelect:function(e,t){console.log("selected",e,t)},onCheck:function(e,t){console.log("onCheck",e,t)}}},_=K,C=Object(d["a"])(_,v,g,!1,null,null,null),S=C.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("funTitleDetail",{attrs:{title:"自定义图标",detail:"可以针对不同的节点定制图标。"}}),n("com-show",[n("div",{staticStyle:{"margin-bottom":"16px"}},[e._v(" 显示连接线: "),n("y-switch",{model:{value:e.showLine,callback:function(t){e.showLine=t},expression:"showLine"}}),n("br"),n("br"),e._v(" 显示图标: "),n("y-switch",{model:{value:e.showIcon,callback:function(t){e.showIcon=t},expression:"showIcon"}})],1),n("y-tree",{attrs:{"show-line":e.showLine,"show-icon":e.showIcon,"default-expanded-keys":["0-0-0","0-0-1","0-0-2"]},on:{select:e.onSelect}},[n("a-icon",{attrs:{slot:"icon",type:"carry-out"},slot:"icon"}),n("y-tree-node",{key:"0-0"},[n("a-icon",{attrs:{slot:"icon",type:"carry-out"},slot:"icon"}),n("span",{staticStyle:{color:"#1890ff"},attrs:{slot:"title"},slot:"title"},[e._v("parent 1")]),n("y-tree-node",{key:"0-0-0",attrs:{title:"parent 1-0"}},[n("a-icon",{attrs:{slot:"icon",type:"carry-out"},slot:"icon"}),n("y-tree-node",{key:"0-0-0-0",attrs:{title:"leaf"}},[n("a-icon",{attrs:{slot:"icon",type:"carry-out"},slot:"icon"})],1),n("y-tree-node",{key:"0-0-0-1",attrs:{title:"leaf"}},[n("a-icon",{attrs:{slot:"icon",type:"carry-out"},slot:"icon"})],1),n("y-tree-node",{key:"0-0-0-2",attrs:{title:"leaf"}},[n("a-icon",{attrs:{slot:"icon",type:"carry-out"},slot:"icon"})],1)],1),n("y-tree-node",{key:"0-0-1",attrs:{title:"parent 1-1"}},[n("a-icon",{attrs:{slot:"icon",type:"carry-out"},slot:"icon"}),n("y-tree-node",{key:"0-0-1-0",attrs:{title:"leaf"}},[n("a-icon",{attrs:{slot:"icon",type:"carry-out"},slot:"icon"})],1)],1),n("y-tree-node",{key:"0-0-2",attrs:{title:"parent 1-2"}},[n("a-icon",{attrs:{slot:"icon",type:"carry-out"},slot:"icon"}),n("y-tree-node",{key:"0-0-2-0",attrs:{title:"leaf"}},[n("a-icon",{attrs:{slot:"icon",type:"carry-out"},slot:"icon"})],1),n("y-tree-node",{key:"0-0-2-1",attrs:{title:"leaf"}},[n("a-icon",{attrs:{slot:"icon",type:"carry-out"},slot:"icon"}),n("a-icon",{attrs:{slot:"switcherIcon",type:"form"},slot:"switcherIcon"})],1)],1)],1)],1)],1),n("pre",{staticClass:"line-numbers"},[e._v("      "),n("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}},[e._v("\n      ")]),e._v("\n      "),n("code",{staticClass:"language-JavaScript",domProps:{textContent:e._s(e.js)}},[e._v("\n      ")]),e._v("\n  ")])],1)},E=[],j={name:"myTree4",data:function(){return{showLine:!0,showIcon:!1,html:'<div style="margin-bottom: 16px">\n        显示连接线: <y-switch v-model="showLine" />\n        <br />\n        <br />\n        显示图标: <y-switch v-model="showIcon" />\n      </div>\n      <y-tree :show-line="showLine" :show-icon="showIcon" :default-expanded-keys="[\'0-0-0\', \'0-0-1\', \'0-0-2\']" @select="onSelect">\n        <a-icon slot="icon" type="carry-out" />\n        <y-tree-node key="0-0">\n          <a-icon slot="icon" type="carry-out" />\n          <span slot="title" style="color: #1890ff">parent 1</span>\n          <y-tree-node key="0-0-0" title="parent 1-0">\n            <a-icon slot="icon" type="carry-out" />\n            <y-tree-node key="0-0-0-0" title="leaf">\n              <a-icon slot="icon" type="carry-out" />\n            </y-tree-node>\n            <y-tree-node key="0-0-0-1" title="leaf">\n              <a-icon slot="icon" type="carry-out" />\n            </y-tree-node>\n            <y-tree-node key="0-0-0-2" title="leaf">\n              <a-icon slot="icon" type="carry-out" />\n            </y-tree-node>\n          </y-tree-node>\n          <y-tree-node key="0-0-1" title="parent 1-1">\n            <a-icon slot="icon" type="carry-out" />\n            <y-tree-node key="0-0-1-0" title="leaf">\n              <a-icon slot="icon" type="carry-out" />\n            </y-tree-node>\n          </y-tree-node>\n          <y-tree-node key="0-0-2" title="parent 1-2">\n            <a-icon slot="icon" type="carry-out" />\n            <y-tree-node key="0-0-2-0" title="leaf">\n              <a-icon slot="icon" type="carry-out" />\n            </y-tree-node>\n            <y-tree-node key="0-0-2-1" title="leaf">\n              <a-icon slot="icon" type="carry-out" />\n              <a-icon slot="switcherIcon" type="form" />\n            </y-tree-node>\n          </y-tree-node>\n        </y-tree-node>\n      </y-tree>',js:"\n      export default {\n          data() {\n            return {\n                showLine: true,\n                showIcon: false,\n            };\n          },\n          methods: {\n            onSelect(selectedKeys, info) {\n              console.log('selected', selectedKeys, info);\n            },\n          },\n        };"}},methods:{onSelect:function(e,t){console.log("selected",e,t)}}},I=j,P=Object(d["a"])(I,D,E,!1,null,null,null),T=P.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("funTitleDetail",{attrs:{title:"自定义展开/折叠图标。",detail:"自定义展开/折叠图标。"}}),n("com-show",[n("y-tree",{attrs:{"show-line":"","default-expanded-keys":["0-0-0"]},on:{select:e.onSelect}},[n("a-icon",{attrs:{slot:"switcherIcon",type:"down"},slot:"switcherIcon"}),n("y-tree-node",{key:"0-0",attrs:{title:"parent 1"}},[n("y-tree-node",{key:"0-0-0",attrs:{title:"parent 1-0"}},[n("y-tree-node",{key:"0-0-0-0",attrs:{title:"leaf"}}),n("y-tree-node",{key:"0-0-0-1",attrs:{title:"leaf"}}),n("y-tree-node",{key:"0-0-0-2",attrs:{title:"leaf"}})],1),n("y-tree-node",{key:"0-0-1",attrs:{title:"parent 1-1"}},[n("y-tree-node",{key:"0-0-1-0",attrs:{title:"leaf"}})],1),n("y-tree-node",{key:"0-0-2",attrs:{title:"parent 1-2"}},[n("y-tree-node",{key:"0-0-2-0",attrs:{title:"leaf"}}),n("y-tree-node",{key:"0-0-2-1",attrs:{title:"leaf"}})],1)],1)],1)],1),n("pre",{staticClass:"line-numbers"},[e._v("      "),n("code",{staticClass:"language-html",domProps:{textContent:e._s(e.html)}},[e._v("\n      ")]),e._v("\n      "),n("code",{staticClass:"language-JavaScript",domProps:{textContent:e._s(e.js)}},[e._v("\n      ")]),e._v("\n  ")])],1)},L=[],J={name:"myTree6",data:function(){return{html:'<y-tree show-line :default-expanded-keys="[\'0-0-0\']" @select="onSelect">\n        <a-icon slot="switcherIcon" type="down" />\n        <y-tree-node key="0-0" title="parent 1">\n          <y-tree-node key="0-0-0" title="parent 1-0">\n            <y-tree-node key="0-0-0-0" title="leaf" />\n            <y-tree-node key="0-0-0-1" title="leaf" />\n            <y-tree-node key="0-0-0-2" title="leaf" />\n          </y-tree-node>\n          <y-tree-node key="0-0-1" title="parent 1-1">\n            <y-tree-node key="0-0-1-0" title="leaf" />\n          </y-tree-node>\n          <y-tree-node key="0-0-2" title="parent 1-2">\n            <y-tree-node key="0-0-2-0" title="leaf" />\n            <y-tree-node key="0-0-2-1" title="leaf" />\n          </y-tree-node>\n        </y-tree-node>\n      </y-tree>',js:"\n      export default {\n          methods: {\n            onSelect(selectedKeys, info) {\n              console.log('selected', selectedKeys, info);\n            },\n          },\n        };"}},methods:{onSelect:function(e,t){console.log("selected",e,t)}}},O=J,X=Object(d["a"])(O,N,L,!1,null,null,null),$=X.exports,A={name:"MyTree",components:{tree1:p,tree2:b,tree3:S,tree4:T,tree6:$},data:function(){return{declareList:["任何需要通过层级组织的信息场景，如文件夹、组织架构、生物分类、国家地区等等。","Tree 子项中的可操作元素只能通过鼠标操作，不可聚焦，它们应该是表示性的，键盘不能操作到"],tableData:[{params:"blockNode",explain:"是否节点占据一行",type:"boolean",default:"false"},{params:"treeData",explain:"treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）",type:"array&lt;{key, title, children, [disabled, selectable]}&gt;",default:"--"},{params:"replaceFields",explain:"替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段",type:"object",default:"{children:'children', title:'title', key:'key' }"},{params:"autoExpandParent",explain:"是否自动展开父节点",type:"boolean",default:"true"},{params:"checkable",explain:"节点前添加 Checkbox 复选框",type:"boolean",default:"false"},{params:"checkedKeys(v-model)",explain:"（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置<code>checkable</code>和<code>checkStrictly</code>，它是一个有<code>checked</code>和<code>halfChecked</code>属性的对象，并且父子节点的选中与否不再关联",type:"string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}",default:"[]"},{params:"checkStrictly",explain:"checkable 状态下节点选择完全受控（父子节点选中状态不再关联）",type:"boolean",default:"false"},{params:"defaultCheckedKeys",explain:"默认选中复选框的树节点",type:"string[] | number[]",default:"[]"},{params:"defaultExpandAll",explain:"默认展开所有树节点",type:"boolean",default:"false"},{params:"defaultExpandedKeys",explain:"默认展开指定的树节点",type:"string[] | number[]",default:"[]"},{params:"defaultExpandParent",explain:"默认展开父节点",type:"bool",default:"true"},{params:"defaultSelectedKeys",explain:"默认选中的树节点",type:"string[] | number[]",default:"[]"},{params:"disabled",explain:"将树禁用",type:"bool",default:"false"},{params:"draggable",explain:"设置节点可拖拽",type:"boolean",default:"false"},{params:"expandedKeys(.sync)",explain:"（受控）展开指定的树节点",type:"string[] | number[]",default:"[]"},{params:"filterTreeNode",explain:"按需筛选树节点（高亮），返回 true",type:"function(node)",default:"-"},{params:"loadData",explain:"异步加载数据",type:"function(node)",default:"-"},{params:"loadedKeys",explain:"（受控）已经加载的节点，需要配合 <code>loadData</code> 使用",type:"string[] | number[]",default:"[]"},{params:"multiple",explain:"支持点选多个节点（节点本身）",type:"boolean",default:"false"},{params:"selectable",explain:"是否可选中",type:"boolean",default:"true"},{params:"selectedKeys(.sync)",explain:"（受控）设置选中的树节点",type:"string[] | number[]",default:"-"},{params:"showIcon",explain:"是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式",type:"boolean",default:"false"},{params:"switcherIcon",explain:"自定义树节点的展开/折叠图标",type:"slot",default:"-"},{params:"showLine",explain:"是否展示连接线",type:"boolean",default:"false"},{params:"title",explain:"标题",type:"slot",default:""}],tableData2:[{params:"check",explain:"点击复选框触发",type:"function(checkedKeys, e:{checked: bool, checkedNodes, node, event})"},{params:"dragend",explain:"dragend 触发时调用",type:"function({event, node})"},{params:"dragenter",explain:"dragenter 触发时调用",type:"function({event, node, expandedKeys})"},{params:"dragleave",explain:"dragleave 触发时调用",type:"function({event, node})"},{params:"dragover",explain:"dragover 触发时调用",type:"function({event, node})"},{params:"dragstart",explain:"开始拖拽时调用",type:"function({event, node})"},{params:"drop",explain:"drop 触发时调用",type:"function({event, node, dragNode, dragNodesKeys})"},{params:"expand",explain:"展开/收起节点时触发",type:"function(expandedKeys, {expanded: bool, node})"},{params:"load",explain:"节点加载完毕时触发",type:"function(loadedKeys, {event, node})"},{params:"rightClick",explain:"响应右键点击",type:"function({event, node})"},{params:"select",explain:"点击树节点触发",type:"function(selectedKeys, e:{selected: bool, selectedNodes, node, event})"}],tableData3:[{params:"class",explain:"节点的 class",type:"string",default:"-"},{params:"style",explain:"节点的 style",type:"string|object",default:"-"},{params:"checkable",explain:"当树为 checkable 时，设置独立节点是否展示 Checkbox",type:"boolean",default:"-"},{params:"disableCheckbox",explain:"禁掉 checkbox",type:"boolean",default:"false"},{params:"disabled",explain:"禁掉响应",type:"boolean",default:"false"},{params:"icon",explain:"自定义图标。可接收组件，props 为当前节点 props",type:"slot|slot-scope",default:"-"},{params:"isLeaf",explain:"设置为叶子节点(设置了<code>loadData</code>时有效)",type:"boolean",default:"false"},{params:"key",explain:"被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！",type:"string | number",default:"内部计算出的节点位置"},{params:"selectable",explain:"设置节点是否可被选中",type:"boolean",default:"true"},{params:"title",explain:"标题",type:"string|slot|slot-scope",default:"'---'"},{params:"slots",explain:"使用 treeNodes 时，可以通过该属性配置支持 slot 的属性，如 <code>slots: { title: 'XXX'}</code>",type:"object",default:"-"},{params:"scopedSlots",explain:"使用 columns 时，可以通过该属性配置支持 slot-scope 的属性，如 <code>scopedSlots: { title: 'XXX'}</code>",type:"object",default:"-"},{params:"on",explain:"事件对象，仅在 treeNodes 使用方式中生效，如<code>{click: () =&gt; {}}</code>",type:"object",default:"'---'"}],tableData4:[{params:"expandAction",explain:"目录展开逻辑，可选 false 'click' 'dblclick'\t",type:"string",default:"'click"}]}}},F=A,M=Object(d["a"])(F,a,l,!1,null,"2eaab7c5",null);t["default"]=M.exports}}]);