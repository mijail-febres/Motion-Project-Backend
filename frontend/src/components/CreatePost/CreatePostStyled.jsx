import styled from "styled-components";

export const CreatePostStyled = styled.div`
  width: 560px;
  height: 120px;

  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`;

export const CreatePostStyledRow1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// export const CreatePostStyledRow2 = styled.div`
//   width: 21%;
//   height: 10%;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
// `;

export const Input = styled.input`
  width: 50%;
  border: none;

  :focus {
    outline: none;
  }
`;

export const ButtonRound = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${(props) => props.theme.linerGradientColor};
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const ImageUpload = styled.input`
  height: 60px;
  padding-left: 5%;
  display: none;
`;

export const ImageUploadIconLabel = styled.label`
  :hover {
    cursor: pointer;
  }
`;

export const AvatarImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
