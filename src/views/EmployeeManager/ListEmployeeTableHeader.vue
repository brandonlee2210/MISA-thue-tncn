<template>
  <div class="list-person">
    <div class="list-person__right">
      <DxTextBox
        placeholder="Tìm theo Mã/Tên nhân viên, MST, CMND"
        icon="check"
        class="search-person"
        mode="search"
        :width="380"
        :height="36"
      ></DxTextBox>
      <MTreeList />
      <dx-select-box
        :items="items"
        :displayExpr="'text'"
        :valueExpr="'id'"
        :value="selectedItem"
        placeholder="Trạng thái sử dụng"
        :searchExpr="['text']"
        :noDataText="'Không có dữ liệu'"
        @valueChanged="handleValueChanged"
      ></dx-select-box>
    </div>
    <div class="list-person__left">
      <ButtonWithIcon type="setting" :onClick="handleClickSetting" />
    </div>
  </div>
</template>

<script>
import { DxTextBox } from "devextreme-vue";
import MTreeList from "@/components/base/tree-list/MTreeList.vue";
import ButtonWithIcon from "@/components/base/button/ButtonWithIcon.vue";
import { USAGE_STATUS } from "@/helpers/enums";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    DxTextBox,
    ButtonWithIcon,
    MTreeList,
  },
  computed: {
    ...mapState("employee", ["usageStatus", "filterData"]),
  },
  watch: {
    usageStatus() {
      this.selectedItem = this.usageStatus;
    },
  },
  data() {
    return {
      selectedItem: this.usageStatus,
      items: [
        {
          id: USAGE_STATUS.INACTIVE,
          text: "Không sử dụng",
        },
        {
          id: USAGE_STATUS.ACTIVE,
          text: "Đang sử dụng",
        },
      ],
    };
  },
  methods: {
    ...mapActions("employee", [
      "setUsageStatus",
      "setFilterData",
      "getListEmployees",
    ]),
    ...mapActions("global", ["showLoading", "hideLoading"]),
    /**
     * Xử lí khi click vào nút setting
     * @author baodg (25/08/2023)
     */
    handleClickSetting() {
      this.$emit("toggle-draggable-menu");
    },
    /**
     * Xử lí khi chọn trạng thái sử dụng
     * @param {*} e
     */
    handleValueChanged(e) {
      this.setUsageStatus(e.value);
      this.setFilterData({
        FilterUsageStatus: e.value,
      });
      this.showLoading();
      this.getListEmployees();
      this.hideLoading();
    },
  },
};
</script>

<style lang="scss" scoped>
.dx-buttongroup {
  color: white;
}
.list-person {
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  height: 60px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  .dx-texteditor-container {
    border-radius: 4px;
  }

  .dx-texteditor.dx-editor-outlined:hover {
    border-color: var(--primary-color);
  }

  .dx-button:hover {
    background-color: white;
    border-color: var(--primary-color);
    border-width: 1px;
    color: var(--primary-color);
  }

  .list-person__right {
    display: flex;
    align-items: center;
    position: relative;
    gap: 8px;

    .search-person {
      .dx-button-mode-contained {
        background-color: red !important;
      }
    }

    .dx-button {
      font-weight: 700;
    }

    &:hover {
      border-color: #007aff;
    }
  }
  .list-person__left {
    display: flex;
    align-items: center;

    gap: 8px;

    .group-button {
      display: flex;

      #addButton {
        background: #007aff;
        border-radius: 4px;
        color: white !important;

        .dx-button-text {
          color: white !important;
        }
      }
    }

    .dx-button-mode-outlined {
      color: white;
    }
  }
}
</style>
