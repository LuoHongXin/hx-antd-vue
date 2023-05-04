<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail
      title="面包屑"
      detail="面包屑是界面中的一种辅助导航，告诉用户当前页面所在的位置及页面层级关系，方便用户快速返回上一级或去往其他层级的页面。"
    />
    <declareList :value="declareList" title="用法" />
    <declareList :value="declareList2" />
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-breadcrumb id="breadcrumb-container" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-breadcrumb id='breadcrumb-container' />`">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          {
            path: '/components',
            name: 'components',
            meta: {
              title: '基础组件',
            },
            children: [
              {
                path: 'breadcrumb',
                name: 'breadcrumb',
                meta: {
                  title: '面包屑',
                },
              },
          }
        </code>
    </pre>
    <funTitleDetail title="带返回" detail=""></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-breadcrumb back id="breadcrumb-container" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-breadcrumb back id='breadcrumb-container' />`">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          {
            path: '/components',
            name: 'components',
            meta: {
              title: '基础组件',
            },
            children: [
              {
                path: 'breadcrumb',
                name: 'breadcrumb',
                meta: {
                  title: '面包屑',
                },
              },
          }
        </code>
    </pre>
    <funTitleDetail title="带图形" detail=""></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-breadcrumb id="breadcrumb-container" :data="bcdata1" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-breadcrumb id='breadcrumb-container' :data='bcdata1' />`">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          data() {
            return {
              bcdata1: [
                { meta: { title: '一级页面', redirect: '/introduce', antIcon: 'home' } },
                { meta: { title: '二级页面', redirect: '/styleVars', antIcon: 'user' } },
              ],
            }
          }
        </code>
    </pre>
    <funTitleDetail title="显示省略号" detail="默认层级超过5个，保留前第一个和最后两个，中间显示省略号"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-breadcrumb @goRoute="goRoute" back id="breadcrumb-container" :data="bcdata2" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-breadcrumb back id='breadcrumb-container' :data='bcdata2' />`">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          data() {
            return {
              bcdata2: [
                { meta: { title: '一级页面', redirect: '/introduce' } },
                { meta: { title: '二级页面', redirect: '/styleVars' } },
                { meta: { title: '三级页面', redirect: '/introduce' } },
                { meta: { title: '四级页面', redirect: '/styleVars' } },
                { meta: { title: '五级页面', redirect: '/introduce' } },
              ],
            }
          }
        </code>
    </pre>
    <funTitleDetail title="更换分割符" detail=""></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-breadcrumb separator=">" id="breadcrumb-container" :data="bcdata2" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-breadcrumb separator='>' id='breadcrumb-container' :data='bcdata2' />`">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          data() {
            return {
              bcdata2: [
                { meta: { title: '一级页面', redirect: '/introduce' } },
                { meta: { title: '二级页面', redirect: '/styleVars' } },
                { meta: { title: '三级页面', redirect: '/introduce' } },
                { meta: { title: '四级页面', redirect: '/styleVars' } },
                { meta: { title: '五级页面', redirect: '/introduce' } },
              ],
            }
          }
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
    <api-table :data="tableData2" title="data数据对象属性"></api-table>
  </div>
</template>
<script>
export default {
  name: 'breadcrumb',
  data() {
    return {
      bcdata1: [
        { meta: { title: '一级页面', redirect: '/introduce', antIcon: 'home' } },
        { meta: { title: '二级页面', redirect: '/styleVars', antIcon: 'user' } },
      ],
      bcdata2: [
        { meta: { title: '一级页面', redirect: '/introduce' } },
        { meta: { title: '二级页面', redirect: '/styleVars' } },
        { meta: { title: '三级页面', redirect: '/introduce' } },
        { meta: { title: '四级页面', redirect: '/styleVars' } },
        { meta: { title: '五级页面', redirect: '/introduce' } },
      ],
      declareList: [
        '组件根据路由中meta的title进行标题展示的面包屑，主要的配置在router的path、redirect、meta属性中。',
        '系统页面层级结构超过 2 级时使用，页面层级不超过 2 级的情况不建议使用。',
        '面包屑最多出现 5 级，当超过 5 级时，只显示第一级和最后两级，中间部分用「···」代替',
      ],
      declareList2: [
        '面包屑始终被视为辅助导航，并且永远不应完全替代主要导航。',
        '面包屑记录的是页面的结果逻辑，而非用户的操作顺序。',
        '当前页面即为面包屑的最后一级。',
        '避免将非页面级的内容写到面包屑中，比如 Tabs 的切换，Trees 的层级，等等。。',
        '允许从当前位置返回到层次结构中任一父级。',
        '面包屑的每一个层级允许同级间平行切换。',
        '当用户浏览不同页面时，面包屑的位置不应移动。',
      ],
      tableData: [
        { params: 'separator', explain: '面包屑菜单之间的分割符', type: 'string | sloit', default: '/' },
        { params: 'data', explain: '自定义面包屑数据，否则默认采用当前页面路由', type: 'Array', default: 'route' },
        {
          params: 'ellipsNum',
          explain: '显示省略数量，若超出或等于省略数量，则会省略中间的菜单，保留前第一个和最后两个，不得小于4',
          type: 'Number',
          default: '5',
        },
        {
          params: 'back',
          explain: '是否显示返回按钮',
          type: 'Boolean',
          default: 'false',
        },
        {
          params: 'goRoute',
          explain: '路由跳转事件，添加后不会自动跳转，而是回调里自己写代码跳转',
          type: 'function(path,route)',
          default: '',
        },
      ],
      tableData2: [
        { params: 'path', explain: 'router的 path 属性，无redirect时，默认跳转 path 路径', type: 'string' },
        { params: 'redirect', explain: 'router的redirect属性，比path的权重大，跳转时，必须以 / 开头', type: 'string' },
        {
          params: 'meta中的redirect',
          explain: '可指定路由跳转路径，权重最大，比path和redirect都大。若想禁止路由跳转，可赋值为 noRedirect',
          type: 'string',
        },
        {
          params: 'meta中的breadcrumb',
          explain: '指定该路由是否显示在面包屑上，若不想某路由显示在面包屑，可设为false',
          type: 'Boolean',
        },
        {
          params: 'meta中的title',
          explain: '为面包屑上对应的名称',
          type: 'String',
        },
        {
          params: 'meta中的antIcon',
          explain: '设置图标，图标源为antd图标库',
          type: 'String',
        },
      ],
    };
  },
  methods: {
    goRoute() {
      console.log(123123);
    },
  },
};
</script>
