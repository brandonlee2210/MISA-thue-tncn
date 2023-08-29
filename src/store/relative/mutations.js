import { EDIT_MODE } from "@/helpers/enums";

const SET_EDIT_MODE = (state, mode) => {
  state.editMode = mode;
};

const SET_CURRENT_RELATIVE = (state, relativeId) => {
  state.relative = state.listRelatives.find(
    (relative) => relative.RelativeInformationID === relativeId
  );
};

const SET_LIST_RELATIVE = (state, relatives) => {
  state.listRelatives = relatives;
};

const DELETE_RELATIVE = (state, relativeId) => {
  console.log(relativeId);
  state.listRelatives = state.listRelatives.map((relative) => {
    if (relative.RelativeInformationID === relativeId) {
      relative.EditMode = EDIT_MODE.DELETE;
    }
    return relative;
  });
};

export default {
  SET_EDIT_MODE,
  SET_CURRENT_RELATIVE,
  SET_LIST_RELATIVE,
  DELETE_RELATIVE,
};
