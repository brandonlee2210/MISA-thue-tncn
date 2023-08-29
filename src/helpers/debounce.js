/**
 * hàm thực hiện debounce sau 1 khoản thời gian
 * @author dgbao (25/08/2023)
 * @param {*} fn hàm thực hiện hành động
 * @param {delay} delay thời gian delay
 */
export function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
