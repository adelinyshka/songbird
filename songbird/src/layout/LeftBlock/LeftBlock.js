import React, { useCallback, useState } from 'react';
import AnswersList from './../../layout/LeftBlock/AnswersList/AnswersList';
import {
	levelSelector,
	answerRightSelector,
} from '../../redux/selectors';
import {
	setAnswerRight,
	setLevel,
	setStatusApp,
} from '../../redux/actions';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const LeftBlock = ({answerID}) => {
	const dispatch = useDispatch();
	const level = useSelector(levelSelector);
	const isAnswerRight = useSelector(answerRightSelector);

	const goToNextLevel = useCallback(() => {
		if(level === 5) {
			console.log('finish');
			dispatch(setStatusApp(false));
			dispatch(setLevel(0))
		}
		else {
			if(isAnswerRight) {
				dispatch(setLevel(level + 1))
				dispatch(setAnswerRight(false))
			}
		}
	}, [level, isAnswerRight, dispatch, setStatusApp]);

	return(
		<ButtonGroup vertical>
			<AnswersList answerID={answerID}/>
			{isAnswerRight ?
				<Button
					onClick={()=>goToNextLevel()}>Дальше</Button>
				:
				<Button
					onClick={()=>{}}>Дальше</Button>
			}
		</ButtonGroup>
	)
}

export default LeftBlock;
