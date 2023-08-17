<template>
  <div class="tax-view">
    <ListHeader></ListHeader>
    <ListPerson></ListPerson>
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
