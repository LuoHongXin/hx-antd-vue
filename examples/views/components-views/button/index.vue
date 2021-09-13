<template>
  <div>
    <Ybutton />
    <Ytableactionbutton />
    <Ytipsbutton/>
  </div>
</template>
<script>
import Ybutton from './ybutton.vue';
import Ytableactionbutton from './ytableactionbutton.vue';
import Ytipsbutton from './Ytipsbutton.vue';
export default {
  name: 'button',
  components: {
    Ybutton,
    Ytableactionbutton,
    Ytipsbutton
  },
};
</script>