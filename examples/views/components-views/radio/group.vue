<template>
  <div>
    <!-- 组件标题和说明 -->
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-radio-group default-value="a">
        <y-radio-button value="a">
          单选按钮a
        </y-radio-button>
        <y-radio-button value="b">
          单选按钮b
        </y-radio-button>
        <y-radio-button value="c">
          单选按钮c
        </y-radio-button>
        <y-radio-button value="d">
          单选按钮d
        </y-radio-button>
      </y-radio-group>
      <br /><br />
      <y-radio-group default-value="1" bodered>
        <y-radio-content value="1" disabled>
          单选项目1
          <template slot="content">
            <div>这里是一段简要的描述性信息1</div>
          </template>
        </y-radio-content>
        <y-radio-content value="2">
          单选项目2
          <template slot="content">
            <div>这里是一段简要的描述性信息2</div>
          </template>
        </y-radio-content>
      </y-radio-group>
      <br />
      <br />
      <y-radio-group default-value="1" bodered :radio="false">
        <y-radio-content value="1">
          单选项目1
        </y-radio-content>
        <y-radio-content value="2">
          单选项目2
        </y-radio-content>
        <y-radio-content value="3">
          单选项目3
        </y-radio-content>
      </y-radio-group>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <api-table :data="tableData" title="radio-content API"></api-table>
  </div>
</template>
<script>
export default {
  name: 'group',
  data() {
    return {
      html: `<y-radio-group default-value="a">
          <y-radio-button value="a">
            单选按钮a
          </y-radio-button>
          <y-radio-button value="b">
            单选按钮b
          </y-radio-button>
          <y-radio-button value="c">
            单选按钮c
          </y-radio-button>
          <y-radio-button value="d">
            单选按钮d
          </y-radio-button>
        </y-radio-group>
        <br /><br />
        <y-radio-group default-value="1" bodered>
          <y-radio-content value="1" disabled>
            单选项目1
            <template slot="content">
              <div>这里是一段简要的描述性信息1</div>
            </template>
          </y-radio-content>
          <y-radio-content value="2">
            单选项目2
            <template slot="content">
              <div>这里是一段简要的描述性信息2</div>
            </template>
          </y-radio-content>
        </y-radio-group>
        <br />
        <br />
        <y-radio-group default-value="1" bodered :radio="false">
          <y-radio-content value="1" disabled>
            单选项目1
          </y-radio-content>
          <y-radio-content value="2">
            单选项目2
          </y-radio-content>
          <y-radio-content value="3">
            单选项目3
          </y-radio-content>
        </y-radio-group>`,
      tableData: [
        { params: 'radio', explain: '是否需要单选图标', type: 'Boolean', default: 'true' },
        { params: 'borderRadius', explain: '间距', type: 'String|Number', default: '8' },
        { params: 'content', explain: '内容', type: 'slot', default: '' },
        { params: 'disabled', explain: '置灰', type: 'Boolean', default: 'false' },
      ],
    };
  },
};
</script>
