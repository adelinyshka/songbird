import React from 'react';
import birdsData from '../../data/birdsData';
import { useSelector } from 'react-redux';
import {
	idClickedSelector,
	levelSelector,
	wasClickSelector
} from '../../redux/selectors';
import RightBlockWrapper from './RightBlockWrapper';

const RightBlock = () => {
	const level = useSelector(levelSelector);
	const wasClicked = useSelector(wasClickSelector);
	const clickedId = useSelector(idClickedSelector);

	return(
		<RightBlockWrapper>
			{wasClicked
					? <>
						<div>
							{birdsData[level][clickedId].name}
						</div>
						<img src={birdsData[level][clickedId].image} alt="bird pic" />
					</>
					: <p>Послушайте плеер. Выберите птицу из списка</p>
			}
		</RightBlockWrapper>

	)}

export default RightBlock;
