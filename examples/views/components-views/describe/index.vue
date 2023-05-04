<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Describe 描述省略" detail="给定宽度，在描述文字过长的时候，可对内容展开收起。" />
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="" detail="根据文字内容和宽度，去自动显示 ‘张开’ 和 ‘收起’ 按钮，超过所设宽度则会显示，否则不显示按钮。" />
    <!-- 组件展示 -->
    <com-show>
      <div style="background: #ccc; padding: 8px">
        <y-describe>这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字</y-describe>
        <y-describe
          >这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字</y-describe
        >
        <y-describe width="200px">这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字</y-describe>
        <y-describe width="200px" unFoldText="了解更多" foldText="收起更多"
          >这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字</y-describe
        >
        <y-describe width="200px" class="custom-style"
          ><y-button slot="unFoldText">了解更多</y-button>
          <y-button slot="foldText">收起更多</y-button>
          这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字</y-describe
        >
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <radioDescribe />
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
import radioDescribe from './radioDescribe';
export default {
  name: 'Divider',
  components: {
    radioDescribe,
  },
  data() {
    return {
      declareList: ['对不同章节的文本段落进行分割', '对行内文字/链接进行分割，例如按钮中的表格操作按钮就是利用了分割线。'],
      html: `<y-describe>
      这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字
      </y-describe>
      <y-describe>
      这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字
      </y-describe>
      <y-describe width="200px">这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字
      </y-describe>
      <y-describe width="200px" unFoldText="了解更多" foldText="收起更多">
      这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字
      </y-describe>
      <y-describe width="200px" class="custom-style">
        <y-button slot="unFoldText">了解更多</y-button>
        <y-button slot="foldText">收起更多</y-button>
        这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字这是很长的一段文字
      </y-describe>

      <style lang="less" scoped>
        .custom-style {
          ::v-deep.y-describe-text {
            line-height: 32px; // 定义自己所需的行高
            max-height: 32px;
            .y-describe-btn {
              margin-top: -11px; // 调整自定义按钮位置
              &::before {
                display: none; // 去除省略号
              }
            }
          }
        }
      </style>`,
      tableData: [
        {
          params: 'foldText',
          explain: '收起文字显示，支持插槽',
          type: 'String',
          default: '收起',
        },
        {
          params: 'unFoldText',
          explain: '展开文字显示，支持插槽',
          type: 'String',
          default: '展开',
        },
        {
          params: 'width',
          explain: '收起内容宽度，超过这个宽度就显示收起展开按钮和省略号，可以是 px 或 %，展开后就都是100%',
          type: 'String, Number',
          default: '100%',
        },
        {
          params: 'click',
          explain: '按钮点击回调，返回true为展开，false为收起',
          type: 'Function(bool)',
          default: '',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.y-describe {
  margin-bottom: 14px;
}
.custom-style {
  ::v-deep.y-describe-text {
    line-height: 32px; // 定义自己所需的行高
    max-height: 32px;
    .y-describe-btn {
      margin-top: -11px; // 调整自定义按钮位置
      &::before {
        display: none; // 去除省略号
      }
    }
  }
}
</style>
