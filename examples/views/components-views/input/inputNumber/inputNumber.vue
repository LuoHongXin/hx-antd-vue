<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="InputNumber 数字输入框" detail="" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <title-detail title="数字输入框。" detail=""></title-detail>
    <com-show>
      <div>
        <y-input-number id="inputNumber" v-model="value" :min="1" :max="10" @change="onChange" />
        当前值：{{ value }}
        <div style="margin-bottom:24px" />
        <p>三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。</p>
        <div>
          <y-input-number size="large" :min="1" :max="100000" :default-value="3" @change="onChange" />
          <y-input-number :min="1" :max="100000" :default-value="3" @change="onChange" />
          <y-input-number size="small" :min="1" :max="100000" :default-value="3" @change="onChange" />
        </div>
        <div>
        <div style="margin-bottom:24px" />
        <p >点击按钮切换可用状态。</p>
        <y-input-number :min="1" :max="10" :disabled="disabled" :default-value="3" />
        <div style="marginTop:20px">
            <y-button type="primary" @click="disabled = !disabled">
              Toggle disabled
            </y-button>
          </div>
        </div>
        <div style="margin-bottom:24px" />
        <p >和原生的数字输入框一样，value 的精度由 step 的小数位数决定。</p>
        <y-input-number  v-model="value" :min="0" :max="10" :step="0.1" @change="onChange" />
        <div style="margin-bottom:24px" />
        <p >计算器</p>
        <y-input-number size="small" calculator :min="0" :max="10" @change="onChange" />
        <div style="margin-bottom:24px" />
        <p >step 小数位数。</p>
        <y-input-number disabled calculator :min="0" :max="10" :step="0.1" @change="onChange" />
      </div>
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text='`<div>
          <y-input-number id="inputNumber" v-model="value" :min="1" :max="10" @change="onChange" />
          当前值：{{ value }}
        </div>
        <div style="margin-bottom:24px" />
        <p>三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。</p>
        <div>
          <y-input-number size="large" :min="1" :max="100000" :default-value="3" @change="onChange" />
          <y-input-number :min="1" :max="100000" :default-value="3" @change="onChange" />
          <y-input-number size="small" :min="1" :max="100000" :default-value="3" @change="onChange" />
        </div>
        <div style="margin-bottom:24px" />
        <p >点击按钮切换可用状态。</p>
        <y-input-number :min="1" :max="10" :disabled="disabled" :default-value="3" />
        <div style="marginTop:20px">
            <y-button type="primary" @click="disabled = !disabled">
              Toggle disabled
            </y-button>
          </div>
        </div>
        <div style="margin-bottom:24px" />
        <p >和原生的数字输入框一样，value 的精度由 step 的小数位数决定。</p>
        <y-input-number :min="0" :max="10" :step="0.1" @change="onChange" />
        <div style="margin-bottom:24px" />
        <p >计算器</p>
        <y-input-number calculator :min="0" :max="10" @change="onChange" />
        <div style="margin-bottom:24px" />
        <p >step 小数位数。</p>
        <y-input-number calculator :min="0" :max="10" :step="0.1" @change="onChange" />`'>
        </code>
      </pre>
      <pre class="line-numbers">
          <code class="language-javascript">
            {{ code }}
          </code>
      </pre>
    </com-show>
  </div>
</template>
<script>
export default {
  name: 'inputNumber',
  data() {
    return {
      value: 3,
      code: `<script>
            export default {
              data() {
                return {
                  value: 3,
                  disabled: true,
                };
              },
              methods: {
                onChange(value) {
                  console.log('changed', value);
                },
              },
            };
          </ script>
          <style scoped>
          .ant-input-number {
            margin-right: 10px;
          }
          </style>`,
      disabled: true,
    };
  },
  methods: {
    onChange(value) {
      console.log('changed', value);
    },
  },
};
</script>
<style scoped>
.ant-input-number {
  margin-right: 10px;
}
</style>
