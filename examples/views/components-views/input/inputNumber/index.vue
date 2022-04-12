<template>
  <div>
    <inputNumber />
    <inputNumberTable />
  </div>
</template>
<script>
import inputNumber from './inputNumber.vue';
import inputNumberTable from './inputNumberTable.vue';
export default {
  name: 'myInputNumber',
  components: {
    inputNumber,
    inputNumberTable,
  },
};
</script>
