<template>
<router-view></router-view>
</template>
<script>
  export default {
    methods: {
      changeRTL () {
        this.$vuetify.rtl = true
      }
    }
  }
</script>
<style scoped>
@import url('/node_modules/vuetify/dist/vuetify.min.css');
</style>
