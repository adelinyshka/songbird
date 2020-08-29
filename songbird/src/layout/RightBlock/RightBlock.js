import React from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { Icon } from '@iconify/react';
import motionPlayOutline from '@iconify/icons-mdi/motion-play-outline';
import motionPauseOutline from '@iconify/icons-mdi/motion-pause-outline';
import volume2 from '@iconify/icons-feather/volume-2';
import volumeX from '@iconify/icons-feather/volume-x';
import PropTypes from 'prop-types';
import RightBlockWrapper from './RightBlockWrapper';
import {
  idClickedSelector,
  levelSelector,
  wasClickSelector,
} from '../../redux/selectors';
import birdsData from '../../data/birdsData';

const RightBlock = ({ answerID }) => {
  const level = useSelector(levelSelector);
  const wasClicked = useSelector(wasClickSelector);
  const clickedId = useSelector(idClickedSelector);
  const audioQuestion = birdsData[level][clickedId].audio;

  return (
    <RightBlockWrapper>
      {wasClicked
        ? (
          <>
            <div className="d-flex">
              <img
                className="bird-pic"
                src={birdsData[level][clickedId].image}
                alt="bird pic"
              />
              <div className="right-block-bird">
                <div className="pl-3 font-weight-bold">
                  {birdsData[level][clickedId].name}
                </div>
                <div className="pl-3">
                  {birdsData[level][clickedId].species}
                </div>

                <AudioPlayer
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
                    play: <Icon icon={motionPlayOutline} color="white" />,
                    pause: <Icon icon={motionPauseOutline} color="white" />,
                    volume: <Icon icon={volume2} color="white" />,
                    volumeMute: <Icon icon={volumeX} color="white" />,
                  }}
                />
              </div>
            </div>
            <p className="bird-text">
              {birdsData[level][clickedId].description}
            </p>
          </>
        )
        : (
          <div className="bird-text-container">
            <div className="bird-text-default">
              <p>Послушайте плеер.</p>
              <p>Выберите птицу из списка</p>
            </div>
          </div>
        )}
    </RightBlockWrapper>
  );
};

export default RightBlock;

RightBlock.propTypes = {
  answerID: PropTypes.number.isRequired,
};
