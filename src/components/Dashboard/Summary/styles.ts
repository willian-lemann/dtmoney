import styled from "styled-components";
import incomeIcon from "../../../assets/income.svg";
import outcomeIcon from "../../../assets/outcome.svg";
import totalIcon from "../../../assets/total.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: -7rem;
`;

interface SummaryCardProps {
  highlight?: boolean;
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({ theme, highlight }) =>
    highlight ? theme.colors.green : theme.colors["main-shape"]};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${({ theme, highlight }) =>
    highlight ? theme.colors.white : theme.colors.titles};
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p``;

export const IncomeIcon = styled.img.attrs(() => {
  return {
    src: incomeIcon,
    alt: "income icon",
  };
})``;

export const OutComeIcon = styled.img.attrs(() => {
  return {
    src: outcomeIcon,
    alt: "outcome icon",
  };
})``;

export const TotalIcon = styled.img.attrs(() => {
  return {
    src: totalIcon,
    alt: "total icon",
  };
})``;

export const Amount = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;
