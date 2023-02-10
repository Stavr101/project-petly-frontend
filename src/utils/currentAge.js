export const currentAge = (date) => {
  const dif = Date.now() - new Date(date);
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(dif / day);
  const months = Math.floor(days / 30.4);
  const years = months / 12;
  const transformedYear = Number(years.toString().split(".")[0]);
  const restDivision = years.toString().split(".")[1];
  const transformedMonth = restDivision
    ? Math.floor(Number(`0.${restDivision}` * 12))
    : null;

  if (transformedYear > 0) {
    if (transformedMonth) {
      return `${transformedYear} ${transformedYear === 1 ? "year" : "years"}`;
    }
    return `${transformedYear} ${transformedYear === 1 ? "year" : "years"}`;
  }

  if (transformedMonth) {
    return `${transformedMonth} ${transformedMonth === 1 ? "month" : "months"}`;
  }
  return "< 1 month";
};
