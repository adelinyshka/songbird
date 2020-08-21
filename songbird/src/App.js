import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AnswersList from './layout/AnswersList/AnswersList';
import AppWrapper from './AppWrapper';
import { ButtonGroup, Button } from 'react-bootstrap';
import Description from './layout/Description/Description';
import {getRandomNumber} from './utils/Helpers';
import Header from './layout/Header/Header';
import { levelSelector, answerRightSelector, } from './redux/selectors';
import { setLevel } from './redux/actions';
import Question from './layout/Question/Question';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const level = useSelector(levelSelector);
  const rightAnswerSelector = useSelector(answerRightSelector);
  const randomNum = getRandomNumber();
  const [answerID, setAnswerID] = useState(randomNum);

  useEffect(() => {
    setAnswerID(randomNum)
  }, [level]);

  const goToNextLevel = useCallback(() => {
    if(rightAnswerSelector) {
      dispatch(setLevel(level + 1))
    }
  }, [level, rightAnswerSelector]);

  return (
    <AppWrapper>
      <Header/>
      <Question level={level} answerID={answerID}/>
      <ButtonGroup vertical>
        <AnswersList level={level} answerID={answerID}/>
        <Button
          onClick={()=>goToNextLevel()}>Дальше</Button>
      </ButtonGroup>
      <Description answerID={answerID}/>
    </AppWrapper>
  );
}

export default App;
