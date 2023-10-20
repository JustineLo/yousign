import styled from "styled-components";
import WhyCard from "../components/WhyCard";

const content = [
  {
    title: "Environnement stimulant",
    image: "🔥",
    text: " La combinaison d'innovation et d'ambition internationale chez Yousign créé un environnement particulièrement stimulant. Le défi de concevoir un produit SaaS qui doit être à la fois simple, intuitif et capable d'accueillir des millions d'utilisateurs est pour moi extrêmement excitant. Je suis convaincue que ma passion pour le code et mes compétences seront à la hauteur du challenge.",
    color: "#ff7474",
  },
  {
    title: "Appétit pour l'Apprentissage",
    image: "💡",
    text: "La culture de l'entreprise chez Yousign, axée sur l'amélioration continue et le partage des connaissances, correspond parfaitement à ma propre philosophie professionnelle. Je suis persuadée que ma soif d'apprendre et mon adaptabilité seront des atouts précieux à la réussite des projets de l'équipe. Je serais également ravie d'apporter mes connaissances si l'opportunité se présente, notamment grâce aux guildes par expertise et au pair-programming.",
    color: "#ffaf37",
  },
  {
    title: "Mission-Driven",
    image: "🌍",
    text: "Ayant précédemment travaillé dans une entreprise dans le secteur de l'écologie, je suis passionnée par l'utilisation de la technologie pour créer des produits à fort impact. C'est pourquoi la mission de Yousign résonne avec moi et je serais ravie de continuer à utiliser mes compétences sur des projets qui ont du sens.",
    color: "#1ED6A3",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 0;
  height: 100%;
  gap: 100px;

  h1 {
    text-align: center;
  }

  @media (min-width: 768px) {
    gap: 20px;

    h1 {
      padding: 0 20%;
    }
  }
`;

const Title = styled.div`
  width: 100%;
`;

const Cols = styled.div`
  display: flex;
  flex-direction: column;

  gap: 100px;
  padding: 20px 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding-top: 100px;
    height: 100%;
  }
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    width: 29%;
    height: auto;
    min-height: 100%;
  }

  @media (min-width: 1440px) {
    width: 20%;
  }
`;

function WhyWorkHere() {
  return (
    <Container>
      <Title>
        <h1>Pourquoi je souhaite</h1>
        <h1>
          <strong>rejoindre Yousign</strong>
        </h1>
      </Title>

      <Cols>
        {content.map((card) => (
          <Col key={`col-${card.title}`}>
            <WhyCard
              title={card.title}
              image={card.image}
              text={card.text}
              color={card.color}
            />
          </Col>
        ))}
      </Cols>
    </Container>
  );
}

export default WhyWorkHere;
