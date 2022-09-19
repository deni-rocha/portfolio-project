import { ContainerLayout } from "./styles";

interface IPropsChildren {
  children: JSX.Element;
}

export default function Home({ children }: IPropsChildren) {
  return <ContainerLayout>{children}</ContainerLayout>;
}
