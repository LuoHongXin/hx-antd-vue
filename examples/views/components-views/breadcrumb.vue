<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail 
        title="面包屑" 
        detail="根据路由中meta的title进行标题展示的面包屑，主要的配置在router的path、redirect、meta属性中。"
    />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
            {
                path: '/breadcrumb',
                name: 'breadcrumb',
                // redirect: "重定向",
                component: () => import("../views/components-views/breadcrumb"),
                meta: {
                    title: "面包屑",
                    // redirect: "可指定跳转路径 | noRedirect"
                }
            }
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'breadcrumb',
  data() {
    return {
      tableData: [
          { params: 'path', explain: 'router的 path 属性，无redirect时，默认跳转 path 路径', type: 'string' },
          { params: 'redirect', explain: 'router的redirect属性，比path的权重大，跳转时，必须以 / 开头', type: 'string' },
          { params: 'redirect', explain: 'meta中的redirect属性，可指定路由跳转路径，权重最大。若想禁止路由跳转，可赋值为 noRedirect', type: 'string' }
        ],
      html: '<y-breadcrumb id="breadcrumb-container" class="breadcrumb-container" />',
    };
  }
};
</script>