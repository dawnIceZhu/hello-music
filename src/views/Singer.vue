<template>
  <div class="singer">
    歌手
  </div>
</template>

<script>
import {getSingerList} from "@/api/singer"
import {ERR_OK} from "@/api/config"
import Singer from "@/assets/js/singer"

const HOT_NAME = '热门'
const HOS_SINGER_LET = 10

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
          console.log(this._normalizeSinger(this.singers))
        }
      })
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOS_SINGER_LET) {
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name,
          }))
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name,
        }))
      })
      console.log(map)
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
