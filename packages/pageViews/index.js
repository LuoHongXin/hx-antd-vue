import * as filterForm from './filterForm';
import signTitle from './signTitle';
export default {
  install: function(Vue) {
    for (let name of Object.keys(filterForm)) {
      Vue.component(filterForm[name]['name'], filterForm[name]);
    }
    Vue.component(signTitle.name, signTitle);
  },
};
