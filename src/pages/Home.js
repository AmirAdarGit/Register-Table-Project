import React from "react";
import "../css/Home.css";
import LoginBtn from "../components/Login";
import LogoutBtn from "../components/Logout";
import styled from "@emotion/styled";


const GoogleAuthWrapper = styled.div`
  display: flex;
`


function  Home() {
  return (
    <GoogleAuthWrapper className="google-auth-wrapper">
      <LoginBtn/> 
      <LogoutBtn/>
    </GoogleAuthWrapper>
  );
}

export default Home;
