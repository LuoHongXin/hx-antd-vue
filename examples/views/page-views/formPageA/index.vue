<template>
  <div>
    <div class="y-page-header-a">
      <div class="content">
        <!-- 标题操作 -->
        <div class="title">
          <div class="title-left">
            <h3 class="page-title">创建XXX</h3>
          </div>
          <div class="title-right">
            <y-steps :current="1" size="small">
              <y-step title="处理完成"> </y-step>
              <y-step title="正在处理" />
              <y-step title="等待处理" />
              <y-step title="等待处理" />
            </y-steps>
          </div>
        </div>
        <!-- Tab选项卡 -->
        <div class="tabs">
          <y-tabs default-active-key="1">
            <a-tab-pane key="1" tab="快速配置" />
            <a-tab-pane key="2" tab="自定义配置" />
          </y-tabs>
        </div>
      </div>
    </div>
    <div class="y-form-page-a">
      <box1 ref="box1" />
      <box2 />
    </div>
  </div>
</template>
<script>
import box1 from './box1.vue';
import box2 from './box2.vue';
export default {
  name: 'formPageA',
  components: {
    box1,
    box2,
  },
  methods: {
    onSubmit() {
      this.$refs.box1.onSubmit(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.box1.resetForm();
    },
  },
};
</script>
