<template>
  <div class="form-body-container">
    <DxForm :items="items" :col-count="1" :show-colon-after-label="false">
    </DxForm>
    <div
      class="row mt-11 pb-6 d-flex pl-3 align-center pr-3"
      style="justify-content: space-between"
    >
      <span class="text-lg-h3">THÔNG TIN GIA ĐÌNH</span>
      <ButtonWithIcon type="add--blue" title="Thêm" :onClick="() => {}" />
    </div>
  </div>
</template>

<script>
import { DxForm, DxRadioGroup } from "devextreme-vue/form";
import ButtonWithIcon from "@/components/base/button/ButtonWithIcon.vue";

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

const items = [
  {
    itemType: "group",
    caption: "THÔNG TIN CHUNG",
    items: [
      {
        itemType: "group",
        caption: "Thông tin cá nhân",
        colCount: 2,
        items: [
          {
            dataField: "Loại đối tượng",
            editorOptions: {
              placeholder: "Chọn đối tượng",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Loại đối tượng",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Mã số thuế",
            },
            editorType: "dxTextBox",
            label: {
              text: "Mã số thuế",
            },
          },
          {
            label: {
              text: "Mã người nộp thuế",
            },
            dataField: "Password",
            editorOptions: {
              placeholder: "Nhập mã người nộp thuế",
            },
            editorType: "dxTextBox",
            validationRules: [
              {
                type: "required",
                message: "Mã người nộp thuế không được bỏ trống",
              },
            ],
          },
          {
            dataField: "Loại giấy tờ",
            editorType: "dxSelectBox",
            label: {
              text: "Loại giấy tờ",
            },
          },
          {
            label: {
              text: "Họ tên",
            },
            editorOptions: {
              placeholder: "Họ tên",
            },
            editorType: "dxTextBox",
            validationRules: [
              {
                type: "required",
                message: "Họ tên không được bỏ trống",
              },
            ],
          },
          {
            label: {
              text: "Số CMND",
            },
            editorOptions: {
              placeholder: "Nhập số CMND/CCCD/Hộ chiếu",
            },

            editorType: "dxTextBox",
            validationRules: [],
          },
          {
            label: {
              text: "Ngày sinh",
            },
            editorOptions: {
              placeholder: "__/__/____",
            },
            editorType: "dxDateBox",
            validationRules: [],
          },
          {
            label: {
              text: "Ngày cấp",
            },
            editorOptions: {
              placeholder: "__/__/____",
            },
            editorType: "dxDateBox",
            validationRules: [],
          },
          {
            dataField: "Gender",
            editorType: "dxRadioGroup",
            editorOptions: {
              items: [
                { value: 0, text: "Nam" },
                { value: 1, text: "Nữ" },
              ],
              layout: "horizontal", // Optional: Specify the layout of the radio buttons (horizontal or vertical)
              defaultValue: 0,
            },
            label: {
              text: "Giới tính",
            },
          },
          {
            label: {
              text: "Nơi cấp",
            },
            editorOptions: {
              placeholder: "Chọn/nhập nơi cấp",
            },
            editorType: "dxSelectBox",

            validationRules: [],
          },
          {
            label: {
              text: "Số điện thoại",
            },
            editorOptions: {
              placeholder: "Nhập số điện thoại",
            },
            editorType: "dxTextBox",
            validationRules: [],
          },
          {
            label: {
              text: "Quốc tịch",
            },

            editorType: "dxSelectBox",
            validationRules: [],
          },
          {
            label: {
              text: "Email",
            },
            editorOptions: {
              placeholder: "Nhập email",
            },
            editorType: "dxTextBox",
            validationRules: [
              {
                type: "required",
                message: "Email không được bỏ trống",
              },
              // ko đúng định dạng email
              {
                type: "pattern",
                pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Email không đúng định dạng",
              },
            ],
          },
          {
            label: {
              text: "Loại hợp đồng",
            },

            editorType: "dxSelectBox",
            validationRules: [],
          },
        ],
      },
      {
        itemType: "group",
        caption: "Hộ khẩu thường trú",
        colCount: 2,
        items: [
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Việt Nam",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Quốc gia",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập xã/phường",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Xã/phường",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập tỉnh/thành phố",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Tỉnh/thành phố",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Nhập số nhà, đường/phố, thôn/xóm",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Số nhà, đường/phố, thôn/xóm",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập quận, huyện",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Quận/huyện",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              readOnly: true,
            },
            editorType: "dxTextBox",
            label: {
              text: "Địa chỉ",
            },
          },
        ],
      },
      {
        itemType: "group",
        caption: "Chỗ ở hiện nay",
        colCount: 2,
        items: [
          {
            colSpan: 2,
            editorType: "dxCheckBox",
            value: true,
            label: {
              text: "Giống hộ khẩu thường trú",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Việt Nam",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Quốc gia",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập xã/phường",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Xã/phường",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập tỉnh/thành phố",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Tỉnh/thành phố",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Nhập số nhà, đường/phố, thôn/xóm",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Số nhà, đường/phố, thôn/xóm",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập quận, huyện",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Quận/huyện",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              readOnly: true,
            },
            editorType: "dxTextBox",
            label: {
              text: "Địa chỉ",
            },
          },
        ],
      },
    ],
  },
  {
    itemType: "group",
    caption: "THÔNG TIN CÔNG VIỆC",
    colCount: 2,
    items: [
      {
        dataField: "Bộ phận/phòng ban",
        editorOptions: {
          placeholder: "Chọn đối tượng",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Bộ phận/phòng ban",
        },
      },
      {
        label: {
          text: "Ngày học việc",
        },
        editorOptions: {
          placeholder: "__/__/____",
        },
        editorType: "dxDateBox",
        validationRules: [],
      },
      {
        label: {
          text: "Vị trí công việc",
        },
        editorOptions: {
          placeholder: "Chọn/nhập vị trí công việc",
        },
        editorType: "dxSelectBox",
        validationRules: [],
      },
      {
        label: {
          text: "Ngày thử việc",
        },
        editorOptions: {
          placeholder: "__/__/____",
        },
        editorType: "dxDateBox",
        validationRules: [],
      },
      {
        label: {
          text: "Chức danh",
        },
        editorOptions: {
          readOnly: true,
        },
        editorType: "dxTextBox",
        validationRules: [],
      },
      {
        label: {
          text: "Ngày chính thức",
        },
        editorOptions: {
          placeholder: "__/__/____",
        },
        editorType: "dxDateBox",
        validationRules: [],
      },
      {
        label: {
          text: "Trạng thái làm việc",
        },
        editorOptions: {
          placeholder: "Chọn/nhập vị trí công việc",
        },
        editorType: "dxSelectBox",
        validationRules: [],
      },
      {
        label: {
          text: "Ngày nghỉ việc",
        },
        editorOptions: {
          placeholder: "__/__/____",
        },
        editorType: "dxDateBox",
        validationRules: [],
      },
    ],
  },

  // {
  //   itemType: "button",
  //   horizontalAlignment: "left",
  //   buttonOptions: {
  //     text: "Register",
  //     type: "success",
  //     useSubmitBehavior: true,
  //   },
  // },
];

export default {
  components: {
    DxForm,
    // eslint-disable-next-line vue/no-unused-components
    DxRadioGroup,
    ButtonWithIcon,
  },
  data() {
    return {
      employee,
      items,
      positionEditorOptions: {
        items: employee.EmployeeType,
        searchEnabled: true,
        value: employee.EmployeeType[0],
      },
    };
  },
};
</script>

<style lang="scss">
@import url(./FormDetails.scss);
.form-body-container {
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 24px;
}
</style>
