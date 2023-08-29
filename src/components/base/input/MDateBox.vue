<template>
  <div class="form-group-item-container" :class="{ view: formMode == 'view' }">
    <label :for="id" class="item__label">
      {{ label }}<span v-if="isRequired" class="text-lg-error">*</span>
    </label>
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
        :input-attr="{ id }"
        invalidDateMessage=""
        dateOutOfRangeMessage=""
        @valueChanged="handleInput"
        @focusOut="validate"
        :max="max"
        :min="min"
        v-if="formMode != 'view'"
      />

      <div v-if="formMode == 'view'" class="misa-info-binding">
        <span class="text-lg-body-1">{{ formatValue || "-" }}</span>
      </div>

      <div v-if="!isValid && formMode != 'view'" class="error-message">
        {{ validationError }}
      </div>
    </div>
  </div>
</template>

<script>
import { DxDateBox } from "devextreme-vue";
import { mapState } from "vuex";
import { formatDate } from "@/helpers/utils";

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
    };
  },
  watch: {
    value() {},
  },
  props: {
    value: {
      type: [String, Date],
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
    customEmptyErrMsg: {
      type: String,
      default: "",
    },
    max: {
      type: Date,
      default: null,
    },
    min: {
      type: Date,
      default: null,
    },
    id: {
      type: String,
    },
  },
  computed: {
    ...mapState("employee", ["formMode"]),
    formatValue() {
      return formatDate(this.value);
    },
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
     * @author dgbao (19/08/2023)
     */
    handleInput(event) {
      const newValue = event.value;

      this.validate();
      this.$emit("input", newValue);
    },
    /**
     * Validate dữ liệu
     * @author dgbao (19/08/2023)
     */
    validate() {
      if (this.isRequired && !this.value) {
        // Kiểm tra trống
        this.validationResult.isValid = false;
        this.validationResult.message =
          this.customEmptyErrMsg || `${this.label} không được để trống`;
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
      if (value < new Date() || value == "" || value == null) {
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
