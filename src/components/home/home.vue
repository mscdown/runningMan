<template>
  <div class="home" ref="scroll">
    <div class="scroll">
      <slider>
        <div v-for="item in list">
          <a href=""><img :src="item.travelPic" alt=""></a>
        </div>
      </slider>
      <v-tab></v-tab>
      <div class="list-content">
        <travel-list :list="list" @seachDetail="seachDetail"></travel-list>
      </div>
    </div>
    <router-view :item="travel"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import slider from 'base/slider'
  import vTab from 'components/tab/tab'
  import travelList from 'components/list/list'
  import BScroll from 'better-scroll'
  export default {
    props: {
      list: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        travel: {}
      }
    },
    methods: {
      seachDetail(item) {
        this.travel = item
        this.$router.push({path:`/home/${item.releaseUserId}`})
      }
    },
    created() {
      setTimeout(() => {
         this.scroll = new BScroll(this.$refs.scroll, {
          click: true
        })
      },80)
      window.addEventListener('resize', () => {
        this.scroll.refresh()
      })
    },
    components: {
      slider,
      vTab,
      travelList
    },
    watch:{
      $route(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home
    position: absolute;
    width: 100%;
    left: 0;
    top: 2.66rem;
    bottom: 3rem;
    /*z-index: 20*/
    .list-content
      margin-top: 0.4rem
      background: #fff
</style>
