<template>
  <div>
    <a-tabs type="card">
      <a-tab-pane key="1" tab="按钮">
        <YButtonView />
      </a-tab-pane>
      <a-tab-pane key="2" tab="表格列操作按钮">
        <YtableactionbuttonView />
      </a-tab-pane>
      <a-tab-pane key="5" tab="操作按钮组">
        <YbuttongroupView />
      </a-tab-pane>
      <a-tab-pane key="3" tab="提示按钮">
        <YtipsbuttonView />
      </a-tab-pane>
      <a-tab-pane key="4" tab="下拉选择按钮">
        <YdropdownbuttonView />
      </a-tab-pane>
      <a-tab-pane key="6" tab="表格列设置按钮">
        <YcolumnCheckView />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import YButtonView from './YButtonView.vue';
import YtableactionbuttonView from './ytableactionbutton.vue';
import YtipsbuttonView from './YtipsbuttonView.vue';
import YdropdownbuttonView from './YdropdownbuttonView.vue';
import YbuttongroupView from './YbuttongroupView.vue';
import YcolumnCheckView from './YcolumnCheckView.vue';
export default {
  name: 'mybutton',
  components: {
    YButtonView,
    YtableactionbuttonView,
    YtipsbuttonView,
    YdropdownbuttonView,
    YbuttongroupView,
    YcolumnCheckView,
  },
};
</script>
