import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import birdsData from '../../../data/birdsData';
import {
  setAnswerRight,
  setScore,
  setIdClicked,
  setWasClick,
} from '../../../redux/actions';
import {
	 levelSelector,
  scoreSelector,
} from '../../../redux/selectors';
import AnswersBtnWrapper from './AnswersBtnWrapper';
import useSound from 'use-sound';


const AnswersBtn = ({ answerID }) => {
  const dispatch = useDispatch();
  const score = useSelector(scoreSelector);
  const [scores, setScores] = useState(6);
  const rightAnswerId = answerID;
  const [answerClicked, setAnswerClicked] = useState(false);
  const level = useSelector(levelSelector);
  const wrong = './assets/audio/wrong.mp3';
  const right = './assets/audio/right.mp3';
  const [playWrong] = useSound(right);
  const [playRight] = useSound(wrong);

  const checkAnswer = useCallback((answer, rightAnswer) => {
    const correct = answer === rightAnswer;
    dispatch(setWasClick(true));
    dispatch(setIdClicked(answer - 1));
    if (!answerClicked) {
      if (correct) {
        setAnswerClicked(true);
        dispatch(setAnswerRight(true));
        setScores(scores);
        dispatch(setScore(score + scores));
      } else {
        setScores(scores - 1);
        dispatch(setAnswerRight(false));
      }
    }
  }, [dispatch, scores, score, answerClicked]);

  useEffect(() => {
    dispatch(setAnswerRight(false));
    setAnswerClicked(false);
    setScores(6);
    dispatch(setWasClick(false));
  }, [level, dispatch]);

  useEffect(() => {
    console.log(birdsData[level][answerID - 1].name);
  },[answerID, level])

  return birdsData[level].map((bird) => (
    <AnswersBtnWrapper
      variant="primary"
      key={bird.id}
      id={bird.id}
      onClick={
        () => {
        checkAnswer(bird.id, rightAnswerId);
        if(bird.id === rightAnswerId) {
          playWrong()
        }
        else {
          playRight()
        }

      }
      }
    >
      {bird.name}
    </AnswersBtnWrapper>
  ));
};

export default AnswersBtn;
