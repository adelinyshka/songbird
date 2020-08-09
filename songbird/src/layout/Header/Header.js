import React, { useCallback, useState } from 'react';
import HeaderWrapper from './HeaderWrapper';
import { useSelector, useDispatch } from 'react-redux';
import {
	scoreSelector,
} from './../../redux/selectors';
// import store from './../../redux/index2'

const Header = () => {

	const dispatch = useDispatch();
	const score = useSelector(scoreSelector);

	return(
	<HeaderWrapper>
		<h1 className="logo">Song Bird</h1>
		<div className="score"> score: {score}</div>
	</HeaderWrapper>
	)
}

export default Header;
