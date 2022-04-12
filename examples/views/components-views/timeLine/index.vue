<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Timeline 时间轴" detail="以时间为主逻辑展示连续性信息。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <funTitleDetail title="垂直" detail="适合高度不受限制的场景" />
    <!-- 组件展示 -->
    <com-show>
      <y-time-line v-for="mode in ['left', 'right', 'alternate']" :key="mode" :mode="mode">
        <a-timeline-item color="green">
          <p class="y-timeline-item-title">执行成功</p>
          <p class="y-timeline-item-time">2015-09-01</p>
          <p class="y-timeline-item-description">这里是一段很长很长很长的会换行的描述信息</p>
        </a-timeline-item>
        <a-timeline-item color="red">
          <p class="y-timeline-item-title">执行失败</p>
          <p class="y-timeline-item-time">2015-09-01</p>
        </a-timeline-item>
        <a-timeline-item>
          <p class="y-timeline-item-title">正在执行中</p>
          <p class="y-timeline-item-time">2015-09-01</p>
        </a-timeline-item>
        <a-timeline-item color="gray">
          <p class="y-timeline-item-title">等待执行</p>
          <p class="y-timeline-item-time">2015-09-01</p>
        </a-timeline-item>
      </y-time-line>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
    <api-table title="Timeline.Item API" :data="tableData2"></api-table>
  </div>
</template>
<script>
export default {
  name: 'MytimeLine',
  components: {},
  data() {
    return {
      html: `<y-time-line v-for="mode in ['left', 'right', 'alternate']" :key="mode" :mode="mode">
        <a-timeline-item color="green">
          <p class="y-timeline-item-title">执行成功</p>
          <p class="y-timeline-item-time">2015-09-01</p>
          <p class="y-timeline-item-description">这里是一段很长很长很长的会换行的描述信息</p>
        </a-timeline-item>
        <a-timeline-item color="red">
          <p class="y-timeline-item-title">执行失败</p>
          <p class="y-timeline-item-time">2015-09-01</p>
        </a-timeline-item>
        <a-timeline-item>
          <p class="y-timeline-item-title">正在执行中</p>
          <p class="y-timeline-item-time">2015-09-01</p>
        </a-timeline-item>
        <a-timeline-item color="gray">
          <p class="y-timeline-item-title">等待执行</p>
          <p class="y-timeline-item-time">2015-09-01</p>
        </a-timeline-item>
      </y-time-line>`,
      declareList: [
        '随时间推移，时间结点数逐渐增多，直至流程全部结束。',
        '准确地给用户传递时间维度',
        '用户能清楚的获取时间信息，并了解当且进程状态：进行中，还是已完成',
        '时间轴可正序可倒序，一般为倒序，即最新时间在最前',
      ],
      tableData: [
        {
          params: 'reverse',
          explain: '节点排序',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'mode',
          explain: '通过设置 mode 可以改变时间轴和内容的相对位置',
          type: 'left | alternate | right',
          default: '',
        },
      ],
      tableData2: [
        {
          params: 'color',
          explain: '指定圆圈颜色 blue, red, green，或自定义的色值',
          type: 'string',
          default: 'blue',
        },
        {
          params: 'dot',
          explain: '自定义时间轴点',
          type: 'string|slot',
          default: '',
        },
        {
          params: 'position',
          explain: '自定义节点位置',
          type: 'left | right',
          default: '',
        },
      ],
    };
  },
};
</script>
<style lang="less"></style>
