const SHOW_FORM_POPUP = (state) => {
  state.popupVisible = true;
};

const HIDE_FORM_POPUP = (state) => {
  state.popupVisible = false;
};

export default {
  SHOW_FORM_POPUP,
  HIDE_FORM_POPUP,
};
