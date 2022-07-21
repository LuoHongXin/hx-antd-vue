<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="SearchSelect" detail="结合业务封装的常见选择器。" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="常规" detail=""></funTitleDetail>
    <com-show>
      <y-search-select
        v-model="selectData"
        :search.sync="search"
        :dropdownStyle="{ width: '260px' }"
        placeholder="请选择账号"
        inputPlaceholder="请输入账号名"
      >
        <y-select-option v-for="t in selectList" :key="t.key" :value="t.key" :disabled="t.status !== 'active'">
          <y-tooltip style="display:flex;align-items: center;">
            <span slot="title">{{ t.name }}</span>
            <y-svg-icon icon-class="eyes_visible" style="font-size: 20px;" />
            <span class="text">
              {{ t.name }}
            </span>
            <y-tag :color="t.status === 'active' ? 'green' : 'red'">
              {{ t.status === 'active' ? '正常' : '异常' }}
            </y-tag>
          </y-tooltip>
        </y-select-option>
        <y-button style="width:100%;" slot="footer">
          账号管理
        </y-button>
      </y-search-select>
      <div>selectData: {{ selectData }}</div>
      <div>search: {{ search }}</div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text='html'/>
        <code class="language-javascript">
        export default {
          data() {
            return {
              selectData: '',
              search: '',
              list: [
                { key: 1, status: 'active', name: 'hhh' },
                { key: 2, status: 'error', name: 'xxx' },
              ],
            };
          },
          computed: {
            selectList() {
              // 通过输入框中的数据来进行筛选
              const search = this.search;
              const list = this.list;
              if (!search) return list;
              return list.filter(o => o.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
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
  name: 'SearchSelect',
  data() {
    return {
      selectData: '',
      search: '',
      list: [
        { key: 1, status: 'active', name: 'hhh' },
        { key: 2, status: 'error', name: 'xxx' },
      ],
      html: `<y-search-select
        v-model="selectData"
        :search.sync="search"
        :dropdownStyle="{ width: '260px' }"
        placeholder="请选择账号"
        inputPlaceholder="请输入账号名"
      >
        <y-select-option v-for="t in selectList" :key="t.key" :value="t.key" :disabled="t.status !== 'active'">
          <y-tooltip style="display:flex;align-items: center;">
            <span slot="title">{{ t.name }}</span>
            <y-svg-icon icon-class="eyes_visible" style="font-size: 20px;" />
            <span class="text">
              {{ t.name }}
            </span>
            <y-tag :color="t.status === 'active' ? 'green' : 'red'">
              {{ t.status === 'active' ? '正常' : '异常' }}
            </y-tag>
          </y-tooltip>
        </y-select-option>
        <y-button style="width:100%;" slot="footer">
          账号管理
        </y-button>
      </y-search-select>
      <div>selectData: {{ selectData }}</div>
      <div>search: {{ search }}</div>`,
      tableData: [
        {
          params: 'value(v-model)',
          type: 'String',
          default: '',
        },
        {
          params: 'search',
          explain: '搜索框绑定的数据 search.sync',
          type: 'string',
          default: '',
        },
        {
          params: 'placeholder',
          explain: '选择框默认文字',
          type: 'string',
          default: '',
        },
        {
          params: 'inputPlaceholder',
          explain: 'input选择框默认文字',
          type: 'string',
          default: '',
        },
        {
          params: 'emptyScene',
          explain: '无状态显示见empty组件',
          type: 'String | slot',
          default: '',
        },
        {
          params: 'widthSize',
          explain: '尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种',
          type: 'string',
          default: '单选s 多选xl',
        },
        {
          params: 'autoWidth',
          explain: '默认宽度, 父盒子撑开',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'dropdownStyle',
          explain: '下拉菜单的 style 属性',
          type: 'Object',
          default: '',
        },
        {
          params: 'dropdownClassName',
          explain: '下拉菜单的 className 属性',
          type: 'String',
          default: '',
        },
      ],
    };
  },
  computed: {
    selectList() {
      // 通过输入框中的数据来进行筛选
      const search = this.search;
      const list = this.list;
      if (!search) return list;
      return list.filter(o => o.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
    },
  },
};
</script>
