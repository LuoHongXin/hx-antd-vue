import GlCard from './src';
import GlCardGrid from './src/grid';
import GlCardMeta from './src/meta';
import { Card } from 'ant-design-vue';
GlCard.install = function(Vue) {
  Vue.component(GlCard.name, GlCard);
  Vue.component(GlCardGrid.name, GlCardGrid);
  Vue.component(GlCardMeta.name, GlCardMeta);
  Vue.component(Card.name, Card);
  Vue.component(Card.Grid.name, Card.Grid);
  Vue.component(Card.Meta.name, Card.Meta);
};

export default GlCard;
