<template>
  <div>
    <title-detail title="可选标签" detail="支持单选多选的标签" />
    <h3 class="fun-title">代码演示</h3>
    <com-show>
      <y-link-tag :data="dataArr" v-model="linkTagValue" :selectType="1">
        <template v-slot:hzw>
          <div style="width:100px;height:100%">
            <img
              style="width:50%;height:100%"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F201511%2F18%2F20151118172257_wcfKT.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636533506&t=31bca10c46e7c2d0778b56400e55849c"
              alt=""
            />
            <span style="">海贼王</span>
          </div>
        </template>
      </y-link-tag>
      选中值：
      <input type="text" v-model="linkTagValue" />
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="`
          <y-link-tag :data='dataArr' v-model='linkTagValue' :selectType='1'>
          <template v-slot:hzw>
            <div style='width:100px;height:100%'>
              <img
                style='width:50%;height:100%'
                src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F201511%2F18%2F20151118172257_wcfKT.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636533506&t=31bca10c46e7c2d0778b56400e55849c'
                alt=''
              />
              <span style=''>海贼王</span>
            </div>
          </template>
        </y-link-tag>
        选中值：
        <input type='text' v-model='linkTagValue' />
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
                                slot: 'hzw',
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
          value: '2',
          slot: 'hzw',
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
        {
          params: 'data',
          explain: 'tag数据，label-标签名，value-标签值，disabled-禁用，slot-具名插槽，替换原来默认的简单span元素显示label',
          type: 'Array',
        },
        { params: 'selectType', explain: '1:多选， 2:单选 默认为多选', type: 'Number', default: 1 },
        { params: 'disabled', explain: '和data中的disabled类似，但这个是全部禁用', type: 'Boolean', default: false },
        { params: 'v-model', explain: '选中的标签值，逗号隔开返回', type: 'String', default: '' },
      ],
    };
  },
};
</script>
