<template>
  <a-layout-content style="padding: 10px 60px">
    <!-- 组件标题和说明 -->
    <title-detail
      @click.native="changeColor"
      title="介绍"
      detail="hx-antd-vue 主要是基于 Ant Design of Vue（后续简称 antd） UI组件库(1.7.8版本)，根据公司业务需求和UI设计，在 antd 原有的基础上丰富了功能和部分样式修改，而进行特定封装的UI组件库，其中较多的组件是拥有和 antd 一样的API，但功能会比 antd 更丰富。"
    />
    <p style="font-weight:600;color:green;">
      在预编译css语言上，我们选择保持和antd一致，都是采用 less 预编译语言，所以在安装我们组件库时，请保证项目已安装 less 和 less-loader
      依赖。且 less 的版本最好是 3.* 的版本，否则可能会报错
    </p>
    antd具体API文档地址：<a href="https://www.antdv.com/docs/vue/introduce-cn/">Ant Design of Vue</a>
    <h3 class="fun-title">快速使用</h3>
    <funTitleDetail
      title="安装"
      detail="目前 hx-antd-vue 只发布在公司内网，所以无法通过外网的 npm 进行安装，需要先设置代理"
    ></funTitleDetail>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-JavaScript">
          // 设置内网 npm 代理
          npm config set registry http://192.168.101.160:8081/repository/npm-group/
          // 开始安装 hx-antd-vue
          npm i --save hx-antd-vue
        </code>
    </pre>
    <funTitleDetail title="使用组件" detail="在安装好的项目中找到 main.js 文件并注册组件 hx-antd-vue"></funTitleDetail>
    <pre class="line-numbers">
        <code class="language-JavaScript">
          import whComponents from "hx-antd-vue";
          import "hx-antd-vue/lib/hx-antd-vue.css";
          Vue.use(whComponents);
        </code>
    </pre>
    <h3 class="fun-title">使用hx-antd-vue样式变量</h3>
    <funTitleDetail
      title=""
      detail="安装 style-resource-loader 和 vue-template-compiler 后，并在 vue-config.js 中配置好后，可直接全局使用 hx-antd-vue 的 less 变量；根据规范，我们在写编写页面样式时，尽量使用 hx-antd-vue 的样式变量，因为样式变量都是根据 UI 设计出的，所以在开发过程，避免因随意编写样式导致的样式不可控情况。若根据UI设计稿，在样式变量中未发现相关变量，请联系UI进行变量补充或设计稿修改。"
    ></funTitleDetail>
    <pre class="line-numbers">
        <code class="language-JavaScript">
          module.exports = {
            pluginOptions:{
              "style-resources-loader":{
                preProcessor:"less",
                patterns:[
                  "你的依赖(node——modules)地址/hx-antd-vue/src/styles/index.less"
                ]
              }
            }
          }
        </code>
    </pre>
  </a-layout-content>
</template>
<script>
const { changeThemeColor } = require('@src/theme');
export default {
  name: 'way',
  methods: {
    changeColor() {
      changeThemeColor('#3d61cc');
    },
  },
};
</script>
