<template>
  <div>
    <funTitleDetail title="带分割线" detail="带分割线的下拉菜单"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-dropdown>
        <y-button type="link">带分割线<a-icon type="down"/></y-button>
        <y-menu slot="overlay">
          <y-menu-item>
            <div
              style="color:#1F2229;font-weight: 500;
                    font-size: 16px;line-height: 24px;"
            >
              admin
            </div>
          </y-menu-item>
          <y-menu-divider />
          <y-menu-item>
            <a href="javascript:;">超级管理员</a>
          </y-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="appstore" /><span>访问控制</span></span>
            <a-menu-item key="3">
              系统设置
            </a-menu-item>
            <a-menu-item key="4">
              智能监控
            </a-menu-item>
            <a-sub-menu title="帮助">
              <a-menu-item key="5">
                修改密码
              </a-menu-item>
              <a-menu-item key="6">
                版本信息
              </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
          <y-menu-divider />
          <y-menu-item>
            <y-button type="link">退出登录</y-button>
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
  name: 'myDropdown2',
  data() {
    return {
      html: `<y-dropdown>
        <y-button type="link">带分割线<a-icon type="down"/></y-button>
        <y-menu slot="overlay">
          <y-menu-item>
            <div
              style="color:#1F2229;font-weight: 500;
                    font-size: 16px;line-height: 24px;"
            >
              admin
            </div>
          </y-menu-item>
          <y-menu-divider />
          <y-menu-item>
            <a href="javascript:;">超级管理员</a>
          </y-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="appstore" /><span>访问控制</span></span>
            <a-menu-item key="3">
              系统设置
            </a-menu-item>
            <a-menu-item key="4">
              智能监控
            </a-menu-item>
            <a-sub-menu title="帮助">
              <a-menu-item key="5">
                修改密码
              </a-menu-item>
              <a-menu-item key="6">
                版本信息
              </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
          <y-menu-divider />
          <y-menu-item>
            <y-button type="link">退出登录</y-button>
          </y-menu-item>
        </y-menu>
      </y-dropdown>`,
    };
  },
};
</script>
