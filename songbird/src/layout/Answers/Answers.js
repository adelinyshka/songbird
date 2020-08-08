import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import AnswersWrapper from './AnswersWrapper';

const Answers = () => {

	return(
		<AnswersWrapper>
			<ButtonGroup aria-label="Basic example">
				<Button
					variant="secondary"
					>Left</Button>
				<Button variant="secondary">Middle</Button>
				<Button variant="secondary">Right</Button>
			</ButtonGroup>
		</AnswersWrapper>
	)
}

export default Answers;
