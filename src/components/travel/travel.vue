<template>
  <div class="travel" ref="travel">
    <div class="wrapper">
      <travel-list :list="list" @seachDetail="seachDetail"></travel-list>
    </div>
    <router-view :item="travel"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import travelList from 'components/list/list'
  import travelDetail from 'components/travelDetail/travelDetail'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        travel: {},
        show: false
      }
    },
    props: {
      list: {
        type: Array,
        default: []
      }
    },
    created() {
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.travel, {
          click: true
        })
      }, 20)
    },
    methods: {
      seachDetail(item) {
        this.travel = item
//        this.show = true
        this.$router.push({path:`/travel/${item.releaseUserId}`})
      }
    },
    components: {
      travelList,
      travelDetail
    },
    watch:{
      $route(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped="">
  .travel
    width 100%
    position absolute
    left 0rem
    top 2.66rem
    bottom 3rem
    background #fff
    /*overflow hidden*/
    /*z-index 20*/
</style>
