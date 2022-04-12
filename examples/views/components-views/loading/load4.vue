<template>
  <div>
    <funTitleDetail title="自定义" detail="自定义描述文案、使用自定义指示符。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <span>自定义描述文案：</span>
      <y-loading tip="Loading...">
        <div style="border: 1px solid #91d5ff;background-color: #e6f7ff;padding: 30px;">
          我的描述文案是自定义的。。。
        </div>
      </y-loading>
      <span>自定义指示符：</span>
      <y-loading>
        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
      </y-loading>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'load1',
  data() {
    return {
      html: `<span>自定义描述文案：</span>
      <y-loading tip="Loading...">
        <div style="border: 1px solid #91d5ff;background-color: #e6f7ff;padding: 30px;">
          我的描述文案是自定义的。。。
        </div>
      </y-loading>
      <span>自定义指示符：</span>
      <y-loading>
        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
      </y-loading>`,
    };
  },
};
</script>
