import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_OAUTH_CLIENT_ID;

const GoogleLogoutButton = (props) => {
  const onSuccess = () => {
    console.log("Logout made successfully");
    props.handleLogout();
  };

  return (
    <div>
      <GoogleLogout clientId={clientId} buttonText="Log Out" onLogoutSuccess={onSuccess} />
    </div>
  );
};

export default GoogleLogoutButton;
