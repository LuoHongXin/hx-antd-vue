<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Cascader 级联选择 CascaderMulti" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <div style="position: relative;">
        <y-cascader-multi v-model="region" :options="options"> </y-cascader-multi>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text='`<y-cascader-multi v-model="region" :options="options"> </y-cascader-multi>`'/>
    </pre>
    <pre class="line-numbers">
      <code class="language-javascript">
        const options = [
          {
            label: '北京市',
            value: '110000',
            children: [
              {
                label: '北京市',
                value: '110100',
                children: [
                  { label: '东城区', value: '110101' },
                  { label: '西城区', value: '110102' },
                ],
              },
            ],
          },
          {
            label: '天津市',
            value: '120000',
            children: [
              {
                label: '天津市',
                value: '120100',
                children: [
                  { label: '和平区', value: '120101' },
                  { label: '河东区', value: '120102' },
                ],
              },
            ],
          },
        ];
        export default {
            data() {
              return {
                region: [],
            },
        };
      </code>
    </pre>
    <api-table :data="tableData" title="CascaderMulti API"></api-table>
    <api-table :data="tableDataFn" title="CascaderMulti 事件"></api-table>
  </div>
</template>
<script>
const options = [
  {
    label: '北京市',
    value: '110000',
    children: [
      {
        label: '北京市',
        value: '110100',
        children: [
          {
            label: '东城区',
            value: '110101',
          },
          {
            label: '西城区',
            value: '110102',
          },
        ],
      },
    ],
  },
  {
    label: '天津市',
    value: '120000',
    children: [
      {
        label: '天津市',
        value: '120100',
        children: [
          {
            label: '和平区',
            value: '120101',
          },
          {
            label: '河东区',
            value: '120102',
          },
        ],
      },
    ],
  },
];
export default {
  name: 'CascaderMulti',
  data() {
    return {
      options,
      region: [],
      tableData: [
        { params: 'value(v-model)', explain: '数据判定', type: 'string[ ]  | number[ ] ' },
        {
          params: 'options',
          explain: '可选项数据源',
          type: 'object',
          default: '',
        },
        {
          params: 'widthSize',
          explain: '尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种',
          type: 'string',
          default: 's',
        },
        {
          params: 'autoWidth',
          explain: '默认宽度, 父盒子撑开',
          type: 'boolean',
          default: 'false',
        },
      ],
      tableDataFn: [
        {
          params: 'change',
          explain: '时间发生变化的回调，发生在用户选择时间时',
          type: 'function(value)',
        },
      ],
    };
  },
};
</script>
