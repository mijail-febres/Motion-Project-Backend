import {
  SubHeaderWrapper,
  SubHeaderLeft,
  SubHeaderRight,
  SubHeaderButtons,
} from "./PostsSubHeaderStyled";
import SearchIcon from "../../assets/svgs/search_icon.svg";
// import { useState } from "react";

const PostSubHeader = (props) => {
  //// change the "liked, Friends, Follow" color when clicked  ////

  //   const handleColor = () => {
  //     setColor(!color);
  //     console.log("hello from handleColor");
  //   };

  return (
    <SubHeaderWrapper>
      <SubHeaderLeft>
        <img src={SearchIcon} alt="search_icon" />
        <input type="text" placeholder="Search posts..." />
      </SubHeaderLeft>

      <SubHeaderRight>
        <SubHeaderButtons>Liked</SubHeaderButtons>
        <SubHeaderButtons>Friends</SubHeaderButtons>
        <SubHeaderButtons>Follow</SubHeaderButtons>
      </SubHeaderRight>
    </SubHeaderWrapper>
  );
};

export default PostSubHeader;
