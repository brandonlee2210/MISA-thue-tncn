const openFormPopup = ({ commit }) => {
  commit("SHOW_FORM_POPUP");
};

const toggleSidebar = ({ commit }) => {
  commit("TOGGLE_SIDEBAR");
};

const closeFormPopup = ({ commit }) => {
  commit("HIDE_FORM_POPUP");
};

const showToast = ({ commit }, props) => {
  commit("SET_TOAST_PROPS", props);
  commit("SET_TOAST_VISIBILITY", true);
};

const hideToast = ({ commit }) => {
  commit("SET_TOAST_VISIBILITY", false);
};

const showFilter = ({ commit }) => {
  commit("SHOW_FILTER");
};

const hideFilter = ({ commit }) => {
  commit("HIDE_FILTER");
};

const showLoading = ({ commit }) => {
  commit("SHOW_LOADING");
};

const hideLoading = ({ commit }) => {
  setTimeout(() => {
    commit("HIDE_LOADING");
  }, 500);
};

const showNotification = ({ commit }, props) => {
  commit("SHOW_NOTIFICATION", props);
};

const hideNotification = ({ commit }) => {
  commit("HIDE_NOTIFICATION");
};

export default {
  toggleSidebar,
  openFormPopup,
  closeFormPopup,
  showFilter,
  hideFilter,
  showToast,
  hideToast,
  showLoading,
  hideLoading,
  showNotification,
  hideNotification,
};
