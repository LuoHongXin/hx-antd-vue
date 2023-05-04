<template>
  <div v-if="$slots.default" :class="`y-text-link ${type}`" @click="click">
    <span class="text"><slot /></span>
    <y-svg-icon v-if="icon" :icon-class="iconClass" class="text-link-icon " />
    <y-svg-icon v-if="antdIcon" :icon-class="antdIcon" class="text-link-icon " />
  </div>
  <a-icon v-else-if="antdIcon" :type="antdIcon" :class="`y-text-link ${type} icon-only`" />
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
    antdIcon: {
      type: [String],
      default: function() {
        return '';
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
