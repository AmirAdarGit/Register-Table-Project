import "../css/Login.css";
import GoogleLogin from "react-google-login";
import { useRecoilState } from "recoil";
import { userAuth } from "../recoil-state/recoil.state";

function LoginBtn({ userAuthToggle, isLoggedIn }) {
  const [userStateData, setUserStateData] = useRecoilState(userAuth);

  const handleLogin = async (res) => {
    console.log(res);
    console.log("LOGIN SUCCESS! Current user:", res.profileObj);
    userAuthToggle(true, res);
    registerNewUser(res.profileObj);
  };
  const handleFailure = (res) => {
    console.log("LOGIN FAILED! res:", res);
    alert(res);
  };

  const registerNewUser = (data) => {
    setUserStateData(() => [
      {
        email: data.email,
        familyName: data.familyName,
        givenName: data.givenName,
        googleId: data.googleId,
        imageUrl: data.imageUrl,
        name: data.name,
      },
    ]);
  };

  return (
    <div>
      {!isLoggedIn && (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
    </div>
  );
}

export default LoginBtn;
