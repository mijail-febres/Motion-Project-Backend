import styled from "styled-components";

export const FormDivWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

export const SignInFormWrapper = styled.form`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SignInTitle = styled.p`
  font-size: 40px;
`;

export const InputsCombinedWrapper = styled.div`
  height: 40%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 20px;
  padding-bottom: 8px;
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
