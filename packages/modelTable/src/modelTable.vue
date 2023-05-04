<template>
  <div :class="`y-model-table-container ${tableHeightSize}`" :empty="tableData.length === 0">
    <div class="y-table-header" v-if="tableHeader">
      <div class="left">
        <y-button-group v-if="tableHeader2.left && buttonList2" :buttonList="buttonList2"></y-button-group>
        <template v-if="$slots.tableHeaderLeft">
          <slot name="tableHeaderLeft"></slot>
        </template>
      </div>
      <div class="right">
        <template v-if="$slots.tableHeaderRight">
          <slot name="tableHeaderRight"></slot>
        </template>
        <template v-if="tableHeader2.right">
          <!-- 带选项 selectOptions -->
          <template v-if="getProps('search')">
            <div v-if="getProps('searchType') === 'autoComplete'" class="y-model-table-auto-complete">
              <y-select class="y-input-search-select" v-if="selectOptions" autoWidth v-model="selectSearchKey" :options="selectOptions">
              </y-select>
              <y-auto-complete
                style="flex: 1"
                :isSelect="selectOptions && selectOptions.length < 1"
                autoWidth
                :allowClear="getProps('allowClear')"
                key="hasOption2"
                v-model="inputSearch"
                :placeholder="searchTitle"
                @onSearch="onSearch"
              >
                <y-input>
                  <a-tooltip placement="top" slot="prefix">
                    <template slot="title">
                      <span>{{ $wci18n.t('wh.modalTables.search') }}</span>
                    </template>
                    <a-icon type="search" />
                  </a-tooltip>
                </y-input>
              </y-auto-complete>
            </div>

            <y-input-search
              autoWidth
              :tooltipTitle="$wci18n.t('wh.modalTables.search')"
              :allowClear="getProps('allowClear')"
              key="hasOption"
              :placeholder="searchTitle"
              v-model="inputSearch"
              @search="onSearch"
              :selectOption="selectOptions"
              :selectValue.sync="selectSearchKey"
              selectStyle="maxWidth:150px"
              v-else
            >
            </y-input-search>
          </template>
          <div class="icon-btn-group">
            <YIconButton v-if="getProps('fresh')" :title="$wci18n.t('wh.modalTables.reset')" icon="fresh" @click="freshTable" />
            <YIconButton
              v-if="$listeners.filter && getProps('filterShow')"
              :title="$wci18n.t('wh.modalTables.advancedSearch')"
              icon="filter"
              @click="filter"
            />
            <YIconButton
              v-if="$listeners.download && getProps('downloadShow')"
              :title="$wci18n.t('wh.modalTables.export')"
              icon="download"
              @click="download"
            />
            <y-dropdown-check-button
              v-model="tableHeightSize"
              :useSlot="true"
              v-if="getProps('setTableHeight')"
              :single="true"
              :checkList="tableHeightSizeList"
            >
              <YIconButton :title="$wci18n.t('wh.modalTables.tableHeight')" icon="height-set" />
            </y-dropdown-check-button>

            <a-tooltip placement="top" v-if="getProps('setting')">
              <template slot="title">
                <span>{{ $wci18n.t('wh.modalTables.columnSetting') }}</span>
              </template>
              <y-column-check
                @confirm="columnCheckConfirm"
                @reset="columnCheckReset"
                :checkvalue="columnsCheck"
                :checkList="columnsCheckList"
              />
            </a-tooltip>
          </div>
        </template>
      </div>
    </div>

    <!-- 用于显示吸顶固定的表头 -->
    <a-affix
      :offset-top="0"
      v-if="getProps('affixTarget') && freshAffix"
      @change="tableFooterAffixChange"
      :target="getProps('affixTarget')"
    >
      <y-table
        v-show="fixedTableShow"
        class="Fixedtable"
        ref="FixedtableRef"
        :scroll="scroll ? scroll : {}"
        :getPopupContainer="getProps('getPopupContainer')"
        v-model="selectedData"
        :row-key="rowKey"
        :bordered="bordered"
        @change="handleTableChange"
        v-on="$listeners"
        :row-selection="rowSelection2"
        :columns="columns3"
        :key="tableShowKey"
        :data-source="tableData"
        :pagination="false"
        :modelKeys.sync="selectedDataKeys"
      >
        <!-- 表头插槽 -->
        <template v-for="col in columns3" :slot="col.slots ? col.slots.title : ''">
          <!-- tips表头提示 -->
          <span :key="col.dataIndex" v-if="col.tips"
            >{{ col.tipsTitle }}
            <y-tooltip>
              <template slot="title">
                <span>{{ col.tips }} </span>
              </template>
              <y-svg-icon icon-class="yquestion" style="width: 14px; height: 14px" />
            </y-tooltip>
          </span>
          <slot v-else :name="col.slots ? col.slots.title : ''"></slot>
        </template>
      </y-table>
    </a-affix>
    <y-config-provider>
      <template #renderEmpty>
        <y-empty :scene="emptyScene"></y-empty>
      </template>
      <y-table
        ref="tableRef"
        :scroll="scroll ? scroll : {}"
        :getPopupContainer="getProps('getPopupContainer')"
        v-model="selectedData"
        :row-key="rowKey"
        :bordered="bordered"
        @change="handleTableChange"
        v-on="$listeners"
        :row-selection="rowSelection2"
        :components="getProps('columnDrag') ? $YGetTableDragHeader(columns3, 1000, getTableDragStop) : {}"
        :columns="columns3"
        :key="tableShowKey"
        :data-source="tableData"
        :pagination="false"
        :loading="loading"
        :modelKeys.sync="selectedDataKeys"
      >
        <!-- 表体插槽 -->
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
              <span>{{ $wci18n.t('wh.modalTables.copy') }}</span>
            </template>
            <y-svg-icon class="anticon" icon-class="copy" @click="copyText(text)" />
          </a-tooltip>
        </template>
        <!-- 表头插槽 -->
        <template v-for="col in columns3" :slot="col.slots ? col.slots.title : ''">
          <!-- tips表头提示 -->
          <span :key="col.dataIndex" v-if="col.tips"
            >{{ col.tipsTitle }}
            <y-tooltip>
              <template slot="title">
                <span>{{ col.tips }} </span>
              </template>
              <y-svg-icon icon-class="yquestion" style="width: 14px; height: 14px" />
            </y-tooltip>
          </span>
          <slot v-else :name="col.slots ? col.slots.title : ''"></slot>
        </template>
      </y-table>
    </y-config-provider>

    <!-- 表格脚部 -->
    <a-affix :offset-bottom="0" v-if="tableData.length > 0 && getProps('paginationShow')" :target="getProps('affixTarget')">
      <!-- mini分页 -->
      <div v-if="getProps('paginationType') === 'mini'" class="y-table-footer" ref="tableFooter">
        <div class="left"></div>
        <div class="right">
          <y-pagination
            type="mini"
            :total="pagination.total"
            :page.sync="pagination.page"
            :limit.sync="pagination.limit"
            @pagination="paginationChange"
          />
        </div>
      </div>
      <!-- middle分页 -->
      <div v-else-if="getProps('paginationType') === 'middle'" class="y-table-footer" ref="tableFooter">
        <div class="left"></div>
        <div class="right">
          <y-pagination
            type="middle"
            :total="pagination.total"
            :page.sync="pagination.page"
            :limit.sync="pagination.limit"
            @pagination="paginationChange"
          />
        </div>
      </div>
      <div v-else class="y-table-footer" ref="tableFooter">
        <div class="left">
          <y-button-group
            :moreText="$wci18n.t('wh.modalTables.batchOperation')"
            :moreBtnNum="1"
            v-if="batchOperateShow && rowSelection2 && buttonList2"
            :buttonList="buttonList2"
          ></y-button-group>
          <span class="select-text" v-if="rowSelection2 && bottomClear"
            >{{ $wci18n.t('wh.modalTables.selected') }}{{ selectedDataKeys.length }}{{ $wci18n.t('wh.modalTables.item') }}</span
          >
          <y-button v-if="rowSelection2 && bottomClear && selectedDataKeys.length > 0" @click="clearSelect" type="link">{{
            $wci18n.t('wh.modalTables.clear')
          }}</y-button>
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
import { deepCopy, safeGet } from '../../../src/utils/common.js';
import injectConfigMixins from '../../../src/utils/injectConfigMixins.js';
import YIconButton from './iconButton.vue';
// 查找整个表格节点
// const findTableElement = (el) => {
//   if (el.parentNode.tagName === 'TABLE') return el.parentNode;
//   return findTableElement(el.parentNode);
// };
export default {
  name: 'YModelTable',
  mixins: [injectConfigMixins],
  components: {
    YIconButton,
  },
  props: {
    filterShow: {
      type: Boolean,
      default: true,
    },
    downloadShow: {
      type: Boolean,
      default: true,
    },
    paginationShow: {
      type: Boolean,
      default: true,
    },
    paginationType: {
      type: String,
      default: 'normal',
    },
    columnDrag: {
      type: Boolean,
      default: true,
    },
    // 表格列设置保存时的标识
    tableKey: {
      type: String,
      default: '',
    },
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
      type: [Boolean, Object],
      default: function () {
        return {
          left: true,
          right: true,
        };
      },
    },
    // 表格内的悬浮相对定位对象
    getPopupContainer: {
      type: Function,
      default: () => {
        // return findTableElement(triggerNode) || document.body;
        return document.body;
      },
    },
    // 非请求获取表格数据，通过该参数传全部表格数据
    dataSource: {
      type: Array,
      default: function () {
        return null;
      },
    },
    columns: {
      type: Array,
      default: function () {
        return [];
      },
    },
    rowKey: {
      type: [String, Function],
      default: function () {
        return 'id';
      },
    },
    // 表头左侧操作按钮
    buttonList: {
      type: Array,
      default: function () {
        return null;
      },
    },
    // 请求方法
    api: {
      type: Function,
      default: function () {
        return null;
      },
    },
    // 是否在表格加载完成时就立即请求数据
    immediately: {
      type: Boolean,
      default: function () {
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
    //前端分页额外参数的过滤
    filterExtraParams: {
      type: Object,
      default: () => {},
    },
    // 是否需要搜索
    search: {
      type: Boolean,
      default: true,
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
    // 是否需要设置表格密度
    setTableHeight: {
      type: Boolean,
      default: false,
    },
    // 搜索下拉选项
    selectOptions: {
      type: Array,
      default: function () {
        return null;
        // [ { title: '标题', value: 'nameLike' } ];
      },
    },
    // 处理请求成功后数据的赋值
    handleResponse: {
      type: Function,
      default: null,
    },
    // 搜索关键字的名称
    searchPlaceholder: {
      type: String,
      default: null,
    },
    // 列设置展示默认勾选的数据
    defaultCheckColumsValue: {
      type: Array,
      default: null,
    },
    // 前端分页时，是否自动根据搜索内容过滤
    autoSearchFilter: {
      type: Boolean,
      default: true,
    },
    selectData: {
      type: Array,
      default: () => [],
    },
    modelKeys: {
      type: Array,
      default: () => [],
    },
    bordered: {
      type: Boolean,
      default: true,
    },
    searchType: {
      type: String,
      default: 'default',
    },
    bottomClear: {
      type: Boolean,
      default: true,
    },
    allowClear: {
      type: Boolean,
      default: true,
    },
    //用于前端分页 过滤 全选中是否展示全部
    checkFilterAll: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'selectData',
    event: 'update-selectData',
  },
  data() {
    const selectedData = this.selectData || [];
    const selectedDataKeys = this.modelKeys || [];
    return {
      tableHeightSize: 'default-height', // 表格高度尺寸
      tableHeightSizeList: [
        {
          text: this.$wci18n.t('wh.modalTables.looseHeight'),
          value: 'loose-height',
        },
        {
          text: this.$wci18n.t('wh.modalTables.defaultHeight'),
          value: 'default-height',
        },
        {
          text: this.$wci18n.t('wh.modalTables.compactHeight'),
          value: 'compact-height',
        },
      ], // 表格高度尺寸
      freshAffix: true, // 刷新吸顶表格父元素宽度
      emptyScene: 'noData',
      batchOperateShow: false,
      fixedTableShow: false, // 控制固定表头的显示隐藏
      loading: false,
      selectedData,
      selectedDataKeys,
      columns2: [...this.columns], // 列数据中间转换值
      columns3: [], // 最终显示到表格的列数据
      filters: null,
      sorter: null,
      queryParams: null, // 上次请求参数
      searchValue: '', // 最终搜索的字段
      inputSearch: '', // 输入框实时的字段
      selectSearchKey: this.selectOptions && this.selectOptions[0] ? this.selectOptions[0].value : null, // 下拉选项选择的搜索关键字
      pagination: {
        page: 1,
        limit: 10,
        total: 0,
      },
      tableData: [],
      tableShowKey: '123', // 保证视图更新表格
      //存储dataSource为了处理排序
      dataSource2: [],
    };
  },
  computed: {
    tableKey2({ tableKey, $route }) {
      return tableKey || $route.name;
    },
    tableHeader2: {
      get({ tableHeader }) {
        if (tableHeader) {
          if (tableHeader instanceof Object) {
            return Object.assign({ left: true, right: true }, tableHeader);
          } else {
            return { left: true, right: true };
          }
        }
        return {};
      },
    },
    // 最终头部左侧按钮组数据
    buttonList2: {
      get({ buttonList, selectedDataKeys }) {
        if (buttonList) {
          const btnlist = deepCopy(buttonList);
          return btnlist.map((item) => {
            // 默认非primary，且不带disable的按钮和checkDisabled为true的按钮
            if ((item.checkDisabled !== false && item.disable === undefined && item.type !== 'primary') || item.checkDisabled) {
              // 根据表格是否选中数据判定禁用
              item.disable = selectedDataKeys.length === 0;
              if (!item.tips) {
                item.tips = selectedDataKeys.length === 0 ? this.$wci18n.t('wh.modalTables.pleaseSelectDataFirst') : '';
              }
            }
            return item;
          });
        }
        return null;
      },
    },
    // 搜索关键字的名称
    searchTitle({ selectOptions, columns, selectSearchKey }) {
      if (this.getProps('searchPlaceholder')) {
        return this.getProps('searchPlaceholder');
      }
      if (selectOptions) {
        for (let i = 0; i < selectOptions.length; i++) {
          if (selectOptions[i].value === selectSearchKey) {
            return this.$wci18n.t('wh.modalTables.pleaseInput') + `${selectOptions[i].title}`;
          }
        }
      }
      if (columns.length > 0 && columns[0].title) {
        return this.$wci18n.t('wh.modalTables.pleaseInput') + `${columns[0].title}`;
      }
      return this.$wci18n.t('wh.modalTables.pleaseInput');
    },
    rowSelection2({ selectedDataKeys, rowSelection }) {
      let dfRowSelection = {
        columnWidth: 40,
        selectedRowKeys: selectedDataKeys, // 控制选择
      };
      if (rowSelection) {
        // 选择配置为对象且不能有控制选择的配置
        if (typeof rowSelection === 'object' && !rowSelection.selectedRowKeys) {
          return Object.assign(dfRowSelection, rowSelection);
        }
        return dfRowSelection;
      }
      return null;
    },
    // 请求参数键值
    paramsKey({ paramsKeyFilter }) {
      let p = {
        start: 'start', // 起始页
        size: 'size', // 分页大小
        search: 'nameLike', // 搜索框
        sort: 'sort', // 排序对象
        order: 'order', // 排序顺序
      };
      if (paramsKeyFilter) {
        Object.assign(p, paramsKeyFilter);
      }
      return p;
    },
    columnsCheckList: {
      get({ columns }) {
        return columns.map((i) => {
          return {
            text: i.columnSetTitle || i.title,
            value: i.dataIndex,
            disabled: i.columnsCheckDisabled || Boolean(i.fixed),
            fixed: i.fixed,
          };
        });
      },
    },
    // 选中列的dataIndex
    columnsCheck: {
      get({ columns2 }) {
        return columns2.map((i) => {
          return i.dataIndex;
        });
      },
      set(val) {
        const arr = [];
        const columns = this.columns;
        val.forEach((str) => {
          for (let index = 0; index < columns.length; index++) {
            const item = columns[index];
            if (item.dataIndex === str) {
              arr.push(item);
            }
          }
        });
        this.columns2 = arr;
      },
    },
  },
  created() {
    this.setDataSource();
    try {
      let tbo = localStorage.getItem('tableColumnsObject');
      const tk = this.tableKey2;
      if (tbo) {
        tbo = JSON.parse(tbo);
        if (tbo[tk]) {
          this.columnCheckConfirm(tbo[tk]);
        }
      }
    } catch (err) {
      console.error(err);
    }
  },
  mounted() {
    this.setAffix();
    this.tableScroll();
    if (this.getProps('immediately')) {
      this.getTableData();
    }
    // 窗口大小调整时，吸顶表格宽度需更新
    window.addEventListener('resize', this.handleFixedTableShow);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleFixedTableShow);
    this.clearAffix();
  },
  watch: {
    filters: {
      handler(val, oldVal) {
        let hasVal = false; // 是否有过滤值
        if (val instanceof Object) {
          Object.values(val).forEach((i) => {
            if (i) hasVal = true;
          });
        }
        let isSame = JSON.stringify(val) === JSON.stringify(oldVal);
        // 新旧值一致或没值不执行
        if (!hasVal || isSame) {
          // this.getColumns();
        } else {
          this.getColumns('filters');
        }
      },
    },
    sorter: {
      handler(val, oldVal) {
        // 新旧值一致或没值不执行
        if ((val && ((oldVal && val.columnKey === oldVal.columnKey && val.order === oldVal.order) || !val.columnKey)) || !val) {
          // this.getColumns();
        } else {
          this.getColumns('sorter');
        }
      },
    },
    columns: {
      handler(val, oldVal) {
        // 只有列变化才更新列，避免随意更新导致插槽更新进入一个死循环
        if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
          this.columns2 = val;
        }
      },
      deep: true,
    },
    columns2: {
      handler: function (val, oldVal) {
        // 有默认值第一次会自动加载columns3，没有默认值第一次不会加载columns3
        if ((!oldVal && !this.defaultCheckColumsValue) || oldVal) {
          this.getColumns(); // columns3不能作为computed属性，因为列拖拽会失效，但借助其它的计算属性更新computed
        }
      },
      immediate: true,
      deep: true,
    },
    defaultCheckColumsValue: {
      handler: function (val) {
        if (val) this.columnsCheck = [...val];
      },
      immediate: true,
    },
    dataSource: {
      handler: function (dataSource) {
        this.setDataSource(dataSource);
        this.getTableData();
      },
      deep: true,
    },
    selectData: {
      handler: function (newVal) {
        this.selectedData = newVal;
      },
      deep: true,
    },
    selectedData: {
      handler: function (newVal) {
        this.$emit('update-selectData', newVal);
      },
      deep: true,
    },
    modelKeys: {
      handler: function (newVal) {
        this.selectedDataKeys = newVal;
      },
      deep: true,
    },
    selectedDataKeys: {
      handler: function (newVal, oldVal) {
        this.$emit('update:modelKeys', newVal);
        if (JSON.stringify(newVal) === JSON.stringify(oldVal)) return;
        this.$emit('check', newVal, this.selectedData);
      },
      deep: true,
    },
  },
  methods: {
    // 表头停止拖拽
    getTableDragStop() {
      this.isDragChangeSorter = true; // 拖拽导致的排序不要改变sorter和进行表格查询
    },
    getColumns(type) {
      const { sorter } = this;
      if (!type) {
        const columns2 = deepCopy(this.columns2);
        let allWdith = true;
        let nearFixedCloumnIndex = null;
        const columns3 = columns2.map((i, index) => {
          // 控制过滤
          if ((i.onFilter || i.filters) && type !== 'sorter') {
            i.filteredValue = this.filters
              ? this.filters[i.dataIndex]
                ? this.filters[i.dataIndex]
                : i.filteredValue || null
              : i.filteredValue || null;
            if (i.filteredValue) {
              if (!this.filters) {
                this.filters = {};
              }
              if (!this.filters[i.dataIndex]) {
                this.filters[i.dataIndex] = i.filteredValue;
              }
            }
          }
          // 控制排序
          if (i.sorter && type !== 'filters') {
            i.sortOrder = sorter ? sorter.columnKey === i.dataIndex && sorter.order : i.sortOrder;
            if (i.sortOrder && !sorter) {
              this.sorter = {
                columnKey: i.dataIndex,
                order: i.sortOrder,
              };
            }
          }
          // 判断是否有fixed列，若是且全部列都有width，则置空fixed就近列width，保证不留白
          if ([true, 'left', 'right'].includes(i.fixed)) {
            nearFixedCloumnIndex = i.fixed === 'right' ? index - 1 : index + 1;
          }
          // 表头提示
          if (i.tips) {
            if (!i.slots) {
              i.slots = {};
            }
            if (!i.slots.title) {
              i.slots.title = 'tipsTitle';
            }
            i.tipsTitle = i.title;
            delete i.title;
          }
          if (!i.width) {
            allWdith = false;
          }
          if (i.ellipsis && !i.scopedSlots) {
            i.autoEllipsis = true;
            i.scopedSlots = { customRender: i.dataIndex };
          }
          return i;
        });
        if (nearFixedCloumnIndex && allWdith) {
          delete columns3[nearFixedCloumnIndex].width;
        }
        this.columns3 = columns3;
        this.updateTableShowKey();
      } else {
        this.columns3.forEach((i) => {
          // 控制过滤
          if ((i.onFilter || i.filters) && type !== 'sorter') {
            i.filteredValue = this.filters
              ? this.filters[i.dataIndex]
                ? this.filters[i.dataIndex]
                : i.filteredValue || null
              : i.filteredValue || null;
            if (i.filteredValue) {
              if (!this.filters) {
                this.filters = {};
              }
              if (!this.filters[i.dataIndex]) {
                this.filters[i.dataIndex] = i.filteredValue;
              }
            }
          }
          // 控制排序
          if (i.sorter && type !== 'filters') {
            i.sortOrder = sorter ? sorter.columnKey === i.dataIndex && sorter.order : i.sortOrder;
            if (i.sortOrder && !sorter) {
              this.sorter = {
                columnKey: i.dataIndex,
                order: i.sortOrder,
              };
            }
          }
        });
      }
    },
    updateTableShowKey() {
      this.tableShowKey = Math.random().toString(36).slice(-8);
    },
    tableFooterAffixChange(fixed) {
      this.batchOperateShow = fixed;
    },
    copyText(text) {
      const _this = this;
      this.$copyText(text).then(
        function (e) {
          _this.$YMessage.success(_this.$wci18n.t('wh.modalTables.textCopied'));
          console.log('复制成功', e);
        },
        function (e) {
          _this.$YMessage.error(_this.$wci18n.t('wh.modalTables.textFailed'));
          console.log('复制失败', e);
        }
      );
    },
    isElementInViewport(el) {
      //获取元素是否在可视区域
      var rect = el.getBoundingClientRect();
      return rect.bottom > 0;
    },
    scrollEvent: function () {
      const scrollTarget = this.getProps('affixTarget')();
      const tableTarget = this.$refs.tableRef;
      // 表格在可是范围内且滚动距离大于表格头部距离可视窗口头部的距离，则显示吸顶头部
      if (
        tableTarget &&
        this.isElementInViewport(tableTarget.$el) &&
        scrollTarget.getBoundingClientRect().top >= tableTarget.$el.getBoundingClientRect().top &&
        scrollTarget.scrollTop < tableTarget.$el.offsetHeight + tableTarget.$el.offsetTop
        // scrollTarget.scrollTop >= tableTarget.$el.getBoundingClientRect().top - scrollTarget.getBoundingClientRect().top
      ) {
        this.handleFixedTableShow(true);
      } else {
        this.handleFixedTableShow(false);
      }
    },
    handleFixedTableShow(bool) {
      if (typeof bool === 'boolean') {
        this.fixedTableShow = bool;
        if (bool) this.syncScroll('fixed'); // 显示时同步滚动
      } else {
        this.freshAffix = false;
        setTimeout(() => {
          this.freshAffix = true;
          this.$nextTick(function () {
            this.tableScroll(); // 和最新的表头重新绑定事件
          });
          this.syncScroll('fixed'); // 显示时同步滚动
        }, 500);
      }
    },
    //前端分页 存储数据源
    setDataSource(dataSource = this.dataSource) {
      if (this.dataSource) {
        this.dataSource2 = [...dataSource];
      }
    },
    //前端分页 排序数据源
    sortTableData() {
      if (!this.dataSource) return;
      if (!this.sorter) return;
      //order =>ascend,descend
      const { order, column } = this.sorter;
      if (!column?.sorter) {
        this.setDataSource();
        return;
      }
      this.dataSource2.sort((a, b) => {
        if (order === 'ascend') return column.sorter(a, b);
        return column.sorter(b, a);
      });
    },

    setAffix() {
      if (this.getProps('affixTarget')) {
        const scrollTarget = this.getProps('affixTarget')();
        if (scrollTarget) {
          scrollTarget.addEventListener('scroll', this.scrollEvent);
        }
      }
    },
    clearAffix() {
      if (this.getProps('affixTarget')) {
        const scrollTarget = this.getProps('affixTarget')();
        if (scrollTarget) {
          scrollTarget.removeEventListener('scroll', this.scrollEvent);
        }
      }
    },
    // 清空表格选项数据
    clearSelect() {
      this.selectedDataKeys = [];
    },
    onSearch(val) {
      this.$emit('onSearch', val); // 搜索回调
      this.searchValue = typeof val === 'string' ? val : '';
      this.$set(this.pagination, 'page', 1);
      this.getTableData();
    },
    onFilterValFn(column, item, itemValue, val) {
      return column && column.onFilter ? column.onFilter(val, item) : itemValue == val;
    },
    includesParams(item, obj, isFilter = false) {
      const emptys = [undefined, null, ''];
      if (Object.prototype.toString.call(obj) === '[object Object]') {
        for (const param in obj) {
          let itemValue = safeGet(item, param, '');
          const values = (Array.isArray(obj[param]) ? obj[param] : [obj[param]]).filter((r) => !emptys.includes(r));
          //空值则不过滤 跳出本次循环
          if (!values.length) continue;
          //checkFilterAll 是否全选中默认不过滤
          let column;
          if (this.getProps('checkFilterAll')) {
            column = this.columns3.find((r) => r.dataIndex === param);
            if (column && column.filters && column.filters.length === values.length) continue;
          }
          let isSome = false;

          for (let val of values) {
            let flag;
            //找不到则为false
            if (isFilter) {
              if (!column) column = this.columns3.find((r) => r.dataIndex === param);
              // const onFilterValFn = () => (column?.onFilter ? column.onFilter(val, item) : itemValue === val);
              flag = this.onFilterValFn(column, item, itemValue, val);
            } else {
              const valType = Object.prototype.toString.call(itemValue);
              if (['true', 'false'].includes(val) || valType === '[object Boolean]') {
                flag = !!itemValue === JSON.parse(val);
              } else {
                if (!['[object Array]', '[object String]', '[object Number]'].includes(valType)) {
                  console.warn(valType + ' Wrong');
                } else {
                  if (valType === '[object Number]') itemValue = String(itemValue);
                  flag = this.onFilterValFn(this.filterExtraParams[param], item, itemValue, val);
                }
              }
            }
            if (flag) {
              isSome = true;
              continue;
            }
          }
          if (!isSome) return false;
        }
      }
      return true;
    },

    getTableData({ needLoading } = { needLoading: true }) {
      let params = {};
      this.loading = needLoading;
      const { paramsKey, pagination, searchValue, selectSearchKey, sorter, filters, extraParams } = this;
      if (this.dataSource) {
        let tbdata = [];
        const isExtraParamsObject = Object.prototype.toString.call(extraParams) === '[object Object]';
        const isFiltersParamsObject = Object.prototype.toString.call(filters) === '[object Object]';
        let dataSource2 = [];
        const isSearchValue = searchValue && this.getProps('autoSearchFilter');
        if (isSearchValue || isExtraParamsObject || isFiltersParamsObject) {
          dataSource2 = this.dataSource2.filter((item) => {
            const itemValue = safeGet(item, selectSearchKey ? selectSearchKey : paramsKey.search);
            if (isSearchValue && !(itemValue && itemValue.includes(searchValue))) return false;
            if (isExtraParamsObject && isFiltersParamsObject) {
              return this.includesParams(item, extraParams) && this.includesParams(item, filters, true);
            }
            if (isExtraParamsObject) return this.includesParams(item, extraParams);
            return this.includesParams(item, filters, true);
          });
        } else {
          dataSource2 = [...this.dataSource2];
        }
        if (this.paginationShow) {
          for (let i = (pagination.page - 1) * pagination.limit; i < pagination.page * pagination.limit; i++) {
            if (dataSource2[i]) {
              tbdata.push(dataSource2[i]);
            }
          }
        } else {
          tbdata = dataSource2;
        }
        this.assignTableData(tbdata);
        this.loading = false;
        this.$set(this.pagination, 'total', dataSource2.length);
      } else {
        Object.keys(paramsKey).forEach((pKey) => {
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
          Object.keys(filters).forEach((key) => {
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
          this.queryParams = params;
          this.api(params)
            .then((res) => {
              if (this.getProps('handleResponse')) {
                const data = this.getProps('handleResponse')(res, 'data');
                const total = this.getProps('handleResponse')(res, 'total');
                this.assignTableData(data);
                this.$set(this.pagination, 'total', total || 0);
              } else {
                this.assignTableData(res.data);
                this.$set(this.pagination, 'total', res.total || 0);
              }
              this.$emit('getTableCallback', { data: res, type: 'success' }); // 获取列表回调
              this.loading = false;
            })
            .catch((err) => {
              this.emptyScene = 'systemError';
              this.assignTableData([]);
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
      let isSame = JSON.stringify(filters) === JSON.stringify(this.filters);
      if (!isSame && filters) {
        // 过滤有改变则重置回第一页
        this.$set(this.pagination, 'page', 1);
      }
      if (!this.isDragChangeSorter) {
        this.filters = filters;
        this.sorter = sorter;
        this.sortTableData();
        this.getTableData();
      } else {
        this.isDragChangeSorter = false;
      }
    },
    // 刷新表格
    freshTable() {
      this.inputSearch = '';
      this.filters = null;
      this.sorter = null;
      this.sortTableData();
      const newColumns2Arr = [];
      [...this.columns].filter((i) => {
        let idx = this.columnsCheck.indexOf(i.dataIndex);
        if (idx > -1) {
          newColumns2Arr[idx] = i;
        }
      });
      this.columns2 = newColumns2Arr;
      this.$set(this.pagination, 'page', 1);
      if (this.$listeners.freshCallback) {
        this.$emit('freshCallback');
      } else {
        this.$nextTick(function () {
          this.onSearch(this.inputSearch);
        });
      }
    },
    download() {
      this.$emit('download');
    },
    filter() {
      this.$emit('filter');
    },
    // 吸顶表格和显示表格滚动同步
    tableScroll() {
      if (!this.getProps('affixTarget')) return; // 没有吸顶不需同步
      setTimeout(() => {
        if (!this.$refs.FixedtableRef) return; //外部在加key渲染比setTimeout先执行时候会导致拿不到上一次实例
        this.firstTable = this.$refs.FixedtableRef.$el.getElementsByClassName('ant-table-body')[0];
        this.secondTable = this.$refs.tableRef.$el.getElementsByClassName('ant-table-body')[0];
        let firstchange = true;
        let secondchange = true;
        this.firstTable.onscroll = () => {
          if (firstchange) {
            this.syncScroll();
            secondchange = false;
          } else {
            firstchange = true;
          }
        };
        this.secondTable.onscroll = () => {
          if (secondchange) {
            this.syncScroll('fixed');
            firstchange = false;
          } else {
            secondchange = true;
          }
        };
      }, 0);
    },
    // 同步滚动 type - fixed 同步吸顶表格，其它为同步表格
    syncScroll(type) {
      const first = this.firstTable;
      const second = this.secondTable;
      if (!first || !second) return;
      if (type === 'fixed') {
        first.scrollLeft = (second.scrollLeft / (second.scrollWidth - second.clientWidth)) * (first.scrollWidth - first.clientWidth);
      } else {
        second.scrollLeft = (first.scrollLeft / (first.scrollWidth - first.clientWidth)) * (second.scrollWidth - second.clientWidth);
      }
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
          this.emptyScene = 'noData';
          this.tableData = [];
        }
      }
    },
    // 列设置确认
    columnCheckConfirm(val) {
      let tbo = localStorage.getItem('tableColumnsObject');
      if (tbo) {
        tbo = JSON.parse(tbo);
      } else {
        tbo = {};
      }
      tbo[this.tableKey2] = val;
      localStorage.setItem('tableColumnsObject', JSON.stringify(tbo));
      this.columnsCheck = val;
      this.$emit('columnSetCallback', val);
      this.tableScroll(); // 和最新的表头重新绑定事件
    },
    // 列设置重置
    columnCheckReset() {
      // 有默认选中则使用默认选中，否则按column全部
      if (this.defaultCheckColumsValue) {
        this.columnCheckConfirm(this.defaultCheckColumsValue);
      } else {
        this.columnCheckConfirm(this.columns.map((i) => i.dataIndex));
      }
    },
  },
};
</script>
