import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Logo = styled.h1`
  font-size: 50px;
  display: inline-block;
  margin: 0;
  background: -webkit-linear-gradient(110deg, #e1f549, #29d0be, #6cb8ea, #ff5959);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LoginPage = (props) => {
  const onSuccess = (res) => {
    const profileObj = jwt_decode(res.credential);
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
      <Logo>Notule.</Logo>
      <h4>Your stream of consciousness.</h4>
      <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
    </Container>
  );
};

export default LoginPage;
