import GlTimeLine from './src/timeLine';

GlTimeLine.install = function(Vue) {
  Vue.component(GlTimeLine.name, GlTimeLine);
};

export default GlTimeLine;
