import { IProjects } from "../../@types";
import { Container } from "./styles";

interface PropsCardProject extends IProjects {
  key: number;
}
const CardProject = ({ title, description }: PropsCardProject) => {
  return (
    <Container>
      <p>{title}</p>
      <article> {description}</article>
    </Container>
  );
};

export default CardProject;
