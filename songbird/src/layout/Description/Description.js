import React from 'react';
import birdsData from '../../data/birdsData';
import { useSelector } from 'react-redux';
import { levelSelector } from '../../redux/selectors';


const Description = ({answerID}) => {
	const level = useSelector(levelSelector);

	return(
		<div>
				<div>
					{birdsData[level][answerID - 1].name}
				</div>
			<img src={birdsData[level][answerID - 1].image} alt="bird pic" />
		</div>
			)
	}

export default Description;
