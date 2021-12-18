import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../elements/Button";
import Grid from "../elements/Grid";

import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as postActions } from "../redux/modules/post";

const Upload = () => {
  const fileInput = React.useRef();
  //   const is_uploading = useSelector((state) => state.image.uploading);
  const dispatch = useDispatch();

  const selectFile = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.files[0]);
    // console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const selectImage = fileInput.current.files[0];
    // const formData = new FormData();
    // formData.append("image", selectImage);
    // console.log(selectImage);
    reader.readAsDataURL(selectImage);

    reader.onloadend = () => {
      const selectedImage = reader.result;
      // console.log(selectedImage);

      dispatch(imageActions.setPreview(selectedImage));
      //   dispatch(postActions.addPostDB(selectedImage));
    };
  };

  //   const uploadFB = () => {
  //     let image = fileInput.current.files[0];
  //     dispatch(imageActions.uploadImageFB(image));
  // const _upload = storage.ref(`images/${image.name}`).put(image);

  // _upload.then((snapshot) => {
  //   console.log(snapshot);

  //   snapshot.ref.getDownloadURL().then((url) => {
  //     console.log(url);
  //   });
  // });
  //   };
  return (
    <React.Fragment>
      <input
        type="file"
        onChange={selectFile}
        ref={fileInput}
        // disabled={is_uploading}
      />
      <Grid width="50%" margin="30px auto" padding="8px 0">
        <Button padding="8px 0" _onClick={Upload}>
          사진 업로드 하기
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Upload;
