const opepFormPopup = ({ commit }) => {
  commit("SHOW_FORM_POPUP");
};

const closeFormPopup = ({ commit }) => {
  commit("HIDE_FORM_POPUP");
};

export default {
  opepFormPopup,
  closeFormPopup,
};
