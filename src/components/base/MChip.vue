<template>
  <div class="misa-container-base--chip dx-template-wrapper">
    <span :class="`v-chip theme--light v-size--default chip-${color}`"
      ><span class="v-chip__content"
        ><span>{{ newLabel }}</span></span
      ></span
    >
  </div>
</template>

<script>
import { USAGE_STATUS, WORK_STATUS } from "@/helpers/enums";
export default {
  name: "MChip",
  props: {
    label: {
      type: [String, Number],
      default: "",
    },
    column: {
      type: String,
      default: "",
    },
  },
  computed: {
    newLabel() {
      switch (this.column) {
        case "WorkStatus":
          return this.label == WORK_STATUS.ACTIVE
            ? "Đang làm việc"
            : "Đã nghỉ việc";
        case "UsageStatus":
          return this.label == USAGE_STATUS.ACTIVE
            ? "Đang sử dụng"
            : "Không sử dụng";
        default:
          return this.label;
      }
    },
    color() {
      switch (this.column) {
        case "WorkStatus":
          return this.label == 1 ? "success" : "default";
        case "UsageStatus":
          return this.label == 1 ? "success" : "error";
        default:
          return "#00af2f";
      }
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.chip-success {
  border-radius: 4px;
  background-color: #e5fce9 !important;
  display: flex;
  justify-content: center;
}

.v-chip {
  width: 120px;
  border-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.87);
}

.v-chip {
  align-items: center;
  justify-content: center;
  cursor: default;
  display: inline-flex;
  line-height: 20px;
  max-width: 100%;
  outline: none;
  overflow: hidden;
  padding: 0 12px;
  position: relative;
  text-decoration: none;
  transition-duration: 0.28s;
  transition-property: box-shadow, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  vertical-align: middle;
  white-space: nowrap;
}

.v-chip:before {
  background-color: currentColor;
  bottom: 0;
  border-radius: inherit;
  content: "";
  left: 0;
  opacity: 0;
  position: absolute;
  pointer-events: none;
  right: 0;
  top: 0;
}

.chip-success span {
  color: #00af2f !important;
}

.chip-default span {
  color: #8f8c8c !important;
}

.chip-default {
  border-radius: 4px;
  background-color: #e4e4e4 !important;
}

.chip-error {
  border-radius: 4px;
  background-color: #f9c7c7 !important;
}

.chip-error span {
  color: #e61d1d !important;
  font-size: 14px !important;
}

.v-chip .v-chip__content {
  align-items: center;
  display: inline-flex;
  height: 100%;
  max-width: 100%;
}

.v-chip.v-size--default {
  font-size: 14px;
  height: 32px;
}
</style>
