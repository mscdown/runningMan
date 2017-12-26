<template>
  <div class="user" ref="user">
    <div>
      <div class="user-img">
        <div class="user-portrait">
          <img src="src/assets/images/user-img0.jpg" alt="">
          <div class="btn">
            <router-link tag="span" to="/user/login" class="login">登录</router-link>
            <router-link tag="span" to="/user/regist" class="regist">注册</router-link>
          </div>
        </div>
      </div>
      <div class="nav-tab">
        <span class="add">发布</span>
        <span class="sport">约跑</span>
        <span class="travel">约行</span>
      </div>
      <v-cell :list="cellLists1"></v-cell>
      <v-cell :list="cellLists2"></v-cell>
      <v-cell :list="cellLists3"></v-cell>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import vCell from 'base/cell'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        cellLists1: [
          { link: '', iconUrl: 'http://hzzly.net/xyy-vue/images/user-cert.png', text: '学生认证', desc: '', badg: '', more: true },
          { link: 'user/info', iconUrl: 'http://hzzly.net/xyy-vue/images/user-detail.png', text: '我的详情', desc: '', badg: '', more: true },
          { link: 'user/msg', iconUrl: 'http://hzzly.net/xyy-vue/images/user-message.png', text: '消息通知', desc: '', badg: '4', more: true },
        ],
        cellLists2: [
          { link: '', iconUrl: 'http://hzzly.net/xyy-vue/images/user-addfriend.png', text: '邀请好友', desc: '', badg: '', more: true },
          { link: '', iconUrl: 'http://hzzly.net/xyy-vue/images/user-school.png', text: '选择高校', desc: '', badg: '', more: true }
        ],
        cellLists3: [
          { link: 'user/set', iconUrl: 'http://hzzly.net/xyy-vue/images/user-set.png', text: '设置', desc: '', badg: '', more: true },
          { link: '', iconUrl: 'http://hzzly.net/xyy-vue/images/user-call.png', text: '联系客服', desc: '18679168426', badg: '', more: true }
        ],
        pubTotravelNum: 0,
        pubTosportNum: 0
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
        this.scroll = new BScroll(this.$refs.user,{
          click: true
        })
      }, 20)
    },
    components:{
      vCell
    },
    watch:{
      $route(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .user
    position: absolute
    width 100%
    left: 0rem
    top: 2.66rem
    bottom 3rem
    /*z-index 20*/
    color: #7e8c8d
    /*overflow hidden*/
    .user-img
      position: relative
      width 100%
      height 0
      padding-top 45%
      background #76d49b
      .user-portrait
        position: absolute
        left 50%
        top 10%
        transform: translate(-50%)
        width 4.4rem
        height 4.4rem
        border-radius 50%
        border: 2px solid hsla(0,0%,100%,.95);
        img
          width 100%
          height 100%
          border-radius 50%
        .btn
          margin-top 0.5rem
          color: #fff;
          width: 8rem;
          height: 1.8rem;
          line-height: 1.8rem;
          display: flex;
          text-align: center;
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          font-size: 0.8rem;
          span
            border-radius 0.2rem
            flex 1
            &.login
              background #2ad2c9
            &.regist
              background #fff
              color #2ad2c9
    .nav-tab
      padding: 0.5rem 0;
      display: flex;
      background: #fff;
      text-align: center;
      font-size 0.8rem
      span
        flex: 1;
        border-right: 1px solid #89f0eb;
        padding: 0.7rem 0;
        &.travel
          border-right: none
</style>
