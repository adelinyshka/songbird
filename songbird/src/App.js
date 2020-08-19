import React from 'react';
import AppWrapper from './AppWrapper';
import Header from './layout/Header/Header';
import AnswersList from './layout/AnswersList/AnswersList';
import { useSelector } from 'react-redux';
import { scoreSelector, levelSelector } from './redux/selectors';


function App() {

  const level = useSelector(levelSelector);

  return (
    <AppWrapper>
      <Header/>
      <AnswersList level={level}/>
      <p>Hello, Im SongBird!</p>
    </AppWrapper>
  );
}

export default App;
