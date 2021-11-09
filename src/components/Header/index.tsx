import { Container, Content, Logo, AddTransationButton } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <Logo />

        <AddTransationButton>Nova transação</AddTransationButton>
      </Content>
    </Container>
  );
};
