<template>
  <div class="box">
    <y-sign-title title="标题" />
    <!-- 表单内容 -->
    <y-form-model labelAlign="left" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <y-form-model-item label="表格（单选）" prop="table1">
        <div class="y-model-table-container">
          <div class="y-table-header">
            <div class="left">已选：{{ choseName }}</div>
            <div class="right">
              <!-- 不带选项 -->
              <y-auto-complete autoWidth key="noOption" :placeholder="`请输入`">
                <y-input>
                  <a-icon slot="prefix" type="search" class="certain-category-icon" />
                </y-input>
              </y-auto-complete>
            </div>
          </div>
          <y-table
            v-model="selectedData"
            bordered
            :scroll="{ y: 366 }"
            :row-selection="rowSelection"
            :components="$YGetTableDragHeader(columns)"
            :columns="columns"
            :data-source="data"
            :pagination="pagination"
            :modelKeys.sync="selectedDataKeys"
          >
          </y-table>
        </div>
      </y-form-model-item>
    </y-form-model>
  </div>
</template>
<script>
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
const data = [
  {
    key: 'd1',
    name: '内容文本，点击可进入详情1',
    age: 32,
    address: 'New York No. 1 Lake Park  New York NoNew York NoNew York NoNew York NoNew York NoNew York NoNew York No',
    tags: ['nice', 'developer'],
  },
  {
    key: 'd2',
    name: '内容文本，点击可进入详情12',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: 'd3',
    name: '内容文本，点击可进入详情123',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default {
  name: 'box2',
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      form: {
        table1: null,
      },
      rules: {
        table1: [{ required: true, message: '请选择表格', trigger: 'blur' }],
      },
      selectedData: [],
      selectedDataKeys: [],
      columns,
      pagination: this.$YGetTablePagination({ hideOnSinglePage: true, pageSize: 99999 }),
    };
  },
  computed: {
    data() {
      let arr = [];
      for (let i = 0; i < 60; i++) {
        let obj = { ...data[((Math.random() * 100).toFixed(0) - 0) % 2] };
        obj.key = obj.key + i;
        obj.name = obj.name + i;
        arr.push(obj);
      }
      return arr;
    },
    choseName: {
      get() {
        return this.selectedData[0] ? this.selectedData[0].name : '';
      },
    },
    rowSelection() {
      return {
        columnWidth: 40,
        type: 'radio',
        selectedRowKeys: this.selectedDataKeys, // 控制选择
      };
    },
  },
  methods: {
    onSubmit(callback) {
      this.$refs.ruleForm.validate(callback);
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
