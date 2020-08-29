import styled from 'styled-components';

const QuestionWrapper = styled.div`
	.default-wrapper {
		display: flex;
		padding: 20px;
		border: 2px solid white;
		border-radius: 16px;
		font-family: 'Raleway', sans-serif;
		
		@media (max-width: 768px) {
			padding: 10px;
			border: 1px solid white;
		}
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
	
	.bird-name-star {
		font-size: 35px;
		display: flex;
    align-items: center;
    padding: 0 0 0 20px;
    line-height: 1;
    
    @media (max-width: 768px) {
			font-size: 20px;
			padding: 0 0 0 14px;
		}
	}
	
	.bird-name {
		font-size: 25px;
		line-height: 1;
		display: flex;
    align-items: center;
    padding: 0 0 0 20px;
    
     @media (max-width: 768px) {
			font-size: 20px;
			padding: 0 0 0 14px;
			}
		}

	.wow-player.rhap_container {
		background: #316099;
		outline: none;
		box-shadow: none;
		padding: 0;
		
		@media (max-width: 768px) {
			padding: 5px;
		}
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
