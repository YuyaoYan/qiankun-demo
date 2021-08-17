const store = {
  state: {
    msg: "",
    sendMsg: "",
    inpageMsg: ""
  },
  mutations: {
    updateMsg(state, newState) {
      state.msg = newState.msg;
    },
    updateSendMsg(state, newState) {
      state.sendMsg = newState.sendMsg;
    },
    updateInpageMsg(state, newState) {
      state.inpageMsg = newState.inpageMsg;
    }
  },
  actions: {},
  modules: {}
};
export default store;
