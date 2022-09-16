import { Container, Title, ImgPerfil } from "./styles";
let img = require("../../assets/Perfil.jpg");

const Header = () => {
  return (
    <Container>
      <Title>Olá, meu nome é Denilson!</Title>
      <ImgPerfil imgUrl={img} />
    </Container>
  );
};

export default Header;
