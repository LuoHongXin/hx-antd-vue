<template>
  <a-config-provider>
    <template #renderEmpty>
      <slot v-if="$slots.emptyScene" name="emptyScene"></slot>
      <y-empty :scene="emptyScene" v-else></y-empty>
    </template>
    <div
      style="display:flex"
      @click="
        e => {
          e.preventDefault();
          this.selectOpen = !this.selectOpen;
        }
      "
      :selectOpen="selectOpen"
      class="y-search-select"
      :class="widthSizeClass"
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
        :getPopupContainer="getPopupContainer"
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
          <a-divider v-if="footer" style="margin: 4px 0;" />
          <div style="padding: 4px 12px 12px;" @click="e => e.preventDefault()">
            <template v-if="footer">
              <slot name="footer" v-if="$slots.footer"></slot>
              <y-button style="width:100%;cursor:pointer" v-else @click="$emit('ok')">
                {{ okText }}
              </y-button>
            </template>
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
    getPopupContainer: {
      type: Function,
      default: triggerNode => triggerNode.parentNode.parentNode || document.body,
    },
    value: {
      type: [String, Number],
    },
    footer: {
      type: Boolean,
      default: true,
    },
    okText: {
      type: [String, Number],
      default: '账号管理',
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
      get({ value }) {
        return value || undefined;
      },
      set(newVal) {
        this.$emit('input', newVal);
      },
    },
    search2: {
      get({ search }) {
        return search;
      },
      set(newVal) {
        this.$emit('update:search', newVal);
      },
    },
    widthSizeClass({ autoWidth, widthSize }) {
      return autoWidth ? '' : `y-form-width-${widthSize}`;
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
