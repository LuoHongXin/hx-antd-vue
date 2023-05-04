import GlRadio from './src/radio';
import GlRadioGroup from './src/radioGroup';
import GlRadioContent from './src/radioGroup/radioContent';
import GlRadioButton from './src/radioGroup/radioButton';
import { Radio } from 'ant-design-vue';
GlRadio.install = function(Vue) {
  Vue.component(Radio.name, Radio);
  Vue.component(Radio.Button.name, Radio.Button);
  Vue.component(Radio.Group.name, Radio.Group);
  Vue.component(GlRadio.name, GlRadio);
  Vue.component(GlRadioGroup.name, GlRadioGroup);
  Vue.component(GlRadioContent.name, GlRadioContent);
  Vue.component(GlRadioButton.name, GlRadioButton);
};

export default GlRadio;
