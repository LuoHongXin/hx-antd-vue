<template>
  <div class="y-model-menu" :collapsed="collapsed">
    <template v-if="!collapsed">
      <template v-if="$slots.title">
        <slot name="title"></slot>
      </template>
      <template v-else>
        <div class="menu-title" v-if="title">{{ title }}</div>
      </template>
    </template>
    <div class="y-model-menu-content">
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
        <y-menu mode="inline" v-model="selectedKeys2" :openKeys.sync="openKeys2" @click="menuClick" :inline-collapsed="collapsed">
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
    </div>
    <div class="collapsed-btn" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </div>
  </div>
</template>
<script>
import { getTreeParentKeys, flatArr } from '../../../src/utils/common';
export default {
  name: 'YModelMenu',
  model: {
    prop: 'selectedKeys',
    event: 'update-selectedKeys',
  },
  computed: {
    selectedKeys2: {
      get({ selectedKeys3 }) {
        return selectedKeys3;
      },
      set(val) {
        this.selectedKeys3 = val;
        this.$emit('update-selectedKeys', val);
      },
    },
    openKeys2: {
      get({ openKeys3 }) {
        return openKeys3;
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
      default: function () {
        return [];
      },
    },
    relevanMenuData: {
      type: Array,
      default: function () {
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
      handler: function (val) {
        if (this.routerLight) {
          const menuData = [...flatArr.get(this.menuData, 'children'), ...this.relevanMenuData];
          let selectKey = '';
          for (let i = 0; i < menuData.length; i++) {
            if (val.name && val.name.includes(menuData[i].key)) {
              selectKey = menuData[i].key;
              break;
            }
          }
          if (val.meta && val.meta.menuLightKey) {
            selectKey = val.meta.menuLightKey;
          }
          this.selectedKeys2 = [selectKey];
          this.openKeys2 = getTreeParentKeys.get(menuData, selectKey);
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
