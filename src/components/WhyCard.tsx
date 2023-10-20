import styled from "styled-components";

interface WhyCardProps {
  title: string;
  image: string;
  text: string;
  color: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  box-sizing: border-box;
  border-radius: 30px;
  height: 100%;
  position: relative;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    justify-content: start;
  }
`;

const Header = styled.div<{ color: string }>`
  background-color: ${(props) =>
    `rgba(${parseInt(props.color.slice(1, 3), 16)}, ${parseInt(
      props.color.slice(3, 5),
      16
    )}, ${parseInt(props.color.slice(5, 7), 16)}, 0.4)`};
  overflow: hidden;
  border-radius: 30px 30px 0 0;
  width: 100%;
  height: 100px;
  padding: 60px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-weight: normal;
  text-align: center;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-weight: bold;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px 40px;
`;

const Icon = styled.div<{ color: string }>`
  font-size: 40px;
  background-color: ${(props) => props.color};
  padding: 32px 10px 25px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -40px;
`;

function WhyCard({ title, image, text, color }: WhyCardProps) {
  return (
    <Container>
      <Icon color={color}>{image}</Icon>
      <Header color={color}>
        <Title>{title}</Title>
      </Header>

      <Text>{text}</Text>
    </Container>
  );
}

export default WhyCard;
