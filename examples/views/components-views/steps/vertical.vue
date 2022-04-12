<template>
  <div>
    <funTitleDetail title="垂直展示" detail="步骤数较多时" />
    <!-- 组件展示 -->
    <com-show>
      <y-steps direction="vertical" :current="1">
        <y-step>
          <template slot="title">
            处理完成
          </template>
          <span slot="description">这里是描述内容，内容过长将换行</span>
        </y-step>
        <y-step title="正在处理" description="这里是描述内容，内容过长将换行" />
        <y-step title="等待处理" description="这里是描述内容，内容过长将换行" />
      </y-steps>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'Vertical',
  data() {
    return {
      html: `<y-steps direction="vertical" :current="1">
        <y-step>
          <template slot="title">
            处理完成
          </template>
          <span slot="description">这里是描述内容，内容过长将换行</span>
        </y-step>
        <y-step title="正在处理" description="这里是描述内容，内容过长将换行" />
        <y-step title="等待处理" description="这里是描述内容，内容过长将换行" />
      </y-steps>`,
    };
  },
};
</script>
