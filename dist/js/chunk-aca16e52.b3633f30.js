(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aca16e52"],{"23d3":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"table-operations"},[t("a-button",{on:{click:e.setAgeSort}},[e._v(" Sort age ")]),t("a-button",{on:{click:e.clearFilters}},[e._v(" Clear filters ")]),t("a-button",{on:{click:e.clearAll}},[e._v(" Clear filters and sorters ")])],1),t("y-table",{attrs:{columns:e.columns,"data-source":e.data},on:{change:e.handleChange}})],1)},a=[],o=(t("b0c0"),t("caad"),t("2532"),[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park"}]),l={data:function(){return{data:o,filteredInfo:null,sortedInfo:null}},computed:{columns:function(){var e=this.sortedInfo,n=this.filteredInfo;e=e||{},n=n||{};var t=[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"}],filteredValue:n.name||null,onFilter:function(e,n){return n.name.includes(e)},sorter:function(e,n){return e.name.length-n.name.length},sortOrder:"name"===e.columnKey&&e.order,ellipsis:!0},{title:"Age",dataIndex:"age",key:"age",sorter:function(e,n){return e.age-n.age},sortOrder:"age"===e.columnKey&&e.order},{title:"Address",dataIndex:"address",key:"address",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}],filteredValue:n.address||null,onFilter:function(e,n){return n.address.includes(e)},sorter:function(e,n){return e.address.length-n.address.length},sortOrder:"address"===e.columnKey&&e.order,ellipsis:!0}];return t}},methods:{handleChange:function(e,n,t){console.log("Various parameters",e,n,t),this.filteredInfo=n,this.sortedInfo=t},clearFilters:function(){this.filteredInfo=null},clearAll:function(){this.filteredInfo=null,this.sortedInfo=null},setAgeSort:function(){this.sortedInfo={order:"descend",columnKey:"age"}}}},s=l,d=(t("d545"),t("2877")),i=Object(d["a"])(s,r,a,!1,null,"72bbb44c",null);n["default"]=i.exports},"31d6":function(e,n,t){},d545:function(e,n,t){"use strict";t("31d6")}}]);
//# sourceMappingURL=chunk-aca16e52.b3633f30.js.map