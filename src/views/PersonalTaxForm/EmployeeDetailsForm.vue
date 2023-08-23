<template>
  <div class="form-container">
    <FormHeader @save="handleSave" :title="'Thêm người nộp thuế'" />
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
      this.$refs[formDetailsRef].saveForm();
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
