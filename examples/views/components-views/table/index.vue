<template>
  <div>
    <a-tabs type="card" v-model="activeKey">
      <a-tab-pane key="1" tab="YModelTable 表格模板">
        <keep-alive>
          <YModelTable v-if="activeKey === '1'" />
        </keep-alive>
      </a-tab-pane>
      <a-tab-pane key="2" tab="yTable 表格">
        <keep-alive>
          <YTable v-if="activeKey === '2'" />
        </keep-alive>
      </a-tab-pane>
      <a-tab-pane key="3" tab="虚拟滚动表格">
        <keep-alive>
          <VirtualTableBox v-if="activeKey === '3'" />
        </keep-alive>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import YTable from './yTable.vue';
import YModelTable from './yModelTable/index.vue';
import VirtualTableBox from './virtualTableBox.vue';

export default {
  name: 'myTable',
  components: {
    YTable,
    YModelTable,
    VirtualTableBox,
  },
  data() {
    return {
      activeKey: '1',
    };
  },
};
</script>
