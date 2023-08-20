<template>
  <div class="form-container">
    <FormHeader @save="handleSave" />
    <FormDetails ref="formDetailsRef" />
  </div>
</template>

<script>
import FormHeader from "./FormHeader.vue";
import FormDetails from "./FormDetails.vue";
const formDetailsRef = "formDetailsRef";
export default {
  components: {
    FormHeader,
    FormDetails,
  },
  data() {
    return {
      formDetailsRef,
    };
  },
  methods: {
    /**
     * Xử lý sự kiện lưu
     */
    handleSave() {
      console.log(this.$refs[formDetailsRef].$refs.formComponents);
    },
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
