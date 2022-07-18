<template>
  <div>
    <title-detail title="带有搜索按钮的输入框。" detail=""></title-detail>
    <com-show>
      <div>
        <y-input-search placeholder="input search text" size="large" @search="onSearch" />
        <br /><br />
        <y-input-search
          @selectValueChange="selectValueChange"
          :selectOption="[
            { title: '条件1', value: '1' },
            { title: '条件2', value: '2' },
          ]"
          v-model="value"
          @search="onSearch"
          :selectValue.sync="selectValue"
        >
        </y-input-search>
        <br /><br />
        <y-input-search
          disabled
          :selectOption="[{ title: '条件1', value: '1' }]"
          v-model="value"
          @search="onSearch"
          :selectValue.sync="selectValue"
        >
        </y-input-search>
      </div>
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
      </pre>
      <pre class="line-numbers">
        <code class="language-javascript">
          export default {
            data() {
              return {
                value: '',
                selectValue: '1',
              }
            },
            methods: {
              onSearch(value) {
                console.log('onSearch', value);
              },
              selectValueChange(value) {
                console.log('selectValueChange', value);
              },
            },
          };
        </code>
      </pre>
    </com-show>
    <title-detail title="Input.Search" detail=""></title-detail>
    <api-table :data="tableDataSearch"></api-table>
  </div>
</template>

<script>
export default {
  name: 'myInputSearch',
  data() {
    return {
      html: `<div>
        <y-input-search placeholder="input search text" size="large" @search="onSearch" />
        <br /><br />
        <y-input-search
          @selectValueChange="selectValueChange"
          :selectOption="[
            { label: '条件1', value: '1' },
            { label: '条件2', value: '2' },
          ]"
          v-model="value"
          @search="onSearch"
          :selectValue.sync="selectValue"
        >
        </y-input-search>
        <br /><br />
        <y-input-search
          disabled
          :selectOption="[{ label: '条件1', value: '1' }]"
          v-model="value"
          @search="onSearch"
          :selectValue.sync="selectValue"
        >
        </y-input-search>
      </div>`,
      selectValue: '1',
      value: '',
      tableDataSearch: [
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
          default: 'm',
        },
        { params: 'allowClear', explain: '可以点击清除图标删除内容', type: 'boolean', default: 'false' },
        { params: 'placeholder', explain: '输入框默认文字', type: 'string' },
        { params: 'selectClassName', explain: 'select class类名' },
        { params: 'selectStyle', explain: 'select Style样式' },
        { params: 'disabled', explain: '置灰', type: 'boolean', default: 'false' },
        { params: 'selectOption', explain: '设置selectOption数组， 显示左边下拉框数据 详细见select', type: 'array' },
        { params: 'selectValue', explain: '显示左边下拉框数据绑定的数据,注意配合语法糖.sync使用', type: 'string | Number', default: '' },
        { params: 'loading', explain: '搜索 loading', type: 'boolean', default: 'false' },
        { params: 'search', explain: '点击搜索或按下回车键时的回调', type: 'function(value, event)' },
        { params: 'selectValueChange', explain: 'selectOption 的回调', type: 'Function(value)' },
      ],
    };
  },
  methods: {
    onSearch(value) {
      console.log('onSearch', value);
    },
    selectValueChange(value) {
      console.log('selectValueChange', value);
    },
  },
};
</script>
