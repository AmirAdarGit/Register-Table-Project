import React, { useState } from "react";
import "../css/Home.css";
import LoginBtn from "../components/Login";
import LogoutBtn from "../components/Logout";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAuth } from "../recoil-state/recoil.state";

const GoogleAuthWrapper = styled.div`
  /* display: flex; */
`;
const LoginFooterStyled = styled.div`
  position: absolute;
  bottom: 0;
`;

function Home() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userStateData, setUserStateData] = useRecoilState(userAuth);

  const userAuthToggle = (isToggle, userData) => {
    setIsLoggedIn(isToggle);
    setUserData(userData);
  };

  function handleClick() {
    navigate("/user");
  }

  return (
    <GoogleAuthWrapper>
      <h1>Home page</h1>
      <br />
      <h3>some info...</h3>

      {isLoggedIn && `Hello: ${userData?.profileObj.name}`}
      <br />
      {isLoggedIn && <button onClick={handleClick}>click to register</button>}
      <LoginFooterStyled>
        {!isLoggedIn ? (
          <LoginBtn userAuthToggle={userAuthToggle} isLoggedIn={isLoggedIn} />
        ) : (
          <LogoutBtn userAuthToggle={userAuthToggle} />
        )}
      </LoginFooterStyled>
    </GoogleAuthWrapper>
  );
}

export default Home;
