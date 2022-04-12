<template>
  <div>
    <!-- 组件标题和说明 -->
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-radio :default-checked="true"></y-radio>
      <br /><br />
      <y-radio disabled></y-radio>
      <br /><br />
      <y-radio>单选项目</y-radio>
      <br /><br />
      <y-radio disabled :default-checked="true">单选项目</y-radio>
      <br /><br />
      <y-radio-group v-model="value" :options="plainOptions" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
      <code class="language-html" v-text="html">
      </code>
    </pre>
    <pre class="line-numbers">
      <code class="language-javascript">
      const plainOptions = ['Apple', 'Pear', 'Orange'];
        export default {
          data() {
            return {
              plainOptions,
              value: ""
            }
          }
        };
      </code>
    </pre>
    <api-table :data="tableData" title="radio API"></api-table>
    <api-table :data="tableDataGroup" title="radio-group API"></api-table>
    <api-table :data="tableDataGroupFn" title="radio-group 事件"></api-table>
  </div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange'];
export default {
  name: 'basis',
  data() {
    return {
      html: `<y-radio :default-checked="true"></y-radio>
      <br><br>
      <y-radio disabled></y-radio>
      <br><br>
      <y-radio>单选项目</y-radio>
      <br><br>
      <y-radio disabled :default-checked="true">单选项目</y-radio>
      <br /><br />
      <y-radio-group :options="plainOptions" default-value="Apple" />`,
      plainOptions,
      value: 'Apple',
      tableData: [
        { params: 'autoFocus', explain: '自动获取焦点', type: 'boolean', default: 'false' },
        { params: 'checked', explain: '指定当前是否选中', type: 'boolean', default: 'false' },
        { params: 'defaultChecked', explain: '初始是否选中', type: 'boolean', default: 'false' },
        { params: 'value', explain: '根据 value 进行比较，判断是否选中', type: 'any' },
      ],
      tableDataGroup: [
        { params: 'defaultValue', explain: '默认选中的值', type: 'any' },
        { params: 'disabled', explain: '禁选所有子单选器', type: 'boolean', default: 'false' },
        { params: 'name', explain: 'RadioGroup 下所有 input[type="radio"] 的 name 属性', type: 'string' },
        {
          params: 'options',
          explain: '以配置形式设置子元素',
          type: '	string[] | Array<{ label: string value: string disabled?: boolean }>',
        },
        { params: 'size', explain: '大小，只对按钮样式生效', type: 'large | default | small', default: 'default' },
        { params: 'value(v-model)', explain: '用于设置当前选中的值	', type: 'any' },
        { params: 'buttonStyle', explain: 'RadioButton 的风格样式，目前有描边和填色两种风格', type: 'outline | solid', default: 'outline' },
      ],
      tableDataGroupFn: [{ params: 'change', explain: '选项变化时的回调函数', type: 'Function(e:Event)' }],
    };
  },
  watch: {
    value(value) {
      console.log(value);
    },
  },
};
</script>
