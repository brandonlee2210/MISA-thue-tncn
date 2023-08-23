<template>
  <div>
    <dx-calendar v-model="selectedDate"></dx-calendar>
    <dx-text-box
      v-model="selectedDate"
      :value-format="'mm/dd/yyyy'"
    ></dx-text-box>
  </div>
</template>

<script>
import { DxCalendar, DxTextBox } from "devextreme-vue";

import { locale } from "devextreme/localization";

export default {
  components: {
    DxCalendar,
    DxTextBox,
  },
  data() {
    return {
      selectedDate: null,
    };
  },
  created() {
    locale("vi");
  },
};
</script>
