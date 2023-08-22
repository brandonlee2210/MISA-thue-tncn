const openFormPopup = ({ commit }) => {
  commit("SHOW_FORM_POPUP");
};

const toggleSidebar = ({ commit }) => {
  commit("TOGGLE_SIDEBAR");
};

const closeFormPopup = ({ commit }) => {
  commit("HIDE_FORM_POPUP");
};

const showToast = ({ commit }, { props }) => {
  commit("SET_TOAST_PROPS", props);
  commit("SET_TOAST_VISIBILITY", true);
};

const hideToast = ({ commit }) => {
  commit("SET_TOAST_VISIBILITY", false);
};

export default {
  toggleSidebar,
  openFormPopup,
  closeFormPopup,
  showToast,
  hideToast,
};
