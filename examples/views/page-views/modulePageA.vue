<template>
  <div>
    <div class="y-page-header-a">
      <!-- 标题 -->
      <div class="title">
        <div class="title-left">
          <h3 class="page-title">页面标题</h3>
        </div>
        <div class="title-right">
          <y-tips-button :tooltip="true" title="说明信息">
            <div class="guide"><a-icon type="question-circle" />指引说明</div>
          </y-tips-button>
          <y-button-group reversed omitType="ellipsis" :buttonList="buttonList"></y-button-group>
        </div>
      </div>
      <!-- Tab选项卡 -->
      <div class="tabs">
        <y-tabs default-active-key="1">
          <a-tab-pane key="1" tab="选项卡" />
          <a-tab-pane key="2" tab="选项卡" />
          <a-tab-pane key="3" tab="选项卡" />
        </y-tabs>
      </div>
    </div>
    <div class="y-module-page-a">
      <div class="contanier">
        <!-- 三列布局 -->
        <div class="list">
          <y-card size="small" :hoverable="true" title="Small size card">
            <p v-for="i in 16" :key="i">card content</p>
          </y-card>
        </div>
        <div class="list">
          <y-card size="small" :hoverable="true" title="Small size card">
            <p v-for="i in 20" :key="i">card content</p>
          </y-card>
        </div>
        <div class="list">
          <y-card size="small" :hoverable="true" v-for="i in 3" :key="i" style="margin-bottom:16px" title="Small size card">
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </y-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModulePageA',
  data() {
    return {
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
