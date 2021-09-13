<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail
      title="操作按钮"
      detail="主要用于表格的操作，因为有些业务上需要根据权限，显示隐藏一些按钮，导致操作按钮的个数不确定，多的时候想要收起成更多，少的时候则直接展示，而该组件只需传入按钮信息和对应的配置，它就会根据指定数量去收起展开。"
    />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <com-show>
      <div class="y-table-column-action-button">
        <y-table-action-button :buttonList="buttonList"></y-table-action-button>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-table-action-button :buttonList='buttonList'></y-table-action-button>`">
        </code>
        <code class="language-javascript">
        export default {
          data() {
            return {
              buttonList: [
                {
                  text: '新增',
                  click: () => {
                    this.add();
                  },
                  show: true,
                },
                {
                  text: '修改',
                  click: () => {
                    this.action('修改');
                  },
                  disable: true,
                  show: true,
                },
                {
                  text: '复制',
                  click: () => {
                    this.action('复制');
                  },
                  show: true,
                },
                {
                  text: '删除',
                  show: true,
                },
              ]
            };
          },
          methods: {
            add() {
              alert('新增');
            },
            action(val) {
              alert(val);
            },
          }
        };
        </code>
    </pre>
    <api-table :data="tableData2"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Ytableactionbutton',
  data() {
    return {
      buttonList: [
        {
          text: '新增',
          click: () => {
            this.add();
          },
          show: true,
        },
        {
          text: '修改',
          click: () => {
            this.action('修改');
          },
          disable: true,
          show: true,
        },
        {
          text: '复制',
          click: () => {
            this.action('复制');
          },
          show: true,
        },
        {
          text: '删除',
          show: true,
        },
      ],

      tableData2: [
        {
          params: 'buttonList',
          explain:
            '按钮信息，text：String-按钮文字、click：Function-按钮点击事件、disabled：Boolean-按钮是否禁用、show：Boolean-按钮的显示隐藏',
          type: 'Array',
          default: '[]',
        },
        { params: 'moreBtnNum', explain: '显示第几个就采用更多收起', type: 'Number', default: '3' },
        {
          params: 'moreBtnTrigger',
          explain: '触发更多按钮展开的事件类型，有 click | hover | contextmenu',
          type: 'Array',
          default: '[hover]',
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