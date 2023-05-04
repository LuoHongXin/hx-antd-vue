<template>
  <div>
    <title-detail title="注意" detail="Cascader 级联选择" />
    <a-tabs type="card">
      <a-tab-pane key="1" tab="CascaderMulti">
        <CascaderMulti />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import CascaderMulti from './CascaderMulti.vue';
export default {
  name: 'Cascader',
  components: {
    CascaderMulti,
  },
};
</script>
