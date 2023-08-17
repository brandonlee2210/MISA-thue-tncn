import { fetchMessages } from "@/api";

const getMessages = (context) => {
  fetchMessages
    .then((response) => {
      context.commit("MESSAGES_UPDATED", response);
    })
    .catch((error) => {
      console.error(error);
    });
};

const setSelectedEmployees = (context, employees) => {
  console.log("addCheckedEmployees", employees);
  context.commit("SET_SELECTED_EMPLOYEES", employees);
};
export default {
  getMessages,
  setSelectedEmployees,
};
