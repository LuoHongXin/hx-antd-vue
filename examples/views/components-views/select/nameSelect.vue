<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="具名选择器" detail="结合业务封装的常见选择器。" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="常规" detail=""></funTitleDetail>
    <com-show>
      <y-name-select v-model="value1" :option="option" title="主机池" />
      <div>value1：{{ value1 }}</div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text='html'/>
        <code class="language-javascript">
        export default {
            name: 'NameSelect',
            data() {
                return {
                    value1: '',
                    option: [
                        {
                            title: '主机池排序1',
                            value: '1',
                        },
                        {
                            title: '集群排序2',
                            value: '2',
                        },
                        {
                            title: '宿主机排序3',
                            value: '3',
                        },
                        {
                            title: '虚拟机排序4',
                            value: '4',
                        },
                        {
                            title: '主机池排序5主机池排序5',
                            value: '5',
                        },
                    ],
                }
            }
        }
      </code>
    </pre>
    <funTitleDetail title="名称可选" detail=""></funTitleDetail>
    <com-show>
      <y-name-select v-model="value2" @titleChange="titleChange" :option="option" :titleSelect="titleSelect" />
      <div>value2：{{ value2 }}</div>
      <div>titleChangeVal：{{ titleChangeVal }}</div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text='html2'/>
        <code class="language-javascript">
        export default {
            name: 'NameSelect',
            data() {
                return {
                    value2: '',
                    titleChangeVal: '',
                    titleSelect: [
                        { title: '主机池', value: 'hostPool' },
                        { title: '集群', value: 'cluster' },
                        { title: '宿主机', value: 'host' },
                    ],
                    option: [
                        {
                            title: '主机池排序1',
                            value: '1',
                        },
                        {
                            title: '集群排序2',
                            value: '2',
                        },
                        {
                            title: '宿主机排序3',
                            value: '3',
                        },
                        {
                            title: '虚拟机排序4',
                            value: '4',
                        },
                        {
                            title: '主机池排序5主机池排序5',
                            value: '5',
                        },
                    ],
                }
            },
             methods: {
                titleChange({ value }) {
                    this.titleChangeVal = value;
                },
            },
        }
      </code>
    </pre>
    <funTitleDetail title="搜索下拉" detail=""></funTitleDetail>
    <com-show>
      <y-name-select v-model="value3" width="200" :maxNum="3" :isSearch="true" :option="option" title="可搜索下拉主机池" />
      <div>value3：{{ value3 }}</div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text='html3'/>
        <code class="language-javascript">
        export default {
            name: 'NameSelect',
            data() {
                return {
                    value3: '',
                    option: [
                        {
                            title: '主机池排序1',
                            value: '1',
                        },
                        {
                            title: '集群排序2',
                            value: '2',
                        },
                        {
                            title: '宿主机排序3',
                            value: '3',
                        },
                        {
                            title: '虚拟机排序4',
                            value: '4',
                        },
                        {
                            title: '主机池排序5主机池排序5',
                            value: '5',
                        },
                    ],
                }
            },
           
        }
      </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'NameSelect',
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      titleChangeVal: '',
      titleSelect: [
        { title: '主机池', value: 'hostPool' },
        { title: '集群', value: 'cluster' },
        { title: '宿主机', value: 'host' },
      ],
      option: [
        {
          title: '主机池排序1',
          value: '1',
        },
        {
          title: '集群排序2',
          value: '2',
        },
        {
          title: '宿主机排序3',
          value: '3',
        },
        {
          title: '虚拟机排序4',
          value: '4',
        },
        {
          title: '主机池排序5主机池排序5',
          value: '5',
        },
      ],
      html: `<y-name-select v-model="value1" :option="option" title="主机池" />
      <div>value1：{{ value1 }}</div>`,
      html2: `<y-name-select v-model="value2" @titleChange="titleChange" :option="option" :titleSelect="titleSelect" />
      <div>value2：{{ value2 }}</div>
      <div>titleChangeVal：{{ titleChangeVal }}</div>`,
      html3: `<y-name-select v-model="value3" width="200" :maxNum="3" :isSearch="true" :option="option" title="可搜索下拉主机池" />
      <div>value3：{{ value3 }}</div>`,
      tableData: [
        {
          params: 'width',
          explain: '下拉选择宽度',
          type: 'Number | String',
          default: '146',
        },
        {
          params: 'isSearch',
          explain: '是否为搜索选择',
          type: 'boolen',
          default: 'false',
        },
        {
          params: 'titleSelect',
          explain: '搜索框前面的名称选项，默认显示数组第一个作为名称，有 titleSelect 将会替掉 title，格式为 [ { title:**, value:** } ]',
          type: 'Array',
          default: '',
        },
        {
          params: 'title',
          explain: '搜索框前面的名称',
          type: 'String',
          default: '',
        },
        {
          params: 'maxNum',
          explain: '可选择的最多数量，仅搜索选择情况下可用，默认非搜索下拉选择只可单选',
          type: 'Number',
          default: '1',
        },
        {
          params: 'selectValue',
          explain: '选中的数据，即v-model绑定的数据',
          type: 'String | Number',
          default: 'false',
        },
        {
          params: 'option',
          explain: '下拉选择选项，[ { title:**, value:** } ]',
          type: 'Array',
          default: '',
        },
        {
          params: 'change',
          explain: '下拉选择改变回调事件，形参为改变后的选项value',
          type: 'function',
          default: '',
        },
        {
          params: 'titleChange',
          explain: '名称下拉选择改变回调事件',
          type: 'function',
          default: '',
        },
      ],
    };
  },
  methods: {
    titleChange({ value }) {
      this.titleChangeVal = value;
    },
  },
};
</script>
