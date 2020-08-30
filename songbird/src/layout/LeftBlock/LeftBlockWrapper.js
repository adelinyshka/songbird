import styled from 'styled-components';

const LeftBlockWrapper = styled.div`
	border-radius: 16px;
	border: 2px solid white;
	padding: 10px;
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
    height: 329px;

    
    @media (max-width: 768px) {
      height: auto;
    }
	}
`;

export default LeftBlockWrapper;
