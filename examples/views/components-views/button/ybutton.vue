<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="按钮" detail="不建议使用这个按钮，直接用antd的按钮更好" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <com-show>
      <y-button>按钮</y-button>
      <div style="height: 10px"></div>
      <y-button :loading="true">按钮2</y-button>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="'<y-button>按钮</y-button>'">
        </code>
        <code class="language-html" v-text="`<y-button :loading='true'>按钮2</y-button>`">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Ybutton',
  data() {
    return {
      tableData: [
        { params: 'icon', explain: '按钮图标，图标来源不清楚', type: '未知' },
        { params: 'loading', explain: '按钮loading状态', type: 'Boolean', default: 'false' },
        {
          params: 'iconPosition',
          explain: '按钮图标位置，只有 left 和 right 两个值',
          type: 'string',
          default: 'left',
        },
      ],
    };
  },
};
</script>