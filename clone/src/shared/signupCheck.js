// 이메일 확인 체크
export const checkEmail = (email) => {
  let regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  return regEmail.test(email);
};

//  일반적인 사용자 이름 체크
// export const emailCheck = (email) => {
//   let _reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/;
//   return _reg.test(email);
// };

export const checkPassword = (pwd) => {
  //  4 ~ 10자 영문, 숫자 조합
  var regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/;
  return regExp.test(pwd);
};
