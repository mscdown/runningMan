<template>
  <div class="sport">
    <div class="title">
        <div class="left">
          <i class="icon">&#xe678;</i>
          <span>最新热门</span>
        </div>
        <div class="right">
          <i class="icon fr">&#xe7a7;</i>
        </div>
      </div>
    <div class="list-sport" v-for="item in sportList" @click="seachDetail(item)">
      <div class="desc-title">{{item.title}}</div>
      <div class="desc">{{item.content}}</div>
      <div class="releaseUsername">
        <span class="name">{{item.releaseUsername}}</span>
        <span class="time">{{item.beginTime.iso}}</span>
      </div>
      <div class="sport-state">
        <span>正在报名</span>
      </div>
    </div>
    <router-view :item="itemDetail" :imgType="false"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  export default {
    data() {
      return {
        sportList: [],
        itemDetail:{}
      }
    },
    created() {
      axios.get('../sportList.json', {}).then((response) => {
        this.sportList = response.data.data
      })
    },
    methods:{
      seachDetail(item) {
        this.itemDetail = item
        this.$router.push({
          path: `/sport/${item.releaseUserId}`
        })
      }
    },
    props: {
      list: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .sport
    width 100%
    position absolute
    left 0rem
    top 2.66rem
    bottom 3rem
    /*z-index 20*/
    /*overflow hidden*/
    .title
      display: flex
      height: 2rem
      line-height: 2rem
      border-bottom: 1px solid #f1f1f1
      margin-top 0.3rem
      background #fff
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
    .list-sport
      position relative
      margin 0.5rem 0 0.5rem 0
      padding 0.5rem
      background #fff
      font-size 0.5rem
      color #999
      div
        padding-bottom 0.3rem
      .desc-title
        font-size 0.8rem
        color #000
      .sport-state
        position: absolute
        right: 0.5rem
        top: 0.5rem
        padding: 0.3rem
        background: rgba(0,125,255,.48)
        color: #fff
</style>
