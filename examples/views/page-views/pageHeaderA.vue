<template>
  <div class="y-page-header-a">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <y-breadcrumb />
    </div>
    <!-- 标题操作 -->
    <div class="title">
      <div class="title-left">
        <div class="back-btn">
          <y-button icon="arrow-left" class="no-bg"></y-button>
        </div>
        <h3 class="page-title">页面标题</h3>
        <y-tag color="green">成功</y-tag>
        <y-button type="link">收起<a-icon type="up"/></y-button>
      </div>
      <div class="title-right">
        <y-tips-button :tooltip="true" title="说明信息">
          <div class="guide"><a-icon type="question-circle" />指引说明</div>
        </y-tips-button>
        <y-button-group reversed omitType="ellipsis" :buttonList="buttonList"></y-button-group>
      </div>
    </div>
    <!-- 自定义标签 -->
    <div class="tags">
      <y-tag-action v-model="tagData" />
    </div>
    <!-- 信息组 -->
    <div class="info">
      <a-row v-for="i in 4" :key="i">
        <a-col :span="8" v-for="j in 3" :key="i + j">
          <span class="info-title">标签：</span>
          <span class="info-text">文本{{ i + '' + j }}</span>
        </a-col>
      </a-row>
    </div>
    <!-- Tab选项卡 -->
    <div class="tabs">
      <y-tabs default-active-key="1">
        <a-tab-pane key="1" tab="选项卡"> </a-tab-pane>
        <a-tab-pane key="2" tab="选项卡"> </a-tab-pane>
        <a-tab-pane key="3" tab="选项卡"> </a-tab-pane>
      </y-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pageHeaderA',
  data() {
    return {
      tagData: ['标签1', '标签2', '标签3'],
      buttonList: [
        {
          text: '主要操作',
          type: 'primary',
        },
        {
          text: '次要操作1',
        },
        {
          text: '次要操作2',
        },
        {
          text: '次要操作3',
        },
        {
          text: '次要操作4',
        },
      ],
    };
  },
};
</script>
