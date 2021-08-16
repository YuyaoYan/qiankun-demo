const store = {
  state: {
    msg: "",
    sendMsg: ""
  },
  mutations: {
    updateMsg(state, newState) {
      state.msg = newState.msg;
    },
    updateSendMsg(state, newState) {
      state.sendMsg = newState.sendMsg;
    }
  },
  actions: {},
  modules: {}
};
export default store;
