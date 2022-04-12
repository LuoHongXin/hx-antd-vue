<template>
  <div>
    <div>
      <a-row>
        <a-col :span="12">
          <y-slider v-model="inputValue1" :min="1" :max="20" />
        </a-col>
        <a-col :span="4">
          <y-input-number calculator :min="0" :max="20" v-model="inputValue1" style="marginLeft: 16px" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <y-slider v-model="inputValue" :min="0" :max="1" :step="0.01" />
        </a-col>
        <a-col :span="4">
          <y-input-number calculator :min="0" :max="1" :step="0.01" v-model="inputValue" style="marginLeft: 16px" />
        </a-col>
      </a-row>
      <y-slider range :step="10" :default-value="[20, 50]" @change="onChange" @afterChange="onAfterChange" />
      included=true
      <y-slider :marks="marks" :default-value="37" />
      included=false
      <y-slider :marks="marks" :included="false" :default-value="37" />
    </div>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text='html'>
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
        export default {
            data() {
                return {
                    inputValue: 0,
                    inputValue1: 1,
                    marks: {
                        0: '0°C',
                        26: '26°C',
                        37: '37°C',
                        100: {
                        style: {
                            color: '#f50',
                        },
                        label: <strong>100°C</strong>,
                    },
                }
            },
            watch: {
                inputValue1(inputValue1) {
                   console.log(inputValue1);
                },
            },
            methods: {
                onChange(value) {
                  console.log('change: ', value);
                },
                onAfterChange(value) {
                  console.log('afterChange: ', value);
                },
            },
        };
        </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'mySliderContent',
  data() {
    return {
      html: `<div>
        <a-row>
            <a-col :span="12">
            <y-slider v-model="inputValue1" :min="1" :max="20" />
            </a-col>
            <a-col :span="4">
            <y-input-number calculator :min="0" :max="20" v-model="inputValue1" style="marginLeft: 16px" />
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="12">
            <y-slider v-model="inputValue" :min="0" :max="1" :step="0.01" />
            </a-col>
            <a-col :span="4">
            <y-input-number calculator :min="0" :max="1" :step="0.01" v-model="inputValue" style="marginLeft: 16px" />
            </a-col>
        </a-row>
        <y-slider range :step="10" :default-value="[20, 50]" @change="onChange" @afterChange="onAfterChange" />
        included=true
        <y-slider :marks="marks" :default-value="37" />
        included=false
        <y-slider :marks="marks" :included="false" :default-value="37" />
      </div>`,
      inputValue: 0,
      inputValue1: 1,
      marks: {
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: {
            color: '#f50',
          },
          label: <strong>100°C</strong>,
        },
      },
    };
  },
  watch: {
    inputValue1(inputValue1) {
      console.log(inputValue1);
    },
  },
  methods: {
    onChange(value) {
      console.log('change: ', value);
    },
    onAfterChange(value) {
      console.log('afterChange: ', value);
    },
  },
};
</script>
