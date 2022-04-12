<template>
  <div>
    <!-- <api-table :data="tableData"></api-table> -->
    <!-- 组件标题和说明 -->
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-switch></y-switch>
      <br />
      <br />
      <y-switch checked-children="开" un-checked-children="关"></y-switch>
      <br />
      <br />
      <y-switch disabled default-checked>
        <a-icon slot="checkedChildren" type="check" />
        <a-icon slot="unCheckedChildren" type="close" />
      </y-switch>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
      <code class="language-html" v-text="html">
      </code>
    </pre>
    <api-table title="API" :data="tableData"></api-table>
    <api-table title="事件" :data="tableDataFn"></api-table>
  </div>
</template>
<script>
export default {
  name: 'mySwitch',
  data() {
    return {
      html: `<y-switch></y-switch>
    <br />
    <br />
    <y-switch checked-children="开" un-checked-children="关"></y-switch>
    <br />
    <br />
    <y-switch disabled default-checked>
      <a-icon slot="checkedChildren" type="check" />
      <a-icon slot="unCheckedChildren" type="close" />
    </y-switch>`,
      tableData: [
        {
          params: 'autoFocus',
          explain: '组件自动获取焦点',
          type: 'boolean',
          default: 'fasle',
        },
        {
          params: 'checked(v-model)',
          explain: '指定当前是否选中  ',
          type: 'boolean',
          default: 'fasle',
        },
        {
          params: 'checkedChildren ',
          explain: '选中时的内容',
          type: 'string|slot',
        },
        {
          params: 'defaultChecked',
          explain: '初始是否选中',
          type: 'boolean',
          default: 'fasle',
        },
        {
          params: 'disabled',
          explain: '是否禁用',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'loading',
          explain: '加载中的开关',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'size',
          explain: '开关大小，可选值：default small',
          type: '	string',
          default: 'default',
        },
        {
          params: 'unCheckedChildren',
          explain: '非选中时的内容',
          type: '	string|slot',
        },
      ],
      tableDataFn: [
        {
          params: 'change',
          explain: '变化时回调函数',
          type: 'Function(checked:Boolean, event: Event)',
        },
        {
          params: 'click',
          explain: '点击时回调函数  ',
          type: 'Function(checked:Boolean, event: Event)',
        },
      ],
    };
  },
};
</script>
