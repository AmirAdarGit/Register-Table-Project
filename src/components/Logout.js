
import  { GoogleLogout } from 'react-google-login';

import React from 'react';




function LogoutBtn({userAuthToggle}) {

  const onSuccess = () => {
    console.log("Log out success!");
    userAuthToggle(false, null);
  }

  return (
      <div>
          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText={"LogOut"}
            onLogoutSuccess={onSuccess}
          />
      </div>
  )};

export default LogoutBtn;




