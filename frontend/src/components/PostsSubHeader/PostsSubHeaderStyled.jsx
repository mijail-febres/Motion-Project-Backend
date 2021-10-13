import styled from "styled-components";

export const SubHeaderWrapper = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: #dad7d76a solid 0.25px;
  box-sizing: border-box;
`;

export const SubHeaderLeft = styled.div`
  width: 65%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;

  img {
    margin: 10px;
    width: 14px;
    height: 14px;
  }

  input {
    font-size: ${(props) => props.theme.fontSmall};
    border: none;
    outline: none;
  }
`;
export const SubHeaderRight = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubHeaderButtons = styled.button`
  height: 100%;
  font-size: ${(props) => props.theme.fontSmall};
  color: ${(props) => (props.color ? "black" : "grey")};
  background-color: transparent;
  border: none;
  border-bottom: ${(props) => (props.color ? "black solid 2px" : "none")};
`;
