import * as filterForm from './filterForm';
import signTitle from './signTitle';
import Row from '../row';
import Col from '../col';
import form from '../form';
export default {
  install: function(Vue) {
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
    Vue.use(form);
    for (let name of Object.keys(filterForm)) {
      Vue.component(filterForm[name]['name'], filterForm[name]);
    }
    Vue.component(signTitle.name, signTitle);
  },
};
