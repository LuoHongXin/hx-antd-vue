<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Check all" detail="indeterminate属性控制半选状态" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <div>
        <div :style="{ borderBottom: '1px solid #E9E9E9' }">
          <y-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange">
            Check all
          </y-checkbox>
        </div>
        <br />
        <y-checkbox-group v-model="checkedList" :options="plainOptions" @change="onChange" @select="select" />
      </div>
      <div style="margin-top: 20px;">checkedList： {{ checkedList }}</div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
            const plainOptions = ['Apple', 'Pear', 'Orange'];
            const defaultCheckedList = ['Apple', 'Orange'];
            export default {
                data() {
                    return {
                    checkedList: defaultCheckedList,
                    indeterminate: true,
                    checkAll: false,
                    plainOptions,
                    };
                },
                methods: {
                    onChange(checkedList) {
                        this.indeterminate = !!checkedList.length && checkedList.length {{ t }} plainOptions.length;
                        this.checkAll = checkedList.length === plainOptions.length;
                    },
                    select(e) {
                      console.log(e.target.value);
                    },
                    onCheckAllChange(e) {
                        Object.assign(this, {
                            checkedList: e.target.checked ? plainOptions : [],
                            indeterminate: false,
                            checkAll: e.target.checked,
                        });
                    },
                },
            };
        </code>
    </pre>
  </div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
export default {
  name: 'checkboxAll',
  data() {
    return {
      html: `  <div>
            <div :style="{ borderBottom: '1px solid #E9E9E9' }">
            <y-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange">
                Check all
            </y-checkbox>
            </div>
            <br />
            <y-checkbox-group v-model="checkedList" :options="plainOptions" @change="onChange" @select="select" />
        </div>`,
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      plainOptions,
      t: '<',
    };
  },
  methods: {
    onChange(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    select(e) {
      console.log(e.target.value);
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
  },
};
</script>
