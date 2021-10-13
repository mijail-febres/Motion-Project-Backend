import styled from "styled-components";

const StyledButtonBig = styled.button`
  width: 280px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: ${(props) => props.theme.linerGradientColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: #ffffff;
  line-height: 14px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const StyledButtonSmall = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 30px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  mix-blend-mode: normal;
  border-color: rgba(0, 0, 0, 0.07);
  box-shadow: ${(props) => props.theme.boxShadow};
  cursor: pointer;
  font-size: 10px;
  color: #000000;
  background: ${(props) =>
    props.isFollowing ? props.theme.linerGradientColor : "transparent"};
`;

export { StyledButtonBig, StyledButtonSmall };
