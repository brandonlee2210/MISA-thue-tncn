import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

import { EDIT_MODE } from "@/helpers/enums";

const state = {
  editMode: EDIT_MODE.ADD,
  relative: {
    RelationshipID: null,
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
  },
  listRelatives: [],
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
