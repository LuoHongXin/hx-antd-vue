<template>
  <div class="y-table-column-action-button">
    <template v-if="activeButtonList.length <= moreBtnNum">
      <div v-for="(item, index) in activeButtonList" :key="item.text">
        <y-button-action
          :text="item.text"
          :disabled="item.disable"
          @click="
            () => {
              if (item.click) {
                item.click();
              }
            }
          "
        />
        <span v-if="index + 1 !== buttonList.length" class="spacing"></span>
      </div>
    </template>
    <!-- 出现更多 -->
    <template v-else>
      <div v-for="item in activeButtonList.slice(0, moreBtnNum - 1)" :key="item.text">
        <y-button-action
          :text="item.text"
          :disabled="item.disable"
          @click="
            () => {
              if (item.click) {
                item.click();
              }
            }
          "
        />
        <span class="spacing"></span>
      </div>
      <a-dropdown :trigger="moreBtnTrigger">
        <y-button-action text="更多">
          <template slot="slot-r">
            <a-icon type="down" />
          </template>
        </y-button-action>
        <a-menu slot="overlay">
          <a-menu-item v-for="item in activeButtonList.slice(moreBtnNum - 1, 99)" :key="item.text">
            <a
              :disabled="item.disable"
              @click="
                () => {
                  if (item.click) {
                    item.click();
                  }
                }
              "
              >{{ item.text }}</a
            >
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </template>
  </div>
</template>

<script>
export default {
  name: 'YTableActionButton',
  props: {
    // 所有按钮
    buttonList: {
      type: Array,
      default: function() {
        return [
          // {
          //     text:"", // 按钮文字
          //     click:()=>{}, // 按钮点击事件
          //     disabled:Boolean, // 是否禁用
          //     show:Boolean // 按钮的显示隐藏
          // }
        ];
      },
    },
    // 显示几个就用更多
    moreBtnNum: {
      type: Number,
      default: function() {
        return 3;
      },
    },
    // 更多按钮触发事件
    moreBtnTrigger: {
      type: Array,
      default: function() {
        return ['hover'];
      },
    },
  },
  computed: {
    activeButtonList: function() {
      const arr = this.buttonList.filter(item => {
        return item.show;
      });
      return arr;
    },
  },
};
</script>

<style lang="less" scoped>
.y-table-column-action-button {
  display: flex;
  align-items: center;
}
</style>
