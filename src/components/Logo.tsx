import styled from "styled-components";
import logoPart1 from "../assets/logoyousign.svg";
import logoPart2 from "../assets/logoPart2.png";
import logoPart1dark from "../assets/logodark.svg";
import logoPart2dark from "../assets/logoPart2dark.png";

interface LogoProps {
  dark?: boolean;
}

const Container = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const PartOne = styled.img`
  width: 98px;
`;
const PartTwo = styled.img`
  width: 80px;
  position: relative;
  top: 3px;
  left: -10px;
`;

function Logo({ dark = false }: LogoProps) {
  return (
    <Container>
      {dark ? (
        <>
          <PartOne src={logoPart1dark} alt="logo part 1" />
          <PartTwo src={logoPart2dark} alt="and Justine" />
        </>
      ) : (
        <>
          <PartOne src={logoPart1} alt="logo part 1" />
          <PartTwo src={logoPart2} alt="and Justine" />
        </>
      )}
    </Container>
  );
}

export default Logo;
