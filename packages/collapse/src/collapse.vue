<script>
import { Collapse } from 'ant-design-vue';
export default {
  name: 'YCollapse',
  extends: Collapse,
  mounted() {
    this.$vnode.elm.className += ' y-collapse';
  },
};
</script>
