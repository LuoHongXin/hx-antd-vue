import Prism from 'prismjs';

export default {
  mounted() {
    let flag;
    try {
      flag = this.$el.querySelector('pre');
    } catch {
      flag = false;
    }
    if (flag) {
      setTimeout(() => {
        Prism.highlightAll(); //代码高亮渲染函数
      }, 0);
    }
  },
};
