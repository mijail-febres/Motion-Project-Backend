import SignUpForm from "../../components/SignUpForm/SignUpForm";
import MotionInfo from "../../components/MotionInfo/MotionInfo";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import styled from "styled-components";

const SignUpPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const RightSideWrapper = styled.div`
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
`;

const SignUp = (props) => {
  return (
    <SignUpPageWrapper>
      <MotionInfo />
      <RightSideWrapper>
        <LoginHeader useCase="SignUp" />
        <SignUpForm />
      </RightSideWrapper>
    </SignUpPageWrapper>
  );
};

export default SignUp;
