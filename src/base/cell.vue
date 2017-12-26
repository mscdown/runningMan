<template>
  <div class="cell">
      <div class="cell-wrapper" v-for="item in list">
        <div class="cell-left">
          <img :src="item.iconUrl" alt="">
          <span class="text">{{item.text}}</span>
        </div>
        <div class="cell-right">
          <img  src="../assets/images/more.png" class="more" alt="">
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      list: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cell
    background #fff
    margin-top 0.3rem
    font-size 0.8rem
    line-height 2.5rem
    .cell-wrapper
      display flex
      padding-bottom 0.3rem
      border-bottom: 1px solid #f5f5f5;
      .cell-left
        flex 1
        padding-left 0.5rem
        img
          width 1.2rem
          height 1.2rem
          vertical-align middle
        span
          vertical-align middle
      .cell-right
        text-align right
        padding-right 0.5rem
        flex 1
        img
          vertical-align middle
          width 1.2rem
          height 1.2rem
</style>
