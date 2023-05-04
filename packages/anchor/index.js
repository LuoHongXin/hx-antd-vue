import GlAnchor from './src/anchor';
import GlAnchorLink from './src/anchorLink';
import { Anchor } from 'ant-design-vue';
GlAnchor.install = function(Vue) {
  Vue.component(GlAnchor.name, GlAnchor);
  Vue.component(GlAnchorLink.name, GlAnchorLink);
  Vue.component(Anchor.name, Anchor);
  Vue.component(Anchor.Link.name, Anchor.Link);
};

export default GlAnchor;
