<template>
  <div class="textarea-container">
    <div class="label">{{ label }}</div>
    <dx-text-area
      :value="value"
      :disabled="disabled"
      :showClearButton="showClearButton"
      :onInput="handleValueChanged"
    />
  </div>
</template>

<script>
import { DxTextArea } from "devextreme-vue";

export default {
  components: {
    DxTextArea,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    showClearButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleValueChanged(event) {
      const newValue = event.event.target.value;
      console.log(newValue);
      this.$emit("input", newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    width: 200px;
    margin-right: 16px;
  }

  .dx-show-invalid-badge.dx-textarea {
    width: 70%;
  }
}
</style>
