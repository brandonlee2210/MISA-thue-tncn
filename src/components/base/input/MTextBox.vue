<template>
  <div class="form-group-item-container" :class="{ view: !canTextBoxEdit }">
    <label :for="id" class="item__label" :class="{ view: !canTextBoxEdit }">
      {{ label
      }}<span v-if="isRequired && canTextBoxEdit" class="text-lg-error">*</span>
    </label>
    <div class="item__input">
      <DxTextBox
        :value="value"
        :placeholder="placeholder"
        :isValid="isValid"
        :validationError="validationError"
        :show-clear-button="true"
        :onInput="handleInput"
        :ref="textBoxRef"
        :input-attr="{ id }"
        @change="validate"
        @focusOut="validate"
        :max-length="maxLength"
        :readOnly="isReadOnly"
        v-if="canTextBoxEdit"
      />

      <div v-if="!canTextBoxEdit" class="misa-info-binding">
        <span class="text-lg-body-1">{{ value || "-" }}</span>
      </div>

      <div v-if="!isValid && canTextBoxEdit" class="error-message">
        {{ validationError }}
      </div>
    </div>
  </div>
</template>

<script>
import { DxTextBox } from "devextreme-vue";
import { mapState } from "vuex";
import { POPUP_FORM_MODE } from "@/helpers/enums";

const textBoxRef = "texBoxRef";

export default {
  name: "MTextBox",
  components: {
    DxTextBox,
  },
  data() {
    return {
      validationResult: {
        isValid: true,
        message: "",
      },
      textBoxRef,
      POPUP_FORM_MODE,
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
    // Danh sách các validation rule
    validationRules: {
      type: Array,
      default: () => [],
    },
    // Giá trị của input
    value: {
      type: [String, Number, null],
      default: "",
    },
    isReadOnly: {
      type: Boolean,
      default: false,
    },
    customEmptyErrMsg: {
      type: String,
      default: "",
    },
    maxLength: {
      type: Number,
      default: 255,
    },
    id: {
      type: String,
    },
  },
  computed: {
    // Kết quả validate
    isValid() {
      return this.validationResult.isValid;
    },
    validationError() {
      return this.validationResult.message;
    },
    hasErrors() {
      return !this.isValid && this.validationError !== "";
    },
    canTextBoxEdit() {
      return (
        this.formMode !== "view" || this.popupFormMode == POPUP_FORM_MODE.DIRECT
      );
    },
    ...mapState("employee", ["formMode"]),
    ...mapState("relative", ["popupFormMode"]),
  },
  methods: {
    /**
     * Xử lý sự kiện nhập vào input
     * @param {Event} event
     * @author dgbao (19/08/2023)
     */
    handleInput(event) {
      const newValue = event.event.target.value;
      this.$emit("input", newValue);
    },
    /**
     * Validate dữ liệu
     * @author dgbao (19/08/2023)
     */
    validate() {
      // Nếu có required và value = "" thì báo lỗi
      if (this.isRequired && this.value === "") {
        this.validationResult.isValid = false;
        this.validationResult.message =
          this.customEmptyErrMsg || `${this.label} không được để trống`;
      } else {
        // Kiểm tra qua tất cả các validation rule truyền từ component cha xuống
        for (const rule of this.validationRules) {
          const ruleResult = rule(this.value);
          if (!ruleResult.isValid) {
            this.validationResult.isValid = false;
            this.validationResult.message = ruleResult.message;
            // Nếu có 1 lỗi thì thoát khỏi vòng lặp
            return;
          }
        }
        // Nếu không có lỗi thì trả về kết quả là true
        this.validationResult.isValid = true;
        this.validationResult.message = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group-item-container {
  display: flex;
  margin-bottom: 16px;
  align-items: unset;
  justify-content: space-between;

  .item__label {
    width: 200px;
    margin-right: 16px;
    margin-top: 10px;
    cursor: default;

    height: 36px;

    &.view {
      margin-top: 0px !important;
      display: flex;
      align-items: center;
    }
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

  .misa-info-binding {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #e9ebee;

    font-weight: 500 !important;
    font-size: 14px !important;
    color: #454545 !important;
    line-height: 21px !important;
    cursor: default;
    letter-spacing: unset !important;

    .text-lg-body-1 {
      height: 21px;
      width: 100%;
    }
  }

  .dx-state-focused {
  }
}
</style>
