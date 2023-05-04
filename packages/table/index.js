import GlTable from './src/table';
import { Table } from 'ant-design-vue';
GlTable.install = function(Vue) {
  Vue.component(Table.name, Table);
  Vue.component(GlTable.name, GlTable);
};

export default GlTable;
