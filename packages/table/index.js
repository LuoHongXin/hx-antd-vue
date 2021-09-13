import GlTable from './src/table';

GlTable.install = function(Vue) {
  Vue.component(GlTable.name, GlTable);
};

export default GlTable;