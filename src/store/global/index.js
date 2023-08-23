import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  popupVisible: false,
  isToastMessageVisible: true,
  toastMessageProps: "",
  isSideBarToggled: false,
  isFilterVisible: false,
  isLoading: false,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
