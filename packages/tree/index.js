import GLTree from './src';
import GLTreeDirectoryTree from './src/directoryTree';
import GLTreeTreeNode from './src/treeNode';
import { Tree, TreeSelect } from 'ant-design-vue';
GLTree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
  Vue.component(Tree.TreeNode.name, Tree.TreeNode);
  Vue.component(Tree.DirectoryTree.name, Tree.DirectoryTree);
  Vue.component(TreeSelect.name, TreeSelect);
  Vue.component(TreeSelect.TreeNode.name, TreeSelect.TreeNode);
  Vue.component(GLTree.name, GLTree);
  Vue.component(GLTreeDirectoryTree.name, GLTreeDirectoryTree);
  Vue.component(GLTreeTreeNode.name, GLTreeTreeNode);
};

export default GLTree;
