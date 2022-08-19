import GlAnchor from './src/anchor';
import GlAnchorLink from './src/anchorLink';

GlAnchor.install = function(Vue) {
  Vue.component(GlAnchor.name, GlAnchor);
  Vue.component(GlAnchorLink.name, GlAnchorLink);
};

export default GlAnchor;
