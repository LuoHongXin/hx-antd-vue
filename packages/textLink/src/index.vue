<template>
  <div :class="`y-text-link ${type}`" @click="click">
    <span class="text"><slot /></span>
    <y-svg-icon v-if="icon" icon-class="link" class-name="text-link " />
  </div>
</template>
<script>
export default {
  name: 'YTextLink',
  props: {
    type: {
      type: String,
      default: function() {
        return 'default';
      },
    },
    icon: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
  },
  methods: {
    click(event) {
      this.$emit('click', event);
    },
  },
};
</script>
<style lang="less" scoped>
.y-text-link {
  cursor: pointer;
  color: @y-color-text-regular;
  display: inline-block;
  position: relative;
  .y-svg-icon-text-link {
    width: @y-icon-s;
    height: @y-icon-s;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: calc(-@y-spacing-xxs - @y-icon-s);
  }
  &:hover {
    color: @y-color-text-link;
    &.default {
      .text::after {
        background-color: @y-color-text-link;
      }
    }
    &.light {
      .text::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.5px;
        background-color: @y-color-text-link;
      }
    }
  }
  &.default {
    .text::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.5px;
      background-color: @y-color-text-regular;
    }
  }
  &.light {
    color: @y-color-text-link;
  }
}
</style>
