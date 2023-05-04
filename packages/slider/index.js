import GLYSlider from './src';
import { Slider } from 'ant-design-vue';
GLYSlider.install = function(Vue) {
  Vue.component(Slider.name, Slider);
  Vue.component(GLYSlider.name, GLYSlider);
};

export default GLYSlider;
