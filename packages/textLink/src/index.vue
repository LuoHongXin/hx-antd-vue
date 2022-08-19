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
    iconClass({ icon }) {
      return typeof icon === 'boolean' ? 'link' : icon;
    },
  },
  methods: {
    click(event) {
      this.$emit('click', event);
    },
  },
};
</script>
