import React from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
// import Permit from "../shared/Permit";
import {useSelector,useDispatch} from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Grid from "../elements/Grid";
;
const PostDetail = (props) => {
    const postId = props.match.params.id;
    console.log(postId);
    const dispatch =useDispatch();
    const user_info = useSelector((state) => state.user.user);
    const post_list = useSelector((state) => state.post.list);
    console.log(post_list[0].content)

    const post_idx = post_list.findIndex(p => p.postId === parseInt(postId));
    console.log(post_idx)
    const post = post_list[post_idx];
    console.log(post)
    console.log(post_list);
    // const [post, setPost] = React.useState(post_data? post_data : null);


    React.useEffect(() => {
     
        // if(post){
        //    return; 
        // }
        // dispatch(postActions.getOnePostFB(id));
        
    }, []);

    return (
      <Grid width="100%" >
        {post && (
          <Post {...post} />
        )}
        {/* <Permit> */}
        <CommentWrite postId={postId}/>
        {/* </Permit> */}
        <CommentList postId={postId}/>
      </Grid>
    );
}

export default PostDetail;