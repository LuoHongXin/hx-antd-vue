<template>
  <div>
    <funTitleDetail title="缩起内嵌菜单" detail="内嵌菜单可以被缩起/展开。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <div style="width: 200px">
        <y-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </y-button>
        <y-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark" :inline-collapsed="collapsed">
          <y-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </y-menu-item>
          <y-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </y-menu-item>
          <y-menu-item key="3">
            <a-icon type="inbox" />
            <span>Option 3</span>
          </y-menu-item>
          <y-sub-menu key="sub1">
            <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
            <y-menu-item key="5">
              Option 5
            </y-menu-item>
            <y-menu-item key="6">
              Option 6
            </y-menu-item>
            <y-menu-item key="7">
              Option 7
            </y-menu-item>
            <y-menu-item key="8">
              Option 8
            </y-menu-item>
          </y-sub-menu>
          <y-sub-menu key="sub2">
            <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
            <y-menu-item key="9">
              Option 9
            </y-menu-item>
            <y-menu-item key="10">
              Option 10
            </y-menu-item>
            <y-sub-menu key="sub3" title="Submenu">
              <y-menu-item key="11">
                Option 11
              </y-menu-item>
              <y-menu-item key="12">
                Option 12
              </y-menu-item>
            </y-sub-menu>
          </y-sub-menu>
        </y-menu>
      </div>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-JavaScript">
        export default {
            data() {
                return {
                    collapsed: false,
                }
            },
            methods: {
                toggleCollapsed() {
                  this.collapsed = !this.collapsed;
                },
            },
        }
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'myMenu2',
  data() {
    return {
      html: `<div style="width: 200px">
        <y-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </y-button>
        <y-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark" :inline-collapsed="collapsed">
          <y-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </y-menu-item>
          <y-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </y-menu-item>
          <y-menu-item key="3">
            <a-icon type="inbox" />
            <span>Option 3</span>
          </y-menu-item>
          <y-sub-menu key="sub1">
            <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
            <y-menu-item key="5">
              Option 5
            </y-menu-item>
            <y-menu-item key="6">
              Option 6
            </y-menu-item>
            <y-menu-item key="7">
              Option 7
            </y-menu-item>
            <y-menu-item key="8">
              Option 8
            </y-menu-item>
          </y-sub-menu>
          <y-sub-menu key="sub2">
            <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
            <y-menu-item key="9">
              Option 9
            </y-menu-item>
            <y-menu-item key="10">
              Option 10
            </y-menu-item>
            <y-sub-menu key="sub3" title="Submenu">
              <y-menu-item key="11">
                Option 11
              </y-menu-item>
              <y-menu-item key="12">
                Option 12
              </y-menu-item>
            </y-sub-menu>
          </y-sub-menu>
        </y-menu>
      </div>`,
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
