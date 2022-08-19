<template>
  <a-dropdown overlayClassName="y-table-column-action-button" :trigger="trigger" v-model="visible">
    <slot v-if="useSlot"></slot>
    <y-button :icon="icon" v-else></y-button>
    <a-menu slot="overlay">
      <a-menu-item>
        <a-radio-group v-if="single" v-model="modelVal" @change="onChange">
          <a-radio :disabled="item.disabled" style="display: block" v-for="item in checkList" :key="item.value" :value="item.value">
            {{ item.text ? item.text : item.value }}
          </a-radio>
        </a-radio-group>
        <a-checkbox-group v-else v-model="modelVal" @change="onChange">
          <a-checkbox
            :disabled="item.disabled"
            style="margin-left:0;display:block"
            v-for="item in checkList"
            :key="item.value"
            :value="item.value"
          >
            {{ item.text ? item.text : item.value }}
          </a-checkbox>
        </a-checkbox-group>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: 'YDropdownCheckButton',
  model: {
    prop: 'value',
    event: 'update-value',
  },
  props: {
    // 选中的值
    value: {
      type: [Array, Number],
      default: function() {
        return [];
      },
    },
    single: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    // 可选数据
    checkList: {
      type: Array,
      default: function() {
        return [
          // {
          //   text: '', // 选项名
          //   value: key, // 必传
          //   disabled: Boolean, // 是否禁用
          // },
        ];
      },
    },
    useSlot: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    // 按钮图标
    icon: {
      type: String,
      default: function() {
        return 'setting';
      },
    },
    // 更多按钮触发事件
    trigger: {
      type: Array,
      default: function() {
        return ['hover'];
      },
    },
  },
  watch: {
    modelVal: function(val) {
      this.$emit('update-value', val);
    },
  },
  data() {
    return {
      visible: false,
      modelVal: this.value,
    };
  },
  methods: {
    onChange(checkedValues) {
      this.$emit('change', checkedValues);
    },
  },
};
</script>
