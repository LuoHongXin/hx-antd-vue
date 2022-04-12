<template>
  <div>
    <title-detail title="自动完成" detail="输入框自动完成功能。"></title-detail>
    <title-detail title="何时使用" detail="需要自动完成时。"></title-detail>
    <title-detail title="" detail="处理数据建议在search或者onSearch(防抖)"></title-detail>
    <a-tabs type="card">
      <a-tab-pane key="1" tab="autoComplete">
        <Normal />
      </a-tab-pane>
      <a-tab-pane key="2" tab="没有数据源">
        <MyQuery />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Normal from './normal';
import MyQuery from './query';
export default {
  name: 'autoComplete',
  components: {
    Normal,
    MyQuery,
  },
};
</script>
