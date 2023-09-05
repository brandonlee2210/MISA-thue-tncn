import { EDIT_MODE } from "@/helpers/enums";

const SET_EDIT_MODE = (state, mode) => {
  state.editMode = mode;
};

const SET_CURRENT_RELATIVE = (state, relativeId) => {
  state.relative = state.listRelatives.find(
    (relative) => relative.RelativeInformationID === relativeId
  );
};

const SET_RELATIVE = (state, relative) => {
  state.relative = relative;
};

const SET_LIST_RELATIVE = (state, relatives) => {
  state.listRelatives = relatives;
};

const DELETE_RELATIVE = (state, relativeId) => {
  state.listRelatives = state.listRelatives.map((relative) => {
    if (relative.RelativeInformationID === relativeId) {
      relative.EditMode = EDIT_MODE.DELETE;
    }
    return relative;
  });
};

const SET_POPUP_FORM_MODE = (state, mode) => {
  state.popupFormMode = mode;
};

export default {
  SET_EDIT_MODE,
  SET_CURRENT_RELATIVE,
  SET_LIST_RELATIVE,
  DELETE_RELATIVE,
  SET_POPUP_FORM_MODE,
  SET_RELATIVE,
};
