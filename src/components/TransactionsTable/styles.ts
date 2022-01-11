import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
`;

export const Value = styled.td``;

export const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    color: ${({ theme }) => theme.colors.texts};
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5remh;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background-color: ${({ theme }) => theme.colors["main-shape"]};
    color: ${({ theme }) => theme.colors.texts};
    border-radius: 0.25rem;

    &:first-child {
      color: ${({ theme }) => theme.colors.titles};
    }

    &.deposit {
      color: ${({ theme }) => theme.colors.green};
    }

    &.withdraw {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const TableHeader = styled.thead``;

export const TableBody = styled.tbody``;
