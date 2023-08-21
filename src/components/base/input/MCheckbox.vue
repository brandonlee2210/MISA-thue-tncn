<template>
  <div class="form-group-item-container checkbox-group">
    <div class="item__label">{{ label }}</div>
    <div class="item__input" @click="toggleChecked">
      <dx-check-box
        :value="value"
        :onValueChanged="handleValueChanged"
      ></dx-check-box>
    </div>
  </div>
</template>

<script>
import { DxCheckBox } from "devextreme-vue";

export default {
  name: "CustomCheckbox",
  components: {
    DxCheckBox,
  },
  props: {
    value: {
      type: Boolean,
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleChecked() {
      this.isChecked = !this.isChecked;
    },
    handleValueChanged(e) {
      this.isChecked = e.value;
      this.$emit("input", e.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox-group {
  grid-column: 1 / span 2;
  justify-content: unset;
}

.checkbox-group {
  .item__label {
    width: 192px;
  }
  .item__input {
    width: 35%;
    padding-top: 6px;
  }
}
</style>
