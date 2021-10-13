import {
  BurgerMainWrapper,
  PopUpMenu,
  MenuOption,
  BurgerIconWrapper,
} from "./BurgerMenuStyled";
import { useState } from "react";
import BurgerIcon from "../../assets/svgs/menu.svg";
import { ReactComponent as DeleteIcon } from "../../assets/svgs/delete.svg";

const BurgerMenu = (props) => {
  const [showMenu, setMenu] = useState(false);

  const popUp = () => {
    setMenu(!showMenu);
  };

  return (
    <BurgerMainWrapper>
      <BurgerIconWrapper
        src={BurgerIcon}
        onClick={() => popUp()}
        alt="Burger menu icon"
      />
      {showMenu ? (
        <PopUpMenu>
          <MenuOption onClick={() => props.deletePost(props.id)}>
            <DeleteIcon />
            Delete Post
          </MenuOption>
        </PopUpMenu>
      ) : null}
    </BurgerMainWrapper>
  );
};

export default BurgerMenu;
