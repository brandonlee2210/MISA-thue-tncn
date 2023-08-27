const setEditMode = (context, mode) => {
  context.commit("SET_EDIT_MODE", mode);
};

const setCurrentRelative = (context, relative) => {
  context.commit("SET_CURRENT_RELATIVE", relative);
};

export default {
  setEditMode,
  setCurrentRelative,
};
