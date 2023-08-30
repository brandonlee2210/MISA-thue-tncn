/**
 *  Format lại ngày tháng năm
 * @param {*} originalDateString
 * @returns {string} dd/mm/yyyy
 */
export const formatDate = (originalDateString) => {
  if (!originalDateString) return "";

  const originalDate = new Date(originalDateString);
  const day = addZeroPrefix(originalDate.getDate());
  const month = addZeroPrefix(originalDate.getMonth() + 1);
  const year = originalDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

/**
 * Thêm số 0 vào trước các số có 1 chữ số
 * @param {*} value
 */
function addZeroPrefix(value) {
  return value < 10 ? `0${value}` : value;
}

/**
 * Chuyển đổi ngày tháng năm từ string sang Date
 * @param {*} dateString
 */
export const convertToDateTime = (dateString) => {
  if (typeof dateString === "string") {
    var dateParts = dateString.split("/");

    var jsDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    return jsDate;
  }
};
