<template>
  <div>
    <api-table :data="tableDataInput" title="InputNumber"></api-table>
  </div>
</template>
<script>
export default {
  name: 'inputTable',
  data() {
    return {
      tableDataInput: [
        { params: 'calculator', explain: '计算器模式', type: 'boolean', default: 'false' },
        {
          params: 'autoWidth',
          explain: '默认宽度, 父盒子撑开',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'widthSize',
          explain: '尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种',
          type: 'string',
          default: 'm',
        },
        { params: 'type', explain: '图标类型。遵循图标的命名规范', type: 'string', default: '-' },
        { params: 'style', explain: '设置图标的样式，例如 fontSize 和 color', type: 'string|slot', default: '' },
        {
          params: 'theme',
          explain: '图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标',
          type: 'filled' | 'outlined' | 'twoTone',
          default: 'outlined',
        },
        { params: 'spin', explain: '是否有旋转动画', type: 'boolean', default: 'false	' },
        { params: 'rotate', explain: '图标旋转角度（1.4.0 后新增，IE9 无效）', type: 'number', default: '' },
        {
          params: 'component',
          explain: '控制如何渲染图标，通常是一个渲染根标签为 <svg> 的 Vue 组件，会使 type 属性失效',
          type: 'ComponentType<CustomIconComponentProps>',
          default: '',
        },
        { params: 'twoToneColor', explain: '仅适用双色图标。设置双色图标的主要颜色', type: 'string (十六进制颜色)	', default: '' },
      ],
    };
  },
};
</script>
