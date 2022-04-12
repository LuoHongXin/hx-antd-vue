<template>
  <div>
    <funTitleDetail title="拖拽弹窗" detail="弹窗头部可进行拖拽"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <div>
        <y-button type="primary" @click="modalVisible = true">打开弹窗</y-button>
        <y-modal :move="modalMove" :visible="modalVisible" title="弹窗" @ok="modalVisible = false" @cancel="modalVisible = false">
          <p>弹窗内容</p>
          <y-button
            @click="
              modalMove = !modalMove;
              modalVisible = false;
            "
            >{{ modalMove ? '取消滑动' : '添加滑动' }}</y-button
          >
          <y-button type="primary" style="margin-left: 20px" @click="modalVisible2 = true">打开弹窗2</y-button>
        </y-modal>
        <y-modal :move="false" :visible="modalVisible2" title="弹窗2" @ok="modalVisible2 = false" @cancel="modalVisible2 = false">
          <p>弹窗2内容</p>
        </y-modal>
      </div>
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
  name: 'modal1',
  data() {
    return {
      modalVisible: false,
      modalVisible2: false,
      modalMove: true,
      html: `<div>
            <a-button type='primary' @click='modalVisible = true'>打开弹窗</a-button>
            <y-modal :move='modalMove' :visible='modalVisible' title='弹窗' @ok='modalVisible = false' @cancel='modalVisible = false'>
                <p>弹窗内容</p>
                <a-button
                    @click='
                    modalMove = !modalMove;
                    modalVisible = false;
                    '
                    >{{ modalMove ? '取消滑动' : '添加滑动' }}</a-button
                >
                <a-button type='primary' style='margin-left: 20px' @click='modalVisible2 = true'>打开弹窗2</a-button>
            </y-modal>
            <y-modal :move='false' :visible='modalVisible2' title='弹窗2' @ok='modalVisible2 = false' @cancel='modalVisible2 = false'>
                <p>弹窗2内容</p>
            </y-modal>
        </div>`,
      js: ` export default {
            name: 'modal',
            data() {
                return {
                    modalVisible: false,
                    modalVisible2: false,
                    modalMove: true,
                };
            },
        };`,
    };
  },
};
</script>
