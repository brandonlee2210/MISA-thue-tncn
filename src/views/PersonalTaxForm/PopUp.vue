<template>
  <form class="form popup">
    <MTextBox
      v-model="relative.FullName"
      placeholder="Nhập họ tên"
      label="Họ tên thành viên"
      :isRequired="true"
    />
    <MSelectBox
      :items="countryList"
      v-model="relative.NationalityID"
      label="Quốc tịch"
    />
    <MSelectBox
      :items="relationshipsTypes"
      v-model="relative.RelationshipID"
      label="Quan hệ"
      :isRequired="true"
    />
    <MSelectBox
      :items="identityTypes"
      v-model="relative.IdentifyKindOfPaperID"
      label="Loại giấy tờ"
    />
    <MDateBox
      v-model="relative.DateOfBirth"
      placeholder="__/__/____"
      label="Ngày sinh"
    />
    <MTextBox
      v-model="relative.IdentityNumber"
      placeholder="Nhập số CMND/CCCD/Hộ chiếu"
      label="Số CMND"
      :validationRules="[validateNumberInput]"
      maxlength="12"
    />
    <MRadioButton
      :options="[
        { value: 0, text: 'Nam' },
        { value: 1, text: 'Nữ' },
      ]"
      v-model="relative.Gender"
      label="Giới tính"
    />
    <MDateBox
      v-model="relative.IdentityDate"
      placeholder="__/__/____"
      label="Ngày cấp"
    />
    <MTextBox
      v-model="relative.TaxCode"
      placeholder="Nhập mã số thuế"
      label="Mã số thuế"
    />
    <MSelectBox
      :items="provincesList"
      v-model="relative.IdentityPlaceID"
      valueExpr="ProvinceID"
      displayExpr="LocationName"
      label="Nơi cấp"
    />

    <div class="row mt-4 pl-3 header-dialog">THÔNG TIN KHAI SINH</div>
    <MTextBox
      v-model="relative.DependentNumber"
      placeholder="Nhập số khai sinh"
      label="Số khai sinh"
    />
    <MSelectBox
      :items="provincesList"
      v-model="relative.ProvinceID"
      valueExpr="ProvinceID"
      displayExpr="LocationName"
      label="Tỉnh/thành phố"
      placeholder="Chọn/nhập tỉnh/thành phố"
    />

    <MTextBox
      v-model="relative.NumberBook"
      placeholder="Nhập quyển số"
      label="Quyển số"
    />
    <MSelectBox
      :items="districtsList"
      v-model="relative.DistrictID"
      valueExpr="DistrictID"
      displayExpr="LocationName"
      label="Quận/huyện"
      placeholder="Chọn/nhập quận/huyện"
    />

    <MDateBox
      v-model="relative.BirthCertificationIssueDate"
      placeholder="__/__/____"
      label="Ngày cấp giấy khai sinh"
    />
    <MSelectBox
      :items="locationsList"
      v-model="relative.WardID"
      :valueExpr="'LocationID'"
      :displayExpr="'LocationName'"
      label="Xã phường"
      placeholder="Chọn/nhập xã/phường"
    />

    <MSelectBox
      :items="countryList"
      v-model="relative.CountryID"
      label="Quốc gia"
    />
    <div class="row mt-4 pl-3 header-dialog">HỘ KHẨU THƯỜNG TRÚ</div>
    <MSelectBox
      :items="provincesList"
      v-model="relative.FamilyPermanentAddressProvinceID"
      valueExpr="ProvinceID"
      displayExpr="LocationName"
      label="Tỉnh/thành phố"
    />

    <MSelectBox
      :items="permanentLocationsList"
      v-model="relative.FamilyPermanentAddressWardID"
      :valueExpr="'LocationID'"
      :displayExpr="'LocationName'"
      label="Xã phường"
    />

    <MSelectBox
      :items="permanentDistrictsList"
      v-model="relative.FamilyPermanentAddressDistrictID"
      valueExpr="DistrictID"
      displayExpr="LocationName"
      label="Quận/huyện"
    />
    <MTextBox
      v-model="relative.StreatHouseNumber"
      placeholder="Nhập số nhà, đường/phố, thôn/xóm"
      label="Số nhà, đường/phố, thôn/xóm"
    />
    <div class="row mt-4 pl-3 header-dialog">CHỖ Ở HIỆN NAY</div>
    <MSelectBox
      :items="provincesList"
      v-model="relative.FamilyCurrentProvinceID"
      valueExpr="ProvinceID"
      displayExpr="LocationName"
      label="Tỉnh/thành phố"
      placeholder="Chọn/nhập tỉnh/thành phố"
    />
    <MSelectBox
      :items="currentLocationsList"
      v-model="relative.FamilyCurrentWardID"
      :valueExpr="'LocationID'"
      :displayExpr="'LocationName'"
      placeholder="Chọn/nhập xã/phường"
      label="Xã phường"
    />
    <MSelectBox
      :items="currentDistrictsList"
      v-model="relative.FamilyCurrentDistrictID"
      valueExpr="DistrictID"
      displayExpr="LocationName"
      placeholder="Chọn/nhập quận/huyện"
      label="Quận/huyện"
    />
    <MTextBox
      v-model="relative.FamilyCurrentStreetHouseNumber"
      placeholder="Nhập số nhà, đường/phố, thôn/xóm"
      label="Số nhà, đường/phố, thôn/xóm"
    />

    <div class="row mt-4 pl-3 header-dialog">THÔNG TIN GIẢM TRỪ</div>
    <MCheckbox label="Là người phụ thuộc" v-model="relative.IsDependent" />
    <MDateBox placeholder="__/__/____" label="Giảm trừ từ tháng" />
    <MTextarea
      v-model="relative.Description"
      placeholder="Nhập ghi chú"
      label="Ghi chú"
    />
    <MDateBox placeholder="__/__/____" label="Giảm trừ đến tháng" />
  </form>
</template>

<script>
import MTextBox from "@/components/base/input/MTextBox.vue";
import MSelectBox from "@/components/base/select-box/MSelectBox.vue";
import MDateBox from "@/components/base/input/MDateBox.vue";
import MRadioButton from "@/components/base/radio/MRadioButton.vue";
import MCheckbox from "@/components/base/input/MCheckbox.vue";
import MTextarea from "@/components/base/input/MTextarea.vue";

import {
  employeeTypes,
  workStatusesList,
  identityTypes,
  contractTypes,
  countryList,
  locationsList,
  provincesList,
  districtsList,
  positionsList,
  relationshipsTypes,
  items,
} from "./data.js";

export default {
  components: {
    MTextBox,
    MSelectBox,
    MDateBox,
    MRadioButton,
    MCheckbox,
    MTextarea,
  },
  watch: {
    /* Theo dõi khi tỉnh và huyện thay đổi thì lọc lại theo đúng ID */
    "relative.ProvinceID": function (newProvinceCode) {
      this.districtsList = districtsList.filter(
        (location) => location.ProvinceID === newProvinceCode
      );
    },
    "relative.DistrictID": function (newDistrictCode) {
      this.locationsList = locationsList.filter(
        (location) => location.DistrictID === newDistrictCode
      );
    },
    "relative.FamilyPermanentAddressProvinceID": function (newProvinceCode) {
      this.permanentDistrictsList = districtsList.filter(
        (location) => location.ProvinceID === newProvinceCode
      );
    },
    "relative.FamilyPermanentAddressDistrictID": function (newDistrictCode) {
      this.permanentLocationsList = locationsList.filter(
        (location) => location.DistrictID === newDistrictCode
      );
    },
    "relative.FamilyCurrentProvinceID": function (newProvinceCode) {
      this.currentDistrictsList = districtsList.filter(
        (location) => location.ProvinceID === newProvinceCode
      );
    },
    "relative.FamilyCurrentDistrictID": function (newDistrictCode) {
      this.currentLocationsList = locationsList.filter(
        (location) => location.DistrictID === newDistrictCode
      );
    },
  },
  data() {
    return {
      relative: {
        UnofficialStaffRelationshipID: 32942,
        EmployeeID: 309393,
        FullName: "",
        DateOfBirth: null,
        NationalityID: 1,
        NationalityName: "Việt Nam",
        TaxCode: "",
        RelationshipID: 1,
        RelationshipName: "Con gái",
        IdentifyKindOfPaperID: 1,
        IdentifyKindOfPaperName: "CMND",
        Gender: 1,
        GenderName: "Nam",
        IdentityNumber: null,
        IdentityDate: null,
        IdentityPlaceID: null,
        IdentityPlaceName: null,
        DependentNumber: "",
        NumberBook: "",
        BirthCertificationIssueDate: null,
        CountryID: "VN",
        CountryName: "Việt Nam",
        ProvinceID: null,
        ProvinceName: null,
        DistrictID: null,
        DistrictName: null,
        WardID: null,
        WardName: null,
        StreatHouseNumber: "",
        IsDependent: false,
        DeductionStartDate: null,
        DeductionEndDate: null,
        Description: null,
        FamilyPermanentAddressProvinceID: null,
        FamilyPermanentAddressProvinceName: null,
        FamilyPermanentAddressDistrictID: null,
        FamilyPermanentAddressDistrictName: null,
        FamilyPermanentAddressWardName: null,
        FamilyPermanentAddressWardID: null,
        FamilyPermanentAddressStreetHouseNumber: "",
        FamilyCurrentProvinceID: null,
        FamilyCurrentProvinceName: null,
        FamilyCurrentDistrictID: null,
        FamilyCurrentDistrictName: null,
        FamilyCurrentWardID: null,
        FamilyCurrentWardName: null,
        FamilyCurrentStreetHouseNumber: "",
        State: 0,
      },
      employeeTypes,
      relationshipsTypes,
      workStatusesList,
      identityTypes,
      contractTypes,
      countryList,
      locationsList: null,
      provincesList,
      districtsList: null,
      positionsList,
      items,
      permanentDistrictsList: null,
      permanentLocationsList: null,
      currentDistrictsList: null,
      currentLocationsList: null,
    };
  },
  methods: {
    /**
     * Thực hiện validate tất cả các component con
     * Created by: dgbao (19/08/2023)
     */
    validate() {
      let isValid = true;

      // Lặp qua từng component MyTextBox và validate
      this.$children.forEach((child) => {
        if (
          child.$options.name === "MTextBox" ||
          child.$options.name === "MSelectBox" ||
          child.$options.name === "MDateBox"
        ) {
          child.validate(); // Call the validate method of MyTextBox component

          if (!child.isValid) {
            isValid = false;
          }
        }
      });

      if (isValid) {
        console.log("Form is valid, saving data...");
      } else {
        console.log("Form is invalid");
      }
    },
    /**
     * Kiểm tra value chỉ được chứa các số
     * @param {String} value
     * Created by: dgbao (19/08/2023)
     */
    validateNumberInput(value) {
      let regex = /^[0-9]*$/;

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
     * Lấy ra dữ liệu các thành viên trong gia đình
     * Created by: dgbao (19/08/2023)
     */
    getMemberData() {
      return this.relative;
    },
    handleAddFamilyMember() {},
  },
};
</script>

<style lang="scss" scoped>
@import url(../../assets/style/view/PersonalTaxForm/FormDetails.scss);

.header-dialog {
  font-weight: 450;
  color: #212121;
  font-size: 16px !important;
  line-height: 24px !important;
  cursor: default;
  letter-spacing: unset !important;
}

.form.popup {
  .checkbox-group {
    .item__label {
      width: 102px !important;
    }
    .item__input {
      width: 35%;
      padding-top: 6px;
    }
  }
}
</style>
