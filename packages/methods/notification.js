// 基于 notification 的基础上再封装
import { notification } from 'ant-design-vue';
import colorVariables from '../../src/styles/variables/index.less';
const YNotification = {
  close: function(config) {
    notification.close(config);
  },
  config: function(config) {
    notification.config(config);
  },
  destroy: function(config) {
    notification.destroy(config);
  },
  error: function(config) {
    config = handleConfig(config, 'error');
    notification.error(config);
  },
  info: function(config) {
    config = handleConfig(config, 'info');
    notification.info(config);
  },
  open: function(config) {
    config = handleConfig(config, 'open');
    notification.open(config);
  },
  success: function(config) {
    config = handleConfig(config, 'success');
    notification.success(config);
  },
  warn: function(config) {
    config = handleConfig(config, 'warn');
    notification.warn(config);
  },
  warning: function(config) {
    config = handleConfig(config, 'warning');
    notification.warning(config);
  },
};

function handleConfig(config, type) {
  config.class = config.class ? config.class + 'y-notification' : 'y-notification';
  let description = config.description;
  // 若描述为字符串，且有要求内容带check或ignore按钮
  if (typeof description === 'string' && (config.check || config.ignore)) {
    config.description = function(h) {
      let childEleArr = [h('div', {}, [description])];
      ['check', 'ignore'].forEach(key => {
        if (config[key]) {
          childEleArr.push(
            h(
              'y-button',
              {
                props: {
                  type: 'link',
                },
                style: {
                  padding: 0,
                  marginRight: key === 'check' ? '16px' : 0,
                },
                nativeOn: {
                  click: config[key].click,
                },
              },
              [config[key].text]
            )
          );
        }
      });
      return h('div', {}, childEleArr);
    };
  }
  switch (type) {
    case 'error':
      config.icon =
        config.icon ||
        function(h) {
          return h('a-icon', {
            style: {
              color: colorVariables.yColorError,
            },
            props: {
              type: 'close-circle',
              theme: 'filled',
            },
          });
        };
      break;
    case 'info':
      config.icon =
        config.icon ||
        function(h) {
          return h('y-svg-icon', {
            style: {
              color: colorVariables.yColorInfo,
            },
            props: {
              iconClass: 'info',
            },
          });
        };
      break;
    case 'success':
      config.icon =
        config.icon ||
        function(h) {
          return h('a-icon', {
            style: {
              color: colorVariables.yColorSuccess,
            },
            props: {
              type: 'check-circle',
              theme: 'filled',
            },
          });
        };
      break;
    case 'warn':
      config.icon =
        config.icon ||
        function(h) {
          return h('a-icon', {
            style: {
              color: colorVariables.yColorWarning,
            },
            props: {
              type: 'exclamation-circle',
              theme: 'filled',
            },
          });
        };
      break;
    case 'warning':
      config.icon =
        config.icon ||
        function(h) {
          return h('a-icon', {
            style: {
              color: colorVariables.yColorWarning,
            },
            props: {
              type: 'exclamation-circle',
              theme: 'filled',
            },
          });
        };
      break;
  }
  return config;
}
export default YNotification;
