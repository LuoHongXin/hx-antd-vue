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
      <div class="test">
        <a-row type="flex" :gutter="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]">
          <a-col :span="8">
            <y-card :hoverable="true">
              <div slot="title" href="#">我是插槽分发的标题</div>
              <!-- 如要给高度，建议给内容设置高度让其撑开card不给默认由里面的内容撑开 -->
              <div style="height:300px">
                <div>卡片内容1</div>
              </div>
            </y-card>
          </a-col>
          <a-col :span="8">
            <y-card :hoverable="true">
              <div slot="title" href="#">我是插槽分发的标题</div>
              <div style="height:300px">
                <div>卡片内容2</div>
              </div>
            </y-card>
          </a-col>
          <a-col :span="8">
            <y-card :hoverable="true">
              <div slot="title" href="#">我是插槽分发的标题</div>
              <div style="height:200px">
                <div>卡片内容3</div>
              </div>
            </y-card>
          </a-col>
          <a-col :span="16">
            <y-card :hoverable="true">
              <div slot="title" href="#">我是插槽分发的标题</div>
              <div style="height:300px">
                <div>卡片内容4</div>
              </div>
            </y-card>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModulePageB',
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
