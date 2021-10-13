import styled from "styled-components";
import backgroundImage from "../../assets/background_image.png";

export const MainStyle = styled.main`
  width: 40vw;
  height: 100vh;
  color: white;
  background-image: url(${backgroundImage}),
    ${(props) => props.theme.linerGradientColor};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const MotionLogo = styled.img`
  width: 60px;
  height: 60px;
`;

export const MotionTitle = styled.h1`
  color: white;
  font-size: ${(props) => props.theme.fontLarge};
  margin: 10px;
`;

export const MotionCaption = styled.p`
  width: 50%;
  height: 10%;
  font-size: ${(props) => props.theme.fontSmall};
  color: #ffffffba;
  text-align: center;
  margin: 10px;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoreButton = styled.button`
  width: 130px;
  height: 40px;
  margin: 5px;
  border-color: rgba(0, 0, 0, 0.07);
  background-color: transparent;
  border: solid grey 1.5px;
  border-radius: ${(props) => props.theme.borderRadiusDefault};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialMediaButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: transparent;
  margin: 10px;
  display: flex;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  opacity: 0.75;
`;

export const CopyRights = styled.p`
  height: 10%;
  align-self: center;
  font-size: ${(props) => props.theme.fontTiny};
`;
