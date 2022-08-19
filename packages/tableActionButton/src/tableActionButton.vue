<template>
  <div class="y-table-column-action-button">
    <template v-if="activeButtonList.length <= moreBtnNum">
      <div v-for="(item, index) in activeButtonList" :key="item.text">
        <a-tooltip :placement="item.tips.placement || 'topLeft'" v-if="item.tips">
          <template slot="title">
            <span>{{ item.tips.text || item.tips }}</span>
          </template>
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
        </a-tooltip>
        <y-button-action
          v-else
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
        <span v-if="index + 1 !== activeButtonList.length" class="spacing"></span>
      </div>
    </template>
    <!-- 出现更多 -->
    <template v-else>
      <div v-for="(item, index) in activeButtonList.slice(0, moreBtnNum - 1)" :key="item.text">
        <a-tooltip :placement="item.tips.placement || 'topLeft'" v-if="item.tips">
          <template slot="title">
            <span>{{ item.tips.text || item.tips }}</span>
          </template>
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
        </a-tooltip>
        <y-button-action
          v-else
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
        <span v-if="index + 1 !== activeButtonList.length" class="spacing"></span>
      </div>
      <y-dropdown :trigger="moreBtnTrigger">
        <y-button-action :text="$wci18n.t('wh.tableActionButton.more')">
          <template slot="slot-r">
            <a-icon type="down" />
          </template>
        </y-button-action>
        <a-menu slot="overlay">
          <a-menu-item
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
          </a-menu-item>
        </a-menu>
      </y-dropdown>
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
    activeButtonList: function({ buttonList }) {
      const arr = buttonList.filter(item => {
        return item.show || item.show === undefined;
      });
      return arr;
    },
  },
};
</script>
