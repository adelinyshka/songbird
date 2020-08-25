import styled from 'styled-components';

const HeaderWrapper = styled.header`
	color: white;
	font-family: 'Raleway', sans-serif;
	
	.wrapper-header {
		display: flex;
		justify-content: space-between;
	}
	
	h1.logo {
		color: white;
		font-weight: bold;
		font-size: 30px;
		font-family: 'Norican', cursive;
		
		@media (max-width: 768px) {
			font-size: 20px;
		}
	}
	
	.score {
		font-size: 25px;
		color: white;
		font-family: 'Raleway', sans-serif;
		
		@media (max-width: 768px) {
		font-size: 20px;
		}
	}
	
	.selected {
		background: #2DA3A6!important;
	}
	
	.header-btn {
		padding: 5px 40px;
		background: #5A98D0;
		border: 2px solid white;
		margin: 0!important;
		font-family: 'Raleway', sans-serif;
		
		@media (max-width: 768px) {
			border: 1px solid white;
		}
	}
	
	.pangination {
		justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin-bottom: 25px;
    border-radius: 5px;
    overflow: hidden;
    font-family: 'Raleway', sans-serif;
    
    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
	}
`;

export default HeaderWrapper;
