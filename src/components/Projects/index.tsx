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
            type={item.type}
            slug={item.id}
            link={item.link}
            img={item.thumbnail}
            title={item.title}
            key={item.id}
          />
        );
      })}
    </DivProject>
  );
};

export default Projects;
