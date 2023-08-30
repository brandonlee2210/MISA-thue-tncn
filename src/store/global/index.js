import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  popupVisible: false,
  isToastMessageVisible: false,

  // Đinh nghĩa các props của toast message
  toastMessageProps: {
    title: "",
    type: "",
  },
  isSideBarToggled: false,
  isFilterVisible: false,
  isNotificationVisible: false,

  // Đinh nghĩa các props của notification
  notificationProps: {
    title: "",
    message: "",
    type: "",
    rawHtml: "",
    idToDelete: "",
    onConfirm: null,
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
