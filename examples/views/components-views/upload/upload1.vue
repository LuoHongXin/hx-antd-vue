<template>
  <div>
    <funTitleDetail title="上传附件" detail="点击按钮选择文件后即可上传文件。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :default-file-list="defaultFileList">
        <y-button icon="upload"> 点击上传 </y-button>
        <span class="tips">文件大小不超过10MB，支持 zip、rar 格式</span>
      </y-upload>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-JavaScript" v-text="js">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'myUpload1',
  data() {
    return {
      defaultFileList: [
        {
          uid: '1',
          name: 'xxx.png',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png',
        },
        {
          uid: '2',
          name: 'yyy.png',
          status: 'done',
          url: 'http://www.baidu.com/yyy.png',
        },
        {
          uid: '3',
          name: 'zzz.png',
          status: 'error',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/zzz.png',
        },
      ],
      html: `<y-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :default-file-list="defaultFileList">
        <y-button icon="upload"> 点击上传 </y-button>
        <span class="tips">文件大小不超过10MB，支持 zip、rar 格式</span>
      </y-upload>`,
      js: `
        export default {
        name: 'myUpload1',
        data() {
            return {
            defaultFileList: [
                {
                uid: '1',
                name: 'xxx.png',
                status: 'done',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/xxx.png',
                },
                {
                uid: '2',
                name: 'yyy.png',
                status: 'done',
                url: 'http://www.baidu.com/yyy.png',
                },
                {
                uid: '3',
                name: 'zzz.png',
                status: 'error',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/zzz.png',
                },
            ],
            };
        },
            methods: {
                handleChange({ file, fileList }) {
                    if (file.status !== 'uploading') {
                        console.log(file, fileList);
                    }
                },
            },
        };
       `,
    };
  },
  methods: {
    handleChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.tips {
  margin-left: 16px;
  color: #83878f;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
</style>
