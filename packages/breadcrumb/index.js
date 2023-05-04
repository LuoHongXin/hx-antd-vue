import GlBreadcrumb from './src/breadcrumb';
import { Breadcrumb } from 'ant-design-vue';
import icon from '../icon';
GlBreadcrumb.install = function(Vue) {
  Vue.component(GlBreadcrumb.name, GlBreadcrumb);
  Vue.component(Breadcrumb.name, Breadcrumb);
  Vue.use(icon);
  Vue.component(Breadcrumb.Item.name, Breadcrumb.Item);
  Vue.component(Breadcrumb.Separator.name, Breadcrumb.Separator);
};

export default GlBreadcrumb;
