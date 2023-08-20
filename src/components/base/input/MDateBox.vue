<template>
  <div class="form-group-item-container">
    <div class="item__label">
      {{ label }}<span v-if="isRequired" class="text-lg-error">*</span>
    </div>
    <div class="item__input">
      <DxDateBox
        :value="value"
        :placeholder="placeholder"
        :isValid="isValid"
        :displayFormat="'dd/MM/yyyy'"
        :show-clear-button="true"
        :validationError="validationError"
        :mask="dateMask"
        :mask-rules="dateMaskRules"
        @valueChanged="handleInput"
        @focusOut="validate"
      />

      <div v-if="!isValid" class="error-message">{{ validationError }}</div>
    </div>
  </div>
</template>

<script>
import { DxDateBox } from "devextreme-vue";
export default {
  name: "MyDateBox",
  components: {
    DxDateBox,
  },
  data() {
    return {
      value: null,
      validationResult: {
        isValid: true,
        message: "",
      },
      dateMask: "00/00/0000", // Define the desired format here
      dateMaskRules: {
        0: /[0-9]/,
      },
    };
  },
  props: {
    isRequired: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  computed: {
    isValid() {
      return this.validationResult.isValid;
    },
    validationError() {
      return this.validationResult.message;
    },
    hasErrors() {
      return !this.isValid && this.validationError !== "";
    },
  },
  methods: {
    handleInput(event) {
      const newValue = event.value;
      this.value = newValue;

      this.validate();
      this.$emit("input", newValue);
    },
    validate() {
      if (this.isRequired && !this.value) {
        this.validationResult.isValid = false;
        this.validationResult.message = `${this.label} không được để trống`;
      } else {
        this.validationResult.isValid = true;
        this.validationResult.message = "";
      }
    },
  },
};
</script>

<style lang="scss">
.date-box-with-hover .dx-texteditor-buttons-container {
  opacity: 0;
}

.date-box-with-hover:hover .dx-texteditor-buttons-container {
  opacity: 1;
}
.form-group-item-container {
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;

  .item__label {
    width: 200px;
    margin-right: 16px;
    margin-top: 10px;
  }

  .item__input {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .error-message {
    color: red;
  }

  .text-lg-error {
    margin-left: 3px;
    font-weight: 700 !important;
    font-size: 14px !important;
    color: #e61d1d !important;
    line-height: 19px !important;
    cursor: default;
    letter-spacing: unset !important;
  }
}
</style>
