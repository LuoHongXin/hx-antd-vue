<template>
  <div class="y-filter-form">
    <y-filter-form :form="form" :layoutType="layoutType">
      <y-filter-form-item label="表单标题1">
        <y-select default-value="lucy">
          <a-select-option value="jack">
            Jack
          </a-select-option>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
          <a-select-option value="disabled" disabled>
            Disabled
          </a-select-option>
          <a-select-option value="Yiminghe">
            yiminghe
          </a-select-option>
        </y-select>
      </y-filter-form-item>
      <y-filter-form-item label="表单标题11">
        <y-range-picker />
      </y-filter-form-item>
      <y-filter-form-item>
        <span slot="label"
          >表单标题
          <y-tooltip title="提示信息">
            <y-svg-icon icon-class="info" />
          </y-tooltip>
        </span>
        <y-input placeholder="请输入" />
      </y-filter-form-item>
      <y-filter-form-item label="表单标题111">
        <y-input placeholder="请输入" />
      </y-filter-form-item>
      <y-filter-form-item label="表单标题1111">
        <y-input placeholder="请输入" />
      </y-filter-form-item>
      <y-filter-form-item label="表单标题11111">
        <y-input placeholder="请输入" />
      </y-filter-form-item>
      <y-filter-form-item label="表单标题111111">
        <y-input placeholder="请输入" />
      </y-filter-form-item>
      <template slot="btnCol">
        <y-button type="primary" html-type="submit">
          查询
        </y-button>
        <y-button>
          重置
        </y-button>
      </template>
    </y-filter-form>
  </div>
</template>
<script>
export default {
  name: 'filterForm',
  props: {
    layoutType: {
      type: String,
      default: '3col', // 3col 三列布局 1col 单列布局
    },
  },
  data() {
    return {
      form: {
        user: '',
        password: '',
      },
    };
  },
};
</script>
