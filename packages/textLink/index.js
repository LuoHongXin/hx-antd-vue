import GlTextLink from './src';
import svgIcon from '../svgIcon';
import icon from '../icon';
GlTextLink.install = function(Vue) {
  Vue.use(svgIcon);
  Vue.use(icon);
  Vue.component(GlTextLink.name, GlTextLink);
};

export default GlTextLink;
