<template>
  <a-button :class="className" :type="type" v-if="icon === 'fresh'" v-bind="$attrs" v-on="$listeners">
    <y-svg-icon class="anticon" icon-class="fresh"/>
    <slot
  /></a-button>
  <a-button :class="className" :type="type" v-else-if="iconClass" v-bind="$attrs" v-on="$listeners">
    <y-svg-icon class="anticon" :icon-class="iconClass"/>
    <slot
  /></a-button>
  <a-button v-else :class="className" :icon="icon" :type="type" v-bind="$attrs" v-on="$listeners"><slot /></a-button>
</template>
<script>
export default {
  name: 'YButton',
  computed: {
    className: function({ type, $slots }) {
      let name = 'y-btn ';
      if (Object.keys($slots).length === 0) name += 'ant-btn-icon-only';
      if (type === 'text') name += 'text-btn';
      return name;
    },
  },
  props: {
    iconClass: {
      type: String,
    },
    icon: {
      type: String,
    },
    type: {
      type: String,
      default: 'default',
    },
  },
};
</script>
