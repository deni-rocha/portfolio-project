import styled from "@emotion/styled";

interface ImagePerfilProps {
  imgUrl: string;
}

export const Container = styled.div`
  width: inherit;
  height: 26rem;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
`;

export const ImgPerfil = styled.div<ImagePerfilProps>`
  width: 200px;
  height: 200px;
  background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: cover;
  border-radius: 50%;
`;
