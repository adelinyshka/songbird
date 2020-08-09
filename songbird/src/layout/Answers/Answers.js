import React, { useCallback, useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import AnswersWrapper from './AnswersWrapper';
import {
	answerRightSelector,
	scoreSelector,
} from './../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setAnswerRight, setScore } from '../../redux';

const Answers = () => {
	const dispatch = useDispatch();
	const score = useSelector(scoreSelector);
	const answerRight = useSelector(answerRightSelector);
	const [isTrue, setIsTrue] = useState(false);

	const addScore = useCallback(()=>{
		if (isTrue){
			dispatch(setScore(score + answerRight))
			dispatch(setAnswerRight(answerRight - 1))
		}
	},[score, answerRight, isTrue])

	const makeTrue = useCallback(() => {
		setIsTrue(true);
	})

	const makeFalse = useCallback(() => {
		setIsTrue(false);
	})

	return(
		<AnswersWrapper>
			<ButtonGroup aria-label="Basic example">
				<Button
					variant="secondary"
					onClick={addScore}
					>Increase if true</Button>

				<Button variant="secondary"
				        onClick={makeTrue}

				>true</Button>
				<Button variant="secondary"
				        onClick={makeFalse}
				>false</Button>
			</ButtonGroup>
		</AnswersWrapper>
	)
}

export default Answers;
