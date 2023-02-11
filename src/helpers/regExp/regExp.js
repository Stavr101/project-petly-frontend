///                   AUTH
const pwd = /^[\S]{7,32}$/;
const location = /[a-zA-Z]+, [a-zA-Z]+/i;
const mobile = /^\+380\d{9}$/;
const email = /^(?=.{10,63}$)([A-Za-z0-9._-]{2,}@[A-Za-z0-9._-]{2,})$/;
///
const bdayRegexp =
  /^(0?[1-9]|[12][0-9]|3[01])[\.\-](0?[1-9]|1[012])[\.\-]\d{4}$/;
const nameRegexp = /^[a-zA-Z]+$/;
const address = /^[a-zA-Z]+$/;
const phoneRegexpUser =
  /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$)/;

export const regExp = {
  pwd,
  location,
  mobile,
  email,
  bdayRegexp,
  nameRegexp,
  address,
  phoneRegexpUser,
};
