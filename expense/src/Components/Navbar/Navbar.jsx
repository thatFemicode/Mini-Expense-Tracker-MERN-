import React, { useState } from "react";
import { NavbarStyled } from "./NavbarStyled";
import { OuterLayout } from "../../Layout/Layout";
// import logo from "./img/GSW.svg";
import logo from "./img/slack.svg";
import { Hash } from "react-feather";

// import { useGlobalContext } from "../../Context/context.js";
import Hamburger from "./Hamburger/Hamburger";
const Navbar = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Dubnation",
  });
  const [disabled, setDisabled] = useState(false);
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const handleMenu = () => {
    document.body.classList.toggle("no-scroll");
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Dubnation",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };
  return (
    <NavbarStyled>
      <OuterLayout>
        <div className="navigation">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="hashtag">
            <button onClick={handleMenu} disabled={disabled}>
              <Hash /> {state.menuName}
            </button>
          </div>
          {/* <Buttons clicked={isSidebarOpen} onClick={openSidebar} /> */}
        </div>
      </OuterLayout>
      <Hamburger state={state} />
    </NavbarStyled>
  );
};

export default Navbar;
