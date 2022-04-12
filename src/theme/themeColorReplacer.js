const cssResolve = require('./cssResolve.confg');

function resolveCss(output, srcArr) {
  let regExps = [];
  // 提取 resolve 配置中所有的正则配置
  Object.keys(cssResolve).forEach(key => {
    let isRegExp = false;
    let reg = {};
    try {
      reg = eval(key);
      isRegExp = reg instanceof RegExp;
    } catch (e) {
      isRegExp = false;
    }
    if (isRegExp) {
      regExps.push([reg, cssResolve[key]]);
    }
  });
  // 去重
  srcArr = [...new Set(srcArr)];

  // 处理css
  let outArr = [];
  srcArr.forEach(text => {
    let cssObj = parseCssObj(text);
    // 根据 selector 匹配规则，匹配成功，则按配置处理 css
    if (cssResolve[cssObj.selector] !== undefined) {
      let cfg = cssResolve[cssObj.selector];
      if (cfg) {
        outArr.push(cfg.resolve(text, cssObj));
      }
    } else {
      let cssText = '';
      // 匹配不成功，则测试是否有匹配的正则配置，有则按正则对应的配置处理
      for (let regExp of regExps) {
        if (regExp[0].test(cssObj.selector)) {
          let cssCfg = regExp[1];
          cssText = cssCfg ? cssCfg.resolve(text, cssObj) : '';
          break;
        }
        // 未匹配到正则，则设置 cssText 为默认的 css(即不处理)
        cssText = text;
      }
      if (cssText !== '') {
        outArr.push(cssText);
      }
    }
  });
  output = outArr.join('\n');
  return output;
}

/**
 * @description 从字符串解析 css  对象
 * @author luohongxin
 * @date 04/01/2022
 * @param {*} cssText
 * @returns {{
 *  name: String,
 *  rules: Array[String],
 *  toText: Function
 * }}
 */
function parseCssObj(cssText) {
  let css = {};
  const ruleIndex = cssText.indexOf('{');
  css.selector = cssText.substring(0, ruleIndex);
  const ruleBody = cssText.substring(ruleIndex + 1, cssText.length - 1);
  const rules = ruleBody.split(';');
  css.rules = rules;
  css.toText = function() {
    let body = '';
    this.rules.forEach(item => {
      body += item + ';';
    });
    return `${this.selector}{${body}}`;
  };
  return css;
}

module.exports = {
  resolveCss,
};
