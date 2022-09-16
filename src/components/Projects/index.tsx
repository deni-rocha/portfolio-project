import { useState } from "react";
import dataProjects from "../../data/dataProject";
import CardProject from "../CardProject";
import { DivProject } from "./styles";

const Projects = () => {
  const [projects] = useState(dataProjects);

  return (
    <DivProject className="animationFadeIn">
      {projects.map((item) => {
        return (
          <CardProject
            id={item.id}
            link={item.link}
            thumbnail=""
            title={item.title}
            description={item.description}
            key={item.id}
          />
        );
      })}
    </DivProject>
  );
};

export default Projects;
