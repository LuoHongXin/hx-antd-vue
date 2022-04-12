<template>
  <div>
    <funTitleDetail title="缩起内嵌菜单" detail="内嵌菜单可以被缩起/展开。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-card title="Card Title">
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center" :hoverable="false">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
      </y-card>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'myCard2',
  data() {
    return {
      html: `<y-card title="Card Title">
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center" :hoverable="false">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
        <y-card-grid style="width:25%;text-align:center">
          Content
        </y-card-grid>
      </y-card>`,
    };
  },
};
</script>
