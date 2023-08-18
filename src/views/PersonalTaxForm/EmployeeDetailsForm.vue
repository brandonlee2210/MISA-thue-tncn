<template>
  <div class="form-container">
    <FormHeader />
    <FormDetails />
  </div>
</template>

<script>
import FormHeader from "./FormHeader.vue";
import FormDetails from "./FormDetails.vue";

export default {
  components: {
    FormHeader,
    FormDetails,
  },
};
</script>

<style lang="scss">
.form-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.form-body-container {
  overflow: auto;
}
</style>
