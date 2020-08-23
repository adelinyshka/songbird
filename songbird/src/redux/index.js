const INITIAL_STATE = {
	statusApp: true,
	score: 0,
	isRight: false,
	level: 0,
	id: 0,
	wasClick: false
};

const songbirdReducer = (state = INITIAL_STATE, action) => {
	const {
		type,
		...payload
	} = action;

	switch (type) {
		case 'SET_ANSWER':
		case 'SET_STATUS_APP':
		case 'SET_SCORE':
		case 'SET_LEVEL':
		case 'SET_ID':
		case 'SET_WAS_CLICK':
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};

export default songbirdReducer;
