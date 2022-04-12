<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Tooltip 文字提示" detail="简单的文字提示气泡框。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <!-- 组件展示 -->
    <com-show>
      <div class="tooltip-box">
        <y-tooltip
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
          :key="place"
          :placement="place"
        >
          <template slot="title">
            <span>{{ place }} text</span>
          </template>
          <y-button>{{ place }}</y-button>
        </y-tooltip>
      </div>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Mytooltip',
  components: {},
  data() {
    return {
      html: `<y-tooltip
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
          :key="place"
          :placement="place"
        >
          <template slot="title">
            <span>{{ place }} text</span>
          </template>
          <y-button>{{ place }}</y-button>
        </y-tooltip>`,
      declareList: ['鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。'],
      tableData: [
        {
          params: 'title',
          explain: '提示文字',
          type: 'string|slot',
          default: '',
        },
        {
          params: 'arrowPointAtCenter',
          explain: '箭头是否指向目标元素中心',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'defaultVisible',
          explain: '默认是否显隐',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'getPopupContainer',
          explain: '浮层渲染父节点，默认渲染到绑定元素上',
          type: 'Function(triggerNode)',
          default: 'triggerNode => triggerNode || document.body,',
        },
        {
          params: 'mouseEnterDelay',
          explain: '鼠标移入后延时多少才显示 Tooltip，单位：秒',
          type: 'number',
          default: '0',
        },
        {
          params: 'mouseLeaveDelay',
          explain: '鼠标移出后延时多少才隐藏 Tooltip，单位：秒',
          type: 'number',
          default: '0.1',
        },
        {
          params: 'overlayClassName',
          explain: '卡片类名',
          type: 'string',
          default: '',
        },
        {
          params: 'overlayStyle',
          explain: '卡片样式',
          type: 'object',
          default: 'false',
        },
        {
          params: 'placement',
          explain: '气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom',
          type: 'string',
          default: 'top',
        },
        {
          params: 'trigger',
          explain: '触发行为，可选 hover/focus/click/contextmenu',
          type: 'string',
          default: 'hover',
        },
        {
          params: 'visible(v-model)',
          explain: '用于手动控制浮层显隐',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'destroyTooltipOnHide',
          explain: '隐藏后是否销毁 tooltip',
          type: 'boolean',
          default: 'false',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.tooltip-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .y-tooltip {
    margin: 0 80px 60px 0;
  }
}
</style>
