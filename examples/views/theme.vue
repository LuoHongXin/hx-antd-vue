<template>
  <a-layout-content style="padding: 10px 60px">
    <title-detail
      title="主题与换肤"
      detail="hx-antd-vue 有默认的红色主题风格。执行下述 1、使用wh-component自定义主题 后即可拥有wh-component默认主题；同时，我们也提供了更换主题的方法，配置好 2.1配置主题替换 后，根据 2.2调用换肤方法 即可实现换肤功能。"
    />
    <h3 class="fun-title">1、使用wh-component自定义主题</h3>
    <funTitleDetail
      title=""
      detail="在 vue-config.js 中引入 hx-antd-vue 的 modifyVars 方法，并配置css的loaderOptions，目的就是根据 hx-antd-vue 标准，修改 antd 样式变量"
    ></funTitleDetail>
    <pre class="line-numbers">
        <code class="language-JavaScript">
          // 引入修改变量方法
          const { modifyVars } = require("hx-antd-vue/src/antdVars");

          module.exports = {
            css:{
              loaderOptions:{
                less:{
                  lessOptions:{
                    modifyVars:modifyVars(), // 可以传主色或修改的颜色变量，如：modifyVars('#3d61cc', { '@y-color-success-6': 'red' })
                    javascriptEnabled:true
                  }
                }
              }
            }
          }
        </code>
    </pre>
    <h3 class="fun-title">2、换肤</h3>
    <funTitleDetail
      title="2.1、配置主题替换"
      detail="在 vue.config.js 配置文件的 plugins 插件配置中，使用 hx-antd-vue 的 themeColorReplacer 插件，具体代码如下"
    ></funTitleDetail>
    <pre class="line-numbers">
        <code class="language-JavaScript">
          // 引入插件和相关方法
          const { themeColorReplacer, getThemeColors, resolveCss } = require('hx-antd-vue/src/theme');
          const path = require("path");
          // posix兼容方式处理路径
          const posicJoin = _path => path.posix.join('static', _path);
          module.exports = {
            configureWebpack: config => {
                config.plugins.push(
                  new themeColorReplacer({
                    filename: posicJoin('css/theme-colors.[contenthash:8].css'),
                    matchColors: getThemeColors(),
                    injectCss: true,
                    resolveCss,
                  })
                );
              }
          }
        </code>
    </pre>
    <funTitleDetail
      title="2.2、调用换肤方法"
      detail="配置好 themeColorReplacer 插件后，可以直接在代码中调用 changeThemeColor 方法修改主题颜色"
    ></funTitleDetail>
    <y-button @click="changeColor('#3d61cc')">换肤</y-button>
    <pre class="line-numbers">
        <code class="language-html" v-text="`<button @click='changeColor('#3d61cc')'>换肤</button>`">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-JavaScript">
          const { changeThemeColor } = require('hx-antd-vue/src/theme');
          export default {
            methods: {
              changeColor(color) {
                // changeThemeColor('主色系','主题模式：dark || light || night');
                changeThemeColor(color);
              },
            },
          };
        </code>
    </pre>
  </a-layout-content>
</template>
<script>
const { changeThemeColor } = require('@src/theme');
export default {
  methods: {
    changeColor() {
      changeThemeColor('#3d61cc');
    },
  },
};
</script>
