import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import CV from "../assets/LO_Justine_CV.pdf";

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
    background-color: #f5f6f7;
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
  background-color: #f5f6f7;
  width: 100%;
`;

const Navlink = styled.div`
  padding: 20px 20px;
  font-size: 16px;
  border-top: 1px solid #e2ebf2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  svg {
    font-size: 22px;
  }

  &.dropdown-open {
    color: #0078bd;
    svg {
      transform: rotate(180deg);
    }
  }
`;

const Dropdown = styled.div`
  border-top: 1px solid #e2ebf2;
  padding: 5px 0;
  background-color: white;
`;

const DropdownLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 40px;
  background-color: white;
  cursor: pointer;
`;

const Icon = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 16px;
  }
`;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  }

  function handleDropdownClick() {
    setIsDropdownOpen(!isDropdownOpen);
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
          <Navlink
            onClick={handleDropdownClick}
            className={isDropdownOpen ? "dropdown-open" : ""}
          >
            A propos <FiChevronDown />
          </Navlink>
          {isDropdownOpen && (
            <Dropdown>
              <DropdownLink
                href="https://justinelo.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon backgroundColor="#B3DDFF">
                  <CgWebsite />
                </Icon>
                Portfolio
              </DropdownLink>
              <DropdownLink
                href="https://github.com/JustineLo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon backgroundColor="#F9C3BC">
                  <BsGithub />
                </Icon>
                Github
              </DropdownLink>
              <DropdownLink
                href={CV}
                download="LO_Justine_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Icon backgroundColor="#B8A9F5">
                  <FaRegFilePdf />
                </Icon>
                CV
              </DropdownLink>
            </Dropdown>
          )}

          <Navlink>
            <a href="mailto:justine.lo.pro@gmail.com">Contact</a>
          </Navlink>
        </MenuContent>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
