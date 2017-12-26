<template>
  <div class="footer" ref="footer">
    <router-link v-for="(item, index) in link" tag="div" :to="{path:item.path}" :class="item.class" @click.native="navClick(item,index)">
      <div class="">
        <img class="nav-img" :src="item.src" alt="">
      </div>
      <span class="text-span">{{item.title}}</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        link:[
          {
            path:'/home',
            title: '首页',
            name:'Qu约',
            class:'home',
            src:'../src/assets/images/tab_home.png'
          },
          {
            path:'/sport',
            title: '约跑',
            name:'约跑',
            class:'sport',
            src:'../src/assets/images/tab_running.png'
          },
          {
            path:'/travel',
            title: '约行',
            name:'约行',
            class:'travel',
            src:'../src/assets/images/tab_travel.png'
          },
          {
            path:'/user',
            title: '我的',
            name:'我的',
            class:'user',
            src:'../src/assets/images/tab_user.png'
          }
        ]
      }
    },
    methods: {
      navClick(item, index) {
       this.setTitle(item.name)
      },
      ...mapMutations({
        setTitle:'SET_HEAD_TITLE'
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer
    position: fixed
    width: 100%
    height: 3rem
    display: flex
    left: 0
    bottom: -1px
    background: #fff
    border-top: 1px solid #ccc
    box-shadow: 0 0 2px rgba(0,0,0,.2)
    div
      flex: 1
      text-align: center
      padding-top: 0.2rem
      &.active
        .text-span
          color: #76d49b
      .nav-img
        /*display: block*/
        width: 1.2rem
        height:1.2rem
        margin: 0 auto
      .text-span
        display: block
        height: 1rem
        font-size: 0.75rem
        color:#4d555d
        line-height: 1rem
</style>
