<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="虚拟滚动表格" detail="使用yVirtualBox虚拟滚动盒子，实现支持将大数据量的表格实现滚动分页加载对应的数据" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <com-show>
      <y-virtualBox :dataSource="dataSource">
        <y-table
          slot="virtualBox"
          slot-scope="{ showData }"
          v-model="selectedData"
          bordered
          class="sticky-contain"
          :row-selection="rowSelection"
          :components="$YGetTableDragHeader(columns)"
          :columns="columns"
          :data-source="showData"
          :pagination="false"
          :modelKeys.sync="selectedDataKeys"
        >
          <a slot="name" slot-scope="text" class="y-button-link">{{ text }}</a>
          <span slot="tags" slot-scope="tags">
            <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </y-table>
      </y-virtualBox>
      <p style="margin-top: 20px">
        selectedData：{{ selectedData }}<br />
        selectedDataKeys：{{ selectedDataKeys }}
      </p>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
      <code class="language-html" v-text="html">
      </code>
      <code class="language-javascript" v-text="js">
        </code>
      </pre>
    <yTable2 />
    <api-table :data="apiData"></api-table>
  </div>
</template>
<script>
import mixins from './mixins';
import yTable2 from './yTable2.vue';
const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
    width: 200,
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true,
    width: 200,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
    width: 200,
  },
];
export default {
  name: 'tableviews',
  mixins: [mixins],
  components: {
    yTable2,
  },
  data() {
    return {
      html: ` <y-virtualBox :dataSource="dataSource">
        <y-table
          slot="virtualBox"
          slot-scope="{ showData }"
          v-model="selectedData"
          bordered
          class="sticky-contain"
          :row-selection="rowSelection"
          :components="$YGetTableDragHeader(columns)"
          :columns="columns"
          :data-source="showData"
          :pagination="false"
          :modelKeys.sync="selectedDataKeys"
        >
          <a slot="name" slot-scope="text" class="y-button-link">{{ text }}</a>
          <span slot="tags" slot-scope="tags">
            <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </y-table>
      </y-virtualBox>
      <p style="margin-top: 20px">
        selectedData：{{ selectedData }}<br />
        selectedDataKeys：{{ selectedDataKeys }}
      </p>`,
      js: `
        const columns = [
          {
            title: '标题',
            dataIndex: 'name',
            key: 'name',
            scopedSlots: { customRender: 'name' },
            width: 200,
            filters: [
              {
                text: 'Joe',
                value: 'Joe',
              },
              {
                text: 'Jim',
                value: 'Jim',
              },
            ],
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            ellipsis: true,
            width: 200,
          },
          {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            scopedSlots: { customRender: 'tags' },
            width: 200,
          },
        ];
        export default {
          name: 'tableviews',
          data() {
            return {
              selectedData: [],
              selectedDataKeys: [],
              columns,
              pagination: this.$YGetTablePagination(),
            };
          },
          computed: {
             dataSource() {
              let arr = [];
              for (let i = 0; i < 500; i++) {
                let obj = {
                  key: 'd1',
                  name: '内容文本，点击可进入详情',
                  age: 32,
                  address: 'New York No. 1 Lake Park  New York NoNew York NoNew York NoNew York NoNew York NoNew York NoNew York No',
                  tags: ['nice', 'developer'],
                };
                obj.key = obj.key + i;
                obj.name = obj.name + i;
                arr.push(obj);
              }
              return arr;
            },
            rowSelection() {
              return {
                columnWidth: 40,
                // type: 'radio',
                // getCheckboxProps: () => {
                //   return {
                //     props: {
                //       disabled: true,
                //     },
                //   };
                // },
                selectedRowKeys: this.selectedDataKeys, // 控制选择
              };
            },
          },
          methods: {
            handleTableChange(pagination) {
              this.pagination = pagination;
            },
          },
        };`,
      selectedData: [],
      selectedDataKeys: [],
      columns,
      // data,
      apiData: [
        {
          params: 'handleInfiniteOnLoad',
          explain: '滚动到底部触发的事件',
          type: 'Function',
        },
        {
          params: 'infiniteScrollDisabled',
          explain: '禁用滚动底部触发事件',
          type: 'Boolean',
          default: 'false',
        },
        {
          params: 'height',
          explain: '滚动可视区域高度',
          type: '517px',
        },
        { params: 'dataSource', explain: '所有的数据', type: 'Array', default: '[]' },
        {
          params: 'rowHeight',
          explain: '行高，每行滚动数据的高度，会根据这个高度去计算滚动到多少展示第几条数据',
          type: 'Number',
          default: '47',
        },
        {
          params: 'realDomNum',
          explain: '渲染真实dom的数量，可视实际的数据数量',
          type: 'Number',
          default: '10',
        },
        {
          params: 'virtualBox',
          explain: '具名插槽，会回传showData可展示的参数，数量根据realDomNum',
          type: 'slot',
        },
      ],
    };
  },
  computed: {
    dataSource() {
      let arr = [];
      for (let i = 0; i < 500; i++) {
        let obj = {
          key: 'd1',
          name: '内容文本，点击可进入详情',
          age: 32,
          address: 'New York No. 1 Lake Park  New York NoNew York NoNew York NoNew York NoNew York NoNew York NoNew York No',
          tags: ['nice', 'developer'],
        };
        obj.key = obj.key + i;
        obj.name = obj.name + i;
        arr.push(obj);
      }
      return arr;
    },
    rowSelection() {
      return {
        columnWidth: 40,
        // type: 'radio',
        // getCheckboxProps: () => {
        //   return {
        //     props: {
        //       disabled: true,
        //     },
        //   };
        // },
        selectedRowKeys: this.selectedDataKeys, // 控制选择
      };
    },
  },
};
</script>
