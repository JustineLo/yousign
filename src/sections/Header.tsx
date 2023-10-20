import styled from "styled-components";
import CTAButton from "../components/CTAButton";
import headerimage from "../assets/headerimage.avif";

const Container = styled.div`
  color: white;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  padding: 150px 30px 40px 30px;
  box-sizing: border-box;
  width: 100%;
  gap: 40px;

  @media (min-width: 768px) {
    padding: 150px 20vw;
    flex-direction: row;
  }
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  h1 {
    font-weight: bold;
  }

  h2 {
    font-weight: normal;
  }
  p {
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 30px;
    color: var(--grey);
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Buttons = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 28px;
  }
`;

const Image = styled.div`
  img {
    width: 360px;
  }

  @media (min-width: 768px) {
    img {
      width: 510px;
    }
  }
`;

function Header() {
  return (
    <>
      <Container>
        <Text>
          <Title>
            <h2>La développeuse passionnée</h2>
            <h1>Contactée en 3 clics,</h1>
            <h1>signée en 15 jours</h1>
          </Title>
          <p>
            Ou du moins, elle en rêve. Dans tous les cas, elle adore coder, est
            toujours prête à mettre les mains dans le cambouis et elle tenait à
            vous le faire savoir.
          </p>
          <Buttons>
            <CTAButton href="mailto:justine.lo.pro@gmail.com">
              Prendre rendez-vous
            </CTAButton>
            <CTAButton href="https://justinelo.dev" secondary={true}>
              Voir le portfolio
            </CTAButton>
          </Buttons>
        </Text>

        <Image>
          <img src={headerimage} alt="Justine" />
        </Image>
      </Container>
    </>
  );
}

export default Header;
