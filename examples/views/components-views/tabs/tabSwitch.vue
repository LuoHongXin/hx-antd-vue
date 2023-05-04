<template>
  <div>
    <!-- 组件展示 -->
    <com-show>
      <y-tab-switch :options="options" @change="change" />
      <y-tab-switch v-model="type">
        <y-tab-pane v-for="item in options" :key="item.value" :tab="item.text" :disabled="item.disabled">
          {{ item.value }}
          {{ item.text }}
        </y-tab-pane>
      </y-tab-switch>
      small
      <y-tab-switch size="small" v-model="type">
        <y-tab-pane v-for="item in options" :key="item.value" :tab="item.text"> small{{ item.value }} small{{ item.text }} </y-tab-pane>
      </y-tab-switch>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-JavaScript">
            export default {
              data() {
                return {
                  options: [
                    {
                      text: '网络',
                      value: '1',
                    },
                    {
                      text: '虚拟交换机',
                      value: '2',
                    },
                  ],
                  type: '1',
                }
              }
            };
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'TabSwitch',
  data() {
    return {
      options: [
        {
          text: '网络',
          value: '1',
          disabled: true,
        },
        {
          text: '虚拟交换机',
          value: '2',
        },
      ],
      html: `<y-tab-switch :options="options" @change="change" />
      <y-tab-switch v-model="type">
        <y-tab-pane v-for="item in options" :key="item.value" :tab="item.text" :disabled="item.disabled">
          {{ item.value }}
          {{ item.text }}
        </y-tab-pane>
      </y-tab-switch>
      small
      <y-tab-switch size="small" v-model="type">
        <y-tab-pane v-for="item in options" :key="item.value" :tab="item.text"> small{{ item.value }} small{{ item.text }} </y-tab-pane>
      </y-tab-switch>`,
      type: '1',
      tableData: [
        {
          params: 'vlaue(v-model)',
          explain: '',
          type: 'string | number',
          default: '',
        },
        {
          params: 'size',
          explain: '设置按钮大小，可选值为 small default(或者不设)',
          type: 'string',
          default: 'default',
        },
        {
          params: 'options',
          explain: '数据源 { value: "", text: "", disabled: false }形式，如果自定义内容 则不生效',
          type: 'array',
          default: '',
        },
        {
          params: 'change',
          explain: '数据变化的回调',
          type: 'function',
          default: '',
        },
      ],
    };
  },
  methods: {
    change(v) {
      console.log(v);
    },
  },
};
</script>
