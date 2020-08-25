import React, { useCallback, useEffect, useState } from 'react';
import birdsData from '../../../data/birdsData';
import {
	setAnswerRight,
	setScore,
	setIdClicked,
	setWasClick,
} from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
	 levelSelector,
	scoreSelector,
} from '../../../redux/selectors';
import AnswersBtnWrapper from './AnswersBtnWrapper';

const AnswersBtn = ({ answerID}) => {
	const dispatch = useDispatch();
	const score = useSelector(scoreSelector);
	const [scores, setScores] = useState(6);
	const rightAnswerId = answerID;
	const [answerClicked, setAnswerClicked] = useState(false);
	const level = useSelector(levelSelector);


	const checkAnswer = useCallback((answer, rightAnswerId,) => {
		const correct = answer === rightAnswerId;
		dispatch(setWasClick(true));
		dispatch(setIdClicked(answer - 1))

		if(!answerClicked) {
			if(correct) {
				setAnswerClicked(true);
				dispatch(setAnswerRight(true));
				setScores(scores);
				dispatch(setScore(score + scores));
				console.log('answer true');
			}
			else {
				setScores(scores - 1)
				dispatch(setAnswerRight(false));
				console.log('answer false');
			}
	}
	},[ dispatch, scores, score, answerClicked])

		useEffect(() => {
			dispatch(setAnswerRight(false));
			setAnswerClicked(false);
			setScores(6);
			dispatch(setWasClick(false));
		},[level, dispatch])

	return birdsData[level].map((bird) => {
		return (
				<AnswersBtnWrapper variant="primary"
				        key={bird.id}
				        id={bird.id}
								onClick={() => {
									checkAnswer(bird.id, rightAnswerId);
								}} >
					{bird.name}
				</AnswersBtnWrapper>
		)
	})
}

export default AnswersBtn;
