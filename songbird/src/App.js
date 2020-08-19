import React from 'react';
import AppWrapper from './AppWrapper';
import Header from './layout/Header/Header';
import AnswersList from './layout/AnswersList/AnswersList';
import { useSelector } from 'react-redux';
import { levelSelector } from './redux/selectors';
import Question from './layout/Question/Question';
import {getRandomNumber} from './utils/Helpers';
import { ButtonGroup } from 'react-bootstrap';

function App() {
  const level = useSelector(levelSelector);
  const rightAnswer = getRandomNumber();


  return (
    <AppWrapper>
      <Header/>
      <Question level={level} rightAnswer={rightAnswer}/>
      <ButtonGroup vertical>
        <AnswersList level={level} rightAnswer={rightAnswer}/>
      </ButtonGroup>
    </AppWrapper>
  );
}

export default App;
