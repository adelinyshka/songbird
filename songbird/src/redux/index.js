const INITIAL_STATE = {
	statusApp: '',
	score: 0,
	isRight: false,
	level: 0,
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
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};

export default songbirdReducer;
