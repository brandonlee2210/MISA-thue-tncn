<template>
  <div class="container">
    <MToastMessage :title="'hello'" :type="'success'" />
    <MOverlay :show="isNotificationVisible">
      <MDialog />
    </MOverlay>

    <TheHeader />
    <div class="content-container">
      <TheSidebar />
      <ThePage />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheSidebar from "@/components/layout/TheSidebar.vue";
import ThePage from "@/components/layout/ThePage.vue";
import MToastMessage from "@/components/base/toast-message/MToastMessage.vue";
import MDialog from "./components/base/dialog/MDialog.vue";
import MOverlay from "./components/MOverlay.vue";

import { mapState } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapState("global", ["isNotificationVisible"]),
  },
  components: {
    TheHeader,
    TheSidebar,
    ThePage,
    MToastMessage,
    MOverlay,

    // eslint-disable-next-line vue/no-unused-components
    MDialog,
  },
};
</script>

<style lang="scss">
@import url(./style/style.scss);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;
}

.content-container {
  flex: 1;
  display: flex;
  height: calc(100vh - 56px);
  background-color: #f5f6fa;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
