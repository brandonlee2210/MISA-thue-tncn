const SET_EDIT_MODE = (state, mode) => {
  state.editMode = mode;
};

const SET_CURRENT_RELATIVE = (state, relative) => {
  state.relative = relative;
};

export default {
  SET_EDIT_MODE,
  SET_CURRENT_RELATIVE,
};
