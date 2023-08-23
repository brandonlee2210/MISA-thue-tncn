<template>
  <div class="form-group-item-container radio">
    <div class="item__label" @click="selectItem">{{ label }}</div>
    <div class="item__input">
      <dx-radio-group
        :value="selectedValue"
        :data-source="options"
        @valueChanged="handleChange"
        valueExpr="value"
        displayExpr="text"
        layout="horizontal"
        :disabled="formMode == 'view'"
      >
      </dx-radio-group>
    </div>
  </div>
</template>

<script>
import { DxRadioGroup } from "devextreme-vue";
import { mapState } from "vuex";

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
  computed: {
    ...mapState("employee", ["formMode"]),
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
    /**
     * Xử lý khi chọn item
     * Created by: dgbao (22/08/2023)
     */
    handleChange(newValue) {
      this.selectedValue = newValue.value;
      this.$emit("input", newValue.value);
    },
    /**
     * Xử lý khi click vào label
     * Created by: dgbao (22/08/2023)
     */
    selectItem() {},
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
