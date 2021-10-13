import {
  MainStyle,
  TopContainer,
  MotionLogo,
  MotionTitle,
  MotionCaption,
  MiddleContainer,
  StoreButton,
  BottomContainer,
  ButtonContainer,
  SocialMediaButton,
  Icon,
  CopyRights,
} from "./MotionInfoStyled";
import logo from "../../assets/logo_white.png";
import apple from "../../assets/svgs/apple.svg";
import google from "../../assets/svgs/google.svg";

import twitter from "../../assets/svgs/twitter_icon.svg";
import facebook from "../../assets/svgs/facebook_icon.svg";
import instagram from "../../assets/svgs/instagram_icon.svg";

const motionInfo = (props) => {
  return (
    <MainStyle>
      <TopContainer>
        <MotionLogo src={logo} alt="Motion_Logo" />
        <MotionTitle>Motion</MotionTitle>
        <MotionCaption>
          Connect with friends and the world around you with Motion
        </MotionCaption>
      </TopContainer>

      <MiddleContainer>
        <StoreButton>
          <a href="https://www.apple.com/store">
            <img src={apple} alt="Apple_Store" />
          </a>
        </StoreButton>
        <StoreButton>
          <a href="https://play.google.com/store">
            <img src={google} alt="Google_Play" />
          </a>
        </StoreButton>
      </MiddleContainer>

      <BottomContainer>
        <ButtonContainer>
          <SocialMediaButton>
            <a href="https://twitter.com">
              <Icon src={twitter} alt="twitter" />
            </a>
          </SocialMediaButton>
          <SocialMediaButton>
            <a href="https://facebook.com">
              <Icon src={facebook} alt="facebook" />
            </a>
          </SocialMediaButton>
          <SocialMediaButton>
            <a href="https://instagram.com">
              <Icon src={instagram} alt="instagram" />
            </a>
          </SocialMediaButton>
        </ButtonContainer>

        <CopyRights>© Motion 2018. All rights reserved.</CopyRights>
      </BottomContainer>
    </MainStyle>
  );
};

export default motionInfo;
