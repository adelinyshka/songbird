import React, { useRef, useLayoutEffect } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import motionPlayOutline from '@iconify/icons-mdi/motion-play-outline';
import motionPauseOutline from '@iconify/icons-mdi/motion-pause-outline';
import volume2 from '@iconify/icons-feather/volume-2';
import volumeX from '@iconify/icons-feather/volume-x';
import PropTypes from 'prop-types';
import birdsData from '../../data/birdsData';
import { levelSelector } from '../../redux/selectors';
import QuestionWrapper from './QuestionWrapper';

const Question = ({ answerID, isRight }) => {
  const level = useSelector(levelSelector);
  const audioQuestion = birdsData[level][answerID - 1].audio;
  const nameBird = birdsData[level][answerID - 1].name;
  const picBird = birdsData[level][answerID - 1].image;
  const picDefaultBird = './assets/img/customBird.jpg';
  const player = useRef(null);

  useLayoutEffect(() => {
    if (player.current !== null && isRight === true) {
      player.current.audio.current.pause();
    }
  }, [isRight]);

  return (
    <QuestionWrapper>
      <div className="default-wrapper">
        {isRight
          ? (
            <>
              <div>
                <img className="bird-pic" src={picBird} alt="" />
              </div>
              <div className="bird-block">
                <h1 className="bird-name">{nameBird}</h1>
                <AudioPlayer
                  ref={player}
                  className="wow-player"
                  layout="stacked-reverse"
                  customProgressBarSection={[
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.PROGRESS_BAR,
                  ]}
                  customControlsSection={[RHAP_UI.VOLUME_CONTROLS]}
                  autoPlay={false}
                  autoPlayAfterSrcChange={false}
                  showJumpControls={false}
                  customAdditionalControls={[]}
                  src={audioQuestion}
                  id={birdsData[level][answerID - 1].id}
                  customIcons={{
                    play: <Icon
                      icon={motionPlayOutline}
                      color="white"
                    />,
                    pause: <Icon
                      icon={motionPauseOutline}
                      color="white"
                    />,
                    volume: <Icon icon={volume2} color="white" />,
                    volumeMute: <Icon icon={volumeX} color="white" />,
                  }}
                />
              </div>
            </>
          )
          : (
            <>
              <div>
                <img className="bird-pic" src={picDefaultBird} alt="" />
              </div>
              <div className="bird-block">
                <h1 className="bird-name-star">*****</h1>
                <AudioPlayer
                  ref={player}
                  className="wow-player"
                  layout="stacked-reverse"
                  customProgressBarSection={[
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.PROGRESS_BAR,
                  ]}
                  customControlsSection={[RHAP_UI.VOLUME_CONTROLS]}
                  customAdditionalControls={[]}
                  autoPlay={false}
                  autoPlayAfterSrcChange={false}
                  showJumpControls={false}
                  src={audioQuestion}
                  id={birdsData[level][answerID - 1].id}
                  customIcons={{
                    play: <Icon
                      icon={motionPlayOutline}
                      color="white"
                    />,
                    pause: <Icon
                      icon={motionPauseOutline}
                      color="white"
                    />,
                    volume: <Icon icon={volume2} color="white" />,
                    volumeMute: <Icon icon={volumeX} color="white" />,
                  }}
                />
              </div>
            </>
          )}
      </div>
    </QuestionWrapper>
  );
};

export default Question;

Question.propTypes = {
  answerID: PropTypes.number.isRequired,
  isRight: PropTypes.bool.isRequired,
};
