<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="提示按钮" detail="很多按钮在禁用状态时需要提示一些信息，常见的有先选择数据才能点击按钮操作这类场景。" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <com-show>
      <y-tips-button :tooltip="true">
        <y-button :disabled="true">开机</y-button>
      </y-tips-button>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-tips-button :tooltip='true'>
          <y-button
            :disabled='true'
            >开机</y-button
          >
        </y-tips-button>`">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Ytipsbutton',
  data() {
    return {
      tableData: [
        {
          params: 'tooltip',
          explain: '是否显示提示',
          type: 'Boolean',
          default: 'true',
        },
        {
          params: 'placement',
          explain: '提示位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom',
          type: 'String',
          default: 'bottom',
        },
        {
          params: 'title',
          explain: '提示信息',
          type: 'String',
          default: '请先选择数据',
        },
      ],
    };
  },
};
</script>
