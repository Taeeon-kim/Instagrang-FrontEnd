import React from "react";
import styled from "styled-components";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const ImageButton = (props) => {
  // props
  const {
    deleteIcon, // 딜리트 아이콘
    _onClick,
    _onChange,
    onSubmit,
    size,
    height,
    margin,
  } = props;

  // props style
  const styles = {
    height: height,
    margin: margin,
  };

  if (props.deleteIcon) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <AiFillDelete
            size={size}
            onClick={_onClick}
            onChange={_onChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          ></AiFillDelete>
        </Icon>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Icon {...styles}>
        <AiFillEdit
          size={size}
          onClick={_onClick}
          onChange={_onChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSubmit(e);
            }
          }}
        ></AiFillEdit>
      </Icon>
    </React.Fragment>
  );
};

// ImageButton DefaultProps
ImageButton.defaultProps = {
  delete: false,
  size: "16px",
  height: "16px",
  margin: null,
  _onChange: () => {},
  onSubmit: () => {},
  _onClick: () => {},
};

// ImageButton 스타일드 컴포넌트
const Icon = styled.div`
  margin: ${(props) => props.margin};
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  // hover 이벤트
  &:hover {
    color: #d85147;
    transition: all 0.2s;
  }
`;

export default ImageButton;
