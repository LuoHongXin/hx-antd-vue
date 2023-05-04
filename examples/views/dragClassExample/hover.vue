<template>
  <div>
    <funTitleDetail title="tooltip 提示" detail="和y-tooltip差不多的效果，可使用于某些插件内指定元素的提示"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show style="position: relative">
      <y-button
        class="static-box"
        v-for="place in [
          'top',
          'left',
          'right',
          'bottom',
          'topLeft',
          'topRight',
          'bottomLeft',
          'bottomRight',
          'leftTop',
          'leftBottom',
          'rightTop',
          'rightBottom',
        ]"
        :ref="place"
        :key="place"
        @mouseover="hover(place)"
      >
        {{ place }}
      </y-button>
      <div class="drag-box" id="tooltip-box"></div>
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

      html: `<com-show style="position: relative">
          <y-button
            class="static-box"
            v-for="place in [
              'top',
              'left',
              'right',
              'bottom',
              'topLeft',
              'topRight',
              'bottomLeft',
              'bottomRight',
              'leftTop',
              'leftBottom',
              'rightTop',
              'rightBottom',
            ]"
            :ref="place"
            :key="place"
            @mouseover="hover(place)"
          >
            {{ place }}
          </y-button>
        <div class="drag-box" id="tooltip-box"></div>
      </com-show>`,
      js: `import { dragClass } from "hx-antd-vue/src/utils/common.js";
            export default {
            data() {
                return {
                drag: null,
            },
            mounted() {
                this.initHoverMove();
            },
            beforeDestroy() {
                this.drag.relMove(); // 解除绑定的拖拽事件
            },
            methods: {
                hover(place) {
                  this.drag.placement = place;
                  this.drag.tooltipTarget = this.$refs[place][0].$el;
                  this.drag.setMove('tooltip');
                },
                initHoverMove() {
                  this.drag = new dragClass({
                    tooltipTarget: document.querySelector('.static-box'), // 滑动展示的元素
                    drageBox: '#tooltip-box', // 悬浮展示的元素
                    type: 'tooltip',
                  });
                },
            },
        };`,
    };
  },
  mounted() {
    this.initHoverMove();
  },
  beforeDestroy() {
    this.drag.relMove(); // 解除绑定的拖拽事件
  },
  methods: {
    hover(place) {
      this.drag.placement = place;
      this.drag.tooltipTarget = this.$refs[place][0].$el;
      this.drag.setMove('tooltip');
    },
    initHoverMove() {
      this.drag = new dragClass({
        tooltipTarget: document.querySelector('.static-box'), // 相对滑动的元素（唯一）
        drageBox: '#tooltip-box', // 被拖拽元素
        type: 'tooltip',
      });
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
.static-box {
  width: 100px;
  height: 30px;
  margin-bottom: 16px;
  border: 1px solid red;
  text-align: center;
}
</style>
