import React, { useState } from "react";
import styled from "styled-components";
import defalutImage from "../defaultImage.png";
// 엘레먼트 불러오기
import Input from "../elements/Input";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Button from "../elements/Button";
import Text from "../elements/Text";

import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
const AddPost = (props) => {
  const fileInput = React.useRef();
  const id = window.sessionStorage.getItem("id");
  // const token = localStorage.getItem("token");
  // dispatch 사용
  const dispatch = useDispatch();
  // redux
  const user_list = useSelector((state) => state.user.user); // 유저리스트
  console.log(user_list);
  // const preview = useSelector((state) => state.image.preview); // 미리보기
  const is_login = useSelector((state) => state.user.is_login); // 로그인 체크

  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);

  // let _post = is_edit ? post_list.find((p) => p.id === postId) : null;
  // console.log(_post);
  // console.log(props.match.params.id);

  const postId = props.match.params.id;

  const is_edit = postId ? true : false;

  const { history } = props;

  const selectPostInfo = post_list.filter(
    (list) => list.postId === parseInt(postId)
  );
  console.log(selectPostInfo);
  // let editContent = selectPostInfo[0].content;
  // console.log(editContent);
  // let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;
  // console.log(_post);

  // state 값
  // const [contents, setContents] = React.useState(_post ? _post.contents : "");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  // const [editContent, setEditContent] = useState("");

  // React.useEffect(() => {
  //   dispatch(postActions.addPostDB());
  //   if (is_edit && !selectPostInfo) {
  //     alert("포스트 정보가 없어요.");
  //     console.log("포스트 정보가 없어요.");
  //     history.goBack();
  //     return;
  //   }
  //   if (is_edit) {
  //     dispatch(imageActions.setPreview(selectPostInfo[0].image));
  //   }
  //   dispatch(imageActions.setPreview());
  // }, []);

  // const changeContents = (e) => {
  //   setContent(e.target.value);
  //   dispatch(postActions.addPost(changeContents));
  //   console.log(e.target.value);
  // };
  console.log(postId);
  const addPost = () => {
    dispatch(postActions.addPostDB(image, content));
    console.log(image, content);
  };

  const selectFile = (e) => {
    const reader = new FileReader(); // 미리보기 리더
    const targetImage = fileInput.current.files[0];
    console.log(e.target.files[0]);
    console.log(targetImage);
    reader.readAsDataURL(targetImage);
    setImage(e.target.files[0]);
    reader.onloadend = () => {
      setPreview(reader.result);

      dispatch(imageActions.setPreview(reader.result));
      // dispatch(postActions.addPost(reader.result));
    };
  };
  const editPost = () => {
    console.log(postId);
    dispatch(postActions.editPostDB(image, content, postId));
  };
  if (!is_login) {
    return (
      <Grid
        minWidth="428px"
        width="50%"
        margin="100px auto"
        padding="60px"
        bg="#0095f6"
        center
      >
        <Text color="#fff" size="32px" bold>
          Instagrang.
        </Text>
        <Text color="#fff" size="16px">
          로그인 후에만 포스트 작성이 가능합니다.
        </Text>
        <Grid width="50%" margin="50px 0 32px 0" padding="8px 0">
          <Button
            _onClick={() => {
              history.replace("/login");
            }}
            padding="8px 0"
            bg="#fff"
            color="#0095f6"
          >
            로그인 하러가기
          </Button>
        </Grid>
      </Grid>
    );
  }
  // 게시물박스
  return (
    <React.Fragment>
      <Grid
        margin="auto"
        width="428px"
        border="1px solid #e4e4e4"
        borderRadius="20px"
        bg="#fff"
      >
        {is_edit ? (
          <Text
            margin="10px auto 0px auto"
            size="16px"
            color="#262626"
            textalign="center"
            bold
          >
            게시물 수정하기
          </Text>
        ) : (
          <Text
            margin="10px auto 0px auto"
            size="16px"
            color="#262626"
            textalign="center"
            bold
          >
            새 게시물 만들기
          </Text>
        )}
        <Borderbottom></Borderbottom>
        <Grid>
          <Grid is_flex margin="auto">
            {is_edit ? (
              <Image
                margin="0 0 0 auto"
                imageType="rectangle"
                size="200px"
                bgsize="cover"
                src={
                  preview
                    ? preview
                    : "https://lh3.googleusercontent.com/proxy/lo_ZzPevGQ89G3TfwgkdwUgMH2l965198jMBWZGIkZWj4XZBj14_cqupMi2W0u8WfEsw2agxv7gglDmJZWu5Rkps4xtZQYPrQwjooaf8MEQUAMVRJCsMNwLVVFB5t0Y"
                }
              />
            ) : (
              <Image
                margin="0 0 0 auto"
                imageType="rectangle"
                size="200px"
                bgsize="cover"
                src={
                  preview
                    ? preview
                    : "https://lh3.googleusercontent.com/proxy/lo_ZzPevGQ89G3TfwgkdwUgMH2l965198jMBWZGIkZWj4XZBj14_cqupMi2W0u8WfEsw2agxv7gglDmJZWu5Rkps4xtZQYPrQwjooaf8MEQUAMVRJCsMNwLVVFB5t0Y"
                }
              />
            )}
          </Grid>
          <Grid padding="16px">
            <Label htmlFor="input-file">컴퓨터에서 선택</Label>
            <input
              type="file"
              id="input-file"
              style={{ display: "none" }}
              onChange={selectFile}
              ref={fileInput}
            />
          </Grid>
        </Grid>

        <Grid margin="30px auto">
          {is_edit ? (
            <Input
              defaultValue={selectPostInfo[0].content}
              _onChange={(e) => {
                setContent(e.target.value);
              }}
              padding="16px"
              label="게시글 내용"
              placeholder="문구 입력..."
              multiLine
            />
          ) : (
            <Input
              value={content}
              _onChange={(e) => {
                setContent(e.target.value);
              }}
              padding="12px 4px"
              margin="0 auto"
              label="게시글 내용"
              placeholder="문구 입력..."
              border="1px solid #fff"
              bg="#fff"
              multiLine
            />
          )}
        </Grid>

        <Grid width="50%" margin="30px auto" padding="8px 0">
          {is_edit ? (
            <Button
              padding="8px 0"
              text="게시글 수정"
              _onClick={editPost}
            ></Button>
          ) : (
            <Button
              borderRadius="6px"
              padding="8px 0"
              margin="20px auto"
              text="게시글 작성"
              _onClick={addPost}
            ></Button>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Borderbottom = styled.div`
  border-bottom: 1px solid #e4e4e4;
  height: 10px;
`;

const Label = styled.label`
  width: 102px;
  background-color: #0095f6;
  font-size: 14px;
  padding: 5px 9px;
  color: white;
  font-weight: bold;
  border-radius: 3px;
  margin: 0 auto;
  display: block;
`;
export default AddPost;
