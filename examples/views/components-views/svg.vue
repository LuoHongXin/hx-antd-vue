<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail
      title="矢量图标"
      detail="用于自定义的icon图标，也可以用于矢量图片。在使用公司的项目模板，svg的配置已设置好，只需将使用的svg图片放入 src/icons 文件夹即可使用这些svg图片。"
    />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-svg-icon icon-class="eyes_visible" className="eyes_visible" style="width:100px;height:60px" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
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
        { params: 'iconClass', explain: 'svg 的文件名', type: 'string' },
        { params: 'className', explain: '生成的 svg 元素的类名，格式为：y-svg-icon-+文件名，可根据此给指定样式', type: 'string' },
      ],
      html: '<y-svg-icon icon-class="eyes_visible" style="width:100px;height:60px"/>',
    };
  },
};
</script>
