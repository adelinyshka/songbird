import React, { useCallback, useState } from 'react';
import birdsData from '../../data/birdsData';
import { Button } from 'react-bootstrap';
import { setAnswerRight, setScore } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { answerRightSelector, scoreSelector } from '../../redux/selectors';
const classNames = require('classnames');



const AnswersList = ({level, answerID}) => {
	const dispatch = useDispatch();
	const score = useSelector(scoreSelector);
	const [scores, setScores] = useState(6);
	const rightAnswerId = answerID
	const isAnswerRight = useSelector(answerRightSelector);

	const checkAnswer = useCallback((answer, rightAnswerId) => {
		const correct = answer === rightAnswerId;
		dispatch(setAnswerRight(false));
		if(correct) {
			dispatch(setAnswerRight(true));
			setScores(scores);
			dispatch(setScore(score + scores));
			}
		else {
			setScores(scores - 1)
			dispatch(setAnswerRight(false));
		}
	},[ dispatch, scores, level, score,isAnswerRight])

	return birdsData[level].map((bird) => {
		return (
				<Button variant="primary"
				        key={bird.id}
				        id={bird.id}
				        className={classNames(
				        	{ 'veryGreen': isAnswerRight && bird.id === rightAnswerId },
				        )}
								onClick={() => {
									checkAnswer(bird.id, rightAnswerId);
								}} >
					{bird.name}
				</Button>
		)
	})
}

export default AnswersList;
