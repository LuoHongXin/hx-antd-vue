import GlTimeLine from './src/timeLine';
import { Timeline } from 'ant-design-vue';
GlTimeLine.install = function(Vue) {
  Vue.component(Timeline.name, Timeline);
  Vue.component(Timeline.Item.name, Timeline.Item);
  Vue.component(GlTimeLine.name, GlTimeLine);
};

export default GlTimeLine;
