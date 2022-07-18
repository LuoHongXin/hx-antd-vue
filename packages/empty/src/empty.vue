<template>
  <a-empty class="y-empty" v-on="$listeners" v-bind="$attrs">
    <component v-if="noImage" :is="componentId" slot="image"></component>
    <span slot="description" v-if="text && !this.$slots.description">{{ text }}</span>
    <slot slot="image" name="image" />
    <slot slot="description" name="description" />
    <slot />
  </a-empty>
</template>
<script>
import networkError from './img/networkError.vue';
import noAccess from './img/noAccess.vue';
import noData from './img/noData.vue';
import noMessage from './img/noMessage.vue';
import noService from './img/noService.vue';
import systemError from './img/systemError.vue';
export default {
  name: 'YEmpty',
  components: {
    networkError,
    noAccess,
    noData,
    noMessage,
    noService,
    systemError,
  },
  props: {
    scene: {
      type: String,
      default: function() {
        return null;
      },
    },
  },
  watch: {
    scene: {
      handler: function(val) {
        // console.log(this.$options.components, 8888);
        if (val) {
          this.componentId = val;
          this.text = this.sceneMapText[val];
        }
      },
      immediate: true,
    },
  },
  computed: {
    noImage() {
      return !this.$attrs.image && !this.$slots.image;
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
      },
    };
  },
};
</script>
<style lang="less">
@import '~/src/styles/variables/index.less';
.y-empty {
  .ant-empty-description {
    font-size: 14px;
    color: @y-color-text-primary;
    .title {
      margin-bottom: @y-spacing-xxs;
    }
    .content {
      margin-bottom: @y-spacing-xs;
      font-size: @y-font-size-s;
      color: @y-color-text-secondary;
    }
    .y-btn {
      margin-right: @y-spacing-xs;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
