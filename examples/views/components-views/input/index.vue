<template>
  <div>
    <a-tabs type="card">
      <a-tab-pane key="Input" tab="Input输入框">
        <myInput />
      </a-tab-pane>
      <a-tab-pane key="password" tab="input-password">
        <myInputPassword />
      </a-tab-pane>
      <a-tab-pane key="search" tab="搜索框search">
        <myInputSearch />
      </a-tab-pane>
      <a-tab-pane key="number" tab="input-number">
        <myInputNumber />
      </a-tab-pane>
      <a-tab-pane key="textarea" tab="文本域">
        <myTextarea />
      </a-tab-pane>
      <a-tab-pane key="inputIp" tab="ip输入框">
        <myInputIp />
      </a-tab-pane>
      <a-tab-pane key="1" tab="可输入新增标签">
        <myTagInput />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import myTagInput from './YTagInput.vue';
export default {
  name: 'myinput',
  components: {
    myTagInput,
    myInput: () => import('./input.vue'),
    myTextarea: () => import('./textarea.vue'),
    myInputPassword: () => import('./inputPassword.vue'),
    myInputNumber: () => import('./inputNumber'),
    myInputSearch: () => import('./inputSearch'),
    myInputIp: () => import('./inputIp'),
  },
};
</script>
