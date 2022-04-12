<template>
  <div>
    <div>
      <title-detail title="适应文本高度的文本域" detail="" />
      <com-show>
        <div>
          <p>用于多行输入。</p>
          <y-textarea placeholder="Basic usage" :rows="4" />
          <div style="margin: 24px 0" />
          <p>带移除图标的输入框，点击图标删除所有内容。</p>
          <y-textarea placeholder="Basic usage" allow-clear />
          <div style="margin: 24px 0" />
          <p>属性适用于 textarea 节点，并且只有高度会自动变化。另外 autoSize 可以设定为一个对象，指定最小行数和最大行数。</p>
          <y-textarea placeholder="Autosize height based on content lines" />
          <div style="margin: 24px 0" />
          <p>
            fixedNumber (Boolean类型默认false)
            固定字数：默认为256输入字数，对输入区域的高度进行限制，内容超出则内部滚动（在无明确要求的情况下，使用固定字数默认字数限制）
          </p>
          <y-textarea :fixedNumber="true" placeholder="Autosize height based on content lines" />
          <div style="margin: 24px 0" />
          <y-textarea placeholder="Autosize height with minimum and maximum number of lines" :autoSize="{ minRows: 2, maxRows: 6 }" />
          <div style="margin: 24px 0" />
          <y-textarea v-model="value" placeholder="Controlled autosize" :autoSize="{ minRows: 3, maxRows: 5 }" />
          {{ value }}
        </div>
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
                    value: '',
                  };
                },
              };
          </code>
        </pre>
        <p>属性适用于 textarea 节点，并且只有高度会自动变化。另外 autoSize 可以设定为一个对象，指定最小行数和最大行数。</p>
      </com-show>
    </div>
    <api-table :data="tableDataTextArea" title="Input.TextArea"></api-table>
    <api-table :data="tableDataTextAreaEvent" title="Input.TextArea 事件"></api-table>
  </div>
</template>
<script>
export default {
  name: 'myTextarea',
  data() {
    return {
      textarea: `<div>
          <p>用于多行输入。</p>
          <y-textarea placeholder="Basic usage" :rows="4" />
          <div style="margin: 24px 0" />
          <p>带移除图标的输入框，点击图标删除所有内容。</p>
          <y-textarea placeholder="Basic usage" allow-clear />
          <div style="margin: 24px 0" />
          <p>属性适用于 textarea 节点，并且只有高度会自动变化。另外 autoSize 可以设定为一个对象，指定最小行数和最大行数。</p>
          <y-textarea placeholder="Autosize height based on content lines" />
          <p>
            fixedNumber (Boolean类型默认false)
            固定字数：默认为256输入字数，对输入区域的高度进行限制，内容超出则内部滚动（在无明确要求的情况下，使用固定字数默认字数限制）
          </p>
          <y-textarea :fixedNumber="true" placeholder="Autosize height based on content lines" />
          <div style="margin: 24px 0" />
          <y-textarea
            placeholder="Autosize height with minimum and maximum number of lines"
            :autoSize="{ minRows: 2, maxRows: 6 }"
          />
          <div style="margin: 24px 0" />
          <y-textarea
            v-model="value"
            placeholder="Controlled autosize"
            :autoSize="{ minRows: 3, maxRows: 5 }"
          />
          {{ value }}
        </div>`,
      value: '',
      tableDataTextArea: [
        {
          params: 'autoWidth',
          explain: '默认宽度, 父盒子撑开',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'widthSize',
          explain: '尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种',
          type: 'string',
          default: 'xl',
        },
        { params: 'fixedNumber', explain: '显示固定字数(默认固定行高4行)', type: 'boolean', default: 'false' },
        {
          params: 'autoSize',
          explain: '自适应内容高度，可设置为 true|false 或对象：{ minRows: 2, maxRows: 6 }(可修改固定字数情况下的行高',
          type: 'boolean|object',
          default: 'false',
        },
        { params: 'defaultValue', explain: '输入框默认内容', type: 'string', default: '' },
        { params: 'value(v-model)', explain: '输入框内容', type: 'string', default: '' },
        { params: 'allowClear', explain: '可以点击清除图标删除内容', type: 'boolean', default: '' },
      ],
      tableDataTextAreaEvent: [{ params: 'pressEnter', explain: '按下回车的回调', type: 'function(e)', default: '' }],
    };
  },
};
</script>
