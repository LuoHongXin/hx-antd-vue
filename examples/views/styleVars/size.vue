<template>
  <div>
    <div v-for="item in sizeType" :key="item.key">
      <h3 class="fun-title">{{ item.title }}</h3>
      <Template-table :data="tableDataObj[item.key] || []" :type="item.key"></Template-table>
    </div>
  </div>
</template>
<script>
import sizeVarObj from '@src/styles/variables/size.less';
import { size } from '@/meaning';

export default {
  name: 'size',
  data() {
    return {
      sizeType: [
        { key: 'height', title: '组件不同尺寸的高度' },
        { key: 'min-width', title: '一些组件的最小宽度' },
        { key: 'form-width', title: '表单项宽度，适用于表单录入场景，涉及输入框、选择器、文本域、数字输入框等数据录入组件' },
      ],
      tableDataObj: {},
    };
  },
  created() {
    this.sizeType.forEach(item => {
      let tableData = []; // 文字相关颜色
      Object.keys(sizeVarObj).forEach(key => {
        const value = sizeVarObj[key];
        const variable = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (variable.includes(item.key)) {
          const obj = {
            variable,
            value,
            meaning: size[key],
            remark: item.key === 'height' ? `height: @${variable};` : `width: @${variable};`,
          };

          tableData.push(obj);
        }
      });
      this.$set(this.tableDataObj, item.key, tableData);
    });
  },
};
</script>
