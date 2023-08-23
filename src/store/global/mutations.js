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

const SHOW_FILTER = (state) => {
  state.isFilterVisible = true;
};

const HIDE_FILTER = (state) => {
  state.isFilterVisible = false;
};

const SHOW_LOADING = (state) => {
  state.isLoading = true;
};

const HIDE_LOADING = (state) => {
  state.isLoading = false;
};

export default {
  HIDE_FILTER,
  SHOW_FILTER,
  TOGGLE_SIDEBAR,
  SHOW_FORM_POPUP,
  HIDE_FORM_POPUP,
  SET_TOAST_VISIBILITY,
  SET_TOAST_PROPS,
  SHOW_LOADING,
  HIDE_LOADING,
};
