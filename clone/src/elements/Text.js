import React from "react";
import styled from "styled-components";


const Text = (props) => {

const {children, size, color, bold, margin, width, height,  wordbreak, padding} = props;
 const styles = {size, color, bold, margin, width, height,  wordbreak, padding}
    return (
        <React.Fragment>
            <P {...styles}>{children}</P>
        </React.Fragment>
    )
}

Text.defaultProps ={
 size : null ,
 bold : false, 
 color : "#000000",
 margin : null,
 width : null,
 height : null,
 wordbreak: null,
 padding: null,
}

const P = styled.p`
    word-break : ${(props)=>props.wordbreak? `break-all` : null};
    ${(props)=>(props.bold? `font-weight: 600;`: `font-weight: 350;`)};
    ${(props)=>(`color : ${props.color};`)};
    ${(props)=> (`font-size: ${props.size};`)};
    ${(props)=>(`margin : ${props.margin};`)};
    ${(props)=>(`width : ${props.width};`)};
    ${(props)=>(`height : ${props.height};`)};
    ${(props)=>(`padding : ${props.padding};`)};
    
`;


export default Text;