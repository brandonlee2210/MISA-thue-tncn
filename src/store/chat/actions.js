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

export default {
  getMessages,
};
