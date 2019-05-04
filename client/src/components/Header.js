import React from "react";
import {Link} from "react-router-dom";
// import styled from "styled-components";

// const NBS = styled.nav`
// color: red;
// background-color: black; 
// height: 100px;
// `


function Header() {
  return ( <>
    <Link className="removeStyle" id="top" to={"/"}><strong>arora</strong></Link>
  </>);
}
export default Header;


