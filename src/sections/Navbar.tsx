import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
type MenuLink = {
  label: string;
  link: string;
  icon: JSX.Element;
};

type DropdownMenu = {
  label: string;
  menus: MenuLink[];
};

const NavbarContainer = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;

  @media (min-width: 768px) {
    display: flex;
    padding: 0 20vw;
  }
`;

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: var(--secondary);
  box-sizing: border-box;

  &.menu-open {
    background-color: white;
    color: var(--secondary);
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  img {
    max-width: 30px;
  }

  svg {
    font-size: 24px;
  }

  &.menu-open {
    color: var(--secondary);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuContent = styled.div`
  background-color: white;
  width: 100%;
`;

const Navlink = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  border-top: 1px solid var(--light-grey);
`;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  }

  return (
    <NavbarContainer>
      <Topbar className={isMenuOpen ? "menu-open" : ""}>
        <Logo dark={isMenuOpen} />
        <MenuButton
          onClick={handleMenuClick}
          className={isMenuOpen ? "menu-open" : ""}
        >
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />} Menu
        </MenuButton>
      </Topbar>
      {isMenuOpen && (
        <MenuContent>
          <Navlink>A propos</Navlink>
          <Navlink>Contact</Navlink>
        </MenuContent>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
