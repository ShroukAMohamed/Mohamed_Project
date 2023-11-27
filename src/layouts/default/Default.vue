<template>
  <div class="default-page-wrapper">
    <default-nav />
    <slot />
    <default-footer />
  </div>
</template>

<script>
import DefaultFooter from './DefaultFooter.vue'
import DefaultNav from './DefaultNav.vue'

export default {
  components: {
    DefaultNav,
    DefaultFooter
  }
}
</script>

<style lang="scss">
/* Sticky footer */

.default-page-wrapper {
  padding: 5em 0em 0em 0em;
}
</style>
