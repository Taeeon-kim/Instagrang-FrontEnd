# 보여줘 홈즈 

<center>
<img src="https://github.com/Taeeon-kim/findhomes/blob/75ce477b8f95869e34ec39ed6b869aedf2b92902/findhome/public/main_pic.png" width="1000px">
</center>

오늘은 또 어떤집을 찾아야하나...  
걱정마세요! 실시간으로 유저들이 원하는 집을 공유할수있는 사이트 구해줘홈즈!😁

**Link**  
http://youngble.shop/


**Notion**  
https://show-me-homes.notion.site/show-me-homes/3-09d2ce7133a249b18e96397816ecb82c

<br>

## 1. 제작 기간 & 팀원 소개

- 2021년 12월 6일 ~ 2021년 12월 11일
- 5인 1조 팀 프로젝트

**FRONT END**

- 공통 : CSS(styled-components)
- 윤석준 : 메인리스트화면 / 게시물작성페이지 등
- 김태언 : 회원가입 / 로그인 / 유저 토큰 인증 / 상세페이지 + 수정/삭제 등

**BACK END**

 https://github.com/KIMHYEONGJIN5925/homes-BE
 
- 배은지 : 로그인, 회원가입, 인증, 이미지 파일 등록(s3)
- 김형진 : 프로젝트 셋팅 및 배포(GIT), 댓글 CRUD, AWS 업로드
- 이상협 : 게시글 CRUD, 이미지 파일 수정(s3), 비밀번호 암호화

<br>

## 2. 사용 기술
`Front-end`

- React
- Redux
- styled-components
- axios


`Back-end`

- Node.js


`deploy`

- Front-end : AWS S3
- Back-end : AWS EC2 (Ubuntu)

<br>

## 3. 실행화면

Youtube Link : https://youtu.be/AKAIshuerYk

<br>

## 4. 핵심기능

- **회원가입, 로그인**  
  : JWT를 이용하여 로그인과 회원가입을 구현하였습니다.
   

  <br>

- **메인 화면**  
  : 게시물 리스트를 보여주고 상단 해더부분을 스크롤시 위치 고정
  : 마우스 포인터를 게시물에 올리면 Hover 기능 구현 , 게시물 클릭시 상세페이지이동
  : 로그인시 게시물작성 버튼 활성화 및 해더 내용 변경
  : 

<br>

- **상세페이지**  
  : 클릭한 게시물 내용을 자세히 보여줌
  : 로그인시 자기글이면 수정 삭제 버튼 이용 가능


<br>

- **작성페이지**  
  : 로그인후 이용할수있고 이미지, title, 지역, content 작성가능
  : 상세페이지에서 수정하기 버튼시 작성페이지를 이용하되 상세페이지 데이터를 그대로 가져오게 함.

- **로그인 페이지**
 : 아이디 , 비밀번호 기입 후 로그인 가능
- **회원가입 페이지** 
 : 아이디, 비밀번호를 정규식 형식에 맞게 작성후 가입가능
 : 공백이 있을시 가입 불가
