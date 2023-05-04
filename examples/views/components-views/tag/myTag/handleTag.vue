<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="可操作标签" detail="有交互行为" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-tag-action v-model="tagData" />

      <y-tag-action @close="close" style="margin-top: 10px" v-model="tagData2" :noCloseData="[0, 1]" addTagButtonName="自定义按钮名字" />

      <y-tag-action v-model="tagData" style="margin-top: 10px" :confirmCallBack="confirmCallBack" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript" v-text="js">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'HandleTag',
  data() {
    return {
      tagData: ['标签1', '标签2', '标签3'],
      tagData2: ['标签1', '标签2', '标签3'],
      inputVisible: false,
      inputValue: '',
      html: `<y-tag-action v-model="tagData" />
      <y-tag-action @close="close"  v-model="tagData" :noCloseData="[0, 1]" addTagButtonName="自定义按钮名字" />
      <y-tag-action v-model="tagData"  :confirmCallBack="confirmCallBack" />`,
      js: `export default {
            data() {
              return {
                tagData: ['标签1', '标签2', '标签3'],
                tagData2: ['标签1', '标签2', '标签3'],
              };
            },
            methods: {
              close(e, value) {
                console.log(e, value);
              },
              confirmCallBack(inputValue) {
                return new Promise((resolve) => {
                  if (inputValue.length <= 4) {
                    resolve(inputValue);
                  } else {
                    this.$YMessage.warn('限制输入4位');
                    resolve(false);
                  }
                });
              },
            },
          };`,
    };
  },
  methods: {
    close(e, value) {
      console.log(e, value);
    },
    confirmCallBack(inputValue) {
      return new Promise((resolve) => {
        if (inputValue.length <= 4) {
          resolve(inputValue);
        } else {
          this.$YMessage.warn('限制输入4位');
          resolve(false);
        }
      });
    },
  },
};
</script>
