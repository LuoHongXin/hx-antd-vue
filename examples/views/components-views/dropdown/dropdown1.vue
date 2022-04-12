<template>
  <div>
    <funTitleDetail title="基础" detail="仅有一级的普通菜单"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-dropdown>
        <y-button type="link">基础下拉<a-icon type="down"/></y-button>
        <y-menu slot="overlay">
          <y-menu-item>
            <a href="javascript:;">1st menu item</a>
          </y-menu-item>
          <y-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </y-menu-item>
          <y-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </y-menu-item>
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
  name: 'myDropdown1',
  data() {
    return {
      html: `<y-dropdown>
        <y-button type="link">基础下拉<a-icon type="down"/></y-button>
        <y-menu slot="overlay">
          <y-menu-item>
            <a href="javascript:;">1st menu item</a>
          </y-menu-item>
          <y-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </y-menu-item>
          <y-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </y-menu-item>
        </y-menu>
      </y-dropdown>`,
    };
  },
};
</script>
