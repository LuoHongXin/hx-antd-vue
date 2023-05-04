<template>
  <div style="padding:0 24px">
    <funTitleDetail
      title="文件预览"
      detail="文件预览支持格式：docx, xlsx, pptx, pdf, 以及纯文本格式和各种图片格式的在线预览"
    ></funTitleDetail>
    <!-- 组件展示 -->
    <com-show id="box-show" style="position: relative;">
      <y-upload name="file" :showUploadList="false" :beforeUpload="beforeUpload">
        <y-button type="primary">
          预览本地文件
          <y-svg-icon icon-class="upload" />
        </y-button>
      </y-upload>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html"  v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
         <code class="language-javaScript" v-text="js">
        </code>
    </pre>
    <h1>
      FilePopUp组件
    </h1>
    <pre class="line-numbers">
        <code class="language-html"  v-text="fileText">
        </code>
    </pre>
    <FilePopUp ref="FilePopUp" />
  </div>
</template>
<script>
import FilePopUp from './FilePopUp';
import fileText from './fileText';
export default {
  name: 'PreviewFile',
  components: {
    FilePopUp,
  },
  data() {
    return {
      visible: false,
      html: `<div>
       <y-upload name="file" :showUploadList="false" :beforeUpload="beforeUpload">
        <y-button type="primary">
          预览本地文件
          <y-svg-icon icon-class="upload" />
        </y-button>
       </y-upload>
       <FilePopUp ref="FilePopUp" />
      </div>`,
      js: `methods: {
        beforeUpload(file) {
          //文件后缀 小写
          const extend = file.name.substring(file.name.lastIndexOf('.') + 1).toLocaleLowerCase();
          this.$refs.FilePopUp.open(file, extend);
          return false;
        },
      }`,
      fileText,
    };
  },
  methods: {
    beforeUpload(file) {
      //文件后缀 小写
      const extend = file.name.substring(file.name.lastIndexOf('.') + 1).toLocaleLowerCase();
      this.$refs.FilePopUp.open(file, extend);
      return false;
    },
  },
};
</script>
<style lang="less" scoped>
::v-deep .ant-drawer-body {
  padding: 0;
  height: 100%;
}
.prism-player {
  display: block;
}
</style>
