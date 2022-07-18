<template>
  <div class="y-model-menu" :collapsed="collapsed">
    <div class="menu-title" v-if="!collapsed && title">{{ title }}</div>
    <y-menu mode="inline" v-model="selectedKeys2" :openKeys.sync="openKeys2" @click="menuClick" :inline-collapsed="collapsed">
      <template v-for="menu in menuData">
        <y-sub-menu :key="menu.key || menu.title" v-if="menu.children">
          <span slot="title">
            <div class="title-content">
              <a-icon v-if="menu.antIcon" :type="menu.antIcon" />
              <y-svg-icon v-if="menu.icon" :icon-class="menu.icon" />
              <span class="menuTitle" :title="menu.title">{{ menu.title }}</span>
            </div>
          </span>
          <y-menu-item :key="childMenu.key || childMenu.title" v-for="childMenu in menu.children">
            <div class="title-content">
              <a-icon v-if="childMenu.antIcon" :type="childMenu.antIcon" />
              <y-svg-icon v-if="childMenu.icon" :icon-class="childMenu.icon" />
              <span class="menuTitle" :title="childMenu.title"> {{ childMenu.title }} </span>
            </div>
            <y-svg-icon v-if="childMenu.link" icon-class="link" class-name="text-link" />
          </y-menu-item>
        </y-sub-menu>
        <y-menu-item :key="menu.key || menu.title" v-else>
          <div class="title-content">
            <a-icon v-if="menu.antIcon" :type="menu.antIcon" />
            <y-svg-icon v-if="menu.icon" :icon-class="menu.icon" />
            <span class="menuTitle" :title="menu.title"> {{ menu.title }} </span>
          </div>
          <y-svg-icon v-if="menu.link" icon-class="link" class-name="text-link" />
        </y-menu-item>
      </template>
    </y-menu>
    <div class="line" v-if="relevanTitle"></div>
    <!-- 关联功能菜单 -->
    <div class="relevan-menu">
      <div class="menu-title" v-if="!collapsed && relevanTitle">{{ relevanTitle }}</div>
      <y-menu mode="inline" @click="menuClick" :inline-collapsed="collapsed">
        <template v-for="menu in relevanMenuData">
          <y-sub-menu :key="menu.key || menu.title" v-if="menu.children">
            <span slot="title">
              <div class="title-content">
                <a-icon v-if="menu.antIcon" :type="menu.antIcon" />
                <y-svg-icon v-if="menu.icon" :icon-class="menu.icon" />
                <span class="menuTitle" :title="menu.title">{{ menu.title }}</span>
              </div>
            </span>
            <y-menu-item :key="childMenu.key || childMenu.title" v-for="childMenu in menu.children">
              <div class="title-content">
                <a-icon v-if="childMenu.antIcon" :type="childMenu.antIcon" />
                <y-svg-icon v-if="childMenu.icon" :icon-class="childMenu.icon" />
                <span class="menuTitle" :title="childMenu.title"> {{ childMenu.title }} </span>
              </div>
              <y-svg-icon v-if="childMenu.link" icon-class="link" class-name="text-link" />
            </y-menu-item>
          </y-sub-menu>
          <y-menu-item :key="menu.key || menu.title" v-else>
            <div class="title-content">
              <a-icon v-if="menu.antIcon" :type="menu.antIcon" />
              <y-svg-icon v-if="menu.icon" :icon-class="menu.icon" />
              <span class="menuTitle" :title="menu.title"> {{ menu.title }} </span>
            </div>
            <y-svg-icon v-if="menu.link" icon-class="link" class-name="text-link" />
          </y-menu-item>
        </template>
      </y-menu>
    </div>
    <div class="collapsed-btn" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </div>
  </div>
</template>
<script>
import { getTreeParentKeys } from '@src/utils/common';
export default {
  name: 'YModelMenu',
  model: {
    prop: 'selectedKeys',
    event: 'update-selectedKeys',
  },
  computed: {
    selectedKeys2: {
      get() {
        return this.selectedKeys3;
      },
      set(val) {
        this.selectedKeys3 = val;
        this.$emit('update-selectedKeys', val);
      },
    },
    openKeys2: {
      get() {
        return this.openKeys3;
      },
      set(val) {
        this.openKeys3 = val;
        this.$emit('update:openKeys', val);
      },
    },
  },
  props: {
    routerLight: {
      type: Boolean,
      default: false,
    },
    selectedKeys: {
      type: Array,
    },
    openKeys: {
      type: Array,
    },
    menuData: {
      type: Array,
      // default: null,
      default: function() {
        return [];
      },
    },
    relevanMenuData: {
      type: Array,
      default: function() {
        return [];
      },
    },
    title: {
      type: String,
    },
    relevanTitle: {
      type: String,
    },
  },
  watch: {
    $route: {
      handler: function(val) {
        if (this.routerLight) {
          const menuData = this.menuData;
          let selectKey = '';
          for (let i = 0; i < menuData.length; i++) {
            if (val.name.includes(menuData[i].key)) {
              selectKey = menuData[i].key;
              break;
            }
          }
          if (val.meta && val.meta.menuLightKey) {
            selectKey = val.meta.menuLightKey;
          }
          this.selectedKeys2 = [selectKey];
          this.openKeys2 = getTreeParentKeys.get(this.menuData, selectKey);
        }
      },
      immediate: true,
    },
    selectedKeys(val) {
      this.selectedKeys3 = val;
    },
  },
  data() {
    return {
      selectedKeys3: this.selectedKeys || [],
      openKeys3: this.openKeys || [],
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.$emit('collapsedClick', this.collapsed);
    },
    menuClick(obj) {
      this.$emit('click', obj);
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/variables/index.less';
.ant-menu-inline-collapsed-tooltip {
  .y-svg-icon-text-link,
  .y-svg-icon {
    display: none;
  }
}
.y-model-menu {
  position: relative;
  padding: 10px 12px 30px 12px;
  transition: all 0.3s;
  width: 200px;
  height: 100%;
  border-right: @y-border-width-default @y-border-style-default @y-color-border-light;
  background: @y-color-fill-bg-white;
  .menu-title {
    font-size: 16px;
    font-weight: 500;
    padding: 6px 0 12px 12px;
  }
  .line {
    margin-top: 8px;
    position: absolute;
    left: 0;
    right: 0;
    border-top: @y-border-width-default @y-border-style-default @y-color-border-light;
  }
  .relevan-menu {
    padding-top: 10px;
    .menu-title {
      padding-bottom: 8px;
      padding-top: 16px;
      font-size: 12px;
      font-weight: 400;
      color: @y-color-text-secondary;
    }
  }
  .ant-menu-inline {
    border: none;
  }
  .ant-menu {
    .ant-menu-item {
      padding: 5px 12px !important;
      height: 32px;
      line-height: 32px;
      margin: 4px 0;
      border-radius: @y-radius-default;
      display: flex;
      align-items: center;
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        content: none;
      }
    }
    .ant-menu-item:not(.ant-menu-item-selected) {
      i,
      .y-svg-icon,
      .menuTitle {
        color: @y-color-text-regular;
      }
      .y-svg-icon-text-link {
        color: @y-color-text-placeholder;
      }
    }
    .ant-menu-item:not(.ant-menu-item-selected):hover {
      background: rgba(240, 240, 240);
    }
  }
  .title-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .menuTitle {
      display: inline-block;
      overflow: hidden;
      width: 82%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow-wrap: break-word;
    }
  }
  .y-svg-icon {
    font-size: @y-font-size-l;
    margin-right: 14px;
  }
  .y-svg-icon-text-link {
    width: 14px;
    height: 14px;
  }
  .collapsed-btn {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: @y-border-width-default @y-border-style-default @y-color-border-light;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    right: 12px;
  }
  .ant-menu-submenu > .ant-menu-submenu-title {
    padding-left: 12px !important ;
  }
  &[collapsed] {
    width: 56px;
    padding: 10px 0 30px 0;
    .ant-menu-inline-collapsed {
      width: 56px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .ant-menu-submenu > .ant-menu-submenu-title,
      & > .ant-menu-item {
        padding: 0px !important;
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        .y-svg-icon + span {
          display: inline-block;
          max-width: 0;
          opacity: 0;
        }
        .y-svg-icon-text-link {
          display: none;
        }
      }
      .y-svg-icon {
        margin-right: 0;
      }
      .title-content .menuTitle {
        width: auto;
      }
    }
  }
}
</style>
