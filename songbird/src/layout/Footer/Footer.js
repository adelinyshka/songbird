import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	answerRightSelector,
	levelSelector,
} from '../../redux/selectors';
import { Button } from 'react-bootstrap';
import { setAnswerRight, setLevel, setStatusApp } from '../../redux/actions';
import FooterWrapper from './FooterWrapper';

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
	}, [level, isAnswerRight, dispatch]);

	return(
		<FooterWrapper>
			{ isAnswerRight
				? <Button className="footer-btn active"
					onClick={()=>goToNextLevel()}>Следующий вопрос</Button>
				:
				<Button className="footer-btn inactive"
				        disabled
				        onClick={()=>{}}>Выберите верный ответ</Button>
			}
		</FooterWrapper>

	)
}

export default Footer;
