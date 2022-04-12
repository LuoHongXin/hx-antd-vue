<template>
  <div>
    <!-- 组件标题和说明 -->
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-radio bodered :default-checked="false">
        单选项目
        <template slot="content">
          <div>这里是一段简要的描述性信息</div>
        </template>
      </y-radio>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'options',
  data() {
    return {
      html: `<y-radio bodered :default-checked="false">
        单选项目
        <template slot="content">
          <div>这里是一段简要的描述性信息</div>
        </template>
      </y-radio>`,
      tableData: [
        { params: 'bodered', explain: '边框', type: 'Boolean', default: 'false' },
        { params: 'content', explain: '内容', type: 'slot', default: '' },
      ],
    };
  },
};
</script>
