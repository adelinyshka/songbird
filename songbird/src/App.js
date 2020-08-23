import React, { useCallback, useEffect, useState } from 'react';
import AnswersList from './layout/LeftBlock/AnswersList/AnswersList';
import AppWrapper from './AppWrapper';
import { ButtonGroup, Button } from 'react-bootstrap';
import RightBlock from './layout/RightBlock/RightBlock';
import {getRandomNumber} from './utils/Helpers';
import Header from './layout/Header/Header';
import {
  levelSelector,
  answerRightSelector,
  statusAppSelector, scoreSelector, idClickedSelector
} from './redux/selectors';
import {
  setAnswerRight,
  setLevel,
  setScore,
  setStatusApp,
  setIdClicked
} from './redux/actions';
import Question from './layout/Question/Question';
import { useDispatch, useSelector } from 'react-redux';
import LeftBlock from './layout/LeftBlock/LeftBlock';
import Footer from './layout/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const level = useSelector(levelSelector);
  const isAnswerRight = useSelector(answerRightSelector);
  const randomNum = getRandomNumber();
  const [answerID, setAnswerID] = useState(randomNum);
  const isGameOn = useSelector(statusAppSelector);
  const score = useSelector(scoreSelector);
  const idClicked = useSelector(idClickedSelector);

  useCallback(() => {
    dispatch(setIdClicked(idClicked))
  },[idClicked,dispatch])

  // const goToNextLevel = useCallback(() => {
  //   if(level === 5) {
  //     console.log('finish');
  //     dispatch(setStatusApp(false));
  //     dispatch(setLevel(0))
  //   }
  //   else {
  //     if(isAnswerRight) {
  //       dispatch(setLevel(level + 1))
  //       dispatch(setAnswerRight(false))
  //     }
  //   }
  // }, [level, isAnswerRight, dispatch, setStatusApp]);

  useEffect(() => {
    setAnswerID(randomNum);
  }, [level]);

  const startNewGame = useCallback(()=> {
    dispatch(setStatusApp(true));
    dispatch(setLevel(0))
    dispatch(setScore(0))
  }, [ dispatch])

    return (
      isGameOn ? (
        <AppWrapper>
          <Header/>
          <Question answerID={answerID}/>
          <LeftBlock answerID={answerID} />
          <RightBlock />
          <Footer />
      </AppWrapper>)
        :
        ( <AppWrapper>
            <div>
              <div>Game Over!</div>
              <div>Your score is {score}</div>

              {score === 36 ?
                <div>It is maximum. Congrats!</div>
                :
                <Button onClick={() => startNewGame()}>Repeat Game</Button>
              }
            </div>
          </AppWrapper>
        )
    );
}

export default App;
