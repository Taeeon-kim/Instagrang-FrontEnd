export const emailCheck = (email) => {
  //  일반적인 이메일 체크
  let _reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/;
  return _reg.test(email);
};

export const checkPassword = (pwd) => {
  //  4 ~ 10자 영문, 숫자 조합
  var regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/;
  return regExp.test(pwd);
};
