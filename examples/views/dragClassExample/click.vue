<template>
  <div>
    <funTitleDetail title="点击拖拽" detail="点击目标元素后，按住鼠标拖拽，松开鼠标接触拖拽"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show id="box-show" style="position: relative; height: 500px">
      <div class="drag-box" id="click-box"></div>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html"  v-text="html">
        </code>
         <code class="language-javaScript" v-text="js">
        </code>
    </pre>
  </div>
</template>
<script>
import { dragClass } from '@src/utils/common.js';

export default {
  data() {
    return {
      drag: null,
      html: `<com-show id="box-show" style="position: relative; height: 500px">
        <div class="drag-box" id="click-box"></div>
      </com-show>`,
      js: `import { dragClass } from "hx-antd-vue/src/utils/common.js";
            export default {
            data() {
                return {
                drag: null,
            },
            mounted() {
                this.initClickMove();
            },
            beforeDestroy() {
                this.drag.relMove(); // 解除绑定的拖拽事件
            },
            methods: {
                initClickMove() {
                this.drag = new dragClass({
                    eventTarget: document.querySelector('#box-show'), // 相对拖拽的元素（唯一）
                    trigerArr: ['drag-box'], // 触发拖拽元素类名
                    drageBox: "#click-box", // 被拖拽元素
                });
                this.drag.setMove();
                },
            },
        };`,
    };
  },
  mounted() {
    this.initClickMove();
  },
  beforeDestroy() {
    this.drag.relMove(); // 解除绑定的拖拽事件
  },
  methods: {
    initClickMove() {
      this.drag = new dragClass({
        eventTarget: document.querySelector('#box-show'), // 相对拖拽的元素（唯一）
        trigerArr: ['drag-box'], // 触发拖拽元素类名
        drageBox: '#click-box', // 被拖拽元素
      });
      this.drag.setMove();
    },
  },
};
</script>
<style lang="less" scoped>
.drag-box {
  width: 200px;
  height: 100px;
  border: 3px solid #000;
}
</style>
