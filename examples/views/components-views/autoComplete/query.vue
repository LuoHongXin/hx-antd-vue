<template>
  <div>
    <com-show>
      <title-detail title="防抖" detail="一定时间内触发默认500ms"></title-detail>
      <div>
        <y-auto-complete v-model="value" placeholder="input here" @onSearch="onSearch">
          <y-input>
            <a-icon slot="prefix" type="search" class="certain-category-icon" />
          </y-input>
        </y-auto-complete>
      </div>
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text='`<div>
        <y-auto-complete
          v-model="value"
          placeholder="input here"
          @onSearch="onSearch"
        >
          <y-input>
            <a-icon slot="prefix" type="search" class="certain-category-icon" />
          </y-input>
        </y-auto-complete>
      </div>`'>
        </code>
      </pre>
      <pre class="line-numbers">
        <code class="language-javascript">
          export default {
            data() {
              return {
                value: '',
              };
            },
            watch: {
              value(val) {
                console.log('value', val);
              },
            },
            methods: {
              apiPromise() {
                return new Promise((reslove, reject) => {
                  this.$YMessage.loading('拼命加载中');
                  this.requestIng = false;
                  setTimeout(() => {
                    let random = Math.random();
                    let readyState = 'fulfill';
                    if (random {{f}} 0.4) readyState = 'reject';
                    if (readyState === 'fulfill') {
                      reslove({ code: 200, message: "加载成功" });
                    } else {
                      reject({ code: 500, message: "加载失败" });
                    }
                  }, 1000);
                });
              },
              onSearch(searchText) {
                if (!this.requestIng) return;
                this.apiPromise()
                  .then(res => {
                    this.$YMessage.success(res.message);
                    console.log('success:', searchText);
                    this.requestIng = true;
                  })
                  .catch(err => {
                    this.$YMessage.error(err.message);
                    console.log('error:', searchText);
                    this.requestIng = true;
                  });
              },
            },
          };
        </code>
      </pre>
    </com-show>
    <api-table :data="tableDataFn" title="auto-complete 事件 "></api-table>
  </div>
</template>

<script>
export default {
  name: 'myQuery',
  data() {
    return {
      value: '',
      f: '<',
      tableDataFn: [
        { params: 'change', explain: '选中 option，或 input 的 value 变化时，调用此函数', type: 'function(value)' },
        { params: 'blur', explain: '失去焦点时的回调', type: 'function()' },
        { params: 'focus', explain: '获得焦点时的回调', type: 'function()' },
        { params: 'search', explain: '搜索补全项的时候调用', type: 'function(value)' },
        { params: 'onSearch', explain: '搜索补全项的时候调用(做了防抖操作)', type: 'function(value)' },
        { params: 'select', explain: '被选中时调用，参数为选中项的 value 值', type: 'function(value, option)' },
        { params: 'dropdownVisibleChange', explain: '展开下拉菜单的回调', type: 'function(open)' },
      ],
    };
  },
  watch: {
    value(val) {
      console.log('value', val);
    },
  },
  methods: {
    apiPromise() {
      return new Promise((reslove, reject) => {
        this.$YMessage.loading('拼命加载中');
        setTimeout(() => {
          let random = Math.random();
          let readyState = 'fulfill';
          if (random < 0.4) readyState = 'reject';
          if (readyState === 'fulfill') {
            this.$message.destroy();
            reslove({ code: 200, message: '加载成功' });
          } else {
            this.$message.destroy();
            reject({ code: 500, message: '加载失败' });
          }
        }, 1000);
      });
    },
    onSearch(searchText) {
      this.apiPromise()
        .then(res => {
          this.$YMessage.success(res.message);
          console.log('success:', searchText);
        })
        .catch(err => {
          this.$YMessage.error(err.message);
          console.log('error:', searchText);
        });
    },
  },
};
</script>
