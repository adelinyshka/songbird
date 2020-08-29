import styled from 'styled-components';

const AnswersBtnWrapper = styled.button`
		background: #5A98D0;
		box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
		border-radius: 10px;
		color: white;
		width: 100%;
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
	
	@media (max-width: 768px) {
		height: 35px;
	}
	
	.right { background: #2DA3A6; }
	
	.wrong { background: #99407D; }
`;

export default AnswersBtnWrapper;
