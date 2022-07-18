<template>
  <div :class="`y-custom-tree ${nodeHeightSize} ${haveOperateIcon}`">
    <a-tree @select="treeSelect" @check="treeCheck" v-model="modelVal" show-icon v-bind="$attrs" :treeData="treeData2" v-on="$listeners">
      <!-- <slot :name="slot" :slot="slot" v-for="(val, slot) in $scopedSlots" /> -->
      <a-icon style="color:#454852" slot="switcherIcon" type="caret-down" />
      <template v-for="(val, key) in $scopedSlots" :slot="key" slot-scope="bind">
        <slot :name="key" v-bind="bind"></slot>
      </template>
      <template v-for="(val, key) in $slots" :slot="key">
        <slot :name="key"></slot>
      </template>
      <template slot="dropdown" slot-scope="item">
        <span class="y-custom-tree-node " :class="showOperaterIcon(item)">
          <a-tooltip placement="topLeft" :title="item[getReplaceFieldFiled('title')]" v-if="showTooltip">
            <span class="y-custom-tree-title">{{ item[getReplaceFieldFiled('title')] }}</span>
          </a-tooltip>
          <span class="y-custom-tree-title" v-if="!showTooltip">{{ item[getReplaceFieldFiled('title')] }}</span>
          <a-dropdown
            :trigger="operateTriggerMethod"
            :placement="operatePlacement"
            v-if="getOperates(item).length > 0 && !item.operateHidden"
          >
            <y-svg-icon
              v-if="item.disabled"
              icon-class="more-vertical"
              class="y-custom-tree-operate"
              style="pointer-events: none"
              @click.stop="e => e.preventDefault()"
            />
            <y-svg-icon
              v-if="!item.disabled"
              icon-class="more-vertical"
              class="y-custom-tree-operate"
              @click.stop="e => e.preventDefault()"
            />
            <a-menu slot="overlay">
              <a-menu-item v-for="(obj, index) in getOperates(item)" :key="index">
                <a href="javascript:;" @click="obj.click(item)">{{ obj.title }}</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
      </template>
    </a-tree>
  </div>
</template>

<script>
import { getTreeParentKeys } from '@src/utils/common';

export default {
  name: 'YCustomTree',
  model: {
    prop: 'value',
    event: 'update-value',
  },
  data() {
    return {
      value2: this.value,
      treeData2: this.recursiveData(this.treeData, this.getReplaceFieldFiled('children')),
      haveOperateIcon: 'noIcon',
    };
  },
  watch: {
    value(value) {
      this.value2 = value;
    },
    treeData(val) {
      this.treeData2 = this.recursiveData(val, this.getReplaceFieldFiled('children'));
    },
  },
  props: {
    value: {
      type: [Object, Array],
      default: function() {
        return [];
      },
    },
    strictCheckParent: {
      type: Boolean,
      default: false,
    },
    treeData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 操作
    operates: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 下拉触发
    operateTriggerMethod: {
      type: Array,
      default: () => {
        return ['click'];
      },
    },
    operatePlacement: {
      type: String,
      default: 'bottomLeft',
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
    nodeHeightSize: {
      type: String,
      default: 'm',
    },
  },
  computed: {
    modelVal: {
      get() {
        return this.value2;
      },
      set(val) {
        this.$emit('update-value', val);
        this.value2 = val;
      },
    },
  },
  methods: {
    //判断是否带操作按钮 带有的话给个padding-right:38px
    showOperaterIcon(item) {
      if (this.getOperates(item).length > 0 && !item.operateHidden) {
        this.haveOperateIcon = 'operate-icon'; //只有有一个符合条件即赋值
        return '';
      } else {
        return '';
      }
    },
    treeCheck(checkedKeys, e) {
      if (e.checked) {
        this.checkParent(e.node.eventKey);
      }
      this.$nextTick(function() {
        this.$emit('treeCheck', checkedKeys, e);
      });
    },
    treeSelect(selectedKeys, e) {
      let checkData = this.modelVal;
      if (Array.isArray(checkData)) {
        if (!checkData.includes(e.node.eventKey)) {
          checkData.push(e.node.eventKey);
        } else {
          checkData = checkData.filter(i => i !== e.node.eventKey);
        }
      } else {
        // checkStrictly 模式
        if (!checkData.checked.includes(e.node.eventKey)) {
          checkData.checked.push(e.node.eventKey);
        } else {
          checkData.checked = checkData.checked.filter(i => i !== e.node.eventKey);
        }
      }
      if (e.selected) {
        this.checkParent(e.node.eventKey);
      }
      this.$nextTick(function() {
        this.$emit('select', selectedKeys, e);
      });
      this.modelVal = checkData;
    },
    // 有子必有父
    checkParent(key) {
      if (!this.strictCheckParent) return;
      let checkData = this.modelVal;
      const parentKeys = getTreeParentKeys.get(this.treeData2, key);
      if (Array.isArray(checkData)) {
        parentKeys.forEach(k => {
          if (!checkData.includes(k)) {
            checkData.push(k);
          }
        });
      } else {
        // checkStrictly 模式
        parentKeys.forEach(k => {
          if (!checkData.checked.includes(k)) {
            checkData.checked.push(k);
          }
        });
      }
    },
    getReplaceFieldFiled(str) {
      return this.$attrs.replaceFields && this.$attrs.replaceFields[str] ? this.$attrs.replaceFields[str] : str;
    },
    getOperates(treeObj) {
      return treeObj.operates && treeObj.operates.length > 0 ? treeObj.operates : this.operates;
    },
    recursiveData(arr, child) {
      return arr.map(i => {
        if (!i.scopedSlots) {
          i.scopedSlots = { title: 'dropdown' };
        } else if (!i.scopedSlots.title) {
          i.scopedSlots.title = 'dropdown';
        }
        if (i[child] && i[child].length > 0) {
          i[child] = this.recursiveData(i[child], child);
        }
        return i;
      });
    },
  },
};
</script>

<style lang="less">
@import '~/src/styles/components/customTree.less';
@import '~/src/styles/variables/index.less';
.ant-tree li {
  padding: 2px 0 !important;
}
.operate-icon .ant-tree li .ant-tree-node-content-wrapper {
  padding-right: 32px;
}
.noIcon .ant-tree li .ant-tree-node-content-wrapper {
  padding-right: 0 !important;
}
.y-custom-tree {
  &:not([checkable]) .ant-tree .ant-tree-node-content-wrapper .ant-tree-node-selected {
    background-color: @y-color-primary-light !important;
    color: @y-color-primary;
  }
  .ant-tree .ant-tree-checkbox-checked + .ant-tree-node-content-wrapper {
    background-color: @y-color-primary-light !important;
    color: @y-color-primary !important;
  }
  .ant-tree .ant-tree-node-selected {
    background-color: @y-color-primary-light !important;
  }
  .ant-tree .ant-tree-node-content-wrapper:not(.ant-tree-node-selected):hover {
    background-color: @y-color-fill-hover;
  }
  &[checkable] .ant-tree .ant-tree-node-content-wrapper:hover {
    background-color: @y-color-fill-hover;
  }
  .ant-dropdown-trigger {
    text-align: center;
    margin-right: 10px;
    border-radius: @y-radius-default;
  }
  .ant-tree .ant-tree-node-selected .y-custom-tree-operate:hover {
    background-color: @y-color-primary-border;
  }
  .ant-tree-node-selected .y-svg-icon:hover {
    color: @y-color-error;
  }
  .ant-tree .y-custom-tree-operate:hover {
    background-color: @y-color-fill-hover-darker;
  }
  .ant-tree li span.ant-tree-switcher,
  .ant-tree li span .ant-tree-iconEle {
    width: 16px;
    height: 20px;
    line-height: 16px;
  }
  .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-loading-icon,
  .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-loading-icon {
    width: 16px;
    height: 20px;
  }
  .ant-tree li span.ant-tree-switcher,
  .ant-tree li span .ant-tree-iconEle {
    vertical-align: middle !important;
  }
  .ant-tree li span .ant-tree-iconEle .anticon,
  .ant-tree li span .ant-tree-iconEle .y-svg-icon,
  .ant-tree li span .ant-tree-iconEle img {
    vertical-align: unset !important;
  }
  .ant-tree li span .ant-tree-iconEle {
    margin-left: 4px;
  }
  .ant-tree-title {
    margin-left: 4px;
  }
  .ant-tree li span[draggable],
  .ant-tree li span[draggable='true'] {
    border-top: none;
    border-bottom: none;
  }
}
</style>
