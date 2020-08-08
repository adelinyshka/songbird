export const setStatusApp = (statusApp) => ({
	type: 'SET_STATUS_APP',
	statusApp,
});

export const setScore = (score) => ({
	type: 'SET_SCORE',
	score,
});

const INITIAL_STATE = {
	statusApp: '',
	score: 0,
};

const songbirdReducer = (state = INITIAL_STATE, action) => {
	const {
		type,
		...payload
	} = action;

	switch (type) {
		case 'SET_STATUS_GAME':
		case 'SET_SCORE':
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};

export default songbirdReducer;
