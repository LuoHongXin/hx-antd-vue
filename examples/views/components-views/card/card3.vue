<template>
  <div>
    <funTitleDetail title="典型卡片" detail="垂直菜单，子菜单内嵌在菜单区域。"></funTitleDetail>
    <com-show>
      <y-card style="width: 100%" :tab-list="tabList" :active-tab-key="key" @tabChange="key => onTabChange(key, 'key')">
        <span slot="customRender" slot-scope="item">插槽{{ item.key }} </span>
        <div slot="title" href="#">插槽标题</div>
        <template #extra>
          <a href="#">More</a>
        </template>
        <div>
          内容区域
        </div>
      </y-card>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html4">
        </code>
        <code class="language-JavaScript" v-text="js4">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'myCard3',
  data() {
    return {
      html4: `
      <y-card style="width: 100%" :tab-list="tabList" :active-tab-key="key" @tabChange="key => onTabChange(key, 'key')">
        <span slot="customRender" slot-scope="item">插槽{{ item.key }} </span>
        <div slot="title" href="#">插槽标题</div>
        <template #extra>
          <a href="#">More</a>
        </template>
        <div>
          内容区域
        </div>
      </y-card>
      `,
      js4: `
      export default {
      name: 'myCard3',
      data() {
        return {
          loading: true,
          key: 'tab1',
          tabList: [
            {
              key: 'tab1',
              scopedSlots: { tab: 'customRender' },
            },
            {
              key: 'tab2',
              tab: 'tab2',
            },
          ],
          contentList: {
            tab1: 'content1',
            tab2: 'content2',
          },
        };
      },
      methods: {
        onTabChange(key, type) {
          console.log(key, type);
          this[type] = key;
        },
      },
      };
      `,
      loading: true,
      key: 'tab1',
      tabList: [
        {
          key: 'tab1',
          scopedSlots: { tab: 'customRender' },
        },
        {
          key: 'tab2',
          tab: 'tab2',
        },
      ],
      contentList: {
        tab1: 'content1',
        tab2: 'content2',
      },
    };
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    },
  },
};
</script>
