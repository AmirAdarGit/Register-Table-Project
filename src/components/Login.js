
import "../css/Login.css";
import GoogleLogin  from "react-google-login";
import { useState } from "react";
import styled from "@emotion/styled";
import { H1 } from "../styled/heading.styled";
import { useNavigate } from 'react-router-dom';




function LoginBtn() {

  // const navigate = useNavigate();


  // const [loginData, setLoginData] = useState(
  //   localStorage.getItem("loginData")
  //     ? JSON.parse(localStorage.getItem("loginData"))
  //     : null
  // );


  const handleLogin = async (res) => {
    console.log(res);
    console.log("LOGIN SUCCESS! Current user:",res.profileObject);

  };
  const handleFailure = (res) => {
    console.log("LOGIN FAILED! res:", res);
    alert(res);
  };

  // const logOutHandler = (e) => {
  //   localStorage.removeItem("loginData");
  //   setLoginData("");
  // };

  return (
    <div >
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />      
        {/* {loginData && navigate("/user")  } */}

    </div>
  );
}

export default LoginBtn;
