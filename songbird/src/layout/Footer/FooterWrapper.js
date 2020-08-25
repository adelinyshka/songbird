import styled from 'styled-components';

const FooterWrapper = styled.footer`

	.footer-btn {
		width: 100%;
		box-sizing: border-box;
		border-radius: 16px;
		font-size: 16px;
		line-height: 26px;
		text-align: center;
		letter-spacing: 0.04em;
		font-family: 'Raleway', sans-serif;
	}
	
	.inactive {
		background: #1F3F68!important;
		color: white;
		border: 3px solid white!important;
		
		@media (max-width: 768px) {
			border: 1px solid white!important;
		}
		
		&:hover,
		&:focus,
		&:active {
			cursor: not-allowed;
			outline: none;
		}
	}
	
	.active {
		background: #5A98D0!important;
		color: white;
	  border: 3px solid white!important;
	  
	  
	  @media (max-width: 768px) {
			border: 1px solid white!important;
		}
	  
	  &:hover,
		&:focus,
		&:active {
			background: #4D83B5;
			outline: none;
		}
	}
`;

export default FooterWrapper;
