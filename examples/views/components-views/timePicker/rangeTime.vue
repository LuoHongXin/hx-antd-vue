<template>
  <com-show>
    <div>
      <y-range-time-picker disabled v-model="value1" />
      <br />
      <br />
      <y-range-time-picker v-model="value1" @change="onChange" />
    </div>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          import moment from 'moment';
          export default {
            data() {
              return {
                value1: [moment(), null],
              };
            },
            methods: {
              onChange(time) {
                console.log(time);
                this.value = time;
              },
            },
          };
        </code>
    </pre>
  </com-show>
</template>
<script>
import moment from 'moment';
export default {
  name: 'myRangeTimePicker',
  data() {
    return {
      html: `<template>
          <div>
            <y-range-time-picker disabled v-model="value1" />
            <br />
            <br />
            <y-range-time-picker v-model="value1" @change="onChange" />
          </div>
        </template>`,
      value1: [moment(), null],
    };
  },
  methods: {
    onChange(time) {
      console.log(time);
      this.value = time;
    },
  },
};
</script>
