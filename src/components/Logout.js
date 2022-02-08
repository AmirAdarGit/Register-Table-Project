
import  { GoogleLogout } from 'react-google-login';

import React from 'react';



const onSuccess = () => {
    console.log("Log out success!");
}


function LogoutBtn()  {
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




