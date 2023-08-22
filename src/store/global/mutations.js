const SHOW_FORM_POPUP = (state) => {
  state.popupVisible = true;
};

const TOGGLE_SIDEBAR = (state) => {
  state.isSideBarToggled = !state.isSideBarToggled;
};

const HIDE_FORM_POPUP = (state) => {
  state.popupVisible = false;
};

const SET_TOAST_VISIBILITY = (state, isVisible) => {
  state.isToastMessageVisible = isVisible;
};

const SET_TOAST_PROPS = (state, props) => {
  state.toastMessageProps = props;
};
export default {
  TOGGLE_SIDEBAR,
  SHOW_FORM_POPUP,
  HIDE_FORM_POPUP,
  SET_TOAST_VISIBILITY,
  SET_TOAST_PROPS,
};
