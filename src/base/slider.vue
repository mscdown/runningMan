<template>
  <div class="slider" ref="slider">
    <div class="slider-wrapper" ref="sliderWrapper">
      <slot></slot>
    </div>
    <div class="dots">
      <span v-for="(item,index) in dots" :class="{active : currentPageIndex + 1 == index}" class="dot"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        currentPageIndex: -1,
        dots: []
      }
    },
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      antoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    mounted() {
      setTimeout(() => {
        this._setSliderWidth()
        this._initDots()
        this._initSlider()
        if (this.antoPlay) {
//          this._play()
        }
      }, 80)
      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this._setSliderWidth(true)
        this.slider.refresh()
      })
    },
    methods: {
      _setSliderWidth(isResize) {
        this.children = this.$refs.sliderWrapper.children
        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          child.className += ' slider-item'
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        if (this.loop && !isResize) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderWrapper.style.width = width + 'px'
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: this.loop,
            threshold: 0.3,
            speed: 100
          }
        })
        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          if (this.loop) {
            pageIndex -= 1
          }
          this.currentPageIndex = pageIndex

          if (this.antoPlay) {
            clearTimeout(this.timer)
//            this._play()
          }
        })
      },
      _play() {
        let pageIndex = this.currentPageIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)
        }, this.interval)
      }
    },
    destroyed() {
      clearTimeout(this.timer)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slider
    position: relative
    width: 100%
    height: 9rem
    overflow: hidden
    .slider-wrapper
      height: 100%
      a
        display: block
        width: 100%
        height: 100%
        img
          display: block
          width: 100%
          height: 100%
      .slider-item
        height: 100%
        float: left
    .dots
      position: absolute;
      left: 0;
      bottom: 12px;
      right: 0;
      text-align: center;
      .dot
        display: inline-block
        width: 8px
        height: 8px
        border-radius: 50%
        background: #fff
        margin: 0 4px
        &.active
          background: #76d49b
</style>
