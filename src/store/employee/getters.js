const employees = (state) => state.employees;
const checkedEmployees = (state) => state.checkedEmployees;

const transformedFilterData = (state) => {
  const { FilterDate, ...filterData } = state.filterData;
  const transformedData = { ...filterData };

  if (FilterDate === "HireDate") {
    transformedData.HireDateStart = state.startFilterDate;
    transformedData.HireDateEnd = state.endFilterDate;
    transformedData.ReceiveDateStart = null;
    transformedData.ReceiveDateEnd = null;
  } else if (FilterDate === "ReceiveDate") {
    transformedData.ReceiveDateStart = state.startFilterDate;
    transformedData.ReceiveDateEnd = state.endFilterDate;
    transformedData.HireDateStart = null;
    transformedData.HireDateEnd = null;
  }

  return transformedData;
};

export default {
  employees,
  checkedEmployees,
  transformedFilterData,
};
