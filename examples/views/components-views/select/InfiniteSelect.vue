<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="SearchSelect" detail="结合业务封装的常见选择器。" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="常规" detail="api与下拉选择基本一直，但是仅支持 options 传入选项模式"></funTitleDetail>
    <com-show>
      <div>单选：</div>
      <YInfiniteSelect key="2222" showSearch v-model="selectData" :options="options" placeholder="请选择账号" />
      <br />
      <div>多选：</div>
      <YInfiniteSelect key="1111" showSearch v-model="selectData2" mode="multiple" :options="options" placeholder="请选择账号" />
      <div>selectData: {{ selectData }}</div>
      <div>selectData2: {{ selectData2 }}</div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text='html'/>
        <code class="language-javascript" v-text='js'>
       
      </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'SearchSelect',
  data() {
    return {
      options: [],
      selectData: '',
      selectData2: '',
      html: `<YInfiniteSelect key="2222" showSearch v-model="selectData" :options="options" placeholder="请选择账号" />
      <YInfiniteSelect key="1111" showSearch v-model="selectData2" mode="multiple" :options="options" placeholder="请选择账号" />
      <div>selectData: {{ selectData }}</div>
      <div>selectData: {{ selectData2 }}</div>
      <div>search: {{ search }}</div>`,
      js: ` export default {
          data() {
            return {
              selectData: '',
              selectData2: '',
            };
          },
          created() {
            const arr = [];
            for (let index = 0; index < 10000; index++) {
              arr.push({
                value: 'value' + index,
                label: 'label' + index,
              });
            }
            this.options = arr;
          },
        };`,
    };
  },
  created() {
    const arr = [];
    for (let index = 0; index < 10000; index++) {
      arr.push({
        value: 'value' + index,
        label: 'label' + index,
      });
    }
    setTimeout(() => {
      this.options = arr;
    }, 5000);
  },
};
</script>
