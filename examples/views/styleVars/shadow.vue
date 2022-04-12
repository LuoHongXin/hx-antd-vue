<template>
  <div>
    <div v-for="item in shadowType" :key="item.key">
      <h3 class="fun-title">{{ item.title }}</h3>
      <Template-table :data="tableDataObj[item.key] || []" type="shadow"></Template-table>
    </div>
  </div>
</template>
<script>
import shadowVarObj from '@src/styles/variables/shadow.less';
export default {
  name: 'Shadow',
  data() {
    return {
      shadowType: [{ key: 'shadow', title: 'shadow 阴影' }],
      tableDataObj: {},
    };
  },
  created() {
    this.shadowType.forEach(item => {
      let tableData = []; // 文字相关颜色
      Object.keys(shadowVarObj).forEach(key => {
        const value = shadowVarObj[key];
        const variable = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        const obj = {
          variable,
          value,
          remark: `box-shadow:@${variable}`,
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
