<!-- eslint-disable vue/no-unused-components -->
<template>
  <div class="form-body-container">
    <m-loading v-if="isLoading"></m-loading>
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
        id="employeeType"
      />
      <MTextBox
        v-model="employee.TaxCode"
        placeholder="Nhập mã số thuế"
        label="Mã số thuế"
        ref="taxCodeRef"
        id="taxCode"
      />
      <MTextBox
        v-model="employee.EmployeeCode"
        placeholder="Nhập mã người nộp thuế"
        label="Mã người nộp thuế"
        :isRequired="true"
        id="employeeCode"
      />
      <MSelectBox
        :items="identityTypes"
        v-model="employee.IdentifyKindOfPaperID"
        label="Loại giấy tờ"
        id="identityType"
      />
      <MTextBox
        v-model="employee.FullName"
        placeholder="Nhập họ tên"
        label="Họ tên"
        :isRequired="true"
        id="fullName"
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
        id="identityNumber"
      />
      <MDateBox
        v-model="employee.DateOfBirth"
        placeholder="__/__/____"
        label="Ngày sinh"
        id="dateOfBirth"
      />
      <MDateBox
        v-model="employee.IdentityDate"
        placeholder="__/__/____"
        label="Ngày cấp"
        :isRequired="isTaxCodeEmpty"
        customEmptyErrMsg="Không nhập mã số thuế thì ngày cấp không được bỏ trống"
        id="identityDate"
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
        id="identityPlace"
      />
      <MTextBox
        v-model="employee.PhoneNumber"
        placeholder="Nhập số điện thoại"
        label="Số điện thoại"
        id="phoneNumber"
      />
      <MSelectBox
        :items="countryList"
        v-model="employee.NationalityID"
        label="Quốc tịch"
        id="nationality"
      />

      <MTextBox
        v-model="employee.Email"
        placeholder="Nhập email"
        label="Email"
        :validationRules="[validateEmail]"
        id="email"
      />
      <MSelectBox
        :items="contractTypes"
        v-model="employee.ContractTypeID"
        label="Loại hợp đồng"
        id="contractType"
      />
      <div class="row ma-0 pa-0">
        <span class="text-lg-subheader">Hộ khẩu thường trú</span>
      </div>
      <MSelectBox
        :items="countryList"
        v-model="employee.NativeCountryCode"
        label="Quốc gia"
        id="nativeCountry"
      />
      <MSelectBox
        :items="locationsList"
        v-model="employee.NativeWardCode"
        :valueExpr="'LocationID'"
        :displayExpr="'LocationName'"
        label="Xã phường"
        id="nativeWard"
      />
      <MSelectBox
        :items="provincesList"
        v-model="employee.NativeProvinceCode"
        valueExpr="ProvinceID"
        displayExpr="LocationName"
        label="Tỉnh/thành phố"
        id="nativeProvince"
      />
      <MTextBox
        v-model="employee.NativeAddress"
        placeholder="Nhập số nhà, đường/phố, thôn/xóm"
        label="Số nhà, đường/phố, thôn/xóm"
        id="nativeAddress"
      />
      <MSelectBox
        :items="districtsList"
        v-model="employee.NativeDistrictCode"
        valueExpr="DistrictID"
        displayExpr="LocationName"
        label="Quận/huyện"
        id="nativeDistrict"
      />
      <MTextBox
        v-model="nativeAutoAddress"
        label="Địa chỉ"
        :isReadOnly="true"
        id="nativeAutoAddress"
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
        id="currentCountry"
      />
      <MSelectBox
        :items="currentLocationsList"
        :isReadOnly="IsSameAddress"
        v-model="employee.CurrentWardCode"
        :valueExpr="'LocationID'"
        :displayExpr="'LocationName'"
        label="Xã phường"
        id="currentWard"
      />
      <MSelectBox
        :items="provincesList"
        :isReadOnly="IsSameAddress"
        v-model="employee.CurrentProvinceCode"
        valueExpr="ProvinceID"
        displayExpr="LocationName"
        label="Tỉnh/thành phố"
        id="currentProvince"
      />
      <MTextBox
        v-model="employee.CurrentAddress"
        placeholder="Nhập số nhà, đường/phố, thôn/xóm"
        :isReadOnly="IsSameAddress"
        label="Số nhà, đường/phố, thôn/xóm"
        id="currentAddress"
      />
      <MSelectBox
        :items="currentDistrictsList"
        :isReadOnly="IsSameAddress"
        v-model="employee.CurrentDistrictCode"
        valueExpr="DistrictID"
        displayExpr="LocationName"
        label="Quận/huyện"
        id="currentDistrict"
      />
      <MTextBox
        v-model="currentAutoAddress"
        label="Địa chỉ"
        :isReadOnly="true"
        id="currentAutoAddress"
      />
      <span class="text-lg-h3" id="job">THÔNG TIN CÔNG VIỆC</span>
      <MTreeList
        label="Bộ phận/phòng ban"
        id="department"
        v-model="employee.DepartmentID"
        :width="420"
      />
      <!-- <MTextBox
        v-model="employee.DepartmentName"
        label="Bộ phận/phòng ban"
        :isReadOnly="true"
        :isRequired="true"
        id="department"
      /> -->
      <MDateBox
        v-model="employee.ProbationDate"
        placeholder="__/__/____"
        label="Ngày học việc"
        id="probationDate"
      />
      <MSelectBox
        :items="positionsList"
        v-model="employee.JobPositionID"
        label="Vị trí công việc"
        :isRequired="true"
        id="jobPosition"
      />
      <MDateBox
        v-model="employee.HireDate"
        placeholder="__/__/____"
        label="Ngày thử việc"
        id="hireDate"
      />
      <MTextBox label="Chức danh" :isReadOnly="true" />
      <MDateBox
        v-model="employee.ReceiveDate"
        placeholder="__/__/____"
        label="Ngày chính thức"
        id="receiveDate"
      />
      <MSelectBox
        :items="workStatusesList"
        v-model="employee.WorkStatus"
        label="Trạng thái làm việc"
        id="workStatus"
      />
      <MDateBox
        v-model="employee.ResignationDate"
        placeholder="__/__/____"
        label="Ngày nghỉ việc"
        id="resignationDate"
      />
      <div
        class="row mt-11 pb-6 d-flex pl-3 align-center pr-3 text-lg-h3"
        style="justify-content: space-between"
      >
        <span class="text-lg-h3" id="family">THÔNG TIN GIA ĐÌNH</span>
        <ButtonWithIcon
          type="add--blue"
          title="Thêm"
          :onClick="handleAddNewRelative"
        />
      </div>
    </form>
    <section
      class="misa-empty-data misa-background-footer-dialog text-lg-body-2 mt-4 d-flex justify-center align-center"
    >
      <span v-if="listRelativesFilter.length == 0" class="no-info"
        >Chưa có thông tin gia đình</span
      >
      <MViewTable
        :columns="familiMemberTableHeader"
        :dataSource="listRelativesFilter"
        v-else
      >
        <template #IsDependent="{ value }">
          <div class="text-center dx-template-wrapper" v-if="value == 1">
            <div class="mi-check" style="margin: 0px auto"></div>
          </div>
          <div v-else></div>
        </template>
      </MViewTable>
    </section>

    <!-- Popup -->
    <DxPopup
      :show-title="true"
      :title="popupTitle"
      :width="1246"
      :drag-enabled="false"
      position="center"
      :visible="popupVisible"
      @hidden="this.handleCloseFormPopup"
      :toolbar-items="toolbarItems"
    >
      <PopUp ref="popupRef" />
    </DxPopup>
    <!-- Popup -->
  </div>
</template>

<script>
import { DxPopup } from "devextreme-vue/popup";
import ButtonWithIcon from "@/components/base/button/ButtonWithIcon.vue";
import MTreeList from "@/components/base/tree-list/MTreeList.vue";
import { mapState, mapActions } from "vuex";
import { getEmployeeById, addNewEmployee } from "@/helpers/api";

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
import { EDIT_MODE, POPUP_FORM_MODE } from "@/helpers/enums.js";
import { treeProducts } from "@/components/base/tree-list/data";
import EmployeeService from "@/service/EmployeeService";
import RelativeService from "@/service/RelativeService";
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
    MTreeList,
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
    "employee.ContractTypeID": function (newContractTypeId) {
      this.employee.ConstractTypeName = contractTypes.find(
        (contractType) => contractType.id === newContractTypeId
      ).text;
    },
    "employee.JobPositionID": function (newPositionCode) {
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
  computed: {
    ...mapState("global", ["popupVisible", "isLoading"]),
    ...mapState("employee", [
      "newEmployeeCode",
      "formMode",
      "currentEmployeeId",
    ]),
    ...mapState("relative", ["editMode", "listRelatives", "popupFormMode"]),
    listRelativesFilter() {
      return this.listRelatives.filter(
        (relative) => relative.EditMode !== EDIT_MODE.DELETE
      );
    },
    popupTitle() {
      switch (this.editMode) {
        case EDIT_MODE.ADD:
          return "Thêm mới thành viên gia đình";
        case EDIT_MODE.EDIT:
          return "Sửa thông tin thành viên gia đình";
        default:
          return "Thêm mới thành viên gia đình";
      }
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
  data() {
    return {
      // Thông tin nhân viên
      employee: {
        EmployeeTypeID: 1,
        EmployeeTypeName: "",
        IdentifyKindOfPaperID: 1,
        IdentifyKindOfPaperName: "",
        DateOfBirth: null,
        TaxCode: "",
        EmployeeCode: "",
        FullName: "",
        IdentityDate: null,
        IdentityNumber: "",
        IdentityPlace: "",
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
        NationalityName: "",
        NativeCountryName: "",
        NativeProvinceName: "",
        NativeDistrictName: "",
        NativeWardName: "",
        NativeAddress: null,
        CurrentCountryCode: 1,
        CurrentCountryName: "Việt Nam",
        CurrentProvinceCode: null,
        CurrentDistrictCode: null,
        CurrentWardCode: null,
        CurrentProvinceName: null,
        CurrentDistrictName: null,
        CurrentWardName: null,
        CurrentAddress: null,
        Email: null,
        DepartmentID: null,
        DepartmentName: "",
        ProbationDate: null,
        HireDate: null,
        ReceiveDate: null,
        ResignationDate: null,
        JobPositionID: "",
        JobPositionName: "",
        WorkStatus: 1,
        WorkStatusName: "",
        ListRelatives: this.listRelatives,
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
      treeProducts,
      // Data source cho các select box

      taxCodeRef: null,

      items,

      // Nếu địa chỉ thường trú và hiện tại giống nhau
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
                  onClick: this.handleCloseFormPopup,
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

  methods: {
    ...mapActions("global", [
      "openFormPopup",
      "closeFormPopup",
      "showToast",
      "showNotification",
      "hideToast",
      "showLoading",
      "hideLoading",
    ]),
    ...mapActions("employee", ["getNewEmployeeCode", "setFormMode"]),
    ...mapActions("relative", [
      "setEditMode",
      "setCurrentRelative",
      "setRelative",
      "setListRelative",
      "deleteRelative",
      "setPopupFormMode",
    ]),
    /**
     * Thực hiện validate tất cả các component con
     * @author dgbao (19/08/2023)
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
        this.employee.DepartmentName = treeProducts.find(
          (item) => item.ID === this.employee.DepartmentID
        )?.name;
        this.showLoading();
        // Thực hiện gọi API thêm mới nhân viên

        if (this.formMode == "add") {
          const result = await addNewEmployee(this.employee);

          if (result) {
            this.$router.push("/tax");
            this.hideLoading();
            this.setFormMode("");
            this.showToast({
              type: "success",
              title: "Thêm mới thành công",
            });
          } else {
            this.hideLoading();
            this.showNotification({
              type: "error",
              title: "Cảnh báo",
              rawHtml: "<span>Mã nhân viên đã tồn tại trong hệ thống</span>",
            });
          }
          // Thực hiện gọi API chỉnh sửa nhân viên
        } else if (this.formMode == "edit") {
          let editedEmployee = {
            ...this.employee,
            ListRelatives: this.listRelatives.filter(
              (relative) =>
                relative.EditMode !== null || relative.EditMode !== undefined
            ),
          };

          editedEmployee.ListRelatives.forEach((item) => {
            if (item.EditMode == EDIT_MODE.ADD) {
              delete item.RelativeInformationID;
            }
          });

          const result = await EmployeeService.put(
            this.currentEmployeeId,
            editedEmployee
          );

          if (result.data) {
            this.$router.push("/tax");
            this.hideLoading();
            this.showToast({
              type: "success",
              title: "Cập nhật thành công",
            });
          } else {
            this.hideLoading();
            this.showToast({
              type: "error",
              title: result.UserMsg,
            });
          }
        }

        setTimeout(() => {
          this.hideToast();
        }, 2200);
      } else {
        console.log("Form is invalid");
      }
    },
    /**
     * Thêm thành viên gia đình
     * @author dgbao (19/08/2023)
     */
    async handleAddFamilyMember() {
      let popup = this.$refs.popupRef;
      let memberData = popup.validate();

      if (!memberData) {
        return;
      }

      // Lấy dữ liệu từ popup thông qua ref

      if (this.editMode === EDIT_MODE.ADD) {
        // Thêm vào employee data để chuẩn bị push lên server
        memberData.EmployeeID = this.employee.EmployeeID;
        console.log(this.employee);
        this.employee.ListRelatives.push(memberData);
        this.setRelative({
          RelationshipID: "",
          RelationshipName: "",
          FullName: "",
          DateOfBirth: null,
          NationalityID: 1,
          NationalityName: "",
          Gender: 0,
          GenderName: null,
          IdentifyKindOfPaperID: 1,
          IdentifyKindOfPaperName: "",
          IdentityNumber: "",
          IdentityDate: null,
          IdentityPlaceID: 1,
          IdentityPlaceName: null,
          TaxCode: "",
          DependentNumber: "",
          BirthCertificationIssueDate: null,
          CountryID: 2,
          CountryName: "",
          NumberBook: "",
          ProvinceID: null,
          DistrictID: null,
          WardID: null,
          IsDependent: 0,
          FamilyPermanentAddressProvinceID: null,
          FamilyPermanentAddressDistrictID: null,
          FamilyPermanentAddressWardID: null,
          FamilyPermanentAddressStreetHouseNumber: "",
          FamilyCurrentProvinceID: null,
          FamilyCurrentDistrictID: null,
          FamilyCurrentWardID: null,
          FamilyCurrentStreetHouseNumber: "",
          Description: "",
          DeductionStartDate: null,
          DeductionEndDate: null,
          CreatedDate: null,
          CreatedBy: null,
          ModifiedDate: null,
          ModifiedBy: null,
          RelativeInformationID: null,
        });

        this.employee.ListRelatives.forEach((item) => {
          if (item?.IsDependent) {
            item.IsDependent = 1;
          } else {
            item.IsDependent = 0;
          }
        });

        if (this.popupFormMode === POPUP_FORM_MODE.DIRECT) {
          await RelativeService.post(memberData);
        }

        this.closeFormPopup();
        this.showToast({
          type: "success",
          title: "Thêm mới thông tin gia đình người nộp thuế thành công",
        });
      } else if (this.editMode === EDIT_MODE.EDIT) {
        if (this.popupFormMode === POPUP_FORM_MODE.DIRECT) {
          await RelativeService.put(
            memberData.RelativeInformationID,
            memberData
          );
          this.closeFormPopup();
          this.showToast({
            type: "success",
            title: "Cập nhật thông tin gia đình người nộp thuế thành công",
          });
        } else {
          this.employee.ListRelatives.forEach((item) => {
            if (
              item.RelativeInformationID === memberData.RelativeInformationID
            ) {
              item = memberData;
            }
          });
          this.closeFormPopup();
          this.showToast({
            type: "success",
            title: "Cập nhật thông tin gia đình người nộp thuế thành công",
          });
        }
      }

      setTimeout(() => {
        this.hideToast();
      }, 2200);
    },
    // Danh sách các validation rule
    /**
     * Kiểm tra value chỉ được chứa các số
     * @param {String} value
     * @author dgbao (19/08/2023)
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
     * @author dgbao (19/08/2023)
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
    /**
     * Mở popup thêm thành viên gia đình
     * @author dgbao (19/08/2023)
     */
    handleAddNewRelative() {
      if (this.formMode == "view") {
        this.setPopupFormMode(POPUP_FORM_MODE.DIRECT);
        this.setEditMode(EDIT_MODE.ADD);
        this.openFormPopup();
      } else {
        this.setEditMode(EDIT_MODE.ADD);
        this.openFormPopup();
      }
    },
    /**
     * Đóng popup
     * @authỏ dgbao (28/08/2023)
     */
    handleCloseFormPopup() {
      this.setPopupFormMode(POPUP_FORM_MODE.INDIRECT);
      this.setRelative({
        RelationshipID: "",
        RelationshipName: "",
        FullName: "",
        DateOfBirth: null,
        NationalityID: 1,
        NationalityName: "",
        Gender: 0,
        GenderName: null,
        IdentifyKindOfPaperID: 1,
        IdentifyKindOfPaperName: "",
        IdentityNumber: "",
        IdentityDate: null,
        IdentityPlaceID: 1,
        IdentityPlaceName: null,
        TaxCode: "",
        DependentNumber: "",
        BirthCertificationIssueDate: null,
        CountryID: 2,
        CountryName: "",
        NumberBook: "2",
        ProvinceID: null,
        DistrictID: null,
        WardID: null,
        IsDependent: 0,
        FamilyPermanentAddressProvinceID: null,
        FamilyPermanentAddressDistrictID: null,
        FamilyPermanentAddressWardID: null,
        FamilyPermanentAddressStreetHouseNumber: "",
        FamilyCurrentProvinceID: null,
        FamilyCurrentDistrictID: null,
        FamilyCurrentWardID: null,
        FamilyCurrentStreetHouseNumber: "",
        Description: "",
        DeductionStartDate: null,
        DeductionEndDate: null,
        CreatedDate: null,
        CreatedBy: null,
        ModifiedDate: null,
        ModifiedBy: null,
        RelativeInformationID: null,
      });
      this.closeFormPopup();
      // if (this.formMode == "view") {
      //   this.setPopupFormMode(POPUP_FORM_MODE.DIRECT);
      //   this.setEditMode(EDIT_MODE.VIEW);
      // } else {
      //   this.setEditMode(EDIT_MODE.VIEW);
      // }
    },
  },

  created() {
    /**
     * Lấy mã nhân viên mới
     * @author dgbao (19/08/2023)
     */
    const getNewEmployeeCode = async () => {
      let response = await EmployeeService.getNewCode();
      this.employee.EmployeeCode = response.data;
    };
    /**
     * Lấy thông tin chi tiết nhân viên
     * @author dgbao (19/08/2023)
     */
    const getEmployeeDetails = async (id) => {
      let employeeDetails = await getEmployeeById(id);

      this.employee = employeeDetails;
      this.setListRelative(employeeDetails?.ListRelatives);

      // set list relative trong store
    };

    this.showLoading();
    if (this.formMode === "add") {
      getNewEmployeeCode();
    } else if (this.formMode === "view") {
      getEmployeeDetails(this.currentEmployeeId);
    } else if (this.formMode === "edit") {
      getEmployeeDetails(this.currentEmployeeId);
    }
    this.hideLoading();
  },
};
</script>

<style lang="scss" scoped>
@import url(../../assets/style/view/PersonalTaxForm/FormDetails.scss);
</style>
