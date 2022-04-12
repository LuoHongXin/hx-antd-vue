import GLTree from './src';
import GLTreeDirectoryTree from './src/directoryTree';
import GLTreeTreeNode from './src/treeNode';
GLTree.install = function(Vue) {
  Vue.component(GLTree.name, GLTree);
  Vue.component(GLTreeDirectoryTree.name, GLTreeDirectoryTree);
  Vue.component(GLTreeTreeNode.name, GLTreeTreeNode);
};

export default GLTree;
