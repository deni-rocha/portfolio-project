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
      <BlockWelcome>
        <TitleWelcome>Olá, tudo bem?</TitleWelcome>
        <span className="bw--span">
          Que tal ver um pouco do meu trabalho...{" "}
        </span>
      </BlockWelcome>
      <BlockInfo>
        <ImgPerfil imgUrl={img} /> {/* it's a Div tag */}
        <div className="b-info-background">
          <section className="b-info--section">
            <div className="info-curly">
              <span>Sobre mim</span>
              <div className="curly curly-left"> {"\u007B"}</div>
            </div>
            <div>
              "nome": <span className="value">Denilson Rocha,</span>
            </div>
            <div>
              "cargo": <span className="value">Full Stack Júnior</span>
            </div>
            <div className="curly curly-right">{"\u007D"}</div>
          </section>
        </div>
      </BlockInfo>
    </Container>
  );
};

export default Header;
