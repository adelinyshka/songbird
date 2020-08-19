import React from 'react';
import birdsData from '../../data/birdsData';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Question = ({level, rightAnswer}) => {
	const audioQuestion = birdsData[level][rightAnswer-1].audio;

	return(
		<div>
			<AudioPlayer
				autoPlay={false} // todo true
				src={audioQuestion}
				id={birdsData[level][rightAnswer-1].id}
		/>
		</div>
	)
}

export default Question;
