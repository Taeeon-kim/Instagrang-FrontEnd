import React, { useState } from "react";
// 엘레먼트 불러오기
import Input from "../elements/Input";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Button from "../elements/Button";
import Text from "../elements/Text";

import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";

import { actionCreators as imageActions } from "../redux/modules/image";
const AddPost = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);

  const post_list = useSelector((state) => state.post.list);

  console.log(props.match.params.id);

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  const { history } = props;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;
  console.log(_post);

  const [contents, setContents] = React.useState(_post ? _post.contents : "");

  return (
    <React.Fragment>
      <Grid margin="auto" width="428px">
        <Grid>
          <Grid is_flex margin="30px auto auto auto" padding="16px">
            <Text margin="0 auto auto auto" size="32px" bold>
              미리보기
            </Text>
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
          </Grid>
          <Grid>
            <Upload type="file" />
          </Grid>
        </Grid>

        <Grid margin="30px auto">
          <Input
            // value={contents}
            // _onChange={changeContents}
            label="게시글 내용"
            placeholder="게시글 작성"
            multiLine
          />
        </Grid>

        <Grid width="50%" margin="30px auto" padding="8px 0">
          <Button
            padding="8px 0"
            text="게시글 작성"
            _onClick={() => {}}
          ></Button>
        </Grid>
        {/* <Grid padding="16px">
          {is_edit ? (
          <Button text="게시글 수정" _onClick={editPost}></Button>
        ) : (
          <Button text="게시글 작성" _onClick={addPost}></Button>
        )}
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default AddPost;
