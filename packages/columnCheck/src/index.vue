<template>
  <div class="y-column-check">
    <y-button :icon="icon" @click="visible = true"></y-button>
    <y-drawer class="y-column-check-drawer" :title="$wci18n.t('wh.columnCheck.title')" :visible="visible" @close="cancel">
      <div class="y-column-check-content">
        <div class="y-column-check-content-list left">
          <dir class="title">{{ $wci18n.t('wh.columnCheck.selectedColumn') }} （{{ selectedList.length }}）</dir>
          <div class="list">
            <draggable
              :group="{ name: 'checkSelectItems' }"
              draggable=".y-column-check-select-item-drag"
              :sort="true"
              v-model="selectedList"
            >
              <YColumnCheckSelectItem
                v-for="item in selectedList"
                :disabled="item.disabled"
                :key="item.value"
                :value="item.value"
                @close="cancelSelect"
                :title="item.text || item.value"
              />
            </draggable>
          </div>
        </div>
        <div class="y-column-check-content-list right">
          <dir class="title">{{ $wci18n.t('wh.columnCheck.allColumn') }} （{{ checkList.length }}）</dir>
          <div class="list">
            <y-checkbox
              v-for="item in checkList"
              @change="checkChange(item.value)"
              :checked="isCheck(item.value)"
              :disabled="item.disabled"
              :key="item.value"
            >
              {{ item.text || item.value }}
            </y-checkbox>
          </div>
        </div>
      </div>
      <div slot="footer" style="text-align:right">
        <y-button @click="cancel"> {{ $wci18n.t('wh.columnCheck.cancel') }} </y-button>
        <y-button @click="reset"> {{ $wci18n.t('wh.columnCheck.reset') }} </y-button>
        <y-button type="primary" @click="confirm">
          {{ $wci18n.t('wh.columnCheck.confirm') }}
        </y-button>
      </div>
    </y-drawer>
  </div>
</template>
<script>
import YColumnCheckSelectItem from './yColumnCheckSelectItem';
import draggable from 'vuedraggable';
export default {
  name: 'YColumnCheck',
  components: {
    YColumnCheckSelectItem,
    draggable,
  },
  computed: {
    // 已选列
    selectedList: {
      get({ checkList, checkval }) {
        const arr = [];
        const leftArr = []; // 左固定
        const rightArr = []; // 右固定
        checkval.forEach(str => {
          for (let index = 0; index < checkList.length; index++) {
            const item = checkList[index];
            if (item.value === str) {
              if (item.fixed === 'left' || item.fixed === true) {
                leftArr.push(item);
              } else if (item.fixed === 'right') {
                rightArr.push(item);
              } else {
                arr.push(item);
              }
              break;
            }
          }
        });
        return [...leftArr, ...arr, ...rightArr];
      },
      set(val) {
        this.checkval = val.map(i => i.value);
      },
    },
  },
  data() {
    return {
      visible: false,
      checkval: this.checkvalue,
    };
  },
  props: {
    // 选中的值及其顺序
    checkvalue: {
      type: Array,
      default: function() {
        return [];
      },
    },
    // 按钮图标
    icon: {
      type: String,
      default: function() {
        return 'setting';
      },
    },
    // 全部可选数据，基本不变
    checkList: {
      type: Array,
      default: function() {
        return [
          // {
          //   text: '', // 选项名
          //   value: key, // 必传
          //   disabled: Boolean, // 是否禁用
          // },
        ];
      },
    },
  },
  watch: {
    checkvalue(val) {
      this.checkval = val; // 保证和传入的值同步
    },
  },
  created() {
    this.leftArr = []; // 左固定
    this.rightArr = []; // 右固定
    this.checkList.forEach(item => {
      if (item.fixed === 'left' || item.fixed === true) {
        this.leftArr.push(item);
      } else if (item.fixed === 'right') {
        this.rightArr.push(item);
      }
    });
  },
  methods: {
    // 删除已选列中的数据，取消已选
    cancelSelect(val) {
      this.checkval = this.checkval.filter(i => i !== val);
    },
    // 判断是否选中
    isCheck(val) {
      return this.checkval.includes(val);
    },
    checkChange(val) {
      // 已别选中则取消选中
      if (this.isCheck(val)) {
        this.cancelSelect(val);
      } else {
        let checkval = [...this.checkval];
        let rightArr = [...this.rightArr];
        if (this.leftArr.includes(val)) {
          // 左固定列排在第一个
          checkval = [val, ...checkval];
        } else if (rightArr.includes(val) || rightArr.length === 0) {
          // 右固定列或没有右固定则放最后
          checkval = [...checkval, val];
        } else {
          // 有右固定且自己不是任何固定列则放最后右固定的前一个
          checkval = [...checkval.slice(0, -rightArr.length), val, ...checkval.slice(-rightArr.length)];
        }
        this.checkval = checkval;
      }
    },
    // 取消
    cancel() {
      this.checkval = this.checkvalue;
      this.visible = false;
    },
    // 重置
    reset() {
      this.$emit('reset');
      this.visible = false;
    },
    // 确定
    confirm() {
      this.$emit('confirm', this.checkval);
      this.visible = false;
    },
  },
};
</script>
