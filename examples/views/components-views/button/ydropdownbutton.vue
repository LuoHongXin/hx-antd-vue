<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="下拉选择按钮" detail="用于选择" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <com-show>
      <y-dropdown-check-button v-model="checkval" :checkList="[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]" />
      <p>{{ checkval }}</p>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-dropdown-check-button
        v-model='checkval'
        :checkList='[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]'
        />`">
        </code>
        <code class="language-javascript">
        export default {
          data() {
            return {
              checkval: [1, 2]
            };
          },
          methods: {
            onChange(checkedValues) {
              console.log('checked = ', checkedValues);
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
  name: 'Ydropdownbutton',
  data() {
    return {
      checkval: [1, 2],
      tableData: [
        {
          params: 'v-mode',
          explain: '选中的值，单选为数字，多选为数组',
          type: 'Array || Number',
          default: '[]',
        },
        {
          params: 'single',
          explain: '是否单选',
          type: 'Boolean',
          default: 'false',
        },
        {
          params: 'checkList',
          explain: '选项数据，举例：[{text,value,disabled}]，其中的value是必传的',
          type: 'Array',
          default: '[]',
        },
        {
          params: 'useSlot',
          explain: '默认是图标按钮，useSlot为true则会用slot的组件',
          type: 'Boolean',
          default: 'false',
        },
        {
          params: 'icon',
          explain: '按钮图标，可支持antd所有图标',
          type: 'String',
          default: 'setting',
        },
        {
          params: 'trigger',
          explain: '触发下拉事件，默认hover划过，有 click | hover | contextmenu',
          type: 'Array',
          default: "['hover']",
        },
        {
          params: 'change',
          explain: '选择回调事件',
          type: 'Function',
          default: '',
        },
      ],
    };
  },
  methods: {
    onChange(checkedValues) {
      console.log('checked = ', checkedValues);
    },
  },
};
</script>
