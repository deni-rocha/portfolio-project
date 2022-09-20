import Header from "../../components/Header";
import Projects from "../../components/Projects";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <Projects />
    </Container>
  );
}
