<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="文字链接" detail="带链接的文字，可跳转至新页面。" />
    <declareList :value="declareList" title="场景" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail
      title="常规"
      detail="不引导用户点击的场景，比如查看条款、查看任务；当链接内容新页面打开时，需使用图标。"
    ></funTitleDetail>
    <com-show>
      <y-text-link @click="openNew">文字链接</y-text-link>
      <y-text-link @click="openNew" icon>文字链接</y-text-link>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-text-link @click='openNew'>文字链接</y-text-link>
        <y-text-link @click='openNew' icon>文字链接</y-text-link>`">
        </code>
    </pre>
    <funTitleDetail
      title="强调"
      detail="需要用户注意，引导用户点击的场景，比如任务创建成功后点击查看任务详情；当链接内容新页面打开时，需使用图标。"
    ></funTitleDetail>
    <com-show>
      <y-text-link @click="openNew" type="light">文字链接</y-text-link>
      <y-text-link @click="openNew" icon type="light">文字链接</y-text-link>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-text-link @click='openNew' type='light'>文字链接</y-text-link>
        <y-text-link @click='openNew' icon type='light'>文字链接</y-text-link>`">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'TextLink',
  data() {
    return {
      declareList: [
        '适用：跳转 到新页面或（模态弹窗形式）查看补充信息的场景',
        '不适用：触发一个操作的场景。此时应该用 Text Button 文字按钮',
      ],
      tableData: [
        {
          params: 'type',
          explain: '默认常规类型，设为light为强调类型',
          type: 'String',
          default: 'default',
        },
        {
          params: 'icon',
          explain: '是否显示固定图标（图标不可改）',
          type: 'Boolean',
          default: 'false',
        },
      ],
    };
  },
  methods: {
    openNew() {
      window.open(location.href);
    },
  },
};
</script>
<style lang="less" scoped>
.y-text-link {
  margin-right: 20px;
}
</style>
