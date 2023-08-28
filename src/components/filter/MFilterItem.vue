<template>
  <div class="row-content pl-2 pb-1" :class="{ active: checked }">
    <div class="row-fitler d-flex">
      <div
        class="misa-container-base--check-box d-flex align-center"
        @click="checked = !checked"
      >
        <div
          class="v-input theme--light v-input--selection-controls v-input--checkbox"
        >
          <div class="v-input__control">
            <div class="v-input__slot">
              <div class="v-input--selection-controls__input">
                <i
                  aria-hidden="true"
                  :class="`v-icon notranslate mintax mintax-${
                    checked ? 'on' : 'off'
                  }-check-box`"
                ></i
                ><input aria-checked="false" role="checkbox" type="checkbox" />
                <div class="v-input--selection-controls__ripple"></div>
              </div>
            </div>
            <div class="v-messages theme--light">
              <div class="v-messages__wrapper"></div>
            </div>
          </div>
        </div>
        <div
          class="ml-2 misa-lable-check-box mt-1 text-lg-body-2"
          style="cursor: pointer"
        >
          <span>{{ label }}</span>
        </div>
      </div>
    </div>
    <MRadioButton :options="options" v-model="selectedValue" v-show="checked" />
    <div class="date-filter" v-if="itemKey == 'FilterDate' && checked">
      <MDateBox
        label="Từ ngày"
        placeholder="__/__/____"
        v-model="startDate"
        :min="minStartDate"
        :max="maxStartDate"
      />
      <MDateBox
        label="Đến ngày"
        placeholder="__/__/____"
        v-model="endDate"
        :min="minEndDate"
        :max="new Date()"
      />
    </div>
    <!-- <template v-if="checked">
      <slot></slot>
    </template> -->
  </div>
</template>

<script>
import MRadioButton from "../base/radio/MRadioButton.vue";
import { mapActions, mapState } from "vuex";
import { workStatuses } from "./data";
import MDateBox from "../base/input/MDateBox.vue";

export default {
  components: {
    MRadioButton,
    MDateBox,
  },
  computed: {
    ...mapState("employee", ["filterData"]),
    minStartDate() {
      return this.startFilterDate;
    },
    maxStartDate() {
      return this.endFilterDate;
    },
    minEndDate() {
      return this.startFilterDate;
    },
  },
  watch: {
    // Nếu giá trị check thay đổi thì emit lên key cùng với value của checkbox đang chọn,
    checked(newValue) {
      if (newValue) {
        this.selectedValue = 1;

        if (this.itemKey == "FilterDate") {
          this.selectedValue = "HireDate";
          this.$emit("checkedChange", this.itemKey, this.selectedValue);
        } else {
          this.$emit("checkedChange", this.itemKey, this.selectedValue);
        }
        // Nếu bỏ tick thì gửi lên giá trị null
      } else {
        this.$emit("checkedChange", this.itemKey, null);
      }
    },
    selectedValue(newValue) {
      this.$emit("checkedChange", this.itemKey, newValue);
    },
    startDate(newValue) {
      this.setStartDate(newValue);
    },
    endDate(newValue) {
      this.setEndDate(newValue);
    },
  },

  props: [
    "label",
    "options",
    "itemKey",
    "value",
    "startFilterDate",
    "endFilterDate",
  ],
  data() {
    return {
      checked: this.value !== null && this.value !== undefined,
      selectedValue: this.value,
      workStatuses,
      startDate: this.startFilterDate,
      endDate: this.endFilterDate,
    };
  },
  methods: {
    ...mapActions("employee", ["setStartDate", "setEndDate"]),
  },
};
</script>
