<template>
  <div class="container-filter" v-if="isFilterVisible">
    <div class="header-filter">
      <div class="title">Bộ lọc</div>
      <button
        type="button"
        class="v-icon notranslate v-icon--link mi mi-close theme--light"
        @click="hideFilter"
      ></button>
    </div>
    <div class="content-filter">
      <MFilterItem
        v-for="(item, index) in filterOptions"
        :key="index"
        :label="item.label"
        :options="item.options"
      />
    </div>
    <div class="footer-filter">
      <div class="d-flex align-center misa-contain-action">
        <div>
          <DxButton class="dx-button" :height="36" :onClick="onSave">
            Bỏ lọc</DxButton
          >
        </div>
        <div>
          <DxButton class="dx-button save" :height="36" :onClick="onSave">
            Áp dụng</DxButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MFilterItem from "./MFilterItem.vue";
import { DxButton } from "devextreme-vue";
import { mapState, mapActions } from "vuex";
import { filterOptions } from "./data";

export default {
  components: {
    MFilterItem,
    DxButton,
  },
  computed: {
    ...mapState("global", ["isFilterVisible"]),
  },
  methods: {
    ...mapActions("global", ["showFilter", "hideFilter"]),
  },
  data() {
    return {
      filterOptions,
    };
  },
};
</script>

<style lang="scss">
@import url(../../assets/style/base/filter/MFilter.scss);
</style>
