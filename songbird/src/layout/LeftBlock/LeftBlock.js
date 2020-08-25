import React from 'react';
import AnswersBtn from './AnswersBtn/AnswersBtn';
import { ButtonGroup } from 'react-bootstrap';
import LeftBlockWrapper from './LeftBlockWrapper';

const LeftBlock = ({answerID}) => {

	return(
		<LeftBlockWrapper>
			<ButtonGroup vertical className="left-btn-wrapper">
				<AnswersBtn answerID={answerID}/>
			</ButtonGroup>
		</LeftBlockWrapper>
	)
}

export default LeftBlock;
