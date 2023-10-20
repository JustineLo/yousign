import styled from "styled-components";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import Logo from "../components/Logo";

const Container = styled.div`
  background-color: white;
  padding: 60px 30px;
  display: flex;
  flex-direction: column;
  color: var(--secondary);

  @media (min-width: 768px) {
    padding: 80px 20vw;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: end;
    gap: 40%;
  }
`;

const Info = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--grey);
    }
  }
`;

const Credits = styled.p`
  margin-top: 100px;
`;

const links = [
  { label: "Website", link: "https://justinelo.dev", icon: <CgWebsite /> },
  {
    label: "GitHub",
    link: "https://github.com/JustineLo",
    icon: <FaGithub />,
  },
  {
    label: "Repo",
    link: "https://github.com/JustineLo/yousign",
    icon: <FaGithub />,
  },
];

function Footer() {
  return (
    <Container>
      <Content>
        <Info>
          <Logo dark={true} />
          <div>
            <p>
              <strong>Justine Lo</strong>
            </p>
            <p>9 Villa d'Esté</p>
            <p>75013 Paris</p>
            <p>justine.lo.pro@gmail.com</p>
            <p>Tel : +33 6 50 79 22 83</p>
          </div>
        </Info>
        <Links>
          {links.map((link) => (
            <a href={link.link} target="_blank" rel="noreferrer">
              {link.icon}
              {link.label}
            </a>
          ))}
        </Links>
      </Content>
      <Credits>© Justine Lo - 2023</Credits>
    </Container>
  );
}

export default Footer;
