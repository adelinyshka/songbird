import React from 'react';
import AppWrapper from './AppWrapper';
import Header from './layout/Header/Header';
import Answers from './layout/Answers/Answers';

function App() {
  return (
    <AppWrapper>
      <Header/>
      <Answers />
      <p>Hello, Im SongBird!</p>
    </AppWrapper>
  );
}

export default App;
