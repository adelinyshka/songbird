import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	answerRightSelector,
	levelSelector,
	scoreSelector,
} from '../../redux/selectors';
import { ButtonGroup, Button } from 'react-bootstrap';
import { setAnswerRight, setLevel, setStatusApp } from '../../redux/actions';
import FooterWrapper from './FooterWrapper';
const classNames = require('classnames');

const Footer = () => {
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
		<FooterWrapper>
			{ isAnswerRight
				? <Button className="footer-btn active"
					onClick={()=>goToNextLevel()}>Следующий вопрос</Button>
				: <Button className="footer-btn inactive"
					onClick={()=>{}}>Выберите верный ответ</Button>
			}
		</FooterWrapper>

	)
}

export default Footer;
