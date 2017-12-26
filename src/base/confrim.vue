<template>
  <div class="confrim">
    <div class="confrim-text">
      <p>确认报名？</p>
      <div class="btn">
        <span class="cancel" @click="cancel">取消</span>
        <span class="sure" @click="sure">确认</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      cancel() {
        this.$emit('cancel')
      },
      sure() {
        this.$emit('sure')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .confrim
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    z-index 25
    color #555
    font-size 1rem
    background rgba(0, 0, 0, 0.7);
    .confrim-text
      position absolute
      width 13rem
      height 4rem
      border-radius 0.2rem
      padding 1rem
      left 50%
      top 50%
      transform translate(-50%, -50%)
      background #fff
      .btn
        text-align right
        margin-top 2rem
        span
          font-size 0.9rem
          &.cancel
            margin-right 0.7rem
          &.sure
            color #76d49b
</style>
