<template>
  <div id="components-date-picker-demo">
    <!-- 组件标题和说明 -->
    <title-detail title="MonthPicker" detail="" />
    <h3 class="fun-title">代码演示</h3>
    <com-show>
      <div>
        <y-month-picker placeholder="Select month" @change="onChange" />
        <br />
        <y-month-picker placeholder="Select month" disabled />
        <br />
        <y-month-picker :disabled-date="disabledDate" placeholder="Select month" />
        <br />
        <y-month-picker placeholder="Select month">
          <template slot="renderExtraFooter">
            extra footer
          </template>
        </y-month-picker>
      </div>
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text='`<div>
          <y-month-picker placeholder="Select month" @change="onChange" />
          <br />
          <y-month-picker placeholder="Select month" disabled />
          <br />
          <y-month-picker :disabled-date="disabledDate" placeholder="Select month" />
          <br />
          <y-month-picker placeholder="Select month">
            <template slot="renderExtraFooter">
              extra footer
            </template>
          </y-month-picker>
        </div>`'>
        </code>
      </pre>
      <pre class="line-numbers">
          <code class="language-javascript">
            export default {
              methods: {
                onChange(date, dateString) {
                  console.log(date, dateString, this.value);
                },
              },
            };
          </code>
      </pre>
    </com-show>
    <api-table :data="tableData" title="MonthPicker API"></api-table>
    <api-table :data="tableDataFn" title="MonthPicker 事件 #"></api-table>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'myMonthPicker',
  data() {
    return {
      tableData: [
        { params: 'defaultValue', explain: '默认日期', type: 'moment', default: '' },
        { params: 'defaultPickerValue', explain: '默认面板日期', type: 'moment', default: '' },
        {
          params: 'monthCellContentRender',
          explain: '自定义的月份内容渲染方法',
          type: 'slot="monthCellContentRender" slot-scope="date, locale"',
          default: '',
        },
        {
          params: 'format',
          explain: '设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js',
          type: 'string | string[]',
          default: '"YYYY-MM-DD"',
        },
        { params: 'renderExtraFooter', explain: '在面板中添加额外的页脚', type: '	slot="renderExtraFooter" slot-scope="mode"', default: '' },
        { params: 'value(v-model)', explain: '	日期', type: 'moment', default: '' },
      ],
      tableDataFn: [
        {
          params: 'change',
          explain: '时间发生变化的回调，发生在用户选择时间时',
          type: 'function(date: moment | string, dateString: string)',
        },
      ],
    };
  },
  methods: {
    disabledDate(current) {
      return current && current < moment().endOf('day');
    },
    onChange(date, dateString) {
      console.log(date, dateString, this.value);
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
