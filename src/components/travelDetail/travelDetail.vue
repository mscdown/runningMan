<template>
  <transition name="travelDetail">
    <div class="travel-detail" v-if="item.releaseUserId">
      <v-state :statu="statu" v-show="isShowStatu"></v-state>
      <v-confrim v-show="isShowConfrim" @cancel="cancel" @sure="sure"></v-confrim>
      <div @click="goback" class="back" v-show="imgType">
        <i class="icon">&#xe622;</i>
      </div>
      <div v-show="!imgType" class="head" style="position: relative;width: 100%;height: 2.66rem;background: #76d49b">
        <div @click="goback" class="back" style="padding: 0.5rem;top: 0.2rem;">
          <i class="icon" style="color:#fff">&#xe622;</i>
        </div>
      </div>
      <div class="img" v-show="imgType">
        <img :src="'../'+item.travelPic" alt="">
      </div>
      <div class="title">
        <div class="name"><span class="name-title">{{item.title}}</span></div>
        <div>
          <span class="desc">{{item.releaseUsername}}</span>
          <span class="time">| {{item.beginTime.iso}}</span>
        </div>
      </div>
      <div class="trave-details">
        <div class="list">
          <div class="time-title">
            <i class="icon">&#xe615;</i>
            <span>活动时间：</span>
          </div>
          <div class="time-details">
            <p>开始时间:{{item.beginTime.iso}}</p>
            <p>结束时间:{{item.endTime.iso}}</p>
          </div>
        </div>
        <div class="list">
          <div class="time-title">
            <i class="icon">&#xe615;</i>
            <span>报名截止时间：</span>
          </div>
          <div class="time-details">
            <p>{{item.beginTime.iso}}</p>
          </div>
        </div>
        <div class="list">
          <div class="time-title">
            <i class="icon">&#xe600;</i>
            <span>活动地址：</span>
          </div>
          <div class="time-details">
            <p>{{item.destination}}</p>
          </div>
        </div>
        <div class="list">
          <div class="time-title">
            <i class="icon">&#xe694;</i>
            <span class="red">是否收费：免费</span>
          </div>
        </div>
        <div class="list">
          <div class="time-title">
            <i class="icon">&#xe601;</i>
            <span>发布人：{{item.releaseUsername}}</span>
          </div>
        </div>
      </div>
      <div class="sign" @click="goSign">
        <div class="icon">
          <i class="icon">&#xe678;</i>
        </div>
        <div class="sign-up">
          <span>去报名</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import vConfrim from 'base/confrim'
  import { mapGetters, mapMutations } from 'vuex'
  import vState from 'base/state'
  export default {
    props: {
      item: {
        type: Object,
        default: {}
      },
      imgType: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        statu: ''
      }
    },
    created() {
      this._refresh()
    },
    computed: {
      ...mapGetters([
        'isShowConfrim',
        'isShowStatu'
      ])
    },
    methods: {
      goback() {
        this.$router.back()
      },
      _refresh() {
        if (!this.item.releaseUserId) {
          this.$router.back()
        }
      },
      sure() {
        this.setConfrim(false)
        this.statu = '报名成功'
        this.setisShowStatu(true)
        setTimeout(() => {
          this.setisShowStatu(false)
        }, 1000)
      },
      cancel() {
        this.setConfrim(false)
      },
      goSign() {
        this.setConfrim(true)
      },
      ...mapMutations({
        setConfrim: 'SET_ISSHOW_CONFRIM',
        setisShowStatu: 'SET_ISSHOW_STATU'
      })
    },
    components: {
      vConfrim,
      vState
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .travelDetail-enter-active, .travelDetail-leave-active
    transition: all 0.3s

  .travelDetail-enter, .travelDetail-leave-to
    transform: translate3d(100%, 0, 0)

  .travel-detail
    position: fixed
    left: 0rem
    top: 0rem
    width: 100%
    height: 100%
    background: #f5f5f5
    color: #b9b9b9
    z-index 20
    .back
      position: absolute
      padding: 1rem
      top: 0.2rem
      z-index: 1
      i
        color: #000
        font-size: 1.5rem
    .img
      position: relative
      width: 100%
      height: 0
      padding-top: 50%
      img
        position: absolute
        left: 0rem
        top: 0rem
        width: 100%
        height: 100%
    .title
      background: #fff
      padding: 0.5rem
      .name-title
        color: #000
      div
        padding-bottom: 0.3rem
        .desc
          color: #06f
        .time
          font-size: 0.3rem
    .trave-details
      background: #fff
      margin-top: 0.5rem
      .list
        padding: 0.5rem
        border-bottom: 1px solid #f1f1f1
        .time-title
          padding: 0 0 0.3rem 0.3rem
          font-size: 0.8rem
          i
            color: #999
            vertical-align: middle
          span
            vertical-align: middle
            &.red
              color: red
      .time-details
        padding-left: 1rem
        font-size: 0.8rem
        p
          padding-bottom: 0.3rem
    .sign
      position absolute
      padding 1rem
      text-align center
      border-radius 50%
      right 1rem
      bottom 1rem
      background #76d49b
      .sign-up
        color #fff
</style>
