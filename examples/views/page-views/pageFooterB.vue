<template>
  <div class="y-footer-pageB" style="height:700px;">
    <formPageB class="y-footer-page-content" />
    <div class="y-page-footerB">
      <div class="footer-content">
        <y-button-group reversed :buttonList="buttonList"></y-button-group>
      </div>
    </div>
  </div>
</template>
<script>
import formPageB from './formPageB';
export default {
  name: 'pageFooterB',
  components: {
    formPageB,
  },
  data() {
    return {
      buttonList: [
        {
          text: '新增',
          tips: {
            text: '数据添加',
            placement: 'left',
          },
          type: 'primary',
          icon: 'plus',
          click: () => {
            this.action('新增');
          },
        },
        {
          text: '修改',
          click: () => {
            this.action('修改');
          },
          tips: '请先选择数据',
          disable: true,
        },
        {
          text: '复制',
          click: () => {
            this.action('复制');
          },
        },
        {
          text: '粘贴操作操作操作',
        },
        {
          text: '删除',
          tips: '危险操作',
          click: () => {
            this.action('删除');
          },
          disable: true,
        },
      ],
    };
  },
  methods: {
    add() {
      alert('新增');
    },
    action(val) {
      alert(val);
    },
  },
};
</script>
