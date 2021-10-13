import {
  MainHeaderWrapper,
  MainHeaderLeft,
  MotionLeftWrapper,
  PostLeftWrapper,
  FindFriendsLeftWrapper,
  MainHeaderRight,
  AvatarImg,
} from "./MainHeaderStyled";
import { Link } from "react-router-dom";
import MotionLogoPurple from "../../assets/logo.png";
import PostsLogo from "../../assets/posts_logo.png";
import IconFriends from "../../assets/svgs/icon-friends.svg";
import NotificationBell from "../../assets/svgs/notification_bell.svg";
import BurgerMenuHeader from "../BurgerMenuHeader/BurgerMenuHeader";
import { useSelector } from "react-redux";
import testImg from "../../assets/default-avatar.png";

const MainHeader = (props) => {
  const userInfo = useSelector((state) => state.user.userInfo);

  return (
    <MainHeaderWrapper>
      <MainHeaderLeft>
        <MotionLeftWrapper>
          <img src={MotionLogoPurple} alt="Motion_Logo_Purple" />
          <p>Motion</p>
        </MotionLeftWrapper>
        <PostLeftWrapper>
          <img src={PostsLogo} alt="Posts_Logo" />
          <Link to="/home">Post </Link>
        </PostLeftWrapper>
        <FindFriendsLeftWrapper>
          <img src={IconFriends} alt="Posts_Logo" />
          <Link to="/findfriends">Find Friends</Link>
        </FindFriendsLeftWrapper>
      </MainHeaderLeft>
      <MainHeaderRight>
        <img src={NotificationBell} alt="Notification" />
        <button>
          {" "}
          <AvatarImg
            src={
              userInfo ? (userInfo.avatar ? userInfo.avatar : testImg) : testImg
            }
            alt="ProfilePic"
          />{" "}
        </button>
        <BurgerMenuHeader userInfo={userInfo} />
      </MainHeaderRight>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
