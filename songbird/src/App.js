import React, { useCallback, useEffect, useState } from 'react';
import AnswersList from './layout/AnswersList/AnswersList';
import AppWrapper from './AppWrapper';
import { ButtonGroup, Button } from 'react-bootstrap';
import Description from './layout/Description/Description';
import {getRandomNumber} from './utils/Helpers';
import Header from './layout/Header/Header';
import {
  levelSelector,
  answerRightSelector,
  statusAppSelector, scoreSelector,
} from './redux/selectors';
import { setAnswerRight, setLevel, setStatusApp } from './redux/actions';
import Question from './layout/Question/Question';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const level = useSelector(levelSelector);
  const isAnswerRight = useSelector(answerRightSelector);
  const randomNum = getRandomNumber();
  const [answerID, setAnswerID] = useState(randomNum);
  const isGameOn = useSelector(statusAppSelector);
  const score = useSelector(scoreSelector);

  useEffect(() => {
    setAnswerID(randomNum);
  }, [level]);

  const goToNextLevel = useCallback(() => {
    if(level < 5) {
      if(isAnswerRight) {
        dispatch(setLevel(level + 1))
        dispatch(setAnswerRight(false))
      }
    }
    else {
      dispatch(setStatusApp(false));
    }
  }, [level, isAnswerRight, isGameOn]);

  const startNewGame = useCallback(()=> {
    dispatch(setStatusApp(true));
    dispatch(setLevel(0))
  }, [isGameOn])

  if(isGameOn) {
    return (
      <AppWrapper>
        <Header/>
        <Question level={level} answerID={answerID}/>
        <ButtonGroup >
          <AnswersList level={level} answerID={answerID}/>
          {isAnswerRight ?
            <Button
              onClick={()=>goToNextLevel()}>Дальше</Button>
            :
            <Button
              onClick={()=>{}}>Дальше</Button>
          }
        </ButtonGroup>
        <Description answerID={answerID}/>
      </AppWrapper>
    );
  }
  return (
    <AppWrapper>
      <div>Game Over</div>
      <div>
        {score === 36 ?
          <>
            <div>Game Over!</div>
            <div>Your score is 36.It is maximum. Congrats!</div>
          </>
          :
          <>
            <div>Game Over!</div>
            <div>Your score is {score}</div>
            <Button onClick={() => startNewGame()}>Repeat Game</Button>
          </>
        }
      </div>
    </AppWrapper>
  )
}

export default App;
