import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AnswersBtn from './AnswersBtn/AnswersBtn';
import LeftBlockWrapper from './LeftBlockWrapper';

const LeftBlock = ({ answerID }) => (
  <LeftBlockWrapper>
    <ButtonGroup vertical className="left-btn-wrapper">
      <AnswersBtn answerID={answerID} />
    </ButtonGroup>
  </LeftBlockWrapper>
);

export default LeftBlock;

LeftBlock.propTypes = {
  answerID: PropTypes.number.isRequired,
};
