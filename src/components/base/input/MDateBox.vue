<template>
  <div class="form-group-item-container">
    <div class="item__label">
      {{ label }}<span v-if="isRequired" class="text-lg-error">*</span>
    </div>
    <div class="item__input">
      <DxDateBox
        :value="value"
        :acceptCustomValue="false"
        maxLength="10"
        :placeholder="placeholder"
        :isValid="isValid"
        :displayFormat="'dd/MM/yyyy'"
        :show-clear-button="true"
        :validationError="validationError"
        invalidDateMessage=""
        dateOutOfRangeMessage=""
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
import { locale } from "devextreme/localization";
export default {
  name: "MDateBox",
  components: {
    DxDateBox,
  },
  data() {
    return {
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
    value: {
      type: String,
      default: null,
    },
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
    /**
     * Xử lý sự kiện nhập vào input
     * @param {Event} event
     * Created by: dgbao (19/08/2023)
     */
    handleInput(event) {
      const newValue = event.value;
      console.log("newValue", new Date(newValue));

      this.validate();
      this.$emit("input", newValue);
    },
    /**
     * Validate dữ liệu
     * Created by: dgbao (19/08/2023)
     */
    validate() {
      if (this.isRequired && !this.value) {
        // Kiểm tra trống
        this.validationResult.isValid = false;
        this.validationResult.message = `${this.label} không được để trống`;
      } else if (!this.isValidDate(this.value)) {
        // Kiểm tra đúng định dạng
        this.validationResult.isValid = false;
        this.validationResult.message = `${this.label} không được lớn hơn hiện tại`;
      } else {
        this.validationResult.isValid = true;
        this.validationResult.message = "";
      }
    },
    isValidDate(value) {
      // kiểm tra có nho hơn ngày hiện tại hay không
      value = new Date(value);
      if (value < new Date()) {
        return true;
      }
      return false;
    },
  },
  created() {
    locale("vi");
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
  align-items: unset !important;

  .item__label {
    width: 200px;
    margin-right: 16px;
    margin-top: 10px;
    height: 36px;
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
