import React from 'react';
import HeaderWrapper from './HeaderWrapper';
import { useSelector } from 'react-redux';
import {
	scoreSelector,
} from '../../redux/selectors';

const Header = () => {
	const score = useSelector(scoreSelector);

	return(
		<HeaderWrapper>
			<h1 className="logo">Song Bird</h1>
			<div className="score"> score: {score}</div>
		</HeaderWrapper>
	)
}

export default Header;
