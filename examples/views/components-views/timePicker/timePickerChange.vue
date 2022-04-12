<template>
  <com-show>
    <div>
      <p>use value and @change</p>
      <y-time-picker :value="value" @change="onChange" />
      <br />
      <br />
      <p>v-model</p>
      <y-time-picker v-model="value">
        <template slot="addon">
          <y-button type="link" @click="onClick">此刻</y-button>
        </template>
      </y-time-picker>
      <br />
      <br />
      <p>Do not change</p>
      <y-time-picker :value="value2" disabled />
      <br />
      <br />
      <y-time-picker :value="value2" />
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
                value: null,
                value2: moment(),
              };
            },
            methods: {
              onChange(time) {
                console.log(time);
                this.value = time;
              },
              onClick() {
                this.value = moment();
              }
            },
          };
        </code>
    </pre>
  </com-show>
</template>
<script>
import moment from 'moment';
export default {
  name: 'timePickerChange',
  data() {
    return {
      html: `<template>
          <div>
            <p>use value and @change</p>
            <y-time-picker :value="value" @change="onChange" />
            <br />
            <br />
            <p>v-model</p>
            <y-time-picker v-model="value">
              <template slot="addon">
                <y-button type="link" @click="onClick">此刻</y-button>
              </template>
            </y-time-picker>
            <br />
            <br />
            <p>Do not change</p>
            <y-time-picker :value="value2" disabled />
            <br />
            <br />
            <y-time-picker :value="value2" />
          </div>
        </template>`,
      value: null,
      value2: moment(),
    };
  },
  methods: {
    onChange(time) {
      console.log(time);
      this.value = time;
    },
    onClick() {
      this.value = moment();
    },
  },
};
</script>
