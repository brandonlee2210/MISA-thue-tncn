<template>
  <div class="form-container">
    <FormHeader
      @save="handleSave"
      @save-and-add-new="handleSaveAndAddNew"
      :title="formTitle"
    />
    <FormDetails ref="formDetailsRef" />
  </div>
</template>

<script>
import FormHeader from "./FormHeader.vue";
import FormDetails from "./FormDetails.vue";

import { mapState } from "vuex";
const formDetailsRef = "formDetailsRef";

export default {
  components: {
    FormHeader,
    FormDetails,
  },
  computed: {
    ...mapState("employee", ["formMode"]),
    ...mapState("global", ["isLoading"]),
    formTitle() {
      switch (this.formMode) {
        case "add":
          return "Thêm nguời nộp thuế";
        case "edit":
          return "Chỉnh sửa người nộp thuế";
        default:
          return "";
      }
    },
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
    /**
     * Xử lý sự kiện lưu và thêm mới
     * */
    handleSaveAndAddNew() {
      this.$refs[formDetailsRef].saveFormAndAddNew();
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
  position: relative;
  overflow: auto;
}
</style>
