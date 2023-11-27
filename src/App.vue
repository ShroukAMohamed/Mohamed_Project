<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import '@/scss/app.scss'

export default {
  computed: {
    layout() {
      return `layout-${this.$route.meta.layout || 'default'}`
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300&display=swap');
html,
body {
  overflow-x: hidden;
}
body {
  direction: rtl;
  font-family: 'Noto Kufi Arabic', sans-serif;
  margin-top: 10px;
}
</style>
