import styled from 'styled-components';

const AppWrapper = styled.div`
	text-align: center;
	max-width: 1080px;
	margin: 0 auto;
	color: white;
	padding: 30px;
	max-width: 1200px;
	
	@media (max-width: 768px) {
		padding: 10px;
	}
	
	.alignment {
		display: flex;
		justify-content: space-between;
		margin: 20px 0;
		
		@media (max-width: 768px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 10px 0;
		}	
	}
`;

export default AppWrapper;
