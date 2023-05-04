<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Input 输入框" detail="" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <title-detail title="基本使用。" detail=""></title-detail>
    <p>size三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。</p>
    <p>allow-clear带移除图标的输入框，点击图标删除所有内容。</p>
    <com-show>
      <y-input placeholder="Basic usage" allowClear size="large" />
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text='`<y-input placeholder="Basic usage" size="large" />`'>
        </code>
      </pre>
    </com-show>
    <title-detail title="在输入框上添加前缀或后缀图标。" detail=""></title-detail>
    <com-show>
      <div class="components-input-demo-presuffix">
        <y-input ref="userNameInput" :value="userName" placeholder="Basic usage">
          <a-icon slot="prefix" type="user" />
          <a-tooltip slot="suffix" title="Extra information">
            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
          </a-tooltip>
        </y-input>
        <br />
        <br />
        <y-input v-model="userName" prefix="￥" suffix="RMB" />
      </div>
      <br />
      <br />
      <div>
        <div style="margin-bottom: 16px">
          <y-input addon-before="Http://" addon-after=".com" default-value="mysite" />
        </div>
        <div style="margin-bottom: 16px">
          <y-input default-value="mysite">
            <a-select slot="addonBefore" default-value="Http://" style="width: 90px">
              <a-select-option value="Http://">
                Http://
              </a-select-option>
              <a-select-option value="Https://">
                Https://
              </a-select-option>
            </a-select>
            <a-select slot="addonAfter" default-value=".com" style="width: 80px">
              <a-select-option value=".com">
                .com
              </a-select-option>
              <a-select-option value=".jp">
                .jp
              </a-select-option>
              <a-select-option value=".cn">
                .cn
              </a-select-option>
              <a-select-option value=".org">
                .org
              </a-select-option>
            </a-select>
          </y-input>
        </div>
        <div style="margin-bottom: 16px">
          <y-input default-value="mysite">
            <a-icon slot="addonAfter" type="setting" />
          </y-input>
        </div>
      </div>
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text='inputPrefix'>
        </code>
      </pre>
      <pre class="line-numbers">
          <code class="language-javascript">
              export default {
                data() {
                  return {
                    userName: '',
                  };
                },
                methods: {
                  emitEmpty() {
                    this.$refs.userNameInput.focus();
                    this.userName = '';
                  },
                },
              };
          </code>
      </pre>
    </com-show>
  </div>
</template>
<script>
function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default {
  name: 'myTagInput',
  data() {
    return {
      inputPrefix: `<div class="components-input-demo-presuffix">
        <y-input ref="userNameInput" :value="userName" placeholder="Basic usage" allowClear>
          <a-icon slot="prefix" type="user" />
          <a-tooltip slot="suffix" title="Extra information">
            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
          </a-tooltip>
        </y-input>
        <br />
        <br />
        <y-input v-model="userName"  prefix="￥" suffix="RMB" />
      </div>
      <br />
      <br />
      <div>
        <div style="margin-bottom: 16px">
          <y-input addon-before="Http://" addon-after=".com" default-value="mysite" />
        </div>
        <div style="margin-bottom: 16px">
          <y-input default-value="mysite">
            <a-select slot="addonBefore" default-value="Http://" style="width: 90px">
              <a-select-option value="Http://">
                Http://
              </a-select-option>
              <a-select-option value="Https://">
                Https://
              </a-select-option>
            </a-select>
            <a-select slot="addonAfter" default-value=".com" style="width: 80px">
              <a-select-option value=".com">
                .com
              </a-select-option>
              <a-select-option value=".jp">
                .jp
              </a-select-option>
              <a-select-option value=".cn">
                .cn
              </a-select-option>
              <a-select-option value=".org">
                .org
              </a-select-option>
            </a-select>
          </y-input>
        </div>
        <div style="margin-bottom: 16px">
          <y-input default-value="mysite">
            <a-icon slot="addonAfter" type="setting" />
          </y-input>
        </div>
      </div>`,
      userName: '',
      value: '',
      options,
      dataSource: [],
    };
  },
  mounted() {
    this.userName = '132';
  },
  methods: {
    onChange(e) {
      console.log(e);
    },
    formatNumber,
    onChanges(e) {
      const { value } = e.target;
      const reg = /^-?[0-9]*(\.[0-9]*)?$/;
      if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
        this.value = value;
      }
    },
    // '.' at the end or only '-' in the input box.
    onBlur() {
      const { value, onChange } = this;
      // let valueTemp = value;
      if (value.charAt(value.length - 1) === '.' || value === '-') {
        onChange({ value: value.slice(0, -1) });
      }
    },
    onSearch(value) {
      console.log(value);
    },
    handleChange(value) {
      this.dataSource = !value || value.indexOf('@') >= 0 ? [] : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`];
    },
  },
};
</script>
