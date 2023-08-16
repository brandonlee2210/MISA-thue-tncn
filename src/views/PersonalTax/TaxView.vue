<template>
  <div>
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
    handleClick() {
      console.log("Button clicked!");
    },
  },
};
</script>
