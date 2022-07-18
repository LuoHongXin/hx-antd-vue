<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Divider 分割线" detail="区隔内容的分割线。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用场景" :value="declareList" />
    <funTitleDetail title="垂直分隔" detail="下面仅为例子，表格操作需使用 Button 按钮 组件的表格操作按钮" />
    <!-- 组件展示 -->
    <com-show>
      <div>
        新增
        <y-divider type="vertical" />
        <a href="#">删除</a>
        <y-divider type="vertical" />
        <a href="#">修改</a>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <funTitleDetail title="水平分割" detail="默认为水平分割线，可在中间加入文字。" />
    <com-show>
      <p>
        在 ES6 中为我们新增了两个数据结构 WeakMap、WeakSet，就是为了解决内存泄漏的问题。
      </p>
      <y-divider />
      <p>
        它的键名所引用的对象都是弱引用，就是垃圾回收机制遍历的时候不考虑该引用。
      </p>
      <y-divider>加入的文字</y-divider>
      <p>
        只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。
      </p>
      <y-divider dashed />
      <p>
        也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。
      </p>
      <y-divider orientation="right">加入的文字</y-divider>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Divider',
  data() {
    return {
      declareList: ['对不同章节的文本段落进行分割', '对行内文字/链接进行分割，例如按钮中的表格操作按钮就是利用了分割线。'],
      html: `<div>
        新增
        <y-divider type="vertical" />
        <a href="#">删除</a>
        <y-divider type="vertical" />
        <a href="#">修改</a>
      </div>`,
      html2: `<p>
        在 ES6 中为我们新增了两个数据结构 WeakMap、WeakSet，就是为了解决内存泄漏的问题。
      </p>
      <y-divider />
      <p>
        它的键名所引用的对象都是弱引用，就是垃圾回收机制遍历的时候不考虑该引用。
      </p>
      <y-divider>加入的文字</y-divider>
      <p>
        只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。
      </p>
      <y-divider dashed />
      <p>
        也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。
      </p>
      <y-divider orientation="right">加入的文字</y-divider>`,
      tableData: [
        {
          params: 'dashed',
          explain: '是否虚线',
          type: 'Boolean',
          default: 'false',
        },
        {
          params: 'orientation',
          explain: '分割线标题的位置',
          type: 'enum: left right',
          default: 'center',
        },
        {
          params: 'type',
          explain: '水平还是垂直类型',
          type: 'enum: horizontal vertical',
          default: 'horizontal',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
