import { ReactComponent as SearchIcon } from "../../assets/svgs/send_button.svg";
import { ReactComponent as ImageUploadIcon } from "../../assets/svgs/imageUploadIcon.svg";
import {
  CreatePostStyled,
  CreatePostStyledRow1,
  // CreatePostStyledRow2,
  Input,
  ButtonRound,
  ImageUpload,
  ImageUploadIconLabel,
  AvatarImg,
} from "./CreatePostStyled";
import { useState } from "react";
import { useSelector } from "react-redux";
import defaultAvatar from "../../assets/default-avatar.png";

const CreatePost = (props) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.user.userInfo);

  const submitPost = () => {
    console.log("submitting post");
    console.log("content", content);
    console.log("image", image);
    const url = "https://motion.propulsion-home.ch/backend/api/social/posts/";
    const token = localStorage.getItem("motion-auth-token");
    const headers = new Headers({
      Authorization: `Bearer ${token}`,
    });

    const formData = new FormData();
    formData.append("images", image);
    formData.append("content", content);

    const method = "POST";
    const config = {
      method,
      headers,
      body: formData,
    };

    fetch(url, config).then((res) => {
      console.log(res);
      props.rerenderFunction();
    });
  };

  const handleChange = (event) => {
    setContent(event.target.value);
    console.log("content", content);
  };

  const handleImage = (event) => {
    console.log("HANDLING IMAGE", event.target.files[0]);
    setImage(event.target.files[0]);
  };

  return (
    <CreatePostStyled>
      <CreatePostStyledRow1>
        <AvatarImg
          src={
            user ? (user.avatar ? user.avatar : defaultAvatar) : defaultAvatar
          }
        />
        <Input
          type="text"
          placeholder="What is on your mind today?"
          value={content}
          name="content"
          onChange={handleChange}
        />
        <ImageUploadIconLabel>
          <ImageUploadIcon />
          <ImageUpload type="file" name="image" onChange={handleImage} />{" "}
        </ImageUploadIconLabel>
        <ButtonRound type="submit" onClick={() => submitPost()}>
          <SearchIcon />
        </ButtonRound>
      </CreatePostStyledRow1>
    </CreatePostStyled>
  );
};

export default CreatePost;
