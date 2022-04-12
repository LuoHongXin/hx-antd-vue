<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Collapse 折叠面板" detail="对信息进行分组和收纳，帮助用户有条理地阅读内容。" />
    <declareList :value="declareList" />
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="常规" detail="允许用户自由切换查看内容的场景" />
    <declareList :value="declareList2" />
    <!-- 组件展示 -->
    <com-show>
      <y-collapse v-model="activeKey">
        <template #expandIcon="props">
          <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
        </template>
        <y-collapse-panel key="1" header="简要标题1">
          <p>{{ text }}</p>
        </y-collapse-panel>
        <y-collapse-panel key="2" header="简要标题2" :disabled="false">
          <p>{{ text }}</p>
        </y-collapse-panel>
        <y-collapse-panel key="3" header="简要标题3" disabled>
          <p>{{ text }}</p>
        </y-collapse-panel>
      </y-collapse>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-javascript">
          export default {
                watch: {
                    activeKey(key) {
                        console.log(key);
                    },
                },
                data() {
                    return {
                        text: `我是内容我是内容我是内容我是内容，我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容，我是内容我是内容。`,
                        activeKey: ['1'],
                    }
                }
          }
        </code>
    </pre>
    <funTitleDetail title="手风琴" detail="一次只展示一项内容，内容间不需要对比的场景" />
    <declareList :value="declareList3" />
    <!-- 组件展示 -->
    <com-show>
      <y-collapse accordion>
        <template #expandIcon="props">
          <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
        </template>
        <y-collapse-panel key="1">
          <template slot="header">
            <a-icon type="folder-open" style="padding-right:10px;" />
            <span>简要标题1</span>
          </template>
          <p>{{ text }}</p>
        </y-collapse-panel>
        <y-collapse-panel key="2" :disabled="false">
          <template slot="header">
            <a-icon type="folder-open" style="padding-right:10px;" />
            <span>简要标题2</span>
          </template>
          <p>{{ text }}</p>
        </y-collapse-panel>
        <y-collapse-panel key="3" disabled>
          <template slot="header">
            <a-icon type="folder-open" style="padding-right:10px;" />
            <span>简要标题3</span>
          </template>
          <p>{{ text }}</p>
        </y-collapse-panel>
      </y-collapse>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
        <code class="language-javascript">
          export default {
                data() {
                    return {
                        text: `我是内容我是内容我是内容我是内容，我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容，我是内容我是内容。`,
                    }
                }
          }
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
    <api-table title="事件" :data="tableData2"></api-table>
    <api-table title="Collapse.Panel" :data="tableData3"></api-table>
  </div>
</template>
<script>
export default {
  name: 'collapse',
  watch: {
    activeKey(key) {
      console.log(key);
    },
  },
  data() {
    return {
      text: `我是内容我是内容我是内容我是内容，我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容，我是内容我是内容。`,
      activeKey: ['1'],

      declareList: ['构化展示信息，信息太多，需要提高空间利用率等场景。'],
      declareList2: ['推荐默认展开第一列', '手动展开/收起所有列，不做逻辑限制'],
      declareList3: ['推荐默认展开第一列', '单次仅允许一列'],
      html: `<y-collapse v-model="activeKey">
        <template #expandIcon="props">
          <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
        </template>
        <y-collapse-panel key="1" header="简要标题1">
          <p>{{ text }}</p>
        </y-collapse-panel>
        <y-collapse-panel key="2" header="简要标题2" :disabled="false">
          <p>{{ text }}</p>
        </y-collapse-panel>
        <y-collapse-panel key="3" header="简要标题3" disabled>
          <p>{{ text }}</p>
        </y-collapse-panel>
      </y-collapse>`,
      html2: `<y-collapse accordion>
        <template #expandIcon="props">
          <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
        </template>
        <y-collapse-panel key="1">
          <template slot="header">
            <a-icon type="folder-open" style="padding-right:10px;" />
            <span>简要标题1</span>
          </template>
          <p>{{ text }}</p>
        </y-collapse-panel>
        <y-collapse-panel key="2" :disabled="false">
          <template slot="header">
            <a-icon type="folder-open" style="padding-right:10px;" />
            <span>简要标题2</span>
          </template>
          <p>{{ text }}</p>
        </y-collapse-panel>
        <y-collapse-panel key="3" disabled>
          <template slot="header">
            <a-icon type="folder-open" style="padding-right:10px;" />
            <span>简要标题3</span>
          </template>
          <p>{{ text }}</p>
        </y-collapse-panel>
      </y-collapse>`,
      tableData: [
        {
          params: 'activeKey(v-model)',
          explain: '当前激活 tab 面板的 key',
          type: 'string[]|string',
          default: '默认无，accordion 模式下默认第一个元素',
        },
        {
          params: 'defaultActiveKey',
          explain: '初始化选中面板的 key',
          type: 'string',
          default: '无',
        },
        {
          params: 'bordered',
          explain: '带边框风格的折叠面板',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'accordion',
          explain: '手风琴模式',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'expandIcon',
          explain: '自定义切换图标',
          type: 'Function(props):VNode | slot="expandIcon" slot-scope="props"|v-slot:expandIcon="props"',
        },
        {
          params: 'expandIconPosition',
          explain: '设置图标位置： left, right',
          type: 'string',
          default: 'left',
        },
        {
          params: 'destroyInactivePanel',
          explain: '销毁折叠隐藏的面板',
          type: "'boolean",
          default: false,
        },
      ],
      tableData2: [
        {
          params: 'change',
          explain: '切换面板的回调',
          type: 'function(key)',
        },
      ],
      tableData3: [
        {
          params: 'disabled',
          explain: '禁用后的面板展开与否将无法通过用户交互改变',
          type: 'boolean',
          default: false,
        },
        {
          params: 'forceRender',
          explain: '被隐藏时是否渲染 DOM 结构',
          type: 'boolean',
          default: false,
        },
        {
          params: 'header',
          explain: '面板头内容',
          type: 'string|slot',
          default: '无',
        },
        {
          params: 'key',
          explain: '对应 activeKey',
          type: 'string',
          default: '无',
        },
        {
          params: 'showArrow',
          explain: '是否展示当前面板上的箭头',
          type: 'boolean',
          default: true,
        },
        {
          params: 'extra',
          explain: '自定义渲染每个面板右上角的内容',
          type: 'VNode | slot',
          default: '-',
        },
      ],
    };
  },
};
</script>
