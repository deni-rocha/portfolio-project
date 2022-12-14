import { AiOutlineRightCircle } from "react-icons/ai";
import { ProjetoContainer } from "./styles";

interface ProjetoProps {
  title: string;
  type: string;
  slug: number;
  img: string;
  link: string;
}

export default function CardProject({ title, type, img, link }: ProjetoProps) {
  return (
    <ProjetoContainer imgUrl={img} data-aos="animationFadeIn">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <a target="_blank" href={link}>
          visitar <AiOutlineRightCircle />
        </a>
      </button>
    </ProjetoContainer>
  );
}
