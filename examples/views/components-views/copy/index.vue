<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Copy 复制" detail="采用 vue-clipboard2 的复制" />
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="垂直分隔" detail="下面仅为例子，表格操作需使用 Button 按钮 组件的表格操作按钮" />
    <!-- 组件展示 -->
    <com-show>
      <y-input placeholder="请输入需要复制的文字" v-model="text" style="margin-bottom:16px;" />
      <y-button type="primary" @click="copy">复制{{ text }}</y-button>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-JavaScript" v-text="js">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'Copy',
  data() {
    return {
      text: '',
      html: `<y-input placeholder="请输入需要复制的文字" v-model="text" style="margin-bottom:16px;" />
      <y-button type="primary" @click="copy">复制{{ text }}</y-button>`,
      js: `export default {
            data() {
                return {
                    text: '',
                };
            },
            methods: {
              copy() {
                const _this = this;
                this.$copyText(this.text).then(
                    function(e) {
                        _this.$message.success('文本已复制');
                        console.log('复制成功', e);
                    },
                    function(e) {
                        _this.$message.error('文本复制失败，请手动尝试复制');
                        console.log('复制失败', e);
                    }
                );
              },
            },
        };`,
    };
  },
  methods: {
    copy() {
      const _this = this;
      this.$copyText(this.text).then(
        function(e) {
          _this.$message.success('文本已复制');
          console.log('复制成功', e);
        },
        function(e) {
          _this.$message.error('文本复制失败，请手动尝试复制');
          console.log('复制失败', e);
        }
      );
    },
  },
};
</script>
<style lang="less" scoped></style>
