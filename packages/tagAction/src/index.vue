<template>
  <div>
    <y-tag v-for="(i, index) in tagData" :key="i" :closable="index !== 0" @close="() => handleClose(i)"> {{ i }} </y-tag>
    <y-input
      ref="input"
      v-if="inputVisible"
      type="text"
      size="small"
      class="dashTagInput"
      :style="{ width: '78px' }"
      :value="inputValue"
      @change="handleInputChange"
      @blur="handleInputConfirm"
      @keyup.enter="handleInputConfirm"
    />
    <y-tag class="dashTag" v-else @click="showInput"> <a-icon type="plus" /> 添加标签 </y-tag>
  </div>
</template>
<script>
export default {
  name: 'YTagAction',
  model: {
    prop: 'tagData',
    event: 'update-tagData',
  },
  props: {
    tagData: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data() {
    return {
      inputVisible: false,
      inputValue: '',
    };
  },
  methods: {
    handleClose(removedTag) {
      const tagData = this.tagData.filter(tag => tag !== removedTag);
      this.$emit('update-tagData', tagData);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(function() {
        this.$refs.input.$el.focus();
      });
    },
    handleInputChange(e) {
      this.inputValue = e.target.value;
    },
    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.tagData;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      this.$emit('update-tagData', tags);
      Object.assign(this, {
        inputVisible: false,
        inputValue: '',
      });
    },
  },
};
</script>
