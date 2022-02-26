import { GoogleLogout } from "react-google-login";
import { userAuth } from "../recoil-state/recoil.state";

import React from "react";
import { useRecoilState } from "recoil";

function LogoutBtn({ userAuthToggle }) {
  const [userStateData, setUserStateData] = useRecoilState(userAuth);

  const onSuccess = () => {
    console.log("Log out success!");
    userAuthToggle(false, null);
    setUserStateData("");
  };

  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText={"LogOut"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default LogoutBtn;
