/**
 * @description 当你有渲染耗时的组件，
 * 使用 Deferred 做渐进式渲染是不错的注意，
 * 它能避免一次 render 由于 JS 执行时间过长导致渲染卡住的现象。
 * @author luohongxin
 * @date 08/08/2022
 * @export
 * @param {number} [count=10]
 * @return {*}
 */
export default function(count = 10) {
  return {
    data() {
      return {
        displayPriority: 0,
      };
    },

    mounted() {
      this.runDisplayPriority();
    },

    methods: {
      runDisplayPriority() {
        const step = () => {
          requestAnimationFrame(() => {
            this.displayPriority++;
            if (this.displayPriority < count) {
              step();
            }
          });
        };
        step();
      },
      defer(priority) {
        return this.displayPriority >= priority;
      },
    },
  };
}
