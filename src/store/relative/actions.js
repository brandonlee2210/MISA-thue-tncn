const setEditMode = (context, mode) => {
  context.commit("SET_EDIT_MODE", mode);
};

/**
 * Set thông tin người thân hiện tại
 * @param {*} context
 * @param {*} relativeId id của người thân
 * @author baodg (25/08/2023)
 */
const setCurrentRelative = (context, relativeId) => {
  context.commit("SET_CURRENT_RELATIVE", relativeId);
};

/**
 * Set danh sách người thân
 * @param {*} context
 * @param {*} relatives Danh sách người thân
 * @author baodg (25/08/2023)
 */
const setListRelative = (context, relatives) => {
  context.commit("SET_LIST_RELATIVE", relatives);
};

/**
 * Xóa người thân
 * @param {*} context
 * @param {*} relativeId id của người thân
 * @author baodg (25/08/2023)
 */
const deleteRelative = (context, relativeId) => {
  context.commit("DELETE_RELATIVE", relativeId);
};

/**
 *  Set lại popup form mode
 * @param {*} context
 * @param {*} mode
 * @author dgbao (25/08/2023)
 */
const setPopupFormMode = (context, mode) => {
  context.commit("SET_POPUP_FORM_MODE", mode);
};

const setRelative = (context, relative) => {
  context.commit("SET_RELATIVE", relative);
};

export default {
  setEditMode,
  setCurrentRelative,
  setListRelative,
  deleteRelative,
  setPopupFormMode,
  setRelative,
};
