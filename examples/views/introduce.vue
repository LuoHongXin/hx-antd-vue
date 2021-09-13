<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail
      title="介绍"
      detail="hx-antd-vue主要是基于 Ant Design of Vue（后续简称 antd） UI组件库，并结合业务需求，进行特定封装的UI组件库，其中较多的组件是拥有和 antd 一样的API，所以具体的API不会在本文档中展示，但新增的API都会在本文档上说明。"
    />
    antd具体API文档地址：<a href="https://www.antdv.com/docs/vue/introduce-cn/">Ant Design of Vue</a>
    <h3 class="fun-title">快速使用</h3>
    <funTitleDetail
      title="安装"
      detail="hx-antd-vue"
    ></funTitleDetail>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-JavaScript">
          // 开始安装 hx-antd-vue
          npm i --save hx-antd-vue
        </code>
    </pre>
    <funTitleDetail title="使用" detail="在安装好的项目中找到 main.js 文件并注册组件 hx-antd-vue；当然也可支持按需引入"></funTitleDetail>
    <pre class="line-numbers">
        <code class="language-JavaScript">
          import hx-antd-vue from "hx-antd-vue";
          import "hx-antd-vue/lib/hx-antd-vue.css";
          Vue.use(hx-antd-vue);
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-JavaScript">
          ### 1.0.0

          -- 发布第一版 hx-antd-vue

          ### 1.0.1
          -- 补充拓展组件并修复部分bug
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'way',
};
</script>
