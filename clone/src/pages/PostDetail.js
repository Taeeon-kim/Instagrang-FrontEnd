import React from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
// import Permit from "../shared/Permit";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";


const PostDetail = (props) => {
  const postId = props.match.params.id;
  console.log(postId);
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list[0].content);

  const post = post_list.filter((list) => list.postId === parseInt(postId));
  console.log(post);
  // const post_idx = post_list.findIndex(p => p.postId === parseInt(postId));
  // console.log(post_idx)
  // const post = post_list[post_idx];
  // console.log(post)
  // console.log(post_list);
  // const [post, setPost] = React.useState(post_data? post_data : null);

  React.useEffect(() => {
    // if(post){
    //    return;
    // }
    // dispatch(postActions.getOnePostFB(id));
  }, []);

  return (
    <Grid is_flex>
      <Grid margin="0px 100px 0px 0px" is_flex >
        {post[0] && (
          <Image
            imageType="rectangle"
            src={"http://3.36.100.253" + post[0].image}
          />
        )}
      </Grid>
      <Grid >
      <Grid is_flex >
      <Image imageType="circle" src={props.user_profile} />
    <Text padding="0px 0px" bold textalign>{post[0].nickname}</Text>
    </Grid>
    <Text wordbreak padding="5px">
              {post[0].content}
            </Text>
        <CommentList postId={postId} />
      </Grid>
    </Grid>
  );
};

export default PostDetail;
