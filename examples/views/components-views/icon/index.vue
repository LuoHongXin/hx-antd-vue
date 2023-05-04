<template>
  <div>
    <title-detail title="图标" detail="所展示的是组件库根据ui规范的图标" />
    <funTitleDetail title="svg展示" detail="使用图标展示"></funTitleDetail>
    <div class="box">
      <div v-for="icon in icons" :key="icon" @click="copy(icon)">
        <y-svg-icon :icon-class="icon" />
        <span>{{ icon }}</span>
      </div>
    </div>
    <funTitleDetail title="button展示" detail="使用button展示"></funTitleDetail>
    <div class="box">
      <div v-for="icon in icons" :key="icon" @click="copy(icon, true)">
        <y-button :icon-class="icon"></y-button>
        <span>{{ icon }}</span>
      </div>
    </div>
  </div>
</template>
<script>
const svgFiles = require.context('@src/icons/svg', false, /.svg$/);
export default {
  name: 'myIcon',
  data() {
    return {
      icons: svgFiles.keys().map(r => r.match(/.\/(\S*).svg/)[1]),
      html: ``,
    };
  },
  methods: {
    copy(icon, isBtn) {
      const _this = this;
      const text = isBtn ? `<y-button icon-class="${icon}"></y-button>` : `<y-svg-icon icon-class="${icon}" />`;
      this.$copyText(text).then(
        function(e) {
          _this.$YMessage.success(`${text}已复制`);
          console.log('复制成功', e);
        },
        function(e) {
          _this.$YMessage.error(`${text}复制失败，请手动尝试复制`);
          console.log('复制失败', e);
        }
      );
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  > div {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-direction: column;
    transition: color .3s ease-in-out,background-color .3s ease-in-out;
    > ::v-deep .y-svg-icon {
      width: 32px;
      height: 32px;
    }
    &:hover {
      background-color: @y-color-primary-hover;
      transition: all 0.3s;
      color: #fff;
       > ::v-deep .y-svg-icon {
        transition: transform .3s ease-in-out;
        transform: scale(1.4);
       }
    }
    > span {
      margin-top: 8px;
      display: block;
      text-align: center;
      transform: scale(.83);
      font-family: Lucida Console,Consolas;
      white-space: nowrap;
    }
  }
}
</style>