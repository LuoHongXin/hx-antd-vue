<template>
  <div>
    <funTitleDetail
      title="非文字的组件省略"
      detail="以单选框组件为例，要求 “收起按钮” 不能一直在右下角，数量超出一行才显示按钮，不超出则不显示"
    />
    <!-- 组件展示 -->
    <com-show>
      <!-- 数量少 -->
      <y-describe class="custom-style2">
        <y-radio-group bodered :radio="false">
          <y-radio-content :value="i" v-for="i in 2" :key="i"> 单选项目{{ i }} </y-radio-content>
          <y-button @click="foldClick" class="fold-btn">收起更多</y-button>
        </y-radio-group>
        <!-- 随便一个替换掉原来的收起按钮 -->
        <y-button type="link" v-show="false" slot="foldText">收起更多</y-button>
        <y-button slot="unFoldText">了解更多</y-button>
      </y-describe>

      <!-- 数量超出出现按钮 -->
      <y-describe class="custom-style2" ref="describeInstance">
        <y-radio-group bodered :radio="false">
          <y-radio-content :value="i" v-for="i in 20" :key="i"> 单选项目{{ i }} </y-radio-content>
          <y-button @click="foldClick" class="fold-btn">收起更多</y-button>
        </y-radio-group>
        <!-- 随便一个替换掉原来的收起按钮 -->
        <y-button type="link" v-show="false" slot="foldText">收起更多</y-button>
        <y-button slot="unFoldText">了解更多</y-button>
      </y-describe>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
          <code class="language-javaScript" v-text="js">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'RadioDescribe',
  data() {
    return {
      html: `
       <!-- 数量少 -->
        <y-describe class="custom-style2">
            <y-radio-group bodered :radio="false">
            <y-radio-content :value="i" v-for="i in 2" :key="i"> 单选项目{{ i }} </y-radio-content>
            <y-button @click="foldClick" class="fold-btn">收起更多</y-button>
            </y-radio-group>
            <!-- 随便一个替换掉原来的收起按钮 -->
            <y-button type="link" v-show="false" slot="foldText">收起更多</y-button>
            <y-button slot="unFoldText">了解更多</y-button>
        </y-describe>
      <!-- 数量超出出现按钮 -->
        <y-describe class="custom-style2" ref="describeInstance">
            <y-radio-group bodered :radio="false">
            <y-radio-content :value="i" v-for="i in 20" :key="i"> 单选项目{{ i }} </y-radio-content>
            <y-button @click="foldClick" class="fold-btn">收起更多</y-button>
            </y-radio-group>
            <!-- 随便一个替换掉原来的收起按钮 -->
            <y-button type="link" v-show="false" slot="foldText">收起更多</y-button>
            <y-button slot="unFoldText">了解更多</y-button>
        </y-describe>

       
        <style scoped lang="less">
         .custom-style2 {
            ::v-deep.y-describe-text {
                line-height: 32px; // 定义自己所需的行高
                max-height: 32px;
                .fold-btn {
                display: none;
                }
                &.y-unFold {
                .fold-btn {
                    display: inline-block;
                }
                }
                .y-describe-content {
                .ant-radio-group.y-radio-group {
                    display: inline; // 必须是行内样式
                }
                }
                .y-describe-btn {
                margin-top: -11px; // 调整自定义按钮位置
                &::before {
                    display: none; // 去除省略号
                }
                }
            }
         }
        </style>`,
      js: `methods: {
            foldClick() {
            this.$refs.describeInstance.checkClick();
            },
        },`,
    };
  },
  methods: {
    foldClick() {
      this.$refs.describeInstance.checkClick();
    },
  },
};
</script>
<style scoped lang="less">
.custom-style2 {
  margin-bottom: 12px;
  ::v-deep.y-describe-text {
    line-height: 32px; // 定义自己所需的行高
    max-height: 32px;
    .fold-btn {
      display: none;
    }
    &.y-unFold {
      .fold-btn {
        display: inline-block;
      }
    }
    .y-describe-content {
      .ant-radio-group.y-radio-group {
        display: inline; // 必须是行内样式
      }
    }
    .y-describe-btn {
      margin-top: -11px; // 调整自定义按钮位置
      &::before {
        display: none; // 去除省略号
      }
    }
  }
}
</style>
