<template>
  <div>
    <a-tabs type="card">
      <a-tab-pane key="basis" tab="基础单选框">
        <basis />
      </a-tab-pane>
      <a-tab-pane key="options" tab="选项单选框">
        <options />
      </a-tab-pane>
      <a-tab-pane key="group" tab="选项单选按钮组">
        <group />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  name: 'radio',
  components: {
    basis: () => import('./basis'),
    options: () => import('./options'),
    group: () => import('./group'),
  },
};
</script>
