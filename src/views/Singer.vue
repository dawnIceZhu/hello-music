<template>
  <div class="singer">
    歌手
  </div>
</template>

<script>
import {getSingerList} from "@/api/singer"
import {ERR_OK} from "@/assets/js/config"

export default {
  name: "Singer",
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingerList()
  },
  methods: {

    _getSingerList() {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singers = res.data.list
          console.log(this.singers)
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.singer
  position fixed
  top 88px
  bottom 0
  width: 100%
</style>
