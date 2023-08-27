<!-- eslint-disable vue/no-unused-components -->
<template>
  <div class="form-body-container">
    <div
      class="row mt-11 pb-6 d-flex pl-3 align-center pr-3"
      style="justify-content: space-between"
    >
      <span class="text-lg-h3" id="general">THÔNG TIN CHUNG</span>
    </div>
    <form class="form">
      <div class="row ma-0 pa-0">
        <span class="text-lg-subheader">Thông tin cá nhân</span>
      </div>
      <MSelectBox
        :items="employeeTypes"
        v-model="employee.EmployeeTypeID"
        label="Loại đối tượng"
      />
      <MTextBox
        v-model="employee.TaxCode"
        placeholder="Nhập mã số thuế"
        label="Mã số thuế"
        ref="taxCodeRef"
      />
      <MTextBox
        v-model="employee.EmployeeCode"
        placeholder="Nhập mã người nộp thuế"
        label="Mã người nộp thuế"
        :isRequired="true"
      />
      <MSelectBox
        :items="identityTypes"
        v-model="employee.IdentifyKindOfPaperID"
        label="Loại giấy tờ"
      />
      <MTextBox
        v-model="employee.FullName"
        placeholder="Nhập họ tên"
        label="Họ tên"
        :isRequired="true"
      />
      <MTextBox
        v-model="employee.IdentityNumber"
        placeholder="Nhập số CMND/CCCD/Hộ chiếu"
        label="Số CMND"
        :isRequired="isTaxCodeEmpty"
        customEmptyErrMsg="Không nhập mã số thuế thì số CMND/CCCD/Hộ chiếu không được bỏ trống
        "
        :validationRules="[validateNumberInput]"
        :maxLength="12"
      />
      <MDateBox
        v-model="employee.DateOfBirth"
        placeholder="__/__/____"
        label="Ngày sinh"
      />
      <MDateBox
        v-model="employee.IdentityDate"
        placeholder="__/__/____"
        label="Ngày cấp"
        :isRequired="isTaxCodeEmpty"
        customEmptyErrMsg="Không nhập mã số thuế thì ngày cấp không được bỏ trống"
      />
      <MRadioButton
        :options="[
          { value: 0, text: 'Nam' },
          { value: 1, text: 'Nữ' },
        ]"
        v-model="employee.Gender"
        label="Giới tính"
      />
      <MSelectBox
        :items="provincesList"
        v-model="employee.IdentityPlaceID"
        valueExpr="ProvinceID"
        displayExpr="LocationName"
        label="Nơi cấp"
        :isRequired="isTaxCodeEmpty"
        customEmptyErrMsg="Không nhập mã số thuế thì nơi cấp không được bỏ trống"
      />
      <MTextBox
        v-model="employee.PhoneNumber"
        placeholder="Nhập số điện thoại"
        label="Số điện thoại"
      />
      <MSelectBox
        :items="countryList"
        v-model="employee.NationalityID"
        label="Quốc tịch"
      />

      <MTextBox
        v-model="employee.Email"
        placeholder="Nhập email"
        label="Email"
        :validationRules="[validateEmail]"
      />
      <MSelectBox
        :items="contractTypes"
        v-model="employee.ContractTypeId"
        label="Loại hợp đồng"
      />
      <div class="row ma-0 pa-0">
        <span class="text-lg-subheader">Hộ khẩu thường trú</span>
      </div>
      <MSelectBox
        :items="countryList"
        v-model="employee.NativeCountryCode"
        label="Quốc gia"
      />
      <MSelectBox
        :items="locationsList"
        v-model="employee.NativeWardCode"
        :valueExpr="'LocationID'"
        :displayExpr="'LocationName'"
        label="Xã phường"
      />
      <MSelectBox
        :items="provincesList"
        v-model="employee.NativeProvinceCode"
        valueExpr="ProvinceID"
        displayExpr="LocationName"
        label="Tỉnh/thành phố"
      />
      <MTextBox
        v-model="employee.NativeAddress"
        placeholder="Nhập số nhà, đường/phố, thôn/xóm"
        label="Số nhà, đường/phố, thôn/xóm"
      />
      <MSelectBox
        :items="districtsList"
        v-model="employee.NativeDistrictCode"
        valueExpr="DistrictID"
        displayExpr="LocationName"
        label="Quận/huyện"
      />
      <MTextBox
        v-model="nativeAutoAddress"
        label="Địa chỉ"
        :isReadOnly="true"
      />
      <div class="row ma-0 pa-0">
        <span class="text-lg-subheader">Chỗ ở hiện nay</span>
      </div>
      <MCheckbox v-model="IsSameAddress" label="Giống hộ khẩu thường trú" />
      <MSelectBox
        :items="countryList"
        v-model="employee.CurrentCountryCode"
        label="Quốc gia"
        :isReadOnly="IsSameAddress"
      />
      <MSelectBox
        :items="currentLocationsList"
        :isReadOnly="IsSameAddress"
        v-model="employee.CurrentWardCode"
        :valueExpr="'LocationID'"
        :displayExpr="'LocationName'"
        label="Xã phường"
      />
      <MSelectBox
        :items="provincesList"
        :isReadOnly="IsSameAddress"
        v-model="employee.CurrentProvinceCode"
        valueExpr="ProvinceID"
        displayExpr="LocationName"
        label="Tỉnh/thành phố"
      />
      <MTextBox
        v-model="employee.CurrentAddress"
        placeholder="Nhập số nhà, đường/phố, thôn/xóm"
        :isReadOnly="IsSameAddress"
        label="Số nhà, đường/phố, thôn/xóm"
      />
      <MSelectBox
        :items="currentDistrictsList"
        :isReadOnly="IsSameAddress"
        v-model="employee.CurrentDistrictCode"
        valueExpr="DistrictID"
        displayExpr="LocationName"
        label="Quận/huyện"
      />
      <MTextBox
        v-model="currentAutoAddress"
        label="Địa chỉ"
        :isReadOnly="true"
      />
      <span class="text-lg-h3" id="job">THÔNG TIN CÔNG VIỆC</span>
      <MTextBox
        v-model="employee.DepartmentName"
        label="Bộ phận/phòng ban"
        :isReadOnly="true"
        :isRequired="true"
      />
      <MDateBox
        v-model="employee.ProbationDate"
        placeholder="__/__/____"
        label="Ngày học việc"
      />
      <MSelectBox
        :items="positionsList"
        v-model="employee.JobPositionID"
        label="Vị trí công việc"
        :isRequired="true"
      />
      <MDateBox
        v-model="employee.HireDate"
        placeholder="__/__/____"
        label="Ngày thử việc"
      />
      <MTextBox label="Chức danh" :isReadOnly="true" />
      <MDateBox
        v-model="employee.ReceiveDate"
        placeholder="__/__/____"
        label="Ngày chính thức"
      />
      <MSelectBox
        :items="workStatusesList"
        v-model="employee.WorkStatus"
        label="Trạng thái làm việc"
      />
      <MDateBox
        v-model="employee.ResignationDate"
        placeholder="__/__/____"
        label="Ngày nghỉ việc"
      />
      <div
        class="row mt-11 pb-6 d-flex pl-3 align-center pr-3 text-lg-h3"
        style="justify-content: space-between"
      >
        <span class="text-lg-h3" id="family">THÔNG TIN GIA ĐÌNH</span>
        <ButtonWithIcon
          type="add--blue"
          title="Thêm"
          :onClick="openFormPopup"
        />
      </div>
    </form>
    <section
      class="misa-empty-data misa-background-footer-dialog text-lg-body-2 mt-4 d-flex justify-center align-center"
    >
      <span v-if="employee.ListRelatives.length == 0" class="no-info"
        >Chưa có thông tin gia đình</span
      >
      <MViewTable
        :columns="familiMemberTableHeader"
        :dataSource="employee.ListRelatives"
        v-else
      >
        <template #IsDependent>
          <div class="text-center dx-template-wrapper">
            <div class="mi-check" style="margin: 0px auto"></div>
          </div>
        </template>
      </MViewTable>
    </section>
    <div class="ma-0 pa-0 mt-4"></div>
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
      <PopUp ref="popupRef" />
    </DxPopup>
  </div>
</template>

<script>
import { DxPopup } from "devextreme-vue/popup";
import ButtonWithIcon from "@/components/base/button/ButtonWithIcon.vue";
import { mapState, mapActions } from "vuex";
import { getNewCode, getEmployeeById, addNewEmployee } from "@/helpers/api";

import {
  familiMemberTableHeader,
  employeeTypes,
  workStatusesList,
  identityTypes,
  contractTypes,
  countryList,
  locationsList,
  provincesList,
  districtsList,
  positionsList,
  items,
} from "./data.js";
import MTextBox from "@/components/base/input/MTextBox.vue";
import MSelectBox from "@/components/base/select-box/MSelectBox.vue";
import MDateBox from "@/components/base/input/MDateBox.vue";
import MRadioButton from "@/components/base/radio/MRadioButton.vue";
import MCheckbox from "@/components/base/input/MCheckbox.vue";
import PopUp from "./PopUp.vue";
import MViewTable from "@/components/base/table/MViewTable.vue";

const formRefKey = "formRef";

export default {
  components: {
    DxPopup,
    ButtonWithIcon,
    MTextBox,
    MSelectBox,
    MDateBox,
    MRadioButton,
    MCheckbox,
    PopUp,
    MViewTable,
  },
  watch: {
    // Thực hiện lưu trữ thêm dữ liệu với những trường trong table
    "employee.Gender": function (newGender) {
      this.employee.GenderName = newGender === 0 ? "Nam" : "Nữ";
    },
    "employee.EmployeeTypeID": function (newEmployeeTypeID) {
      this.employee.EmployeeTypeName = employeeTypes.find(
        (employeeType) => employeeType.id === newEmployeeTypeID
      ).text;
    },
    "employee.ContractTypeId": function (newContractTypeId) {
      this.employee.ConstractTypeName = contractTypes.find(
        (contractType) => contractType.id === newContractTypeId
      ).text;
    },
    "employee.JobPositionID": function (newPositionCode) {
      console.log(this.employee);
      this.employee.JobPositionName = positionsList.find(
        (position) => position.id === newPositionCode
      ).text;
    },
    /* Theo dõi khi tỉnh và huyện thay đổi thì lọc lại theo đúng ID */
    "employee.NativeProvinceCode": function (newProvinceCode) {
      this.districtsList = districtsList.filter(
        (location) => location.ProvinceID === newProvinceCode
      );
    },
    "employee.NativeDistrictCode": function (newDistrictCode) {
      this.locationsList = locationsList.filter(
        (location) => location.DistrictID === newDistrictCode
      );
    },
    "employee.CurrentProvinceCode": function (newProvinceCode) {
      this.currentDistrictsList = districtsList.filter(
        (location) => location.ProvinceID === newProvinceCode
      );
    },
    "employee.CurrentDistrictCode": function (newDistrictCode) {
      this.currentLocationsList = locationsList.filter(
        (location) => location.DistrictID === newDistrictCode
      );
    },
  },
  data() {
    return {
      // Thông tin nhân viên
      employee: {
        EmployeeTypeID: 1,
        EmployeeTypeName: "",
        IdentifyKindOfPaperID: 1,
        DateOfBirth: null,
        TaxCode: "",
        EmployeeCode: "",
        FullName: "",
        IdentityDate: null,
        IdentityNumber: "",
        IdentityPlaceID: 1,
        PhoneNumber: "",
        Gender: 0,
        GenderName: "Nam",
        ContractTypeId: 1,
        ConstractTypeName: "",
        NationalityID: 1,
        NativeCountryCode: 1,
        NativeProvinceCode: null,
        NativeDistrictCode: null,
        NativeWardCode: null,
        NativeAddress: null,
        CurrentCountryCode: 1,
        CurrentCountryName: "Việt Nam",
        CurrentProvinceCode: null,
        CurrentDistrictCode: null,
        CurrentWardCode: null,
        CurrentAddress: null,
        Email: null,
        DepartmentName: "CÔNG TY CỔ PHẦN TEST QTT",
        ProbationDate: null,
        HireDate: null,
        ReceiveDate: null,
        ResignationDate: null,
        JobPositionID: "",
        JobPositionName: "",
        WorkStatus: 1,
        ListRelatives: [],
        UsageStatus: 0,
      },
      popupRef: null,
      formRefKey,
      // Data source cho các select box
      employeeTypes,
      workStatusesList,
      positionsList,
      identityTypes,
      familiMemberTableHeader,
      contractTypes,
      countryList,
      provincesList,
      districtsList: null,
      locationsList: null,
      currentDistrictsList: null,
      currentLocationsList: null,

      // Data source cho các select box
      taxCodeRef: null,

      items,
      formComponents: [],
      IsSameAddress: false,
      popupValues: {},
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
                  onClick: this.handleAddFamilyMember,
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
    ...mapState("employee", [
      "newEmployeeCode",
      "formMode",
      "currentEmployeeId",
    ]),
    popupTitle() {
      return "Thêm thành viên gia đình";
    },
    form() {
      return this.$refs[formRefKey].instance;
    },
    // Ô input địa chỉ autocomplete dựa trên thông tin người dùng chọn
    nativeAutoAddress() {
      let provinceName = this.provincesList.find(
        (province) => province.ProvinceID === this.employee.NativeProvinceCode
      )?.LocationName;

      let districtName = this.districtsList?.find(
        (district) => district.DistrictID === this.employee.NativeDistrictCode
      )?.LocationName;

      let wardName = this.locationsList?.find(
        (ward) => ward.LocationID === this.employee.NativeWardCode
      )?.LocationName;

      return `${
        this.employee.NativeAddress ? this.employee.NativeAddress + ", " : ""
      }${wardName ? wardName + ", " : ""}${
        districtName ? districtName + ", " : ""
      }${provinceName ? provinceName + ", " : ""}${
        this.employee.CurrentCountryName
      }`;
    },
    // Địa chỉ hiện tại autocomplete dựa trên thông tin người dùng chọn
    currentAutoAddress() {
      let provinceName = this.provincesList.find(
        (province) => province.ProvinceID === this.employee.CurrentProvinceCode
      )?.LocationName;

      let districtName = this.districtsList?.find(
        (district) => district.DistrictID === this.employee.CurrentDistrictCode
      )?.LocationName;

      let wardName = this.locationsList?.find(
        (ward) => ward.LocationID === this.employee.CurrentWardCode
      )?.LocationName;

      return `${
        this.employee.CurrentAddress ? this.employee.CurrentAddress + ", " : ""
      }${wardName ? wardName + ", " : ""}${
        districtName ? districtName + ", " : ""
      }${provinceName ? provinceName + ", " : ""}${
        this.employee.CurrentCountryName
      }`;
    },
    isTaxCodeEmpty() {
      return this.employee.TaxCode === "";
    },
  },
  methods: {
    ...mapActions("global", [
      "openFormPopup",
      "closeFormPopup",
      "showToast",
      "hideToast",
    ]),
    ...mapActions("employee", ["getNewEmployeeCode"]),
    onPopupContentReady() {
      console.log("Popup content is ready");
    },
    onPopupHidden() {
      console.log("Popup is hidden");
    },
    /**
     * Thực hiện validate tất cả các component con
     * Created by: dgbao (19/08/2023)
     */
    async saveForm() {
      let isValid = true;

      // Lặp qua từng component MyTextBox và validate
      this.$children.forEach((child) => {
        if (
          child.$options.name === "MTextBox" ||
          child.$options.name === "MSelectBox" ||
          child.$options.name === "MDateBox"
        ) {
          // Gọi đến phương thức validate của component con
          child.validate();

          if (!child.isValid) {
            isValid = false;
          }
        }
      });

      if (isValid) {
        console.log("Form is valid, saving data...");

        await addNewEmployee(this.employee);

        this.$router.push("/tax");

        this.showToast({
          type: "success",
          title: "Thêm mới thành công",
        });
      } else {
        console.log("Form is invalid");
      }
    },
    /**
     * Thêm thành viên gia đình
     * Created by: dgbao (19/08/2023)
     */
    handleAddFamilyMember() {
      let popup = this.$refs.popupRef;
      popup.validate();

      let memberData = popup.getMemberData();

      this.employee.UnofficialStaffRelationships.push(memberData);
      console.log(this.employee);
    },
    // Danh sách các validation rul
    /**
     * Kiểm tra value chỉ được chứa các số
     * @param {String} value
     * Created by: dgbao (19/08/2023)
     */
    validateNumberInput(value) {
      let regex = /^[0-9]*$/;
      console.log(this);

      if (regex.test(value) || value === "" || value === null) {
        return {
          isValid: true,
          message: "",
        };
      } else {
        return {
          isValid: false,
          message: `Số CMND/CCCD không đúng định dạng`,
        };
      }
    },
    /**
     * Kiểm tra định dạng email
     * @param {String} value
     * Created by: dgbao (19/08/2023)
     */
    validateEmail(value) {
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (regex.test(value) || value === "" || value === null) {
        return {
          isValid: true,
          message: "",
        };
      } else {
        return {
          isValid: false,
          message: `Email không đúng định dạng`,
        };
      }
    },
  },

  created() {
    /**
     * Lấy mã nhân viên mới
     * Created by: dgbao (19/08/2023)
     */
    const getNewEmployeeCode = async () => {
      let newEmployeeCode = await getNewCode();
      this.employee.EmployeeCode = newEmployeeCode;
    };
    /**
     * Lấy thông tin chi tiết nhân viên
     * Created by: dgbao (19/08/2023)
     */
    const getEmployeeDetails = async (id) => {
      let employeeDetails = await getEmployeeById(id);
      this.employee = employeeDetails;
    };

    if (this.formMode === "add") {
      getNewEmployeeCode();
    } else if (this.formMode === "view") {
      getEmployeeDetails(this.currentEmployeeId);
    }
  },
};
</script>

<style lang="scss" scoped>
@import url(../../assets/style/view/PersonalTaxForm/FormDetails.scss);
</style>
