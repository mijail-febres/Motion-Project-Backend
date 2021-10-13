import styled from "styled-components";

export const BurgerMainWrapper = styled.div`
  width: 5%;
`;

export const BurgerIconWrapper = styled.img`
  :hover {
    cursor: pointer;
  }
`;

export const PopUpMenu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 60px;
  right: 5px;
  z-index: 5;
`;

export const MenuOption = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  :hover {
    cursor: pointer;
    background-color: #8080802b;
  }
`;

export const IconWrapper = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
