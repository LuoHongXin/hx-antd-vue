import { Modal } from 'ant-design-vue';
import colorVariables from '@src/styles/variables/index.less';
import { dragClass, unLetter } from '@src/utils/common';
export const YInfo = function(config) {
  handleConfig.bind(this, config, 'info');
  Modal.info(config);
};
export const YSuccess = function(config) {
  handleConfig.bind(this, config, 'success');
  Modal.success(config);
};

export const YError = function(config) {
  handleConfig.bind(this, config, 'error');
  Modal.error(config);
};

export const YWarning = function(config) {
  handleConfig.bind(this, config, 'warning');
  Modal.warning(config);
};

function handleConfig(config, type) {
  let iconColor, iconType, icon;
  config.centered = 'centered' in config ? config.centered : true;
  switch (type) {
    case 'info':
      icon = h =>
        h('y-svg-icon', {
          style: {
            color: colorVariables.yColorInfo,
            marginRight: '18px',
            fontSize: '21px',
            position: 'relative',
            top: '1px',
            float: 'left',
          },
          props: {
            iconClass: 'info',
          },
          class: {
            anticon: true,
          },
        });
      break;
    case 'error':
      iconColor = colorVariables.yColorError;
      iconType = 'close-circle';
      break;
    case 'warning':
      iconColor = colorVariables.yColorWarn;
      iconType = 'exclamation-circle';
      break;
    case 'success':
      iconColor = colorVariables.yColorSuccess;
      iconType = 'check-circle';
      break;
  }

  config.icon = config.icon
    ? config.icon
    : icon
    ? icon
    : h =>
        h('a-icon', {
          style: {
            color: iconColor,
            marginRight: '18px',
            fontSize: '21px',
            position: 'relative',
            top: '1px',
            float: 'left',
          },
          props: {
            type: iconType,
            theme: 'filled',
          },
        });
  config.okText = config.okText ? config.okText : this.$wci18n.t('wh.modalMethods.ok');
  const unClassName = unLetter();
  config.class = (config.class ? config.class + ' ' + unClassName : unClassName) + ' y-confirm';
  let onOk = config.onOk;
  config.onOk = function() {
    if (onOk) onOk();
    if (config.move !== false) drag.relMove();
  };
  const drag = new dragClass({
    trigerArr: ['ant-modal-confirm-title', 'ant-modal-body'],
    drageBox: `.${unClassName} .ant-modal`,
  });
  if (config.move !== false) {
    drag.setMove();
  }
}
