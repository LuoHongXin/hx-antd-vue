<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Anchor 锚点" detail="用于跳转到页面指定位置。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用场景" :value="declareList" />
    <funTitleDetail id="aaaaa" title="基本" detail="最简单的用法" />
    <!-- 组件展示 -->
    <com-show>
      <y-anchor
        :getContainer="getContainer"
        style="position: fixed;
          right: 10px;
          z-index:10;
          top: 100px;"
      >
        <y-anchor-link href="#aaaaa" title="基本" />
        <y-anchor-link href="#bbbbb" title="静态位置" />
        <y-anchor-link href="#ccccc" title="自定义 click 事件" />
        <y-anchor-link href="#ddddd" title="自定义锚点高亮" />
        <y-anchor-link href="#eeeee" title="监听锚点链接改变" />
        <y-anchor-link href="#ggggg" title="API">
          <y-anchor-link href="#ggggg" title="Anchor API" />
          <y-anchor-link href="#hhhhh" title="Anchor Link API" />
        </y-anchor-link>
      </y-anchor>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-javaScript" v-text="js">
        </code>
    </pre>
    <funTitleDetail id="bbbbb" title="静态位置" detail="不浮动，状态不随页面滚动变化。" />
    <com-show>
      <y-anchor :affix="false">
        <y-anchor-link href="#aaaaa" title="基本" />
        <y-anchor-link href="#bbbbb" title="静态位置" />
        <y-anchor-link href="#ccccc" title="自定义 click 事件" />
        <y-anchor-link href="#ddddd" title="自定义锚点高亮" />
        <y-anchor-link href="#eeeee" title="监听锚点链接改变" />
        <y-anchor-link href="#ggggg" title="API">
          <y-anchor-link href="#ggggg" title="Anchor API" />
          <y-anchor-link href="#hhhhh" title="Anchor Link API" />
        </y-anchor-link>
      </y-anchor>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
    </pre>

    <funTitleDetail id="ccccc" title="自定义 click 事件" />
    <com-show>
      <y-anchor :affix="false" @click="handleClick">
        <y-anchor-link href="#aaaaa" title="基本" />
        <y-anchor-link href="#bbbbb" title="静态位置" />
        <y-anchor-link href="#ccccc" title="自定义 click 事件" />
        <y-anchor-link href="#ddddd" title="自定义锚点高亮" />
        <y-anchor-link href="#eeeee" title="监听锚点链接改变" />
        <y-anchor-link href="#ggggg" title="API">
          <y-anchor-link href="#ggggg" title="Anchor API" />
          <y-anchor-link href="#hhhhh" title="Anchor Link API" />
        </y-anchor-link>
      </y-anchor>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html3">
        </code>
        <code class="language-javaScript" v-text="js3">
        </code>
    </pre>
    <funTitleDetail id="ddddd" title="自定义锚点高亮" />
    <com-show>
      <y-anchor :affix="false" :get-current-anchor="getCurrentAnchor">
        <y-anchor-link href="#aaaaa" title="基本" />
        <y-anchor-link href="#bbbbb" title="静态位置" />
        <y-anchor-link href="#ccccc" title="自定义 click 事件" />
        <y-anchor-link href="#ddddd" title="自定义锚点高亮" />
        <y-anchor-link href="#eeeee" title="监听锚点链接改变" />
        <y-anchor-link href="#ggggg" title="API">
          <y-anchor-link href="#ggggg" title="Anchor API" />
          <y-anchor-link href="#hhhhh" title="Anchor Link API" />
        </y-anchor-link>
      </y-anchor>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html4">
        </code>
        <code class="language-javaScript" v-text="js4">
        </code>
    </pre>
    <funTitleDetail id="eeeee" title="监听锚点链接改变" />
    <com-show>
      <y-anchor :affix="false" @change="onChange">
        <y-anchor-link href="#aaaaa" title="基本" />
        <y-anchor-link href="#bbbbb" title="静态位置" />
        <y-anchor-link href="#ccccc" title="自定义 click 事件" />
        <y-anchor-link href="#ddddd" title="自定义锚点高亮" />
        <y-anchor-link href="#eeeee" title="监听锚点链接改变" />
        <y-anchor-link href="#ggggg" title="API">
          <y-anchor-link href="#ggggg" title="Anchor API" />
          <y-anchor-link href="#hhhhh" title="Anchor Link API" />
        </y-anchor-link>
      </y-anchor>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html5">
        </code>
        <code class="language-javaScript" v-text="js5">
        </code>
    </pre>
    <api-table id="ggggg" title="Anchor API" :data="tableData"></api-table>
    <api-table id="hhhhh" title="Anchor Link API" :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'myAnchor',
  data() {
    return {
      getContainer: () => document.querySelector('.ant-layout-content'),
      declareList: ['需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。'],
      html: `<y-anchor
        :getContainer="getContainer"
        style="position: fixed;
          right: 10px;
          top: 100px;"
      >
        <y-anchor-link href="#aaaaa" title="基本" />
        <y-anchor-link href="#bbbbb" title="静态位置" />
        <y-anchor-link href="#ccccc" title="自定义 click 事件" />
        <y-anchor-link href="#ddddd" title="自定义锚点高亮" />
        <y-anchor-link href="#eeeee" title="监听锚点链接改变" />
        <y-anchor-link href="#ggggg" title="API">
          <y-anchor-link href="#ggggg" title="Anchor API" />
          <y-anchor-link href="#hhhhh" title="Anchor Link API" />
        </y-anchor-link>
      </y-anchor>`,
      html2: `<y-anchor :affix="false">
        <y-anchor-link href="#aaaaa" title="基本" />
        <y-anchor-link href="#bbbbb" title="静态位置" />
        <y-anchor-link href="#ccccc" title="自定义 click 事件" />
        <y-anchor-link href="#ddddd" title="自定义锚点高亮" />
        <y-anchor-link href="#eeeee" title="监听锚点链接改变" />
        <y-anchor-link href="#ggggg" title="API">
          <y-anchor-link href="#ggggg" title="Anchor API" />
          <y-anchor-link href="#hhhhh" title="Anchor Link API" />
        </y-anchor-link>
      </y-anchor>`,
      html3: `<y-anchor :affix="false" @click="handleClick">
        <y-anchor-link href="#aaaaa" title="基本" />
        <y-anchor-link href="#bbbbb" title="静态位置" />
        <y-anchor-link href="#ccccc" title="自定义 click 事件" />
        <y-anchor-link href="#ddddd" title="自定义锚点高亮" />
        <y-anchor-link href="#eeeee" title="监听锚点链接改变" />
        <y-anchor-link href="#ggggg" title="API">
          <y-anchor-link href="#ggggg" title="Anchor API" />
          <y-anchor-link href="#hhhhh" title="Anchor Link API" />
        </y-anchor-link>
      </y-anchor>`,
      html4: `<y-anchor :affix="false" :get-current-anchor="getCurrentAnchor">
        <y-anchor-link href="#aaaaa" title="基本" />
        <y-anchor-link href="#bbbbb" title="静态位置" />
        <y-anchor-link href="#ccccc" title="自定义 click 事件" />
        <y-anchor-link href="#ddddd" title="自定义锚点高亮" />
        <y-anchor-link href="#eeeee" title="监听锚点链接改变" />
        <y-anchor-link href="#ggggg" title="API">
          <y-anchor-link href="#ggggg" title="Anchor API" />
          <y-anchor-link href="#hhhhh" title="Anchor Link API" />
        </y-anchor-link>
      </y-anchor>`,
      html5: `<y-anchor :affix="false" @change="onChange">
        <y-anchor-link href="#aaaaa" title="基本" />
        <y-anchor-link href="#bbbbb" title="静态位置" />
        <y-anchor-link href="#ccccc" title="自定义 click 事件" />
        <y-anchor-link href="#ddddd" title="自定义锚点高亮" />
        <y-anchor-link href="#eeeee" title="监听锚点链接改变" />
        <y-anchor-link href="#ggggg" title="API">
          <y-anchor-link href="#ggggg" title="Anchor API" />
          <y-anchor-link href="#hhhhh" title="Anchor Link API" />
        </y-anchor-link>
      </y-anchor>`,
      js: `data() {
            return {
              getContainer: () => document.querySelector('.ant-layout-content'),
            }
        }`,
      js3: `methods: {
      handleClick(e, link) {
        e.preventDefault();
        console.log(link);
      },
      }
    }`,
      js4: `methods: {
        getCurrentAnchor() {
          return '#ddddd';
        },
      }
    }`,
      js5: `methods: {
        onChange(link) {
          console.log('Anchor:OnChange', link);
        },
      }
    }`,
      tableData: [
        {
          params: 'affix',
          explain: '固定模式，默认根据window吸顶',
          type: 'Boolean',
          default: 'true',
        },
        {
          params: 'getContainer',
          explain: '指定滚动的容器，通常情况下必须指定，否则不会根据滚动高亮',
          type: '() => HTMLElement',
          default: '() => window',
        },
        {
          params: 'offsetBottom',
          explain: '距离窗口底部达到指定偏移量后触发吸顶',
          type: 'number',
          default: '',
        },
        {
          params: 'offsetTop',
          explain: '距离窗口顶部达到指定偏移量后触发吸顶',
          type: 'number',
          default: '',
        },
        {
          params: 'targetOffset',
          explain: '锚点滚动偏移量，默认与 offsetTop 相同，偏移多少触发高亮',
          type: 'number',
          default: 'offsetTop',
        },
        {
          params: 'showInkInFixed',
          explain: '固定模式是否显示小圆点',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'wrapperClass',
          explain: '容器的类名',
          type: 'string',
          default: '',
        },
        {
          params: 'wrapperStyle',
          explain: '容器样式',
          type: 'object',
          default: '-',
        },
        {
          params: 'getCurrentAnchor',
          explain: '自定义高亮的锚点',
          type: '() => string',
          default: '-',
        },
        {
          params: 'click',
          explain: 'click 事件的 handler',
          type: 'Function(e: Event, link: Object)',
          default: '-',
        },
        {
          params: 'change',
          explain: '监听锚点链接改变',
          type: '(currentActiveLink: string) => void',
          default: '-',
        },
      ],
      tableData2: [
        {
          params: 'href',
          explain: '锚点链接，可以是指定元素的类名或id，原理是document.querySelector',
          type: 'string',
          default: '-',
        },
        {
          params: 'title',
          explain: '文字内容',
          type: 'string|slot',
          default: '-',
        },
        {
          params: 'target',
          explain: '该属性指定在何处显示链接的资源。',
          type: 'string',
          default: '-',
        },
      ],
    };
  },
  methods: {
    handleClick(e, link) {
      e.preventDefault();
      console.log(link);
    },
    getCurrentAnchor() {
      return '#ddddd';
    },
    onChange(link) {
      console.log('Anchor:OnChange', link);
    },
  },
};
</script>
<style lang="less" scoped>
.fun-show {
  width: 50%;
}
</style>
