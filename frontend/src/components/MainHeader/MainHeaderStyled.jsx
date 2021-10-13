import styled from "styled-components";

export const MainHeaderWrapper = styled.div`
  width: 100vw;
  height: 8%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  box-sizing: border-box;
`;

export const MainHeaderLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const MotionLeftWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  img {
    margin: 5px;
  }
  p {
    font-size: ${(props) => props.theme.fontBig};
  }
`;

export const PostLeftWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;

  img {
    margin: 5px;
    color: grey;
  }
`;

export const FindFriendsLeftWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;

  img {
    margin: 5px;
  }
`;

export const MainHeaderRight = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    border: none;
    background-color: transparent;
  }
`;

export const AvatarImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;