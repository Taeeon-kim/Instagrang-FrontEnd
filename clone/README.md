# 클론코딩 인스타그램

<center>
<img src="https://github.com/Instagrang-clonecoding/Instagrang-FrontEnd/blob/main/clone/public/insta_main.png" width="1000px">
</center>

인스타그램 클론코딩입니다. 😁

**Link**  
http://kongom2project.s3-website.ap-northeast-2.amazonaws.com/


**Notion**  
https://www.notion.so/10-Home-ffb072e101d34e2884ca081ded79a2ab

<br>

## 1. 제작 기간 & 팀원 소개

- 2021년 12월 13일 ~ 2021년 12월 18일
- 5인 1조 팀 프로젝트

**FRONT END**

- 공통 : CSS(styled-components)
- 김태언 : 메인리스트화면 / 상세페이지/ 등
- 공성훈 : 회원가입 / 로그인 / 유저 토큰 인증 /게시물 수정,삭제/ 게시물작성페이지 등 

**BACK END**

https://github.com/Instagrang-clonecoding/Instagrang-BackEnd
 
- 김주란 
- 양성은 
- 정영빈 

<br>

## 2. 사용 기술
`Front-end`

- React
- Redux
- styled-components
- axios


`Back-end`

- Spring


`deploy`

- Front-end : AWS S3
- Back-end : AWS EC2 (Ubuntu)

<br>

## 3. 실행화면

Youtube Link : https://www.youtube.com/watch?v=hTt77tD3H2o

<br>

## 4. 핵심기능

- **회원가입, 로그인**  
  : JWT를 이용하여 로그인과 회원가입을 구현하였습니다.
  : 정규식을 통한 아이디를 이메일 형식, 비밀번호 특수문자, 대소문자 영문, 숫자 포함 8자이상~ 25자 사용하였습니다. 틀렸을시 아래 텍스트에 빨간글로 안내글 띄움
  : SessionStorage로 토큰과 필요한 정보값을 저장하여 session으로 사용했습니다.
   

  <br>

- **메인 화면**  
  : 상단 해더부분, 우측 프로필 영역 위치 고정, 왼쪽 게시물 리스트를 스크롤이용하여 볼수있게 했습니다.
  : 포스트안에 좋아요, 댓글, 댓글쓰기 뷰단과 기능을 넣었습니다. 실시간 좋아요 갯수, 댓글갯수 변화 확인가능, 해당 댓글 모두보기시 상세페이지로 이동합니다
  : 댓글 달기에 입력시 게시 버튼 활성화 구현
  : 자신의 포스트만 상단 오른쪽에 수정, 삭제 버튼 활성화
  

<br>

- **상세페이지**  
  : 클릭한 게시물 내용을 자세히 보여줌
  : 메인 화면과 같은 좋아요, 댓글갯수 기능추가
  : 해당 게시물의 댓글 리스트를 보여줌


<br>

- **작성페이지**  
  : 로그인후 이용할수있고 이미지, content 작성가능
  : 올리고싶은 이미지에 대한 프리뷰를 보여줌
  : 상세페이지에서 수정하기 버튼시 작성페이지를 이용하되 상세페이지 데이터를 그대로 가져오게 함.

- **로그인 페이지**
 : 아이디 , 비밀번호 기입 후 로그인 가능
- **회원가입 페이지** 
 : 아이디, 비밀번호를 정규식 형식에 맞게 작성후 가입가능
 : 공백이 있을시 가입 불가
