import React from "react";
import { StyledButtonBig, StyledButtonSmall } from "./ButtonStyled";

const Button = (props) => {
  return (
    <div>
      {props.buttonType === "Big" ? (
        <StyledButtonBig onClick={props.onClickFunction}>
          {" "}
          {props.title}{" "}
        </StyledButtonBig>
      ) : (
        <StyledButtonSmall
          onClick={props.onClickFunction}
          isFollowing={props.isFollowing}
        >
          {" "}
          {props.title}{" "}
        </StyledButtonSmall>
      )}
    </div>
  );
};

export default Button;
