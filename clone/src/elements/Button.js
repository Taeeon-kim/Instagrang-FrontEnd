

import React from 'react';
import styled from "styled-components"

const Button = (props) => {
    const {width,text, margin,children, _onClick, bg, color, border,padding} = props
    const styles = {width,text, margin, bg, color, border,padding}
    return(
        <>
        <BtnBox  
        {...styles}
        onClick = {_onClick}>
        {text?text:children}</BtnBox>
        </>

    )
}

Button.defaultProps = {
        _onClick :() => {},
        margin: false,
        text: false,
        children: null,
        width: "100%",
        bg : "#0095F6",
        color: "#FFFFFF",
        border: false,
        padding : "",
         

}

const BtnBox = styled.button`
width: ${(props) => props.width};
padding : ${(props) =>props.padding};
box-sizing : border-box;
${(props) =>(props.margin ?`margin:${props.margin};`:"")}
${(props) =>(props.border?`border : 1px solid #000000;`:`border : none;`) }
background-color: ${(props) => props.bg};
color: ${(props) => props.color};

`
export default Button

