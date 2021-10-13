import { ReactComponent as CheckMark } from "../../assets/svgs/check_circle_black.svg";
import { useState } from "react";
import {
  FormDivWrapper,
  SignInFormWrapper,
  SignInTitle,
  InputsCombinedWrapper,
  InputWrapper,
  Input,
  InputSmall,
  InputWrapperTwoPerLine,
} from "./SignUpFormStyled";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

const SignUpForm = (props) => {
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState(0);
  const [verificationCode, setVerificationCode] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const history = useHistory();
  console.log(props);
  const handleChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "verificationCode":
        setVerificationCode(event.target.value);
        break;
      case "username":
        setUsername(event.target.value);
        break;
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "passwordRepeat":
        setPasswordRepeat(event.target.value);
        break;

      default:
        console.log("default");
    }

    let state = {
      email: email,
      verificationCode: verificationCode,
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: password,
      passwordRepeat: passwordRepeat,
    };
    console.log("state in on handleChange function", state);
  };

  const handleFirstContinueClick = (event) => {
    event.preventDefault();

    console.log("clicked first continue. stage:", stage);
    if (email) {
      console.log("email:", email);
      const url =
        "https://motion.propulsion-home.ch/backend/api/auth/registration/";
      const headers = new Headers({
        "Content-Type": "application/json",
      });
      const bodyRaw = {
        email: email,
      };
      const method = "POST";
      const config = {
        method,
        headers,
        body: JSON.stringify(bodyRaw),
      };
      console.log(config);
      fetch(url, config).then((res) => {
        console.log("response from /registration:", res);
        try {
          if (res.status === 200) {
            setStage(stage + 1);
          } else {
            alert("Invalid input.");
          }
        } catch (error) {
          console.log(error);
          alert("Invalid input.");
        }
      });
    }
  };

  const handleSecondContinueClick = (event) => {
    event.preventDefault();
    console.log("clicked second continue. stage:", stage);
    setStage(stage + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked complete. stage:", stage);
    if (email) {
      console.log("email:", email);
      const url =
        "https://motion.propulsion-home.ch/backend/api/auth/registration/validation/";
      const headers = new Headers({
        "Content-Type": "application/json",
      });
      const bodyRaw = {
        email: email,
        username: username,
        code: verificationCode,
        password: password,
        password_repeat: passwordRepeat,
        first_name: firstName,
        last_name: lastName,
      };
      const method = "PATCH";
      const config = {
        method,
        headers,
        body: JSON.stringify(bodyRaw),
      };
      console.log(config);
      fetch(url, config).then((res) => {
        console.log("response from /validation:", res);

        try {
          if (res.status === 200) {
            history.push("/");
          } else {
            alert("Invalid input.");
          }
        } catch (error) {
          console.log(error);
          alert("Invalid input.");
        }
      });
    }
  };

  return (
    <div>
      {stage === 0 && (
        <FormDivWrapper>
          <SignInFormWrapper>
            <SignInTitle>Sign Up</SignInTitle>
            <InputsCombinedWrapper>
              <InputWrapper>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </InputWrapper>
            </InputsCombinedWrapper>
            <Button
              buttonType="Big"
              title="CONTINUE"
              onClickFunction={handleFirstContinueClick}
            />
          </SignInFormWrapper>
        </FormDivWrapper>
      )}
      {/* confirmation step */}
      {stage === 1 && (
        <FormDivWrapper>
          <SignInFormWrapper>
            <SignInTitle>Congratulations!</SignInTitle>
            <CheckMark />
            <div>We've sent a confirmation code to your email</div>
            <div>{email}</div>
            <Button
              buttonType="Big"
              title="CONTINUE"
              onClickFunction={handleSecondContinueClick}
            />
          </SignInFormWrapper>
        </FormDivWrapper>
      )}
      {/* verification step */}
      {stage === 2 && (
        <FormDivWrapper onSubmit={handleSubmit}>
          <SignInFormWrapper>
            <SignInTitle>Verification</SignInTitle>
            <InputsCombinedWrapper>
              <InputWrapper>
                <Input
                  type="text"
                  placeholder="Verification code"
                  value={verificationCode}
                  name="verificationCode"
                  onChange={handleChange}
                />
              </InputWrapper>
              <InputWrapperTwoPerLine>
                <InputSmall
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
                <InputSmall
                  type="text"
                  placeholder="Username"
                  value={username}
                  name="username"
                  onChange={handleChange}
                />
              </InputWrapperTwoPerLine>
              <InputWrapperTwoPerLine>
                <InputSmall
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  name="firstName"
                  onChange={handleChange}
                />
                <InputSmall
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  name="lastName"
                  onChange={handleChange}
                />
              </InputWrapperTwoPerLine>
              <InputWrapperTwoPerLine>
                <InputSmall
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                />
                <InputSmall
                  type="password"
                  placeholder="Password repeat"
                  value={passwordRepeat}
                  name="passwordRepeat"
                  onChange={handleChange}
                />
              </InputWrapperTwoPerLine>
            </InputsCombinedWrapper>
            <Button buttonType="Big" title="complete" />
          </SignInFormWrapper>
        </FormDivWrapper>
      )}
    </div>
  );
};

export default SignUpForm;
