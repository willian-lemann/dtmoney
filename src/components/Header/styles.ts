import styled from "styled-components";
import logo from "../../assets/logo.svg";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.blue};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img.attrs(() => {
  return {
    src: logo,
    alt: "dt money",
  };
})``;

export const AddTransationButton = styled.button`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors["blue-light"]};
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;
