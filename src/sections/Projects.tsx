import styled, { keyframes } from "styled-components";
import chaton from "./../assets/projects/chaton.png";
import jloshop from "./../assets/projects/jloshop.png";
import rnc from "./../assets/projects/rnc.png";
import mgb from "./../assets/projects/mgb.png";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 30px 40px 30px;
  gap: 20px;
  background-color: var(--secondary);

  @media (min-width: 768px) {
    padding: 150px 20vw;
    gap: 120px;
  }
`;

const Title = styled.h1`
  color: white;
`;

const Cards = styled.div`
  display: flex;
  gap: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    gap: 80px;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--primary);
  }
`;

const projects = [
  {
    image: rnc,
    title: "ReadNCollect",
    description:
      "<p><strong>ReadNCollect</strong> est une application React qui permet de lire des articles en ligne, surligner et créer des notes, puis compiler les différentes notes dans un Collage</p><p> En utilisant un <strong>backend en Python</strong> pour le web scraping et la sanitisation du contenu, l'application livre les articles dans un format sans distraction.</p><p> ReadNCollect mélange harmonieusement une lecture efficace avec une compilation créative de notes, répondant aux besoins en évolution du lecteur moderne.</p>",
    link: "https://readncollect.com/",
    repo: "https://github.com/justineLo/readncollect",
  },
  {
    image: jloshop,
    title: "JLO Shop",
    description:
      "<p><strong>JLO Shop</strong> se distingue comme une approche innovante pour présenter le portfolio d'un développeur. Au lieu de la galerie de projets conventionnelle, cette plateforme prend la forme d'un site e-commerce entièrement fonctionnel où chaque 'produit' représente un projet de programmation différent que j'ai réalisé.</p><p> L'intention était double : premièrement, mettre en valeur des projets moins connus de manière engageante et, deuxièmement, démontrer ma capacité à développer de zéro une plateforme e-commerce complète en utilisant TypeScript.</p><p>Vous trouverez dans ce projet tous les projets que j'ai réalisés jusqu'à présent, ainsi que des liens vers les dépôts GitHub et les sites web correspondants.</p>",
    link: "https://jlo-shop.netlify.app/",
    repo: "https://github.com/justineLo/jlo-shop",
  },
  {
    image: chaton,
    title: "Chaton",
    description:
      "<p><strong>Chaton</strong> est un simple jeu 2D que j'ai eu l'opportunité de développer en utilisant Unity et C#. J'ai relevé le défi de créer toutes les animations et les graphiques à partir de zéro, en utilisant des outils comme Photoshop et Illustrator.</p><p> Le projet a été une grande expérience d'apprentissage pour moi, me permettant d'explorer différents aspects du développement et de la conception de jeux. Il m'a aidée à apprécier les complexités impliquées dans la création d'un jeu, du codage à la narration visuelle.</p><p> Bien que j'ai encore beaucoup à apprendre, je suis fière des pas que j'ai faits avec Chaton pour élargir mon ensemble de compétences et ma compréhension de la mécanique du jeu et de la conception.</p>",
    link: "https://stijj.itch.io/chaton",
    repo: "https://github.com/justineLo/chaton-game",
  },
  {
    image: mgb,
    title: "MisterGoodBeer",
    description:
      "<p>J'ai rejoint en 2020 l'équipe de développement de l'application <strong>MisterGoodBeer</strong> en tant que développeuse <strong>Front-end Flutter</strong>. MisterGoodBeer est une application mobile destinée à aider les amateurs de bières à découvrir les bars les moins chers autour d'eux et qui compte <strong>plus de 40 000 utilisateurs actifs</strong>.",
    link: "https://mistergoodbeer.com/",
  },
];

const AnimatedCard = styled.div`
  &.fade-in {
    animation: ${fadeIn} 0.5s ease-in-out forwards;
  }

  &.fade-out {
    animation: ${fadeOut} 0.5s ease-in-out forwards;
  }
`;

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");

  useEffect(() => {
    setAnimationClass("fade-in");
  }, [currentIndex]);

  function getNextIndex() {
    return (currentIndex + 1) % projects.length;
  }

  function getPrevIndex() {
    return (currentIndex - 1 + projects.length) % projects.length;
  }

  function handleNext() {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentIndex(getNextIndex());
    }, 500);
  }

  function handlePrev() {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentIndex(getPrevIndex());
    }, 500);
  }

  return (
    <Container id="projects">
      <Title>Quelques projets...</Title>
      <Cards>
        <ArrowButton onClick={handlePrev}>
          <HiOutlineChevronLeft />
        </ArrowButton>
        <AnimatedCard className={animationClass}>
          <ProjectCard project={projects[currentIndex]} />
        </AnimatedCard>
        <ArrowButton onClick={handleNext}>
          <HiOutlineChevronRight />
        </ArrowButton>
      </Cards>
    </Container>
  );
}

export default Projects;
