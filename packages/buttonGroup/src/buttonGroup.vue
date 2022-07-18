<template>
  <div :class="`y-action-button-group ${reversed ? 'reversed' : ''}`">
    <template v-if="activeButtonList.length <= moreBtnNum">
      <div class="y-act-btn" v-for="item in activeButtonList" :key="item.text">
        <y-tips-button
          :placement="(item.tips && item.tips.placement) || 'topLeft'"
          :tooltip="boolean(item.tips)"
          :title="(item.tips && item.tips.text) || item.tips"
        >
          <y-button
            :disabled="item.disable"
            :type="item.type || 'default'"
            :icon="item.icon || null"
            @click="
              () => {
                if (item.click) {
                  item.click();
                }
              }
            "
            >{{ item.text }}</y-button
          >
        </y-tips-button>
        <!-- <span v-if="index + 1 !== activeButtonList.length" class="spacing"></span> -->
      </div>
    </template>
    <!-- 出现更多 -->
    <template v-else>
      <div class="y-act-btn" v-for="(item, index) in activeButtonList.slice(0, moreBtnNum - 1)" :key="item.text">
        <y-tips-button
          :placement="(item.tips && item.tips.placement) || 'topLeft'"
          :tooltip="boolean(item.tips)"
          :title="(item.tips && item.tips.text) || item.tips"
        >
          <y-button
            :disabled="item.disable"
            :icon="item.icon || null"
            :type="item.type || 'default'"
            @click="
              () => {
                if (item.click) {
                  item.click();
                }
              }
            "
            >{{ item.text }}</y-button
          >
        </y-tips-button>
        <y-dropdown v-if="omitType === 'ellipsis' && index === 0" :trigger="moreBtnTrigger" :getPopupContainer="getPopupContainer">
          <y-button type="default">
            <a-icon type="more" />
          </y-button>
          <slot v-if="$scopedSlots.dropdown" name="dropdown" :menuData="activeButtonList.slice(moreBtnNum - 1, 99)" slot="overlay" />
          <y-menu v-else slot="overlay">
            <y-menu-item
              v-for="item in activeButtonList.slice(moreBtnNum - 1, 99)"
              @click="
                () => {
                  if (item.click && !item.disable) {
                    item.click();
                  }
                }
              "
              :disabled="item.disable"
              :key="item.text"
            >
              <y-tooltip :placement="item.tips.placement || 'top'" v-if="item.tips">
                <template slot="title">
                  <span>{{ item.tips.text || item.tips }}</span>
                </template>
                <span>{{ item.text }}</span>
              </y-tooltip>
              <span v-else>{{ item.text }}</span>
            </y-menu-item>
          </y-menu>
        </y-dropdown>
        <!-- <span v-if="index + 1 !== activeButtonList.length" class="spacing"></span> -->
      </div>
      <y-dropdown v-if="omitType === 'default'" :trigger="moreBtnTrigger" :getPopupContainer="getPopupContainer">
        <y-button type="default">
          {{ moreText }}
          <a-icon type="down" />
        </y-button>
        <slot v-if="$scopedSlots.dropdown" name="dropdown" :menuData="activeButtonList.slice(moreBtnNum - 1, 99)" slot="overlay" />
        <y-menu v-else slot="overlay">
          <y-menu-item
            v-for="item in activeButtonList.slice(moreBtnNum - 1, 99)"
            @click="
              () => {
                if (item.click && !item.disable) {
                  item.click();
                }
              }
            "
            :disabled="item.disable"
            :key="item.text"
          >
            <a-tooltip :placement="item.tips.placement || 'top'" v-if="item.tips">
              <template slot="title">
                <span>{{ item.tips.text || item.tips }}</span>
              </template>
              <span>{{ item.text }}</span>
            </a-tooltip>
            <span v-else>{{ item.text }}</span>
          </y-menu-item>
        </y-menu>
      </y-dropdown>
    </template>
  </div>
</template>

<script>
export default {
  name: 'YButtonGroup',
  props: {
    // 更多按钮的省略类型
    omitType: {
      type: String,
      default: 'default', //default ellipsis
    },
    moreText: {
      type: String,
      default: function() {
        return '更多';
      },
    },
    reversed: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    // 所有按钮
    buttonList: {
      type: Array,
      default: function() {
        return [
          // {
          //     text:"", // 按钮文字
          //     click:()=>{}, // 按钮点击事件
          //     disabled:Boolean, // 是否禁用
          //     show:Boolean, // 按钮的显示隐藏
          //     icon:"down", // 图标
          //     type:"primary", // 按钮类型
          // }
        ];
      },
    },
    // 显示几个就用更多
    moreBtnNum: {
      type: Number,
      default: function() {
        return 4;
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
        return item.show || item.show === undefined;
      });
      return arr;
    },
  },
  methods: {
    getPopupContainer: triggerNode => {
      return triggerNode || document.body;
    },
    boolean(str) {
      return Boolean(str);
    },
  },
};
</script>

<style lang="less">
.y-action-button-group {
  display: flex;
  align-items: center;
  .y-act-btn {
    margin-right: 8px;
    .ant-dropdown-trigger {
      margin-right: 8px;
      padding: 0 8px;
      float: left;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &.reversed {
    flex-direction: row-reverse;
    .y-act-btn {
      margin-right: 0;
      margin-left: 8px;
      .ant-dropdown-trigger {
        margin-right: 0;
        margin-left: 8px;
        float: right;
      }
      &:last-child {
        margin-left: 0;
      }
    }
  }
  //   .spacing {
  //     width: 0px;
  //     margin: 0 4px;
  //     display: inline-block;
  //   }
}
</style>
