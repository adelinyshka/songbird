import styled from 'styled-components';

const RightBlockWrapper = styled.div`
	border-radius: 16px;
	border: 2px solid white;
	padding: 10px;
	width: 49%;
	height: 350px;
	
	@media (max-width: 768px) {
		width: 100%;
		margin: 10px 0 0 0;
		border: 1px solid white;
		height: auto;
	}
	
	.bird-text-container {
		display: flex;
    justify-content: center;
    height: 350px;
    font-family: 'Raleway', sans-serif;
    
    @media (max-width: 768px) {
			height: auto;
		}
	}
	
	.bird-pic {
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}
	
	.right-block-bird {
		width: 100%;
		text-align: left;
		font-family: 'Raleway', sans-serif;
	}
	
	.bird-text {
		padding: 20px 0 0 0;
		text-align: left;
		font-family: 'Raleway', sans-serif;
		max-height: 160px;
		overflow: scroll;
	}
	
	.wow-player.rhap_container {
		background: #316099;
		outline: none;
		box-shadow: none;
		width: 100%;
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
	
	.default-wrapper {
		display: flex;
		flex-direction: column;
	}
	
	.bird-text-default {
		align-content: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
	}
	
`;

export default RightBlockWrapper;
