<template>
  <div id="app">
    <m-header/>
    <tab/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src

import MHeader from "@/components/m-header/m-header"
import Tab from "@/components/tab/tab"

export default {
  name: 'Recommend',
  components: {
    Tab,
    MHeader
  }
}
</script>

<style lang="stylus">
@import "assets/stylus/variable.styl"

#app
  color: $color-theme
</style>
