import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useSound from 'use-sound';
import AppWrapper from './AppWrapper';
import RightBlock from './layout/RightBlock/RightBlock';
import { getRandomNumber } from './utils/Helpers';
import Header from './layout/Header/Header';
import {
  levelSelector,
  statusAppSelector, scoreSelector, idClickedSelector,
} from './redux/selectors';
import {
  setLevel,
  setScore,
  setStatusApp,
  setIdClicked,
} from './redux/actions';
import Question from './layout/Question/Question';
import LeftBlock from './layout/LeftBlock/LeftBlock';
import Footer from './layout/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const level = useSelector(levelSelector);
  const randomNum = getRandomNumber();
  const [answerID, setAnswerID] = useState(randomNum);
  const isGameOn = useSelector(statusAppSelector);
  const score = useSelector(scoreSelector);
  const idClicked = useSelector(idClickedSelector);

  const best = './assets/audio/best_end.mp3';
  const [playBest] = useSound(best);

  useCallback(() => {
    dispatch(setIdClicked(idClicked));
  }, [idClicked, dispatch]);

  useEffect(() => {
    setAnswerID(randomNum);
    // eslint-disable-next-line
  }, [level]);

  useEffect(() => {
    if (!isGameOn) {
      playBest();
    }
  }, [isGameOn, playBest]);

  const startNewGame = useCallback(() => {
    dispatch(setStatusApp(true));
    dispatch(setLevel(0));
    dispatch(setScore(0));
  }, [dispatch]);

  return (
    isGameOn ? (
      <AppWrapper>
        <Header />
        <Question answerID={answerID} />
        <div className="alignment">
          <LeftBlock answerID={answerID} />
          <RightBlock answerID={answerID} />
        </div>
        <Footer />
      </AppWrapper>
    )
      : (
        <AppWrapper>
          <Header />
          <div className="end-game-wrapper">
            <div className="end-game">
              <h2>Игра закончена!</h2>
              {score === 36 && (
                <>
                  <h3>Поздравляем с абсолютной победой!</h3>
                  <p>Вы набрали максимальное количество очков!</p>
                </>
              )}
              <p>
                Вы набрали&nbsp;
                {score}
                &nbsp;очков из 36.
              </p>
              <Button
                className="end-game-btn"
                onClick={() => startNewGame()}
              >
                Повторить игру
              </Button>
            </div>
          </div>
        </AppWrapper>
      )
  );
}

export default App;
