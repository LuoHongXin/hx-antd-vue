<template>
  <div class="testDemo">
    <draggable
      class="component-list"
      :group="{ name: 'componentDrag', pull: 'clone' }"
      :sort="false"
      animation="300"
      draggable=".component-item"
      @end="handleEnd"
      v-model="comList"
      :clone="cloneComponent"
    >
      <div v-for="(element, index) in comList" :key="index" class="component-item">
        {{ element.title }}
      </div>
    </draggable>
    <draggable class="content-list" group="componentDrag" animation="400" v-model="drawList">
      <div v-for="(com, index) in drawList" :key="index" :style="{ width: com.config.w + 'px', height: com.config.h + 'px' }">
        <vue-drag-resize
          :x="parseFloat(com.config.x)"
          :y="parseFloat(com.config.y)"
          :w="parseFloat(com.config.w)"
          :h="parseFloat(com.config.h)"
          @resizestop="handleResizeStop($event, com)"
          @dragstop="handleDragStop($event, com)"
        >
          <component :is="com.componentName">{{ com.title }}</component>
        </vue-drag-resize>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import vueDragResize from 'vue-drag-resize';
export default {
  components: {
    draggable,
    vueDragResize,
  },
  data() {
    return {
      comList: [
        {
          title: '按钮',
          componentName: 'yButton',
          id: new Date().getTime(),
          config: {
            w: 64,
            h: 32,
            x: 0,
            y: 0,
          },
        },
        {
          title: '标签',
          componentName: 'yTag',
          id: new Date().getTime(),
          config: {
            w: 150,
            h: 150,
            x: 0,
            y: 0,
          },
        },
      ],
      currentMove: {},
      drawList: [],
    };
  },
  methods: {
    //拖动盒子自适应
    handleResizeStop(e, val) {
      val.w = e.width;
      val.h = e.height;
    },

    //拖拽移动停止
    handleDragStop(e, val) {
      val.x = e.left;
      val.t = e.top;
    },
    //点击左侧拖动克隆当前盒子,记录当前盒子的属性，也可直接记录index
    cloneComponent(e) {
      this.currentMove = {
        id: 'box_' + new Date().getTime(),
        ...e,
      };
    },

    //拖动盒子到右边画布结束
    handleEnd(e) {
      console.log(e, 'handleEnd');
      // const { newIndex } = e;
      //这里的drawList是右边画布的list
      this.drawList.push({
        ...this.currentMove,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.testDemo {
  display: flex;
  width: 100%;
  height: 100%;
  .component-list {
    width: 100px;
  }
  .content-list {
    flex: 1;
    background-color: #fff;
  }
}
.component-item {
  width: 50px;
  height: 30px;
  border: 1px solid #000;
}
</style>
