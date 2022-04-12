import GlRadio from './src/radio';
import GlRadioGroup from './src/radioGroup';
import GlRadioContent from './src/radioGroup/radioContent';
import GlRadioButton from './src/radioGroup/radioButton';
GlRadio.install = function(Vue) {
  Vue.component(GlRadio.name, GlRadio);
  Vue.component(GlRadioGroup.name, GlRadioGroup);
  Vue.component(GlRadioContent.name, GlRadioContent);
  Vue.component(GlRadioButton.name, GlRadioButton);
};

export default GlRadio;
