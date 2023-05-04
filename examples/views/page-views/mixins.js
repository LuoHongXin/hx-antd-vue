export default {
  data() {
    return {
      htmlObj: {
        pageHeaderA: `<template>
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
          <!-- 了解更多 -->
          <div class="knowMore">
            这里是一段简要描述。
            <y-text-link type="light">了解更多</y-text-link>
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
      </template>`,
        pageHeaderB: `<template>
        <div class="y-page-header-b">
          <div class="content">
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
            <!-- 了解更多 -->
            <div class="knowMore">
              这里是一段简要描述。
              <y-text-link type="light">了解更多</y-text-link>
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
        </div>
      </template>`,
        filterForm: `<template>
        <div>
          <div class="y-filter-form">
            <y-filter-form :form="form" :layoutType="layoutType">
              <y-filter-form-item label="表单标题1">
                <y-select default-value="lucy">
                  <a-select-option value="jack">
                    Jack
                  </a-select-option>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                  <a-select-option value="disabled" disabled>
                    Disabled
                  </a-select-option>
                  <a-select-option value="Yiminghe">
                    yiminghe
                  </a-select-option>
                </y-select>
              </y-filter-form-item>
              <y-filter-form-item label="表单标题11">
                <y-range-picker />
              </y-filter-form-item>
              <y-filter-form-item>
                <span slot="label"
                  >表单标题
                  <y-tooltip title="提示信息">
                    <a-icon type="info-circle" />
                  </y-tooltip>
                </span>
                <y-input placeholder="请输入" />
              </y-filter-form-item>
              <y-filter-form-item label="表单标题111">
                <y-input placeholder="请输入" />
              </y-filter-form-item>
              <y-filter-form-item label="表单标题1111">
                <y-input placeholder="请输入" />
              </y-filter-form-item>
              <y-filter-form-item label="表单标题11111">
                <y-input placeholder="请输入" />
              </y-filter-form-item>
              <y-filter-form-item label="表单标题111111">
                <y-input placeholder="请输入" />
              </y-filter-form-item>
              <template slot="btnCol">
                <y-button type="primary" html-type="submit">
                  查询
                </y-button>
                <y-button>
                  重置
                </y-button>
              </template>
            </y-filter-form>
          </div>
          <!-- 单列布局 -->
          <div class="y-filter-form">
            <y-filter-form :form="form" layoutType="1col">
              <y-filter-form-item label="统计范围">
                <y-name-select style="margin-right:8px" title="主机池" />
                <y-name-select style="margin-right:8px" title="集群" />
                <y-name-select style="margin-right:8px" title="宿主机" />
                <y-name-select title="虚拟机" />
              </y-filter-form-item>
              <y-filter-form-item label="统计时间">
                <y-range-picker />
              </y-filter-form-item>
              <y-filter-form-item label="统计类型">
                <y-link-tag :data="dataArr" :selectType="1">
                  <template v-slot:hzw>
                    <div style="width:100px;height:100%">
                      <img
                        style="width:50%;height:100%"
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F201511%2F18%2F20151118172257_wcfKT.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636533506&t=31bca10c46e7c2d0778b56400e55849c"
                        alt=""
                      />
                      <span>海贼王</span>
                    </div>
                  </template>
                </y-link-tag>
              </y-filter-form-item>
              <y-divider dashed />
              <template slot="btnCol">
                <y-button type="primary" html-type="submit">
                  查询
                </y-button>
                <y-button>
                  重置
                </y-button>
              </template>
            </y-filter-form>
          </div>
        </div>
      </template>`,
        tablePage: `<template>
        <div>
          <div class="y-page-header-a">
            <!-- 标题 -->
            <div class="title">
              <div class="title-left">
                <h3 class="page-title">页面标题</h3>
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
          <div class="y-table-page-a">
            <div class="contanier">
              <!-- 参考 filterForm过滤表单 典型页面布局 -->
              <filterForm v-if="showFIlter" />
              <y-model-table
                :affixTarget="affixTarget"
                :selectOptions="selectOptions"
                :api="getTableData"
                :search="false"
                :columns="columns"
                :buttonList="buttonList"
                :handleResponse="handleResponse"
                @filter="
                  () => {
                    showFIlter = !showFIlter;
                  }
                "
              >
                <template v-slot:name="{ text }">
                  <a class="y-button-link">{{ text }}</a>
                </template>
                <span slot="customTitle"><a-icon type="smile-o" /> 标题</span>
                <!-- { text, record, index, column } -->
                <y-tag slot="createLoginName" v-if="record.createLoginName" slot-scope="{ record }" :color="'green'">
                  {{ record.createLoginName }}
                </y-tag>
              </y-model-table>
            </div>
          </div>
        </div>
      </template>`,
        modalForm: `<div>
      <y-button type="primary" @click="modalVisible = !modalVisible">{{ modalVisible ? '关闭' : '打开' }}弹窗表单</y-button>
        <y-modal title="标题" :visible="modalVisible" @cancel="modalVisible = false" @ok="onSubmit">
          <y-form-model labelAlign="left" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <y-form-model-item ref="name" label="输入框" prop="name">
              <y-input
                v-model="form.name"
                @blur="
                  () => {
                    $refs.name.onFieldBlur();
                  }
                "
              />
            </y-form-model-item>
            <y-form-model-item label="文本域" prop="info">
              <y-textarea v-model="form.info" />
            </y-form-model-item>
            <y-form-model-item label="数字输入框" prop="num">
              <y-input-number calculator :min="0" :max="10" v-model="form.num" />
            </y-form-model-item>
            <y-form-model-item label="选择器" prop="select">
              <y-select v-model="form.select">
                <a-select-option value="jack">
                  Jack
                </a-select-option>
                <a-select-option value="lucy">
                  Lucy
                </a-select-option>
              </y-select>
            </y-form-model-item>
          </y-form-model>
        </y-modal>
      </div>`,
        drawerForm: `<div>
        <y-button type="primary" @click="visible = !visible">{{ visible ? '关闭' : '打开' }}抽屉表单</y-button>
        <y-drawer title="标题" :visible="visible" @close="visible = false">
          <div slot="footer" style="text-align:right">
            <y-button @click="visible = false"> 取消 </y-button>
            <y-button type="primary" @click="onSubmit">
              确定
            </y-button>
          </div>
          <y-form-model labelAlign="left" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <y-form-model-item ref="name" label="输入框" prop="name">
              <y-input
                v-model="form.name"
                @blur="
                  () => {
                    $refs.name.onFieldBlur();
                  }
                "
              />
            </y-form-model-item>
            <y-form-model-item label="文本域" prop="info">
              <y-textarea v-model="form.info" />
            </y-form-model-item>
            <y-form-model-item label="数字输入框" prop="num">
              <y-input-number calculator :min="0" :max="10" v-model="form.num" />
            </y-form-model-item>
            <y-form-model-item label="选择器" prop="select">
              <y-select v-model="form.select">
                <a-select-option value="jack">
                  Jack
                </a-select-option>
                <a-select-option value="lucy">
                  Lucy
                </a-select-option>
              </y-select>
            </y-form-model-item>
          </y-form-model>
        </y-drawer>
      </div>`,
        formPageA: `<template>
      <div>
        <div class="y-page-header-a">
          <div class="content">
            <!-- 标题操作 -->
            <div class="title">
              <div class="title-left">
                <h3 class="page-title">创建XXX</h3>
              </div>
              <div class="title-right">
                <y-steps :current="1" size="small">
                  <y-step title="处理完成"> </y-step>
                  <y-step title="正在处理" />
                  <y-step title="等待处理" />
                  <y-step title="等待处理" />
                </y-steps>
              </div>
            </div>
            <!-- Tab选项卡 -->
            <div class="tabs">
              <y-tabs default-active-key="1">
                <a-tab-pane key="1" tab="快速配置" />
                <a-tab-pane key="2" tab="自定义配置" />
              </y-tabs>
            </div>
          </div>
        </div>
        <div class="y-form-page-a">
          <box1 ref="box1" />
          <box2 />
        </div>
      </div>
    </template>`,
        formPageB: `<template>
        <div>
          <div class="y-page-header-b">
            <div class="content">
              <!-- 标题操作 -->
              <div class="title">
                <div class="title-left">
                  <h3 class="page-title">创建XXX</h3>
                </div>
                <div class="title-right">
                  <y-steps :current="1" size="small">
                    <y-step title="处理完成"> </y-step>
                    <y-step title="正在处理" />
                    <y-step title="等待处理" />
                    <y-step title="等待处理" />
                  </y-steps>
                </div>
              </div>
              <!-- Tab选项卡 -->
              <div class="tabs">
                <y-tabs default-active-key="1">
                  <a-tab-pane key="1" tab="快速配置" />
                  <a-tab-pane key="2" tab="自定义配置" />
                </y-tabs>
              </div>
            </div>
          </div>
          <div class="y-form-page-b">
            <box1 ref="box1" />
            <box2 />
          </div>
        </div>
      </template>`,
        box1: `<template>
        <div class="box">
          <y-sign-title><span slot="title">标题</span></y-sign-title>
          <!-- 表单内容 -->
          <y-form-model labelAlign="left" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <y-form-model-item ref="name" label="输入框" prop="name">
              <y-input v-model="form.name" />
            </y-form-model-item>
            <y-form-model-item label="标题过长标题过长标题过长出现省略号" prop="name">
              <y-input v-model="form.name" />
            </y-form-model-item>
            <y-form-model-item label="数字输入框" prop="number">
              <y-input-number calculator :min="0" :max="99" v-model="form.number" /> 台
            </y-form-model-item>
            <y-form-model-item label="数字输入框" prop="number">
              <y-input-number :min="0" :max="99" v-model="form.number" /> 天
            </y-form-model-item>
            <y-form-model-item  prop="region">
              <span slot="label"
                >选择器
                <y-tooltip title="提示信息">
                  <a-icon type="info-circle" />
                </y-tooltip>
              </span>
              <y-select v-model="form.region" placeholder="请选择">
                <y-select-option value="shanghai">Zone one</y-select-option>
                <y-select-option value="beijing">Zone two</y-select-option>
              </y-select>
            </y-form-model-item>
            <y-form-model-item label="选择器多选不限高度" prop="region2">
              <y-select checkbox :options="options"> </y-select>
            </y-form-model-item>
            <y-form-model-item label="选择器多选限定一行" prop="region2">
              <y-select mode="multiple" :options="options" />
            </y-form-model-item>
            <y-form-model-item label="标签" prop="tagData">
              <y-tag-action v-model="form.tagData" />
            </y-form-model-item>
            <y-form-model-item label="开关" prop="delivery">
              <y-switch v-model="form.delivery" />
            </y-form-model-item>
            <y-form-model-item label="按钮型单选" prop="type">
              <y-radio-group v-model="form.type" :radio="false" bodered>
                <y-radio-content :value="1">
                  单选项目1
                </y-radio-content>
                <y-radio-content :value="2">
                  名词较长的单选项
                </y-radio-content>
                <y-radio-content :value="r + 2" v-for="r in 10" :key="r + 2"> 单选项目{{ r }} </y-radio-content>
              </y-radio-group>
            </y-form-model-item>
            <y-form-model-item label="单选按钮组">
              <y-radio-group default-value="a">
                <a-radio-button value="a">
                  单选按钮a
                </a-radio-button>
                <a-radio-button value="b">
                  单选按钮b
                </a-radio-button>
                <a-radio-button value="c">
                  单选按钮c
                </a-radio-button>
                <a-radio-button value="d">
                  单选按钮d
                </a-radio-button>
              </y-radio-group>
            </y-form-model-item>
            <y-form-model-item label="按钮型多选" prop="type">
              <y-link-tag :data="dataArr" v-model="form.linkTagValue" :selectType="1"> </y-link-tag>
            </y-form-model-item>
            <y-form-model-item label="文本域" prop="desc">
              <y-textarea v-model="form.desc" />
            </y-form-model-item>
            <y-form-model-item label="ipv4" prop="ip">
              <y-input-ip v-model="form.ip" />
            </y-form-model-item>
          </y-form-model>
        </div>
      </template>`,
        box2: `<template>
      <div class="box">
        <y-sign-title title="标题" />
        <!-- 表单内容 -->
        <y-form-model labelAlign="left" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <y-form-model-item label="表格（单选）" prop="table1">
            <div class="y-model-table-container">
              <div class="y-table-header">
                <div class="left">已选：{{ choseName }}</div>
                <div class="right">
                  <y-auto-complete placeholder="请输入">
                    <y-input>
                      <a-icon slot="prefix" type="search" class="certain-category-icon" />
                    </y-input>
                  </y-auto-complete>
                </div>
              </div>
              <y-table
                v-model="selectedData"
                bordered
                :scroll="{ y: 366 }"
                :row-selection="rowSelection"
                :components="$YGetTableDragHeader(columns)"
                :columns="columns"
                :data-source="data"
                :pagination="pagination"
                :modelKeys.sync="selectedDataKeys"
              >
              </y-table>
            </div>
          </y-form-model-item>
        </y-form-model>
      </div>
    </template>`,
        menuswitch: `<template>
        <div class="menu-container">
          <div class="menu-container-sidebar">
            <y-model-menu
              title="访问控制"
              relevanTitle="关联功能"
              :relevanMenuData="relevanMenuData"
              :menuData="menuData"
              @click="modelMenuClick"
            />
          </div>
          <section class="menu-container-section">
            <tablePage />
          </section>
        </div>
      </template>`,
        modulePageA: `<template>
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
              <y-card size="small" title="Small size card">
                <p v-for="i in 16" :key="i">card content</p>
              </y-card>
            </div>
            <div class="list">
              <y-card size="small" title="Small size card">
                <p v-for="i in 20" :key="i">card content</p>
              </y-card>
            </div>
            <div class="list">
              <y-card size="small" v-for="i in 3" :key="i" style="margin-bottom:16px" title="Small size card">
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
              </y-card>
            </div>
          </div>
        </div>
      </div>
    </template>`,
        modulePageB: `<template>
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
                    <!-- 如要给高度，建议给内容设置高度让其撑开card不给，则默认由里面的内容撑开 -->
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
      </template>`,
        pageFooterA: `
      <template>
      <div class="y-footer-pageA">
        <formPageA class="y-footer-page-content" />
        <div class="y-page-footerA">
          <y-button-group reversed :buttonList="buttonList"></y-button-group>
        </div>
      </div>
      </template>`,
        pageFooterB: `
      <template>
      <div class="y-footer-pageB">
        <formPageB class="y-footer-page-content"/>
          <div class="y-page-footerB">
            <div class="footer-content">
              <y-button-group reversed :buttonList="buttonList"></y-button-group>
            </div>
          </div>
      </div>
      </template>`,
      },

      jsObj: {
        pageFooterA: `<script>
        import formPageA from './formPageA';
        export default {
          name: 'pageFooterA',
          components: {
            formPageA,
          },
          data() {
            return {
              buttonList: [
                {
                  text: '新增',
                  tips: {
                    text: '数据添加',
                    placement: 'left',
                  },
                  type: 'primary',
                  icon: 'plus',
                  click: () => {
                    this.action('新增');
                  },
                },
                {
                  text: '修改',
                  click: () => {
                    this.action('修改');
                  },
                  tips: '请先选择数据',
                  disable: true,
                },
                {
                  text: '复制',
                  click: () => {
                    this.action('复制');
                  },
                },
                {
                  text: '粘贴操作操作操作',
                },
                {
                  text: '删除',
                  tips: '危险操作',
                  click: () => {
                    this.action('删除');
                  },
                  disable: true,
                },
              ],
            };
          },
          methods: {
            add() {
              alert('新增');
            },
            action(val) {
              alert(val);
            },
          },
        };
        </script>`,
        pageFooterB: `
        <script>
        import formPageB from './formPageB';
        export default {
          name: 'pageFooterB',
          components: {
            formPageB,
          },
          data() {
            return {
              buttonList: [
                {
                  text: '新增',
                  tips: {
                    text: '数据添加',
                    placement: 'left',
                  },
                  type: 'primary',
                  icon: 'plus',
                  click: () => {
                    this.action('新增');
                  },
                },
                {
                  text: '修改',
                  click: () => {
                    this.action('修改');
                  },
                  tips: '请先选择数据',
                  disable: true,
                },
                {
                  text: '复制',
                  click: () => {
                    this.action('复制');
                  },
                },
                {
                  text: '粘贴操作操作操作',
                },
                {
                  text: '删除',
                  tips: '危险操作',
                  click: () => {
                    this.action('删除');
                  },
                  disable: true,
                },
              ],
            };
          },
          methods: {
            add() {
              alert('新增');
            },
            action(val) {
              alert(val);
            },
          },
        };
        </script>
        `,
        pageHeaderA: `<script>
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
        </script>`,
        pageHeaderB: `<script>
        export default {
          name: 'pageHeaderB',
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
        </script>`,
        filterForm: `<script>
        export default {
          name: 'filterForm',
          props: {
            layoutType: {
              type: String,
              default: '3col', // 3col 三列布局 1col 单列布局
            },
          },
          data() {
            return {
              form: {
                user: '',
                password: '',
              },
              dataArr: [
                {
                  label: 'CNware',
                  value: '1',
                  disabled: true,
                },
                {
                  slot: 'hzw',
                  value: '2',
                },
                {
                  label: 'PowerVC',
                  value: '3',
                },
                {
                  label: '标签4',
                  value: '4',
                },
                {
                  label: '标签5',
                  value: '5',
                },
                {
                  label: 'CPU利用率(%)',
                  value: '6',
                },
                {
                  label: 'CPU使用情况(MHz)',
                  value: '7',
                },
                {
                  label: '内存利用率(%)',
                  value: '8',
                },
                {
                  label: '磁盘利用率(%)',
                  value: '9',
                },
                {
                  label: '网络吞吐量入统计(Mbps)',
                  value: '10',
                },
                {
                  label: '网络吞吐量出统计(Mbps)',
                  value: '11',
                },
              ],
            };
          },
        };
        </script>`,
        tablePage: `<script>
        import api from '@/api';
        import filterForm from './filterFormPage/filterForm.vue';
        const columns = [
          {
            dataIndex: 'name',
            slots: { title: 'customTitle' },
            scopedSlots: { customRender: 'name' },
            width: 200,
            filters: [
              {
                text: '虚拟机',
                value: '虚拟机',
              },
              {
                text: '登录',
                value: '登录',
              },
            ],
            filter: true,
            sorter: true,
            copy: true,
          },
          {
            title: '任务创建人',
            dataIndex: 'createLoginName',
            scopedSlots: { customRender: 'createLoginName' },
            sorter: true,
            width: 200,
          },
          {
            title: '任务描述',
            dataIndex: 'description',
            width: 200,
            ellipsis: true,
            copy: true,
          },
          {
            title: '标签',
            dataIndex: 'stepDesc',
        
            width: 200,
            ellipsis: true,
          },
        ];
        const buttonList = [
          {
            text: '新增',
            tips: '数据添加',
            type: 'primary',
            icon: 'plus',
            click: () => {
              alert('新增');
            },
          },
          {
            text: '修改',
            disable: true,
          },
          {
            text: '复制',
            click: () => {
              alert('新增');
            },
          },
          {
            text: '粘贴操作操作操作',
            click: () => {
              alert('新增');
            },
          },
          {
            text: '删除',
            tips: '危险操作',
            disable: true,
          },
        ];
        export default {
          name: 'tablePageA',
          components: {
            filterForm,
          },
          data() {
            return {
              showFIlter: false,
              affixTarget: () => document.querySelector('.router-views'),
              columns,
              getTableData: api.getTableData,
              buttonList,
              selectOptions: [
                { title: '标题', value: 'name' },
                { title: '任务描述', value: 'description' },
              ],
            };
          },
          methods: {
            handleResponse(res, type) {
              if (type === 'total') {
                return res.data.total;
              }
              if (type === 'data') {
                return res.data.data;
              }
            },
          },
        };
        </script>`,
        modalForm: `<script>
        export default {
          name: 'modalForm',
          data() {
            return {
              modalVisible: false,
              labelCol: {
                span: 3,
              },
              wrapperCol: {
                span: 21,
              },
              form: {
                name: '',
                info: '',
                num: 0,
                select: 'jack',
              },
              rules: {
                name: [
                  { required: true, message: '请输入输入框', trigger: 'blur' },
                  { min: 3, max: 5, message: '最短3个字符，最长5个字符', trigger: 'blur' },
                ],
              },
            };
          },
          methods: {
            onSubmit() {
              this.$refs.ruleForm.validate(valid => {
                if (valid) {
                  alert('submit!');
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
            },
          },
        };
        </script>`,
        drawerForm: `<script>
        export default {
          name: 'drawerForm',
          data() {
            return {
              visible: false,
              labelCol: {
                span: 3,
              },
              wrapperCol: {
                span: 21,
              },
              form: {
                name: '',
                info: '',
                num: 0,
                select: 'jack',
              },
              rules: {
                name: [
                  { required: true, message: '请输入输入框', trigger: 'blur' },
                  { min: 3, max: 5, message: '最短3个字符，最长5个字符', trigger: 'blur' },
                ],
              },
            };
          },
          methods: {
            onSubmit() {
              this.$refs.ruleForm.validate(valid => {
                if (valid) {
                  alert('submit!');
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
            },
          },
        };
        </script>`,
        formPageA: `<script>
        import box1 from './box1.vue';
        import box2 from './box2.vue';
        export default {
          name: 'formPageA',
          components: {
            box1,
            box2,
          },
          methods: {
            onSubmit() {
              this.$refs.box1.onSubmit(valid => {
                if (valid) {
                  alert('submit!');
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
            },
            resetForm() {
              this.$refs.box1.resetForm();
            },
          },
        };
        </script>`,
        formPageB: `<script>
        import box1 from './box1.vue';
        import box2 from './box2.vue';
        export default {
          name: 'formPageB',
          components: {
            box1,
            box2,
          },
          methods: {
            onSubmit() {
              this.$refs.box1.onSubmit(valid => {
                if (valid) {
                  alert('submit!');
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
            },
            resetForm() {
              this.$refs.box1.resetForm();
            },
          },
        };
        </script>`,
        box1: `<script>
          const validator = (rules, value, callback) => {
            const reg = /^(?:(?:|[1-9]|1{2}|2[0-4]|25[0-5])){3}(?:|[1-9]|1{2}|2[0-4]|25[0-5])$/;
            if (!reg.test(value)) {
              callback(new Error('ip 不正确'));
            }
            callback();
          };
          export default {
            name: 'box1',
            data() {
              return {
                labelCol: { span: 4 },
                wrapperCol: { span: 20 },
                options: [
                  {
                    value: 'jack1',
                    label: 'jack1',
                  },
                  {
                    value: 'jack2',
                    scopedSlots: {
                      title: 'title',
                    },
                    label: 'jack2',
                  },
                  {
                    value: 'jack3',
                    label: 'jack3',
                  },
                  {
                    value: 'jack4',
                    label: 'jack4',
                  },
                  {
                    value: 'jack6',
                    label: 'jack5',
                  },
                  {
                    value: 'jack8',
                    label: 'jack7',
                  },
                ],
                dataArr: [
                  {
                    label: 'CNware',
                    value: '1',
                    disabled: true,
                  },
                  {
                    label: '多选项多选项',
                    value: '2',
                  },
                  {
                    label: 'PowerVC',
                    value: '3',
                  },
                  {
                    label: '标签4',
                    value: '4',
                    disabled: true,
                  },
                  {
                    label: '标签5',
                    value: '5',
                  },
                  {
                    label: '多选项多选项多选项多选项',
                    value: '6',
                  },
                  {
                    label: '多选项7',
                    value: '7',
                  },
                  {
                    label: '多选项8',
                    value: '8',
                  },
                  {
                    label: '多选项9',
                    value: '9',
                  },
                  {
                    label: '多选项10',
                    value: '10',
                  },
                ],
                form: {
                  name: '',
                  tagData: ['标签1', '标签2', '标签3'],
                  linkTagValue: '2',
                  number: 1,
                  region: undefined,
                  region2: undefined,
                  date1: undefined,
                  delivery: false,
                  type: [],
                  desc: '',
                },
                rules: {
                  name: [
                    { required: true, message: 'Please input Activity name', trigger: 'blur' },
                    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
                  ],
                  region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
                  date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
                  type: [
                    {
                      required: true,
                      message: '请选择按钮型单选',
                      trigger: 'change',
                    },
                  ],
                  desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
                  ip: [{ validator: validator, message: 'ip 不正确', trigger: 'blur' }],
                },
              };
            },
            methods: {
              onSubmit(callback) {
                this.$refs.ruleForm.validate(callback);
              },
              resetForm() {
                this.$refs.ruleForm.resetFields();
              },
            },
          };
          </script>`,
        box2: `<script>
          const columns = [
            {
              title: '标题',
              dataIndex: 'name',
              key: 'name',
              scopedSlots: { customRender: 'name' },
              width: 200,
              filters: [
                {
                  text: 'Joe',
                  value: 'Joe',
                },
                {
                  text: 'Jim',
                  value: 'Jim',
                },
              ],
              onFilter: (value, record) => record.name.indexOf(value) === 0,
              sorter: (a, b) => a.name.length - b.name.length,
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
              ellipsis: true,
              width: 200,
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              scopedSlots: { customRender: 'tags' },
              width: 200,
            },
          ];
          const data = [
            {
              key: 'd1',
              name: '内容文本，点击可进入详情1',
              age: 32,
              address: 'New York No. 1 Lake Park  New York NoNew York NoNew York NoNew York NoNew York NoNew York NoNew York No',
              tags: ['nice', 'developer'],
            },
            {
              key: 'd2',
              name: '内容文本，点击可进入详情12',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: 'd3',
              name: '内容文本，点击可进入详情123',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];
          export default {
            name: 'box2',
            data() {
              return {
                labelCol: { span: 4 },
                wrapperCol: { span: 20 },
                form: {
                  table1: null,
                },
                rules: {
                  table1: [{ required: true, message: '请选择表格', trigger: 'blur' }],
                },
                selectedData: [],
                selectedDataKeys: [],
                columns,
                pagination: this.$YGetTablePagination({ hideOnSinglePage: true, pageSize: 99999 }),
              };
            },
            computed: {
              data() {
                let arr = [];
                for (let i = 0; i < 60; i++) {
                  let obj = { ...data[((Math.random() * 100).toFixed(0) - 0) % 2] };
                  obj.key = obj.key + i;
                  obj.name = obj.name + i;
                  arr.push(obj);
                }
                return arr;
              },
              choseName: {
                get() {
                  return this.selectedData[0] ? this.selectedData[0].name : '';
                },
              },
              rowSelection() {
                return {
                  columnWidth: 40,
                  type: 'radio',
                  selectedRowKeys: this.selectedDataKeys, // 控制选择
                };
              },
            },
            methods: {
              onSubmit(callback) {
                this.$refs.ruleForm.validate(callback);
              },
              resetForm() {
                this.$refs.ruleForm.resetFields();
              },
            },
          };
          </script>`,
        menuswitch: `<script>
      import tablePage from '../tablePage'; //tablePage 表格页 组件
      export default {
        name: 'menuswitch',
        data() {
          return {
            menuData: [
              {
                title: '主机管理',
                key: '/aa',
                antIcon: 'windows',
              },
              {
                title: '存储管理',
                antIcon: 'ie',
                link: true,
              },
              {
                title: '对象用户管理超长的超长的',
                antIcon: 'chrome',
              },
              {
                title: '系统管理',
                icon: 'eyes_visible',
                link: true,
              },
              {
                title: '弹性伸缩1超长的超长的',
                icon: 'eyes_visible',
                children: [
                  {
                    title: '对象用户管理1',
                    link: true,
                  },
                  {
                    title: '系统管理1',
                    antIcon: 'weibo',
                  },
                ],
              },
              {
                title: '弹性伸缩2',
                children: [
                  {
                    title: '超长的超长的对象用户管理2',
                    antIcon: 'qq',
                    link: true,
                  },
                  {
                    title: '系统管理2',
                  },
                ],
              },
            ],
            relevanMenuData: [
              {
                title: '系统设置',
                key: '/aa',
                antIcon: 'windows',
                link: true,
              },
              {
                title: 'VDC管理',
                antIcon: 'ie',
                link: true,
              },
              {
                title: '业务系统',
                antIcon: 'chrome',
                link: true,
              },
              {
                title: '系统管理',
                icon: 'eyes_visible',
                link: true,
              },
            ],
          };
        },
        components: { tablePage },
        methods: {
          modelMenuClick({ item, key, keyPath }) {
            console.log({ item, key, keyPath });
          },
        },
      };
      </script>`,
        modulePageA: `<script>
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
      </script>`,
        modulePageB: `<script>
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
        </script>`,
      },
      styleObj: {
        menuswitch: ``,
      },
      desObj: {
        formPageA: '注意自适应宽度如页面只有单个组件内容时请使用formPageB',
        formPageB: '固定宽度如页面只有其他组件内容时请使用formPageA',
      },
    };
  },
};
