import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px 80px 40px;
  height: 100%;
  gap: 20px;
  background-color: #fff3e0;
  @media (min-width: 768px) {
    padding: 100px 20%;
    gap: 40px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    font-weight: normal;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    h1 {
      text-align: left;
    }
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

function Introduction() {
  return (
    <Container>
      <Title>
        <h1>Bonjour !</h1>
        <h1> Ici Justine</h1>
      </Title>
      <Text>
        <p>
          Vous vous demandez probablement ce qui m’a inspiré un design de site
          aussi élégant. Sachez qu’un développeur ne révèle jamais ses secrets
          (seulement son{" "}
          <a
            href="https://github.com/JustineLo/yousign"
            target="_blank"
            rel="noopener noreferrer"
          >
            code source
          </a>
          ).
        </p>
        <p>
          Ce site codé par mes dix petits doigts existe pour vous montrer
          sobrement mon extrême motivation à rejoindre Yousign. Même si son
          potentiel SEO est indéniable, il n’a aucunement l’ambition de
          concurrencer le site officiel.
        </p>
      </Text>
    </Container>
  );
}

export default Introduction;
