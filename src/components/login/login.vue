<template>
  <div class="login">
    <v-state v-show="isShowStatu" :statu="statu"></v-state>
    <div class="back" @click="back"><i class="icon">&#xe622;</i></div>
    <div class="title"><span>生命在于运动，欢迎登录！</span></div>
    <div class="animate" style="height: 12rem;width:100%">
      <div class="img">
        <img src="../../assets/images/logo.png" alt="">
      </div>
    </div>
    <div class="form">
      <form action="">
        <div class="user-name">
          <i class="icon">&#xe601;</i>
          <input type="text" placeholder="用户名" ref="username" style="">
        </div>
        <div class="password">
          <i class="icon">&#xe687;</i>
          <input type="password" placeholder="密码" ref="userpassword">
        </div>
        <div class="buttom" @click="login">登录</div>
      </form>
    </div>
    <div class="to-regist">
      <router-link to="/user/regist" tag="a">没有账号？先注册</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import vState from 'base/state.vue'
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        statu: ''
      }
    },
    computed:{
      ...mapGetters([
        'isShowStatu',
        'user'
      ])
    },
    methods: {
      back() {
        this.$router.back()
      },
      login() {
        if(this.$refs.username.value === ""){
          this.statu = '用户名不能为空'
          this._showStatu()
          return
        }
        if(this.$refs.userpassword.value === ""){
          this.statu = '密码不能为空'
          this._showStatu()
          return
        }
        let name = this.$refs.username.value
        let passwore = this.$refs.userpassword.value
        if(name != this.user.name || passwore != this.user.password){
          this.statu = '账号或密码错误'
          this._showStatu()
          return
        }else{
          this.statu = '登陆成功'
          this._showStatu()
          setTimeout(() => {
            this.setLogin(true)
            this.$router.push({path:'/home'})
          },1000)
        }
      },
      _showStatu() {
        this.setIsShowState(true)
        setTimeout(() => {
          this.setIsShowState(false)
        }, 1000)
      },
      ...mapMutations({
        setUser:'SET_USER',
        setIsShowState: 'SET_ISSHOW_STATU',
        setLogin: 'SET_LOGIN'
      })
    },
    components: {
      vState
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login
    position: fixed
    left: 0
    top: 0
    background: #323542
    z-index: 20
    width: 100%
    height: 100%
    .back
      position: absolute
      left: 1rem
      top: 1rem
      i
        font-size: 1.3rem
    .title
      width: 100%
      height: 5rem
      line-height: 9rem
      text-align: center
      font-size: 1rem
      color: #fff
    .animate
      position relative
      .img
        position absolute
        left 50%
        transform translate(-50%)
        width 5.5rem
        height 6.2rem
        margin-top 5rem
        animation: c 3s ease-in-out infinite
        img
          width 100%
          height 100%
    .form
      form
        text-align: center
        padding: 0 2rem
        input
          background: transparent
        div
          border-radius: 0.2rem
          margin-bottom: 1rem
          background-color: hsla(0, 0%, 100%, .1);
          input
            width: 85%
            height: 2.2rem
            border: none
            outline: none
            color: #fff
          &.buttom
            padding: 0.7rem 0
            color: #fff
            background: #0bd38a
    .to-regist
      padding: 0 2rem
      text-align: right

  @keyframes c{
    0% {
      top: -2.33333rem;
    }
    50% {
      top: -.4rem;
    }
    100% {
      top: -2.33333rem;
    }
  }
</style>
