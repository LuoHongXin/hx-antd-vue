<template>
  <div class="y-model-table-container">
    <div class="y-table-header" v-if="tableHeader">
      <div class="left">
        <y-button-group v-if="buttonList2" :buttonList="buttonList2"></y-button-group>
      </div>
      <div class="right">
        <!-- 带选项 -->
        <y-input-search
          autoWidth
          key="hasOption"
          v-if="selectOptions"
          :placeholder="`请输入${searchTitle}`"
          v-model="inputSearch"
          @search="onSearch"
          :selectOption="selectOptions"
          :selectValue.sync="selectSearchKey"
          selectStyle="maxWidth:150px"
        >
        </y-input-search>
        <!-- 不带选项 -->
        <y-auto-complete v-else autoWidth key="noOption" :placeholder="`请输入${searchTitle}`" v-model="inputSearch" @onSearch="onSearch">
          <y-input>
            <a-icon slot="prefix" type="search" class="certain-category-icon" />
          </y-input>
        </y-auto-complete>
        <div class="icon-btn-group">
          <a-tooltip v-if="fresh" placement="top">
            <template slot="title">
              <span>重置</span>
            </template>
            <y-button icon="fresh" @click="freshTable"></y-button>
          </a-tooltip>
          <a-tooltip placement="top" v-if="$listeners.filter">
            <template slot="title">
              <span>高级搜索</span>
            </template>
            <y-button icon="filter" @click="filter"></y-button>
          </a-tooltip>
          <a-tooltip placement="top" v-if="$listeners.download">
            <template slot="title">
              <span>导出</span>
            </template>
            <y-button icon="download" @click="download"></y-button>
          </a-tooltip>
          <a-tooltip placement="top" v-if="setting">
            <template slot="title">
              <span>列设置</span>
            </template>
            <y-dropdown-check-button v-model="columnsCheck" :checkList="columnsCheckList" />
          </a-tooltip>
        </div>
      </div>
    </div>

    <!-- 用于显示吸顶固定的表头 -->
    <a-affix :offset-top="0" v-if="affixTarget" v-show="fixedTableShow" :target="affixTarget">
      <y-table
        class="Fixedtable"
        ref="FixedtableRef"
        :scroll="scroll ? scroll : {}"
        :getPopupContainer="getPopupContainer"
        v-model="selectedData"
        :row-key="rowKey"
        bordered
        @change="handleTableChange"
        :row-selection="rowSelection2"
        :components="$YGetTableDragHeader(columns3)"
        :columns="columns3"
        :data-source="tableData"
        :pagination="false"
        :modelKeys.sync="selectedDataKeys"
      >
        <template
          v-for="col in columns"
          :slot="col.scopedSlots ? col.scopedSlots.customRender : ''"
          slot-scope="text, record, index, column"
        >
          <a-tooltip :key="col.dataIndex" placement="topLeft">
            <template slot="title">
              <span>{{ text }}</span>
            </template>
            <slot
              :name="col.scopedSlots ? col.scopedSlots.customRender : ''"
              :text="text"
              :record="record"
              :index="index"
              :column="column"
            ></slot>
          </a-tooltip>
        </template>
        <template v-for="col in columns" :slot="col.slots ? col.slots.title : ''">
          <slot :name="col.slots ? col.slots.title : ''"></slot>
        </template>
      </y-table>
    </a-affix>
    <a-config-provider>
      <template #renderEmpty>
        <y-empty :scene="emptyScene"></y-empty>
      </template>
      <y-table
        ref="tableRef"
        :scroll="scroll ? scroll : {}"
        :getPopupContainer="getPopupContainer"
        v-model="selectedData"
        :row-key="rowKey"
        bordered
        @change="handleTableChange"
        :row-selection="rowSelection2"
        :components="$YGetTableDragHeader(columns3)"
        :columns="columns3"
        :data-source="tableData"
        :pagination="false"
        :loading="loading"
        :modelKeys.sync="selectedDataKeys"
      >
        <template
          v-for="col in columns3"
          :slot="col.scopedSlots ? col.scopedSlots.customRender : ''"
          slot-scope="text, record, index, column"
        >
          <span v-if="!text && !col.scopedSlots" :key="col.dataIndex">-</span>
          <a-tooltip v-else-if="col.ellipsis && col.autoEllipsis" :key="col.dataIndex" placement="top">
            <template slot="title">
              <span>{{ text }}</span>
            </template>
            <span class="text-ellipsis" :style="`max-width:${col.copy ? '90%' : '100%'}`">{{ text }}</span>
          </a-tooltip>
          <a-tooltip v-else-if="col.ellipsis && !col.autoEllipsis" :key="col.dataIndex" placement="top">
            <template slot="title">
              <span>{{ text }}</span>
            </template>
            <slot
              :name="col.scopedSlots ? col.scopedSlots.customRender : ''"
              :text="text"
              :record="record"
              :index="index"
              :column="column"
            ></slot>
          </a-tooltip>
          <slot
            v-else
            :name="col.scopedSlots ? col.scopedSlots.customRender : ''"
            :text="text"
            :record="record"
            :index="index"
            :column="column"
          ></slot>
          <a-tooltip v-if="col.copy && text" :key="'copy' + col.dataIndex" placement="top">
            <template slot="title">
              <span>复制</span>
            </template>
            <y-svg-icon class="anticon" icon-class="copy" @click="copyText(text)" />
          </a-tooltip>
        </template>
        <template v-for="col in columns" :slot="col.slots ? col.slots.title : ''">
          <slot :name="col.slots ? col.slots.title : ''"></slot>
        </template>
      </y-table>
    </a-config-provider>

    <a-affix :offset-bottom="0" @change="tableFooterAffixChange" :target="affixTarget">
      <div class="y-table-footer" ref="tableFooter">
        <div class="left">
          <y-button-group
            moreText="批量操作"
            :moreBtnNum="1"
            v-if="batchOperateShow && rowSelection2 && buttonList2"
            :buttonList="buttonList2"
          ></y-button-group>
          <span class="select-text" v-if="rowSelection2">已选：{{ selectedDataKeys.length }}项</span>
          <y-button v-if="rowSelection2" @click="clearSelect" type="link">清空</y-button>
        </div>
        <div class="right">
          <y-pagination
            :total="pagination.total"
            :page.sync="pagination.page"
            :limit.sync="pagination.limit"
            @pagination="paginationChange"
          />
        </div>
      </div>
    </a-affix>
  </div>
</template>
<script>
import { deepCopy } from '@src/utils/common.js';
// 查找整个表格节点
const findTableElement = el => {
  if (el.parentNode.tagName === 'TABLE') return el.parentNode;
  return findTableElement(el.parentNode);
};
export default {
  name: 'YModelTable',
  props: {
    rowSelection: { type: [Object, Boolean], default: true },
    scroll: {
      type: Object,
      default: null,
    },
    affixTarget: {
      type: Function,
      default: null,
    },
    tableHeader: {
      type: Boolean,
      default: true,
    },
    // 表格内的悬浮相对定位对象
    getPopupContainer: {
      type: Function,
      default: triggerNode => {
        return findTableElement(triggerNode) || document.body;
      },
    },
    // 非请求获取表格数据，通过该参数传全部表格数据
    dataSource: {
      type: Array,
      default: function() {
        return null;
      },
    },
    columns: {
      type: Array,
      default: function() {
        return [];
      },
    },
    rowKey: {
      type: [String, Function],
      default: function() {
        return 'id';
      },
    },
    // 表头左侧操作按钮
    buttonList: {
      type: Array,
      default: function() {
        return null;
      },
    },
    // 请求方法
    api: {
      type: Function,
      default: function() {
        return null;
      },
    },
    // 是否在表格加载完成时就立即请求数据
    immediately: {
      type: Boolean,
      default: function() {
        return true;
      },
    },
    // 修改请求参数的名称
    paramsKeyFilter: {
      type: Object,
      default: null,
    },
    // 额外的参数
    extraParams: {
      type: Object,
      default: null,
    },
    // 是否需要刷新
    fresh: {
      type: Boolean,
      default: true,
    },
    // 是否需要设置列
    setting: {
      type: Boolean,
      default: true,
    },
    // 搜索下拉选项
    selectOptions: {
      type: Array,
      default: function() {
        return null;
        // [ { title: '标题', value: 'nameLike' } ];
      },
    },
    // 处理请求成功后数据的赋值
    handleResponse: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      emptyScene: 'noData',
      batchOperateShow: false,
      fixedTableShow: false, // 控制固定表头的显示隐藏
      loading: false,
      columns2: [...this.columns], // 列数据中间转换值
      selectedData: [],
      selectedDataKeys: [],
      filters: null,
      sorter: null,
      searchValue: '', // 最终搜索的字段
      inputSearch: '', // 输入框实时的字段
      selectSearchKey: this.selectOptions ? this.selectOptions[0].value : null, // 下拉选项选择的搜索关键字
      pagination: {
        page: 1,
        limit: 10,
        total: 0,
      },
      tableData: [],
    };
  },
  computed: {
    // 最终头部左侧按钮组数据
    buttonList2: {
      get() {
        if (this.buttonList) {
          const buttonList = deepCopy(this.buttonList);
          return buttonList.map(item => {
            // 默认非primary，且不带disable的按钮和checkDisabled为true的按钮
            if ((item.checkDisabled !== false && item.disable === undefined && item.type !== 'primary') || item.checkDisabled) {
              // 根据表格是否选中数据判定禁用
              item.disable = this.selectedDataKeys.length === 0;
            }
            return item;
          });
        }
        return null;
      },
    },
    // 最终显示到表格的列数据
    columns3: {
      get() {
        const { filters, sorter, columns2 } = this;
        return columns2.map(i => {
          // 控制过滤
          if (i.onFilter || i.filter) {
            i.filteredValue = filters ? filters[i.dataIndex] || null : null;
          }
          // 控制排序
          if (i.sorter) {
            i.sortOrder = sorter ? sorter.columnKey === i.dataIndex && sorter.order : null;
          }
          if (i.ellipsis && !i.scopedSlots) {
            i.autoEllipsis = true;
            i.scopedSlots = { customRender: i.dataIndex };
          }
          return i;
        });
      },
    },
    // 搜索关键字的名称
    searchTitle() {
      const selectOptions = this.selectOptions;
      if (selectOptions) {
        for (let i = 0; i < selectOptions.length; i++) {
          if (selectOptions[i].value === this.selectSearchKey) {
            return selectOptions[i].title;
          }
        }
      }
      if (this.columns.length > 0) {
        return this.columns[0].title;
      }
      return this.columns[0].title;
    },
    rowSelection2() {
      let dfRowSelection = {
        columnWidth: 40,
        selectedRowKeys: this.selectedDataKeys, // 控制选择
      };
      if (this.rowSelection) {
        // 选择配置为对象且不能有控制选择的配置
        if (typeof this.rowSelection === 'object' && !this.rowSelection.selectedRowKeys) {
          return Object.assign(dfRowSelection, this.rowSelection);
        }
        return dfRowSelection;
      }
      return null;
    },
    // 请求参数键值
    paramsKey() {
      let p = {
        start: 'start', // 起始页
        size: 'size', // 分页大小
        search: 'nameLike', // 搜索框
        sort: 'sort', // 排序对象
        order: 'order', // 排序顺序
      };
      if (this.paramsKeyFilter) {
        Object.assign(p, this.paramsKeyFilter);
      }
      return p;
    },
    columnsCheckList: {
      get() {
        return this.columns.map(i => {
          return { text: i.title, value: i.dataIndex };
        });
      },
    },
    columnsCheck: {
      get() {
        return this.columns2.map(i => {
          return i.dataIndex;
        });
      },
      set(val) {
        this.columns2 = this.columns.filter(i => {
          return val.includes(i.dataIndex);
        });
      },
    },
  },
  mounted() {
    this.setAffix();
    if (this.immediately) {
      this.getTableData();
    }
  },
  beforeDestroy() {
    this.clearAffix();
  },
  watch: {
    dataSource: {
      handler: function() {
        this.getTableData();
      },
      deep: true,
    },
  },
  methods: {
    tableFooterAffixChange(fixed) {
      this.batchOperateShow = fixed;
    },
    copyText(text) {
      const _this = this;
      this.$copyText(text).then(
        function(e) {
          _this.$message.success('文本已复制');
          console.log('复制成功', e);
        },
        function(e) {
          _this.$message.error('文本复制失败，请手动尝试复制');
          console.log('复制失败', e);
        }
      );
    },
    isElementInViewport(el) {
      //获取元素是否在可视区域
      var rect = el.getBoundingClientRect();
      return rect.bottom > 0;
    },
    scrollEvent: function() {
      const scrollTarget = this.affixTarget();
      // 表格在可是范围内且滚动距离大于表格头部距离可是窗口头部的距离，则显示吸顶头部
      if (
        this.$refs.tableRef &&
        this.isElementInViewport(this.$refs.tableRef.$el) &&
        scrollTarget.scrollTop >= this.$refs.tableRef.$el.offsetTop
      ) {
        this.fixedTableShow = true;
      } else {
        this.fixedTableShow = false;
      }
    },
    // scrollEvent: debounce(function(_this) {
    //   console.log(_this, '_this');
    //   const scrollTarget = _this.affixTarget();
    //   // 表格在可是范围内且滚动距离大于表格头部距离可是窗口头部的距离，则显示吸顶头部
    //   if (
    //     _this.$refs.tableRef &&
    //     _this.isElementInViewport(_this.$refs.tableRef.$el) &&
    //     scrollTarget.scrollTop >= _this.$refs.tableRef.$el.offsetTop
    //   ) {
    //     _this.fixedTableShow = true;
    //   } else {
    //     _this.fixedTableShow = false;
    //   }
    // }, 5),
    setAffix() {
      if (this.affixTarget) {
        const scrollTarget = this.affixTarget();
        if (scrollTarget) {
          scrollTarget.addEventListener('scroll', this.scrollEvent.bind(this, this));
        }
      }
    },
    clearAffix() {
      if (this.affixTarget) {
        const scrollTarget = this.affixTarget();
        if (scrollTarget) {
          scrollTarget.removeEventListener('scroll', this.scrollEvent.bind(this, this));
        }
      }
    },
    // 清空表格选项数据
    clearSelect() {
      this.selectedDataKeys = [];
    },
    onSearch(val) {
      this.searchValue = typeof val === 'string' ? val : '';
      this.$set(this.pagination, 'page', 1);
      this.getTableData();
      this.$emit('onSearch', this.searchValue); // 搜索回调
    },
    getTableData() {
      let params = {};
      this.loading = true;
      const { paramsKey, pagination, searchValue, selectSearchKey, sorter, filters, extraParams } = this;
      if (this.dataSource) {
        let tbdata = [];
        const dataSource = searchValue
          ? this.dataSource.filter(item => {
              return (
                item[selectSearchKey ? selectSearchKey : paramsKey.search] &&
                item[selectSearchKey ? selectSearchKey : paramsKey.search].includes(searchValue)
              );
            })
          : [...this.dataSource];
        for (let i = (pagination.page - 1) * pagination.limit; i < pagination.page * pagination.limit; i++) {
          if (dataSource[i]) {
            tbdata.push(dataSource[i]);
          }
        }
        this.assignTableData(tbdata);
        this.loading = false;
        this.$set(this.pagination, 'total', dataSource.length);
      } else {
        Object.keys(paramsKey).forEach(pKey => {
          if (pKey === 'start') {
            params[paramsKey.start] = pagination.page;
          } else if (pKey === 'size') {
            params[paramsKey.size] = pagination.limit;
          } else if (pKey === 'search') {
            if (searchValue) {
              if (selectSearchKey) {
                params[selectSearchKey] = searchValue;
              } else {
                params[paramsKey.search] = searchValue;
              }
            }
          } else if (pKey === 'sort' || pKey === 'order') {
            if (sorter && sorter.order && !params[paramsKey.sort]) {
              params[paramsKey.sort] = sorter.columnKey;
              params[paramsKey.order] = sorter.order === 'ascend' ? 'asc' : 'desc';
            }
          } else {
            // 其它keyfilter默认赋搜索值
            params[paramsKey[pKey]] = searchValue;
          }
        });
        if (filters) {
          Object.keys(filters).forEach(key => {
            if (filters[key]) {
              params[key] = filters[key].join();
            }
          });
        }
        if (extraParams) {
          Object.assign(params, extraParams);
        }
        // 有网才请求
        if (navigator.onLine) {
          this.api(params)
            .then(res => {
              if (this.handleResponse) {
                const data = this.handleResponse(res, 'data');
                const total = this.handleResponse(res, 'total');
                this.assignTableData(data);
                this.$set(this.pagination, 'total', total || 0);
              } else {
                this.assignTableData(res.data);
                this.$set(this.pagination, 'total', res.total || 0);
              }
              this.$emit('getTableCallback', { data: res, type: 'success' }); // 获取列表回调
              this.loading = false;
            })
            .catch(err => {
              this.emptyScene = 'systemError';
              this.$emit('getTableCallback', { data: err, type: 'error' }); // 获取列表回调
              this.loading = false;
            });
        } else {
          this.assignTableData([]);
          this.loading = false;
          this.emptyScene = 'networkError';
        }
      }
    },
    paginationChange(pages) {
      this.pagination = pages;
      this.getTableData();
    },
    handleTableChange(pagination, filters, sorter) {
      this.filters = filters;
      this.sorter = sorter;
      this.getTableData();
    },
    // 刷新表格
    freshTable() {
      this.inputSearch = '';
      this.filters = null;
      this.sorter = null;
      this.$set(this.pagination, 'page', 1);
      this.onSearch(this.inputSearch);
    },
    download() {
      this.$emit('download');
    },
    filter() {
      this.$emit('filter');
    },
    // 专门规范给表格赋值
    assignTableData(data) {
      // 有值则直接赋值
      if (data && Array.isArray(data) && data.length > 0) {
        this.tableData = data;
      } else {
        // 没有值则跳到上一页
        if (this.pagination.page > 1) {
          this.$set(this.pagination, 'page', this.pagination.page - 1);
          this.getTableData();
        } else {
          this.tableData = [];
        }
      }
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/components/modelTable.less';
</style>