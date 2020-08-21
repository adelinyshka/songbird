import React from 'react';
import birdsData from '../../data/birdsData';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Question = ({level, answerID}) => {
	const audioQuestion = birdsData[level][answerID - 1].audio;
	console.log('answer: ' + birdsData[level][answerID - 1].name);

	return(
		<div>
			<AudioPlayer
				autoPlay={false}
				src={audioQuestion}
				id={birdsData[level][answerID - 1].id}
		/>
		</div>
	)
}

export default Question;
