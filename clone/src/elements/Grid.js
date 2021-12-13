import React from 'react';
import styled from "styled-components"

const Grid = (props) => {

    const {is_fix,border,is_flex, width, padding, margin, bg, children, _onClick, position, height,cursor} = props

    const styles = {
        is_flex:is_flex,
        width:width,
        margin: margin,
        padding: padding,
        bg:bg,
        border:border,
        is_fix:is_fix,
        position:position,
        height: height,
        cursor: cursor,
    }

    return (
        <>
        <GridBox {...styles} onClick={_onClick}>
        {children}
        </GridBox>
        </>
    )
}

Grid.defaultProps = {
    children:null,
    is_flex: false,
    width:"100%",
    padding: false,
    margin: false,
    bg: false,
    _onClick: ()=>{},
    border:false,
    is_fix:false,
    position : false,
    height :"100%", 
    cursor :"Default",
}

const GridBox = styled.div`
width:${(props) => props.width};
height :${(props)=> props.height};
box-sizing: border-box; 
cursor: ${(props)=> props.cursor};
${(props) => (props.padding ? `padding:${props.padding};`:"")}
${(props) => (props.margin ? `margin:${props.margin};`:"")}
${(props) => (props.bg ? `background-color:${props.bg};`:"")}
${(props) => props.is_flex ? `display: flex; align-tiems: center; justify-content: space-between;`:"" }

${(props =>props.border?`border:${props.border};`:"none")}
${(props =>props.is_fix?` position: fixed; top: 0; width:100%;  z-index: 1;`:"")}
${(props =>props.position?`display: relative;`:"")}
${(props)=> props.borderBottom ? `border-bottom : ${props.borderBottom};`: "none"}
`




export default Grid