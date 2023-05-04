import GlModal from './src/modal';
import { Modal } from 'ant-design-vue';
GlModal.install = function(Vue) {
  Vue.component(GlModal.name, GlModal);
  Vue.component(Modal.name, Modal);
};

export default GlModal;
