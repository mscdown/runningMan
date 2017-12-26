<template>
  <div class="head">
    <div class="left">
      <span>{{title}}</span>
    </div>
    <div class="right">
      <i class="icon" @click="openSliderbar">&#xe634;</i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      openSliderbar() {
        this.$emit('openSliderbar')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .head
    width: 100%
    height 2.66rem
    background: #76d49b
    display: flex
    position: fixed
    top: 0
    left: 0
    z-index: 10
    .left,.right
      flex: 1
      line-height:2.66rem
      color: #fff
    .left
      text-align: left
      padding-left:1rem
      font-size: 1rem
    .right
      text-align: right
      padding-right:1rem
      font-size: 1.2rem
</style>
