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
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  width: 100%;
  background-color: var(--secondary);
  transition: all 0.2s ease-in-out;

  &.menu-open {
    background-color: var(--light-grey);
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding: 0 20vw;

    &:hover {
      background-color: var(--light-grey);

      a {
        color: var(--secondary);
      }
    }
  }
`;

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: transparent;
  box-sizing: border-box;

  &.menu-open {
    color: var(--secondary);
  }

  @media (min-width: 768px) {
    padding: 20px 0;
    width: auto;
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
  display: none;
  &.menu-open {
    display: block;
    background-color: var(--light-grey);
    width: 100%;
    height: 90vh;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    color: white;
    padding-left: 10px;
  }
`;

const Navlink = styled.div`
  padding: 20px 20px;
  font-size: 16px;
  border-top: 1px solid #e2ebf2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  svg {
    font-size: 22px;
    transition: all 0.2s ease-in-out;
  }

  &.dropdown-open {
    color: #0078bd;
    svg {
      transform: rotate(180deg);
    }
  }

  @media (min-width: 768px) {
    border: none;
    color: #b6d2e3;
    justify-content: start;
    align-items: center;
    gap: 6px;

    &.is-hovered {
      color: var(--secondary);
    }

    &:hover {
      color: #0078bd;
      svg {
        transform: rotate(180deg);
      }
    }
  }
`;

const Links = styled.div`
  color: var(--secondary);

  @media (min-width: 768px) {
    border-left: 1px solid #e2ebf2;
  }
`;

const Dropdown = styled.div`
  border-top: 1px solid #e2ebf2;
  padding: 5px 0;
  background-color: white;

  @media (min-width: 768px) {
    display: flex;
    gap: 5px;
    padding: 50px 20vw;
    border: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
  }
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

const DropdownLink = styled.a<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 20px;
  padding: 20px 40px;
  background-color: white;
  color: var(--secondary);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.backgroundColor};

    ${Icon} {
      background-color: white;
    }
  }
`;

const Title = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px 40px;
    color: var(--secondary);

    p {
      color: var(--grey);
    }
  }
`;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isNavbarHovered, setIsNavbarHovered] = useState<boolean>(false);
  const [isLinkHovered, setIsLinkHovered] = useState<boolean>(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  }

  function handleDropdownClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <NavbarContainer
      className={isMenuOpen ? "menu-open" : ""}
      onMouseEnter={() => setIsNavbarHovered(true)}
      onMouseLeave={() => setIsNavbarHovered(false)}
    >
      <Topbar className={isMenuOpen ? "menu-open" : ""}>
        <Logo dark={isMenuOpen || isNavbarHovered} />
        <MenuButton
          onClick={handleMenuClick}
          className={isMenuOpen ? "menu-open" : ""}
        >
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />} Menu
        </MenuButton>
      </Topbar>

      <MenuContent className={isMenuOpen ? "menu-open" : ""}>
        <div
          onMouseEnter={() => setIsLinkHovered(true)}
          onMouseLeave={() => setIsLinkHovered(false)}
        >
          <Navlink
            onClick={handleDropdownClick}
            className={`${isDropdownOpen ? "dropdown-open" : ""} ${
              isNavbarHovered ? "is-hovered" : ""
            }`}
          >
            A propos <FiChevronDown />
          </Navlink>
          {(isDropdownOpen || isLinkHovered) && (
            <Dropdown>
              <Title>
                <h2>A propos</h2>
                <p>Découvrez qui je suis {":)"}</p>
              </Title>
              <Links>
                <DropdownLink
                  href="https://justinelo.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  backgroundColor="#B3DDFF"
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
                  backgroundColor="#F9C3BC"
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
                  backgroundColor="#B8A9F5"
                >
                  <Icon backgroundColor="#B8A9F5">
                    <FaRegFilePdf />
                  </Icon>
                  CV
                </DropdownLink>
              </Links>
            </Dropdown>
          )}
        </div>
        <Navlink>
          <a href="mailto:justine.lo.pro@gmail.com">Contact</a>
        </Navlink>
      </MenuContent>
    </NavbarContainer>
  );
};

export default Navbar;
