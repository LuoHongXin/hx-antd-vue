<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="标签" detail="和 antd 的标签组件无异，但为了以后能根据需求统一修改，最好所有的标签组件都用这个" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-tag color="green">成功</y-tag>
      <y-tag color="geekblue">正常</y-tag>
      <y-tag color="geekblue">进行中</y-tag>
      <y-tag color="red">错误</y-tag>
      <y-tag color="red">失败</y-tag>
      <y-tag color="gold">警示</y-tag>
      <y-tag color="gold">提示</y-tag>
      <y-tag color="volcano">更严重的警示</y-tag>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`
            <y-tag color='green'>成功</y-tag>
            <y-tag color='geekblue'>正常</y-tag>
            <y-tag color='geekblue'>进行中</y-tag>
            <y-tag color='red'>错误</y-tag>
            <y-tag color='red'>失败</y-tag>
            <y-tag color='gold'>警示</y-tag>
            <y-tag color='gold'>提示</y-tag>
            <y-tag color='volcano'>更严重的警示</y-tag>`">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Ytag',
  data() {
    return {
      tableData: [{ params: 'color', explain: '和antd的color参数一样', type: 'String' }],
    };
  },
};
</script>