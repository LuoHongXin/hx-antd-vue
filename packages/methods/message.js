import { message } from 'ant-design-vue';
import colorVariables from '@src/styles/variables/index.less';

const YMessage = {
  config: function(options) {
    message.config(options);
  },
  destroy: function() {
    message.destroy();
  },
  error: function(content, duration, onClose) {
    message.error(content, duration, onClose);
  },
  info: function(content, duration, onClose) {
    let icon = function(h) {
      return h('y-svg-icon', {
        style: {
          color: colorVariables.yColorInfo,
          marginRight: '8px',
          fontSize: '18px',
          position: 'relative',
          top: '1px',
        },
        props: {
          iconClass: 'info',
        },
      });
    };
    if (typeof content === 'string') {
      message.info({ content, duration, onClose, icon });
    } else {
      content.icon = content.icon ? content.icon : icon;
      message.info(content);
    }
  },
  loading: function(content, duration, onClose) {
    message.loading(content, duration, onClose);
  },
  open: function(args) {
    message.open(args);
  },
  success: function(content, duration, onClose) {
    message.success(content, duration, onClose);
  },
  warning: function(content, duration, onClose) {
    message.warning(content, duration, onClose);
  },
  warn: function(content, duration, onClose) {
    message.warn(content, duration, onClose);
  },
};
export default YMessage;
