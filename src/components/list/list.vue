<template>
  <div class="list">
    <div class="title">
      <div class="left">
        <i class="icon">&#xe678;</i>
        <span>热门活动</span>
      </div>
      <div class="right">
        <i class="icon fr">&#xe7a7;</i>
      </div>
    </div>
    <div class="content">
      <div class="wrapper" v-for="item in list" @click.stop="seachDetail(item)">
        <a href="javascrip:;" class="detail">
          <div class="img-detail">
            <img v-lazy="item.travelPic" alt="" width="100%" height="100%">
            <span class="type-money">免费</span>
            <span class="registrat-status">{{item.joinNum}}人报名</span>
            <span class="registrat-user">正在报名</span>
          </div>
          <div class="describe">
            <div class="travel-name">
              <div class="name">{{item.title}}</div>
              <div class="click">
                <i class="icon">&#xe62a;</i>
                <span>{{item.clicks}}</span>
              </div>
            </div>
            <div class="travel-describe">
              <div class="text">{{item.releaseUsername}}</div>
              <div class="time">{{item.cantJoinTime.iso}}</div>
            </div>
          </div>
        </a>
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
    },
    methods: {
      seachDetail(item) {
          this.$emit('seachDetail', item)
      }
    },
    mounted() {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .list
    .title
      display: flex
      height: 2rem
      line-height: 2rem
      border-bottom: 1px solid #f1f1f1
      .left, .right
        flex: 1
      .left
        text-align: left
        padding-left: 0.3rem
        i
          color: #f14343
        span
          font-size: 0.3rem
      .right
        text-align: right
        padding-right: 0.3rem
        i
          color: #555
    .content
      margin-top: 0.3rem
      .wrapper
        width: 98%
        margin: 0 auto
        margin-bottom: 0.3rem
        .detail
          display: block
          width: 100%
          height: 100%
          border-bottom: 1px solid #f1f1f1
          .img-detail
            position: relative
            width: 100%
            height: 0
            padding-top: 45%
            img
              position absolute
              left 0
              top 0
              width: 100%
              height: 100%
            span
              position: absolute
              font-size: 0.3rem
              padding: 0.3rem 0.4rem
              color: #fff
              &.type-money
                left: 0.5rem
                top: 1rem
                border-radius: 20%
                background: rgba(4, 255, 4, .48)
              &.registrat-status
                right: 0
                top: 1rem
                border-radius: 10px 0 0 10px
                background: rgba(0, 0, 0, .37);
              &.registrat-user
                bottom: 1rem
                left: 0.5rem
                background: rgba(0, 125, 255, .48)

          .describe
            padding: 0.6rem 0.6rem
            .travel-name, .travel-describe
              display: flex
              font-size: 0.7rem
            .travel-name
              margin-bottom: 0.3rem
              .name
                flex: 1
                font-size: 0.8rem
                color: #000
              .click
                flex: 1
                text-align: right
                i
                  color: #7e8c8d
                  font-size: 0.5rem
            .travel-describe
              .text
                width: 2rem
                font-size: 0.5rem
                color: #007aff
              .time
                flex: 1
                text-align: right
</style>
