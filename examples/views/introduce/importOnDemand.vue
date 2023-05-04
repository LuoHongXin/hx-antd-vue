<template>
  <div>
    <h3 class="fun-title">按需导入</h3>
    <funTitleDetail
      title="需要主动配置下组件库的国际化"
      detail="样式和前面一样还是全局导入，但组件需要一个一个去导入，且需要主动配置组件库国际化。"
    ></funTitleDetail>
    <pre class="line-numbers">
        <code class="language-JavaScript">
            import VueI18n from 'vue-i18n';
            Vue.use(VueI18n);
            // 组件库国际化注册文件
            import lang from "hx-antd-vue/src/locale";
            const locale = localStorage.getItem('lang') || 'zh_CN';
            const wci18n = new VueI18n({
                locale, // 设置地区
                messages: lang, // 设置地区信息
            });
            Vue.prototype.$wci18n = wci18n; // 全局
            window.wci18n = wci18n;
        </code>
    </pre>
    <funTitleDetail
      title="导入组件"
      detail="样式和前面一样还是全局导入，但组件需要一个一个去导入，具体组件可以看node_modules中wh-component的packages文件夹中组件。"
    ></funTitleDetail>
    <pre class="line-numbers">
        <code class="language-JavaScript">
        import { button, datePicker, configProvider, editor } from "hx-antd-vue";
        // 组件
        Vue.use(button)
          .use(datePicker)
          .use(editor)
          .use(configProvider);
        // 组件内置的方法
        import { getTableDragHeader, getTablePagination } from "hx-antd-vue/packages/Bus";
        Vue.prototype.$YGetTableDragHeader = getTableDragHeader;
        Vue.prototype.$YGetTablePagination = getTablePagination;
        // 方法
         Object.keys(YMethods).forEach(key => {
          Vue.prototype['$' + key] = YMethods[key];
        });
        </code>
    </pre>
    <funTitleDetail title="配置babel-plugin-import" detail="在babel.config.js中配置babel-plugin-import支持按需引入。"></funTitleDetail>
    <pre class="line-numbers">
        <code class="language-JavaScript">
        [
          [
            'import',
            {
              libraryName: 'hx-antd-vue',
              libraryDirectory: 'packages', // 组件所在目录，默认：lib
              camel2DashComponentName: false, // 将引入的组件名转化为"-"连接的文件名 default: true
              // style: 'css', // `style: true` 会加载 less 文件
            },
          ],
        ];
        </code>
    </pre>
  </div>
</template>
