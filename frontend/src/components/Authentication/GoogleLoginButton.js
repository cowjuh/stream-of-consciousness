import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = (props) => {
  const [signedIn, setSignedIn] = useState(false);
  const onSuccess = (res) => {
    props.setUser(res.profileObj);
    setSignedIn(true);
  };

  const onFailure = (res) => {
    console.log("[Login failed] res: ", res);
  };

  return (
    <div>
      <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
    </div>
  );
};

export default GoogleLoginButton;
