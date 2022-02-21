
import "../css/Login.css";
import GoogleLogin  from "react-google-login";

function  LoginBtn({userAuthToggle, isLoggedIn}) {


  const handleLogin = async (res) => {
    console.log(res);
    console.log("LOGIN SUCCESS! Current user:", res.profileObject);
    userAuthToggle(true, res);
  };
  const handleFailure = (res) => {
    console.log("LOGIN FAILED! res:", res);
    alert(res);
  };


  return (
    <div>
         {!isLoggedIn && 
         <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />      
         }
    </div>
  );
}

export default LoginBtn;
