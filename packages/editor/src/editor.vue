<template>
  <div class="y-editor">
    <Toolbar class="y-editor-toolbar" :editor="editor" :defaultConfig="toolbarConfig2" :mode="mode" />
    <Editor
      class="y-editor-container"
      :style="{ height: editorContainerHeight }"
      v-model="editorHtml"
      :defaultConfig="editorConfig2"
      :mode="mode"
      @onCreated="onCreated"
      v-on="$listeners"
    />
  </div>
</template>
<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import '@wangeditor/editor/dist/css/style.css';
import { i18nChangeLanguage } from '@wangeditor/editor';
import { DomEditor } from '@wangeditor/editor';

export default {
  name: 'YEditor',
  inject: {
    configProvider: {
      default: function () {
        return null;
      },
    },
  },
  model: {
    prop: 'Html',
    event: 'update-Html',
  },
  props: {
    Html: {
      type: String,
      default: '',
    },
    editorContainerHeight: {
      type: String,
      default: '200px',
    },
    // 工具栏配置
    toolbarConfig: {
      type: Object,
      default: function () {
        return {
          // toolbarKeys: [],
        };
      },
    },
    // 编辑器配置
    editorConfig: {
      type: Object,
      default: function () {
        return {};
      },
    },
    mode: {
      type: String,
      default: 'standard',
    },
  },
  components: {
    Editor,
    Toolbar,
  },
  computed: {
    editorHtml: {
      get({ Html }) {
        return Html;
      },
      set(val) {
        this.$emit('update-Html', val);
      },
    },
  },
  watch: {
    'configProvider.locale': {
      handler(val) {
        const langMap = {
          'zh-cn': 'zh-CN',
          en: 'en',
        };
        if (val && val.locale) {
          i18nChangeLanguage(langMap[val.locale] || 'zh-CN');
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      toolbarConfig2: this.toolbarConfig,
      editorConfig2: this.editorConfig,
      toolbar: null, // 工具栏实例
      editor: null, // 编辑器实例
    };
  },
  methods: {
    onCreated(editor) {
      this.$emit('onCreated', editor);
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
      this.$nextTick(function () {
        this.toolbar = DomEditor.getToolbar(this.editor);
      });
    },
  },
  created() {
    if (this.editorConfig && !this.editorConfig.placeholder) {
      this.editorConfig2.placeholder = this.$wci18n.t('wh.editor.placeholder');
    }
    if (this.mode === 'standard' && !this.toolbarConfig.toolbarKeys) {
      this.toolbarConfig2.toolbarKeys = [
        'undo',
        'redo',
        '|',
        'bold',
        'italic',
        'underline',
        '|',
        'color',
        'bgColor',
        'fontSize',
        '|',
        {
          key: 'group-justify',
          title: this.$wci18n.t('wh.editor.justify'),
          iconSvg:
            '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>',
          menuKeys: ['justifyLeft', 'justifyRight', 'justifyCenter', 'justifyJustify'],
        },
        '|',
        {
          key: 'group-image',
          title: this.$wci18n.t('wh.editor.image'),
          iconSvg:
            '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
          menuKeys: ['insertImage', 'uploadImage'],
        },
      ];
    }
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
};
</script>
