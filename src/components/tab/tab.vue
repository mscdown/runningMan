<template>
  <div class="tab-nav">
    <div class="title">
      <div class="titel-line">
        <img src="src/assets/images/homepage_man.png" alt="">
        年轻哪能不放纵，约起来
      </div>
    </div>
    <div class="nav">
      <ul>
        <li class="nav-li">
          <router-link to="/user/regist" tag="a">
            <i class="icon">&#xe733;</i>
            <span>新用户</span>
          </router-link>
        </li>
        <li class="nav-li">
          <a href="">
            <i class="icon">&#xe666;</i>
            <span>我的约跑</span>
          </a>
        </li>
        <li class="nav-li">
          <router-link to="/travel" tag="a">
            <i class="icon">&#xe6bd;</i>
            <span>我的约行</span>
          </router-link>
        </li>
        <li class="nav-li">
          <a href="">
            <i class="icon">&#xe63c;</i>
            <span>去发布</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab-nav
      width: 100%
      background: #fff
      .titel-line
        width: 10rem
        margin: 0 auto
        font-size: 0.5rem
        line-height: 1.2rem
        padding: 0.2rem 0 0.2rem 0
        border-bottom: 1px solid #000
        img
          height: 1.3rem
          vertical-align: bottom
    .nav
      margin-top: 0.3rem
      padding-bottom: 0.3rem
      ul
        display: flex
        .nav-li
          flex: 1
          a
            display: block
            width: 100%
            height: 100%
            text-align: center
            .icon
              display: block
              margin: 0 auto
              font-size: 1.3rem
              line-height: 3rem
              width: 3rem
              height:3rem
              border-radius: 45%
              background: #2ad2c9
            span
              font-size: 0.4rem
              color: #7e8c8d



</style>
