import React from 'react';
import HeaderWrapper from './HeaderWrapper';
import { useSelector } from 'react-redux';
import {
	levelSelector,
	scoreSelector,
} from '../../redux/selectors';
import { ButtonGroup, Button } from 'react-bootstrap';
import birdType from '../../data/birdType';
const classNames = require('classnames');

const Header = () => {
	const score = useSelector(scoreSelector);
	const level = useSelector(levelSelector);

	return(
		<HeaderWrapper>
			<div className="wrapper-header">
				<h1 className="logo">Song Bird</h1>
				<div className="score"> Счет: {score}</div>
			</div>
			<ButtonGroup className="pangination">
				{birdType.map((bird)=> {
					return <Button
						key={bird.level}
						className={classNames( 'header-btn',
							{ 'selected': level === bird.level })}
						variant="secondary">{bird.text}</Button>
				})}
			</ButtonGroup>

		</HeaderWrapper>
	)
}

export default Header;
