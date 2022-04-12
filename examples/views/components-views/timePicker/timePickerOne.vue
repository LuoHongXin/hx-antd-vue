<template>
  <com-show>
    <a-space>
      <y-time-picker use12-hours @change="onChange" />
      <y-time-picker use12-hours format="h:mm:ss A" @change="onChange" />
      <y-time-picker use12-hours format="h:mm a" @change="onChange" />
    </a-space>
    <title-detail title="12 小时制" detail="12 小时制的时间选择器，默认的 format 为 h:mm:ss a。" />
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          export default {
            methods: {
              onChange(time, timeString) {
                console.log(time, timeString);
              },
            },
          };
        </code>
    </pre>
  </com-show>
</template>
<script>
export default {
  name: 'timePickerOne',
  data() {
    return {
      html: `<template>
        <div>
          <y-time-picker use12-hours @change="onChange" />
          <y-time-picker use12-hours format="h:mm:ss A" @change="onChange" />
          <y-time-picker use12-hours format="h:mm a" @change="onChange" />
        </div>
      </template>`,
    };
  },
  methods: {
    onChange(time, timeString) {
      console.log(time, timeString);
    },
  },
};
</script>
