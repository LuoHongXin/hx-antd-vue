<template>
  <div id="components-date-picker-demo">
    <!-- 组件标题和说明 -->
    <title-detail title="WeekPicker" detail="" />
    <h3 class="fun-title">代码演示</h3>
    <com-show>
      <div>
        <y-week-picker placeholder="Select week" @change="onChange" />
        <br />
        <y-week-picker placeholder="Select week" disabled />
        <br />
        <y-week-picker placeholder="Select week" @change="onChange">
          <a-icon slot="suffixIcon" type="smile" />
        </y-week-picker>
        <br />
        <y-week-picker>
          <template slot="dateRender" slot-scope="current">
            <div class="ant-calendar-date" :style="getCurrentStyle(current)">
              {{ current.date() }}
            </div>
          </template>
        </y-week-picker>
      </div>
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text='`<div>
          <y-week-picker placeholder="Select week" @change="onChange" />
          <br />
          <y-week-picker placeholder="Select week" disabled />
          <br />
          <y-week-picker placeholder="Select week" @change="onChange">
            <a-icon slot="suffixIcon" type="smile" />
          </y-week-picker>
          <br />
          <y-week-picker>
            <template slot="dateRender" slot-scope="current">
              <div class="ant-calendar-date" :style="getCurrentStyle(current)">
                {{ current.date() }}
              </div>
            </template>
          </y-week-picker>
        </div>`'>
        </code>
      </pre>
      <pre class="line-numbers">
          <code class="language-javascript">
            export default {
              methods: {
                getCurrentStyle(current) {
                  console.log(current, 123);
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
              },
            };
          </code>
      </pre>
    </com-show>
    <api-table :data="tableData" title="WeekPicker API"></api-table>
    <api-table :data="tableDataFn" title="WeekPicker 事件 #"></api-table>
  </div>
</template>

<script>
export default {
  name: 'myWeekPicker',
  data() {
    return {
      tableData: [
        { params: 'defaultValue', explain: '默认日期', type: 'moment', default: '' },
        { params: 'defaultPickerValue', explain: '默认面板日期', type: 'moment', default: '' },
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
