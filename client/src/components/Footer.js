import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";




function Footer(props) {
  const SF = styled.footer`
a {
  color: #FFF;
  text-decoration: none; 
}

#c1:hover {
    color: ${props.colorTheme[1]};
 }

#c2:hover {
  color: ${props.colorTheme[2]};
}

#c3:hover {
  color: ${props.colorTheme[3]};
}

`
  return ( <>
    <SF className="removeStyle" id="bottom"><ul>
        <Link id="c1" to={"/forecast"}>forecast</Link>| 
        <Link id="c2" to={"/historical"}>historical</Link>| 
        <Link id="c3" to={"/color"} >color</Link>| 
        <Link id="c2" to={"/gallery"} >gallery</Link>| 
        <Link id="c1" to={"/about"} >about</Link>
        </ul>
        
   </SF>
  </>);
}

export default Footer;