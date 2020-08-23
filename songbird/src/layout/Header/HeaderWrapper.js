import styled from 'styled-components';

const HeaderWrapper = styled.header`
	color: white;
	
	.wrapper-header {
		display: flex;
		justify-content: space-between;
	}
	
	h1.logo {
		color: white;
		font-weight: bold;
	}
	
	.score {
		font-size: 30px;
		color: white;
	}
	
	.selected {
		background: #2DA3A6!important;
	}
	
	.header-btn {
		padding: 5px 40px;
		background: #5A98D0;
		border: 2px solid white;
	}
	
	.pangination {
		justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin-bottom: 25px;
    border-radius: 5px;
    overflow: hidden;
	}
`;

export default HeaderWrapper;
