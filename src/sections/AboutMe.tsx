import styled from "styled-components";
import aboutmeimage from "../assets/aboutmeimage.png";

const Container = styled.div`
  color: var(--secondary);
  background-color: #fff8f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 30px 40px 30px;
  box-sizing: border-box;
  width: 100%;
  gap: 80px;

  @media (min-width: 768px) {
    padding: 150px 20vw;
    gap: 120px;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;

  p {
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 30px;
    color: var(--secondary);
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Image = styled.div`
  img {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    img {
    }
  }
`;

function AboutMe() {
  return (
    <>
      <Container>
        <h1>A propos de moi</h1>
        <Content>
          <Image>
            <img src={aboutmeimage} alt="Justine" />
          </Image>
          <Text>
            <p>
              Ma passion pour le code a été initiée par un cours d'informatique
              que j'ai pris pendant mes études en sociologie.
            </p>
            <p>
              Complètement piquée, j'ai creusé plus profondément depuis: Master
              2 Projets informatiques et Stratégie d’entreprise, puis
              apprentissage autodidacte de React, puis une alternance de deux
              ans dans une start-up en pleine croissance. Là-bas, je me suis
              spécialisée en
              <strong>Typescript, PHP Symfony, Graphql, et SQL</strong>.
            </p>

            <p>
              Initialement développeuse <strong>Frontend</strong>, mon côté
              touche-à-tout m'a rapidement amenée à travailler sur des
              problématiques <strong>Backend</strong>. Je suis polyvalente,
              avide d'apprendre, et toujours prête à relever de nouveaux défis.
            </p>
            <p>
              Lorsque je ne code pas pour le travail, je le fais pour le plaisir
              en construisant des applications et en explorant de nouveaux
              langages, comme le <strong>Python</strong> avec lequel j'ai conçu
              une API de scraping (Flask).{" "}
              <a href="#projects">En savoir plus</a>
            </p>
          </Text>
        </Content>
      </Container>
    </>
  );
}

export default AboutMe;
