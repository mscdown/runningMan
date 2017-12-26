import * as types from './mutation-types'
const mutations = {
  [types.SET_ISSHOW_LOADING](state, flag){
    state.isShowLoading = flag
  },
  [types.SET_HEAD_TITLE](state, title){
    state.headTitle = title
  },
  [types.SET_ISSHOW_SLIDBAR](state, flag){
    state.isShowSlidbar = flag
  },
  [types.SET_ISSHOW_BACKGROUND](state, flag){
    state.isShowBackground = flag
  },
  [types.SET_ISSHOW_STATU](state, flag){
    state.isShowStatu= flag
  },
  [types.SET_USER](state, array){
    state.user = array
  },
  [types.SET_LOGIN](state, flag){
    state.login = flag
  },
  [types.SET_ISSHOW_CONFRIM](state, flag){
    state.isShowConfrim = flag
  }
}
export default mutations
