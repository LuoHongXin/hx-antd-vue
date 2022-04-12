<template>
  <div>
    <div v-for="item in spacingType" :key="item.key">
      <h3 class="fun-title">{{ item.title }}</h3>
      <Template-table :data="tableDataObj[item.key] || []" type="spacing"></Template-table>
    </div>
  </div>
</template>
<script>
import spacingVarObj from '@src/styles/variables/spacing.less';
import { spacing } from '@/meaning';
export default {
  name: 'Spacing',
  data() {
    return {
      spacingType: [{ key: 'spacing', title: 'Spacing 间距' }],
      tableDataObj: {},
    };
  },
  created() {
    this.spacingType.forEach(item => {
      let tableData = []; // 文字相关颜色
      Object.keys(spacingVarObj).forEach(key => {
        const value = spacingVarObj[key];
        const variable = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        const obj = {
          variable,
          value,
          meaning: spacing[key],
          remark: `padding:@${variable}`,
        };
        if (variable.includes(item.key)) {
          tableData.push(obj);
        }
      });
      this.$set(this.tableDataObj, item.key, tableData);
    });
  },
};
</script>
