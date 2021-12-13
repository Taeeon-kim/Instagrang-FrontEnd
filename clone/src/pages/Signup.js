import React from "react";

// 엘레먼트 불러오기
import Input from "../elements/Input";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Button from "../elements/Button";

const Signup = () => {
  return (
    <React.Fragment>
      <Grid>
        <Image
          width="190px"
          height="70px"
          backgroundSize="cover"
          margin="90px auto 22px auto"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
        />
        <Grid width="268px" margin=" 0 auto">
          <Input
            onSubmit={() => {}}
            placeholder="이메일 주소"
            padding="11px 0px 9px 8px"
            margin="5px auto"
          />
          <Input
            onSubmit={() => {}}
            placeholder="사용자 이름"
            padding="11px 0px 9px 8px"
            margin="5px auto"
          />
          <Input
            onSubmit={() => {}}
            placeholder="비밀번호"
            padding="11px 0px 9px 8px"
            margin="5px auto"
          />
          <Input
            onSubmit={() => {}}
            placeholder="비밀번호 확인"
            padding="11px 0px 9px 8px"
            margin="5px auto"
          />
          <Button _onClick={() => {}} padding="8px 0px" margin="10px auto">
            가입
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
