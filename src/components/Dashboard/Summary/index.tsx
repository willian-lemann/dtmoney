import {
  Container,
  HeaderContainer,
  SummaryCard,
  Title,
  IncomeIcon,
  OutComeIcon,
  TotalIcon,
  Amount,
} from "./styles";

export const Summary = () => {
  return (
    <Container>
      <SummaryCard>
        <HeaderContainer>
          <Title>Entradas</Title>
          <IncomeIcon />
        </HeaderContainer>

        <Amount>R$1000,00</Amount>
      </SummaryCard>

      <SummaryCard>
        <HeaderContainer>
          <Title>Saídas</Title>
          <OutComeIcon />
        </HeaderContainer>

        <Amount>R$500,00</Amount>
      </SummaryCard>

      <SummaryCard highlight>
        <HeaderContainer>
          <Title>Total</Title>
          <TotalIcon />
        </HeaderContainer>

        <Amount>R$500,00</Amount>
      </SummaryCard>
    </Container>
  );
};
