import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  popupVisible: false,
  isToastMessageVisible: true,
  toastMessageProps: "",
  isSideBarToggled: false,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
