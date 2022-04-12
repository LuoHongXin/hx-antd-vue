<template>
  <div style="padding-bottom: 30px">
    <h3 class="fun-title"></h3>
    <a-table :pagination="pagination" :row-key="(record, index) => index" :columns="columns" :data-source="data">
      <template slot="example" slot-scope="example, record">
        <div v-if="type === 'spacing'">
          <span
            :style="{ display: 'inline-block', width: '1px', height: '30px', backgroundColor: '#000', marginRight: record.value }"
          ></span>
          <span :style="{ display: 'inline-block', width: '1px', height: '30px', backgroundColor: '#000' }"></span>
        </div>
        <div v-else-if="type === 'shadow'">
          <div :style="{ width: '30px', height: '30px', border: '1px solid #fff' }" :class="record.variable"></div>
        </div>
        <div v-else-if="type === 'radius'">
          <div :style="{ width: '30px', height: '30px', border: '1px solid #000', borderRadius: record.value }"></div>
        </div>
        <div v-else-if="type === 'height'">
          <div :style="{ width: '30px', height: record.value, border: '1px solid #000' }"></div>
        </div>
        <div v-else-if="type === 'min-width' || type === 'form-width'">
          <div :style="{ width: record.value, height: '30px', border: '1px solid #000' }"></div>
        </div>
        <div v-else-if="type.includes('border')">
          <div v-if="type.includes('color')" :style="{ width: '30px', height: '10px', border: `1px solid ${record.value}` }"></div>
          <div v-if="type.includes('width')" :style="{ width: '30px', height: '10px', border: `${record.value} solid #000` }"></div>
          <div v-if="type.includes('style')" :style="{ width: '30px', height: '10px', border: `1px ${record.value} #000` }"></div>
        </div>
        <div v-else-if="type.includes('font')">
          <div v-if="type.includes('family')" :style="{ fontFamily: record.value }">罗宏鑫luohongxin123456</div>
          <div v-if="type.includes('size')" :style="{ fontSize: record.value }">罗宏鑫luohongxin123456</div>
          <div v-if="type.includes('weight')" :style="{ fontWeight: record.value }">罗宏鑫luohongxin123456</div>
        </div>
        <div v-else-if="type === 'icon'">
          <y-svg-icon icon-class="eyes_visible" :style="{ fontSize: record.value }" />
        </div>
        <div v-else :style="{ width: '60px', height: '30px', backgroundColor: record.value }"></div>
      </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: '模板',
    dataIndex: 'example',
    scopedSlots: { customRender: 'example' },
    width: 60,
  },
  {
    title: '值',
    dataIndex: 'value',
    width: 80,
  },
  {
    title: '示例',
    dataIndex: 'remark',
    width: 60,
  },
  {
    title: '释义',
    dataIndex: 'meaning',
    width: 60,
  },
];
export default {
  name: 'TemplateTable',
  data() {
    return {
      columns,
      pagination: {
        hideOnSinglePage: true,
        pageSize: 100,
      },
    };
  },
  props: {
    type: {
      type: String,
      default: function() {
        return 'color';
      },
    },
    data: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
};
</script>
