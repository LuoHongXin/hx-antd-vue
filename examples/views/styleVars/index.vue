<template>
  <a-layout-content style="padding: 10px 60px">
    <title-detail title="样式变量" detail="" />
    <a-tabs type="card">
      <a-tab-pane key="1" tab="Color 颜色">
        <Color />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Spacing 间距">
        <spacing />
      </a-tab-pane>
      <a-tab-pane key="3" tab="Shadow 阴影">
        <Shadow />
      </a-tab-pane>
      <a-tab-pane key="4" tab="Radius 圆角">
        <Radius />
      </a-tab-pane>
      <a-tab-pane key="5" tab="Size 尺寸">
        <Size />
      </a-tab-pane>
      <a-tab-pane key="6" tab="Border 描边">
        <Border />
      </a-tab-pane>
      <a-tab-pane key="7" tab="Font 字体">
        <Font />
      </a-tab-pane>
      <a-tab-pane key="8" tab="Icon 图标">
        <Icon />
      </a-tab-pane>
    </a-tabs>
  </a-layout-content>
</template>
<script>
import spacing from './spacing.vue';
import Color from './color.vue';
import Shadow from './shadow.vue';
import Radius from './radius.vue';
import Size from './size.vue';
import Border from './border.vue';
import Font from './font.vue';
import Icon from './icon.vue';
export default {
  name: 'styleVars',
  components: {
    spacing,
    Color,
    Shadow,
    Radius,
    Size,
    Border,
    Font,
    Icon,
  },
};
</script>
