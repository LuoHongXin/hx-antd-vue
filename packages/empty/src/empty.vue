<template>
  <a-empty class="y-empty" v-on="$listeners" v-bind="$attrs">
    <y-svg-icon style="width: 100%" v-if="noImage" :icon-class="componentId" slot="image"></y-svg-icon>
    <!-- <component v-if="noImage" :is="componentId" slot="image"></component> -->
    <span slot="description" v-if="text && !this.$slots.description">{{ text }}</span>
    <slot slot="image" name="image" />
    <slot slot="description" name="description" />
    <slot />
  </a-empty>
</template>
<script>
export default {
  name: 'YEmpty',
  props: {
    scene: {
      type: String,
      default: function () {
        return null;
      },
    },
  },
  watch: {
    scene: {
      handler: function (val) {
        if (val) {
          this.componentId = val;
          this.text = this.sceneMapText[val];
        }
      },
      immediate: true,
    },
  },
  computed: {
    noImage({ $attrs, $slots }) {
      return !$attrs.image && !$slots.image;
    },
  },
  data() {
    return {
      componentId: 'noData',
      text: this.$wci18n.t('wh.empty.noData'),
      sceneMapText: {
        networkError: this.$wci18n.t('wh.empty.networkError'),
        noAccess: this.$wci18n.t('wh.empty.noAccess'),
        noData: this.$wci18n.t('wh.empty.noData'),
        noMessage: this.$wci18n.t('wh.empty.noMessage'),
        noService: this.$wci18n.t('wh.empty.noService'),
        systemError: this.$wci18n.t('wh.empty.systemError'),
        dataLoading: this.$wci18n.t('wh.empty.dataLoading'),
        canNotGet: this.$wci18n.t('wh.empty.canNotGet'),
      },
    };
  },
};
</script>
