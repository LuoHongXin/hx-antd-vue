<template>
  <div>
    <div v-for="item in fontType" :key="item.key">
      <h3 class="fun-title">{{ item.title }}</h3>
      <Template-table :data="tableDataObj[item.key] || []" :type="'font-' + item.key"></Template-table>
    </div>
  </div>
</template>
<script>
import fontVarObj from '@src/styles/variables/font.less';
import { font } from '@/meaning';
export default {
  name: 'font',
  data() {
    return {
      fontType: [
        { key: 'family', title: 'FontFamily 字体家族' },
        { key: 'size', title: 'FontSize 字体大小' },
        { key: 'weight', title: 'FontWeight 字重' },
      ],
      tableDataObj: {},
    };
  },
  created() {
    this.fontType.forEach(item => {
      let tableData = []; // 文字相关颜色
      Object.keys(fontVarObj).forEach(key => {
        const value = fontVarObj[key];
        const variable = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (variable.includes(item.key) && variable.includes('font')) {
          const obj = {
            variable,
            value,
            meaning: font[key],
            remark: `font-${item.key}:@${variable}`,
          };

          tableData.push(obj);
        }
      });
      this.$set(this.tableDataObj, item.key, tableData);
    });
  },
};
</script>
