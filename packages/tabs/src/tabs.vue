<template>
  <a-tabs class="y-tabs" v-on="$listeners" v-model="activeKey2" v-bind="$attrs">
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-tabs>
</template>
<script>
export default {
  name: 'YTabs',
  model: {
    prop: 'activeKey',
    event: 'update-activeKey',
  },
  props: {
    activeKey: {
      type: [String, Number],
    },
    defaultActiveKey: {
      type: [String, Number],
    },
  },
  watch: {
    activeKey(val) {
      this.activeKey3 = val;
    },
  },
  data() {
    return {
      activeKey3: this.activeKey ?? this.defaultActiveKey,
    };
  },
  computed: {
    activeKey2: {
      get({ activeKey3, activeKey }) {
        if (activeKey) {
          return activeKey;
        }
        return activeKey3;
      },
      set(val) {
        this.$emit('update-activeKey', val);
        this.activeKey3 = val;
      },
    },
  },
};
</script>
