const pwd = /^[A-Za-z0-9]*$/;
const location = /[a-zA-Z]+, [a-zA-Z]+/i;
const mobile = /^\+[1-9]{1}[0-9]{3,14}$/;
const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const bdayRegexp =
  /^(0?[1-9]|[12][0-9]|3[01])[\.\-](0?[1-9]|1[012])[\.\-]\d{4}$/;
// /(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]/;
//   /^(0?[1-9]|[12][0-9]|3[01])[\.\-](0?[1-9]|1[012])[\.\-]\d{4}$/;
const nameRegexp = /^[a-zA-Z]+$/;
const address = /^[a-zA-Z]+$/;
const phoneRegexpUser =
  /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$)/;
// /^\+380\d{3}\d{2}\d{2}\d{2}$/;

// /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;

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

// /^[A-Za-zА-Яа-яїЇєЄ']+(?:[\s-][A-Za-zА-Яа-яїЇєЄ']+)*\s[A-Za-zА-Яа-яїЇєЄ']+(?:[\s-][A-Za-zА-Яа-яїЇєЄ']+)*$/
