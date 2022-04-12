<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Confirm 确认对话框" detail="除了封装了一些常规组件外，一些通过方法调用的组件，也有为了结合业务而进行封装。" />
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail
      title="confirm"
      detail="antd 也有一个 confirm 方法，调用后出现确认弹框，但需求要支持可移动，所以基于 antd 的 confirm 方法之上，我又进行了一些封装，并保留了 antd 的 confirm 所有API"
    ></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <div>
        <a-button
          type="primary"
          @click="$YConfirm({ title: '可以移动confirm', content: '这里是一段简要的描述性信息，尽量控制在三行以内，需要用户二次确认。' })"
          >可以移动confirm</a-button
        >
        <a-button type="primary" style="margin-left: 20px" @click="$YConfirm({ title: '不移动confirm', move: false })"
          >不移动confirm</a-button
        >
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`
        <div>
          <a-button type='primary' @click='$YConfirm({title:'可以移动confirm'})'>可以移动confirm</a-button>
          <a-button type='primary' style='margin-left:20px' @click='$YConfirm({ title:'不移动confirm',move:false})'>不移动confirm</a-button>
        </div>
        `">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'way',
  data() {
    return {
      modalVisible: false,
      modalVisible2: false,
      modalMove: true,
    };
  },
};
</script>
