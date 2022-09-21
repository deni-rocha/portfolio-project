import styled from "@emotion/styled";

interface ProjetoProps {
  imgUrl: string;
}

export const ProjetoContainer = styled.div<ProjetoProps>`
  width: 100%;
  height: 20rem;
  margin-top: 4rem;
  display: flex;

  @media (max-width: 565px) {
    display: inline-block;
  }
  > button {
    height: 4rem;
    background: none;
    border: none;
    align-self: flex-end;

    @media (max-width: 1050px) {
      position: absolute;
      right: 0;
    }
    a {
      color: #fff;
      font-size: 2rem;
      font-weight: 300;
      display: flex;
      align-items: flex-end;
      gap: 0.8rem;
      transition: 0.5s;
    }
  }

  > section {
    width: 40rem;
    height: 20rem;
    background: url(${(props) => props.imgUrl}) no-repeat center;
    background-size: cover;
    border-radius: 20px;
    display: flex;

    @media (max-width: 565px) {
      width: 16rem;
      height: 15rem;
      border: red;
    }

    > div.text {
      position: absolute;

      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 2.5rem;
        text-shadow: -4px 5px 22px #11172b;
      }

      h2 {
        color: ${({ theme }) => theme.secondary};
        font-size: 2rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #11172b;
      }
    }
  }
  .overlay {
    width: inherit;
    height: inherit;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.75;
    border-radius: 20px;
    transition: opacity 1s;
    &:hover {
      opacity: 0.2;
    }
  }
`;
