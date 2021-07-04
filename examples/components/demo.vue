<template>
  <div :style="{ opacity: start / 300 }" class="dd">{{ result }}</div>
</template>

<script>
// export default {
//   props: ['start'],
//   computed: {
//     base() {
//       return 42;
//     },
//     result() {
//       let result = this.start;
//       for (let i = 0; i < 1000; i++) {
//         result += Math.sqrt(Math.cos(Math.sin(this.base))) + this.base * this.base + this.base + this.base * 2 + this.base * 3;
//       }
//       return result;
//     },
//   },
// };
</script>

<script>
// export default {
//   props: ['start'],
//   computed: {
//     base() {
//       return 42;
//     },
//     result() {
//       console.log('this-->', this);
//       let result = this.start;
//       const base = this.base;
//       // let { base } = this;
//       for (let i = 0; i < 1000; i++) {
//         result += Math.sqrt(Math.cos(Math.sin(base))) + base * base + base + base * 2 + base * 3;
//       }
//       return result;
//     },
//   },
// };
</script>

<script>
export default {
  props: ['start'],
  data() {
    return {
      aa: 22,
    };
  },
  computed: {
    base() {
      return 42;
    },
    result({ base, start, aa }) {
      console.log('base-->', base);
      console.log('base-->', this);
      console.log('aa-->', aa);
      let result = start;
      for (let i = 0; i < 1000; i++) {
        result += Math.sqrt(Math.cos(Math.sin(base))) + base * base + base + base * 2 + base * 3;
      }
      return result;
    },
  },
};
</script>

<style lang="less" scoped>
.dd {
  color: #000;
}
</style>