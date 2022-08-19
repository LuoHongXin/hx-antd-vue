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
          <a-tooltip placement="topLeft" :title="item[getReplaceFieldFiled('title')]" v-if="showTooltip && !noIconOperate">
            <span class="y-custom-tree-title">{{ item[getReplaceFieldFiled('title')] }}</span>
          </a-tooltip>
          <span class="y-custom-tree-title" v-if="!showTooltip && !noIconOperate">{{ item[getReplaceFieldFiled('title')] }}</span>
          <a-dropdown
            :trigger="operateTriggerMethod"
            :placement="operatePlacement"
            v-if="getOperates(item).length > 0 && !item.operateHidden"
          >
            <a-tooltip placement="topLeft" :title="item[getReplaceFieldFiled('title')]" v-if="showTooltip && noIconOperate">
              <span class="y-custom-tree-title">{{ item[getReplaceFieldFiled('title')] }}</span>
              <div class="tree-operate" v-if="noIconOperate"></div>
            </a-tooltip>
            <span class="y-custom-tree-title" v-if="!showTooltip && noIconOperate"
              >{{ item[getReplaceFieldFiled('title')] }}
              <div class="tree-operate" v-if="!showTooltip && noIconOperate"></div
            ></span>

            <y-svg-icon
              v-if="!noIconOperate"
              icon-class="more-vertical"
              class="y-custom-tree-operate"
              :class="item.disabled ? 'disable-pointer-event' : ''"
              @click.stop="e => e.preventDefault()"
            />
            <a-menu slot="overlay">
              <template v-for="(parentObj, index) in getOperates(item)">
                <a-sub-menu
                  :key="index"
                  :title="parentObj.title"
                  :disabled="parentObj.disabled"
                  v-if="parentObj.children && parentObj.children.length > 0"
                >
                  <a-menu-item v-for="(sonObj, index) in parentObj.children" :key="index">
                    <y-tips-button :tooltip="sonObj.disabled && sonObj.tips ? true : false" :title="sonObj.tips">
                      <a @click="sonObj.click(item)" class="my-button">
                        <y-button type="text" :disabled="sonObj.disabled">{{ sonObj.title }}</y-button>
                      </a>
                    </y-tips-button>
                  </a-menu-item>
                </a-sub-menu>
                <a-menu-item v-else :key="index">
                  <y-tips-button :tooltip="parentObj.disabled && parentObj.tips ? true : false" :title="parentObj.tips">
                    <a @click="parentObj.click(item)" class="my-button">
                      <y-button type="text" :disabled="parentObj.disabled">{{ parentObj.title }}</y-button>
                    </a>
                  </y-tips-button>
                </a-menu-item>
                <y-menu-divider v-if="parentObj.line" :key="index + 'line'" />
              </template>
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
    //不带图标操作
    noIconOperate: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    modelVal: {
      get({ value2 }) {
        return value2;
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
      if (this.noIconOperate) {
        this.haveOperateIcon = 'noIcon';
      } else if (this.getOperates(item).length > 0 && !item.operateHidden) {
        this.haveOperateIcon = 'operate-icon'; //只有有一个符合条件即赋值
      }
      return '';
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
