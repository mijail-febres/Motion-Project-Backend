import {
  PostOuterWrapper,
  PostHeaderWrapper,
  SubHeaderWrapper,
  AvatarImg,
  PosterName,
  PostTime,
  PostContent,
  PostedImg,
  PostedImgMultiple,
  PostFooterWrapper,
  LikeShareButtonsWrapper,
  NumOfLikesWrapper,
} from "./PostStyled";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { ReactComponent as HeartIcon } from "../../assets/svgs/heart.svg";
import { ReactComponent as LikedHeartIcon } from "../../assets/svgs/likedheart.svg";
import { ReactComponent as ShareIcon } from "../../assets/svgs/share.svg";
import testImg from "../../assets/default-avatar.png";
import { useHistory } from "react-router-dom";
import { setUserClicked } from "../../store/actions";
import { useDispatch } from "react-redux";
import Masonry from "react-masonry-css";
import "./masonry.css";

const Post = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const timeNow = new Date();
  const originalPostTime = new Date(props.created);
  function timeDifference(date1, date2) {
    let difference = date1.getTime() - date2.getTime();

    let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24;

    let hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60;

    let minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;

    let secondsDifference = Math.floor(difference / 1000);

    if (daysDifference > 0) {
      if (daysDifference === 1) {
        return `${daysDifference} day ago`;
      } else {
        return `${daysDifference} days ago`;
      }
    } else if (hoursDifference > 0) {
      if (hoursDifference === 1) {
        return `${hoursDifference} hour ago`;
      } else {
        return `${hoursDifference} hours ago`;
      }
    } else if (hoursDifference < 1 && minutesDifference > 0) {
      if (minutesDifference === 1) {
        return `${minutesDifference} minute ago`;
      } else {
        return `${minutesDifference} minutes ago`;
      }
    } else if (hoursDifference < 1 && minutesDifference < 1) {
      if (secondsDifference === 1) {
        return `${secondsDifference} second ago`;
      } else {
        return `${secondsDifference} seconds ago`;
      }
    }
  }

  const postTimeDifference = timeDifference(timeNow, originalPostTime);
  const breakpointColumnsObj = {
    default: 2,
  };

  const goToUserProfile = () => {
    // need action to put id of clicked user into store

    dispatch(setUserClicked(props.userID));
    console.log("clicked on user name", props.userID);
    history.push(`/profile/${props.username}`);
  };

  return (
    <PostOuterWrapper>
      <PostHeaderWrapper>
        <AvatarImg src={!props.avatar ? testImg : props.avatar} alt="av" />
        <SubHeaderWrapper>
          <PosterName onClick={() => goToUserProfile()}>
            {props.name}
          </PosterName>
          <PostTime>{postTimeDifference}</PostTime>
        </SubHeaderWrapper>
        <BurgerMenu deletePost={props.deletePost} id={props.id} />
      </PostHeaderWrapper>
      <PostContent>{props.content}</PostContent>
      {props.photos ? (
        props.photos.length > 1 ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonrypost-grid"
            columnClassName="my-masonrypost-grid_column"
          >
            {props.photos.map((photo) => (
              <PostedImgMultiple src={photo.image} alt="wat" />
            ))}
          </Masonry>
        ) : (
          <PostedImg src={props.photos[0].image} alt="wat" />
        )
      ) : null}
      <PostFooterWrapper>
        <LikeShareButtonsWrapper onClick={() => props.likePost(props.id)}>
          {props.likedByMe ? <LikedHeartIcon /> : <HeartIcon />}
          Like
        </LikeShareButtonsWrapper>
        <LikeShareButtonsWrapper>
          <ShareIcon />
          Share
        </LikeShareButtonsWrapper>
        <NumOfLikesWrapper>{props.likesAmmount} Likes</NumOfLikesWrapper>
      </PostFooterWrapper>
    </PostOuterWrapper>
  );
};

export default Post;
