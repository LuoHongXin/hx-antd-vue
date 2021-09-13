<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="弹窗" detail="基于 antd 的弹窗进行封装，具有antd所有的API，并且多了可拖拽功能。" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <div>
        <a-button type="primary" @click="modalVisible = true">打开弹窗</a-button>
        <y-modal :move="modalMove" :visible="modalVisible" title="弹窗" @ok="modalVisible = false" @cancel="modalVisible = false">
          <p>弹窗内容</p>
          <a-button
            @click="
              modalMove = !modalMove;
              modalVisible = false;
            "
            >{{ modalMove ? '取消滑动' : '添加滑动' }}</a-button
          >
          <a-button type="primary" style="margin-left: 20px" @click="modalVisible2 = true">打开弹窗2</a-button>
        </y-modal>
        <y-modal :move="false" :visible="modalVisible2" title="弹窗2" @ok="modalVisible2 = false" @cancel="modalVisible2 = false">
          <p>弹窗2内容</p>
        </y-modal>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`
        <div>
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
        </div>
        `">
        </code>
        <code class="language-javascript">
        export default {
            name: 'modal',
            data() {
                return {
                    modalVisible: false,
                    modalVisible2: false,
                    modalMove: true,
                };
            },
        };
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'modal',
  data() {
    return {
      modalVisible: false,
      modalVisible2: false,
      modalMove: true,
      tableData: [
        { params: 'move', explain: '是否支持移动窗口，默认为 true 支持移动', type: 'Boolean', default: 'true' },
        {
          params: 'maskClosable',
          explain: 'antd的弹窗组件是默认支持点击遮罩关闭的，但是根据需求，我将y-modal设置为默认不支持，但是有需要也可以传 true 支持。',
          type: 'Boolean',
          default: 'false',
        },
      ],
    };
  },
};
</script>
