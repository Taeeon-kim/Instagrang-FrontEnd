// 이메일 확인 체크
export const checkEmail = (email) => {
  let regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/; // /^(.+)@(.+)$/;
  return regEmail.test(email);
};

// export const checkEmail = (email) => {
//   let regEmail = "^(.+)@(.+)$";
//   return regEmail.test(email);
// };

//  일반적인 사용자 이름 체크
// export const emailCheck = (email) => {
//   let _reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/;
//   return _reg.test(email);
// };

export const checkName = (userName) => {
  var regName = /^.{4,15}$/;
  return regName.test(userName);
};

// 사용자 이름 체크

export const checkPassword = (pwd) => {
  // 특수문자 영문, 숫자 포함, 최소 8자 이상이어야 합니다.
  var regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^\\w\\s]).{8,25}$/;
  return regExp.test(pwd);
};
