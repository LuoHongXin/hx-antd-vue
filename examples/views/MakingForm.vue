<template>
  <div>
    <y-button-group reversed style="margin:8px 12px;" :buttonList="buttonList"></y-button-group>
    <fm-making-form
      ref="makingform"
      :global-config="globalConfig"
      style="height: 700px;"
      @ready="handleFormReady"
      preview
      generate-code
      generate-json
    >
    </fm-making-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      globalConfig: {
        // 可以将表单预设的样式放入到设计器中
        styleSheets: '.a .el-form-item__label{color: red;} .b .el-form-item__label{color: blue;}',
      },
      buttonList: [
        {
          text: '确定',
          tips: {
            text: '保存表单设计并返回到低代码表单设计器页面查看效果',
            placement: 'bottom',
          },
          type: 'primary',
          click: () => {
            this.handleSave();
          },
        },
        {
          text: '取消',
          click: () => {
            this.cancel();
          },
          tips: {
            text: '不保存表单设计并返回到低代码表单设计器页面',
            placement: 'bottom',
          },
        },
      ],
    };
  },
  methods: {
    handleSave() {
      const json = this.$refs.makingform.getJSON();
      localStorage.setItem('makingformData', JSON.stringify(json));
      this.$YMessage.success('保存成功');
      this.cancel();
    },
    cancel() {
      this.$router.push({ name: 'formMaking' });
    },
    // 回显表单设计数据
    handleFormReady() {
      const d = JSON.parse(localStorage.getItem('makingformData'));
      if (d) {
        this.$refs.makingform.setJSON(d);
      }
    },
  },
};
</script>
