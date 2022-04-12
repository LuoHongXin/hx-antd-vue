<template>
  <div id="components-date-picker-demo">
    <!-- 组件标题和说明 -->
    <title-detail title="RangePicker" detail="区间" />
    <h3 class="fun-title">代码演示</h3>
    <com-show>
      <div>
        <y-range-picker @change="onChange" v-model="value1">
          <template slot="suffixIcon">
            222
          </template>
        </y-range-picker>
        <br />
        <y-range-picker disabled />
        <br />
        <y-range-picker>
          <template slot="dateRender" slot-scope="current, today">
            <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
              {{ current.date() }}
            </div>
          </template>
        </y-range-picker>
        <br />
        <y-range-picker style="width:432px" show-time @change="onChange" @ok="onOk" />
      </div>
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text='`<div>
          <y-range-picker @change="onChange" v-model="value1">
            <template slot="suffixIcon">
              222
            </template>
          </y-range-picker>
          <br />
          <y-range-picker disabled />
          <br />
          <y-range-picker>
            <template slot="dateRender" slot-scope="current, today">
              <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
                {{ current.date() }}
              </div>
            </template>
          </y-range-picker>
          <br />
          <y-range-picker style="width:432px" show-time @change="onChange" @ok="onOk" />
        </div>`'>
        </code>
      </pre>
      <pre class="line-numbers">
          <code class="language-javascript">
            import moment from 'moment';
            export default {
              data() {
                return {
                  value1: [moment('2015-01-01', 'YYYY-MM-DD'), null],
                };
              },
              methods: {
                getCurrentStyle(current) {
                  const style = {};
                  if (current.date() === 1) {
                    style.border = '1px solid #1890ff';
                    style.borderRadius = '50%';
                  }
                  return style;
                },
                onChange(date, dateString) {
                  console.log(date, dateString, this.value);
                },
                onOk(value) {
                  console.log('onOk: ', value);
                },
              },
            };
          </code>
      </pre>
    </com-show>
    <api-table :data="tableData" title="RangePicker API"></api-table>
    <api-table :data="tableDataFn" title="RangePicker 事件 #"></api-table>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'myRangePicker',
  data() {
    return {
      value1: [moment('2015-01-01', 'YYYY-MM-DD'), null],
      tableData: [
        { params: 'defaultValue', explain: '默认日期', type: 'moment', default: '' },
        { params: 'defaultPickerValue', explain: '默认面板日期', type: 'moment', default: '' },
        { params: 'disabledTime', explain: '不可选择的时间', type: 'function(date)', default: '' },
        {
          params: 'format',
          explain: '设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js',
          type: 'string | string[]',
          default: '"YYYY-MM-DD"',
        },
        { params: 'renderExtraFooter', explain: '在面板中添加额外的页脚', type: '	slot="renderExtraFooter" slot-scope="mode"', default: '' },
        {
          params: 'ranges',
          explain: '预设时间范围快捷选择',
          type: '{ [range: string]: moment[] } | { [range: string]: () => moment[] }',
        },
        { params: 'separator', explain: '	设置分隔符', type: 'string', default: '~' },
        { params: 'showTime', explain: '增加时间选择功能', type: 'Object|boolean', default: 'TimePicker Options' },
        { params: 'showTime.defaultValue', explain: '设置用户选择日期时默认的时分秒', type: 'moment', default: 'moment()' },
        { params: 'value(v-model)', explain: '	日期', type: 'moment', default: '' },
      ],
      tableDataFn: [
        {
          params: 'calendarChange',
          explain: '待选日期发生变化的回调',
          type: 'function(dates: [moment, moment] | [string, string], dateStrings: [string, string])',
        },
        {
          params: 'change',
          explain: '时间发生变化的回调，发生在用户选择时间时',
          type: 'function(dates: [moment, moment] | [string, string], dateStrings: [string, string])',
        },
        {
          params: 'ok',
          explain: '点击确定按钮的回调',
          type: 'function(dates: [moment, moment] | [string, string])',
        },
      ],
    };
  },
  methods: {
    getCurrentStyle(current) {
      const style = {};
      if (current.date() === 1) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
      }
      return style;
    },
    onChange(date, dateString) {
      console.log(date, dateString, this.value);
    },
    onOk(value) {
      console.log('onOk: ', value);
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
