<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Select选择器" detail="从多个选项中选择一个或多个选项，并呈现选择结果。" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="常规" detail="注意如果你遇到菜单滚动定位问题，尝试给父元素设置position: relative"></funTitleDetail>
    <com-show>
      <div style="position: relative;">
        <y-select @select="select" checkbox :options="options" v-model="value1"> </y-select>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text='`<y-select checkbox :options="options" v-model="value1"> </y-select>`'/>
    </pre>
    <pre class="line-numbers">
      <code class="language-javascript">
        export default {
            data() {
              return {
                value1: '',
                 options: [
                  {
                    value: '1',
                    disabled: true,
                    scopedSlots: {
                      title: 'title',
                    },
                    label: 'jack',
                  },
                  {
                    value: '2',
                    label: 'jack1',
                    scopedSlots: {
                      title: 'title',
                    },
                  },
                  {
                    value: '3',
                    label: 'jack2',
                    scopedSlots: {
                      title: 'title',
                    },
                  },
                  {
                    value: '4',
                    label: 'jack3',
                    scopedSlots: {
                      title: 'title',
                    },
                  },
                ],
              };
            },
            watch: {
              value1(value1) {
                console.log(value1, 'value1');
              },
            },
        };
      </code>
    </pre>
    <api-table :data="tableData" title="checkboxSelect API"></api-table>
    <api-table :data="tableDataFn" title="checkboxSelect 事件"></api-table>
  </div>
</template>
<script>
export default {
  name: 'checkboxSelect',
  data() {
    return {
      options: [
        {
          value: '1',
          disabled: true,
          scopedSlots: {
            title: 'jack',
          },
          label: 'jack',
        },
        {
          value: '2',
          label: 'jack1',
          scopedSlots: {
            title: 'title',
          },
        },
        {
          value: '3',
          label: 'jack2',
          scopedSlots: {
            title: 'title',
          },
        },
        {
          value: '4',
          label: 'jack3',
          scopedSlots: {
            title: 'title',
          },
        },
      ],
      value1: '',
      tableData: [
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
          default: '单选s 多选xl',
        },
        {
          params: 'tooltip',
          explain: '是否显示tooltip，只有在设置options构造数据源时生效(数据源需要设置scopedSlots: { title: "title" })',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'placement',
          explain: '显示tooltip时候的方向（参考y-tooltip）',
          type: 'string',
          default: 'right',
        },
        {
          params: 'getPopupContainer',
          explain: '默认渲染父节点上（parentNode），可修改渲染body上',
          type: 'Function(triggerNode)',
          default: 'triggerNode => triggerNode.parentNode || document.body（防止出问题加个body）',
        },
        { params: 'value(v-model)', explain: '数据判定', type: 'string | string[ ] | number | number[ ] ' },
        {
          params: 'checkbox',
          explain: '显示 checkbox',
          type: 'boolen',
          default: 'false',
        },
        {
          params: 'disabled',
          explain: '禁用',
          type: 'boolen',
          default: 'false',
        },
      ],
      tableDataFn: [
        {
          params: 'options',
          explain: 'options 数据，目前不支持slot default selectOption 节点',
          type: 'array',
        },
        {
          params: 'check',
          explain: '点击复选框触发',
          type: 'function(checkedKeys, e:{checked: bool, checkedNodes, node, event})',
        },
        {
          params: 'load',
          explain: '节点加载完毕时触发',
          type: 'function(loadedKeys, {event, node})',
        },
        {
          params: 'rightClick',
          explain: '响应右键点击',
          type: 'function({event, node})',
        },
        {
          params: 'select',
          explain: '点击树节点触发',
          type: 'function(selectedKeys, e:{selected: bool, selectedNodes, node, event})',
        },
      ],
    };
  },
  methods: {
    select(select) {
      console.log(select, 'select');
    },
  },
};
</script>
