<template>
  <div class="form-group-item-container">
    <div class="item__label">
      {{ label }}<span v-if="isRequired" class="text-lg-error">*</span>
    </div>
    <div class="item__input">
      <dx-select-box
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
      ></dx-select-box>
      <div v-if="!isValid" class="error-message">{{ validationError }}</div>
    </div>
  </div>
</template>

<script>
import { DxSelectBox } from "devextreme-vue";

export default {
  name: "MyDropdown",
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
    isReadOnly: {
      type: Boolean,
      default: false,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedItem: this.value,
      isValid: true,
    };
  },
  methods: {
    handleValueChanged(e) {
      console.log(e.value);
      this.selectedItem = e.value;
      this.$emit("input", e.value);
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
</style>
