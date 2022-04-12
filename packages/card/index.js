import GlCard from './src';
import GlCardGrid from './src/grid';
import GlCardMeta from './src/meta';

GlCard.install = function(Vue) {
  Vue.component(GlCard.name, GlCard);
  Vue.component(GlCardGrid.name, GlCardGrid);
  Vue.component(GlCardMeta.name, GlCardMeta);
};

export default GlCard;
