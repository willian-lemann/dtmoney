import { Container, Content, Logo, AddTransationButton } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <Logo />

        <AddTransationButton onClick={onOpenNewTransactionModal}>
          Nova transação
        </AddTransationButton>
      </Content>
    </Container>
  );
};
