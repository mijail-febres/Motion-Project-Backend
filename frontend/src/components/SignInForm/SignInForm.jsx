import { ReactComponent as UserIcon } from "../../assets/avatar.svg";
import { ReactComponent as PasswordIcon } from "../../assets/password.svg";
import {
  FormDivWrapper,
  SignInFormWrapper,
  SignInTitle,
  InputsCombinedWrapper,
  InputWrapper,
  Input,
} from "./SignInFormStyled";
import Button from "../Button/Button";
import { getUserToken } from "../../store/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SignInForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      dispatch(() => getUserToken(dispatch, username, password));
    }
  };

  return (
    <FormDivWrapper onSubmit={handleSubmit}>
      <SignInFormWrapper>
        <SignInTitle>Sign In</SignInTitle>
        <InputsCombinedWrapper>
          <InputWrapper>
            <UserIcon />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              name="username"
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <PasswordIcon />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleChange}
            />
          </InputWrapper>
        </InputsCombinedWrapper>
        <Button buttonType="Big" title="SUBMIT" />
      </SignInFormWrapper>
    </FormDivWrapper>
  );
};

export default SignInForm;
