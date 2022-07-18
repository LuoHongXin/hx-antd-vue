<template>
  <div>
    <title-detail title="Editor 富文本编辑器" detail="与其它组件不同，就算全局导入组件库，该组件也不会导入，必须主动引入才能使用" />
    基于wangEditor封装的富文本编辑器，<a target="_blank" href="https://www.wangeditor.com/v5/editor-config.html">更多的API可查看文档</a>
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="标准模式" detail="不传任何配置的标准模式文本编辑器，也是按照UI设计稿为标准设计最接近的模式" />
    <!-- 组件展示 -->
    <com-show>
      <YEditor v-model="editHtml" :editorConfig="editorConfig" />
      <p>{{ editHtml }}</p>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-javaScript" v-text="js">
        </code>
    </pre>
    <!-- <UploadPic /> -->
    <api-table :data="tableData"></api-table>
    <api-table :data="tableData2" title="toolbarConfig 工具栏配置"></api-table>
    <api-table :data="tableData3" title="editorConfig 编辑器配置"></api-table>
    <api-table :data="tableData4" title="$refs.编辑器实例属性"></api-table>
  </div>
</template>
<script>
import { YEditor } from '~';
// import UploadPic from './uploadPic.vue';
export default {
  name: 'EditorDemo',
  components: {
    YEditor,
    // UploadPic,
  },
  created() {
    const _this = this;
    setTimeout(function() {
      _this.editHtml = '<p>明天你是否会想起</p>';
    }, 3000);
  },
  data() {
    return {
      editHtml: `<p>明天你是否会想起</p><p>昨天你写的日记</p><p>明天你是否还惦记</p><p>曾经最爱哭的你</p><p>老师们都已想不起</p><p>猜不出问题的你</p><p>我也是偶然翻相片</p><p>才想起同桌的你</p>`,
      html: `<YEditor v-model="editHtml" :editorConfig="editorConfig" />
      <p>{{editHtml}}</p>`,
      js: `import { YEditor } from 'hx-antd-vue';
      export default {
        components: {
          YEditor,
        },
        data() {
          return {
            editHtml: "<p>明天你是否会想起</p><p>昨天你写的日记</p><p>明天你是否还惦记</p><p>曾经最爱哭的你</p><p>老师们都已想不起</p><p>猜不出问题的你</p><p>我也是偶然翻相片</p><p>才想起同桌的你</p>",
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
          }
        }
      }`,
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
      tableData: [
        {
          params: 'v-model',
          explain: '编辑器内容的html',
          type: 'String',
          default: '',
        },
        {
          params: 'editorContainerHeight',
          explain: '编辑器高度',
          type: 'String',
          default: '200px',
        },
        {
          params: 'toolbarConfig',
          explain: '工具栏配置',
          type: 'Object',
          default: '{}',
        },
        {
          params: 'editorConfig',
          explain: '编辑器配置',
          type: 'Object',
          default: "{ placeholder: '请输入' }",
        },
        {
          params: 'mode',
          explain:
            '编辑器模式，standard 标准模式 - 根据UI设计展示的通用功能，default 默认模式 - 展示全部功能，simple 简洁模式 - 仅有部分常见功能，但更加简洁易用',
          type: 'String',
          default: 'standard',
        },
        {
          params: 'onCreated',
          explain: `编辑器创建完毕时的回调函数。`,
          type: `Function(editor: IDomEditor) => {
              // editor created
          }`,
          default: '',
        },
        {
          params: 'onChange',
          explain: `编辑器内容、选区变化时的回调函数。`,
          type: `Function(editor: IDomEditor) => {
              // editor changed
          }`,
          default: '',
        },
        {
          params: 'onDestroyed',
          explain: `编辑器销毁时的回调函数。`,
          type: `Function(editor: IDomEditor) => {
              // editor destroyed
          }`,
          default: '',
        },
        {
          params: 'onFocus',
          explain: `编辑器 focus 时的回调函数。`,
          type: `Function(editor: IDomEditor) => {
              // editor focused
          }`,
          default: '',
        },
        {
          params: 'onBlur',
          explain: `编辑器 blur 时的回调函数。`,
          type: `Function(editor: IDomEditor) => {
              // editor blur
          }`,
          default: '',
        },
        {
          params: 'customPaste',
          explain: `自定义粘贴。可阻止编辑器的默认粘贴，实现自己的粘贴逻辑。`,
          type: `(editor, event: ClipboardEvent): boolean => {
              event.preventDefault()
              return false
          }`,
          default: '',
        },
        {
          params: 'customAlert',
          explain: `自定义编辑器 alert 。如想用 antd 的 message 功能。`,
          type: `Function(s: string, t: string) => {
          }`,
          default: '',
        },
      ],
      tableData2: [
        {
          params: 'toolbarKeys',
          explain: `重新配置工具栏，显示哪些菜单，以及菜单的排序、分组，未传这个值时，不同的mode模式，值都不一样`,
          type: 'Array',
          default: '',
        },
        {
          params: 'insertKeys',
          explain: `可以在当前 toolbarKeys 的基础上继续插入新菜单，如自定义扩展的菜单。`,
          type: 'Array',
          default: '',
        },
        {
          params: 'excludeKeys',
          explain: `如果仅仅想排除掉某些菜单，其他都保留，可以使用 excludeKeys 来配置。`,
          type: 'Array',
          default: '',
        },
        {
          params: 'modalAppendToBody',
          explain: `将菜单弹出的 modal 添加到 body 下，并自定义 modal 的定位和其他样式。`,
          type: 'Boolean',
          default: '',
        },
      ],
      tableData3: [
        {
          params: 'placeholder',
          explain: `配置编辑器 placeholder`,
          type: 'String',
          default: '请输入',
        },
        {
          params: 'readOnly',
          explain: `配置编辑器是否只读，默认为 false`,
          type: 'Boolean',
          default: 'false',
        },
        {
          params: 'autoFocus',
          explain: `配置编辑器默认是否 focus ，默认为 true`,
          type: 'Boolean',
          default: 'true',
        },
        {
          params: 'scroll',
          explain: `配置编辑器是否支持滚动，默认为 true 。注意，此时不要固定 editor-container 的高度，设置一个 min-height 即可。`,
          type: 'Boolean',
          default: 'true',
        },
        {
          params: 'maxLength / onMaxLength',
          explain: `配置编辑器的 maxlength ，默认不限制；editorConfig.maxLength = 1000
          editorConfig.onMaxLength = function (editor: IDomEditor) {
              // 当达到 maxlength 限制时，触发该回调函数
          }`,
          type: 'Number | Function',
          default: '',
        },
        {
          params: 'hoverbarKeys',
          explain: `配置编辑器的 hoverbar 菜单。通过 this.$refs.编辑器实例.editor.getConfig().hoverbarKeys 可查看当前的 hoverbarKeys；mode: 'simple' 可隐藏选中文本时的 hoverbar`,
          type: 'Array',
          default: '',
        },
        {
          params: 'MENU_CONF',
          explain: `菜单配置，具体看链接：https://www.wangeditor.com/v5/menu-config.html`,
          type: 'Object',
          default: '',
        },
      ],
      tableData4: [
        {
          params: 'toolbar',
          explain: `this.$refs.编辑器实例.toolbar，可获取到工具栏实例，可通过 toolbar.getConfig() 查看工具栏的默认配置`,
        },
        {
          params: 'editor',
          explain: `this.$refs.编辑器实例.editor，可获取到编辑器实例，调用 editor.destroy() 即可销毁编辑器，不过y-editor会自动销毁`,
        },
      ],
    };
  },
};
</script>
