<template>
  <div>
    <funTitleDetail title="水平展示" detail="最常用的类型，适合步骤数少的场景。" />
    <!-- 组件展示 -->
    <com-show>
      <y-steps :current="1">
        <y-step>
          <template slot="title">
            处理完成
          </template>
        </y-step>
        <y-step title="正在处理" />
        <y-step title="等待处理" />
      </y-steps>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html1">
        </code>
    </pre>
    <funTitleDetail title="点状步骤条 " detail="包含步骤点的进度条" />
    <!-- 组件展示 -->
    <com-show>
      <div>
        <y-steps progress-dot :current="1">
          <y-step title="Finished" description="This is a description." />
          <y-step title="In Progress" description="This is a description." />
          <y-step title="Waiting" description="This is a description." />
        </y-steps>
        <a-divider />
        <y-steps progress-dot :current="1" direction="vertical">
          <y-step title="Finished" description="This is a description. This is a description." />
          <y-step title="Finished" description="This is a description. This is a description." />
          <y-step title="In Progress" description="This is a description. This is a description." />
          <y-step title="Waiting" description="This is a description." />
          <y-step title="Waiting" description="This is a description." />
        </y-steps>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html3">
        </code>
    </pre>
    <com-show>
      <y-steps :current="1" status="error">
        <y-step>
          <template slot="title">
            处理完成
          </template>
          <span slot="description">这里是描述内容，内容过长将换行</span>
        </y-step>
        <y-step title="正在处理" sub-title="00:00:08" description="这里是描述内容，内容过长将换行" />
        <y-step title="等待处理" description="这里是描述内容，内容过长将换行" />
      </y-steps>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'Horizontal',
  data() {
    return {
      html3: `<y-steps progress-dot :current="1">
      <y-step title="Finished" description="This is a description." />
      <y-step title="In Progress" description="This is a description." />
      <y-step title="Waiting" description="This is a description." />
    </y-steps>
    <a-divider />
    <y-steps progress-dot :current="1" direction="vertical">
      <y-step title="Finished" description="This is a description. This is a description." />
      <y-step title="Finished" description="This is a description. This is a description." />
      <y-step title="In Progress" description="This is a description. This is a description." />
      <y-step title="Waiting" description="This is a description." />
      <y-step title="Waiting" description="This is a description." />
    </y-steps>`,
      html1: `<y-steps :current="1">
        <y-step>
          <template slot="title">
            处理完成
          </template>
        </y-step>
        <y-step title="正在处理" />
        <y-step title="等待处理" />
      </y-steps>`,
      html2: `<y-steps :current="1" status="error">
        <y-step>
          <template slot="title">
            处理完成
          </template>
          <span slot="description">这里是描述内容，内容过长将换行</span>
        </y-step>
        <y-step title="正在处理" sub-title="00:00:08" description="这里是描述内容，内容过长将换行" />
        <y-step title="等待处理" description="这里是描述内容，内容过长将换行" />
      </y-steps>`,
    };
  },
};
</script>
