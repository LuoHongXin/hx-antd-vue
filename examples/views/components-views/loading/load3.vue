<template>
  <div>
    <funTitleDetail title="容器" detail="放入一个容器中。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <div
        style="text-align: center;
              background: rgba(0, 0, 0, 0.05);
              border-radius: 4px;
              margin-bottom: 20px;
              padding: 30px 50px;
              margin: 20px 0;"
      >
        <y-loading />
      </div>
      <y-loading :spinning="spinning">
        <div
          style="text-align: center;
              background: rgba(0, 0, 0, 0.05);
              border-radius: 4px;
              margin-bottom: 20px;
              padding: 30px 50px;
              margin: 20px 0;"
        ></div>
      </y-loading>
      <a-switch v-model="spinning" />
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-JavaScript" v-text="js">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'load1',
  data() {
    return {
      html: `<div style="text-align: center;
              background: rgba(0, 0, 0, 0.05);
              border-radius: 4px;
              margin-bottom: 20px;
              padding: 30px 50px;
              margin: 20px 0;">
        <y-loading />
      </div>
      <y-loading :spinning="spinning">
        <div style="text-align: center;
              background: rgba(0, 0, 0, 0.05);
              border-radius: 4px;
              margin-bottom: 20px;
              padding: 30px 50px;
              margin: 20px 0;"></div>
      </y-loading>
      <a-switch v-model="spinning" />`,
      spinning: false,
      js: `data() {
            return {
              spinning: false,
            }
        }`,
    };
  },
};
</script>
