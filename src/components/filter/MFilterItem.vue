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
    <MRadioButton :options="options" :value="1" v-show="checked" />
    <!-- <MDatePickerVue /> -->
  </div>
</template>

<script>
import MRadioButton from "../base/radio/MRadioButton.vue";
import { workStatuses } from "./data";
import MDatePickerVue from "../base/input/MDatePicker.vue";

export default {
  components: {
    MRadioButton,
    // eslint-disable-next-line vue/no-unused-components
    MDatePickerVue,
  },
  watch: {
    checked(newValue) {
      console.log(newValue);
    },
  },
  props: ["label", "options"],
  data() {
    return {
      checked: false,
      workStatuses,
    };
  },
};
</script>
