<template functional>
  <a-tooltip placement="top">
    <template slot="title">
      <span>{{ props.title }}</span>
    </template>
    <y-button :icon="props.icon" @click="listeners.click"></y-button>
  </a-tooltip>
</template>
