<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="标签输入框" detail="可输入新增标签，并选择标签" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <com-show>
      不显示下拉框内容
      <y-tag-input :showDropdown="false" @click="inputNewTag('1212')" v-model="selectTag" @inputNewTag="inputNewTag" :data="datas" />
      显示下拉框内容
      <y-tag-input v-model="selectTag" @inputNewTag="inputNewTag" :data="datas" />

      <p style="margin-top: 10px">{{ selectTag }}</p>
      直接输入创建标签
      <y-tag-input inputAddNewTag :showDropdown="false" v-model="selectTag2" @inputNewTag="inputNewTag" />
      <p style="margin-top: 10px">{{ selectTag2 }}</p>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text='`
        不显示下拉框内容
        <y-tag-input
          :showDropdown="false"
          v-model="selectTag"
          @inputNewTag="inputNewTag"
          :data="datas"
        />
        显示下拉框内容
        <y-tag-input
          v-model="selectTag"
          @inputNewTag="inputNewTag"
          :data="datas"
        />
        <p style="margin-top: 10px">{{ selectTag }}</p>`'>
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
            export default {
                data() {
                    return {
                      selectTag: ['1', '2'],
                      datas: [
                        { label: 'CNware', value: '1',noClose: true },
                        { label: 'CNware1', value: '2' },
                      ]
                    };
                },
                methods: {
                    inputNewTag(val) {
                    console.log('%c%s', 'color:blue', val);
                    },
                },
            };
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'myTagInput',
  data() {
    return {
      selectTag: ['1', '2'],
      selectTag2: [],
      datas: [
        { label: 'CNware', value: '1', noClose: true },
        { label: 'CNware1', value: '2' },
      ],
      tableData: [
        {
          params: 'showDropdown',
          explain: '是否显示下拉框',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'autoWidth',
          explain: '默认宽度, 父盒子撑开',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'widthSize',
          explain: '尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种',
          type: 'string',
          default: 'l',
        },
        {
          params: 'data',
          explain: '初始标签数据，格式：[{label: "CNware",value: "1",noClose:Boolean // 不要关闭}]',
          type: 'Array',
          default: '[]',
        },
        { params: 'v-model', explain: '选中的标签value值', type: 'Array', default: '[]' },
        {
          params: 'canAdd',
          explain: '是否支持可以新增',
          type: 'Boolean',
          default: 'true',
        },
        {
          params: 'inputAddNewTag',
          explain: '是否支持直接可输入新增标签',
          type: 'Boolean',
          default: 'false',
        },
        {
          params: 'themeColor',
          explain: '主题颜色',
          type: 'string',
          default: '#454852',
        },
        {
          params: 'inputNewTag',
          explain: '新增标签回调函数',
          type: 'Function',
        },
      ],
    };
  },
  methods: {
    inputNewTag(val) {
      console.log('%c%s', 'color:blue', val);
    },
  },
};
</script>
