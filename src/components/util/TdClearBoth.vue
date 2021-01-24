<template>
  <div
    v-if="resolution === null || type === null"
    class="clear-both"
  ></div>
  <div
    v-else-if="resolution === 'mobile'"
  >
    <div
      v-if="type === 'block'"
      class="clear-both mobile-visible-block-only"
    ></div>
    <div
      v-else-if="type === 'inline'"
      class="clear-both mobile-visible-inline-only"
    ></div>
    <div
      v-else
      class="clear-both mobile-visible-block-only"
    ></div>
  </div>
  <div
    v-else-if="resolution === 'desktop'"
  >
    <div
      v-if="type === 'block'"
      class="clear-both desktop-visible-block-only"
    ></div>
    <div
      v-else-if="type === 'inline'"
      class="clear-both desktop-visible-inline-only"
    ></div>
    <div
      v-else
      class="clear-both desktop-visible-block-only"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'HhrClearBoth',
  props: {
    resolution: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  },
}
</script>
