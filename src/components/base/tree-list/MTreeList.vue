<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div class="tree-container" :class="{ view: !canTextBoxEdit }">
    <label
      :for="id"
      class="item__label"
      :class="{ view: !canTextBoxEdit }"
      v-if="label"
    >
      {{ label }}
    </label>
    <DxDropDownBox
      v-if="canTextBoxEdit"
      :value="treeBoxValue"
      :opened="isTreeBoxOpened"
      ref="dropdownBox"
      placeholder="Bộ phận/phòng ban"
      :width="width"
      displayExpr="name"
      valueExpr="ID"
      :data-source="treeProducts"
      :show-clear-button="true"
      :input-attr="{ 'aria-label': 'Owner' }"
      class="search-person"
      @value-changed="syncTreeViewSelection($event)"
    >
      <template #content="{ data }">
        <DxTreeView
          :ref="treeViewRefName"
          id="simple-treeview"
          :data-source="treeProducts"
          :width="300"
          data-structure="plain"
          :searchEnabled="true"
          :noDataText="'Không có dữ liệu'"
          :searchEditorOptions="{
            placeholder: 'Tìm kiếm',
            width: 300,
          }"
          key-expr="ID"
          parent-id-expr="categoryId"
          selection-mode="single"
          display-expr="name"
          @content-ready="$event.component.selectItem(treeBoxValue)"
          @itemSelectionChanged="treeView_itemSelectionChanged($event)"
          @item-click="onTreeItemClick($event)"
        >
        </DxTreeView>
      </template>
    </DxDropDownBox>
    <div v-if="!canTextBoxEdit" class="misa-info-binding">
      <span class="text-lg-body-1">{{ treeBoxText || "-" }}</span>
    </div>
  </div>
</template>
<script>
import DxTreeView from "devextreme-vue/tree-view";
import { POPUP_FORM_MODE } from "@/helpers/enums";

import { departments, treeProducts } from "./data.js";
import { DxDropDownBox } from "devextreme-vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    DxTreeView,
    DxDropDownBox,
  },
  props: ["label", "isRequired", "id", "width", "value"],
  watch: {
    treeBoxValue(newVal) {
      if (typeof newVal === "string" || newVal === null) {
        this.setFilterData({
          FilterDepartment: newVal,
        });
        this.getListPerson();
      }
    },
    value: {
      handler: function (val) {
        this.treeBoxValue = val;
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState("employee", ["formMode"]),
    ...mapState("relative", ["popupFormMode"]),
    canTextBoxEdit() {
      return (
        this.formMode !== "view" || this.popupFormMode == POPUP_FORM_MODE.DIRECT
      );
    },
    treeBoxText() {
      const node = this.treeProducts.find((x) => x.ID === this.treeBoxValue);
      return node ? node.name : "";
    },
  },
  data() {
    return {
      treeProducts,
      departments,
      dropdownBox: null,
      isTreeBoxOpened: false,
      treeBoxValue: null,
      treeViewRefName: "tree-view",
    };
  },
  methods: {
    ...mapActions("employee", ["setFilterData", "getListPerson"]),
    /**
     * Đồng bộ dữ liệu giữa treeview và dropdownbox
     * @author baodg (04/09/2023)
     */
    syncTreeViewSelection(e) {
      this.$refs.dropdownBox.instance.close();
      if (typeof e.value === "string") {
        this.$emit("input", e.value);
      }
    },
    treeView_itemSelectionChanged(e) {
      this.treeBoxValue = e.component.getSelectedNodeKeys();
    },
    onTreeItemClick(e) {
      this.treeBoxValue = e.node.key;
      this.isTreeBoxOpened = false;
    },
  },
};
</script>
<style lang="scss">
.tree-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 36px;
  align-items: center;

  &.view {
    .misa-info-binding {
      width: 70%;
    }
  }
}

label.item__label.view {
  width: 200px;
  margin-right: 16px;
}

.dx-overlay-content.dx-popup-normal.dx-resizable.dx-popup-flex-height {
  width: unset !important;
}
</style>
