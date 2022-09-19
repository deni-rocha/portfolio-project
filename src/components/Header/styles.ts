import styled from "@emotion/styled";

interface ImagePerfilProps {
  imgUrl: string;
}

export const Container = styled.header`
  margin: 0 auto;
  height: 26rem;
  display: flex;
  justify-content: space-around;
  padding: 4rem 0;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const BlockWelcome = styled.section`
  color: ${({ theme }) => theme.primary};
  &:hover {
    filter: brightness(1.2);
  }

  .bw--span {
    font-size: 1.4rem;
    padding: 4px 0;
    color: ${({ theme }) => theme.secondary};
  }
`;

export const BlockInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
  font-family: "JetBrains Mono", monospace;
  color: #fff;
  .b-info--section {
    padding: 2rem;
    background: ${({ theme }) => theme.gradient};
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    color: ${({ theme }) => theme.textLight};
    .value {
      color: #fff;
    }
    .info-curly {
      display: flex;
      gap: 0.4rem;

      > span {
        color: #c38cdd;
      }
    }
    .curly {
      color: #595ba7;
      &-left {
      }
      &-right {
        align-self: flex-start;
      }
    }
  }
  .info {
  }
`;

export const TitleWelcome = styled.h1`
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
