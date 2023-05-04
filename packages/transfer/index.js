import GLTransfer from './src/transfer';
import { Transfer } from 'ant-design-vue';
GLTransfer.install = function(Vue) {
  Vue.component(Transfer.name, Transfer);
  Vue.component(GLTransfer.name, GLTransfer);
};

export default GLTransfer;
