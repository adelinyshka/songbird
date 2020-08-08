import styled from 'styled-components';

const HeaderWrapper = styled.header`
	color: white;
	display: flex;
	justify-content: space-between;
	
	h1.logo {
		color: green;
		font-weight: bold;
	}
	
	.score {
		font-size: 30px;
		color: yellow;
	}
`;

export default HeaderWrapper;
