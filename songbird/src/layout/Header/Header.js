import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonGroup, Button } from 'react-bootstrap';
import HeaderWrapper from './HeaderWrapper';
import {
  levelSelector,
  scoreSelector,
} from '../../redux/selectors';
import birdType from '../../data/birdType';

const classNames = require('classnames');

const Header = () => {
  const score = useSelector(scoreSelector);
  const level = useSelector(levelSelector);

  return (
    <HeaderWrapper>
      <div className="wrapper-header">
        <h1 className="logo">Song Bird</h1>
        <div className="score">
          счет:
          {score}
        </div>
      </div>
      <ButtonGroup className="pangination">
        {birdType.map((bird) => (
          <Button
            key={bird.level}
            className={classNames('header-btn',
              { 'selected': level === bird.level })}
            variant="secondary"
          >
            {bird.text}
          </Button>
        ))}
      </ButtonGroup>
    </HeaderWrapper>
  );
};

export default Header;
