import styled from 'styled-components';

const QuestionWrapper = styled.div`

	.default-wrapper {
		display: flex;
		padding: 20px;
		border: 3px solid white;
		border-radius: 16px;
	}
	
	.bird-block {
		width: 100%;
		display: flex;
    flex-direction: column;
    align-self: center;
	}
	
	.bird-pic {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	
	.bird-name {
		font-size: 25px;
		display: flex;
    align-items: center;
    padding: 0 0 0 70px;
		}

	.wow-player.rhap_container {
		background: #316099;
		outline: none;
		box-shadow: none;
	}
	
	.rhap_horizontal-reverse .rhap_controls-section {
    margin-right: 20px;
}
	
	.rhap_progress-indicator,
	.rhap_volume-indicator {
		background: white;
		outline: none;
	}
	
	.rhap_download-progress {
		background: white;
		outline: none;
	}
	
	.rhap_progress-filled {
		background: #2DA3A6;
		outline: none;
	}
	
	.rhap_volume-bar {
		background: white;
	}
	
	.rhap_time.rhap_current-time,
	 .rhap_time.rhap_total-time {
		color: white;
	}
	
`;

export default QuestionWrapper;
