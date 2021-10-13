import {
  ProfileDivWrapper,
  ProfileColumnLeft,
  ProfileColumnRight,
  ProfileColumnRightTopRow,
  ProfileColumnRightBottomRow,
  UserStatsDiv,
  AboutDiv,
  ThingsILikeDiv,
  EmailDiv,
  PhoneDiv,
  AboutEmailPhoneDiv,
  NameDiv,
  NumDiv,
  DescriptionDiv,
  ThingsILikeList,
  LikeListItemWrapper,
  MainAvatar,
} from "./ProfileInfoStyled";
import Button from "../Button/Button";
import ProfilePic from "../../assets/default-avatar.png";
import { useSelector } from "react-redux";

const ProfileInfo = (props) => {
  const token = useSelector((state) => state.user.token);

  const followUser = () => {
    const url = `https://motion.propulsion-home.ch/backend/api/social/followers/toggle-follow/${props.userInfo.id}/`;
    const headers = new Headers({
      Authorization: `Bearer ${token}`,
    });
    const method = "POST";
    const config = {
      method,
      headers,
    };
    fetch(url, config).then(props.rerenderFunction());
  };

  return (
    <ProfileDivWrapper>
      {console.log("state", props.userInfo)}

      <>
        <ProfileColumnLeft>
          <MainAvatar
            src={props.userInfo.avatar ? props.userInfo.avatar : ProfilePic}
            alt="ProfilePic"
          />
          <NameDiv>
            {props.userInfo.first_name} {props.userInfo.last_name}
          </NameDiv>
          <div> {props.userInfo.location}</div>
          {props.isLoggedIn ? (
            <Button buttonType="Small" title="Edit Profile" />
          ) : (
            <Button
              buttonType="Small"
              title={
                props.userInfo.logged_in_user_is_following
                  ? "Following"
                  : "Follow"
              }
              onClickFunction={followUser}
              isFollowing={props.userInfo.logged_in_user_is_following}
            />
          )}
        </ProfileColumnLeft>
        <ProfileColumnRight>
          <ProfileColumnRightTopRow>
            <AboutEmailPhoneDiv>
              <AboutDiv>
                <div>About</div> <div>{props.userInfo.about_me}</div>{" "}
              </AboutDiv>
              <EmailDiv>
                {" "}
                <DescriptionDiv>Email</DescriptionDiv> {props.userInfo.email}
              </EmailDiv>
              <PhoneDiv>Phone {props.userInfo.phone}</PhoneDiv>
            </AboutEmailPhoneDiv>

            <ThingsILikeDiv>
              Things I like
              <ThingsILikeList>
                {props.userInfo.things_user_likes
                  ? props.userInfo.things_user_likes.map((like) => (
                      <LikeListItemWrapper>{like}</LikeListItemWrapper>
                    ))
                  : null}
              </ThingsILikeList>
            </ThingsILikeDiv>
          </ProfileColumnRightTopRow>
          <ProfileColumnRightBottomRow>
            <UserStatsDiv>
              <NumDiv>{props.userInfo.amount_of_posts}</NumDiv> <div>Posts</div>
            </UserStatsDiv>
            <UserStatsDiv>
              <NumDiv>{props.userInfo.amount_of_likes}</NumDiv> <div>Likes</div>{" "}
            </UserStatsDiv>
            <UserStatsDiv>
              <NumDiv>{props.userInfo.amount_of_friends}</NumDiv>{" "}
              <div>Friends</div>{" "}
            </UserStatsDiv>
            <UserStatsDiv>
              <NumDiv>{props.userInfo.amount_of_followers}</NumDiv>{" "}
              <div>Followers</div>
            </UserStatsDiv>
            <UserStatsDiv>
              <NumDiv>{props.userInfo.amount_following}</NumDiv>{" "}
              <div>Following</div>{" "}
            </UserStatsDiv>
          </ProfileColumnRightBottomRow>
        </ProfileColumnRight>
      </>
    </ProfileDivWrapper>
  );
};

export default ProfileInfo;
