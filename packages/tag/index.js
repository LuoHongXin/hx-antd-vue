import GlTag from './src/tag';
import { Tag } from 'ant-design-vue';
import icon from '../icon';
GlTag.install = function(Vue) {
  Vue.use(icon);
  Vue.component(Tag.name, Tag);
  Vue.component(GlTag.name, GlTag);
};

export default GlTag;
