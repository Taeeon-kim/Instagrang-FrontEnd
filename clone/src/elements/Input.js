import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

const Input = (props) => {
  const {
    type,
    value,
    placeholder,
    _onChange,
    width,
    multiLine,
    onSubmit,
    border,
    padding,
    margin,
    defaultValue,
    bg,
    left,
  } = props; //InputSome 태그안에 {...props}라고 해도되는데 하다보면 props 에 InputSome에 들어가지않고 다른곳에서 쓰일수도있다. 따라서 필요없는걸 넣어줄필요없는데 다들어가게됨으로 그걸방하기위해 props안에있는걸 필요한거만 InputSome에 넣어줄것
  const styles = {
    padding: padding,
    margin: margin,
    placeholder: placeholder,
    width: width,
    border: border,
    bg: bg,
    left:left,
  };
  if (multiLine) {
    return (
      <Grid>
        <ElTextarea
          {...styles}
          rows={5}
          value={value}
          defaultValue={defaultValue}
          onChange={_onChange}
        ></ElTextarea>{" "}
        {/* rows는 몇줄을넣을지 */}
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        <InputSome
          {...styles}
          type={type}
          value={value}
          onChange={_onChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSubmit(e);
            }
          }}
        ></InputSome>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  type: "text",
  value: undefined,
  placeholder: "입력해주세요.",
  label: null,
  _onChange: () => {},
  onSubmit: () => {},
  padding: null,
  margin: null,
  width: "100%",
  bg: null,
  border: "1px solid #212121",
};

const ElTextarea = styled.textarea`
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  left: ${(props) => props.left};
  box-sizing: border-box;
  display: block;
`;

const InputSome = styled.input`
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  left: ${(props) => props.left};
`;

export default Input;
