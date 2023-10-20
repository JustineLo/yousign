import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { LuAppWindow } from "react-icons/lu";

export type Project = {
  image: string;
  title: string;
  description: string;
  link: string;
  repo?: string;
};

interface ProjectCardProps {
  project: Project;
  className?: string;
  position?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: none;
  background-color: white;

  @media (min-width: 768px) {
    width: 500px;
    height: 600px;
  }
`;

const Image = styled.div`
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h3 {
    font-size: 16px;
  }

  p {
    text-align: start;
    margin: 10px 0;
    font-size: 14px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

function ProjectCard({ project, className, position }: ProjectCardProps) {
  return (
    <Container className={`${className} ${position}`}>
      <Image>
        <img src={project.image} alt={project.title} />
      </Image>
      <Content>
        <h3>{project.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
        <Links>
          <a href={project.link} target="_blank" rel="noreferrer">
            <FaGithub />
            Voir le projet
          </a>

          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              <LuAppWindow />
              Voir le repo
            </a>
          )}
        </Links>
      </Content>
    </Container>
  );
}
export default ProjectCard;
