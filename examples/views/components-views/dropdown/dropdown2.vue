<template>
  <div>
    <funTitleDetail title="含有子项目" detail="多级的普通菜单"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-dropdown>
        <y-button type="link">多级菜单下拉<a-icon type="down"/></y-button>
        <y-menu slot="overlay">
          <y-menu-item>
            <a href="javascript:;">1st menu item</a>
          </y-menu-item>
          <y-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </y-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>
            <a-menu-item key="3">
              Option 3
            </a-menu-item>
            <a-menu-item key="4">
              Option 4
            </a-menu-item>
            <a-sub-menu key="sub1-2" title="Submenu">
              <a-menu-item key="5">
                Option 5
              </a-menu-item>
              <a-menu-item key="6">
                Option 6
              </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </y-menu>
      </y-dropdown>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'myDropdown2',
  data() {
    return {
      html: `<y-dropdown>
        <y-button type="link">多级菜单下拉<a-icon type="down"/></y-button>
        <y-menu slot="overlay">
          <y-menu-item>
            <a href="javascript:;">1st menu item</a>
          </y-menu-item>
          <y-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </y-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>
            <a-menu-item key="3">
              Option 3
            </a-menu-item>
            <a-menu-item key="4">
              Option 4
            </a-menu-item>
            <a-sub-menu key="sub1-2" title="Submenu">
              <a-menu-item key="5">
                Option 5
              </a-menu-item>
              <a-menu-item key="6">
                Option 6
              </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </y-menu>
      </y-dropdown>`,
    };
  },
};
</script>
