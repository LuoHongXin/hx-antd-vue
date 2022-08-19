<template>
  <div class="y-button-action" @click="handleClickLink" :class="disabled ? 'y-button-action-is-disabled' : ''">
    <span class="icon-left"><slot name="slot-l"></slot></span>
    <span :class="className">{{ text }}</span>
    <span class="icon-right"><slot name="slot-r"></slot></span>
  </div>
</template>

<script>
export default {
  name: 'YButtonAction',
  props: ['text', 'size', 'disabled'],
  computed: {
    className({ size }) {
      let className = '';
      if (size === 'small') {
        className = 'y-button-action-small';
      } else if (size === 'large') {
        className = 'y-button-action-large';
      } else {
        className = 'y-button-action-default';
      }
      return className;
    },
  },
  methods: {
    // Ctrl or CMD and click, open in new window when use `to`
    handleClickLink(event) {
      if (this.disabled) return;
      this.$emit('click', event);
    },
  },
};
</script>
