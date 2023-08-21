<template>
  <div class="form-group-item-container radio">
    <div class="item__label">{{ label }}</div>
    <div class="item__input">
      <dx-radio-group
        :value="selectedValue"
        :data-source="options"
        @valueChanged="handleChange"
        valueExpr="value"
        displayExpr="text"
        layout="horizontal"
      >
      </dx-radio-group>
    </div>
  </div>
</template>

<script>
import { DxRadioGroup } from "devextreme-vue";

export default {
  name: "CustomRadioButton",
  components: {
    DxRadioGroup,
  },
  data() {
    return {
      selectedValue: this.value,
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleChange(newValue) {
      this.selectedValue = newValue.value;
      this.$emit("input", newValue.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group-item-container.radio {
  align-items: center;

  .item__label {
    margin-top: 0 !important;
    padding-top: 8px;
  }
}
</style>
