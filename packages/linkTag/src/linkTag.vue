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
        <svg
          class="y-link-tag-mark"
          v-if="item.checked"
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <polygon id="path-1" points="20 0 20 20 0 20"></polygon>
          </defs>
          <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="v" transform="translate(-4.000000, -4.000000)">
              <g id="check" transform="translate(4.000000, 4.000000)">
                <mask id="mask-2" fill="white">
                  <use xlink:href="#path-1"></use>
                </mask>
                <use id="三角" fill="currentColor" fill-rule="nonzero" xlink:href="#path-1"></use>
                <g id="编组" mask="url(#mask-2)">
                  <g transform="translate(5.000000, 6.000000)" id="7.图标/通用/正确">
                    <rect id="矩形" fill="#EBEBEB" fill-rule="nonzero" opacity="0" x="0" y="0" width="16" height="16"></rect>
                    <g id="check" transform="translate(3.000000, 4.000000)" fill="#FFFFFF">
                      <path
                        d="M8.57573593,0.875735931 C8.81005051,0.641421356 9.18994949,0.641421356 9.42426407,0.875735931 C9.63254369,1.08401555 9.65568587,1.40732483 9.49369061,1.6411666 L9.42426407,1.72426407 L3.92426407,7.22426407 C3.71598445,7.43254369 3.39267517,7.45568587 3.1588334,7.29369061 L3.07573593,7.22426407 L0.575735931,4.72426407 C0.341421356,4.48994949 0.341421356,4.11005051 0.575735931,3.87573593 C0.784015554,3.66745631 1.10732483,3.64431413 1.3411666,3.80630939 L1.42426407,3.87573593 L3.5,5.951 L8.57573593,0.875735931 Z"
                        id="路径"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <!-- <y-svg-icon icon-class="mark" class="y-link-tag-mark" v-if="item.checked"/> -->
        <!-- <img src="@src/images/mark.png" alt="" srcset="" class="y-link-tag-mark" v-if="item.checked" /> -->
        <slot v-if="item.slot" :name="item.slot" />
        <span v-else>
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
    // closable: {
    //   type: Boolean,
    //   default: true,
    // },
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
    myValue({ value }) {
      return value ? value.split(',') : [];
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
