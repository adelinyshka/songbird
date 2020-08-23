import React from 'react';
import birdsData from '../../data/birdsData';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import QuestionWrapper from './QuestionWrapper';
import { useSelector } from 'react-redux';
import { levelSelector } from '../../redux/selectors';
import { Icon } from '@iconify/react';
import playButtonR from '@iconify/icons-gg/play-button-r';
import playPauseR from '@iconify/icons-gg/play-pause-r';
import volumeUpSquare from '@iconify/icons-jam/volume-up-square';
import volumeSquare from '@iconify/icons-jam/volume-square';
import {answerRightSelector} from '../../redux/selectors';

const Question = ({ answerID}) => {
	const level = useSelector(levelSelector);
	const audioQuestion = birdsData[level][answerID - 1].audio;
	const isRight = useSelector(answerRightSelector)
	const nameBird = birdsData[level][answerID - 1].name;
	const picBird = birdsData[level][answerID - 1].image;
	const picDefaultBird = './assets/img/customBird.jpg';

	console.log(nameBird);
	return(
		<QuestionWrapper>
			<div className="default-wrapper">
				{isRight
					? <>
						<div>
							<img className="bird-pic" src={picBird} alt="" />

						</div>
					<div className="bird-block">
						<h1 className="bird-name">{nameBird}</h1>
						<AudioPlayer className="wow-player"
						             layout="horizontal-reverse"
						             customProgressBarSection={
							             [
								             RHAP_UI.PROGRESS_BAR,
								             // RHAP_UI.CURRENT_TIME,
								             RHAP_UI.DURATION
							             ]
						             }
						             autoPlay={false}
						             autoPlayAfterSrcChange={false}
						             showJumpControls={false}
						             customAdditionalControls={[]}
						             src={ audioQuestion }
						             id={ birdsData[level][answerID - 1].id }
						             customIcons={{
							             play: <Icon icon={playButtonR} color="white" />,
							             pause: <Icon icon={playPauseR} color="white" />,
							             volume: <Icon icon={volumeUpSquare} color="white" />,
							             volumeMute: <Icon icon={volumeSquare} color="white" />,
						             }}
						/>
					</div>
				</>
					: <>
						<div>
							<img className="bird-pic" src={picDefaultBird} alt="" />
						</div>
						<div className="bird-block">
							<h1 className="bird-name">*****</h1>
							<AudioPlayer className="wow-player"
							             layout="horizontal-reverse"
							             customProgressBarSection={
								             [
									             RHAP_UI.PROGRESS_BAR,
									             // RHAP_UI.CURRENT_TIME,
									             RHAP_UI.DURATION
								             ]
							             }
							             autoPlay={false}
							             autoPlayAfterSrcChange={false}
							             showJumpControls={false}
							             customAdditionalControls={[]}
							             src={ audioQuestion }
							             id={ birdsData[level][answerID - 1].id }
							             customIcons={{
								             play: <Icon icon={playButtonR} color="white" />,
								             pause: <Icon icon={playPauseR} color="white" />,
								             volume: <Icon icon={volumeUpSquare} color="white" />,
								             volumeMute: <Icon icon={volumeSquare} color="white" />,
							             }}/>
						</div>
					</>}
			</div>

		</QuestionWrapper>
	)
}

export default Question;
