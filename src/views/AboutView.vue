<template>
  <div>
    <ChatList :messages="messages" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ChatList from "@/components/ChatList.vue";

export default {
  name: "AboutView",
  components: {
    ChatList,
  },
  computed: {
    ...mapGetters({
      messages: "chat/messages",
    }),
  },
  mounted() {
    this.$store.dispatch("chat/getMessages");
  },
};
</script>

<style>
h1 {
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
  font-weight: 100;
  font-size: 3em;
  letter-spacing: 0.05em;
  color: #4b4b4b;
}
</style>
