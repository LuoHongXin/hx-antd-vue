<template>
  <div>
    <funTitleDetail title="基本用法" detail="基础弹窗结构，支持信息展示或录入"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <div>
        <y-button type="primary" @click="modalVisible = true">打开弹窗</y-button>
        <y-button type="primary" @click="modalVisible2 = true">自定义窗脚弹窗</y-button>
        <y-modal title="标题" :visible="modalVisible" @ok="modalVisible = false" @cancel="modalVisible = false">
          <p style="height:800px;">高度800px的弹窗内容</p>
        </y-modal>
        <y-modal title="标题" :visible="modalVisible2" @cancel="modalVisible2 = false">
          <template slot="footer">
            <y-button type="link" class="foot-left">扩展操作或信息</y-button>
            <y-button @click="modalVisible2 = false">
              取消
            </y-button>
            <y-button @click="modalVisible2 = false">
              上一步
            </y-button>
            <y-button key="submit" type="primary" @click="modalVisible2 = false">
              确定
            </y-button>
          </template>
          <p>弹窗内容</p>
        </y-modal>
      </div>
    </com-show>
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
  name: 'modal2',
  data() {
    return {
      modalVisible: false,
      modalVisible2: false,
      html: `<div>
        <y-button type="primary" @click="modalVisible = true">打开弹窗</y-button>
        <y-button type="primary" @click="modalVisible2 = true">自定义窗脚弹窗</y-button>
        <y-modal title="标题" :visible="modalVisible" @ok="modalVisible = false" @cancel="modalVisible = false">
          <p style="height:800px;">高度800px的弹窗内容</p>
        </y-modal>
        <y-modal title="标题" :visible="modalVisible2" @cancel="modalVisible2 = false">
          <template slot="footer">
            <y-button type="link" class="foot-left">扩展操作或信息</y-button>
            <y-button @click="modalVisible2 = false">
              取消
            </y-button>
            <y-button @click="modalVisible2 = false">
              上一步
            </y-button>
            <y-button key="submit" type="primary" @click="modalVisible2 = false">
              确定
            </y-button>
          </template>
          <p>弹窗内容</p>
        </y-modal>
      </div>`,
      js: ` export default {
            name: 'modal',
            data() {
                return {
                    modalVisible: false,
                    modalVisible2: false,
                    modalMove: true,
                };
            },
        };`,
    };
  },
};
</script>
<style lang="less" scoped>
.fun-show {
  .y-btn {
    margin-right: 8px;
  }
}
</style>
