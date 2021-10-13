import styled from "styled-components";

export const PostOuterWrapper = styled.div`
  width: 560px;
  min-height: 200px;
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 13px;
`;

export const PostHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SubHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const AvatarImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const PosterName = styled.p`
  font-size: ${(props) => props.theme.fontSmall};
`;

export const PostTime = styled.p`
  font-size: ${(props) => props.theme.fontSmall};
  color: #00000075;
`;

export const PostContent = styled.div`
  width: 100%;
  min-height: 5%;
  max-height: 14%;
  word-wrap: break-word;
  overflow: hidden;
`;

export const PostedImg = styled.img`
  align-self: center;
  max-width: 500px;
  max-height: 250px;
`;

export const PostedImgMultiple = styled(PostedImg)`
  max-width: 200px;
  max-height: 200px;
`;

export const PostFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LikeShareButtonsWrapper = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSmall};

  :hover {
    cursor: pointer;
  }
`;

export const NumOfLikesWrapper = styled.div`
  width: 9%;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSmall};
  margin-left: auto;
  color: #00000060;
`;
