import { useState } from "react";
import styled from "styled-components";

const StyledP=styled.p`
color: white;
text-decoration: none;
`
const Anchor=styled.a`
padding: 25px 0 25px 0;
text-decoration: none;
margin: 0 60px;

`

const MarqueeElement = (props) => {
    const [content, setcontent] = useState(props.text);
    const openSesame=()=>{
        if (props.sesame==="sesame"){
        setcontent(<>&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x64;&#x61;&#x6e;&#x69;&#x65;&#x6c;&#x40;&#x70;&#x6c;&#x65;&#x2e;&#x6f;&#x72;&#x67;</>)}
        if (props.sesame==="telsesame"){
        setcontent(<>&#x2b;&#x34;&#x33;&#x36;&#x38;&#x30;&#x34;&#x30;&#x30;&#x30;&#x39;&#x37;&#x39;</>)}
    }
    const clear=()=>{setcontent(props.text)}
    return ( <Anchor href={props.hrefTo} target="_blank" rel="noreferrer" onMouseEnter={openSesame} onMouseLeave={clear}>
        <StyledP>{content}</StyledP>
    </Anchor> );
}
 
export default MarqueeElement;