import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";

const clientId = process.env.OAUTH_CLIENT_ID;

const LoginButton = styled(GoogleLogin)`
  background-color: aqua;
`;

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
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={signedIn}
        icon={true}
        style={{ color: "aqua" }}
      />
    </div>
  );
};

export default GoogleLoginButton;
