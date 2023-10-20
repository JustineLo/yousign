import styled from "styled-components";

interface StackCardProps {
  image: string;
  name: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 120px;
  padding: 15px;
`;
const Image = styled.img`
  width: 50px;
`;
const Name = styled.h2`
  color: var(--secondary);
`;

function StackCard({ image, name }: StackCardProps) {
  return (
    <Container>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
    </Container>
  );
}

export default StackCard;
