<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail
      title="wh-form-making 基于 Vue 的可视化低代码表单设计器"
      detail="wh-form-making 不属于 hx-antd-vue 组件库，所以需要额外安装 wh-form-making 依赖"
    />
    <a target="_blank" href="https://www.yuque.com/form-making/es9x0r/cliyas">使用和开发文档</a>
    <declareList :value="declareList" title="wh-form-making 一共三个组件" />
    <funTitleDetail title="安装" detail="npm i wh-form-making"></funTitleDetail>
    <funTitleDetail title="使用" detail=""></funTitleDetail>
    <pre class="line-numbers">
        <code class="language-javaScript">// 注册表单设计器
        import FormMaking from 'wh-form-making';
        import 'wh-form-making/dist/FormMaking.css';
        // 需传入当前项目的i18n实例，避免与表单设计器的国际化冲突
        Vue.use(FormMaking, { i18n: i18n }); 
        // MakingForm组件是用 element-ui，若项目没用 element-ui，则需要手动注册element-ui
        // 下载 wh-form-making 时已自动帮你下载element-ui，无需再 npm i
        import ElementUI from 'element-ui'
        import 'element-ui/lib/theme-chalk/index.css'
        Vue.use(ElementUI, {zIndex: 300})
        // 若需要高级字段中的编辑器，还需要注册 VueEditor
        // 同样无需再 npm i
        import VueEditor from 'vue2-editor';
        Vue.use(VueEditor);</code>
    </pre>
    <funTitleDetail title="表单设计" detail="点击如下跳转按钮去设计"></funTitleDetail>
    <y-button type="primary" @click="goMakingForm">设计制作表单页面</y-button>
    <funTitleDetail
      title="Ant Design 表单展示"
      detail="GenerateAntdForm 表单，因为我们项目主要是使用 Ant Design 作为基础组件，所以主要以 Ant Design 的表单生成器组件作为展示"
    ></funTitleDetail>
    <com-show>
      <fm-generate-antd-form v-if="formDesignData" :data="formDesignData" ref="generateForm"> </fm-generate-antd-form>
      <y-empty v-else></y-empty>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html"> </code>
    </pre>
    <funTitleDetail title="formDesignData 表单设计数据"></funTitleDetail>
    <y-textarea :autoSize="{ minRows: 2, maxRows: 100 }" autoWidth v-model="jsonData" />
  </div>
</template>
<script>
export default {
  name: 'Ybutton',
  data() {
    return {
      html: `<fm-generate-antd-form :data="formDesignData" ref="generateForm"> </fm-generate-antd-form>`,
      formDesignData: null,
      declareList: [
        'MakingForm 表单设计器组件，通过可视化方式制作表单页面',
        'GenerateForm element-ui 的表单生成器组件，通过json快速渲染出表单页面。',
        'GenerateAntdForm Ant Design 的表单生成器组件，使用方法同 GenerateForm。',
      ],
    };
  },
  computed: {
    jsonData: {
      get() {
        return this.formDesignData ? JSON.stringify(this.formDesignData) : '';
      },
      set(val) {
        this.formDesignData = JSON.parse(val);
      },
    },
  },
  created() {
    let makingformData = localStorage.getItem('makingformData');
    if (makingformData) {
      this.formDesignData = JSON.parse(makingformData);
    }
  },
  methods: {
    goMakingForm() {
      this.$router.push({ name: 'MakingForm' });
    },
  },
};
</script>
<style lang="less" scoped>
.ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
</style>
