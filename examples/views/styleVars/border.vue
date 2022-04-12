<template>
  <div>
    <div v-for="item in borderType" :key="item.key">
      <h3 class="fun-title">{{ item.title }}</h3>
      <Template-table :data="tableDataObj[item.key] || []" :type="'border-' + item.key"></Template-table>
    </div>
  </div>
</template>
<script>
import borderVarObj from '@src/styles/variables/border.less';
import { border } from '@/meaning';
export default {
  name: 'border',
  data() {
    return {
      borderType: [
        { key: 'color', title: 'Border 界面描边所用到的颜色' },
        { key: 'width', title: '界面描边的粗细' },
        { key: 'style', title: '描边的样式' },
      ],
      tableDataObj: {},
    };
  },
  created() {
    this.borderType.forEach(item => {
      let tableData = []; // 文字相关颜色
      Object.keys(borderVarObj).forEach(key => {
        const value = borderVarObj[key];
        const variable = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (variable.includes(item.key) && (variable.includes('border') || variable.includes('divider'))) {
          const obj = {
            variable,
            value,
            meaning: border[key],
            remark: `border-${item.key}:@${variable}`,
          };

          tableData.push(obj);
        }
      });
      this.$set(this.tableDataObj, item.key, tableData);
    });
  },
};
</script>
