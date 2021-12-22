import GoogleLogin from "react-google-login";
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const clientId =
  "979808801196-vn8rcr3df9c1qtgm1adfo4geksn3sioi.apps.googleusercontent.com";

const Logo = styled.h1`
  font-size: 50px;
  display: inline-block;
  margin: 0;
  background: -webkit-linear-gradient(
    110deg,
    #e1f549,
    #29d0be,
    #6cb8ea,
    #ff5959
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const GradientBlock = styled.div`
  height: 20px;
  width: 100px;
  background: -webkit-linear-gradient(
    110deg,
    #e1f549,
    #29d0be,
    #6cb8ea,
    #ff5959
  );
`;

const LoginPage = (props) => {
  const onSuccess = (res) => {
    const inputEmail = res.profileObj.email;
    const profileObj = res.profileObj;
    console.log("PROFILE OBJECT: ", profileObj);
    const newUser = {
      email: profileObj.email,
      firstName: profileObj.givenName,
      lastName: profileObj.familyName,
      googleID: profileObj.googleId,
    };
    axios
      .get(`/api/users/email/${profileObj.email}`)
      .then((user) => {
        console.log(user);
        if (user.data != null) {
          props.handleLogIn(user.data);
        } else {
          axios
            .post(`/api/users/add`, newUser)
            .then((res) => props.handleLogIn(res.data))
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  const onFailure = (res) => {
    console.log("[Login failed] res: ", res);
  };

  return (
    <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* <GradientBlock/> */}
      <Logo>Notule.</Logo>
      <h4>Your stream of consciousness.</h4>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign up with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </Container>
  );
};

export default LoginPage;
