<template>
  <div class="state">
    <div class="text">
      <span>{{statu}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      statu:{
        type:String,
        default:'注册成功'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .state
    position: fixed
    left: 50%
    top: 50%
    transform: translate(-50%,-50%)
    background: rgba(0,0,0,.6)
    border-radius: 2rem
    .text
      margin: 1rem
      span
        color: #fff
</style>
