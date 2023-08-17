const MESSAGES_UPDATED = (state, messages) => {
  state.messages = messages;
};

const SET_SELECTED_EMPLOYEES = (state, employees) => {
  state.checkedEmployees = employees;
};

export default {
  MESSAGES_UPDATED,
  SET_SELECTED_EMPLOYEES,
};
