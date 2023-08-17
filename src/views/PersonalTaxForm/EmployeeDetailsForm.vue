<template>
  <div>
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
