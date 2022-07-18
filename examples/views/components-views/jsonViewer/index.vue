<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="JsonViewer JSON数据高亮" detail="在显示请求体JSON数据时，高亮数据。" />
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="普通展示状态"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-json-viewer :value="jsonData"></y-json-viewer>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <funTitleDetail title="复制装箱排序状态"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-json-viewer :value="jsonData" :expand-depth="5" copyable boxed sort></y-json-viewer>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
        <code class="language-JavaScript" v-text="js">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
    <api-table :data="tableData2" title="事件"></api-table>
    <api-table :data="tableData3" title="插槽"></api-table>
  </div>
</template>
<script>
import { YJsonViewer } from '~';
export default {
  name: 'myjsonViewer',
  components: {
    YJsonViewer,
  },
  data() {
    return {
      jsonData: {
        total: 25,
        limit: 10,
        skip: 0,
        links: {
          previous: undefined,
          next: function() {},
        },
        data: [
          {
            id: '5968fcad629fa84ab65a5247',
            firstname: 'Ada',
            lastname: 'Lovelace',
            awards: null,
            known: ['mathematics', 'computing'],
            position: {
              lat: 44.563836,
              lng: 6.495139,
            },
            description: `Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer,
            chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer,
            the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation,
            and published the first algorithm intended to be carried out by such a machine.
            As a result, she is sometimes regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.`,
            bornAt: '1815-12-10T00:00:00.000Z',
            diedAt: '1852-11-27T00:00:00.000Z',
          },
          {
            id: '5968fcad629fa84ab65a5246',
            firstname: 'Grace',
            lastname: 'Hopper',
            awards: [
              'Defense Distinguished Service Medal',
              'Legion of Merit',
              'Meritorious Service Medal',
              'American Campaign Medal',
              'World War II Victory Medal',
              'National Defense Service Medal',
              'Armed Forces Reserve Medal',
              'Naval Reserve Medal',
              'Presidential Medal of Freedom',
            ],
            known: null,
            position: {
              lat: 43.614624,
              lng: 3.879995,
            },
            description: `Grace Brewster Murray Hopper (née Murray; December 9, 1906 – January 1, 1992)
            was an American computer scientist and United States Navy rear admiral.
            One of the first programmers of the Harvard Mark I computer,
            she was a pioneer of computer programming who invented one of the first compiler related tools.
            She popularized the idea of machine-independent programming languages, which led to the development of COBOL,
            an early high-level programming language still in use today.`,
            bornAt: '1815-12-10T00:00:00.000Z',
            diedAt: '1852-11-27T00:00:00.000Z',
          },
        ],
      },
      declareList2: [
        'message.success(content, [duration], onClose)',
        'message.error(content, [duration], onClose)',
        'message.info(content, [duration], onClose)',
        'message.warning(content, [duration], onClose)',
        'message.warn(content, [duration], onClose)',
        'message.loading(content, [duration], onClose)',
      ],
      html: `<y-json-viewer :value="jsonData"></y-json-viewer>`,
      html2: `<y-json-viewer :value="jsonData" :expand-depth="5" copyable boxed sort></y-json-viewer>`,
      js: `import { YJsonViewer } from '~';
      export default {
        name: 'myjsonViewer',
        components: {
          YJsonViewer,
        },
        data() {
          return {
            jsonData: {
              total: 25,
              limit: 10,
              skip: 0,
              links: {
                previous: undefined,
                next: function() {},
              },
              data: [
                {
                  id: '5968fcad629fa84ab65a5247',
                  firstname: 'Ada',
                  lastname: 'Lovelace',
                  awards: null,
                  known: ['mathematics', 'computing'],
                  position: {
                    lat: 44.563836,
                    lng: 6.495139,
                  },
                  description: "Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer,
                  chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer,
                  the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation,
                  and published the first algorithm intended to be carried out by such a machine.
                  As a result, she is sometimes regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.",
                  bornAt: '1815-12-10T00:00:00.000Z',
                  diedAt: '1852-11-27T00:00:00.000Z',
                },
                {
                  id: '5968fcad629fa84ab65a5246',
                  firstname: 'Grace',
                  lastname: 'Hopper',
                  awards: [
                    'Defense Distinguished Service Medal',
                    'Legion of Merit',
                    'Meritorious Service Medal',
                    'American Campaign Medal',
                    'World War II Victory Medal',
                    'National Defense Service Medal',
                    'Armed Forces Reserve Medal',
                    'Naval Reserve Medal',
                    'Presidential Medal of Freedom',
                  ],
                  known: null,
                  position: {
                    lat: 43.614624,
                    lng: 3.879995,
                  },
                  description: "Grace Brewster Murray Hopper (née Murray; December 9, 1906 – January 1, 1992)
                  was an American computer scientist and United States Navy rear admiral.
                  One of the first programmers of the Harvard Mark I computer,
                  she was a pioneer of computer programming who invented one of the first compiler related tools.
                  She popularized the idea of machine-independent programming languages, which led to the development of COBOL,
                  an early high-level programming language still in use today.",
                  bornAt: '1815-12-10T00:00:00.000Z',
                  diedAt: '1852-11-27T00:00:00.000Z',
                },
              ],
            },
          };
        },
      };`,
      tableData: [
        { params: 'value（v-model）', explain: 'JSON数据', type: 'Object|Array|String', default: '' },
        { params: 'expand-depth', explain: '展开层级', type: 'number', default: '1' },
        {
          params: 'copyable',
          explain: `是否需要复制按钮，也可配置对象{copyText: 'copy', copiedText: 'copied', timeout: 2000}，或直接设Boolean值`,
          type: 'Object|Boolean',
          default: 'false',
        },
        { params: 'sort', explain: '是否显示排序字段', type: 'Boolean', default: 'false' },
        { params: 'boxed', explain: '为组件添加一个花哨的“装箱”样式', type: 'Boolean', default: 'false' },
        { params: 'theme', explain: '自定义主题css类名', type: 'string', default: 'jv-light' },
        { params: 'expanded', explain: '默认情况下展开视图', type: 'number', default: '1' },
        { params: 'timeformat', explain: '自定义时间格式功能', type: 'function', default: 'time => time.toLocaleString()' },
        { params: 'preview-mode', explain: '未展开时的预览模式', type: 'Boolean', default: 'false' },
        { params: 'show-array-index', explain: '显示数组下标', type: 'Boolean', default: 'true' },
        { params: 'show-double-quotes', explain: '是否带双引号', type: 'Boolean', default: 'false' },
      ],
      tableData2: [
        { params: 'copied', explain: '在文本复制后发出copyEvent', type: 'function', default: '复制成功event' },
        { params: 'keyclick', explain: '点击事件', type: 'function', default: '' },
      ],
      tableData3: [{ params: 'copy', explain: '自定义复制按钮，局部作用域变量{copied: boolean}', type: 'slot', default: '' }],
    };
  },
};
</script>
<style lang="less" scoped></style>
