import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      >
        <main>
          <h2>Cadastrar Transação</h2>
        </main>
      </Modal>
      <GlobalStyle />
    </>
  );
}

