import React, { useCallback } from 'react';
import birdsData from '../../data/birdsData';
import { shuffle } from '../../utils/Helpers';
import { Button } from 'react-bootstrap';
import { setAnswerRight } from '../../redux/actions';
import {useDispatch} from 'react-redux';

const AnswersList = ({level, rightAnswer}) => {
	const dispatch = useDispatch();

	const checkAnswer = useCallback((answer, rightAnswer) => {
		const correct = answer === rightAnswer;
		if(correct) {
			dispatch(setAnswerRight(true));
			console.log('true');
		}
		else console.log('false')
	},[ dispatch])


	const arrBirds = birdsData[level].map((bird) => {
		return (
				<Button variant="primary"
				        key={bird.id}
				        id={bird.id}
								onClick={() => {
									checkAnswer(bird.id, rightAnswer);
								}} >
					{bird.name}
				</Button>
		)
	})
	return shuffle(arrBirds);
}

export default AnswersList;
