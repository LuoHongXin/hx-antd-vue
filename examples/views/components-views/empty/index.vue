<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Empty 空状态" detail="当界面中没有内容／数据时，为用户提供说明信息或操作指引。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用场景" :value="declareList" />
    <!-- 组件展示 -->
    <com-show>
      <y-empty></y-empty>
      <y-empty scene="networkError"></y-empty>
      <y-empty scene="systemError"></y-empty>
      <y-empty scene="noMessage"></y-empty>
      <y-empty scene="noAccess"></y-empty>
      <y-empty scene="dataLoading"></y-empty>
      <y-empty scene="canNotGet"></y-empty>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <funTitleDetail title="带操作按钮" detail="" />
    <declareList :value="declareList2" />
    <com-show>
      <h2>素雅</h2>
      <y-empty>
        <div slot="description">
          <y-button type="link">刷新列表</y-button>
        </div>
      </y-empty>
      <h2>彩色</h2>
      <y-empty>
        <div slot="description">
          <p class="title">暂无任务</p>
          <p class="content">太棒了！已完成所有任务</p>
          <y-button type="primary">创建任务</y-button>
          <y-button type="default">返回列表</y-button>
        </div>
      </y-empty>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'empty',
  data() {
    return {
      declareList: [
        '暂无数据：请求有响应，请求状态码为200，但数据为空',
        '网络出错：断网，请求发不出去',
        '系统出错：请求有响应，但请求状态码非200',
        '暂无消息：针对消息数据为空的情况',
        '暂未接入：某些需要用户接入才能显示数据的场景',
      ],
      declareList2: [
        '素雅：用于小型容器内占位，如表格，插画元素简单，整体视觉较为轻量，组成为插画 + 描述，行动点按需选择，保证不超过 2 个，行动点必须采用「次按钮」或 「文字按钮」',
        '彩色：用于页面级或大型容器内占位，插画元素更加丰富，整体视觉更加厚重，组成为插画 + 标题 + 描述，动点按需选择，保证不超过 2 个。如果只有一个行动点，必须采用「主按钮」；若为两个行动点，则必须为「主按钮」+「次按钮」',
      ],
      html: `<y-empty></y-empty>
      <y-empty scene="networkError"></y-empty>
      <y-empty scene="systemError"></y-empty>
      <y-empty scene="noMessage"></y-empty>
      <y-empty scene="noAccess"></y-empty>
      <y-empty scene="dataLoading"></y-empty>
      <y-empty scene="canNotGet"></y-empty>`,
      html2: `<h2>素雅</h2>
      <y-empty>
        <div slot="description">
          <y-button type="link">刷新列表</y-button>
        </div>
      </y-empty>
      <h2>彩色</h2>
      <y-empty>
        <div slot="description">
          <p class="title">暂无任务</p>
          <p class="content">太棒了！已完成所有任务</p>
          <y-button type="primary">创建任务</y-button>
          <y-button type="default">返回列表</y-button>
        </div>
      </y-empty>`,
      tableData: [
        {
          params: 'scene',
          explain: '网络出错-networkError、系统出错-systemError、暂无消息-noMessage、暂未接入-noAccess、暂无数据-noData，五个场景',
          type: 'string',
          default: 'noData',
        },
        {
          params: 'description',
          explain: '自定义描述内容',
          type: 'string | v-slot',
        },
        {
          params: 'imageStyle',
          explain: '图片样式',
          type: 'CSSProperties',
        },
        {
          params: 'image',
          explain: '自定义显示图片，为 string 时表示自定义图片地址',
          type: 'string | v-slot',
          default: false,
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
