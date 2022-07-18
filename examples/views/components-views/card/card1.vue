<template>
  <div>
    <funTitleDetail title="典型卡片" detail="垂直菜单，子菜单内嵌在菜单区域。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-card size="small" title="Small size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </y-card>
      <div style="margin-top:30px"></div>
      <y-card size="small" :titleBorderBottom="false" style="width: 500px;height:300px" :hoverable="true">
        <a slot="extra" href="#">more</a>
        <div slot="title" class="handleFlex">我是插槽分发的标题我是</div>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </y-card>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html1">
        </code>
    </pre>
    <funTitleDetail title="内嵌卡片" detail="垂直菜单，子菜单内嵌在菜单区域。"></funTitleDetail>

    <com-show>
      <y-card title="Card title">
        <p style="fontSize: 14px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500">
          Group title
        </p>
        <y-card title="Inner card title">
          <a slot="extra" href="#">More</a>
          Inner Card content
        </y-card>
        <y-card title="Inner card title" :style="{ marginTop: '16px' }">
          <a slot="extra" href="#">More</a>
          Inner Card content
        </y-card>
      </y-card>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
    </pre>
    <funTitleDetail title="卡片loading" detail="垂直菜单，子菜单内嵌在菜单区域。"></funTitleDetail>
    <com-show>
      <y-card :loading="loading" size="small" title="Small size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </y-card>
      <a-button style="marginTop: 16px" @click="handleClick">
        Toggle loading
      </a-button>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html3">
        </code>
        <code class="language-JavaScript" v-text="js3">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'myCard1',
  data() {
    return {
      html1: `<y-card size="small" title="Small size card" style="width: 300px;height:300px;">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </y-card>

        <y-card size="small" :titleBorderBottom="false" style="width: 500px;height:300px" :hoverable="true">
        <a slot="extra" href="#">more</a>
        <div slot="title">我是插槽分发的标题</div>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </y-card>
      `,
      html2: `<y-card title="Card title">
        <p style="fontSize: 14px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500">
          Group title
        </p>
        <y-card title="Inner card title">
          <a slot="extra" href="#">More</a>
          Inner Card content
        </y-card>
        <y-card title="Inner card title" :style="{ marginTop: '16px' }">
          <a slot="extra" href="#">More</a>
          Inner Card content
        </y-card>
      </y-card>`,
      html3: `<y-card :loading="loading" size="small" title="Small size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </y-card>
      <a-button style="marginTop: 16px" @click="handleClick">
        Toggle loading
      </a-button>`,
      js3: `export default {
          data() {
            return {
              loading: true,
            };
          },
          methods: {
            handleClick() {
              this.loading = !this.loading;
            },
          },
        };`,
      loading: true,
    };
  },
  methods: {
    handleClick() {
      this.loading = !this.loading;
    },
  },
};
</script>
<style lang="less" scoped>
.handleFlex {
  display: flex;
}
</style>
