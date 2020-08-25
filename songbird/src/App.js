import React, { useCallback, useEffect, useState } from 'react';
import AppWrapper from './AppWrapper';
import { Button } from 'react-bootstrap';
import RightBlock from './layout/RightBlock/RightBlock';
import {getRandomNumber} from './utils/Helpers';
import Header from './layout/Header/Header';
import {
  levelSelector,
  answerRightSelector,
  statusAppSelector, scoreSelector, idClickedSelector
} from './redux/selectors';
import {
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
          <div className='alignment'>
            <LeftBlock answerID={answerID} />
            <RightBlock answerID={answerID} />
          </div>
          <Footer />
      </AppWrapper>)
        :
        ( <AppWrapper>
            <div>
              <div>Игра закончена!</div>
              <div>Вы набрали {score} очков из 36.</div>

              {score === 36 ?
                <>
                  <div>Вы набрали максимальное количество очков!</div>
                  <Button onClick={() => startNewGame()}>Повторить игру</Button>
                </>
                :
                <Button onClick={() => startNewGame()}>Повторить игру</Button>
              }
            </div>
          </AppWrapper>
        )
    );
}

export default App;
