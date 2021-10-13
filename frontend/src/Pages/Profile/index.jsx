import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import MainHeader from "../../components/MainHeader/MainHeader";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import "./masonry.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setToken, getUserInfo } from "../../store/actions";
import Post from "../../components/Post/Post";

const PostsPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileRow = styled.div`
  margin-top: 5%;
`;

const Profile = (props) => {
  const userInfoLoading = {
    avatar: "",
    first_name: "",
    last_name: "",
    location: "",
    about_me: "",
    email: "",
    phone: "",
    amount_of_posts: "",
    amount_of_likes: "",
    amount_of_friends: "",
    amount_of_followers: "",
    amount_following: "",
    things_user_likes: "",
  };

  console.log(props.match.params.username);

  const [posts, setPosts] = useState("");
  const [like, setLike] = useState(false);
  const [userInfoClicked, setuserInfoClicked] = useState(userInfoLoading);
  const [rerender, setRerender] = useState(false);

  const rerenderFunction = () => setRerender(!rerender);

  const dispatch = useDispatch();

  const tokenRedux = useSelector((state) => state.user.token);
  const userLoggedIn = useSelector((state) => state.user.userInfo);

  const userIdClicked = useSelector((state) => {
    console.log("user clicked", state.user.userClicked);
    return state.user.userClicked;
  });

  console.log("userinfo clicked", userInfoClicked);

  const getTokenSetUserAndPostsOfUser = () => {
    const tokenInLocalStorage = localStorage.getItem("motion-auth-token");
    if (tokenInLocalStorage) {
      dispatch(setToken(tokenInLocalStorage));
      dispatch(() => getUserInfo(dispatch, tokenInLocalStorage));

      // fetch posts of user
      const url = `https://motion.propulsion-home.ch/backend/api/social/posts/user/${userIdClicked}/`;
      console.log(url);
      const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenInLocalStorage}`,
      });
      const config = {
        headers,
      };
      fetch(url, config)
        .then((res) => res.json())
        .then((data) => {
          console.log("posts data fetched for user", data.results);
          setPosts(data.results);
        });
      // fetch userInfo
      const urlUserInfo = `https://motion.propulsion-home.ch/backend/api/users/${userIdClicked}/`;
      fetch(urlUserInfo, config)
        .then((res) => res.json())
        .then((data) => {
          console.log("userInfo from user clicked", data);
          setuserInfoClicked(data);
        });
      // // fetch posts logged in user liked
      // const urlLikedPosts = `https://motion.propulsion-home.ch/backend/api/posts/likes/`;
      // fetch(urlLikedPosts, config)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log("liked posts of logged in user", data);
      //     // setuserInfoClicked(data);
      //   });
    }
  };

  useEffect(getTokenSetUserAndPostsOfUser, [
    dispatch,
    like,
    userIdClicked,
    rerender,
  ]);
  const breakpointColumnsObj = {
    default: 2,
    1000: 1,
  };

  const likePost = (postId) => {
    const url = `https://motion.propulsion-home.ch/backend/api/social/posts/toggle-like/${postId}/`;
    const headers = new Headers({
      Authorization: `Bearer ${tokenRedux}`,
    });
    const method = "POST";
    const config = {
      method,
      headers,
    };
    fetch(url, config)
      .then((res) => res.json())
      .then(() => {
        setLike(!like);
      });
  };

  return (
    <PostsPageWrapper>
      <MainHeader />

      <ProfileRow>
        <ProfileInfo
          userInfo={userInfoClicked}
          userIdClicked={userIdClicked}
          isLoggedIn={userLoggedIn.id === userInfoClicked.id}
          rerenderFunction={rerenderFunction}
        />{" "}
      </ProfileRow>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts
          ? posts.map((post) => (
              <Post
                key={post.id}
                content={post.content}
                avatar={post.user.avatar}
                name={`${post.user.first_name} ${post.user.last_name}`}
                created={post.created}
                photos={post.images[0] ? post.images : null}
                likesAmmount={post.amount_of_likes}
                likedByMe={post.logged_in_user_liked}
                id={post.id}
                likePost={likePost}
              />
            ))
          : null}
      </Masonry>
    </PostsPageWrapper>
  );
};

export default Profile;
