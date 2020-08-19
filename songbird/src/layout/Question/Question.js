import React from 'react';
import birdsData from '../../data/birdsData';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Question = ({level, rightAnswer}) => {
	const audioQuestion = birdsData[level][rightAnswer].audio;
	console.log(level);
	console.log(rightAnswer);

	return(
		<div>
			<AudioPlayer
				autoPlay={false} // todo true
				src={audioQuestion}
				onPlay={e => console.log("onPlay")}
		/>
		</div>
	)
}

export default Question;
