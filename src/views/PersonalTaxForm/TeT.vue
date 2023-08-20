<!-- eslint-disable vue/no-unused-components -->
<template>
  <div class="form-body-container">
    <DxForm
      :items="items"
      :col-count="1"
      :show-colon-after-label="false"
      :ref="formRefKey"
    >
      <MTextBox :value="employee.taxCode" placeholder="placeholder" />
    </DxForm>
    <div
      class="row mt-11 pb-6 d-flex pl-3 align-center pr-3"
      style="justify-content: space-between"
    >
      <span class="text-lg-h3">THÔNG TIN GIA ĐÌNH</span>
      <ButtonWithIcon type="add--blue" title="Thêm" :onClick="openFormPopup" />
    </div>
    <DxPopup
      :show-title="true"
      :title="popupTitle"
      :width="1146"
      :drag-enabled="false"
      position="center"
      :visible="popupVisible"
      @hidden="closeFormPopup"
      :toolbar-items="toolbarItems"
    >
      <dx-form :formData="popupValues" :items="popupItems"></dx-form>
    </DxPopup>
  </div>
</template>

<script>
import { DxForm, DxSimpleItem } from "devextreme-vue/form";
import { DxPopup } from "devextreme-vue/popup";
import ButtonWithIcon from "@/components/base/button/ButtonWithIcon.vue";
import { mapState, mapActions } from "vuex";
import { items, popupItems } from "./data.js";
import MTextBox from "@/components/base/input/MTextBox.vue";

const formRefKey = "formRef";

const employee = {
  EmployeeType: ["Nhân viên", "Vãng lai"],
  name: "John Heart",
  position: "CEO",
  hireDate: "",
  officeNumber: 901,
  phone: "+1(213) 555-9392",
  skype: "jheart_DX_skype",
  email: "jheart@dx-email.com",
};

export default {
  components: {
    DxForm,
    DxPopup,
    // eslint-disable-next-line vue/no-unused-components
    DxSimpleItem,
    ButtonWithIcon,
    MTextBox,
  },
  data() {
    return {
      employee,
      formRefKey,
      items,
      positionEditorOptions: {
        items: employee.EmployeeType,
        searchEnabled: true,
        value: employee.EmployeeType[0],
      },
      popupValues: {},
      popupItems,
      buttonOptions: {
        text: "Refresh",
        onClick: function () {
          /* ... */
        },
      },
      toolbarItems: [
        {
          widget: "dxToolbar",
          location: "after",
          toolbar: "bottom",
          options: {
            items: [
              {
                widget: "dxButton",
                options: {
                  text: "Huỷ",
                  onClick: this.closeFormPopup,
                },
                stylingMode: "contained",
                elementAttr: {
                  style: "font-weight: 600",
                },
              },
              {
                widget: "dxButton",

                options: {
                  cssClass: "save",
                  text: "Đồng ý",
                  onClick: this.closeFormPopup,
                  stylingMode: "contained",
                  elementAttr: {
                    style:
                      "background-color: #007aff; color: white; font-weight: 500",
                  },
                },
              },
            ],
          },
        },
      ],
    };
  },
  computed: {
    ...mapState("global", ["popupVisible"]),
    popupTitle() {
      return "Thêm thành viên gia đình";
    },
    form() {
      return this.$refs[formRefKey].instance;
    },
  },
  methods: {
    ...mapActions("global", ["openFormPopup", "closeFormPopup"]),
    onPopupContentReady() {
      console.log("Popup content is ready");
    },
    onPopupHidden() {
      console.log("Popup is hidden");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./FormDetails.scss);
.form-body-container {
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 24px;
}
</style>
