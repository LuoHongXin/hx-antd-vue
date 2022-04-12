const { generate } = require('@ant-design/colors');
const theme = {
  color: '#d93934', // 主题色
  warning: '#E69A29', // 功能主色
  success: '#55B825',
  error: '#D82F3A',
  mode: 'dark', // 主题模式
  modeTheme: {
    dark: {
      'layout-body-background': '#f0f2f5',
      'body-background': '#fff',
      'component-background': '#fff',
      'heading-color': 'rgba(0, 0, 0, 0.85)',
      'text-color': 'rgba(0, 0, 0, 0.65)',
      'text-color-inverse': '#fff',
      'text-color-secondary': 'rgba(0, 0, 0, 0.45)',
      'shadow-color': 'rgba(0, 0, 0, 0.15)',
      'border-color-split': '#f0f0f0',
      'background-color-light': '#fafafa',
      'background-color-base': '#f5f5f5',
      'table-selected-row-bg': '#fafafa',
      'table-expanded-row-bg': '#fbfbfb',
      'checkbox-check-color': '#fff',
      'disabled-color': 'rgba(0, 0, 0, 0.25)',
      'menu-dark-color': 'rgba(254, 254, 254, 0.65)',
      'menu-dark-highlight-color': '#fefefe',
      'menu-dark-arrow-color': '#fefefe',
      'btn-primary-color': '#fff',
    },
    light: {
      'layout-body-background': '#f0f2f5',
      'body-background': '#fff',
      'component-background': '#fff',
      'heading-color': 'rgba(0, 0, 0, 0.85)',
      'text-color': 'rgba(0, 0, 0, 0.65)',
      'text-color-inverse': '#fff',
      'text-color-secondary': 'rgba(0, 0, 0, 0.45)',
      'shadow-color': 'rgba(0, 0, 0, 0.15)',
      'border-color-split': '#f0f0f0',
      'background-color-light': '#fafafa',
      'background-color-base': '#f5f5f5',
      'table-selected-row-bg': '#fafafa',
      'table-expanded-row-bg': '#fbfbfb',
      'checkbox-check-color': '#fff',
      'disabled-color': 'rgba(0, 0, 0, 0.25)',
      'menu-dark-color': 'rgba(1, 1, 1, 0.65)',
      'menu-dark-highlight-color': '#fefefe',
      'menu-dark-arrow-color': '#fefefe',
      'btn-primary-color': '#fff',
    },
    night: {
      'layout-body-background': '#000',
      'body-background': '#141414',
      'component-background': '#141414',
      'heading-color': 'rgba(255, 255, 255, 0.85)',
      'text-color': 'rgba(255, 255, 255, 0.85)',
      'text-color-inverse': '#141414',
      'text-color-secondary': 'rgba(255, 255, 255, 0.45)',
      'shadow-color': 'rgba(255, 255, 255, 0.15)',
      'border-color-split': '#303030',
      'background-color-light': '#ffffff0a',
      'background-color-base': '#2a2a2a',
      'table-selected-row-bg': '#ffffff0a',
      'table-expanded-row-bg': '#ffffff0b',
      'checkbox-check-color': '#141414',
      'disabled-color': 'rgba(255, 255, 255, 0.25)',
      'menu-dark-color': 'rgba(254, 254, 254, 0.65)',
      'menu-dark-highlight-color': '#fefefe',
      'menu-dark-arrow-color': '#fefefe',
      'btn-primary-color': '#fff',
    },
  },
};

// 获取antd色系
function getAntdColors(color, mode) {
  let options = mode ? { theme: mode } : undefined;
  return generate(color, options);
}

function getFunctionalColors(mode) {
  let options = mode ? { theme: mode } : undefined;
  const { success, warning, error } = theme;
  const successColors = generate(success, options);
  const warningColors = generate(warning, options);
  const errorColors = generate(error, options);
  return {
    success: successColors,
    warning: warningColors,
    error: errorColors,
  };
}

function modifyVars(color) {
  const _color = color || theme.color;
  const palettes = getAntdColors(_color, theme.mode);
  const { success, warning, error } = getFunctionalColors(theme.mode);
  return {
    'primary-color': palettes[5],
    'primary-1': palettes[0],
    'primary-2': palettes[1],
    'primary-3': palettes[2],
    'primary-4': palettes[3],
    'primary-5': palettes[4],
    'primary-6': palettes[5],
    'primary-7': palettes[6],
    'primary-8': palettes[7],
    'primary-9': palettes[8],
    'primary-10': palettes[9],
    'info-color': palettes[5],
    'success-color': success[5],
    'warning-color': warning[5],
    'error-color': error[5],
    'alert-info-bg-color': palettes[0],
    'alert-info-border-color': palettes[2],
    'alert-success-bg-color': success[0],
    'alert-success-border-color': success[2],
    'alert-warning-bg-color': warning[0],
    'alert-warning-border-color': warning[2],
    'alert-error-bg-color': error[0],
    'alert-error-border-color': error[2],
    'processing-color': palettes[5],
    'btn-danger-bg': error[4],
    'btn-danger-border': error[4],
    'btn-default-bg': '#FAFBFC',
    ...theme.modeTheme[theme.mode],
  };
}

module.exports = {
  getAntdColors,
  getFunctionalColors,
  modifyVars,
  theme,
};
