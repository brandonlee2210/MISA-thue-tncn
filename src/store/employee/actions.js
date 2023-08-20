const setSelectedEmployees = (context, employees) => {
  console.log("addCheckedEmployees", employees);
  context.commit("SET_SELECTED_EMPLOYEES", employees);
};
export default {
  setSelectedEmployees,
};
