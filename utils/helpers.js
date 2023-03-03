module.exports = {
  //   ifCond: (v1, v2, options) => {
  //     if (v1 === v2) {
  //       return options.fn(this);
  //     }
  //     return options.inverse(this);
  //   },
  format_date: (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    const result = `${month}/${day}/${year}`;
    return result;
  },
  format_date_onlyHourMin: (date) => {
    // var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();

    const result = `${hour}:${minutes}`;
    return result;
  },
};
