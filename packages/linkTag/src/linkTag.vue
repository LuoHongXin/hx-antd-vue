<template>
  <div class="y-link-tag">
    <ul class="y-link-tag-list" :class="{ 'y-ul-is-disabled': disabled }">
      <li
        class="y-tag-item"
        v-for="(item, index) in options"
        :key="item.value"
        :class="{ activeClass: item.checked, 'y-tag-is-disabled': item.disabled }"
        @click="changeTags(index)"
      >
        <img src="@src/images/mark.png" alt="" srcset="" class="y-link-tag-mark" v-if="item.checked" />
        <span>
          {{ item.label }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { oneOf } from '../../../src/utils/assist';
export default {
  name: 'YLinkTag',
  model: {
    prop: 'value',
    event: 'update-value',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    type: {
      validator(value) {
        return oneOf(value, ['default', 'custom']);
      },
      default: 'default',
    },
    closable: {
      type: Boolean,
      default: true,
    },
    selectType: {
      //1:多选 2:单选 默认为多选
      type: Number,
      default: 1,
    },
    disabled: {
      // 全局禁用
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      options: this.data,
    };
  },
  watch: {
    value() {
      this.selectDefaultChange();
    },
  },
  computed: {
    myValue() {
      return this.value ? this.value.split(',') : [];
    },
  },
  created() {
    if (this.options.length > 0) {
      this.selectDefaultChange(this.options);
    }
  },
  methods: {
    selectDefaultChange() {
      // 拿到父组件传入的value值
      // this.myValue.forEach((v) => {
      for (let i = 0; i < this.options.length; i++) {
        // 拿到value值做对比
        var obj = this.options[i];
        if (this.myValue.includes(this.options[i].value)) {
          obj.checked = true;
        } else {
          obj.checked = false;
        }
        this.$set(this.options, i, obj);
      }
      // });
    },
    // 数组每一项加个checked属性记录一下就行了，点击时候把index传过去修改数据
    changeTags(index) {
      // 切换选中状态
      const type = this.selectType;
      // 全局禁用
      if (this.disabled) {
        return;
      }
      // data disabled 禁用
      const objN = this.options[index];
      if (objN.disabled) {
        return;
      }

      if (type === 1) {
        // 多选
        const obj = this.options[index];
        obj.checked = !obj.checked;
        this.$set(this.options, index, obj);
        let valueString = '';
        if (this.options[index].checked === true) {
          // 点击选中
          this.myValue.push(this.options[index].value);
          valueString = this.myValue.join(',');
          this.$emit('update-value', valueString);
          return;
        }
        // 去掉选中
        const id = this.options[index].value;
        const indexId = this.myValue.indexOf(id);
        this.myValue.splice(indexId, 1);
        valueString = this.myValue.join(',');
        if (this.myValue.length === 0) {
          valueString = '';
        }
        this.$emit('update-value', valueString);
      }
      if (type === 2) {
        // 单选
        // 点击先将checked置为false
        for (let i = 0; i < this.options.length; i++) {
          const obj = this.options[i];
          obj.checked = false;
          this.$set(this.options, i, obj);
        }
        // 选中的颜色高亮
        const obj = this.options[index];
        obj.checked = true;
        this.$set(this.options, index, obj);
        const valueString = this.options[index].value;
        this.$emit('update-value', valueString);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import '~/src/styles/components/linkTag.less';
</style>
