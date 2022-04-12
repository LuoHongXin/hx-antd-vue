<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="标签输入框" detail="可输入新增标签，并选择标签" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <com-show>
      <y-tag-input v-model="selectTag" @inputNewTag="inputNewTag" :data="[{ label: 'CNware', value: '1' }]"></y-tag-input>
      <p style="margin-top: 10px">{{ selectTag }}</p>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-tag-input v-model='selectTag' @inputNewTag='inputNewTag' :data='[{ label: 'CNware', value: '1' }]'></y-tag-input>`">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
            export default {
                data() {
                    return {
                    selectTag: [],
                    };
                },
                methods: {
                    inputNewTag(val) {
                    console.log('%c%s', 'color:blue', val);
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
  name: 'myTagInput',
  data() {
    return {
      selectTag: [],
      tableData: [
        { params: 'data', explain: '初始标签数据，格式：[{label: "CNware",value: "1"}]', type: 'Array', default: '[]' },
        { params: 'v-model', explain: '选中的标签value值', type: 'Array', default: '[]' },
        {
          params: 'canAdd',
          explain: '是否支持可以新增',
          type: 'Boolean',
          default: 'true',
        },
        {
          params: 'themeColor',
          explain: '主题颜色',
          type: 'string',
          default: '#454852',
        },
        {
          params: 'inputNewTag',
          explain: '新增标签回调函数',
          type: 'Function',
        },
      ],
    };
  },
  methods: {
    inputNewTag(val) {
      console.log('%c%s', 'color:blue', val);
    },
  },
};
</script>
