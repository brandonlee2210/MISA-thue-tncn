import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  popupVisible: false,
  isToastMessageVisible: false,
  toastMessageProps: {
    title: "",
    type: "",
  },
  isSideBarToggled: false,
  isFilterVisible: false,
  isNotificationVisible: false,
  notificationProps: {
    title: "",
    message: "",
    type: "",
    rawHtml: "",
    idToDelete: "",
  },
  isLoading: false,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
