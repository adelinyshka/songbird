export const setStatusApp = (statusApp) => ({
	type: 'SET_STATUS_APP',
	statusApp,
});

export const setScore = (score) => ({
	type: 'SET_SCORE',
	score,
});

export const setAnswerRight = (numberOfRightAnswer) => ({
	type: 'SET_ANSWER',
	numberOfRightAnswer,
});

const INITIAL_STATE = {
	statusApp: '',
	score: 0,
	numberOfRightAnswer: 6,
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
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};

export default songbirdReducer;
