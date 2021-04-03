/**
 * 歌手列表页api
 */

// import jsonp from '@/assets/js/jsonp'
import {commonParams} from "@/assets/js/config"
import axios from "axios"

export function getSingerList() {
  const url = '/api/SingerList'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
  })
  // return jsonp(url, data, options)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
