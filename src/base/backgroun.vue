<template>
  <div class="rgb-backgroud"  @click="hideSlidbai"></div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      hideSlidbai() {
        this.$emit('hideSlidbai')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rgb-backgroud
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    z-index: 25
    background: rgba(0,0,0,.5);
</style>
