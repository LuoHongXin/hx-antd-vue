<template>
  <div class="checkbox">
    <!-- 组件标题和说明 -->
    <title-detail title="多选框" detail="" />
    <declareList :value="declareList" />
    <title-detail title="如需使用按钮型多选可选标签请点击以下链接跳转" detail="点击跳转 " />
    <y-text-link @click="$router.push({ name: 'tag' })" type="light">按钮型多选可选标签</y-text-link>
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-checkbox @change="onChange">
        Checkbox
      </y-checkbox>
      <br />
      <br />
      disabled 不可用（禁用）
      <div>
        <y-checkbox :default-checked="false" disabled />
        <br />
        <y-checkbox default-checked disabled />
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
            methods: {
              onChange(e) {
                console.log(`checked = ${e.target.checked}`);
              },
            }
        </code>
    </pre>
    <CheckboxAll />
    <CheckboxArray />
    <h3 class="fun-title">属性（Checkbox ）</h3>
    <api-table :data="tableData1"></api-table>
    <h3 class="fun-title">事件（Checkbox ）</h3>
    <api-table :data="tableData2"></api-table>
    <h3 class="fun-title">Checkbox Group</h3>
    <api-table :data="tableData3"></api-table>
    <h3 class="fun-title">事件（Checkbox Group）</h3>
    <api-table :data="tableData4"></api-table>
    <h3 class="fun-title">方法</h3>
    <h3 class="fun-title">Checkbox</h3>
    <api-table :data="tableData5"></api-table>
  </div>
</template>
<script>
import CheckboxAll from './checkboxAll';
import CheckboxArray from './checkboxArray';
export default {
  name: 'checkbox',
  data() {
    return {
      declareList: ['选项数量不超过 7* *个为佳', '字数过多的时候，建议使用结构化表达', '可配合其他辅助文字使用（比如灰色说明文字）'],
      html: `<y-checkbox @change="onChange"> Checkbox </y-checkbox>
      <br />
      <br />
      disabled 不可用（禁用）
      <div>
        <y-checkbox :default-checked="false" disabled />
        <br />
        <y-checkbox default-checked disabled />
      </div>`,
      tableData1: [
        {
          params: 'autoFocus',
          explain: '自动获取焦点',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'checked',
          explain: '指定当前是否选中',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'defaultChecked',
          explain: '初始是否选中',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'disabled',
          explain: '失效状态',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'indeterminate',
          explain: '设置 indeterminate 状态，只负责样式控制',
          type: 'boolean',
          default: 'false',
        },
      ],
      tableData2: [
        {
          params: 'change',
          explain: '变化时回调函数',
          type: 'Function(e:Event)',
        },
      ],
      tableData3: [
        {
          params: 'defaultValue',
          explain: '默认选中的选项',
          type: 'string[ ]',
          default: '[ ]',
        },
        {
          params: 'disabled',
          explain: '整组失效',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'name',
          explain: 'CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性',
          type: 'string',
        },
        {
          params: 'options',
          explain: '指定可选项，可以通过 slot="label" slot-scope="option" 定制label',
          type: 'string[] | Array<{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }>',
          default: '[ ]',
        },
        {
          params: 'value',
          explain: '指定选中的选项',
          type: 'string[ ]',
          default: '[ ]',
        },
      ],
      tableData4: [
        {
          params: 'change',
          explain: '变化时回调函数',
          type: 'Function(checkedValue)',
        },
      ],
      tableData5: [
        {
          params: 'blur()',
          explain: '移除焦点',
        },
        {
          params: 'focus()',
          explain: '获取焦点',
        },
      ],
    };
  },
  components: { CheckboxAll, CheckboxArray },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  },
};
</script>
<style lang="less">
.checkbox {
  .apiTable {
    .fun-title {
      display: none;
    }
  }
}
</style>
