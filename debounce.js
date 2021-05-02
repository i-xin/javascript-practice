const debounce = (fn, time, immediate) => {
  let timeout;
  return (...args) => {
    const later = function () {
      if (!immediate) {
        timeout = null;
        fn.call(this, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, time);

    if (callNow) {
      fn.call(this, args);
    }
  };
};
