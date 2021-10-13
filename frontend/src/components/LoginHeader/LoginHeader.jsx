import React from "react";
import Button from "../Button/Button";
import LoginHeaderWrapper from "./LoginHeaderStyled";
import { useHistory } from "react-router-dom";

const LoginHeader = (props) => {
  const history = useHistory();
  console.log(history);
  return (
    <LoginHeaderWrapper>
      {props.useCase === "SignIn" ? (
        <>
          Don't have an account?
          <Button
            title="Sign Up"
            buttonType="Small"
            onClickFunction={() => history.push("/signup")}
          />{" "}
        </>
      ) : null}
      {props.useCase === "SignUp" ? (
        <>
          Already have an account?
          <Button
            title="Sign In"
            buttonType="Small"
            onClickFunction={() => history.push("/")}
          />{" "}
        </>
      ) : null}
    </LoginHeaderWrapper>
  );
};

export default LoginHeader;
