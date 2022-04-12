<template>
  <div>
    <!-- 组件展示 -->
    <com-show>
      <div class="tooltip-box">
        <y-transfer
          :data-source="mockData"
          show-search
          :list-style="{
            width: '250px',
            height: '300px',
          }"
          :operations="['to right', 'to left']"
          :target-keys="targetKeys"
          :render="item => `${item.title}-${item.description}`"
          @change="handleChange"
        >
          <y-button slot="footer" size="small" style="float:right;margin: 5px" @click="getMock">reload</y-button>
          <span slot="notFoundContent">没数据</span>
        </y-transfer>
      </div>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          export default {
            data() {
              return {
                mockData: [],
                targetKeys: [],
              };
            },
            mounted() {
              this.getMock();
            },
            methods: {
              getMock() {
                const targetKeys = [];
                const mockData = [];
                for (let i = 0; i {{ str }} 20; i++) {
                  const data = {
                    key: i.toString(),
                    title: `content${i + 1}`,
                    description: `description of content${i + 1}`,
                    chosen: Math.random() * 2 > 1,
                  };
                  if (data.chosen) {
                    targetKeys.push(data.key);
                  }
                  mockData.push(data);
                }
                this.mockData = mockData;
                this.targetKeys = targetKeys;
              },
              handleChange(targetKeys, direction, moveKeys) {
                console.log(targetKeys, direction, moveKeys);
                this.targetKeys = targetKeys;
              },
            },
          };
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  namne: 'basisTransfer',
  data() {
    return {
      mockData: [],
      targetKeys: [],
      str: '<',
      html: `<template>
        <y-transfer
          :data-source="mockData"
          show-search
          :list-style="{
            width: '250px',
            height: '300px',
          }"
          :operations="['to right', 'to left']"
          :target-keys="targetKeys"
          :render="item => \`\${item.title}-\${item.description}\`"
          @change="handleChange"
        >
          <y-button
            slot="footer"
            slot-scope="props"
            size="small"
            style="float:right;margin: 5px"
            @click="getMock"
          >
            reload
          </y-button>
          <span slot="notFoundContent">
            没数据
          </span>
        </y-transfer>
      </template>`,
    };
  },
  mounted() {
    this.getMock();
  },
  methods: {
    getMock() {
      const targetKeys = [];
      const mockData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          targetKeys.push(data.key);
        }
        mockData.push(data);
      }
      this.mockData = mockData;
      this.targetKeys = targetKeys;
    },
    handleChange(targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys);
      this.targetKeys = targetKeys;
    },
  },
};
</script>
