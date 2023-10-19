import styled from "styled-components";

interface CTAButtonProps {
  children: React.ReactNode;
  secondary?: boolean;
  href: string;
}

const Container = styled.a`
  color: var(--secondary);
  background-color: var(--primary);
  border-radius: 50px;
  margin-top: 30px;
  padding: 20px 25px;
  font-size: 16px;
  font-weight: bold;
  line-height: 120%;
  transition: background-color 0.2s;
  border: none;
  width: 100%;
  box-sizing: border-box;
  text-align: center;

  &:hover {
    background-color: white;
  }

  &.secondary {
    background-color: white;
    color: var(--secondary);
    &:hover {
      background-color: var(--light-grey);
    }
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

function CTAButton({ children, secondary = false, href }: CTAButtonProps) {
  return (
    <Container href={href} className={secondary ? "secondary" : ""}>
      {children}
    </Container>
  );
}

export default CTAButton;
