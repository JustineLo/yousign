import styled from "styled-components";
import html from "./../assets/stack/html.png";
import css from "./../assets/stack/css.png";
import js from "./../assets/stack/js.png";
import react from "./../assets/stack/react.png";
import ts from "./../assets/stack/typescript.png";
import node from "./../assets/stack/nodejs.png";
import python from "./../assets/stack/python.png";
import php from "./../assets/stack/php.png";
import mysql from "./../assets/stack/mysql.png";
import StackCard from "../components/StackCard";
import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const stack = [
  { name: "React", image: react },
  { name: "Typescript", image: ts },
  { name: "Javascript", image: js },
  { name: "NodeJS", image: node },
  { name: "Python", image: python },
  { name: "PHP", image: php },
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "MySQL", image: mysql },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
  gap: 60px;
  background-color: #fff8f5;

  h1 {
    text-align: center;
  }
`;

const List = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms;
  }

  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 250ms;
  }
`;

function Stack() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % stack.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <h1>Ma Stack </h1>
      <List>
        <TransitionGroup>
          <CSSTransition key={currentIndex} timeout={500} classNames="fade">
            <AnimatedCard>
              <StackCard
                image={stack[currentIndex].image}
                name={stack[currentIndex].name}
              />
            </AnimatedCard>
          </CSSTransition>
        </TransitionGroup>
      </List>
    </Container>
  );
}

export default Stack;
