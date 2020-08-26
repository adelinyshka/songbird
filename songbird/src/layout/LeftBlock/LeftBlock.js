import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
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
