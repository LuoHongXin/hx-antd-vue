<template>
  <div>
    <a-tabs type="card">
      <a-tab-pane key="1" tab="按钮">
        <Ybutton />
      </a-tab-pane>
      <a-tab-pane key="2" tab="表格操作按钮">
        <Ytableactionbutton />
      </a-tab-pane>
      <a-tab-pane key="5" tab="表头操作按钮">
        <Ybuttongroup />
      </a-tab-pane>
      <a-tab-pane key="3" tab="提示按钮">
        <Ytipsbutton />
      </a-tab-pane>
      <a-tab-pane key="4" tab="下拉选择按钮">
        <Ydropdownbutton />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Ybutton from './ybutton.vue';
import Ytableactionbutton from './ytableactionbutton.vue';
import Ytipsbutton from './Ytipsbutton.vue';
import Ydropdownbutton from './ydropdownbutton.vue';
import Ybuttongroup from './ybuttongroup.vue';
export default {
  name: 'mybutton',
  components: {
    Ybutton,
    Ytableactionbutton,
    Ytipsbutton,
    Ydropdownbutton,
    Ybuttongroup,
  },
};
</script>
