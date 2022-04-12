<template>
  <div class="contanier">
    <y-select v-model="layoutType" :options="options" />
    <funTitleDetail
      title="过滤表单"
      detail="过滤表单常见布局有两种，单列布局和三列布局，通过控制 y-filter-form 的 layoutType 即可快速修改三列布局或单列布局"
    ></funTitleDetail>
    <!-- 组件展示 -->
    <com-show style="padding:16px 24px">
      <filterForm :layoutType="layoutType" />
      <filterForm2 :layoutType="layoutType" />
    </com-show>
  </div>
</template>
<script>
import filterForm from './filterForm.vue';
import filterForm2 from './filterForm2.vue';
export default {
  name: 'filterFormPage',
  components: {
    filterForm,
    filterForm2,
  },
  data() {
    return {
      layoutType: '3col',
      options: [
        {
          value: '3col',
          label: '三列布局',
        },
        {
          value: '1col',
          label: '单列布局',
        },
      ],
    };
  },
};
</script>
