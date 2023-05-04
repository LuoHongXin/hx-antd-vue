import { message } from 'ant-design-vue';
import colorVariables from '../../src/styles/variables/index.less';

const YMessage = {
  config: function(options) {
    return message.config(options);
  },
  destroy: function() {
    return message.destroy();
  },
  error: function(content, duration, onClose) {
    return message.error(content, duration, onClose);
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
          iconClass: 'fill-info',
        },
      });
    };
    if (typeof content === 'string') {
      return message.info({ content, duration, onClose, icon });
    } else {
      content.icon = content.icon ? content.icon : icon;
      return message.info(content);
    }
  },
  loading: function(content, duration, onClose) {
    return message.loading(content, duration, onClose);
  },
  open: function(args) {
    return message.open(args);
  },
  success: function(content, duration, onClose) {
    return message.success(content, duration, onClose);
  },
  warning: function(content, duration, onClose) {
    return message.warning(content, duration, onClose);
  },
  warn: function(content, duration, onClose) {
    return message.warn(content, duration, onClose);
  },
};
export default YMessage;
