/**
 * webpack-theme-color-replacer 插件的 resolve 配置
 * 为特定的 css 选择器（selector）配置 解析（resolve）规则
 *
 * key 为 css 选择器值或合法的正则表达式字符串
 * 当 key 设置 css 选择器时，会匹配对应的 css
 * 当 key 设置为正则表达式时，会匹配所有满足正则表达式的 css
 *
 * value 可设置为 Boolean的 false（不能设为 true） 或 对象
 * 当 value 为 false 时，则会忽略此 css ，即此 css 不纳入 webpack-theme-color-replacer 管理
 * 当 value 为对象时，会调用该对象的 resolve 函数，并传入 cssText （原始的 css 文本）
 * 回一个处理后的、合法的 css 字符串（包含 selectior）
 */
const cssResolve = {
  // '.ant-checkbox-checked .ant-checkbox-inner::after': {
  //   resolve(cssText, cssObj) {
  //     cssObj.rules.push('border-top:0', 'border-left:0');
  //     return cssObj.toText();
  //   },
  // },
  // 多选框伪类元素border样式被覆盖失去原来top和left为0的问题
  // '.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after': {
  //   resolve(cssText, cssObj) {
  //     cssObj.rules.push('border-top:0', 'border-left:0');
  //     return cssObj.toText();
  //   },
  // },
  '/checkbox-inner::after/': {
    resolve(cssText, cssObj) {
      cssObj.rules.push('border-top:0', 'border-left:0');
      return cssObj.toText();
    },
  },
  // 解决表格前后页数按钮换肤后，border-color未被读取问题
  '.ant-pagination-disabled a,.ant-pagination-disabled:hover a,.ant-pagination-disabled:focus a,.ant-pagination-disabled .ant-pagination-item-link,.ant-pagination-disabled:hover .ant-pagination-item-link,.ant-pagination-disabled:focus .ant-pagination-item-link': {
    resolve(cssText, cssObj) {
      cssObj.rules.push('border-color: #d9d9d9');
      return cssObj.toText();
    },
  },
  '.ant-layout-sider': {
    resolve(cssText, cssObj) {
      cssObj.selector = '.ant-layout-sider-dark';
      return cssObj.toText();
    },
  },
  '/keyframes/': false,
};
module.exports = cssResolve;
