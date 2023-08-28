const setEditMode = (context, mode) => {
  context.commit("SET_EDIT_MODE", mode);
};

const setCurrentRelative = (context, relative) => {
  context.commit("SET_CURRENT_RELATIVE", relative);
};

const setListRelative = (context, relatives) => {
  context.commit("SET_LIST_RELATIVE", relatives);
};

const deleteRelative = (context, relativeId) => {
  context.commit("DELETE_RELATIVE", relativeId);
};

export default {
  setEditMode,
  setCurrentRelative,
  setListRelative,
  deleteRelative,
};
