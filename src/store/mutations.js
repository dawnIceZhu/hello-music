import * as types from './mutation-types'

const mututions = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mututions
