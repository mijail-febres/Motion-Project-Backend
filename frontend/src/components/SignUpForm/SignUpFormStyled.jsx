import styled from "styled-components";

export const FormDivWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

export const SignInFormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SignInTitle = styled.p`
  font-size: 40px;
`;

export const InputsCombinedWrapper = styled.div`
  height: 15%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid #00000030;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputWrapperTwoPerLine = styled.div`
  width: 100%;
  padding-bottom: 8px;
  margin-top: 20px;
  border-bottom: 1px solid #00000030;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 85%;
  border: none;

  :focus {
    outline: none;
  }
`;

export const InputSmall = styled.input`
  width: 40%;
  border: none;

  :focus {
    outline: none;
  }
`;
