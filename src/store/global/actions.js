const openFormPopup = ({ commit }) => {
  commit("SHOW_FORM_POPUP");
};

const closeFormPopup = ({ commit }) => {
  commit("HIDE_FORM_POPUP");
};

export default {
  openFormPopup,
  closeFormPopup,
};
