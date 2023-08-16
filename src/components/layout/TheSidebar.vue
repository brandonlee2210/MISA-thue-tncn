<template>
  <div class="sidebar">
    <div class="sidebar__bottom">
      <router-link
        v-for="menuItem in resource.VN.Sidebar"
        :to="menuItem.link"
        class="menu-item"
        v-bind:key="menuItem.title"
      >
        <div class="menu-item__icon icon" :class="menuItem.icon"></div>
        <div class="menu-item__text">{{ menuItem.title }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import MISAResource from "@/helpers/resource";

export default {
  data() {
    return {
      resource: MISAResource,
    };
  },
};
</script>
<style>
@import "./TheSidebar.scss";

a {
  text-decoration: none;
}
</style>
