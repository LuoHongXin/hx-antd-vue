<template>
  <a-config-provider>
    <template #renderEmpty>
      <slot v-if="$slots.emptyScene" name="emptyScene"></slot>
      <y-empty :scene="emptyScene" v-else></y-empty>
    </template>
    <div
      style="display:flex"
      @mousedown="
        e => {
          e.preventDefault();
          this.selectOpen = !this.selectOpen;
        }
      "
      :selectOpen="selectOpen"
      class="y-search-select"
      :class="widthSizeClass"
      :placeholder="placeholder"
    >
      <a-select
        class="y-select"
        v-model="val"
        autoWidth
        :placeholder="placeholder"
        :dropdownStyle="dropdownStyle"
        :dropdownClassName="dropdownClassName"
        :dropdownMatchSelectWidth="false"
        :open="selectOpen"
        @select="selectOpen = false"
        @blur="blurEvent"
      >
        <div slot="dropdownRender" slot-scope="menu">
          <div style="width:100%;padding:12px;">
            <y-input
              autoWidth
              ref="inputSearch"
              id="inputSearch"
              :placeholder="inputPlaceholder"
              @blur="blurEvent"
              @change="$emit('input-change', $event)"
              v-model="search2"
            >
              <a-icon slot="prefix" type="search" />
            </y-input>
          </div>
          <v-nodes :vnodes="menu" />
          <a-divider style="margin: 4px 0;" />
          <div style="padding: 4px 12px 12px;" @mousedown="e => e.preventDefault()">
            <slot name="footer" v-if="$slots.footer"></slot>
            <y-button style="width:100%;cursor:pointer" v-else>
              账号管理
            </y-button>
          </div>
        </div>
        <slot></slot>
      </a-select>
    </div>
  </a-config-provider>
</template>

<script>
export default {
  name: 'YSearchSelect',
  props: {
    value: {
      type: [String, Number],
    },
    search: {
      type: [String, Number],
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    inputPlaceholder: {
      type: String,
      default: undefined,
    },
    emptyScene: {
      type: String,
      default: 'noAccess',
    },
    widthSize: {
      type: String,
      default: 's',
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
    dropdownStyle: {
      type: Object,
      default: () => {},
    },
    dropdownClassName: String,
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  data() {
    return {
      selectOpen: false,
    };
  },
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },
  computed: {
    val: {
      get() {
        const { value } = this;
        return value;
      },
      set(newVal) {
        this.$emit('input', newVal);
      },
    },
    search2: {
      get() {
        const { search } = this;
        return search;
      },
      set(newVal) {
        this.$emit('update:search', newVal);
      },
    },
    widthSizeClass() {
      return this.autoWidth ? '' : `y-form-width-${this.widthSize}`;
    },
  },
  methods: {
    blurEvent() {
      let f = 'inputSearch';
      // 获取当前焦点 id
      if (document.activeElement.id !== f) {
        this.selectOpen = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.y-search-select {
  display: flex;
  justify-content: center;
  align-items: center;
  .y-select {
    flex: 1;
  }
  ::v-deep {
    .ant-select-open .ant-select-arrow-icon svg {
      transform: initial;
    }
  }
  &[selectOpen] {
    ::v-deep {
      .ant-select-arrow .ant-select-arrow-icon svg {
        transform: rotateZ(180deg);
      }
    }
  }
}
</style>
