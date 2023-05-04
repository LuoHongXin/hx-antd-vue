<template functional>
  <a-tooltip placement="top">
    <template slot="title">
      <span>{{ props.title }}</span>
    </template>
    <y-button class="y-btn ant-btn-icon-only" v-if="props.icon === 'download'" @click="listeners.click">
      <y-svg-icon icon-class="download" class="anticon" />
    </y-button>
    <y-button class="y-btn ant-btn-icon-only" v-else-if="props.icon === 'height-set'">
      <y-svg-icon icon-class="height-set" class="anticon" />
    </y-button>
    <y-button v-else :icon="props.icon" @click="listeners.click"></y-button>
  </a-tooltip>
</template>
