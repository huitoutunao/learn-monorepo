<template>
  <button class="openx-button" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { hello } from '@learn-monorepo/shared'

const props = withDefaults(defineProps<{
  text?: string;
}>(), {
  text: 'World',
})

function clickHandler() {
  hello(props.text)
}
</script>

<style lang="scss" scoped></style>
