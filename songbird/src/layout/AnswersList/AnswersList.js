import React, { useEffect, useState } from 'react';
import birdsData from '../../data/birdsData';
import { shuffle } from './../../utils/Helpers';

const AnswersList = ({level}) => {
	const arrBirds = birdsData[level].map((bird) => {
		return (
			<div>{bird.name}</div>
		)
	})

	return shuffle(arrBirds)
}

export default AnswersList;
