<script>
import { Collapse } from 'ant-design-vue';
export default {
  name: 'YCollapse',
  extends: Collapse,
  mounted() {
    this.$vnode.elm.className += ' y-collapse';
  },
};
</script>
<style lang="less">
@import '~/src/styles/variables/index.less';
.y-collapse.ant-collapse {
  border: @y-border-width-default @y-border-style-default @y-color-border-light;
  color: @y-color-text-regular;
  & > .ant-collapse-item {
    border-bottom: @y-border-width-default @y-border-style-default @y-color-border-light;
  }
  .ant-collapse-content {
    border-top: none;
    & > .ant-collapse-content-box {
      padding: 0 16px 16px 36px;
      p {
        margin-bottom: 0;
      }
    }
  }
  & > .ant-collapse-item {
    background-color: @y-color-fill-bg-white;
    & > .ant-collapse-header {
      padding-left: 36px;
    }
  }
}
.y-collapse.ant-collapse-borderless {
  border: 0;
}
</style>
