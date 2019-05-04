import React from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

const SF = styled.footer`
a {
  color: #FFF;
  text-decoration: none; 
}

#c1:hover {
    color: #C64277;
 }

#c2:hover {
  color: #E36172;
}

#c3:hover {
  color: #FDA860;
}

`


function Footer(props) {
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