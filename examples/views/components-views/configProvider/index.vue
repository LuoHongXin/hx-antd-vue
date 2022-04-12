<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail
      title="ConfigProvider 全局化配置"
      detail="为组件提供统一的全局化配置。ConfigProvider 使用 Vue 的 provide / inject 特性，只需在应用外围包裹一次即可全局生效。"
    />
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="默认渲染节点" detail="弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。" />
    <!-- 组件展示 -->
    <!-- <com-show> </com-show> -->
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-JavaScript" v-text="js">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'ConfigProvider',
  data() {
    return {
      text: '',
      html: `<y-config-provider :getPopupContainer="getPopupContainer">
        <app />
      </y-config-provider>`,
      js: `methods: {
        getPopupContainer(el, dialogContext) {
          if (dialogContext) {
            return dialogContext.getDialogWrap();
          } else {
            return document.body;
          }
        },
      },`,
      tableData: [
        {
          params: 'autoInsertSpaceInButton',
          explain: '设置为 false 时，移除按钮中 2 个汉字之间的空格',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'dropdownMatchSelectWidth',
          explain: '下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动',
          type: 'boolean | number',
          default: '-',
        },
        {
          params: 'form',
          explain: '设置 Form 组件的通用属性',
          type: '	{ validateMessages?: ValidateMessages, requiredMark?: boolean | optional, colon?: boolean}',
          default: '-',
        },
        {
          params: 'getPopupContainer',
          explain: '弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。',
          type: 'Function(triggerNode, dialogContext)',
          default: '() => document.body',
        },
        {
          params: 'getTargetContainer',
          explain: '配置 Affix、Anchor 滚动监听容器。	',
          type: '	() => HTMLElement',
          default: '() => window',
        },
        {
          params: 'autoInsertSpaceInButton',
          explain: '设置为 false 时，移除按钮中 2 个汉字之间的空格',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'input',
          explain: '设置 Input 组件的通用属性',
          type: '	{ autocomplete?: string }',
          default: '-',
        },
        {
          params: 'locale',
          explain: '语言包配置，语言包可到 ant-design-vue/es/locale 目录下寻找',
          type: 'object',
          default: '-',
        },
        {
          params: 'renderEmpty',
          explain: '自定义组件空状态。参考 空状态',
          type: 'slot | Function(componentName: string): VNode',
          default: '-',
        },
        {
          params: 'space',
          explain: '	设置 Space 的 size，参考 Space',
          type: '{ size: small | middle | large | number }',
          default: 'true',
        },
      ],
    };
  },
  methods: {
    getPopupContainer(el, dialogContext) {
      if (dialogContext) {
        return dialogContext.getDialogWrap();
      } else {
        return document.body;
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
