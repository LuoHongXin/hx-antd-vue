<template>
  <div class="checkbox">
    <!-- 组件标题和说明 -->
    <title-detail title="checkboxTag" detail="checkboxTag(link-tag效果一致)" />
    <declareList :value="declareList" />
    <title-detail title="如需使用link-tag可选标签请点击以下链接跳转" detail="点击跳转 " />
    <y-text-link @click="$router.push({ name: 'tag' })" type="light">link-tag按钮型多选可选标签</y-text-link>
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-checkbox-tag :checked="checked" @change="onChange">
        checked
      </y-checkbox-tag>
      <y-checkbox-tag readonly>
        readonly
      </y-checkbox-tag>
      <y-checkbox-tag disabled>
        disabled
      </y-checkbox-tag>
      <y-checkbox-tag v-model="checked" @change="onChange">
        v-model
      </y-checkbox-tag>
      <div>checked: {{ checked }}</div>
      <y-checkbox-tag-group :options="options" @change="onChange2" :disabled="checked"> </y-checkbox-tag-group>
      <br />
      <y-checkbox-tag-group :options="options1" :replaceFields="{ value: 'key', label: 'title' }"> </y-checkbox-tag-group>
      <br />
      <y-checkbox-tag-group @change="onChange2">
        <y-checkbox-tag value="123">
          123
        </y-checkbox-tag>
        <y-checkbox-tag value="345">
          345
        </y-checkbox-tag>
      </y-checkbox-tag-group>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          data() {
            return {
              checked: false,
              options: [
                { label: 'item1', value: '1' },
                { label: 'item2', value: '2' },
                { label: 'item3', value: '3' },
                { label: 'item4', value: '4' },
                { label: 'item5', value: '5' },
              ],
              options1: [
                { title: 'item1', key: '1' },
                { title: 'item2', key: '2' },
                { title: 'item3', key: '3' },
                { title: 'item4', key: '4' },
                { title: 'item5', key: '5' },
              ],
            }
          },
          methods: {
            onChange(e) {
              console.log(`checked = ${e.target.checked}`);
            },
          }
        </code>
    </pre>
    <h3 class="fun-title">属性（Checkbox Tag ）</h3>
    <api-table :data="tableData1"></api-table>
    <h3 class="fun-title">事件（Checkbox Tag ）</h3>
    <api-table :data="tableData2"></api-table>
    <h3 class="fun-title">Checkbox Tag Group</h3>
    <api-table :data="tableData3"></api-table>
    <h3 class="fun-title">事件（Checkbox Tag Group）</h3>
    <api-table :data="tableData4"></api-table>
  </div>
</template>
<script>
// import CheckboxAll from './checkboxAll';
export default {
  name: 'checkboxTag',
  data() {
    return {
      checked: false,
      options: [
        { label: 'item1', value: '1' },
        { label: 'item2', value: '2' },
        { label: 'item3', value: '3' },
        { label: 'item4', value: '4' },
        { label: 'item5', value: '5' },
      ],
      options1: [
        { title: 'item1', key: '1' },
        { title: 'item2', key: '2' },
        { title: 'item3', key: '3' },
        { title: 'item4', key: '4' },
        { title: 'item5', key: '5' },
      ],
      declareList: ['link-tag 没有change回调改方法添加回调 只有点击的时候才会触发change事件 可用于互斥效果例如：选第一个tag取消后面的tag'],
      html: `<y-checkbox-tag :checked="checked" @change="onChange">
        checked
      </y-checkbox-tag>
      <y-checkbox-tag readonly>
        readonly
      </y-checkbox-tag>
      <y-checkbox-tag disabled>
        disabled
      </y-checkbox-tag>
      <y-checkbox-tag v-model="checked" @change="onChange">
        v-model
      </y-checkbox-tag>
      <div>checked: {{ checked }}</div>
      <y-checkbox-tag-group :options="options" @change="onChange2" :disabled="checked"> </y-checkbox-tag-group>
      <br />
      <y-checkbox-tag-group :options="options1" :replaceFields="{ value: 'key', label: 'title' }"> </y-checkbox-tag-group>
      <br />
      <y-checkbox-tag-group @change="onChange2">
        <y-checkbox-tag value="123">
          123
        </y-checkbox-tag>
        <y-checkbox-tag value="345">
          345
        </y-checkbox-tag>
      </y-checkbox-tag-group>`,
      tableData1: [
        {
          params: 'checked',
          explain: '指定当前是否选中(v-model)',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'readonly',
          explain: '只读状态',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'disabled',
          explain: '失效状态',
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
          params: 'disabled',
          explain: '整组失效',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'options',
          explain: '数据源',
          type: 'string[] | Array<{ label: string value: string disabled?: boolean }>',
          default: '[ ]',
        },
        {
          params: 'replaceFields',
          explain: '替换options 中 label,value,disabled 对应的字段',
          type: 'object',
          default: "{ disabled:'disabled', label:'label', value:'value' }",
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
    };
  },

  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    onChange2(val, e) {
      console.log(`value =:`, val);
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
