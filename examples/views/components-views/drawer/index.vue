<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Drawer 抽屉" detail="屏幕边缘滑出的浮层面板。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <funTitleDetail title="基础" detail="最常用的类型"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-select style="width: 100px;margin-right:24px;" v-model="placement" :options="options" />
      <y-button type="primary" @click="visible = true">
        打开抽屉
      </y-button>
      <y-drawer title="基础抽屉" :placement="placement" :visible="visible" @close="onClose('visible')">
        <p v-for="i in 100" :key="i">Some contents{{ i }}...</p>
        <div slot="footer" style="text-align:right">
          <y-button @click="visible = false"> 取消 </y-button>
          <y-button type="primary" @click="visible = false">
            确定
          </y-button>
        </div>
      </y-drawer>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-JavaScript">
        data() {
            return {
                visible: false,
                placement: 'right',
                options: [
                    { label: '右方向', value: 'right' },
                    { label: '上方向', value: 'top' },
                    { label: '下方向', value: 'bottom' },
                    { label: '左方向', value: 'left' },
                ],
            }
        },
        methods: {
            onClose(v) {
                this[v] = false;
            },
        },
        </code>
    </pre>
    <funTitleDetail title="层级" detail="内部信息量大，结构复杂，需要进入二级抽屉。"></funTitleDetail>
    <com-show>
      <y-button type="primary" @click="visible1 = true">
        打开抽屉1
      </y-button>
      <y-drawer title="层级抽屉1" placement="right" :visible="visible1" @close="onClose('visible1')">
        <y-button type="primary" @click="visible2 = true">
          打开抽屉2
        </y-button>
        <y-drawer title="层级抽屉2" placement="right" size="s" :visible="visible2" @close="onClose('visible2')">
          <p v-for="i in 100" :key="i">Some contents{{ i }}...</p>
        </y-drawer>
        <div slot="footer" style="text-align:right">
          <y-button @click="visible1 = false"> 取消 </y-button>
          <y-button type="primary" @click="visible1 = false">
            确定
          </y-button>
        </div>
      </y-drawer>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-JavaScript">
        data() {
            return {
                visible1: false,
                visible2: false,
            }
        },
        methods: {
            onClose(v) {
                this[v] = false;
            },
        },
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Mydrawer',
  data() {
    return {
      placement: 'right',
      options: [
        { label: '右方向', value: 'right' },
        { label: '上方向', value: 'top' },
        { label: '下方向', value: 'bottom' },
        { label: '左方向', value: 'left' },
      ],
      visible: false,
      visible1: false,
      visible2: false,
      html: `<y-select style="width: 100px;margin-right:24px;" v-model="placement" :options="options" />
      <y-button type="primary" @click="visible = true">
        打开抽屉
      </y-button>
      <y-drawer title="基础抽屉" :placement="placement" :visible="visible" @close="onClose('visible')">
        <p v-for="i in 100" :key="i">Some contents{{ i }}...</p>
        <div slot="footer" style="text-align:right">
          <y-button @click="visible = false"> 取消 </y-button>
          <y-button type="primary" @click="visible = false">
            确定
          </y-button>
        </div>
      </y-drawer>`,
      html2: `<y-button type="primary" @click="visible1 = true">
        打开抽屉1
      </y-button>
      <y-drawer title="层级抽屉1" placement="right" :visible="visible1" @close="onClose('visible1')">
        <y-button type="primary" @click="visible2 = true">
          打开抽屉2
        </y-button>
        <y-drawer title="层级抽屉2" placement="right" size="s" :visible="visible2" @close="onClose('visible2')">
          <p v-for="i in 100" :key="i">Some contents{{ i }}...</p>
        </y-drawer>
        <div slot="footer" style="text-align:right">
          <y-button @click="visible1 = false"> 取消 </y-button>
          <y-button type="primary" @click="visible1 = false">
            确定
          </y-button>
        </div>
      </y-drawer>`,
      declareList: [
        '抽屉的宽度是规定的，有 xs、s、m、l、xl、xxl六种size，根据开发时的需要从中选择一个size，而不是随意设置宽度',
        '用户可点击抽屉外的遮罩来关闭抽屉；除此之外，抽屉还需要独立的「关闭」入口',
        '需要克制地使用，尽量避免在抽屉中唤起另一层抽屉；承载的内容应该有所克制，尽量控制在一屏内，繁重的操作和密集的信息更适合设计为独立的页面',
        '抽屉中的操作要非常明确，用户可以快速做出选择，并继续回到上一个流程中去。',
      ],
      tableData: [
        {
          params: 'closable',
          explain: '是否显示右上角的关闭按钮',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'destroyOnClose',
          explain: '关闭时销毁 Drawer 里的子元素',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'getContainer',
          explain: '指定 Drawer 挂载的 HTML 节点',
          type: 'HTMLElement | () => HTMLElement | Selectors',
          default: 'body',
        },
        {
          params: 'maskClosable',
          explain: '点击蒙层是否允许关闭',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'mask',
          explain: '是否展示遮罩',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'maskStyle',
          explain: '遮罩样式',
          type: 'object',
          default: '{}',
        },
        {
          params: 'title',
          explain: '标题',
          type: 'string | slot',
          default: '',
        },
        {
          params: 'visible',
          explain: 'Drawer 是否可见',
          type: 'boolean',
          default: '',
        },
        {
          params: 'wrapClassName',
          explain: '对话框外层容器的类名',
          type: 'string',
          default: '',
        },
        {
          params: 'wrapStyle',
          explain: '可用于设置 Drawer 最外层容器的样式，和 drawerStyle 的区别是作用节点包括 mask',
          type: 'object',
          default: '',
        },
        {
          params: 'drawerStyle',
          explain: '用于设置 Drawer 弹出层的样式',
          type: 'object',
          default: '',
        },
        {
          params: 'headerStyle',
          explain: '用于设置 Drawer 头部的样式',
          type: 'object',
          default: '',
        },
        {
          params: 'bodyStyle',
          explain: '可用于设置 Drawer 内容部分的样式',
          type: 'object',
          default: '',
        },
        {
          params: 'size',
          explain: '尺寸,左右抽屉，尺寸针对宽度有 xs、s、m、l、xl、xxl六种，上下抽屉，尺寸针对高度只有五种s、m、l、xl、xxl',
          type: 'string',
          default: 'm',
        },
        {
          params: 'zIndex',
          explain: '设置 Drawer 的 z-index',
          type: 'Number',
          default: '1000',
        },
        {
          params: 'placement',
          explain: '抽屉的方向',
          type: "'top' | 'right' | 'bottom' | 'left'",
          default: 'right',
        },
        {
          params: 'handle',
          explain: '设置后抽屉直接挂载到 DOM 上，你可以通过该 handle 控制抽屉打开关闭',
          type: 'VNode | slot',
          default: '',
        },
        {
          params: 'afterVisibleChange',
          explain: '切换抽屉时动画结束后的回调',
          type: 'function(visible)',
          default: '',
        },
        {
          params: 'keyboard',
          explain: '是否支持键盘 esc 关闭',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'close',
          explain: '点击遮罩层或右上角叉或取消按钮的回调',
          type: 'function(e)',
          default: '',
        },
      ],
    };
  },
  methods: {
    onClose(v) {
      this[v] = false;
    },
  },
};
</script>
<style lang="less" scoped></style>
