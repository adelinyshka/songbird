import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
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

  useCallback(() => {
    dispatch(setIdClicked(idClicked));
  }, [idClicked, dispatch]);

  useEffect(() => {
    setAnswerID(randomNum);
    // eslint-disable-next-line
  }, [level]);

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
	        <div className="end-game-wrapper">
	          <div className="end-game">
	            <h2>Игра закончена!</h2>
	            <p>Вы набрали&nbsp;{score}&nbsp;очков из 36.</p>
		          {score === 36
	              ? (
	                <>
	                  <p>Вы набрали максимальное количество очков!</p>
	                  <Button className="end-game-btn"
	                          onClick={() => startNewGame()}>Повторить игру</Button>
	                </>
	              )
	              : <Button className="end-game-btn"
	                        onClick={() => startNewGame()}>Повторить игру</Button>}
            </div>
	        </div>
        </AppWrapper>
      )
  );
}

export default App;
