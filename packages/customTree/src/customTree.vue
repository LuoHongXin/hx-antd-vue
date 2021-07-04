<template>
  <div class="y-custom-tree">
    <a-tree showLine :tree-data="treeData" show-icon default-expand-all :default-selected-keys="['0-0-0']">
      <a-icon slot="switcherIcon" type="caret-down" />
      <a-icon slot="user" type="user" />
      <template slot="custom" slot-scope="item">
        <span class="y-custom-tree-node">
          <a-tooltip placement="topLeft" :title="item.title">
            <span class="y-custom-tree-title">{{ item.title }}</span>
          </a-tooltip>

          <a-dropdown :trigger="['click']" placement="bottomLeft">
            <img src="@src/images/operate.png" alt="" srcset="" class="y-custom-tree-operate" @click="(e) => e.preventDefault()" />
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <a href="javascript:;">创建下级</a>
              </a-menu-item>
              <a-menu-item key="1">
                <a href="javascript:;">删除</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
      </template>
    </a-tree>
  </div>
</template>

<script>
const treeData = [
  {
    title: '默认组织',
    key: '0-0',
    slots: { icon: 'user' },
    scopedSlots: { title: 'custom' },
    children: [
      { title: '研发中心大树底', key: '0-0-0', slots: { icon: 'user' }, scopedSlots: { title: 'custom' } },
      { title: '测试部', key: '0-0-1', slots: { icon: 'user' }, scopedSlots: { title: 'custom' } },
      {
        title: '产品部',
        key: '0-0-1-1-2',
        slots: { icon: 'user' },
        scopedSlots: { title: 'custom' },
        children: [
          {
            title: '云产品组一',
            key: '0-0-1-0',
            slots: { icon: 'user' },
            scopedSlots: { title: 'custom' },
            children: [
              {
                title: '云产品组一A按时到达时间等哈啥叫客户',
                key: '0-0-1-0-1',
                slots: { icon: 'user' },
                scopedSlots: { title: 'custom' },
                children: [{ title: 'A', key: '0-0-1-0-1-0', slots: { icon: 'user' }, scopedSlots: { title: 'custom' } }],
              },
              { title: '云产品组一B', key: '0-0-1-0-2', slots: { icon: 'user' }, scopedSlots: { title: 'custom' } },
              { title: '云产品组一C', key: '0-0-1-0-3', slots: { icon: 'user' }, scopedSlots: { title: 'custom' } },
            ],
          },
          { title: '云产品组一', key: '0-0-1-1', slots: { icon: 'user' }, scopedSlots: { title: 'custom' } },
          { title: '云产品组一', key: '0-0-1-2', slots: { icon: 'user' }, scopedSlots: { title: 'custom' } },
        ],
      },
    ],
  },
];
export default {
  name: 'YCustomTree',
  data() {
    return {
      treeData,
    };
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    onCheck(checkedKeys, info) {
      console.log('onCheck', checkedKeys, info);
    },
    openHandler(item) {
      console.log('item->', item);
    },
  },
};
</script>

<style lang="less">
@import '~/src/styles/components/customTree.less';
</style>
