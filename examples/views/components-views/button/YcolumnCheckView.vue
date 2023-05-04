<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail
      title="表格列设置按钮"
      detail="用于表格列设置，可进行列的顺序调整，显示隐藏；初始化表格列时，先找缓存有没有之前设置的记录（之后可改为接口请求，即缓存的数据来源为服务端数据，有就直接显示之前设置记录的列，没有则使用表格默认的值，没有默认值则为全部）"
    />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <com-show>
      <y-column-check
        :checkvalue="checkval"
        @reset="reset"
        @confirm="confirm"
        :checkList="[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]"
      />
      <p>{{ checkval }}</p>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-column-check :checkvalue='checkval' :checkList='[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]' />
        <p>{{ checkval }}</p>`">
        </code>
        <code class="language-javascript">
        export default {
          data() {
            return {
              checkval: [1, 2]
            };
          },
          methods: {
            confirm(val) {
              this.checkval = val;
            },
            reset() {
              this.checkval = [];
            },
          },
        };
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkval: [1, 2],
      tableData: [
        {
          params: 'checkvalue',
          explain: '选中的值',
          type: 'Array',
          default: '[]',
        },
        {
          params: 'checkList',
          explain: '选项数据，举例：[{text,value,disabled:Boolean}]，其中的value是必传的',
          type: 'Array',
          default: '[]',
        },
        {
          params: 'icon',
          explain: '按钮图标，可支持antd所有图标',
          type: 'String',
          default: 'setting',
        },
        {
          params: 'keepCount',
          explain: '保留多少数量不可取消勾选',
          type: 'Number',
          default: '1',
        },
        {
          params: 'reset',
          explain: '点击重置按钮回调',
          type: 'Function',
          default: '',
        },
        {
          params: 'confirm',
          explain: '点击确定按钮回调',
          type: 'Function(选中的数据)',
          default: '',
        },
      ],
    };
  },
  methods: {
    confirm(val) {
      this.checkval = val;
    },
    reset() {
      this.checkval = [];
    },
  },
};
</script>
