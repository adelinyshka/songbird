import React from 'react';
import AppWrapper from './AppWrapper';
import Header from './layout/Header/Header';
import AnswersList from './layout/AnswersList/AnswersList';
import { useSelector } from 'react-redux';
import { scoreSelector, levelSelector } from './redux/selectors';
import Question from './layout/Question/Question';
import {getRandomNumber} from './utils/Helpers';

function App() {
  const level = useSelector(levelSelector);
  const rightAnswer = getRandomNumber();
  console.log(rightAnswer);

  return (
    <AppWrapper>
      <Header/>
      <Question level={level} rightAnswer={rightAnswer}/>
      <AnswersList level={level} rightAnswer={rightAnswer}/>
      <p>Hello, Im SongBird!</p>
    </AppWrapper>
  );
}

export default App;
