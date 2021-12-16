import React, { useState } from "react";
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
  const token = localStorage.getItem("token");
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
  console.log(postId);

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

  React.useEffect(() => {
    dispatch(postActions.addPostDB());
    // if (is_edit && !_post) {
    //   alert("포스트 정보가 없어요.");
    //   console.log("포스트 정보가 없어요.");
    //   history.goBack();
    //   return;
    // }
    // if (is_edit) {
    //   dispatch(imageActions.setPreview(_post.image_url));
    // }
    // dispatch(imageActions.setPreview());
  }, []);

  // const changeContents = (e) => {
  //   setContent(e.target.value);
  //   dispatch(postActions.addPost(changeContents));
  //   console.log(e.target.value);
  // };

  const addPost = () => {
    dispatch(postActions.addPostDB(image, content));
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
    dispatch(postActions.editPostDB(image, content));
    console.log(image, content);
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
  return (
    <React.Fragment>
      <Grid margin="auto" width="428px">
        <Grid>
          <Grid is_flex margin="30px auto auto auto" padding="16px">
            <Text margin="0 auto auto auto" size="32px" bold>
              미리보기
            </Text>
            {is_edit ? (
              <Image
                margin="0 0 0 auto"
                imageType="rectangle"
                size="200px"
                bgsize="cover"
                src={
                  preview
                    ? preview
                    : "https://lh3.googleusercontent.com/proxy/-w9TkLeiJ0dHnWLRr7UC2OWsGKn4SwKZpIPhIf3adZLVqlbw5XWpdeVgO37ISdl2PfY1ga7MX_rxND2YPoXMxzTQfCpnRFXEIoZKrA2t7H5xIy5w_DZBlskA5nH_yco"
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
                    : "https://lh3.googleusercontent.com/proxy/-w9TkLeiJ0dHnWLRr7UC2OWsGKn4SwKZpIPhIf3adZLVqlbw5XWpdeVgO37ISdl2PfY1ga7MX_rxND2YPoXMxzTQfCpnRFXEIoZKrA2t7H5xIy5w_DZBlskA5nH_yco"
                }
              />
            )}
          </Grid>
          <Grid>
            <input type="file" onChange={selectFile} ref={fileInput} />
          </Grid>
        </Grid>

        <Grid margin="30px auto">
          {is_edit ? (
            <Input
              defaultValue={selectPostInfo[0].content}
              _onChange={(e) => {
                setContent(e.target.value);
              }}
              label="게시글 내용"
              placeholder="게시글을 작성해 주세요"
              multiLine
            />
          ) : (
            <Input
              value={content}
              _onChange={(e) => {
                setContent(e.target.value);
              }}
              label="게시글 내용"
              placeholder="게시글을 작성해 주세요"
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
              padding="8px 0"
              text="게시글 작성"
              _onClick={addPost}
            ></Button>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddPost;
