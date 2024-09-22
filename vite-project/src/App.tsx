import React from 'react';
import UsersPage from './pages/UsersPage';
import InputPage from './pages/InputPage';

const App:React.FC = () => {
  return (
    <>
      <UsersPage />
      <br />
      <InputPage />
    </>
  );
}

export default App;