import {
  BurgerMainWrapper,
  PopUpMenu,
  MenuOption,
  BurgerIconWrapper,
  IconWrapper,
} from "./BurgerMenuHeaderStyled";
import { useState } from "react";
import BurgerIcon from "../../assets/svgs/menu.svg";
import UserIcon from "../../assets/svgs/avatar-black.svg";
import LogOutIcon from "../../assets/svgs/logout.svg";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/actions";
import { setUserClicked } from "../../store/actions";


const BurgerMenuHeader = (props) => {
  const [showMenu, setMenu] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const popUp = () => {
    setMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("motion-auth-token");
    dispatch(logOut());
    history.push("/");
  };

  const goToUserProfile = () => {
    // need action to put id of clicked user into store

    dispatch(setUserClicked(props.userInfo.id));
    console.log("setting user id", props.userInfo.id);
    history.push(`/profile/${props.userInfo.username}`);
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
          <MenuOption
            onClick={() => goToUserProfile()}
          >
            <IconWrapper src={UserIcon} />
            Profile
          </MenuOption>
          <MenuOption onClick={handleLogout}>
            <IconWrapper src={LogOutIcon} />
            Logout
          </MenuOption>
        </PopUpMenu>
      ) : null}
    </BurgerMainWrapper>
  );
};

export default BurgerMenuHeader;
