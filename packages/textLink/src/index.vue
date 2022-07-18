<template>
  <div v-if="$slots.default" :class="`y-text-link ${type}`" @click="click">
    <span class="text"><slot /></span>
    <y-svg-icon v-if="icon" :icon-class="iconClass" class="text-link-icon " />
  </div>
  <y-svg-icon v-else :icon-class="iconClass" :class="`y-text-link ${type} icon-only`" />
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
      type: [Boolean, String],
      default: function() {
        return false;
      },
    },
  },
  computed: {
    iconClass() {
      return typeof this.icon === 'boolean' ? 'link' : this.icon;
    },
  },
  methods: {
    click(event) {
      this.$emit('click', event);
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/variables/index.less';
.y-text-link {
  cursor: pointer;
  color: @y-color-text-regular;
  display: inline-block;
  position: relative;
  .text-link-icon {
    width: @y-icon-s;
    height: @y-icon-s;
    position: absolute;
    top: 50%;
    transform: translateY(-38%);
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
  &.icon-only {
    margin: 0;
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
