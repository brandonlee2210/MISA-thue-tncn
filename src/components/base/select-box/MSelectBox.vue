<template>
  <div class="form-group-item-container" :class="{ view: formMode == 'view' }">
    <div class="item__label">
      {{ label
      }}<span v-if="isRequired && formMode != 'view'" class="text-lg-error"
        >*</span
      >
    </div>
    <div class="item__input">
      <dx-select-box
        @focusOut="validate"
        :items="items"
        :displayExpr="displayExpr"
        :valueExpr="valueExpr"
        :value="selectedItem"
        :placeholder="placeholder"
        :searchEnabled="true"
        :searchExpr="['text']"
        :noDataText="'Không có dữ liệu'"
        :readOnly="isReadOnly"
        @valueChanged="handleValueChanged"
        v-if="formMode != 'view'"
      ></dx-select-box>
      <div v-if="!isValid && formMode != 'view'" class="error-message">
        {{ validationError }}
      </div>
      <div v-if="formMode == 'view'" class="misa-info-binding">
        <span class="text-lg-body-1">{{ selectedLabel || "-" }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { DxSelectBox } from "devextreme-vue";

import { mapState } from "vuex";

export default {
  name: "MSelectBox",
  components: {
    DxSelectBox,
  },
  props: {
    items: {
      type: Array,
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      // both type string and number are accepted
      type: [String, Number],
    },
    label: {
      type: String,
      default: "",
    },
    displayExpr: {
      type: String,
      default: "text",
    },
    valueExpr: {
      type: String,
      default: "id",
    },
    validationRules: {
      type: Array,
      default: () => [],
    },
    isReadOnly: {
      type: Boolean,
      default: false,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    customEmptyErrMsg: {
      type: String,
      default: "",
    },
  },
  watch: {
    value: function (newValue) {
      this.selectedItem = newValue;
    },
  },
  data() {
    return {
      selectedItem: this.value,
      validationResult: {
        isValid: true,
        message: "",
      },
    };
  },
  computed: {
    ...mapState("employee", ["formMode"]),
    validationError() {
      return this.validationResult.message;
    },
    isValid() {
      return this.validationResult.isValid;
    },
    selectedLabel() {
      const selectedItem = this.items?.find(
        (item) => item[this.valueExpr] === this.value
      );
      return selectedItem ? selectedItem[this.displayExpr] : "";
    },
  },
  methods: {
    /**
     * Xử lí sự kiện khi giá trị của dropdown thay đổi
     * @param {*} e
     * CreatedBy: dgbao (18/08/2023)
     */

    handleValueChanged(e) {
      this.selectedItem = e.value;
      this.$emit("input", e.value);
    },
    /**
     * Validate dữ liệu
     * Created by: dgbao (19/08/2023)
     */
    validate() {
      // Nếu có required và value = "" thì báo lỗi
      if (this.isRequired && !this.selectedItem) {
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

<style lang="scss">
.form-group-item-container {
  display: flex;
  justify-content: space-between;
  .item__label {
    width: 200px;
    margin-right: 16px;
  }

  &.view {
    .item__label {
      margin-top: 0px;
      display: flex;
      align-items: center;
    }
  }

  .item__input {
    width: 70%;
  }
  .dx-texteditor {
    width: 100%;
  }

  .error-message {
    color: red;
  }
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
</style>
