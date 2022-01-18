import { useEffect, useState } from "react";

import { api } from "../../config/api";

import { Container, TableContainer, TableHeader, TableBody } from "./styles";
import { Transaction } from "./types";

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  useEffect(() => {
    const loadTransactions = async () => {
      const response = await api.get("/transactions");
      setTransactions(response.data);
    };

    loadTransactions();
  }, []);

  const renderTransactionAmountLabel = (type: string, amount: string) => {
    if (type === "withdraw") return `- ${amount}`;

    return amount;
  };

  return (
    <Container>
      <TableContainer>
        <TableHeader>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </TableHeader>

        <TableBody>
          {transactions.map((transaction) => (
            <tr>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {renderTransactionAmountLabel(
                  transaction.type,
                  transaction.amount
                )}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createAt}</td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
};
