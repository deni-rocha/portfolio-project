import {
  Container,
  ImgPerfil,
  BlockWelcome,
  TitleWelcome,
  BlockInfo,
} from "./styles";
let img = require("../../assets/Perfil.jpg");

const Header = () => {
  return (
    <Container>
      <BlockWelcome className="animationFadeIn">
        <TitleWelcome>Olá, tudo bem?</TitleWelcome>
        <span className="bw--span">
          Que tal ver um pouco do meu trabalho...{" "}
        </span>
      </BlockWelcome>
      <BlockInfo className="animationBounce">
        <ImgPerfil imgUrl={img} /> {/* it's a Div tag */}
        <div className="b-info-background ">
          <section className="b-info--section">
            <div className="info-curly">
              <span>Sobre mim</span>
              <div className="curly curly-left"> {"\u007B"}</div>
            </div>
            <div>
              "nome": <span className="value">Denilson Rocha,</span>
            </div>
            <div>
              "função": <span className="value">Full Stack </span>
            </div>
            <div className="curly curly-right">{"\u007D"}</div>
          </section>
        </div>
      </BlockInfo>
    </Container>
  );
};

export default Header;
