<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Tab 选项卡" detail="选项卡是用于特定板块内，为同范畴内容提供不同类信息展示切换的组件。具有容纳、导航作用。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <normalTabs />
    <!-- <cardTabs /> -->
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
import normalTabs from './normalTabs.vue';
// import cardTabs from './cardTabs.vue';
export default {
  name: 'empty',
  components: {
    normalTabs,
    // cardTabs,
  },
  data() {
    return {
      declareList: [
        '尽量避免 Tab 内再嵌套 Tab',
        '点击Tab时不发生页面跳转，URL不改变（区别于导航）',
        '不要将需要同时查看的内容放在不同的切换项中，切换项需彼此独立',
        '切换项的数量不宜过多，切换项的总数建议不要超过 7 个',
        '单次只允许一个切换项被选中，默认选中左起第 1 个',
        '当某个切换项不可用时，呈 disable 态，可搭配 Tooltip 解释原因',
        '同一组切换项的样式需要保持一致（比如都是图标+文字）',
        '切换项不能只是图标，文字需完整展示，不可省略或折行',
      ],
      tableData: [
        {
          params: 'scene',
          explain: '网络出错-networkError、系统出错-systemError、暂无消息-noMessage、暂未接入-noAccess、暂无数据-noData，五个场景',
          type: 'string',
          default: 'noData',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
