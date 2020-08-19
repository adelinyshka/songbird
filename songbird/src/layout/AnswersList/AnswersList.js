import React from 'react';
import birdsData from '../../data/birdsData';
import { shuffle } from '../../utils/Helpers';
import { ButtonGroup, Button } from 'react-bootstrap';

const AnswersList = ({level}) => {
	const arrBirds = birdsData[level].map((bird) => {
		return (
			<ButtonGroup vertical>
				<Button variant="primary">{bird.name}</Button>
			</ButtonGroup>
		)
	})
	return shuffle(arrBirds)
}

export default AnswersList;
