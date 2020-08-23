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



	return(
		<ButtonGroup vertical>
			<AnswersList answerID={answerID}/>
		</ButtonGroup>
	)
}

export default LeftBlock;
