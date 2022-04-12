<template>
  <div>
    <div>
      <title-detail title="ip输入框" detail="" />
      <com-show>
        <y-input-ip @change="change" />
        <div style="height:20px"></div>
        <y-input-ip :disabled="[false, true]" />
        <div style="height:20px"></div>
        <y-input-ip v-model="ip" />
        <!-- 代码展示 -->
        <pre class="line-numbers">
          <code class="language-html" v-text='textarea'>
          </code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript">
              export default {
                data() {
                  return {
                    ip: '',
                  };
                },
                methods: {
                  change(ip) {
                    console.log(ip);
                  },
                },
              };
          </code>
        </pre>
      </com-show>
    </div>
    <api-table :data="tableDataTextArea" title="API"></api-table>
    <api-table :data="tableDataTextAreaEvent" title="方法"></api-table>
  </div>
</template>
<script>
export default {
  name: 'myInputIp',
  data() {
    return {
      textarea: `<y-input-ip @change="change" />
        <div style="height:20px"></div>
        <y-input-ip :disabled="[false, true]" />
        <div style="height:20px"></div>
        <y-input-ip v-model="ip" />`,
      ip: '',
      tableDataTextArea: [
        { params: 'size', explain: '大小, 参考input', type: 'string', default: 'default' },
        { params: 'width', explain: '宽度', type: 'string | number', default: '60' },
        { params: 'value(v-model)', explain: '输入框内容', type: 'string', default: '' },
        {
          params: 'symbolUnit',
          explain: '自定义分割符号',
          type: 'string',
          default: '.',
        },
        { params: 'disabled', explain: '禁选', type: 'boolean | array', default: 'false' },
      ],
      tableDataTextAreaEvent: [{ params: 'change', explain: '回调', type: 'function(value)', default: '' }],
    };
  },
  methods: {
    change(ip) {
      console.log(ip);
    },
  },
};
</script>
