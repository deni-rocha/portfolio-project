import styled from "@emotion/styled";

export const ContainerLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textLight};
`;
