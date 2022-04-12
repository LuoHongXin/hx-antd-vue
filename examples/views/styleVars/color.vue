<template>
  <div>
    <div v-for="item in colorType" :key="item.key">
      <h3 class="fun-title">{{ item.title }}</h3>
      <Template-table :data="tableDataObj[item.key] || []" type="color"></Template-table>
    </div>
  </div>
</template>
<script>
import colorVarObj from '@src/styles/variables/color.less';
import { color } from '@/meaning';
export default {
  name: 'Color',
  data() {
    return {
      colorType: [
        { key: 'primary', title: 'Primary 品牌色/主色' },
        { key: 'info', title: 'Info 信息' },
        { key: 'success', title: 'Success 成功' },
        { key: 'warning', title: 'Warning 警示' },
        { key: 'error', title: 'Error 错误' },
        { key: 'text', title: 'Text 文本颜色' },
        { key: 'fill', title: 'Fill 填充颜色' },
        { key: 'table', title: 'Table 表格颜色' },
      ],
      tableDataObj: {},
    };
  },
  created() {
    this.colorType.forEach(item => {
      let tableData = []; // 文字相关颜色
      Object.keys(colorVarObj).forEach(key => {
        const value = colorVarObj[key];
        const variable = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (
          (item.key === 'primary' || item.key === 'success' || item.key === 'warning' || item.key === 'error') &&
          variable.includes('text')
        )
          return; // 文字颜色不要在主色、成功色、警示色、错误色中
        if (variable.includes(item.key)) {
          const obj = {
            variable,
            value,
            meaning: color[key],
            remark: `color:@${variable}`,
          };
          tableData.push(obj);
        }
      });
      this.$set(this.tableDataObj, item.key, tableData);
    });
  },
};
</script>
