<template>
  <div style="padding-top:10px;">
    <h3 style="font-weight:600">{{ title }}</h3>
    <ul v-if="!sort">
      <li v-for="str in value" :key="str">{{ str }}</li>
    </ul>
    <ol v-else>
      <li v-for="str in value" :key="str">{{ str }}</li>
    </ol>
  </div>
</template>
<script>
export default {
  name: 'declareList',
  props: {
    title: {
      type: String,
      default: function() {
        return '使用原则';
      },
    },
    sort: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    value: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
};
</script>
