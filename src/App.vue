<template>
  <div id="app">
    <v-background v-show="isShowBackground" @hideSlidbai="hideSlidbai"></v-background>
    <v-loading v-show="isShowLoading"></v-loading>
    <v-sidebar v-show="isShowSlidbar"></v-sidebar>
    <v-head @openSliderbar="openSliderbar" :title="headTitle"></v-head>
    <keep-alive>
      <router-view :list="list"></router-view>
    </keep-alive>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import background from 'base/backgroun'
  import sidebar from 'components/sidebar/sidebar'
  import head from 'base/head'
  import footer from 'base/footer'
  import loading from 'base/loading'
  import axios from 'axios'
  import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      list: []
    }
  },
  computed:{
    ...mapGetters([
      'isShowLoading',
      'headTitle',
      'isShowSlidbar',
      'isShowBackground',
      'user'
    ])
  },
  created() {
    axios.get('../data.json', {}).then((response) => {
      this.list = response.data.data
      setTimeout(()=>{
        this.setisShowLoading(false)
      },400)
    })
  },
  methods: {
    openSliderbar() {
      this.setisShowSliderbar(true)
      this.setisShowBackground(true)
    },
    hideSlidbai() {
      this.setisShowSliderbar(false)
      this.setisShowBackground(false)
    },
    ...mapMutations({
      setisShowLoading: 'SET_ISSHOW_LOADING',
      setisShowSliderbar: 'SET_ISSHOW_SLIDBAR',
      setisShowBackground:'SET_ISSHOW_BACKGROUND'
    })
  },
  mounted() {
  },
  components: {
    "v-head": head,
    "v-footer": footer,
    'v-loading': loading,
    'v-sidebar': sidebar,
    'v-background': background
  },
  watch:{
    $route(){
//      this.setisShowLoading(true)
//      setTimeout(() => {
//        this.setisShowLoading(false)
//      }, 400)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../static/reset.css"
  @font-face {
    font-family: 'icon';  /* project id 172436 */
    src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot');
    src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_w71lovnj7adobt9.woff') format('woff'),
      url('//at.alicdn.com/t/font_w71lovnj7adobt9.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_w71lovnj7adobt9.svg#iconfont') format('svg');
  }
  .icon {
    font-family:"icon" !important;
    font-size:18px;
    font-style:normal;
    color: #ffffff;
  }
  #app
    height: 100%
</style>
