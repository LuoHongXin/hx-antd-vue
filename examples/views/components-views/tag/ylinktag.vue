<template>
  <div>
    <title-detail title="可选中标签" detail="支持单选多选的标签" />
    <h3 class="fun-title">代码演示</h3>
    <com-show>
      <y-link-tag :data="dataArr" v-model="linkTagValue" :selectType="1" />
      选中值：
      <input type="text" v-model="linkTagValue" />
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="`
        <y-link-tag :data='dataArr' v-model='linkTagValue' :selectType='1' />
        选中值：<input type='text' v-model='linkTagValue' />
            `">
        </code>
        <code class="language-javascript">
            export default {
                data() {
                    return {
                        dataArr: [
                            {
                                label: 'CNware',
                                value: '1',
                                disabled: true,
                            },
                            {
                                label: 'CNwareKV',
                                value: '2',
                            },
                            {
                                label: 'PowerVC',
                                value: '3',
                            },
                            {
                                label: '标签4',
                                value: '4',
                                disabled: true,
                            },
                            {
                                label: '标签5',
                                value: '5',
                            },
                        ],
                        linkTagValue: '5',
                    };
                },
            };
        </code>
    </pre>
    <api-table :data="tableData2"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Ylinktag',
  data() {
    return {
      dataArr: [
        {
          label: 'CNware',
          value: '1',
          disabled: true,
        },
        {
          label: 'CNwareKV',
          value: '2',
        },
        {
          label: 'PowerVC',
          value: '3',
        },
        {
          label: '标签4',
          value: '4',
          disabled: true,
        },
        {
          label: '标签5',
          value: '5',
        },
      ],
      linkTagValue: '5',
      tableData2: [
        { params: 'data', explain: 'tag数据，label-标签名，value-标签值，disabled-禁用', type: 'Array' },
        { params: 'selectType', explain: '1:多选， 2:单选 默认为多选', type: 'Number', default: 1 },
        { params: 'disabled', explain: '和data中的disabled类似，但这个是全部禁用', type: 'Boolean', default: false },
        { params: 'v-model', explain: '选中的标签值，逗号隔开返回', type: 'String', default: '' },
      ],
    };
  },
};
</script>