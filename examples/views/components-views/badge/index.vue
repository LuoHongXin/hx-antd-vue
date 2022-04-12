<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Badge 徽标" detail="以徽标形式承载数字/符号信息。" />
    <declareList :value="declareList" />
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="数字徽标" detail="需要准确计数的场景" />
    <declareList :value="declareList2" />
    <!-- 组件展示 -->
    <com-show>
      <y-badge count="8"><a-icon class="head-example" type="bell"/></y-badge>
      <y-badge count="999"><a-icon class="head-example" style="width:60px;" type="bell"/></y-badge>
      <y-badge :count="count" :offset="[20, 6]"><span>文本</span></y-badge>
      <a-button-group>
        <a-button @click="count--">
          <a-icon type="minus" />
        </a-button>
        <a-button @click="count++">
          <a-icon type="plus" />
        </a-button>
      </a-button-group>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <funTitleDetail title="点徽标" detail="无需准确计数，仅做提醒的场景" />
    <declareList :value="declareList3" />
    <!-- 组件展示 -->
    <com-show>
      <y-badge :dot="show"><a-icon class="head-example" type="bell"/></y-badge>
      <y-badge status="success"><a-icon class="head-example" type="bell"/></y-badge>
      <y-badge status="error"><span>文本</span></y-badge>
      <y-badge status="warning"><a-icon class="head-example" type="bell"/></y-badge>
      <a-switch v-model="show" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'badge',
  data() {
    return {
      show: true,
      count: 99,
      declareList: [
        '一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户关注和处理',
        '作为一个链接，快速查看详情的入口',
        '代表事件的状态，让用户提前知道事件的进展情况',
      ],
      declareList2: ['数字本身不宜过大，建议超过 99，则显示 99+'],
      declareList3: [
        '徽标中无具体数字显示，只出现红色小点，为了吸引用户注意，了解到有未读信息/未处理的任务。',
        '徽标的颜色代表着任务的状态，例如成功（绿色），失败（红色），警告（黄色）；徽标作为状态标，可单独使用。',
      ],
      html: `<y-badge count="8"><a-icon class="head-example" type="bell"/></y-badge>
      <y-badge count="999"><a-icon class="head-example" style="width:60px;" type="bell"/></y-badge>
      <y-badge count="9" :offset="[14, 6]"><span>文本</span></y-badge>`,
      html2: `<y-badge :dot="show"><a-icon class="head-example" type="bell"/></y-badge>
      <y-badge status="success"><a-icon class="head-example" type="bell"/></y-badge>
      <y-badge status="error"><span>文本</span></y-badge>
      <y-badge status="warning"><a-icon class="head-example" type="bell"/></y-badge>
      <a-switch v-model="show" />`,
      tableData: [
        {
          params: 'color',
          explain: '自定义小圆点的颜色',
          type: 'string',
        },
        {
          params: 'count',
          explain: '展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏',
          type: 'number | string | slot',
        },
        {
          params: 'dot',
          explain: '不展示数字，只有一个小红点',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'offset',
          explain: '设置状态点的位置偏移，格式为 [x, y]',
          type: '[number|string, number|string]',
        },
        {
          params: 'overflowCount',
          explain: '展示封顶的数字值',
          type: 'number',
          default: '99',
        },
        {
          params: 'showZero',
          explain: '当数值为 0 时，是否展示 Badge',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'status',
          explain: '设置 Badge 为状态点',
          type: "'success', 'processing, 'default', 'error', 'warning'",
          default: '',
        },
        {
          params: 'text',
          explain: '在设置了 status 的前提下有效，设置状态点的文本',
          type: 'string',
          default: '',
        },
        {
          params: 'numberStyle',
          explain: '设置状态点的样式',
          type: 'object',
          default: '',
        },
        {
          params: 'title',
          explain: '设置鼠标放在状态点上时显示的文字',
          type: 'string',
          default: 'count',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.ant-badge {
  margin-right: 50px;
}
.head-example {
  font-size: 40px;
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}
</style>
