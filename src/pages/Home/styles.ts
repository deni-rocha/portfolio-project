import styled from "@emotion/styled";

export const Container = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textLight};

  .title-welcome {
    margin: 0;
  }
`;
