import i18n from "i18next";

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
      return `${transformedYear} ${transformedYear === 1 ? i18n.t('notices.year') : 5 > transformedYear ? i18n.t('notices.years2') : i18n.t('notices.years')}`;
    }
    return `${transformedYear} ${transformedYear === 1 ? i18n.t('notices.year') : i18n.t('notices.years')}`;
  }

  if (transformedMonth) {
    return `${transformedMonth} ${transformedMonth === 1 ? i18n.t('notices.month') : 5 > transformedMonth ? i18n.t('notices.months2') : i18n.t('notices.months')}`;
  }
  return i18n.t('notices.less');
};
