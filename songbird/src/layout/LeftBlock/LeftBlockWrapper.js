import styled from 'styled-components';

const LeftBlockWrapper = styled.div`
	border-radius: 16px;
	border: 3px solid white;
	padding: 20px;
	width: 49%;
	
	@media (max-width: 768px) {
		width: 100%;
		padding: 10px;
		border: 1px solid white;
	}
	
	.left-btn-wrapper {
		width: 100%;
		flex-direction: column;
    justify-content: space-between;
    align-self: auto;
    height: 400px;
    
    @media (max-width: 768px) {
      height: auto;
    }
	}
`;

export default LeftBlockWrapper;
