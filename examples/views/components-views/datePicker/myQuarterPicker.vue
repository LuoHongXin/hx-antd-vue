<template>
  <div id="components-date-picker-demo">
    <!-- 组件标题和说明 -->
    <title-detail title="季度选择器" detail="" />
    <h3 class="fun-title">代码演示</h3>
    <com-show>
      <div>
        <y-quarter-picker placeholder="请选择季度" @change="onChange" />
        <p></p>
        <p>默认值</p>
        <y-quarter-picker placeholder="请选择季度" v-model="value" />
        <p></p>
        <p>中文</p>
        <y-quarter-picker placeholder="请选择季度" patternChina />
      </div>
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text='`<div>
          <y-quarter-picker placeholder="请选择季度" @change="onChange" />
          <p>默认值</p>
          <y-quarter-picker placeholder="请选择季度" v-model="value" />
          <p>中文</p>
          <y-quarter-picker placeholder="请选择季度" patternChina />
        </div>`'>
        </code>
      </pre>
      <pre class="line-numbers">
          <code class="language-javascript">
            export default {
              data() {
                return {
                  value: "2002-Q1",
                }
              },
              methods: {
                onChange(date) {
                  console.log(date);
                },
              },
            };
          </code>
      </pre>
    </com-show>
    <api-table :data="tableData" title="QuarterPicker API"></api-table>
    <api-table :data="tableDataFn" title="QuarterPicker 事件 #"></api-table>
  </div>
</template>

<script>
export default {
  name: 'myWeekPicker',
  data() {
    return {
      tableData: [
        {
          params: 'patternChina',
          explain: '显示中文 例如 第一季度，第二季度',
          type: 'Boolean',
          default: 'false',
        },
        {
          params: 'getPopupContainer',
          explain: '默认渲染body上',
          type: 'Function(triggerNode)',
          default: '() => document.body',
        },
        {
          params: 'value(v-model)',
          type: 'String',
          default: '',
        },
        {
          params: 'placeholder',
          explain: '选择框默认文字',
          type: 'string',
          default: '',
        },
        {
          params: 'emptyScene',
          explain: '无状态显示见empty组件',
          type: 'String | slot',
          default: '',
        },
        {
          params: 'widthSize',
          explain: '尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种',
          type: 'string',
          default: 's',
        },
        {
          params: 'autoWidth',
          explain: '默认宽度, 父盒子撑开',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'dropdownStyle',
          explain: '下拉菜单的 style 属性',
          type: 'Object',
          default: '',
        },
        {
          params: 'dropdownClassName',
          explain: '下拉菜单的 className 属性',
          type: 'String',
          default: '',
        },
      ],
      tableDataFn: [
        {
          params: 'change',
          explain: '时间发生变化的回调，发生在用户选择时间时',
          type: 'function(value)',
        },
      ],
      value: '2002-Q1',
    };
  },
  methods: {
    onChange(date) {
      console.log(date);
    },
  },
};
</script>
<style scoped lang="less">
#components-date-picker-demo {
  .ant-calendar-picker {
    margin: 0 8px 12px 0;
  }
}
</style>
