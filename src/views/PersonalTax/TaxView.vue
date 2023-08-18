<template>
  <div class="tax-view">
    <template v-if="$route.path === '/tax/add'">
      <router-view></router-view>
    </template>
    <template v-else>
      <ListHeader></ListHeader>
      <ListPerson></ListPerson>
    </template>
  </div>
</template>

<script>
import ListHeader from "./ListHeader.vue";
import ListPerson from "./ListPerson.vue";

export default {
  components: {
    ListHeader,
    ListPerson,
  },
  methods: {
    handleClick() {},
  },
};
</script>

<style lang="scss">
.tax-view {
  height: 100%;
}
</style>
