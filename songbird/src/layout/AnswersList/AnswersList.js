import React, { useCallback, useState } from 'react';
import birdsData from '../../data/birdsData';
import { Button } from 'react-bootstrap';
import { setAnswerRight, setScore } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { scoreSelector, } from '../../redux/selectors';


const AnswersList = ({level, answerID}) => {
	const dispatch = useDispatch();
	const score = useSelector(scoreSelector);
	const [scores, setScores] = useState(6);
	const rightAnswerId = answerID


	const checkAnswer = useCallback((answer, rightAnswerId) => {
		const correct = answer === rightAnswerId;
		dispatch(setAnswerRight(false));

		if(correct) {
			dispatch(setAnswerRight(true));
			console.log('true');
			setScores(scores);
			dispatch(setScore(score + scores));
		}
		else {
			console.log('false')
			setScores(scores - 1)
		}
	},[ dispatch, scores, level, score])

	return birdsData[level].map((bird) => {
		return (
				<Button variant="primary"
				        key={bird.id}
				        id={bird.id}
								onClick={() => {
									checkAnswer(bird.id, rightAnswerId);
								}} >
					{bird.name}
				</Button>
		)
	})
}

export default AnswersList;
