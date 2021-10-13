import SignInForm from "../../components/SignInForm/SignInForm";
import { setToken, getUserInfo } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import MotionInfo from "../../components/MotionInfo/MotionInfo";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import styled from "styled-components";

const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const LoginLeftWrapper = styled.div`
  width: 40%;
  height: 100%;
`;

const LoginRightWrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Login = (props) => {
  const dispatch = useDispatch();
  const getTokenSetUser = () => {
    const tokenInLocalStorage = localStorage.getItem("motion-auth-token");
    if (tokenInLocalStorage) {
      dispatch(setToken(tokenInLocalStorage));
      dispatch(() => getUserInfo(dispatch, tokenInLocalStorage));
    }
  };

  useEffect(getTokenSetUser, [dispatch]);
  const tokenInGlobalState = useSelector((state) => state.user.token);
  const userInfoInGlobalState = useSelector((state) => state.user.userInfo);
  if (tokenInGlobalState && userInfoInGlobalState) {
    props.history.push("/home");
  }

  return (
    <LoginWrapper>
      <LoginLeftWrapper>
        <MotionInfo />
      </LoginLeftWrapper>
      <LoginRightWrapper>
        <LoginHeader useCase="SignIn" />
        <SignInForm />
      </LoginRightWrapper>
    </LoginWrapper>
  );
};

export default Login;
