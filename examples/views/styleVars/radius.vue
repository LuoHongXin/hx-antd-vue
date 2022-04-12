<template>
  <div>
    <div v-for="item in radiusType" :key="item.key">
      <h3 class="fun-title">{{ item.title }}</h3>
      <Template-table :data="tableDataObj[item.key] || []" type="radius"></Template-table>
    </div>
  </div>
</template>
<script>
import radiusVarObj from '@src/styles/variables/radius.less';
import { radius } from '@/meaning';
export default {
  name: 'radius',
  data() {
    return {
      radiusType: [{ key: 'radius', title: 'radius 圆角' }],
      tableDataObj: {},
    };
  },
  created() {
    this.radiusType.forEach(item => {
      let tableData = []; // 文字相关颜色
      Object.keys(radiusVarObj).forEach(key => {
        const value = radiusVarObj[key];
        const variable = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        const obj = {
          variable,
          value,
          meaning: radius[key],
          remark: `border-radius: @${variable};`,
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
