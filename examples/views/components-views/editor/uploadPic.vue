<template>
  <div>
    <funTitleDetail title="图片上传" detail="" />
    <!-- 组件展示 -->
    <com-show>
      <YEditor :editorConfig="editorConfig" />
    </com-show>
  </div>
</template>
<script>
import { YEditor } from '~';
export default {
  components: {
    YEditor,
  },
  data() {
    return {
      editorConfig: {
        // 菜单配置
        MENU_CONF: {
          // 上传图片配置
          uploadImage: {
            server: '/api/upload',
            // 自定义插入图片
            customInsert(res, insertFn) {
              // res 即服务端的返回结果
              // 从 res 中找到 url alt href ，然后插图图片
              // insertFn(url, alt, href)
              insertFn(res.data);
            },
          },
        },
      },
    };
  },
};
</script>
