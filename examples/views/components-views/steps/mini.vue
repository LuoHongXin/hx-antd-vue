<template>
  <div>
    <funTitleDetail title="迷你" detail="水平展示基础上的简化版，适合页面中单个模块内使用" />
    <declareList :value="declareList" />
    <!-- 组件展示 -->
    <com-show>
      <y-steps size="small" :current="1">
        <y-step>
          <template slot="title">
            处理完成
          </template>
          <a-icon slot="icon" type="user" />
          <span slot="description">这里是描述内容，内容过长将换行</span>
        </y-step>
        <y-step title="正在处理" description="这里是描述内容，内容过长将换行">
          <a-icon slot="icon" type="loading" />
        </y-step>
        <y-step title="等待处理" description="这里是描述内容，内容过长将换行" />
      </y-steps>
      <div style="margin-top:20px"></div>
      <y-steps direction="vertical" size="small" :current="1">
        <y-step>
          <template slot="title">
            处理完成
          </template>
          <a-icon slot="icon" type="user" />
          <span slot="description">这里是描述内容，内容过长将换行</span>
        </y-step>
        <y-step title="正在处理" description="这里是描述内容，内容过长将换行"><a-icon slot="icon" type="loading" /> </y-step>
        <y-step title="等待处理" description="这里是描述内容，内容过长将换行" />
      </y-steps>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>

        <code class="language-html" v-text="html2">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'Vertical',
  data() {
    return {
      declareList: [
        '基于「水平方向」类型补充的类型，样式更简单，尺寸更小。',
        '通常不带描述，仅有标题做简单说明',
        '步骤数可自定义为其他图形',
      ],
      html: `<y-steps size="small" :current="1">
        <y-step>
          <template slot="title">
            处理完成
          </template>
          <a-icon slot="icon" type="user" />
          <span slot="description">这里是描述内容，内容过长将换行</span>
        </y-step>
        <y-step title="正在处理" description="这里是描述内容，内容过长将换行">
          <a-icon slot="icon" type="loading" />
        </y-step>
        <y-step title="等待处理" description="这里是描述内容，内容过长将换行" />
      </y-steps>`,
      html2: `<y-steps direction="vertical" size="small" :current="1">
        <y-step>
          <template slot="title">
            处理完成
          </template>
          <a-icon slot="icon" type="user" />
          <span slot="description">这里是描述内容，内容过长将换行</span>
        </y-step>
        <y-step title="正在处理" description="这里是描述内容，内容过长将换行"><a-icon slot="icon" type="loading" /> </y-step>
        <y-step title="等待处理" description="这里是描述内容，内容过长将换行" />
      </y-steps>`,
    };
  },
};
</script>
