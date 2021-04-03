<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot/>
    </div>
    <div class="dots"></div>
  </div>
</template>

<script>
import BScoll from 'better-scroll'
import {addClass} from "@/assets/js/dom"

export default {
  name: "slider",
  data() {
    return {}
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
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
      this._setSliderWidth() // 横向滚动，要先设置slider的宽度
      this._initSlider() // 初始化BetterScroll在mounted里，等dom已经ready的时候
    }, 20) // 浏览器的刷新通常是17毫秒一次，初始化操作放在20毫秒后，比较保险
  },
  methods: {
    _setSliderWidth() {
      // 获得sliderGroup的children有多少个元素
      this.children = this.$refs.sliderGroup.children
      // 设置sliderGroup的宽度
      let width = 0
      // 轮播图宽度是一屏，slider的宽度=所有轮播图宽度之和
      let sliderWidth = this.$refs.slider.clientWidth
      // 计算整个轮播的视口应该有多宽
      for (let i = 0; i < this.children.length; i++) {
        // 获取到每一个子元素
        let child = this.children[i]
        // 轮播组件设置样式，让img自适应宽度
        addClass(child, 'slider-item')

        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }

      // 因为bscroll为了无缝切换轮播，会前后克隆一个child，所以我们算宽度要加两个，如果是窗口改变，那么不增加，之前已经加过了
      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider() {
      this.slider = new BScoll(this.$refs.slider, {
        scrollX: true, // 允许横向滚动
        scrollY: false, // 不允许纵向滚动
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
        click: true
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/stylus/variable.styl"

.slider
  min-height: 1px

  .slider-group
    position: relative
    overflow: hidden
    white-space: nowrap

    .slider-item
      float: left
      box-sizing: border-box
      overflow: hidden
      text-align: center

      a
        display: block
        width: 100%
        overflow: hidden
        text-decoration: none

      img
        display: block
        width: 100%

  .dots
    position: absolute
    right: 0
    left: 0
    bottom: 12px
    text-align: center
    font-size: 0

    .dot
      display: inline-block
      margin: 0 4px
      width: 8px
      height: 8px
      border-radius: 50%
      background: $color-text-l

      &.active
        width: 20px
        border-radius: 5px
        background: $color-text-ll
</style>
