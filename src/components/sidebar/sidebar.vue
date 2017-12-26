<template>
  <transition name="silder">
    <div class="box">
      <div class="head">
        <div class="no-login" v-show="!login">
          <div class="user">
            <span class="login">请登录</span>
          </div>
          <div class="user-desc">
            <div class="my">
              <i class="icon">&#xe626;</i>
              <span>我参与的</span>
            </div>
            <div class="go-login">
              <i class="icon">&#xe601;</i>
              <span @click="goRegist">去登陆</span>
            </div>
          </div>
        </div>
        <div class="yse-login" v-show="login">
          <div class="user">
            <span class="login">欢迎{{user.name}}</span>
          </div>
          <div class="user-desc">
            <div class="my">
              <i class="icon">&#xe626;</i>
              <span>我参与的</span>
            </div>
            <div class="go-login">
              <i class="icon">&#xe601;</i>
              <span @click="backRegist">退出登陆</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          <i class="icon" style="color: #76D49B; font-size: 20px;">&#xe60a;</i>
          <span>首页</span>
        </div>
        <div class="ul-list">
          <ul>
            <li><span>我的约行</span><span class="open">+</span></li>
            <li><span>我的约跑</span><span class="open">+</span></li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapMutations,mapGetters} from 'vuex'
  export default {
    computed:{
      ...mapGetters([
        'user',
        'login'
      ])
    },
    mounted() {
    },
    methods:{
      goRegist() {
        this.$router.push({path:'/user/login'})
        this._show(false)
      },
      backRegist() {
        this.setLogin(false)
        this._show(false)
      },
      _show(flag) {
        this.setisShowSliderbar(flag)
        this.setisShowBackground(flag)
      },
      ...mapMutations({
        setisShowSliderbar: 'SET_ISSHOW_SLIDBAR',
        setisShowBackground:'SET_ISSHOW_BACKGROUND',
        setUser: 'SET_USER',
        setLogin: 'SET_LOGIN'
      })
    },
    watch: {
      user() {
        console.log(this.user)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .silder-enter-active, .silder-leave-active
    transition: all 0.3s

  .silder-enter, .silder-leave-to
    transform: translate3d(-100%, 0, 0)
  .box
    position: fixed
    width: 80%
    height: 100%
    z-index: 300
    top: 0
    left: 0
    background:#fff
    .head
      padding: 1rem 1rem
      background: #76d49b
      color: #fff
      .user
        margin-bottom: 1.2rem
        span
          font-size: 1.2rem
      .user-desc
        display: flex
        font-size:0.8rem
        .my
          flex: 1
          padding-left: 0.5rem
        .go-login
          flex: 1
          padding-left: 0.5rem
    .wrapper
      padding: 1rem 1rem
      .title
        span
          font-size: 1rem
          color: #76d49b
      .ul-list
        .open
          float: right
        li
          font-size: 0.75rem
          color: #7e8c8d
          margin-top: 1.5rem
</style>
