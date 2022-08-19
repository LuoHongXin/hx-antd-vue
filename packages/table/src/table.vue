<script>
// 基于 a-table 的基础上再封装
import { Table } from 'ant-design-vue';
import { flatArr } from '@src/utils/common.js';
export default {
  name: 'YTable',
  extends: Table,
  model: {
    prop: 'selectedData',
    event: 'update-selectedData',
  },
  props: {
    // 选中的数据
    selectedData: {
      type: Array,
      default: function() {
        return null;
      },
    },
    // 选中的key，可用于操控组件选中数据
    modelKeys: {
      type: Array,
      default: function() {
        return [];
      },
    },
    // 是否支持点击row选中，默认支持
    rowClick: {
      type: Boolean,
      default: function() {
        return true;
      },
    },
  },
  created() {
    // 继承传入的事件函数，在调用时一并执行
    if (this.rowSelection) {
      this.oldOnSelect = this.rowSelection.onSelect || function() {};
      this.oldOnSelectAll = this.rowSelection.onSelectAll || function() {};
      this.oldOnChange = this.rowSelection.onChange || function() {};
      this.set();
    }
  },
  mounted() {
    // 判断是否支持行点击
    if (this.rowClick && this.rowSelection && (this.selectedData || this.modelKeys)) {
      this.setRowClick();
    }
  },
  watch: {
    // 通过非点击事件清空modelKeys时，selectedData要同步
    modelKeys(val) {
      this.set();
      if (this.selectedData) {
        const rowKey = this.rowKey;
        if (this.selectedData.length === val.length) {
          let isEqual = true;
          for (let i = 0; i < this.selectedData.length; i++) {
            const item = this.selectedData[i];
            if (!val.includes(this.getRowKey(rowKey, item))) {
              isEqual = false;
              break;
            }
          }
          if (isEqual) return;
        }
        const selectedData = this.dataSource.filter(item => {
          return val.includes(this.getRowKey(rowKey, item));
        });
        this.$emit('update-selectedData', selectedData);
      }
    },
    selectedData(val) {
      this.set();
      if (this.modelKeys) {
        const rowKey = this.rowKey;
        if (this.modelKeys.length === val.length) {
          let isEqual = true;
          for (let i = 0; i < val.length; i++) {
            const item = val[i];
            if (!this.modelKeys.includes(this.getRowKey(rowKey, item))) {
              isEqual = false;
              break;
            }
          }
          if (isEqual) return;
        }
        const modelKeys = val.map(item => {
          return this.getRowKey(rowKey, item);
        });
        this.$emit('update:modelKeys', modelKeys);
      }
    },
    // dataSource: function(val) {
    //   const rowKeyArr = val.map(item => {
    //     return this.getRowKey(this.rowKey, item);
    //   });
    //   let modelKeys = [];
    //   let selectedData = [];
    //   if (this.modelKeys) {
    //     // 每次表格数据发生改变时（增删），确保选中 modelKeys 还保留在 dataSource 中
    //     modelKeys = this.modelKeys.filter(item => {
    //       return rowKeyArr.includes(item);
    //     });
    //   }
    //   if (this.selectedData) {
    //     // 每次表格数据发生改变时（增删），确保受控 modelKeys 和 selectedData 保持一致
    //     selectedData = this.selectedData.filter(item => {
    //       return modelKeys.includes(this.getRowKey(this.rowKey, item));
    //     });
    //   }
    //   this.$emit('update:modelKeys', modelKeys);
    //   this.$emit('update-selectedData', selectedData);
    // },
  },
  methods: {
    oldOnSelect: function() {},
    oldOnSelectAll: function() {},
    oldOnChange: function() {},
    set() {
      if (!this.rowSelection) return;
      const { oldOnSelect, oldOnSelectAll, oldOnChange } = this;
      const rowKey = this.rowKey;
      const getRowKey = this.getRowKey;
      this.rowSelection.onChange = (selectedRowKeys, selectedRows) => {
        this.$emit('update:modelKeys', selectedRowKeys);
        oldOnChange(selectedRowKeys, selectedRows);
      };
      this.rowSelection.onSelect = (record, selected, selectedRows, nativeEvent) => {
        oldOnSelect(record, selected, selectedRows, nativeEvent);
        if (!this.selectedData) return;
        let selectedData = [...this.selectedData];
        if (selected) {
          selectedData.push(record);
        } else {
          selectedData = selectedData.filter(item => {
            if (getRowKey(rowKey, item) != getRowKey(rowKey, record)) {
              return item;
            }
          });
        }
        this.$emit('update-selectedData', selectedData);
      };
      this.rowSelection.onSelectAll = (selected, selectedRows, changeRows) => {
        oldOnSelectAll(selected, selectedRows, changeRows);
        if (!this.selectedData) return;
        let selectedData = [...this.selectedData];
        if (selected) {
          // 全选
          selectedData = selectedData.concat(changeRows);
        } else {
          // 取消全选
          const changeRowsId = changeRows.map(item => {
            return getRowKey(rowKey, item);
          });
          selectedData = selectedData.filter(item => {
            if (!changeRowsId.includes(getRowKey(rowKey, item))) {
              return item;
            }
          });
        }
        this.$emit('update-selectedData', selectedData);
      };
    },
    setRowClick() {
      const _this = this;
      this.$el.onclick = function(ev) {
        const targetKey = ev.target.parentNode.getAttribute('data-row-key');
        if (targetKey) {
          let selectedRowKeys = [];
          let selectedData = _this.selectedData;
          const rowKey = _this.rowKey;
          const modelKeys = _this.modelKeys;
          const getRowKey = _this.getRowKey;
          const rowSelection = _this.rowSelection;
          const dataSource = _this.dataSource;

          let isExit = false;
          if (selectedData && selectedData.length > 0) {
            selectedData = selectedData.filter(item => {
              const itemKey = getRowKey(rowKey, item);
              if (itemKey !== targetKey) {
                selectedRowKeys.push(itemKey);
                return item;
              } else {
                isExit = true;
              }
            });
          } else if (modelKeys && modelKeys.length > 0) {
            selectedRowKeys = modelKeys.filter(item => {
              if (item !== targetKey) {
                return item;
              } else {
                isExit = true;
              }
            });
          }

          // 未选中状态且选中不被禁用
          if (!isExit && !ev.target.parentNode.querySelector('[disabled]')) {
            // 若为单选，则清空，只赋值一个值
            if (rowSelection.type === 'radio') {
              selectedRowKeys = [];
              selectedData = [];
            }
            selectedRowKeys.push(targetKey);
            // 有绑定 v-model
            if (selectedData) {
              flatArr.get([...dataSource], 'children').forEach(item => {
                if (getRowKey(rowKey, item) === targetKey) {
                  selectedData.push(item);
                }
              });
            }
          } else if (isExit && !ev.target.parentNode.querySelector('[disabled]')) {
            //选中状态且选中不被禁用
            // 若为单选，则重新赋值
            if (rowSelection.type === 'radio') {
              selectedRowKeys = [targetKey];
              // 有绑定 v-model
              if (selectedData) {
                flatArr.get([...dataSource], 'children').forEach(item => {
                  if (getRowKey(rowKey, item) === targetKey) {
                    selectedData = [item];
                  }
                });
              }
            }
          }
          _this.$emit('update-selectedData', selectedData);
          _this.$emit('update:modelKeys', selectedRowKeys);
        }
      };
    },
    getRowKey(rowKey, record) {
      return typeof rowKey === 'function' ? rowKey(record) : record[rowKey];
    },
  },
};
</script>
