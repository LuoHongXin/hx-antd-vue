const { getAntdColors, getFunctionalColors, theme } = require('../antdVars/index');
const { resolveCss } = require('./themeColorReplacer');
const varyColor = require('webpack-theme-color-replacer/client/varyColor');
const client = require('webpack-theme-color-replacer/client');
const themeColorReplacer = require('webpack-theme-color-replacer');
function getThemeColors(color, mode) {
  const _color = color || theme.color;
  const _mode = mode || theme.mode;
  // 主色系
  const mainColors = getAntdColors(_color, _mode);
  const primary = mainColors[5];
  // 辅助色系
  const subColors = getAntdColors(primary, 'light');
  // 内容色系
  const themeCfg = theme.modeTheme[_mode];
  let contentColors = Object.keys(themeCfg)
    .map(key => themeCfg[key])
    .map(color => (isHex(color) ? color : toNum3(color).join(',')));
  // 内容色去重
  contentColors = [...new Set(contentColors)];
  // rgb 格式的主题色
  let rgbColors = [toNum3(primary).join(',')];
  let functionalColors = getFunctionalColors(_mode);
  return [
    primary,
    ...mainColors,
    ...subColors,
    ...contentColors,
    ...rgbColors,
    ...functionalColors.success,
    ...functionalColors.warning,
    ...functionalColors.error,
  ];
}
function changeThemeColor(newColor, mode) {
  return client.changer.changeColor({
    newColors: getThemeColors(newColor, mode),
  });
}

function isHex(color) {
  return color.length >= 4 && color[0] === '#';
}

function isRgb(color) {
  return color.length >= 10 && color.slice(0, 3) === 'rgb';
}
function isRgba(color) {
  return color.length >= 13 && color.slice(0, 4) === 'rgba';
}
function toNum3(color) {
  if (isHex(color)) {
    return varyColor.toNum3(color);
  }
  let colorStr = '';
  if (isRgb(color)) {
    colorStr = color.slice(5, color.length);
  } else if (isRgba(color)) {
    colorStr = color.slice(6, color.lastIndexOf(','));
  }
  let rgb = colorStr.split(',');
  const r = parseInt(rgb[0]);
  const g = parseInt(rgb[1]);
  const b = parseInt(rgb[2]);
  return [r, g, b];
}
module.exports = {
  getThemeColors,
  changeThemeColor,
  resolveCss,
  themeColorReplacer,
};
