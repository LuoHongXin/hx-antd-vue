<template>
  <div>
    <com-show>
      <div>不使用v-model</div>
      <y-input passwordMode placeholder="用户名" :value="val" />
      <br /><br />
      <div>v-model</div>
      <y-input-password :visibilityToggle="false" placeholder="visibilityToggle false" v-model="val" />
      <br /><br />
      <y-input-password placeholder="input password" v-model="val" />
      <br /><br />
      <y-input-password allow-clear placeholder="input password(点击图标删除所有内容)" v-model="val" />
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text='`
        <div>不使用v-model</div>
        <y-input passwordMode placeholder="用户名" :value="val" />
        <br /><br />
        <div>v-model</div>
        <br /><br />
        <y-input-password :visibilityToggle="false" placeholder="visibilityToggle false" v-model="val" />
        <br /><br />
        <y-input-password placeholder="input password" v-model="val" />
        <br /><br />
        <y-input-password allow-clear placeholder="input password(点击图标删除所有内容)" v-model="val" />`'>
        </code>
      </pre>
      <pre class="line-numbers">
          <code class="language-javascript">
              export default {
                data() {
                  return {
                    val: ""
                  }
                }
                methods: {
                  onChange(e) {
                    console.log(e);
                  },
                },
              };
          </code>
      </pre>
    </com-show>
    <api-table :data="tableDataPassword" title="Input.Password"></api-table>
  </div>
</template>
<script>
export default {
  name: 'myInputPassword',
  data() {
    return {
      tableDataPassword: [
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
          default: 'm',
        },
        { params: 'passwordMode', explain: '开启密码框模式(input)', type: 'Boolean', default: 'false' },
        { params: 'visibilityToggle', explain: '是否显示切换按钮', type: 'boolean', default: 'true' },
      ],
      val: '',
    };
  },
  methods: {
    onChange(e) {
      console.log(e);
    },
  },
};
</script>
