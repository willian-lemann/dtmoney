import { FormEvent } from "react";
import {
  Container,
  Content,
  HeaderLabel,
  TitleInput,
  AmountInput,
  CategoryInput,
  SubmitButton,
} from "./styles";

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onCloseNewTransactionModal: () => void;
}

export const NewTransactionModal = ({
  isNewTransactionModalOpen,
  onCloseNewTransactionModal,
}: NewTransactionModalProps) => {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Container
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onCloseNewTransactionModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Content onSubmit={handleSubmit}>
        <HeaderLabel>Cadastrando nova transacao</HeaderLabel>

        <TitleInput />
        <AmountInput type="number" />
        <CategoryInput />

        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </Content>
    </Container>
  );
};
