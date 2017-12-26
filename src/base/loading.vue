<template>
  <div class="loading">
    <div class="background"></div>
    <img src="../assets/images/loading-02.gif" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped="">
  .loading
    width: 100%
    height: 100%
    position: absolute
    left: 0
    top: 0
    background: rgba(0,0,0,.7)
    z-index: 25
    img
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
</style>
