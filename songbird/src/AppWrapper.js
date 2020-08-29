import styled from 'styled-components';

const AppWrapper = styled.div`
	text-align: center;
	max-width: 1080px;
	margin: 0 auto;
	color: white;
	padding: 10px 20px;
	max-width: 1200px;
	
	@media (max-width: 768px) {
		padding: 10px;
	}
	
	.alignment {
		display: flex;
		justify-content: space-between;
		margin: 15px 0;
		
		@media (max-width: 768px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 10px 0;
		}	
	}
	
	.end-game-wrapper {
			height: calc(100vh - 260px);
	    display: flex;
	    justify-content: center;
	    align-items: center;
		}
	
	.end-game {
		border-radius: 16px;
		border: 3px solid white;
		padding: 20px;
		width: 70%;
		display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
    flex-direction: column;
	
		@media (max-width: 768px) {
			width: 100%;
			padding: 10px;
			border: 1px solid white;	
		}
	}
	
	.end-game-btn {
		background: #5A98D0;
		box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
		border-radius: 10px;
		color: white;
		max-width: 350px;
		width: 60%;
		min-width: 240px;
		height: 50px;
		border: none;
		margin: 5px 0;
		font-family: 'Raleway', sans-serif;
	
		&:hover,
		&:focus {
			outline: none!important;
			background: #1F3F68!important;
			border: transparent!important;
			box-shadow: none!important;
		}
		
		&:active {
			outline: none!important;
			background: #1f3448!important;
			border: transparent!important;
			box-shadow: none!important;
		}
	}
`;

export default AppWrapper;
