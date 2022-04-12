<template>
  <div>
    <div v-for="item in iconType" :key="item.key">
      <h3 class="fun-title">{{ item.title }}</h3>
      <Template-table :data="tableDataObj[item.key] || []" :type="'icon'"></Template-table>
    </div>
  </div>
</template>
<script>
import iconVarObj from '@src/styles/variables/icon.less';
import { icon } from '@/meaning';
export default {
  name: 'icon',
  data() {
    return {
      iconType: [{ key: 'icon', title: 'Icon 图标' }],
      tableDataObj: {},
    };
  },
  created() {
    this.iconType.forEach(item => {
      let tableData = []; // 文字相关颜色
      Object.keys(iconVarObj).forEach(key => {
        const value = iconVarObj[key];
        const variable = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (variable.includes(item.key) && variable.includes('icon')) {
          const obj = {
            variable,
            value,
            meaning: icon[key],
            remark: `font-size:@${variable}`,
          };

          tableData.push(obj);
        }
      });
      this.$set(this.tableDataObj, item.key, tableData);
    });
  },
};
</script>
