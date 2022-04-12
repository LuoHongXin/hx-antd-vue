<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Checkbox组" detail="方便的从数组生成checkbox" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <div>
        <y-checkbox-group v-model="value" name="checkboxgroup" :options="plainOptions" @change="onChange" />
        <br />
        <y-checkbox-group :options="plainOptions" :default-value="['Apple']" @change="onChange" />
        <br />
        <y-checkbox-group :options="options" :value="['Pear']" @change="onChange" />
        <br />
        <y-checkbox-group :options="optionsWithDisabled" disabled :default-value="['Apple']" @change="onChange">
          <span slot="label" slot-scope="{ value }" style="color: red">{{ value }}</span>
        </y-checkbox-group>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
            const plainOptions = ['Apple', 'Pear', 'Orange'];
            const options = [
              { label: 'Apple', value: 'Apple' },
              { label: 'Pear', value: 'Pear' },
              { label: 'Orange', value: 'Orange' },
            ];
            const optionsWithDisabled = [
              { value: 'Apple' },
              { label: 'Pear', value: 'Pear' },
              { label: 'Orange', value: 'Orange', disabled: false },
            ];
            export default {
              data() {
                return {
                  plainOptions,
                  options,
                  optionsWithDisabled,
                  value: [],
                };
              },
              methods: {
                onChange(checkedValues) {
                  console.log('checked = ', checkedValues);
                  console.log('value = ', this.value);
                },
              },
            };
        </code>
    </pre>
  </div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { value: 'Apple' },
  { value: 'hx-antd-vue' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
export default {
  name: 'checkboxArray',
  data() {
    return {
      html: `<div>
        <y-checkbox-group
          v-model="value"
          name="checkboxgroup"
          :options="plainOptions"
          @change="onChange"
        />
        <br />
        <y-checkbox-group :options="plainOptions" :default-value="['Apple']" @change="onChange" />
        <br />
        <y-checkbox-group :options="options" :value="['Pear']" @change="onChange" />
        <br />
        <y-checkbox-group
          :options="optionsWithDisabled"
          disabled
          :default-value="['Apple']"
          @change="onChange"
        >
          <span slot="label" slot-scope="{ value }" style="color: red">{{ value }}</span>
        </y-checkbox-group>
      </div>`,
      plainOptions,
      options,
      optionsWithDisabled,
      value: [],
    };
  },
  methods: {
    onChange(checkedValues) {
      console.log('checked = ', checkedValues);
      console.log('value = ', this.value);
    },
  },
};
</script>
